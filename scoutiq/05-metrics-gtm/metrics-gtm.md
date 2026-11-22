# Product Management Case Study: ScoutIQ
## Deliverable 05: Metrics Framework, Experimentation Plan & Go-To-Market Strategy

> **Case Study Notice:** This document reflects my metrics framework, experimentation design, and commercialization roadmap as a Senior Product Manager. ScoutIQ is a conceptual product and working prototype, not a deployed commercial application. All quantitative metrics, baseline assumptions, conversion targets, pricing tiers, and experimental figures are **illustrative data** defined for case study demonstration.

---

### 1. The North Star Metric & Executive KPI Tree

#### 1.1 Why I Selected This North Star Metric
When designing product metrics for AI products, the easiest trap to fall into is tracking vanity volume—such as "Total Searches Run" or "Reports Generated".

If an LLM pipeline generates 500 ungrounded reports that R&D directors immediately reject during technical due diligence, high query volume indicates failure, not success.

To align product adoption with real enterprise value, I defined our North Star Metric as:

$$\mathbf{Verified\ Decision\text{-}Ready\ Shortlists\ Delivered\ per\ Active\ Innovation\ Team\ per\ Quarter\ (VDS)}$$

* **What Qualifies as a "Verified Decision-Ready Shortlist"?**
  1. The shortlist must contain $\ge 3$ candidate technology partners.
  2. $\ge 90\%$ of technical claims must carry an audited `Verified Fact` or `Company-Reported Claim` badge.
  3. The shortlist must be formally accepted by the enterprise engineering/R&D committee for Phase-2 technical evaluation or NDA outreach.
* **Why This Matters:**
  * It penalizes hollow output (generating unverified lists of companies does not count).
  * It directly tracks whether we are closing the trust deficit between Innovation Scouts and Engineering Directors.

#### 1.2 My KPI Tree Structure

```
                                [North Star: Verified Decision-Ready Shortlists (VDS)]
                                                       │
        ┌──────────────────────────────────────────────┴──────────────────────────────────────────────┐
        ▼                                                                                             ▼
[Workflow Velocity & Efficiency]                                                      [Decision Quality & Enterprise Trust]
  ├─ Time to Generate Shortlist (<30 mins)                                              ├─ % Recommendations Supported by Valid Sources (>95%)
  ├─ Workflow Completion Rate (>85%)                                                    ├─ User Acceptance Rate of Shortlists (>75%)
  └─ Query Iteration Cycles (Avg. 2.2 adjustments)                                      └─ 60-Day Innovation Team Retention (>60%)
```

---

### 2. Core Product Metrics Specification

I mapped our 5 core operational metrics, pairing every primary efficiency metric with a quality guardrail to prevent perverse incentives:

| Metric Name | Formal Definition & Formula | Baseline (Status Quo) | ScoutIQ Target | Data Source | Paired Guardrail Metric |
| :--- | :--- | :---: | :---: | :--- | :--- |
| **1. Time to Generate Shortlist (TGS)** | Total elapsed time from business brief receipt to finalized executive recommendation report.<br>$\text{TGS} = t_{\text{report\_export}} - t_{\text{brief\_initiated}}$ | 14 to 21 Days (30–40 human hours) | **$\le 30$ Minutes** (interactive session) | Application event logs | **Technical Rigor Rating:** R&D Director score on depth of technical parameters (Target: $\ge 4.5/5$). |
| **2. Source Support Ratio (SSR)** | Percentage of factual claims in generated reports backed by valid Tier-1/Tier-2 citations.<br>$\text{SSR} = \frac{\text{Claims with Verified Citations}}{\text{Total Claims Displayed}} \times 100$ | ~40% (fragmented links in slide decks) | **$\ge 95\%$** | Automated audit logs & claim registry | **Citation Freshness:** $\ge 80\%$ of patent & literature citations published within past 36 months. |
| **3. Shortlist Acceptance Rate (SAR)** | Percentage of shortlisted candidates accepted by R&D for Phase-2 technical evaluation or NDA outreach.<br>$\text{SAR} = \frac{\text{Candidates Advanced to Due Diligence}}{\text{Total Candidates Recommended}} \times 100$ | ~25–30% (high manual false positive rate) | **$\ge 75\%$** | User action logging & quarterly review surveys | **Disqualification Due to Unverified Claims:** $<5\%$ of candidates rejected for uncorroborated specs. |
| **4. Workflow Completion Rate (WCR)** | Percentage of initiated scouting sessions that successfully proceed through all 5 screens to report export.<br>$\text{WCR} = \frac{\text{Sessions Reaching Export}}{\text{Sessions Initiated}} \times 100$ | N/A (Manual ad-hoc) | **$\ge 85\%$** | Funnel telemetry (PostHog / Mixpanel) | **Time on Screen 4 (Evidence):** Ensure users spend $\ge 2$ minutes auditing claims rather than blind-exporting. |
| **5. Repeat Team Retention (RTR)** | Percentage of enterprise innovation teams who initiate $\ge 2$ new scouting projects per month over 60 days.<br>$\text{RTR} = \frac{\text{Teams with } \ge 2\ \text{Runs in Month 2}}{\text{Active Teams in Month 1}} \times 100$ | N/A | **$\ge 60\%$** | Subscription & tenant usage analytics | **Seat Distribution:** $\ge 2$ distinct user roles (Scout + Engineer) active per enterprise tenant. |

