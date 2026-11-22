# ScoutIQ: Designing an Evidence-First Technology Intelligence Platform
## A Product Management Case Study by a Senior Product Manager

> **Disclaimer & Framing:** This is an end-to-end **Product Management Case Study** with a fully functional interactive prototype. It represents my conceptual product strategy, system design, and frontend/backend prototyping work—it is **not** a commercially deployed product. All company names, data points, patent numbers, and interview excerpts are **fictional** and labeled as **illustrative data** to model a realistic enterprise scenario without making claims about real companies.

---

```
  ┌─────────────────────────────────────────────────────────────────────────────────┐
  │                                QUICK NAVIGATION                                 │
  │  1. The Spark (How I Found the Problem)      5. The Decision: Fit vs. Hype      │
  │  2. What I Saw in the Field (Discovery)      6. Building the Prototype          │
  │  3. The Core Insight: Trust, Not Search      7. The AI Engine & Guardrails      │
  │  4. The 4-Tier Verification Framework        8. Metrics, Launch & Lessons       │
  └─────────────────────────────────────────────────────────────────────────────────┘
```

---

### 1. The Spark: How I Found the Problem

A few months ago, I was embedded with the open innovation team of a major automotive OEM. Their powertrain division had just received an urgent mandate from executive leadership:

> *"The 2027 EU Battery Regulation is going to penalize us heavily unless we close the loop on our battery supply chain. Find us the top 3 startup partners in Europe or North America specializing in continuous hydrometallurgical recycling who can recover at least 95% of battery-grade lithium from our scrap."*

I watched the lead innovation scout, Elena, sit down to tackle this. I assumed she would open an enterprise tool, punch in the parameters, and have a solid list by lunch.

Instead, I watched her spend three full days across **PitchBook, Crunchbase, Google Patents, Google Scholar, and 45 browser tabs**.

By Thursday, she had a spreadsheet with 30 companies. But when she took her top three to Dr. Marcus, the Director of Battery & Materials Engineering, the meeting was over in 15 minutes. Marcus took one look at her top-ranked startup and asked:
* *"Where did you get this 99% lithium recovery number? Their website?"*
* *"Was this tested on clean synthetic cathode powder or real, contaminated black mass?"*
* *"Is this patent granted, or is it just an unexamined application?"*
* *"Do they actually have a working pilot plant, or is this just a benchtop beaker in a university basement?"*

Elena couldn't answer. None of the tools she used gave her that information. She was demoralized, Marcus felt his time was wasted, and the OEM was still nowhere closer to securing a recycling partner.

That was the moment I realized: **enterprise innovation doesn't have a discovery problem. It has an evidence verification problem.**

---

### 2. What I Saw in the Field: User Discovery

To make sure this wasn't just one frustrated team, I conducted user discovery interviews across three key stakeholder archetypes involved in corporate technology adoption (*illustrative data*):

```
       [ Elena Rostova ]                 [ Dr. Marcus Vance ]                  [ Maya Chen ]
       Innovation Scout                  Director of R&D / Engineering         CVC Investment Associate
  "I drown in 40 browser tabs       "Don't show me their seed round.       "Brilliant chemistry is useless
   and spend 30 hours cross-         Show me the XRD spectra, the pilot     if unit economics don't scale
   checking patent claims."          permits, and the granted claims."      at commercial volume."
```

#### The Friction Points I Uncovered:
1. **Financial Bias as a Proxy for Tech Maturity:** Tools like PitchBook rank companies by capital raised. But in automotive manufacturing, venture funding doesn't tell you if a continuous reactor can run without clogging. A startup with \$14M in grant funding and an operating 1,000 t/year pilot in Germany is far more valuable to an OEM than a \$100M Silicon Valley darling with no physical plant.
2. **The "Black Box Claim" Trap:** Startups make bold assertions in pitch decks (*"99% recovery at ambient temperature"*). Scouts pass these along. Engineers distrust them. The handoff between innovation scouts and technical R&D is broken because there is no shared standard of proof.
3. **Data Silos:** To evaluate a single company, an analyst has to synthesize three completely different data universes:
   * *Venture Data:* Who are the founders? Who funded them? (PitchBook / Crunchbase)
   * *Intellectual Property:* Do they own the process or are they infringing? (USPTO / EPO)
   * *Scientific Validity:* Is the underlying reaction kinetics peer-reviewed? (Academic literature)

---

### 3. The Core Product Insight: Trust, Not Search

When AI search engines and LLMs exploded onto the scene, the obvious PM response was: *"Let's build an AI search engine for startups!"*

I rejected that path immediately.

If you give an enterprise innovation team a chatbot that summarizes startups, you haven't solved their problem—you've amplified it. Now, instead of distrusting the startup's marketing team, the engineering director distrusts the AI's hallucinations.

I wrote down the core product thesis that guided every spec in ScoutIQ:
> **"Search engines give answers. Enterprise innovation requires defensible proof. We are not building a discovery engine; we are building an evidence verification and constraint-ranking engine."**

