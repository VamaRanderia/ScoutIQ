# Product Management Case Study: ScoutIQ
## Deliverable 01: Product Discovery & Opportunity Assessment

> **Case Study Notice:** This document is part of my **Product Management Case Study** on ScoutIQ. It represents my original product discovery, customer research, and opportunity framing. ScoutIQ is a conceptual product and working prototype, not a deployed commercial application. All startups, organizations, quantitative metrics, benchmark datasets, and quotes referenced herein are **fictional** and constitute **illustrative data** created for demonstration purposes.

---

### 1. The Genesis: What I Observed in the Field

When I began exploring how Fortune 500 enterprises partner with emerging technology startups, I spent several weeks shadowing the open innovation and engineering teams at a tier-1 global automotive OEM. 

Their powertrain division was under immense pressure: the European Union Battery Regulation and US Inflation Reduction Act had introduced stringent circularity and recycled material quotas starting in 2027. The VP of Powertrain handed our lead scout a clear mandate: *"Find the top 3 startup partners in Europe or North America specializing in closed-loop hydrometallurgical recycling who can recover $>95\%$ battery-grade lithium from our scrap cells."*

What followed was painful to watch. The team spent 30+ hours over two weeks bouncing between PitchBook, Google Patents, scientific journals, and corporate websites. They compiled a 50-row spreadsheet of company names, but when they presented their top recommendations to the Director of Materials Engineering, the meeting stalled immediately. The engineering team asked basic technical questions:
* *Was this 98% yield achieved on pure synthetic cathode salts or contaminated industrial black mass?*
* *Is this patent granted, or is it just an unexamined provisional application?*
* *Do they operate an actual continuous pilot plant, or is this just a benchtop batch experiment?*

The innovation scouts couldn't answer because their tools only indexed funding rounds, headcounts, and self-reported marketing blurbs. The scouts were frustrated, the engineers felt their time was wasted, and the corporate mandate remained unfulfilled.

#### 1.1 The Core Problem Statement
Enterprise innovation and corporate R&D teams lose weeks of high-value engineering time manually cross-referencing fragmented databases, patents, and academic literature because existing venture platforms prioritize funding publicity over technical validation. As a result, technical leaders routinely reject scouted startups during technical due diligence due to uncorroborated performance assertions, lack of patent defensibility, and opaque readiness metrics.

> **How Might We** enable enterprise innovation teams to transform ambiguous technology challenges into auditable, ranked shortlists of viable startup partners backed by source-attributed evidence, reducing evaluation cycles from weeks to minutes while eliminating unverified technical claims?

---

### 2. User Personas: The Three Stakeholders I Interviewed

To ensure I wasn't just solving a localized problem for one team, I mapped out the three distinct enterprise stakeholders who must align before any startup partnership, pilot, or investment is approved.

#### Persona 1: Elena Rostova — Lead Open Innovation Scout (My Primary Persona)
* **Organization:** Global Automotive OEM (Passenger & Commercial EV Division)
* **Role & Mandate:** Identifies external startups, novel materials, and advanced manufacturing processes to feed the OEM's 3–7 year powertrain roadmap.
* **Goals:**
  * Rapidly deliver vetted, executive-ready shortlists of viable startup partners for pressing engineering bottlenecks.
  * Filter out market hype and eliminate unverified marketing claims before presenting to senior engineering leadership.
  * Build defensible business cases backed by primary citations (patents, peer-reviewed journals, pilot deployments).
* **Pain Points:**
  * Drowning in shallow venture database profiles that lack technical depth.
  * Spending 30–40 hours per scouting brief cross-referencing claims across Google Patents, PitchBook, and scientific literature.
  * High personal reputational risk if an endorsed startup turns out to be "vaporware" during technical due diligence.
* **Current Tools:** PitchBook, Crunchbase, Google Patents, Google Scholar, LinkedIn, Excel trackers, PowerPoint syntheses.
* **Decision Criteria:** Strategic alignment with company engineering constraints, verified pilot operation, patent defensibility, geographic proximity to battery gigafactories.
* **Jobs-to-be-Done (JTBD):**
  * *Functional:* Aggregate and synthesize all technical, operational, and commercial data regarding specific technology niches into a structured decision matrix.
  * *Emotional:* Feel confident and respected when presenting partner candidates to skeptical engineering directors.
  * *Social:* Position the Open Innovation division as an indispensable strategic accelerator rather than an administrative cost center.
* **Representative Quote (*Illustrative data*):**  
  > *"PitchBook tells me who raised \$50M, but it cannot tell me if their hydrometallurgical recovery process produces battery-grade cathode precursor or if their continuous flow reactor actually works at pilot scale."*

---

#### Persona 2: Dr. Marcus Vance — Director of Battery & Materials Engineering (Technical Evaluator)
* **Organization:** Global Automotive OEM (R&D / Advanced Engineering)
* **Role & Mandate:** Governs technical feasibility, chemistry qualification, and pilot plant integration for future EV architectures.
* **Goals:**
  * Ensure external technologies meet rigorous metallurgical, purity, and thermal safety thresholds.
  * Assess independent scientific evidence and patent claims before allocating bench testing or lab resources.
  * Mitigate intellectual property infringement or freedom-to-operate risks.
