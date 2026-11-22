import React, { useState } from 'react'
import { Scale, ArrowRight, ShieldCheck, ChevronDown, ChevronUp, CheckCircle2, AlertCircle, Info, Sparkles } from 'lucide-react'

export default function ComparisonScreen({
  startups,
  selectedStartupIds,
  onInspectStartupEvidence,
  onNavigateToRecommendation
}) {
  const [showScoreBreakdown, setShowScoreBreakdown] = useState(true)

  const selectedCompanies = startups.filter(s => selectedStartupIds.includes(s.id))
  const displayedCompanies = selectedCompanies.length > 0 ? selectedCompanies : startups.slice(0, 4)

  const criteriaLabels = [
    { key: 'technicalMaturity', label: 'Technical Maturity (TRL)', weight: '25%' },
    { key: 'industrialScalability', label: 'Industrial Scalability & Pilot', weight: '25%' },
    { key: 'ipStrength', label: 'IP & Patent Strength', weight: '20%' },
    { key: 'commercialAlignment', label: 'Commercial & Geo Alignment', weight: '15%' },
    { key: 'performanceYield', label: 'Performance & Recovery Yield', weight: '15%' }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full uppercase tracking-wider">
            Step 3 of 5: Candidate Comparison
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
            Side-by-Side Partner Evaluation Matrix
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Evaluating {displayedCompanies.length} candidate innovators across standardized technical maturity, IP defense, and commercial deployment benchmarks.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowScoreBreakdown(!showScoreBreakdown)}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg shadow-sm transition-colors cursor-pointer"
          >
            {showScoreBreakdown ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            {showScoreBreakdown ? 'Hide Score Breakdown' : 'Show Weighted Score Breakdown'}
          </button>
          <button
            onClick={onNavigateToRecommendation}
            className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg shadow-sm transition-all cursor-pointer"
          >
            <span>Proceed to Recommendation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="mb-6 bg-amber-50/70 border border-amber-200 rounded-xl p-4 text-xs text-amber-900 flex items-start gap-3">
        <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <span className="font-bold">Key Product Decision in Action:</span> Notice how{' '}
          <strong>Circura Materials (Rank #1, Fit: 94%)</strong> outranks{' '}
          <strong>PyroLoop Technologies (Rank #3, Fit: 82%)</strong> despite PyroLoop having a higher raw commercial readiness (TRL 8 vs TRL 7) and larger capital base ($85M vs $14.5M). Under ScoutIQ's constraint-weighted scoring, PyroLoop's pyrometallurgical process fails the OEM's low-carbon circularity and &gt;95% lithium recovery thresholds.
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-xs">
            <thead>
              <tr className="bg-slate-900 text-white border-b border-slate-800">
                <th className="p-4 w-60 text-xs font-bold uppercase tracking-wider text-slate-300">
                  Evaluation Dimension
                </th>
                {displayedCompanies.map((startup, idx) => (
                  <th key={startup.id} className="p-4 min-w-[240px] border-l border-slate-800">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[10px] font-mono bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2 py-0.5 rounded font-bold">
                        Rank #{idx + 1}
                      </span>
                      <span className="text-xl font-black font-mono text-blue-400">
                        {startup.fitScore}%
                      </span>
                    </div>
                    <div className="font-bold text-sm text-white truncate">{startup.name}</div>
                    <div className="text-[11px] text-slate-400 font-normal">{startup.location}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="bg-slate-50/60 font-semibold text-slate-900">
                <td className="p-4 bg-slate-100/70 text-slate-800 font-bold">Technology Archetype</td>
                {displayedCompanies.map(s => (
                  <td key={s.id} className="p-4 border-l border-slate-200 font-medium">
                    <span className="bg-slate-200 text-slate-800 px-2 py-0.5 rounded text-[11px]">
                      {s.category}
                    </span>
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 bg-slate-50 font-semibold text-slate-800">Technology Maturity</td>
                {displayedCompanies.map(s => (
                  <td key={s.id} className="p-4 border-l border-slate-200">
                    <div className="font-bold text-slate-900">{s.comparisonMetrics.technologyMaturity.split('(')[0]}</div>
                    <div className="text-slate-600 text-[11px] mt-0.5">{s.comparisonMetrics.technologyMaturity}</div>
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 bg-slate-50 font-semibold text-slate-800">Patent Evidence</td>
                {displayedCompanies.map(s => (
                  <td key={s.id} className="p-4 border-l border-slate-200">
                    <div className="font-medium text-slate-900">{s.comparisonMetrics.patentEvidence}</div>
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 bg-slate-50 font-semibold text-slate-800">Research Publications</td>
                {displayedCompanies.map(s => (
                  <td key={s.id} className="p-4 border-l border-slate-200">
                    <div className="text-slate-700">{s.comparisonMetrics.publications}</div>
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 bg-slate-50 font-semibold text-slate-800">Commercial Deployment</td>
                {displayedCompanies.map(s => (
                  <td key={s.id} className="p-4 border-l border-slate-200">
                    <div className="font-medium text-slate-900">{s.comparisonMetrics.commercialDeployment}</div>
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 bg-slate-50 font-semibold text-slate-800">Industrial Partnerships</td>
                {displayedCompanies.map(s => (
                  <td key={s.id} className="p-4 border-l border-slate-200">
                    <div className="text-slate-700">{s.comparisonMetrics.industrialPartnerships}</div>
                  </td>
                ))}
              </tr>

              <tr className="bg-blue-50/30">
                <td className="p-4 bg-slate-100/70 font-bold text-slate-900">Strategic Verdict</td>
                {displayedCompanies.map(s => (
                  <td key={s.id} className="p-4 border-l border-slate-200">
                    <div className="font-semibold text-blue-900 text-[11px] leading-tight">
                      {s.comparisonMetrics.strategicVerdict}
                    </div>
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 bg-slate-50 font-semibold text-slate-800">Evidence Audit Action</td>
                {displayedCompanies.map(s => (
                  <td key={s.id} className="p-4 border-l border-slate-200">
                    <button
                      onClick={() => onInspectStartupEvidence(s.id)}
                      className="w-full flex items-center justify-center gap-1.5 py-1.5 px-2 bg-white hover:bg-blue-50 text-blue-700 border border-blue-300 rounded text-xs font-medium transition-colors cursor-pointer"
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Audit {s.findings.length} Claims
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {showScoreBreakdown && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <h2 className="text-base font-bold text-slate-900">
              Multi-Attribute Weighted Score Breakdown
            </h2>
          </div>
          <p className="text-xs text-slate-500 mb-6">
            Formulaic contribution of each dimension to the overall Fit Score: Score = &Sigma; (Weight &times; Dimension Score).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedCompanies.map((startup, sIdx) => (
              <div key={startup.id} className="border border-slate-200 rounded-lg p-4 bg-slate-50/50">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200">
                  <span className="font-bold text-sm text-slate-900">{startup.name}</span>
                  <span className="font-mono text-base font-black text-blue-600">{startup.fitScore}%</span>
                </div>

                <div className="space-y-3">
                  {criteriaLabels.map((crit) => {
                    const scoreVal = startup.scoreBreakdown[crit.key] || 0
                    return (
                      <div key={crit.key} className="space-y-1">
                        <div className="flex justify-between text-[11px]">
                          <span className="text-slate-600 truncate max-w-[140px]">{crit.label}</span>
                          <span className="font-mono font-semibold text-slate-900">{scoreVal}/100</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              scoreVal >= 90 ? 'bg-emerald-500' : scoreVal >= 75 ? 'bg-blue-500' : 'bg-amber-500'
                            }`}
                            style={{ width: `${scoreVal}%` }}
                          ></div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
