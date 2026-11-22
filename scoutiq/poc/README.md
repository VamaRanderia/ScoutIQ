# ScoutIQ: Proof-of-Concept Verification Pipeline (`/poc`)

> **Notice:** Product Management Case Study & Prototype Specification. All startups, sources, and claims in this proof of concept are **fictional** and constitute **illustrative data**.

---

### 1. Overview

This proof-of-concept Python script (`poc_scout.py`) demonstrates the core intelligence loop of ScoutIQ:
1. Ingests an unstructured innovation mandate (e.g. Closed-loop EV Battery Recycling in Europe/North America).
2. Reads a curated local corpus of fictional source documents (`sources.json`) spanning regulatory permits, peer-reviewed metallurgy papers, granted patent filings, and corporate press releases.
3. Classifies every extracted technical claim into one of the four standardized ScoutIQ verification statuses:
   * `Verified fact` (Corroborated by Tier-1 independent source)
   * `Company-reported claim` (Self-reported in corporate whitepaper)
   * `AI-generated inference` (Synthesized via domain scaling model)
   * `Could Not Be Verified` (Asserted without independent proof)
4. Computes a multi-attribute weighted fit score based on customer criteria weights.
5. Emits a ranked candidate shortlist with claim attribution to `sample_output.json`.

---

### 2. How to Run

The script supports dual execution modes:
* **With LLM API Key:** Set `GEMINI_API_KEY` in your environment to call Gemini 1.5 Flash for dynamic extraction and NLI classification.
* **Without API Key (Offline / Deterministic Fallback):** If no API key is detected, the script runs deterministically using local verification rules, allowing instant local verification without dependencies.

```bash
# Optional: Set Gemini API Key
# export GEMINI_API_KEY="your-api-key"

# Run the POC pipeline
python poc_scout.py
```

---

### 3. Files in this Directory

* `poc_scout.py`: Python CLI execution script.
* `sources.json`: Curated local corpus of fictional source documents.
* `sample_output.json`: Generated JSON shortlist with claim verification badges and fit scores.

---
*Product Management Case Study - Illustrative Data.*
