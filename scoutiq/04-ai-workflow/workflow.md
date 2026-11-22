# Product Management Case Study: ScoutIQ
## Deliverable 04-A: AI Agent Workflow Specification & Verification Logic

> **Document Status:** Product Management Case Study & Prototype Specification  
> **Notice:** This document is part of a Product Management case study. ScoutIQ is a conceptual product and working software prototype, not a deployed commercial application. All algorithms, benchmarks, API calls, and datasets described herein represent conceptual product architecture and **illustrative data** created for case study demonstration.

---

### 1. End-to-End Agent Workflow Overview

ScoutIQ orchestrates an 8-stage agentic workflow designed to transform an enterprise business challenge into an auditable, evidence-backed shortlist of technology partners.

The system departs from standard Retrieval-Augmented Generation (RAG) by enforcing a strict **Claim Verification Gate** before ranking, ensuring that uncorroborated marketing claims cannot artificially inflate a candidate's position.

```
[1. Objective Understanding]
           │
           ▼
[2. Query Planning]
           │
           ▼
[3. Multi-Source Retrieval] (Patents, Preprints, Registries, News, Web)
           │
           ▼
[4. Technology & Entity Extraction]
           │
           ▼
[5. Claim Verification Engine] (4-Tier Credibility Attribution)
           │
           ▼
[6. Constraint-Weighted Ranking] (Fit-to-Problem vs. Hype)
           │
           ▼
[7. Shortlist Generation]
           │
           ▼
[8. Human Review Loop] (Interactive Canvas & Weight Adjustment)
```

---

### 2. Stage-by-Stage Operational Specifications

#### Stage 1: Objective Understanding & Intent Decomposition
* **Purpose:** Translates ambiguous natural-language business prompts into structured ontology parameters and mathematical optimization bounds.
* **Inputs:** Raw user prompt (e.g., *"Find closed-loop EV battery recycling startups in Europe with $>95\%$ lithium recovery and operating pilot plants"*), target industry, geographic constraints, TRL boundaries, must-have flags.
* **Outputs:** Structured JSON search configuration schema containing domain keywords, chemical/physical process classifications (IPC/CPC classes), numeric performance thresholds, and normalized weight vectors.
* **Tools / Models:** Gemini 1.5 Pro / GPT-4o with structured JSON schema outputs (`response_format: { type: "json_schema" }`).
* **Failure Modes:** Ambiguous acronyms (e.g., "NMC" interpreted as non-metallic coating rather than Nickel-Manganese-Cobalt cathode chemistry); over-constraining query leading to zero results.
* **Guardrails:** Domain dictionary validation against EMBL/EBI and chemical ontologies; semantic fallback triggers that notify user when constraints are mutually exclusive.

#### Stage 2: Autonomous Query Planning
* **Purpose:** Generates targeted, syntax-specific query vectors for disparate external indices.
* **Inputs:** Structured objective schema from Stage 1.
* **Outputs:** Multi-modal query plans:
  * *Patent Query:* Boolean query strings with IPC/CPC codes (e.g., `(CPC: Y02W30/84 OR H01M10/54) AND ("citric acid" OR "hydrometallurg*")`).
  * *Academic Query:* Title/Abstract semantic embeddings for preprint servers (arXiv, ChemRxiv, CrossRef).
  * *Regulatory Query:* Facility registry permits and environmental monitoring filings.
  * *Commercial Query:* Startup venture registries and corporate announcement filters.
* **Tools / Models:** Query Generation LLM Agent equipped with domain-specific DSL compiler.
* **Failure Modes:** Overly broad Boolean syntax causing rate limit exhaustion; missing regional patent synonyms across jurisdictions (e.g., USPTO vs. EPO vs. CNIPA).
* **Guardrails:** Syntax-checking compiler and token budget caps per source index before API dispatch.