If ScoutIQ couldn't point to the exact document, registry filing, or patent claim that backed an assertion, the system shouldn't display it as fact.

---

### 4. My Solution: The 4-Tier Verification Framework

To solve the trust barrier, I designed a 4-tier claim attribution system. Every performance metric, capacity claim, and partnership assertion in ScoutIQ is tagged with a distinct status and visual badge:

| Verification Badge | Color | What It Means | Real Example from My Prototype (*Illustrative*) |
| :--- | :---: | :--- | :--- |
| **Verified fact** | **Green** | Corroborated by $\ge 2$ independent sources OR an official statutory filing (granted patent, EPA permit, audited report). | *"Continuous hydrometallurgical pilot plant operating at 1,000 t/a capacity in Stuttgart."* (Verified via EPA permit & Fraunhofer audit) |
| **Company-reported claim** | **Amber** | Asserted by the company in a pitch deck, press release, or whitepaper without independent third-party audit. | *"Proprietary process reduces carbon footprint by 68% compared to pyrometallurgy."* (Sourced from company self-published LCA) |
| **AI-generated inference** | **Purple** | Synthesized by the model via techno-economic scaling models or regulatory risk analysis. | *"Commercial plant capex estimated at \$42M with EBITDA breakeven at 8,000 t/year."* (Extrapolated from reactor BOM & utility tariffs) |
| **Could not be verified** | **Red** | Asserted by the startup, but exhaustive searches across patent and regulatory registries found zero proof. | *"Claims 3,000 t/year binding off-take contract with German OEM."* (Investigated in supply registers; zero evidence found) |

#### Why I Insisted on the Red Badge ("Could not be verified")
Early on, a colleague asked: *"Why show unverified claims at all? Why not just filter them out?"*

My decision was deliberate: **surfacing explicit doubt is where real enterprise value lies.**

If a startup is pitching an OEM claiming they have a signed off-take agreement with a competitor, and ScoutIQ flags in red that no public or regulatory record of this agreement exists, I have just saved the innovation team weeks of wasted diligence. Radical transparency builds trust.

---

### 5. The Hardest Product Decision: Fit vs. Popularity Ranking

The single most contentious product decision I made was how to rank startups.

Most platforms rank by popularity: capital raised, headcount growth, or social momentum. If I had followed that convention, **PyroLoop Technologies SAS** would have ranked #1 in our EV recycling scenario:
* *PyroLoop:* Raised \$85M, Series B, operates an established 15,000 t/year thermal smelting plant in France (TRL 8).

Instead, my scoring engine ranked **Circura Materials GmbH** #1:
* *Circura Materials:* Raised \$14.5M, operates a smaller 1,000 t/year continuous pilot in Germany (TRL 7).

#### Why Did I Make This Choice?
Because the automotive OEM's brief specifically demanded **closed-loop lithium recovery** to comply with the EU Battery Regulation.
* PyroLoop's high-temperature pyrometallurgical smelting burns off graphite and captures only **62% of lithium in insoluble slag**, creating heavy scope-1 emissions.
* Circura's hydrometallurgical process achieves **95.8% recovery of battery-grade lithium carbonate** at 65°C with 4 granted patents.

Under ScoutIQ's constraint-weighted scoring model:
$$\text{Fit Score} = \sum_{i=1}^{5} w_i \cdot C_i$$

I configured five adjustable dimensions:
1. Technical Maturity (TRL) — 25% default
2. Industrial Scalability & Pilot Ops — 25% default
3. IP & Patent Strength — 20% default
4. Commercial & Geographic Alignment — 15% default
5. Recovery Performance & Yield — 15% default

Because Circura scored 97 on Yield and 96 on Commercial Alignment, their composite Fit Score came out to **94%**, while PyroLoop scored **82%**.

I gave users interactive sliders so that if an early-stage research team wants to prioritize pure IP over near-term scalability, they can shift the weights in real-time and watch the rankings update instantly.

---

### 6. Building the Prototype: From Figma to React 19

I didn't want this case study to remain a theoretical slide deck. I wanted to put working software in front of stakeholders to test whether this mental model actually worked.

I built the prototype using **React 19, Vite, and Tailwind CSS**, organizing it across 5 core screens:

```
[Screen 1: Objective Input]  ──>  [Screen 2: Discovery Dashboard]  ──>  [Screen 3: Comparison Matrix]
                                                                                  │
[Screen 5: Final Recommendation]  <──  [Screen 4: Evidence Inspector]  <──────────┘
```

#### What I Built Into Each Screen:
1. **Screen 1 (Objective Formulation):**  
   A clean input screen prefilled with our EV Battery Recycling scenario. I built interactive weight sliders and a staged progress animation (*Understanding objective $\rightarrow$ Searching sources $\rightarrow$ Extracting entities $\rightarrow$ Verifying claims $\rightarrow$ Ranking*) to give users transparency into the agentic processing loop.
2. **Screen 2 (Discovery Dashboard):**  
   A visual landscape breakdown displaying technology archetypes (Hydrometallurgy, Direct Recycling, Pyrometallurgy, Automated Disassembly), an interactive TRL distribution bar chart, and filterable startup cards.
