# Product Management Case Study: ScoutIQ
## Deliverable 02: Product Requirements Document (PRD) & Product Strategy

> **Case Study Notice:** This PRD reflects my product strategy, functional specifications, and technical trade-offs for ScoutIQ. It represents my original work as a Senior Product Manager. ScoutIQ is a conceptual product and working software prototype, not a deployed commercial application. All startups, metrics, benchmark datasets, and quotes are **fictional** and constitute **illustrative data** created for demonstration purposes.

---

### 1. Product Vision & Strategic Positioning

#### 1.1 Vision Statement
To build the definitive intelligence layer for enterprise innovation—giving technical and innovation leaders the ability to discover, verify, and partner with emerging technology providers with mathematical transparency and source-attributed certainty.

#### 1.2 The Value Proposition I Designed
* **For Innovation Scouts & Managers:** Accelerates scouting cycles by 10x (from 3 weeks of manual trawling to 30 minutes of focused analysis) while producing board-ready audit trails.
* **For R&D and Engineering Directors:** Replaces marketing hype with independently verified patent, academic, and pilot evidence, eliminating wasted lab validation cycles.
* **For Corporate Venture & Strategy:** Prioritizes partner fit against exact operational constraints rather than market popularity or venture capital pedigree.

#### 1.3 Target Market & Beachhead
* **Initial Beachhead:** Fortune 500 Automotive and Heavy Mobility OEMs (Powertrain, Battery Systems, and Circularity Innovation Groups).
* **Adjacent Expansion:** Chemical and Advanced Materials conglomerates, Energy transition utilities, and Aerospace advanced manufacturing divisions.

#### 1.4 Non-Goals: What I Explicitly Decided NOT to Build
* **Not a Deal Flow CRM:** ScoutIQ does not track founder outreach cadences, stage pipelines, or intro emails (tools like Affinity or Salesforce serve this).
* **Not a Generic Search Engine:** ScoutIQ is not a general literature search portal like Semantic Scholar or Google Patents; it converts technical literature into structured commercial and maturity attributes.
* **Not an Automated Legal Due Diligence Tool:** ScoutIQ produces actionable intelligence and prioritized shortlists; it does not replace legal contracts, formal environmental impact assessments, or physical metallurgical assay tests.

---

### 2. MVP Scope Definition: Drawing the Boundaries

To avoid scope bloat in v1, I drew strict boundaries around what belonged in the core prototype versus post-MVP iterations:

| Product Dimension | In Scope (My MVP Focus) | Out of Scope (Post-MVP Roadmap) |
| :--- | :--- | :--- |
| **Input Modality** | Natural language business challenge input + structured parameter filters (industry, TRL range, geography, must-haves, weight sliders). | Unstructured multi-file PDF RFP upload, automated email-thread ingestion. |
| **Data Sources** | Synthesized mock corpus representing patent offices (USPTO/EPO), peer-reviewed scientific journals, commercial pilot registries, and company disclosures. | Live paid API pipes into proprietary paywalled pitchbook feeds; direct private data room integrations. |
| **Verification Engine** | 4-tier claim attribution engine (Verified Fact, Company-Reported Claim, AI-Generated Inference, Could Not Be Verified) with expandable citation snippets. | Automated real-time fraud detection algorithms; real-world phone verification with founders. |
| **Analytics & Scoring** | Multi-attribute weighted scoring model with dynamic weight recalculation and criteria breakdown visualizations. | Machine-learning-based automated weight optimization based on historical partnership outcomes. |
| **Deliverables & Export** | Side-by-side comparative matrix, interactive evidence verification inspector, and executive recommendation dossier with print/PDF layout. | Automated PowerPoint slide deck generation via python-pptx; direct export to enterprise Notion/Confluence workspaces. |
| **Workspace & Projects** | Single-user local storage for saving and revisiting past scouting briefs. | Multi-tenant team workspace permissions, inline collaborative commenting, SSO/SAML integration. |