---

### 3. AI Quality & Reliability Guardrails

Because ScoutIQ is designed for high-stakes engineering environments, a single hallucinated number can permanently destroy credibility. I established strict quality thresholds for the AI pipeline:

| AI Quality Metric | Target Benchmark | How I Measure It | Action Threshold if Breached |
| :--- | :---: | :--- | :--- |
| **Citation Precision** | **$\ge 98.0\%$** | Automated daily verification: verifies that referenced URL/patent ID is active and contains the verbatim assertion. | If $<95\%$, pause auto-generation and revert to human-curated fallback mode. |
| **Verification Classification Accuracy** | **$\ge 92.0\%$** | Blind weekly evaluation of 100 randomized claims evaluated by an independent metallurgical/technical auditor. | Prompt tuning & NLI classifier retraining on misclassified edge cases. |
| **Hallucination Rate** | **$< 0.5\%$** | Percentage of claims containing fabricated entities, patent numbers, or non-existent chemical processes. | Immediate deployment freeze; investigate model temperature and grounding parameters. |
| **Extraction Recall** | **$\ge 90.0\%$** | Percentage of key technical parameters (throughput, purity, TRL) successfully extracted from ingested source files. | Expand domain regex patterns and few-shot extraction prompts. |

---

### 4. My Product Experimentation Plan

I designed four structured experiments to test user behavior, trust, and workflow adoption:

#### Experiment 1: The Trust Impact of Four-Tier Badges vs. Binary Verification
* **My Hypothesis:** Displaying four distinct verification statuses (`Verified Fact`, `Company Claim`, `AI Inference`, `Unverifiable`) increases user confidence and R&D acceptance rate compared to a conventional binary (Verified / Unverified) display.
* **Experimental Design (A/B Test):**
  * *Variant A (Control):* Binary badge display (Green "Verified" vs. Gray "Unverified").
  * *Variant B (Treatment):* 4-Tier color-coded taxonomy with confidence scores and evidence drawer.
* **Success Metric:** Shortlist Acceptance Rate (SAR) by R&D directors (+15% target for Variant B) and user click-through rate into primary citations.
* **Duration & Sample:** 6 weeks across 8 pilot enterprise accounts (min. 120 scouting briefs).
* **Risks:** Visual clutter; mitigated by clean badge styling and an intuitive interactive legend.

#### Experiment 2: Dynamic Constraint Weight Recalculation vs. Static Scoring
* **My Hypothesis:** Allowing users to dynamically adjust importance weight sliders with sub-50ms instant re-ranking increases workflow completion rate and perceived control.
* **Experimental Design (A/B Test):**
  * *Variant A (Control):* Static default weights configured at project initiation with no dynamic re-ranking.
  * *Variant B (Treatment):* Interactive weight sliders on both comparison matrix and recommendation screens with instant rank animation.
* **Success Metric:** Workflow Completion Rate (WCR $\ge 85\%$) and average user satisfaction rating ($\ge 4.6/5$).
* **Duration & Sample:** 4 weeks across 60 active scouting sessions.
* **Risks:** Users oscillating weights continuously without deciding; mitigated by a "Reset to Default Strategic Weights" button.

#### Experiment 3: Proactive Doubt Flagging ("Could Not Be Verified" Callouts)
* **My Hypothesis:** Prominently highlighting unverified startup claims in the executive summary increases perceived platform honesty and long-term retention.
* **Experimental Design (A/B Test):**
  * *Variant A (Control):* Unverified claims hidden in deep dropdown tabs.
  * *Variant B (Treatment):* Top-level "Evidence Gaps & Diligence Red Flags" box on the executive recommendation page.
* **Success Metric:** Repeat team retention (RTR) over 60 days (+20% for treatment group).
* **Duration & Sample:** 8 weeks across 10 enterprise design partner accounts.
* **Risks:** Innovation scouts initially fearing negative findings; mitigated by framing callouts as "Diligence Guidance".

