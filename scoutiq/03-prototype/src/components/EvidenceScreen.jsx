import React, { useState } from 'react'
import { ShieldCheck, ArrowRight, ExternalLink, Filter, ChevronDown, ChevronUp, FileText, CheckCircle2, AlertTriangle, Sparkles, XCircle, Building2 } from 'lucide-react'
import StatusBadge from './StatusBadge'

export default function EvidenceScreen({
  startups,
  activeStartupId,
  setActiveStartupId,
  onNavigateToRecommendation
}) {
  const [statusFilter, setStatusFilter] = useState('all')
  const [expandedFindingId, setExpandedFindingId] = useState(null)

  const activeStartup = startups.find(s => s.id === activeStartupId) || startups[0]

  const filteredFindings = activeStartup.findings.filter(f => {
    if (statusFilter === 'all') return true
    return f.status.toLowerCase() === statusFilter.toLowerCase()
  })

  const countByStatus = {
    'all': activeStartup.findings.length,
    'verified fact': activeStartup.findings.filter(f => f.status.toLowerCase() === 'verified fact').length,
    'company-reported claim': activeStartup.findings.filter(f => f.status.toLowerCase() === 'company-reported claim').length,
    'ai-generated inference': activeStartup.findings.filter(f => f.status.toLowerCase() === 'ai-generated inference').length,
    'could not be verified': activeStartup.findings.filter(f => f.status.toLowerCase() === 'could not be verified').length
  }

  const toggleExpand = (id) => {
    setExpandedFindingId(prev => (prev === id ? null : id))
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full uppercase tracking-wider">
            Step 4 of 5: Evidence & Source Verification
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
            Claim Attribution & Source Provenance Inspector
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Every technical metric, throughput number, and patent claim grounded in primary citations with 4-tier credibility auditing.
          </p>
        </div>

        <button
          onClick={onNavigateToRecommendation}
          className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg shadow-sm transition-all cursor-pointer"
        >
          <span>View Final Recommendation</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-3">
        {startups.map((s) => (
          <button
            key={s.id}
            onClick={() => {
              setActiveStartupId(s.id)
              setExpandedFindingId(null)
            }}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              s.id === activeStartup.id
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>{s.name}</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
              s.id === activeStartup.id ? 'bg-slate-700 text-blue-300' : 'bg-slate-100 text-slate-600'
            }`}>
              {s.fitScore}%
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <h2 className="text-lg font-bold text-slate-900">{activeStartup.name}</h2>
                <p className="text-xs text-slate-500">{activeStartup.headline}</p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500">Maturity:</span>
                <span className="text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded">
                  TRL {activeStartup.trl}
                </span>
                <span className="text-xs text-slate-400">|</span>
                <span className="text-xs text-slate-500">Fit:</span>
                <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                  {activeStartup.fitScore}%
                </span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Filter className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-xs font-semibold text-slate-700">Filter Claims:</span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {[
                  { key: 'all', label: 'All Claims', count: countByStatus['all'] },
                  { key: 'verified fact', label: 'Verified Facts', count: countByStatus['verified fact'] },
                  { key: 'company-reported claim', label: 'Company Claims', count: countByStatus['company-reported claim'] },
                  { key: 'ai-generated inference', label: 'AI Inferences', count: countByStatus['ai-generated inference'] },
                  { key: 'could not be verified', label: 'Unverified', count: countByStatus['could not be verified'] }
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setStatusFilter(item.key)}
                    className={`text-xs px-2.5 py-1 rounded-md transition-colors cursor-pointer flex items-center gap-1 ${
                      statusFilter === item.key
                        ? 'bg-blue-600 text-white font-medium shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] opacity-75 font-mono">({item.count})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {filteredFindings.map((finding) => {
              const isExpanded = expandedFindingId === finding.id
              return (
                <div
                  key={finding.id}
                  className={`bg-white rounded-xl border transition-all ${
                    isExpanded ? 'border-blue-400 shadow-md ring-1 ring-blue-100' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div
                    onClick={() => toggleExpand(finding.id)}
                    className="p-4 sm:p-5 cursor-pointer flex items-start justify-between gap-4"
                  >
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <StatusBadge status={finding.status} />
                        <span className="text-[11px] text-slate-500 font-mono">
                          Confidence: {finding.confidence}
                        </span>
                        <span className="text-slate-300">&bull;</span>
                        <span className="text-[11px] text-slate-500">
                          {finding.sourceType}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                        "{finding.claim}"
                      </p>

                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pt-1">
                        <span className="font-medium text-slate-700 flex items-center gap-1">
                          <FileText className="w-3.5 h-3.5 text-slate-400" />
                          Source: {finding.source}
                        </span>
                        <span className="text-slate-400">&bull;</span>
                        <span>Date: {finding.date}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="p-1 rounded text-slate-400 hover:text-slate-600 hover:bg-slate-100 mt-1"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-3 border-t border-slate-100 bg-slate-50/70 rounded-b-xl space-y-3">
                      <div>
                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                          Verbatim Citation & Primary Evidence Grounding
                        </div>
                        <div className="text-xs text-slate-800 bg-white border border-slate-200 rounded-lg p-3 font-mono leading-relaxed shadow-inner">
                          "{finding.snippet}"
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                        <div className="bg-white p-2.5 rounded border border-slate-200">
                          <span className="font-semibold text-slate-700 block text-[11px]">Source Registry / Publisher:</span>
                          <span className="text-slate-600 truncate block">{finding.source}</span>
                        </div>
                        <div className="bg-white p-2.5 rounded border border-slate-200">
                          <span className="font-semibold text-slate-700 block text-[11px]">Audit Methodology:</span>
                          <span className="text-slate-600">Cross-verified against official regulatory registry and NLI text inference.</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}

            {filteredFindings.length === 0 && (
              <div className="bg-white rounded-xl border border-dashed border-slate-300 p-8 text-center text-xs text-slate-500">
                No findings match the selected status filter.
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              Four-Tier Verification Legend
            </h3>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-lg border border-emerald-200 bg-emerald-50/60">
                <div className="flex items-center gap-1.5 font-bold text-emerald-900 mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Verified fact (Green)
                </div>
                <p className="text-[11px] text-emerald-800 leading-relaxed">
                  Corroborated by &ge;2 independent Tier-1 sources or official statutory filings (granted patents, EPA permits, audited reports).
                </p>
              </div>

              <div className="p-3 rounded-lg border border-amber-200 bg-amber-50/60">
                <div className="flex items-center gap-1.5 font-bold text-amber-900 mb-1">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                  Company-reported claim (Amber)
                </div>
                <p className="text-[11px] text-amber-800 leading-relaxed">
                  Asserted in company whitepaper, pitch deck, or press release with no independent third-party audit found.
                </p>
              </div>

              <div className="p-3 rounded-lg border border-purple-200 bg-purple-50/60">
                <div className="flex items-center gap-1.5 font-bold text-purple-900 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                  AI-generated inference (Purple)
                </div>
                <p className="text-[11px] text-purple-800 leading-relaxed">
                  Synthesized or extrapolated by ScoutIQ domain models (e.g., capex projections from reactor bill-of-materials).
                </p>
              </div>

              <div className="p-3 rounded-lg border border-rose-200 bg-rose-50/60">
                <div className="flex items-center gap-1.5 font-bold text-rose-900 mb-1">
                  <XCircle className="w-3.5 h-3.5 text-rose-600" />
                  Could not be verified (Red)
                </div>
                <p className="text-[11px] text-rose-800 leading-relaxed">
                  Investigated across patent and regulatory registries; zero evidence found, or independent data contradicts claim.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-xl p-5 shadow-lg">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Why Verification Matters in Automotive
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              When entering joint development agreements (JDAs) or building gigafactory recycling supply chains, engineering directors cannot risk relying on self-reported startup specs. ScoutIQ surfaces explicit doubt before capital is deployed.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