---

### 3. Functional Requirements (FR-1 to FR-19)

#### 3.1 Business Objective Input
* **FR-1:** The system shall accept a free-text business objective prompt describing an engineering or innovation challenge (up to 1,000 characters).
* **FR-2:** The system shall provide structured constraint selectors for Industry, Technology Focus Area, Minimum/Maximum Technology Readiness Level (TRL 1–9), and Target Geographic Regions.
* **FR-3:** The system shall support user-defined "Must-Have Criteria" tags (e.g., minimum recovery yield, specific process temperature limits, pilot plant operational).
* **FR-4:** The system shall provide interactive sliders allowing users to adjust the relative importance weights of scoring dimensions: Technical Maturity, Industrial Scalability, IP Strength, Commercial Alignment, and Environmental/Recovery Performance (sum normalized to 100%).
* **FR-5:** The system shall provide pre-configured benchmark challenge templates (e.g., "Closed-Loop EV Battery Recycling & Hydrometallurgical Purity") for instant scenario demonstration.
* **FR-6:** The system shall display a multi-stage execution progress indicator when scouting is initiated (Stages: 1. Understanding Objective $\rightarrow$ 2. Querying Sources $\rightarrow$ 3. Extracting Entities $\rightarrow$ 4. Verifying Claims $\rightarrow$ 5. Constraint Ranking).

#### 3.2 Technology Discovery & Landscape
* **FR-7:** The system shall categorize discovered solutions into distinct technological archetypes (e.g., Hydrometallurgy, Direct Cathode Recycling, Pyrometallurgy, Automated Disassembly, Black Mass Refining).
* **FR-8:** The system shall visualize the distribution of candidates across Technology Readiness Levels (TRL) to highlight landscape maturity.
* **FR-9:** The system shall render candidate startup cards displaying overall fit score, TRL badge, technology category, primary operating geography, key capabilities, and quick-action selection for side-by-side comparison.
* **FR-10:** The system shall provide client-side filtering by technology category, minimum TRL, geographic region, and evidence verification threshold.

#### 3.3 Evidence and Source Verification
* **FR-11:** For every technical and commercial finding associated with a startup, the system shall assign and display one of four standardized verification badges:
  1. `Verified Fact` (Corroborated by independent Tier-1 sources, granted patents, or audited reports)
  2. `Company-Reported Claim` (Asserted by company press release, self-published whitepaper, or founder interview)
  3. `AI-Generated Inference` (Synthesized or extrapolated by the model from adjacent domain indicators)
  4. `Could Not Be Verified` (Explicitly investigated across indexed sources with zero corroboration found)
* **FR-12:** The system shall provide an expandable Evidence Drawer for each finding displaying the primary source title, publishing body, publication date, source credibility tier, and verbatim citation snippet.
* **FR-13:** The system shall provide an interactive filter to isolate findings by verification badge status.

#### 3.4 Startup Comparison
* **FR-14:** The system shall render a multi-column comparative matrix displaying 3 to 4 selected startups side-by-side across standardized dimensions: Technology Maturity (TRL), Patent Evidence, Research Publications, Commercial Pilot Deployment, Industrial Partnerships, Overall Fit Score, and Strategic Recommendation.
* **FR-15:** The system shall provide an expandable Score Breakdown view illustrating the weighted contribution of each individual criterion to the composite score.

#### 3.5 Recommendation Report & Saved Projects
* **FR-16:** The system shall generate an Executive Recommendation Dossier detailing the top 3 ranked partners with strategic rationale, technical trade-offs, operational risks, and concrete next steps.
* **FR-17:** The recommendation report shall feature an Evidence Coverage Gauge showing the percentage distribution of findings by verification status across the shortlisted cohort.
* **FR-18:** The system shall support a dedicated print stylesheet enabling one-click browser print or "Export as PDF" with clean page breaks and zero UI clutter.
* **FR-19:** The system shall allow users to persist, list, and reload previous scouting projects using local browser storage.