#### Stage 3: Multi-Source Retrieval
* **Purpose:** Concurrently queries heterogeneous data sources to extract raw unstructured and semi-structured documents.
* **Inputs:** Dispatched query plans from Stage 2.
* **Outputs:** Raw document corpus: patent XMLs, preprint PDFs, corporate press releases, state environmental filings, conference proceedings.
* **Tools / Models:** Concurrent async scrapers and REST API connectors (EPO OPS, USPTO PatentsView, Semantic Scholar API, open regulatory registries).
* **Failure Modes:** Paywalled literature; rate limiting; IP blocking; stale corporate websites.
* **Guardrails:** Caching layer with 30-day TTL; automated retry with exponential backoff; graceful degradation across secondary public registries.

#### Stage 4: Technology and Entity Extraction
* **Purpose:** Parses unstructured textual bodies into normalized company entities, technical claims, and quantitative performance parameters.
* **Inputs:** Retrieved document corpus from Stage 3.
* **Outputs:** Standardized Candidate Entity Graph: Company Name, Headquarters, Operating TRL, Throughput (t/year), Recovery Yields (%), Chemistry Archetype, Patent Assignee IDs, Partner Organizations.
* **Tools / Models:** LLM Information Extraction Agent utilizing few-shot in-context learning with strict schema enforcement; specialized regex for numeric assay bounds.
* **Failure Modes:** Confusing laboratory bench batch results with commercial continuous throughput; hallucinating entity relationships between unrelated co-filers.
* **Guardrails:** Mandatory span grounding: every extracted attribute must include byte-level source coordinates and text span pointers. Any attribute lacking a verbatim text anchor is discarded.

#### Stage 5: Claim Verification Engine
* **Purpose:** Evaluates extracted technical assertions against source credibility hierarchies and assigns one of four standardized verification badges.
* **Inputs:** Extracted candidate claims and linked source documents.
* **Outputs:** Verified Claim Matrix with credibility scores and attribution badges.
* **Tools / Models:** Cross-encoder NLI (Natural Language Inference) models (Premise: Source Document Text, Hypothesis: Extracted Startup Claim).
* **Failure Modes:** Premise-hypothesis mismatch due to technical jargon differences; false corroboration from syndicated press release duplicates.
* **Guardrails:** Cross-source de-duplication to identify and collapse syndicated PR wires into a single origin claim; enforcement of the 4-Tier Credibility Hierarchy.

#### Stage 6: Constraint-Weighted Ranking
* **Purpose:** Computes the composite Fit Score $S \in [0, 100]$ based on user-defined criteria weights rather than market hype or VC funding.
* **Inputs:** Normalized Candidate Profiles from Stage 4, Verified Claims from Stage 5, User Weight Configuration ($w_1 \dots w_5$).
* **Outputs:** Ranked candidate array with transparent sub-score breakdowns.
* **Tools / Models:** Deterministic multi-attribute utility theory (MAUT) algorithm:
  $$S = \sum_{i=1}^{5} w_i \cdot C_i$$
* **Failure Modes:** High-scoring unverified startups dominating the top rank.
* **Guardrails:** Confidence-penalty discounting: Candidates whose critical performance claims carry a `Could Not Be Verified` badge incur a 15% penalty on that dimension's score.

#### Stage 7: Shortlist Generation & Trade-Off Synthesis
* **Purpose:** Synthesizes the top 3 recommended partners into an executive-ready brief highlighting distinct strategic trade-offs, operational risks, and proposed next steps.
* **Inputs:** Top 3 ranked candidates and their underlying verified evidence sets.
* **Outputs:** Comparative matrix, evidence coverage percentages, and synthesized trade-off narratives.
* **Tools / Models:** Executive Synthesis LLM with strict factual grounding prompts.
* **Failure Modes:** Sycophantic or generic summaries (e.g., "both companies are great choices").
* **Guardrails:** Mandatory contrastive prompting: The model is forced to explicitly identify where Candidate #1 is inferior to Candidate #2, highlighting genuine engineering trade-offs.

#### Stage 8: Human-in-the-Loop Review
* **Purpose:** Provides technical evaluators with an interactive canvas to interrogate findings, adjust weighting sliders, inspect source drawers, and approve the final executive brief.
* **Inputs:** Interactive user adjustments to weight sliders or verification status overrides.
* **Outputs:** Approved, defensible executive dossier ready for executive committee presentation and PDF export.
* **Tools / Models:** React-based interactive canvas with sub-50ms local recalculation and state persistence.
* **Failure Modes:** Confirmation bias where a reviewer forces a preferred vendor to rank higher without reviewing underlying evidence.
* **Guardrails:** System logs both "Default Objective Score" and "User-Adjusted Score" on the final export dossier to maintain governance transparency.