#### Experiment 4: PDF Print-Ready Dossier vs. Raw CSV Export
* **My Hypothesis:** Providing an executive-formatted print/PDF briefing dossier increases internal forward-sharing to C-level executives by $>3\times$ compared to CSV data dumps.
* **Design:** Track document export events and internal view telemetry when shared via enterprise single sign-on.
* **Success Metric:** Forwarded executive read rate ($\ge 2.5$ unique viewers per exported PDF).
* **Duration & Sample:** 4 weeks during closed beta.

---

### 5. Go-To-Market (GTM) Strategy & Commercialization

#### 5.1 Ideal Customer Profile (ICP)
* **Target Segment:** Tier-1 Global Automotive OEMs and Heavy Industrial Manufacturers ($>\$5\text{B}$ annual revenue) with dedicated Open Innovation and Powertrain/CleanTech R&D divisions.
* **Economic Buyer:** Vice President of Open Innovation, Chief Technology Officer (CTO), or Head of Corporate R&D.
* **Primary Users:** Innovation Scouts, Lead Materials Engineers, and Corporate Venture Capital Investment Associates.
* **Immediate Regulatory Catalyst:** 2027 European Union Battery Regulation (mandating recycled material quotas and battery passports) and US Inflation Reduction Act localized supply requirements.

#### 5.2 My Strategic Positioning Statement
* *"For enterprise R&D and open innovation leaders who need to partner with breakthrough technology providers, ScoutIQ is the intelligence platform that delivers ranked shortlists backed by verified patent and technical evidence. Unlike Crunchbase or PitchBook which rank companies by venture capital hype, ScoutIQ ranks by your specific engineering constraints and independently verifies every claim."*

#### 5.3 Phased Pilot-First Launch Roadmap

```
+─────────────────────────────────────────────────────────────────────────────────+
|                           PHASED GTM LAUNCH ROADMAP                             |
+─────────────────────────────────────────────────────────────────────────────────+
| Phase 1: Design Partners (Months 1-3)                                           |
| • 3 Anchor Automotive OEMs (e.g., German & NA Powertrain Divisions).           |
| • 100% white-glove onboarding; co-designing EV battery recycling workflows.     |
| • Goal: Validate core 4-tier verification logic and achieve 80% SAR.           |
+─────────────────────────────────────────────────────────────────────────────────+
| Phase 2: Closed Enterprise Beta (Months 4-6)                                    |
| • Expand to 10 enterprise accounts across Automotive, Aerospace & Chemicals.    |
| • Introduce self-serve custom weighting and PDF export dossiers.                |
| • Goal: Prove repeat usage (>60% 60-day RTR) and refine latency to <45 seconds. |
+─────────────────────────────────────────────────────────────────────────────────+
| Phase 3: General Commercial Availability (GA) (Months 7+)                      |
| • Formal enterprise sales motion; SOC-2 Type II certification; Azure/Okta SSO.  |
| • Expand coverage to Solid-State Batteries, Hydrogen Tech, and Carbon Capture.  |
+─────────────────────────────────────────────────────────────────────────────────+
```

#### 5.4 Enterprise Pricing Hypotheses
* **Pilot Engagement (\$15,000 / 90 Days):**
  * Includes 3 core user seats (1 Scout, 1 R&D Lead, 1 CVC Analyst).
  * Up to 25 complete technology scouting dossiers with full patent/literature verification.
  * Dedicated onboarding and customized corporate constraint weighting templates.
* **Annual Enterprise License (\$48,000 / Year Base):**
  * Up to 10 user seats across Open Innovation and Engineering.
  * Unlimited exploratory searches; 150 verified executive dossiers per year.
  * Dedicated patent API connector and priority LLM token allocation.
* **Custom Enterprise Integration (\$85,000+ / Year):**
  * Unlimited seats across all corporate divisions; custom integration with internal SharePoint/Jira/Notion repositories; private VPC deployment options.

#### 5.5 How I Planned to Overcome Enterprise Procurement Obstacles
1. **The 6–9 Month Procurement Freeze:**  
   * *My Solution:* Set the 90-day pilot price at \$15,000—deliberately beneath the \$20,000 discretionary credit card sign-off threshold for corporate VPs. This lets teams start immediately without waiting for formal procurement approvals.
2. **IP & Search Query Confidentiality:**  
   * *My Solution:* Contractually guarantee zero customer prompt retention for foundation model training; deploy via dedicated enterprise endpoints (Azure OpenAI / Google Vertex) with zero-data-logging agreements.
3. **Incumbent Commoditization:**  
   * *My Solution:* Focus heavily on the patent-to-claim verification graph. Incumbents cannot replicate deep metallurgical claim attribution without significant domain re-architecture.

---
*End of Deliverable 05: Metrics Framework, Experimentation Plan & Go-To-Market Strategy (ScoutIQ PM Case Study — Illustrative Data).*