---

### 4. User Stories & Acceptance Criteria

#### User Story US-01: Objective Configuration
* **As an** Innovation Manager,  
* **I want to** enter my technical challenge using natural language alongside structured constraint filters,  
* **So that** the scouting engine accurately targets my division's specific engineering criteria rather than generic startup categories.
* **Acceptance Criteria:**
  * *Given* the user is on the Business Objective screen,
  * *When* the user enters "Closed-loop EV battery recycling with $>95\%$ recovery of battery-grade lithium" and selects TRL range 6–8,
  * *Then* the system validates input completeness and enables the "Run Scouting Analysis" button.

#### User Story US-02: Staged Progress Transparency
* **As an** Innovation Manager,  
* **I want to** see real-time staged feedback while the AI synthesizes market and patent data,  
* **So that** I understand the analytical rigor taking place and trust the processing steps.
* **Acceptance Criteria:**
  * *Given* the user clicks "Run Scouting Analysis",
  * *When* processing commences,
  * *Then* the UI displays sequential status badges ("Understanding objective", "Querying sources", "Extracting technologies", "Verifying claims", "Ranking") before transitioning to the dashboard within 3.5 seconds in prototype simulation mode.

#### User Story US-03: Technology Categorization
* **As an** R&D Director,  
* **I want to** view candidate startups grouped by their chemical and physical technology approaches,  
* **So that** I can assess whether our roadmap should favor hydrometallurgy versus direct cathode recycling.
* **Acceptance Criteria:**
  * *Given* the results have loaded on the Discovery Dashboard,
  * *When* the user toggles category filter pills,
  * *Then* the visible startup cards update dynamically to reflect only the selected technology sub-domains.

#### User Story US-04: TRL Landscape Assessment
* **As an** Innovation Scout,  
* **I want to** see a graphical distribution of startup readiness levels (TRL),  
* **So that** I can immediately identify if an emerging domain is predominantly lab-scale or commercial-ready.
* **Acceptance Criteria:**
  * *Given* the Discovery Dashboard is rendered,
  * *When* the user views the Maturity Overview widget,
  * *Then* each TRL bucket (TRL 4 to 8) displays the count and percentage of identified companies with corresponding color-coded distribution bars.

#### User Story US-05: Side-by-Side Partner Comparison
* **As an** Innovation Team Member,  
* **I want to** select up to 4 startups and view them in a standardized tabular matrix,  
* **So that** I can compare commercial readiness, patents, and technical metrics side-by-side during team reviews.
* **Acceptance Criteria:**
  * *Given* candidate startups on the dashboard,
  * *When* the user navigates to the Comparison view,
  * *Then* all selected startups are rendered in aligned vertical columns with identical evaluation rows and visual highlight on the highest-scoring candidate.

#### User Story US-06: Criterion Score Decomposition
* **As an** Innovation Manager,  
* **I want to** inspect the exact mathematical breakdown of each startup's fit score across sub-criteria,  
* **So that** I can explain to engineering leaders why a company with fewer patents ranked higher overall due to superior pilot scalability.
* **Acceptance Criteria:**
  * *Given* the comparison table or startup detail,
  * *When* the user inspects the score breakdown,
  * *Then* the UI displays the weighted score contribution for Technical Maturity, Industrial Scalability, IP Strength, Commercial Alignment, and Recovery Performance.

#### User Story US-07: Claim Provenance Inspection
* **As a** Battery Engineering Director,  
* **I want to** click any technical assertion to view its primary source, publisher, and publication date,  
* **So that** I can verify whether a claimed recovery rate originates from an independent academic paper or a marketing pitch.
* **Acceptance Criteria:**
  * *Given* the Evidence Verification view for a selected startup,
  * *When* the user clicks on a finding row,
  * *Then* an expandable drawer reveals the source metadata, document type, publication date, and verbatim text snippet.