* **Pain Points:**
  * Innovation teams forward superficial slide decks with sensationalized startup claims lacking test protocols.
  * Inability to verify whether reported recovery rates (e.g., >95% Lithium) were achieved on pure laboratory samples or contaminated real-world "black mass".
  * Wasted engineering team bandwidth reviewing startups that have zero granted patents or proprietary IP.
* **Current Tools:** SciFinder, IEEE Xplore, USPTO/EPO Espacenet, internal metallurgical bench databases.
* **Decision Criteria:** Purity yield metrics, operating temperature/energy balance, independent test reports, granted claims in key jurisdictions.
* **Jobs-to-be-Done (JTBD):**
  * *Functional:* Verify the scientific validity and engineering repeatability of external partner claims before authorising physical sample testing.
  * *Emotional:* Guard against costly engineering dead-ends or reputational embarrassment within the engineering council.
  * *Social:* Champion truly innovative breakthroughs that accelerate corporate carbon-neutrality targets without risking production downtime.
* **Representative Quote (*Illustrative data*):**  
  > *"I don't care about their seed round or flashy branding. Show me the XRD spectra, the independent purity assays, their granted patent claims, and who supplied their feed stock."*

---

#### Persona 3: Maya Chen — Investment Associate, Corporate Venture Capital (CVC) (Capital Allocator)
* **Organization:** Corporate Mobility Ventures (Strategic Investment Arm)
* **Role & Mandate:** Executes strategic minority investments and joint ventures in early- and growth-stage climate-tech and mobility startups.
* **Goals:**
  * Balance financial return targets with strategic corporate synergy (commercial off-take agreements, joint development).
  * Validate market size, competitor density, capitalization tables, and executive team technical pedigree.
  * Track round dynamics and syndication opportunities alongside top-tier climate funds.
* **Pain Points:**
  * Disconnect between corporate R&D priorities and financial deal flow; startups approved by R&D often have broken cap tables or unviable unit economics.
  * Commercial databases categorize startups under broad generic labels (e.g., "Recycling") without differentiating fundamental chemistry (pyrometallurgy vs. direct cathode regeneration).
  * Inability to trace commercial pilot momentum and customer off-take proof points.
* **Current Tools:** PitchBook, Crunchbase, Affinity CRM, Pitch decks, Carta, SEC EDGAR.
* **Decision Criteria:** Cap table structure, valuation multiples, strategic alignment with OEM off-take, tier-1 co-investors, commercial traction.
* **Jobs-to-be-Done (JTBD):**
  * *Functional:* Screen and rank target companies based on both venture investability and technical relevance to the parent OEM.
  * *Emotional:* Prevent corporate executives from bypassing CVC to sign non-strategic, overpriced commercial pilots.
  * *Social:* Demonstrate clear strategic return on investment (ROI) to the corporate investment committee.
* **Representative Quote (*Illustrative data*):**  
  > *"A startup might have brilliant chemistry, but if their pilot requires \$100M of capex before first revenue and their unit economics don't scale, they aren't an investable partner."*

---

### 3. User Journey Map: How Elena Currently Works vs. The ScoutIQ Opportunity

To pinpoint where the product needed to intervene, I mapped Elena's existing manual journey across all 7 stages:

| Stage | What Elena Does | Tools She Uses | Her Pain Points | How She Feels | Where ScoutIQ Intervenes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1. Define Challenge** | Receives an open brief from the VP: "Find closed-loop battery recycling startups in EU/NA with TRL $\ge$ 6." Translates the mandate into keyword queries. | Jira, Word, Slack, Internal Wiki | Challenge scope is ambiguous; keywords are either too broad ("clean recycling") or too restrictive ("citric acid hydrometallurgy"). | Confused, overwhelmed | **Semantic Objective Formulation:** Free-text challenge parser that decomposes prompts into industry, taxonomy, TRL bounds, and criteria weights. |
| **2. Discover** | Queries venture databases, attends webinars, searches Google Patents and Google Scholar. Compiles initial list of 40–50 candidate companies. | PitchBook, Crunchbase, Google, Espacenet, LinkedIn | 70% of search results are irrelevant; databases rely on stale self-selected tags. Niche university spin-outs missed. | Frustrated, fatigued | **Multi-Source Autonomous Aggregation:** Cross-index startup directories, patent registries, preprint servers, and industrial press in parallel. |
| **3. Evaluate** | Reads pitch decks, one-pagers, and company websites to extract claimed recovery yields, facility locations, and chemistries. | PDF viewers, Excel, Notion | Inconsistent metrics; marketing claims masquerade as engineering facts; no standard baseline for comparison. | Skeptical, anxious | **Entity & Metric Extraction:** Extract structured parameters (TRL, yield %, energy input, feed compatibility) into a unified schema. |
| **4. Verify** | Manually checks patent offices to see if patents are actually granted or just filed; searches academic literature for corroborating test data. | Espacenet, Google Scholar, News archives | Takes 30+ hours per brief. Impossible to verify if customer pilots are binding off-takes or unpaid LOIs. | Distrusted, exhausted | **Evidence Verification Engine:** 4-tier claim attribution classifying findings into Verified Fact, Company Claim, AI Inference, or Unverifiable. |
| **5. Compare** | Builds an unwieldy 15-column comparison spreadsheet. Normalizes dissimilar data points manually. | Microsoft Excel, Google Sheets | Hard to weight criteria objectively; team members argue based on subjective gut feeling or recent press mentions. | Contentious, subjective | **Weighted Fit Scoring:** Transparent ranking model weighted against company constraints rather than VC funding or popularity. |
| **6. Decide** | Conducts alignment session with R&D Director and CVC Analyst to down-select from 12 candidates to a top 3 shortlist. | Miro, Zoom, PowerPoint | R&D rejects 2 candidates due to unverified purity data; CVC rejects 1 due to geographic mismatch. Days of rework needed. | Stressed, defensive | **Interactive Decision Matrix:** Dynamic weight sliders and instant trade-off visibility across technical, commercial, and IP factors. |
| **7. Report** | Authors a 25-page executive briefing deck summarizing methodology, vendor profiles, patent analysis, and recommendations. | Microsoft PowerPoint | Manual deck assembly takes 8–12 hours; static slides quickly become obsolete as market moves. | Relieved but drained | **Automated Defensible Reporting:** One-click executive dossier generation with full provenance audit trail and print-ready PDF export. |