---

### 3. Detailed Evidence Verification Logic

To eliminate hype and hallucinations, ScoutIQ enforces a rigorous multi-tier verification rubric:

#### 3.1 Four-Tier Source Credibility Hierarchy
1. **Tier 1: Legally Audited & Independent Primary Sources (Highest Credibility)**
   * Granted patents from official patent offices (EPO, USPTO, WIPO, CNIPA).
   * Peer-reviewed research papers in indexed journals (Elsevier, Springer, ACS, IEEE).
   * Regulatory permits and industrial facility operating licenses (DREAL, US EPA, German BImSchG).
   * Audited corporate financial disclosures (SEC Form 10-K, EU CSRD filings).
2. **Tier 2: Established Industry Technical Journals & Consortium Data**
   * Technical trade publications with editorial review (e.g., Battery Materials Review, Mining.com, Automotive News).
   * Government research consortium announcements (e.g., EU Horizon Europe, US ARPA-E).
3. **Tier 3: Company Disclosures & Self-Reported Assets**
   * Startup corporate websites, pitch decks, investor presentation materials.
   * Company self-authored whitepapers and corporate press releases.
   * Executive podcast appearances and conference presentations.
4. **Tier 4: Unverified Secondary & Social Media Sources (Lowest Credibility)**
   * Unmoderated blogs, social media posts (X, LinkedIn), forum discussions, aggregated venture database notes.

---

#### 3.2 Four-Status Classification Rules

| Verification Badge | Color Code | Qualification Criteria | Example Finding (*Illustrative*) |
| :--- | :---: | :--- | :--- |
| **Verified Fact** | **Green** | Corroborated by **at least two independent Tier-1/Tier-2 sources** OR a **single legally binding Tier-1 primary document** (e.g., granted patent number or government environmental permit). | *"Continuous hydrometallurgical pilot plant operating at 1,000 t/year capacity in Stuttgart."* (Verified via EPA permit & Fraunhofer audit) |
| **Company-Reported Claim** | **Amber / Blue** | Sourced directly from company disclosures (Tier-3) with **no independent Tier-1 corroboration**, but mathematically plausible and internally consistent. | *"Proprietary process reduces carbon emissions by 68% compared to pyrometallurgy."* (Sourced from company sustainability report) |
| **AI-Generated Inference** | **Purple** | Synthesized by the ScoutIQ model via domain cross-referencing, techno-economic scaling models, or regulatory risk projections. Clearly marked as an extrapolation. | *"Full commercial plant capex projected at \$42M with EBITDA breakeven at 8,000 t/yr."* (Extrapolated from reactor BOM and utility tariffs) |
| **Could Not Be Verified** | **Red** | A specific assertion was made in marketing collateral (e.g., pitch deck), but comprehensive searches across Tier-1 and Tier-2 registries **yielded zero corroborating evidence**, or independent audits contradicted the claim. | *"Claims 3,000 t/year binding off-take contract with leading German OEM."* (Investigated in supply registers; zero evidence found) |

---

#### 3.3 Conflict Resolution & Contradiction Handling
* **Scenario: Startup Claims vs. Published Evidence Conflict:**  
  If a startup claims a 99% lithium recovery yield on its homepage, but an independent journal paper authored by the company's founders records an experimental yield of 92.4% with heavy reagent degradation:
  1. The assertion is categorized under **Could Not Be Verified**.
  2. The system flags an **Evidence Conflict Alert** in the UI.
  3. The verbatim snippet from both the company claim and the independent peer-reviewed paper are displayed side-by-side in the Evidence Drawer with exact page numbers.
  4. The candidate's technical score is computed based on the conservative verified number (92.4%), not the marketing claim.

---
*End of Deliverable 04-A: AI Agent Workflow Specification & Verification Logic (ScoutIQ PM Case Study — Illustrative Data).*