#### User Story US-08: Four-Tier Status Audit
* **As an** Innovation Governance Lead,  
* **I want** every finding labeled with one of the 4 defined verification statuses,  
* **So that** our executive steering committee knows exactly which data points are legally defensible vs unverified claims.
* **Acceptance Criteria:**
  * *Given* the evidence table,
  * *When* rendered,
  * *Then* every finding displays a dedicated badge (`Verified Fact` in green, `Company-Reported Claim` in blue/amber, `AI-Generated Inference` in purple, `Could Not Be Verified` in red) accompanied by an explanatory legend.

#### User Story US-09: Filtering Unverified Claims
* **As an** R&D Reviewer,  
* **I want to** filter the evidence view to hide unverified or AI-inferred claims,  
* **So that** I can review only hard, source-corroborated facts during technical qualification meetings.
* **Acceptance Criteria:**
  * *Given* the evidence verification screen,
  * *When* the user clicks the "Verified Fact" filter tag,
  * *Then* only rows bearing the `Verified Fact` badge remain visible.

#### User Story US-10: Executive Dossier & Print Export
* **As an** Open Innovation Director,  
* **I want to** export the top 3 recommended partners as an executive-ready PDF report,  
* **So that** I can immediately brief our VP of Engineering and Procurement Committee without spending hours building slides.
* **Acceptance Criteria:**
  * *Given* the Recommendation Report screen,
  * *When* the user clicks "Export Report / Print PDF",
  * *Then* the browser print dialog opens with a dedicated print layout suppressing UI navigation, headers, and interactive buttons.

#### User Story US-11: Evidence Coverage Visibility
* **As a** Corporate Venture Analyst,  
* **I want to** see an aggregate percentage breakdown of verified vs unverified claims across the top 3 shortlist,  
* **So that** I can gauge overall diligence risk before recommending deal exploration.
* **Acceptance Criteria:**
  * *Given* the final recommendation report,
  * *When* the user views the Evidence Coverage summary widget,
  * *Then* horizontal stacked progress bars show the exact percentage of Verified Facts, Company Claims, AI Inferences, and Unverified Claims.

#### User Story US-12: Saved Project Recall
* **As an** Innovation Scout,  
* **I want to** access my previously run scouting projects from a persistent menu,  
* **So that** I can resume analysis on past briefs without re-entering parameters.
* **Acceptance Criteria:**
  * *Given* the application header,
  * *When* the user clicks "Saved Projects",
  * *Then* a drawer displays past briefs with timestamps, candidate counts, and a "Load Project" action that restores that brief's full state.

---

### 5. Feature Prioritization: How I Evaluated MoSCoW & RICE

To determine what made the cut for the MVP versus future iterations, I evaluated all candidate features using both the MoSCoW framework and the RICE prioritization scoring model:
$$\text{RICE Score} = \frac{\text{Reach (users/qtr)} \times \text{Impact (0.5=low, 1=med, 2=high, 3=massive)} \times \text{Confidence (50\% to 100\%)}}{\text{Effort (person-weeks)}}$$

| Feature Name | MoSCoW | Reach | Impact | Confidence | Effort (Wks) | RICE Score | MVP Decision |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Structured Business Objective Input** | **Must** | 500 | 2.0 | 90% | 2 | **450** | **In Scope (MVP)** |
| **Multi-Source Technology Discovery Dashboard** | **Must** | 500 | 3.0 | 90% | 4 | **337.5** | **In Scope (MVP)** |
| **4-Tier Evidence Verification & Provenance Drawer** | **Must** | 500 | 3.0 | 85% | 3 | **425** | **In Scope (MVP)** |
| **Side-by-Side Startup Comparison Matrix** | **Must** | 450 | 2.0 | 90% | 2 | **405** | **In Scope (MVP)** |
| **Executive Recommendation Dossier & PDF Print** | **Must** | 450 | 2.0 | 90% | 2 | **405** | **In Scope (MVP)** |
| **Saved Research Projects (Local Cache)** | **Should** | 350 | 1.0 | 95% | 1 | **332.5** | **In Scope (MVP)** |
| **Automated Technology & Patent Alert Monitoring** | **Could** | 250 | 1.0 | 70% | 4 | **43.8** | Post-MVP v1.1 |
| **Multi-User Collaboration & Inline Commenting** | **Later** | 200 | 1.0 | 60% | 6 | **20.0** | Post-MVP v1.2 |
| **Direct Enterprise Single Sign-On (Okta / Azure AD)** | **Later** | 150 | 0.5 | 90% | 3 | **22.5** | Post-MVP v1.2 |