---

### 4. Ranked Opportunity Areas & My Guiding Product Insight

#### 4.1 How I Ranked the Opportunities
Based on these discovery sessions, I scored and ranked the four primary intervention areas by business impact and engineering leverage:

1. **Rank 1: Source Provenance & Evidence Verification (The Core Differentiator)**
   * *Why I ranked this #1:* Finding company names is cheap; verifying whether their technical claims are backed by granted patents, independent lab tests, or regulatory permits is what unblocks corporate adoption. Eliminating unverified claims upfront prevents downstream engineering rejection.
2. **Rank 2: Objective-Aligned Fit Scoring vs. Venture Hype**
   * *Why I ranked this #2:* General search engines rank by popularity or total venture funding. Enterprise innovation teams need ranking based on their specific operational constraints (e.g., compatibility with NMC811 chemistry, pilot throughput, minimum TRL).
3. **Rank 3: Multi-Source Entity Extraction**
   * *Why I ranked this #3:* Bridging the gap between scientific literature (TRL 2–4), patent databases (TRL 3–6), and commercial directories (TRL 6–9) eliminates 80% of manual data entry.
4. **Rank 4: Enterprise Audit Trails & Governance Reporting**
   * *Why I ranked this #4:* Enterprise innovation requires defensible decisions that can withstand review by internal audit, procurement, and executive boards.

#### 4.2 The Insight That Shaped the Product: "Trust and Verification, Not Search"
Early in the project, it became obvious to me that **technology scouting is an evidence verification problem, not an information retrieval problem.**
* Generative AI chatbots offer quick answers, but enterprise engineering teams require **defensible proof**.
* When an innovation scout pitches a startup to an engineering director, every unverified claim is an existential liability.
* By pivoting from *"Here are 50 startups tagged battery recycling"* to *"Here are the top 3 startups whose claims are verified against patent filings and independent publications, ranked by your specific constraints,"* ScoutIQ solves the trust deficit that paralyzes corporate innovation.

---

### 5. Discovery Flow: Before vs. After ScoutIQ

```mermaid
flowchart TD
    subgraph Traditional_Broken_Workflow["Traditional Manual Workflow (14-21 Days)"]
        A[Corporate Innovation Brief] --> B[Ad-hoc Keyword Queries in PitchBook/Google]
        B --> C[Messy 50-Row Excel Sheet]
        C --> D[Manual Google Patent & Scholar Cross-Checks]
        D --> E{Claims Verifiable?}
        E -- No / Unknown --> F[Subjective Internal Debate & Guesswork]
        E -- Yes --> G[Manual PowerPoint Assembly]
        F --> G
        G --> H[Technical Due Diligence Rejection / Rework]
    end

    subgraph ScoutIQ_Workflow["ScoutIQ Automated Intelligence Workflow (< 30 Minutes)"]
        S1[Structured Business Objective & Constraints] --> S2[Multi-Source Agentic Retrieval<br/>Patents, Papers, News, Registries]
        S2 --> S3[Entity & Technical Parameter Extraction]
        S3 --> S4[Evidence Verification Engine<br/>4-Status Attribution Badge]
        S4 --> S5[Constraint-Weighted Fit Scoring Model<br/>Fit to Problem, Not VC Hype]
        S5 --> S6[Defensible Executive Shortlist & PDF Dossier]
    end

    style Traditional_Broken_Workflow fill:#fff1f0,stroke:#ffa39e,stroke-width:1px
    style ScoutIQ_Workflow fill:#f6ffed,stroke:#b7eb8f,stroke-width:1px
```

---
*End of Deliverable 01: Product Discovery & Opportunity Assessment (ScoutIQ PM Case Study — Illustrative Data).*
