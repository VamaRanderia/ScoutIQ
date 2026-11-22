import React from 'react'
import { FileText, Printer, CheckCircle2, AlertTriangle, ShieldAlert, ArrowRight, ExternalLink, Award, Sparkles, Building2 } from 'lucide-react'
import StatusBadge from './StatusBadge'

export default function RecommendationScreen({ startups, objective }) {
  const topThree = startups.slice(0, 3)

  const allFindings = topThree.flatMap(s => s.findings)
  const totalFindings = allFindings.length
  const verifiedCount = allFindings.filter(f => f.status.toLowerCase() === 'verified fact').length
  const companyCount = allFindings.filter(f => f.status.toLowerCase() === 'company-reported claim').length
  const aiCount = allFindings.filter(f => f.status.toLowerCase() === 'ai-generated inference').length
  const unverifiedCount = allFindings.filter(f => f.status.toLowerCase() === 'could not be verified').length

  const verifiedPct = Math.round((verifiedCount / totalFindings) * 100)
  const companyPct = Math.round((companyCount / totalFindings) * 100)
  const aiPct = Math.round((aiCount / totalFindings) * 100)
  const unverifiedPct = Math.round((unverifiedCount / totalFindings) * 100)

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 no-print">
        <div>
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full uppercase tracking-wider">
            Step 5 of 5: Executive Synthesis
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
            Executive Recommendation Dossier
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Prioritized shortlist and risk-adjusted co-development roadmap for automotive engineering leadership.
          </p>
        </div>

        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-md transition-all cursor-pointer"
        >
          <Printer className="w-4 h-4 text-blue-400" />
          <span>Export as PDF / Print Dossier</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10 mb-8 print-card">
        <div className="border-b border-slate-200 pb-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500 mb-2">
            <span>CONFIDENTIAL &bull; INTERNAL INNOVATION REVIEW</span>
            <span>Date: November 2026 &bull; Project ID: {objective.id}</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Strategic Technology Scouting Dossier: {objective.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
            Mandate: {objective.prompt}
          </p>

          <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
            <div><span className="font-semibold text-slate-700">Target Industry:</span> {objective.industry}</div>
            <div><span className="font-semibold text-slate-700">Focus:</span> {objective.technologyArea}</div>
            <div><span className="font-semibold text-slate-700">Maturity Target:</span> TRL {objective.minTrl}–{objective.maxTrl}</div>
            <div><span className="font-semibold text-slate-700">Geography:</span> {objective.geography}</div>
          </div>
        </div>

        <div className="mb-8 p-5 bg-slate-50 rounded-xl border border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-4 h-4 text-blue-600" />
              Shortlist Evidence Coverage Summary
            </h3>
            <span className="text-xs text-slate-500">
              Aggregated across {totalFindings} evaluated candidate assertions
            </span>
          </div>

          <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden flex mb-3">
            <div style={{ width: `${verifiedPct}%` }} className="bg-emerald-500 h-full" title={`Verified Facts: ${verifiedPct}%`}></div>
            <div style={{ width: `${companyPct}%` }} className="bg-amber-500 h-full" title={`Company Claims: ${companyPct}%`}></div>
            <div style={{ width: `${aiPct}%` }} className="bg-purple-500 h-full" title={`AI Inferences: ${aiPct}%`}></div>
            <div style={{ width: `${unverifiedPct}%` }} className="bg-rose-500 h-full" title={`Could Not Be Verified: ${unverifiedPct}%`}></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <span className="text-slate-700 font-medium">{verifiedPct}% Verified Facts</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              <span className="text-slate-700 font-medium">{companyPct}% Company Claims</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
              <span className="text-slate-700 font-medium">{aiPct}% AI Inferences</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
              <span className="text-slate-700 font-medium">{unverifiedPct}% Unverifiable</span>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2">
            Top 3 Recommended Technology Partners
          </h3>

          {topThree.map((startup, index) => (
            <div
              key={startup.id}
              className={`p-6 rounded-xl border ${
                index === 0
                  ? 'border-blue-300 bg-blue-50/20 shadow-sm'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-blue-600 text-white">
                      Shortlist #{index + 1}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900">{startup.name}</h4>
                    <span className="text-xs text-slate-500">&bull; {startup.location}</span>
                  </div>
                  <p className="text-xs font-medium text-slate-700">{startup.headline}</p>
                </div>

                <div className="text-left sm:text-right shrink-0">
                  <div className="text-2xl font-black font-mono text-blue-600">{startup.fitScore}%</div>
                  <div className="text-[10px] text-slate-500 font-medium">Weighted Fit Score</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mb-4">
                <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1 text-[11px] uppercase tracking-wider text-emerald-700">
                    Strategic Rationale & Verified Merits
                  </span>
                  <p className="text-slate-700 leading-relaxed">
                    {startup.overview}
                  </p>
                  <div className="mt-2 text-[11px] text-slate-600 font-semibold">
                    &bull; Maturity: {startup.comparisonMetrics.technologyMaturity}
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1 text-[11px] uppercase tracking-wider text-amber-700">
                    Trade-offs & Operational Risks
                  </span>
                  <ul className="list-disc pl-4 space-y-1 text-slate-600">
                    {startup.keyRisks.map((risk, rIdx) => (
                      <li key={rIdx}>{risk}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-slate-100/80 p-3.5 rounded-lg border border-slate-200 text-xs">
                <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  Suggested Concrete Next Steps:
                </div>
                <p className="text-slate-700 leading-relaxed font-medium">
                  {startup.recommendation}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 text-xs text-slate-500 space-y-2">
          <div className="font-semibold text-slate-700">Governance & Audit Attestation</div>
          <p className="leading-relaxed">
            This brief was compiled autonomously via ScoutIQ by cross-indexing official patent offices (USPTO, EPO), peer-reviewed publications, and industrial registries. All quantitative metrics have undergone multi-tier verification. Factual claims without third-party corroboration are flagged in accordance with enterprise innovation compliance guidelines.
          </p>
          <p className="italic text-[10px] text-slate-400 pt-2">
            Product Management Case Study - Illustrative Data. Conceptual prototype, not a deployed commercial system.
          </p>
        </div>
      </div>
    </div>
  )
}
