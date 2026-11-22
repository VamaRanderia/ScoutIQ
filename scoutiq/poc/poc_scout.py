import os
import sys
import json
import urllib.request
import urllib.error

def load_sources(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        return json.load(f)

def run_llm_verification(objective, sources, api_key):
    prompt_content = f"""
You are the ScoutIQ Verification Engine (Product Management Case Study - Illustrative Data).
Business Objective: {objective['prompt']}

Candidate Sources:
{json.dumps(sources, indent=2)}

Task:
Extract technical and operational claims for each company.
Classify each claim into one of four statuses:
1. "Verified fact" (corroborated by Tier-1 peer-reviewed journal or government permit)
2. "Company-reported claim" (self-reported whitepaper or press release)
3. "AI-generated inference" (extrapolation based on engineering parameters)
4. "Could not be verified" (claimed without independent corroboration)

Compute weighted fit score (0-100) based on:
- Technical Maturity (weight: {objective['weights']['technicalMaturity']})
- Industrial Scalability (weight: {objective['weights']['industrialScalability']})
- IP Strength (weight: {objective['weights']['ipStrength']})
- Commercial Alignment (weight: {objective['weights']['commercialAlignment']})
- Performance Yield (weight: {objective['weights']['performanceYield']})

Return strictly valid JSON matching:
{{
  "objective": "{objective['title']}",
  "ranked_shortlist": [
    {{
      "rank": 1,
      "company": "Company Name",
      "fit_score": 94,
      "evaluated_trl": 7,
      "claims": [
        {{
          "claim": "text",
          "status": "Verified fact",
          "source_id": "id",
          "confidence": 0.95
        }}
      ],
      "recommendation": "text"
    }}
  ]
}}
"""
    headers = {
        "Content-Type": "application/json"
    }
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={api_key}"
    payload = {
        "contents": [{"parts": [{"text": prompt_content}]}],
        "generationConfig": {
            "responseMimeType": "application/json",
            "temperature": 0.2
        }
    }
    req = urllib.request.Request(url, data=json.dumps(payload).encode("utf-8"), headers=headers)
    with urllib.request.urlopen(req, timeout=30) as resp:
        result = json.loads(resp.read().decode("utf-8"))
        text = result["candidates"][0]["content"]["parts"][0]["text"]
        return json.loads(text)

def run_local_rule_verification(objective, sources):
    companies = {}
    for s in sources:
        cname = s["company"]
        if cname not in companies:
            companies[cname] = {
                "name": cname,
                "sources": [],
                "claims": []
            }
        companies[cname]["sources"].append(s)

    for cname, data in companies.items():
        if "Circura" in cname:
            data["evaluated_trl"] = 7
            data["fit_score"] = 94
            data["recommendation"] = "Priority 1: Immediate sample assay and JDA negotiation for continuous pilot integration."
            data["claims"] = [
                {
                    "claim": "Continuous hydrometallurgical pilot operating at 1,000 t/year capacity in Stuttgart.",
                    "status": "Verified fact",
                    "source_id": "src-fraunhofer-audit-2024",
                    "confidence": 0.98
                },
                {
                    "claim": "Achieves 95.8% recovery yield of battery-grade lithium carbonate (>99.6% purity).",
                    "status": "Verified fact",
                    "source_id": "src-eur-j-metallurgy-2024",
                    "confidence": 0.96
                },
                {
                    "claim": "Assignee of granted patent covering selective organic acid leaching without chlorine emissions.",
                    "status": "Verified fact",
                    "source_id": "src-epo-patent-ep3892011b1",
                    "confidence": 0.99
                },
                {
                    "claim": "Reduces cradle-to-gate greenhouse gas emissions by 68% compared to pyrometallurgical smelting.",
                    "status": "Company-reported claim",
                    "source_id": "src-circura-whitepaper-2024",
                    "confidence": 0.74
                },
                {
                    "claim": "Commercial capex estimated at $42M with EBITDA positive return at 8,000 t/year utilization.",
                    "status": "AI-generated inference",
                    "source_id": "scoutiq-techno-economic-model",
                    "confidence": 0.68
                },
                {
                    "claim": "Secured commercial off-take contract for 3,000 t/year with German OEM.",
                    "status": "Could not be verified",
                    "source_id": "unverified-press-claim",
                    "confidence": 0.22
                }
            ]
        elif "HydraVolt" in cname:
            data["evaluated_trl"] = 6
            data["fit_score"] = 89
            data["recommendation"] = "Priority 2: Qualified secondary partner; audit ambient solvent loss rates."
            data["claims"] = [
                {
                    "claim": "Operates 500 t/year demonstration facility in Hamilton, Ontario under environmental permit.",
                    "status": "Verified fact",
                    "source_id": "src-ontario-env-permit-2023",
                    "confidence": 0.97
                },
                {
                    "claim": "Demonstrates 94.2% lithium extraction without requiring high-pressure autoclaves.",
                    "status": "Verified fact",
                    "source_id": "src-canadian-j-chem-2023",
                    "confidence": 0.94
                },
                {
                    "claim": "Proprietary ionic liquid solvent regenerates with 99% efficiency over 50 cycles.",
                    "status": "Company-reported claim",
                    "source_id": "hydravolt-pitch-deck-2024",
                    "confidence": 0.62
                },
                {
                    "claim": "Single supplier dependency on specialty quaternary ammonium salts.",
                    "status": "AI-generated inference",
                    "source_id": "scoutiq-chemical-supply-analyzer",
                    "confidence": 0.71
                }
            ]
        elif "PyroLoop" in cname:
            data["evaluated_trl"] = 8
            data["fit_score"] = 82
            data["recommendation"] = "Priority 3: High throughput stopgap; trade-off on lithium recovery and carbon emissions."
            data["claims"] = [
                {
                    "claim": "Operates 15,000 t/year commercial pyrometallurgical furnace in Lyon under environmental authorization.",
                    "status": "Verified fact",
                    "source_id": "src-french-dreal-permit-2022",
                    "confidence": 0.99
                },
                {
                    "claim": "New secondary fluxing process recovers 85% of lithium from smelting slag.",
                    "status": "Could not be verified",
                    "source_id": "src-pyroloop-pr-2024",
                    "confidence": 0.28
                },
                {
                    "claim": "Carbon footprint exceeding 3.8 kg CO2/kg creates compliance risk under 2027 EU Battery Regulation.",
                    "status": "AI-generated inference",
                    "source_id": "scoutiq-lca-regulatory-engine",
                    "confidence": 0.89
                }
            ]

    sorted_companies = sorted(companies.values(), key=lambda x: x["fit_score"], reverse=True)
    shortlist = []
    for idx, c in enumerate(sorted_companies, 1):
        shortlist.append({
            "rank": idx,
            "company": c["name"],
            "fit_score": c["fit_score"],
            "evaluated_trl": c["evaluated_trl"],
            "claims": c["claims"],
            "recommendation": c["recommendation"]
        })

    return {
        "_meta": {
            "title": "ScoutIQ Proof of Concept Pipeline",
            "status": "Product Management Case Study - Illustrative Data",
            "mode": "Deterministic Verification & Scoring Engine"
        },
        "objective": objective["title"],
        "ranked_shortlist": shortlist
    }

def main():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    sources_file = os.path.join(base_dir, "sources.json")
    sources = load_sources(sources_file)

    objective = {
        "title": "Closed-Loop EV Battery Recycling & Hydrometallurgical Purity",
        "prompt": "Identify emerging technology providers specializing in closed-loop hydrometallurgical recycling of EV batteries with >95% lithium recovery and continuous pilot operations in EU/NA.",
        "weights": {
            "technicalMaturity": 25,
            "industrialScalability": 25,
            "ipStrength": 20,
            "commercialAlignment": 15,
            "performanceYield": 15
        }
    }

    api_key = os.environ.get("GEMINI_API_KEY")
    if api_key:
        try:
            output = run_llm_verification(objective, sources, api_key)
        except Exception:
            output = run_local_rule_verification(objective, sources)
    else:
        output = run_local_rule_verification(objective, sources)

    out_file = os.path.join(base_dir, "sample_output.json")
    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(output, f, indent=2)

    print(f"ScoutIQ POC successfully executed.")
    print(f"Generated {len(output['ranked_shortlist'])} ranked candidates.")
    print(f"Output saved to: {out_file}")

if __name__ == "__main__":
    main()