---

### 6. My Key Product Decision: Problem Fit vs. Popularity Ranking

#### 6.1 The Strategic Trade-Off I Navigated
A foundational product decision I made in ScoutIQ is **scoring and ranking startups strictly by contextual fit to the enterprise's operational constraints, rather than market popularity, venture capital raised, or media buzz.**

* **The Industry Trap:** Incumbent platforms (PitchBook, Crunchbase, general AI search engines) sort results by total funding raised, employee growth, or semantic frequency. This introduces severe bias toward capital-rich startups with aggressive PR agencies, systematically disadvantaging stealth university spin-outs or bootstrapped European engineering firms that possess superior, commercially viable technology.
* **My PM Stance:** An automotive OEM engineering team cannot deploy venture capital into an assembly line. They require specific chemical purity, verifiable continuous pilot operation, regulatory compliance, and patent freedom-to-operate.
* **Concrete Example from My Prototype (*Illustrative data*):**
  * *Startup Alpha ("Venture Favorite — PyroLoop Technologies"):* Raised \$85M; operates large commercial furnaces (TRL 8); but their thermal process burns off lithium and captures only 62% in slag. High carbon footprint.
  * *Startup Beta ("Industrial Contender — Circura Materials"):* Raised \$14.5M; operates an operational 1,000 ton/year continuous hydrometallurgy pilot facility in Baden-Württemberg; independently verified 95.8% battery-grade nickel/cobalt/lithium recovery; 4 granted patents.
  * **The Decision:** Under ScoutIQ's constraint-weighted scoring model, **Circura Materials ranks #1 (Fit Score: 94%)** while **PyroLoop Technologies ranks #3 (Fit Score: 82%)**. Even though PyroLoop has 6x the funding and higher raw TRL, Circura satisfies the OEM's operational reality of closed-loop circularity.

#### 6.2 The Weighted Scoring Model Specification
The composite Fit Score $S \in [0, 100]$ is computed as a normalized weighted sum across five core strategic dimensions:

$$S = \sum_{i=1}^{5} w_i \cdot C_i \quad \text{where} \quad \sum_{i=1}^{5} w_i = 1.0$$

Where $C_i \in [0, 100]$ represents the evaluated dimension score:
1. **$C_1$ — Technical Maturity & TRL Alignment (Default Weight: $w_1 = 0.25$):**  
   Evaluates readiness level against the user's target TRL range. Penalizes pure lab bench discoveries (< TRL 5) when commercial pilot validation is requested.
2. **$C_2$ — Industrial Deployment & Scalability (Default Weight: $w_2 = 0.25$):**  
   Evaluates physical operational facilities, operating throughput (e.g., metric tons/year), continuous vs. batch processing, and demonstrated operational safety.
3. **$C_3$ — IP Strength & Defensibility (Default Weight: $w_3 = 0.20$):**  
   Evaluates granted patents vs. unexamined applications across key patent jurisdictions (USPTO, EPO, WIPO, CNIPA), freedom-to-operate indicators, and citation density.
4. **$C_4$ — Strategic & Commercial Alignment (Default Weight: $w_4 = 0.15$):**  
   Evaluates geographic proximity to target battery manufacturing hubs, existing industrial co-development agreements, and commercial off-take partnerships.
