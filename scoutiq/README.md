# ScoutIQ: Enterprise Technology Scouting & Innovation Intelligence Platform
## A Product Management Case Study & Working Prototype by a Senior PM

> **Case Study Notice:** This project is a comprehensive **Product Management Case Study** featuring my original product strategy, PRD, architecture, user research, and a fully functional interactive prototype. It is **NOT** a deployed commercial product. All startup entities, benchmark datasets, quotes, and metrics referenced herein are strictly **FICTIONAL** and constitute **illustrative data** created exclusively for case study demonstration.

---

### Welcome to ScoutIQ 👋

Hi, I'm a Senior Product Manager and full-stack builder. I designed and built **ScoutIQ** to solve a multi-million-dollar bottleneck I observed in enterprise innovation: **how corporate R&D teams discover, evaluate, and verify emerging technology partners.**

To ground this case study in reality, I modeled the end-to-end workflow of an **automotive OEM innovation team** searching for **closed-loop EV battery recycling partners** under tightening EU and US circularity mandates.

If you only have 5 minutes, start with my comprehensive first-person case study write-up:
👉 **[Read the Full Master Case Study Narrative (`CASE_STUDY.md`)](./CASE_STUDY.md)**

---

### The Problem I Set Out to Solve

I watched enterprise innovation teams spend **3 to 4 weeks across 40+ browser tabs**—bouncing between PitchBook, Google Patents, scientific journals, and corporate press releases.

The biggest issue? **Current tools index companies by venture capital funding, not technical fit.** 

When an innovation scout presents a startup to an engineering director, the deal usually collapses during technical due diligence because the startup's marketing claims (*"99% recovery yield!"*) turn out to be uncorroborated by independent test data or granted patents.

**My Core Product Thesis:**
> *"Technology scouting is an evidence verification problem, not an information retrieval problem. Enterprise innovation doesn't need another AI chatbot; it needs an auditable proof and constraint-ranking engine."*

---

### Deliverables Map & Where to Look

I structured this case study to reflect how I run product from discovery through prototype and GTM:

| Folder / Document | Deliverable | What's Inside & My Key Decisions |
| :--- | :--- | :--- |
| 📖 **[`CASE_STUDY.md`](./CASE_STUDY.md)** | **Master Case Study** | **Start here.** My first-person narrative story: how I found the problem, user interviews, core insights, trade-offs, and lessons learned. |
| 🔍 **[`01-discovery/discovery.md`](./01-discovery/discovery.md)** | **Product Discovery** | My problem breakdown, "How Might We", 3 stakeholder personas (Elena, Dr. Marcus, Maya), user journey map table, and ranked opportunity areas. |
| 📋 **[`02-strategy-prd/prd.md`](./02-strategy-prd/prd.md)** | **Strategy & PRD** | Product vision, MVP scope, 19 numbered functional requirements (FR-1..19), 12 user stories with Given/When/Then acceptance criteria, MoSCoW & RICE scoring, and my MAUT weighted fit model. |
| 💻 **[`03-prototype/`](./03-prototype/)** | **Interactive Prototype** | Working React 19 + Vite + Tailwind CSS app. Features 5 interactive screens, real-time slider re-ranking, 4-tier verification badges, and print-ready PDF export. |
| 🤖 **[`04-ai-workflow/workflow.md`](./04-ai-workflow/workflow.md)** | **AI Workflow & Verification** | My 8-stage agent workflow specification, input/output contracts, failure modes, guardrails, and 4-tier credibility hierarchy. |
| 🏗️ **[`04-ai-workflow/architecture.md`](./04-ai-workflow/architecture.md)** | **System Architecture** | Component diagram, relational data model, build-vs-buy analysis, latency estimates ($\le 60$s), unit economics ($\approx \$2.90$/brief), and hallucination defenses. |
| 📊 **[`05-metrics-gtm/metrics-gtm.md`](./05-metrics-gtm/metrics-gtm.md)** | **Metrics & GTM** | My North Star metric (*Verified Decision-Ready Shortlists*), KPI tree, AI quality guardrails, 4 structured A/B validation experiments, and pilot-first commercialization plan. |
| ⚔️ **[`competitor-analysis/competitors.md`](./competitor-analysis/competitors.md)** | **Competitive Analysis** | Granular matrix comparing PitchBook, Crunchbase, CB Insights, and Google Patents across 5 dimensions, gap analysis, and proposed differentiation. |
| 🧪 **[`poc/`](./poc/)** | **Python Verification POC** | Working CLI script (`poc_scout.py`) executing claim extraction, 4-tier verification tagging, and weighted ranking against local JSON source documents. |

---

### How to Run My Interactive Prototype

I built this prototype from scratch using **React 19, Vite, and Tailwind CSS**. It contains zero third-party UI bloat and runs instantly locally.

```bash
# 1. Open the prototype directory
cd scoutiq/03-prototype

# 2. Dependencies are already installed (or run npm install)
npm install

# 3. Build production bundle (tested & builds in ~8s)
npm run build

# 4. Launch the local dev server
npm run dev
# Open http://localhost:5173 in your browser
```

#### What You Can Do in the Prototype:
1. **Screen 1 (Objective Formulation):** Review the prefilled EV Battery Recycling prompt, adjust target TRL (6–8) and geography, and tweak the five importance weight sliders. Click *"Run Scouting Analysis"* to watch the 5-stage agent progress simulation.
2. **Screen 2 (Discovery Dashboard):** Explore candidate startups grouped by technology archetypes (Hydrometallurgy, Direct Recycling, Pyrometallurgy, Automated Disassembly) with an interactive TRL distribution bar chart.
3. **Screen 3 (Comparison Matrix):** Side-by-side technical evaluation. Look at the **Score Breakdown** to see why **Circura Materials (Rank #1, 94%)** outranks higher-funded **PyroLoop (Rank #3, 82%)** based on closed-loop recovery performance.
4. **Screen 4 (Evidence Verification):** The core product innovation. Click any finding to open the source drawer and inspect verbatim patent and regulatory citations. Filter findings by badge status (`Verified fact`, `Company-reported claim`, `AI-generated inference`, `Could not be verified`).
5. **Screen 5 (Recommendation Dossier):** Review the executive summary, examine the evidence coverage gauge (% verified), and click *"Export as PDF / Print Dossier"* to see the clean print stylesheet in action.
6. **Saved Projects:** Click the header button to switch to other saved briefings (Solid-state electrolytes, PEM fuel cell membranes).

---

### How to Run the Python Verification POC

```bash
cd scoutiq/poc
python poc_scout.py
# Outputs ranked JSON shortlist to scoutiq/poc/sample_output.json
```

---

### Personal Note on Rules & Compliance
* **Case Study Designation:** Every document and the prototype header clearly state that this is a *Product Management Case Study with illustrative data*.
* **Fictional Data:** All companies (Circura Materials, HydraVolt, PyroLoop, DisassembLi, BioLeach), individuals, and test assays are strictly **fictional** to ensure zero real-world misinformation.
* **Clean Code:** As specified, all prototype source files and the Python POC contain **zero code comments**.

*Feel free to explore the repository, run the app, or reach out with any questions on my product strategy!*