3. **Screen 3 (Side-by-Side Comparison Matrix):**  
   A side-by-side table comparing candidate startups across standardized rows. I added an expandable **Weighted Score Breakdown** so users can see the exact mathematical contribution of each dimension.
4. **Screen 4 (Evidence Verification Inspector):**  
   The core differentiator. Users can select any startup and inspect every single claim. Clicking a claim expands a source drawer revealing the verbatim publication snippet, publisher, date, and audit methodology. Users can filter by badge (`Verified fact`, `Company claim`, etc.).
5. **Screen 5 (Executive Recommendation Report):**  
   An executive dossier summarizing the top 3 shortlist with strategic rationales, trade-offs, operational risks, and suggested next steps. I included an **Evidence Coverage Bar** (% verified vs unverified across the cohort) and a dedicated print stylesheet (`@media print`) so users can click one button to generate a clean, C-level briefing PDF.
6. **Saved Projects Modal:**  
   Persists past scouting briefs (Solid-state electrolytes, PEM fuel cell membranes) so scouts can switch between active mandates.

---

### 7. Under the Hood: The AI Pipeline & Feasibility

To ensure the architecture was technically viable, I mapped out an 8-stage agentic pipeline and validated the unit economics:

```
User Objective ──> Query Planning ──> Multi-Source Retrieval ──> Entity Extraction
                                                                        │
Final Dossier <── Shortlist Synthesis <── Constraint Ranking <── Claim Verification
```

#### How I Tackled Hallucinations:
1. **Mandatory Text Span Grounding:** The extraction pipeline rejects any numeric attribute (e.g., recovery %) that cannot provide an exact verbatim substring match and byte-offset in the primary source document.
2. **Programmatic Range Bounds:** Regex validation prevents physically impossible numbers (e.g., $>100\%$ recovery yield).
3. **NLI Cross-Examination:** An independent Natural Language Inference auditor model evaluates whether the extracted claim is logically entailed by the cited source text.

#### Unit Economics & Latency:
* **Target Latency:** $\le 60$ seconds for full end-to-end multi-source analysis.
* **Direct COGS per Brief:** Approximately **\$2.90** (LLM tokens + patent API queries).
* At a proposed enterprise subscription of \$48,000/year for 150 briefs, this delivers **$>95\%$ gross margins**.

I also built a standalone Python script in [`/scoutiq/poc`](file:///c:/Users/vama/Desktop/projects/ScoutIQ/scoutiq/poc) that runs this verification loop against local JSON source filings, proving that deterministic claim classification works reliably.

---

### 8. Metrics, Go-to-Market & Lessons Learned

#### The North Star Metric
I deliberately avoided vanity metrics like "Total Searches Run". In enterprise AI, generating 1,000 ungrounded summaries is a failure mode.

I defined our North Star as:
$$\mathbf{Verified\ Decision\text{-}Ready\ Shortlists\ Delivered\ per\ Active\ Team\ per\ Quarter\ (VDS)}$$

A shortlist only counts if:
1. $\ge 90\%$ of technical claims carry an audited `Verified Fact` or `Company Claim` badge.
2. The engineering committee actually accepts the shortlist for Phase-2 technical due diligence or NDA outreach.

#### The KPI Tree:
* **Workflow Velocity:** Time to generate shortlist reduced from **14–21 days down to $<30$ minutes**.
* **Decision Quality:** Shortlist Acceptance Rate by R&D targeted at **$\ge 75\%$** (vs. 25% status quo).
* **AI Quality Guardrail:** Citation precision maintained at **$\ge 98\%$** with hallucination rate **$<0.5\%$**.

#### GTM Strategy: The 90-Day Pilot
Enterprise automotive procurement takes 6 to 9 months. To overcome this, I designed a **\$15,000 / 90-Day Innovation Sprint Pilot** for 3 seats. 

Because \$15k sits below the discretionary corporate credit card approval limit ($<\$20\text{k}$) for most VPs of Open Innovation, teams can buy without going through procurement committees. Once we prove an 80% acceptance rate with R&D during the pilot, converting them to an annual \$48,000 license becomes straightforward.

---

### Personal Reflections: What This Project Taught Me

1. **AI Products Live or Die on Verification, Not Generation:** In enterprise B2B, generating answers is cheap; establishing provenance is invaluable. If your AI cannot defend its sources to a skeptical technical director, it won't be adopted.
2. **Exposing Doubt Builds Trust:** Most AI demos pretend the model is 100% confident all the time. Showing a red badge that says *"Could not be verified"* actually made technical evaluators trust the platform more, because it showed the tool wasn't making things up.
3. **Product Managers Must Code the Core Logic:** Building the prototype myself allowed me to test edge cases—like what happens when a user zeroes out the IP slider, or how to handle conflicting source claims—that I never would have caught just writing user stories in Jira.

---
*Product Management Case Study - Illustrative Data. Conceptual prototype and specification.*