5. **$C_5$ — Performance Metrics & Recovery Yield (Default Weight: $w_5 = 0.15$):**  
   Evaluates domain-specific key performance indicators (e.g., $>95\%$ recovery yield of Lithium, Nickel, and Cobalt at battery-grade $>99.5\%$ purity with low carbon footprint).

*User Customization:* Users can adjust all five weights $w_1 \dots w_5$ via interactive UI sliders in real-time to reflect project-specific priorities (e.g., an early-stage exploratory research team can increase IP weight to 40% and reduce Scalability to 10%).

---

### 7. Non-Functional Requirements (NFRs)

#### 7.1 Latency & Performance
* **NFR-1 (Query Latency):** Simulated scouting workflow shall deliver complete landscape synthesis within 3.5 seconds in prototype mode. In production LLM agent pipelines, end-to-end multi-source retrieval and ranking shall complete in $\le 60$ seconds for full reports.
* **NFR-2 (UI Responsiveness):** All client-side filtering, sorting, and dynamic weight recalculations shall execute in $\le 50$ milliseconds.

#### 7.2 Auditability & Provenance
* **NFR-3 (Immutable Citation Trail):** Every technical assertion presented on the platform must be tied to a specific source record containing title, publisher/registry, date, and source excerpt.
* **NFR-4 (Transparent Scoring):** The system shall never present a black-box integer score without exposing the exact formulaic breakdown and criteria contributions.

#### 7.3 Security & Confidentiality
* **NFR-5 (Prompt Confidentiality):** Business objectives and technical search queries entered by enterprise users must be isolated; client queries must never be utilized to train public foundation models.
* **NFR-6 (Role-Based Access):** Prototype utilizes local client storage; enterprise production architecture requires tenant data isolation and AES-256 encryption at rest.

#### 7.4 Explainability
* **NFR-7 (Doubt Visibility):** When a startup claim lacks independent corroboration, the system must explicitly display `Could Not Be Verified` rather than hallucinating validation or assuming truth.

---

### 8. Assumptions, Risks, and Mitigations

| Risk Category | Identified Risk | Impact | My Mitigation Strategy |
| :--- | :--- | :---: | :--- |
| **Model Reliability** | LLM extracts inaccurate technical numbers (e.g., mistaking laboratory batch yield for industrial continuous yield). | High | Strict regex and programmatic extraction validation; mandatory grounding where the model must highlight the exact byte offset/span in the source text before writing an attribute. |
| **Data Recency** | Patent filings have an 18-month statutory publication delay; stealth startups may have unindexed IP. | Medium | Triangulate early patent applications via university tech-transfer office announcements, SBIR/Horizon grant registries, and pre-print research archives. |
| **Startup Exaggeration** | Startups publish misleading press releases claiming commercial readiness that is actually an unfinanced letter of intent (LOI). | High | Classification rule: Press releases without verified regulatory filings or customer co-statements are automatically capped at `Company-Reported Claim` and cannot achieve `Verified Fact`. |
| **User Confirmation Bias** | Users may adjust weight sliders specifically to force their favorite startup to rank #1. | Low | Retain an audit trail of default score vs. customized score in the final exported executive dossier to maintain governance transparency. |

---

### 9. Open Questions for Technical & Market Due Diligence

1. **Commercial Data Licensing:** What are the marginal API unit costs for accessing enterprise patent databases (e.g., LexisNexis PatentSight, IFI Claims) versus open registries (EPO Open Patent Services, USPTO PatentsView)?
2. **Human-in-the-Loop Threshold:** At what confidence threshold should the system automatically route a technical claim to an internal human metallurgical analyst before surfacing it in the executive report?
3. **Patent Claim Scope Extraction:** Can automated LLM parsers reliably distinguish between broad independent claims and narrower dependent claims in complex chemical patent filings?

---
*End of Deliverable 02: Product Requirements Document (ScoutIQ PM Case Study — Illustrative Data).*
