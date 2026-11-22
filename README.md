# ScoutIQ: Enterprise Technology Scouting & Innovation Intelligence Platform
## Product Management Case Study & Working Prototype

> **Case Study Notice:** This repository contains my complete **Product Management Case Study** and working prototype for ScoutIQ. It represents my original product strategy, customer research, system architecture, and interactive software prototype. It is **NOT** a deployed commercial product. All startup entities, benchmark datasets, quotes, and metrics referenced herein are strictly **FICTIONAL** and constitute **illustrative data** created exclusively for case study demonstration.

---

### Welcome to ScoutIQ 👋

I designed and built **ScoutIQ** to solve a critical enterprise bottleneck: **how corporate innovation and R&D teams evaluate, verify, and partner with early-stage technology providers.**

To ground this case study in a high-stakes engineering challenge, I modeled the end-to-end workflow of an **automotive OEM innovation team** searching for **closed-loop EV battery recycling partners** under the 2027 EU Battery Regulation.

---

### Start Here: The Master Case Study Narrative

If you want the full story—how I found the problem, the messy reality of user discovery, why I rejected the obvious "AI search bar" path, the hardest trade-offs I navigated, and what I learned building the prototype:

👉 **[Read My Full Master Case Study Narrative (`CASE_STUDY.md`)](./scoutiq/CASE_STUDY.md)**

---

### Project Structure & Deliverables

All deliverables and code are organized within the [`/scoutiq`](./scoutiq/) directory:

* 📖 **Master Case Study:** [`scoutiq/CASE_STUDY.md`](./scoutiq/CASE_STUDY.md) — The complete first-person narrative breakdown.
* 🔍 **Product Discovery:** [`scoutiq/01-discovery/discovery.md`](./scoutiq/01-discovery/discovery.md) — Problem statement, "How Might We", 3 personas (Elena, Dr. Marcus, Maya), journey map table, and opportunity ranking.
* 📋 **Strategy & PRD:** [`scoutiq/02-strategy-prd/prd.md`](./scoutiq/02-strategy-prd/prd.md) — Vision, MVP scope, 19 FRs, 12 User Stories, MoSCoW/RICE, and my constraint-weighted scoring model.
* 💻 **Interactive Prototype:** [`scoutiq/03-prototype/`](./scoutiq/03-prototype/) — Working React 19 + Vite + Tailwind CSS app with 5 interactive screens, real-time slider re-ranking, and print/PDF export.
* 🤖 **AI Workflow & Verification:** [`scoutiq/04-ai-workflow/workflow.md`](./scoutiq/04-ai-workflow/workflow.md) — 8-stage agent pipeline, 4-tier credibility hierarchy, and guardrails.
* 🏗️ **System Architecture:** [`scoutiq/04-ai-workflow/architecture.md`](./scoutiq/04-ai-workflow/architecture.md) — Component diagram, ER schema, latency budgets, and unit economic cost estimates.
* 📊 **Metrics Framework & GTM:** [`scoutiq/05-metrics-gtm/metrics-gtm.md`](./scoutiq/05-metrics-gtm/metrics-gtm.md) — North Star metric (*Verified Decision-Ready Shortlists*), KPI tree, 4 A/B tests, and pilot launch plan.
* ⚔️ **Competitor Analysis:** [`scoutiq/competitor-analysis/competitors.md`](./scoutiq/competitor-analysis/competitors.md) — Granular evaluation against PitchBook, Crunchbase, CB Insights, and Google Patents.
* 🧪 **Python Verification POC:** [`scoutiq/poc/`](./scoutiq/poc/) — Python verification script (`poc_scout.py`) executing claim classification against local JSON source files.

---

### How to Run the Prototype Locally

```bash
cd scoutiq/03-prototype
npm install
npm run dev
# Open http://localhost:5173
```

---
*Product Management Case Study - Illustrative Data.*
