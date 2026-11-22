import React, { useState } from 'react'
import { Layers, ArrowRight, ShieldCheck, Scale, Filter, SlidersHorizontal, Award, CheckCircle2, ChevronRight, Info } from 'lucide-react'
import StatusBadge from './StatusBadge'

export default function DiscoveryScreen({
  startups,
  categories,
  selectedStartups,
  onToggleStartupSelection,
  onInspectStartupEvidence,
  onNavigateToComparison,
  onNavigateToRecommendation
}) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [minTrlFilter, setMinTrlFilter] = useState(4)
  const [sortBy, setSortBy] = useState('fitScore')
  const [showCategoryGuide, setShowCategoryGuide] = useState(false)

  const filteredStartups = startups
    .filter(s => {
      if (selectedCategory !== 'all' && s.category.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false
      }
      if (s.trl < minTrlFilter) {
        return false
      }
      return true
    })
    .sort((a, b) => {
      if (sortBy === 'fitScore') return b.fitScore - a.fitScore
      if (sortBy === 'trl') return b.trl - a.trl
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      return 0
    })

  const trlDistribution = [
    { trl: 4, label: 'TRL 4 (Lab Proof)', count: startups.filter(s => s.trl === 4).length },
    { trl: 5, label: 'TRL 5 (Validation Cell)', count: startups.filter(s => s.trl === 5).length },
    { trl: 6, label: 'TRL 6 (Pilot Demo)', count: startups.filter(s => s.trl === 6).length },
    { trl: 7, label: 'TRL 7 (Industrial Pilot)', count: startups.filter(s => s.trl === 7).length },
    { trl: 8, label: 'TRL 8 (Commercial Ops)', count: startups.filter(s => s.trl === 8).length }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full uppercase tracking-wider">
            Step 2 of 5: Landscape Discovery
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
            Technology Landscape & Candidate Directory
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Identified {startups.length} candidate innovators across 4 technological archetypes. Ranked by composite objective fit.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowCategoryGuide(!showCategoryGuide)}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg shadow-sm transition-colors"
          >
            <Info className="w-4 h-4 text-blue-600" />
            {showCategoryGuide ? 'Hide Technology Archetypes' : 'Explore Technology Archetypes'}
          </button>
          <button
            onClick={onNavigateToComparison}
            disabled={selectedStartups.length < 2}
            className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg shadow-sm transition-all ${
              selectedStartups.length >= 2
                ? 'bg-blue-600 hover:bg-blue-500 text-white cursor-pointer'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            <Scale className="w-4 h-4" />
            Compare Selected ({selectedStartups.length})
          </button>
        </div>
      </div>

      {showCategoryGuide && (
        <div className="mb-8 bg-slate-900 text-white rounded-xl p-6 border border-slate-800 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-400" />
              EV Battery Recycling Technological Archetypes
            </h2>
            <span className="text-xs text-slate-400">Illustrative Domain Classification</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-slate-800/80 rounded-lg p-4 border border-slate-700 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-sm text-blue-300">{cat.name}</h3>
                    <span className="text-[10px] font-mono bg-blue-900/60 text-blue-200 px-2 py-0.5 rounded border border-blue-700/50">
                      Share: {cat.marketShare}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
                <div className="text-[11px] pt-3 border-t border-slate-700/70 space-y-1">
                  <div className="text-emerald-400">
                    <span className="font-semibold">Advantage:</span> {cat.pros}
                  </div>
                  <div className="text-rose-400">
                    <span className="font-semibold">Constraint:</span> {cat.cons}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
        <div className="lg:col-span-8 bg-white rounded-xl border border-slate-200 shadow-sm p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-500" />
              <span className="text-xs font-semibold text-slate-700">Filters:</span>

              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-blue-600 text-white font-medium'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  All Archetypes
                </button>
                {categories.map(c => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCategory(c.name)}
                    className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
                      selectedCategory.toLowerCase() === c.name.toLowerCase()
                        ? 'bg-blue-600 text-white font-medium'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="text-xs text-slate-500">Min TRL:</span>
                <select
                  value={minTrlFilter}
                  onChange={(e) => setMinTrlFilter(parseInt(e.target.value, 10))}
                  className="text-xs bg-slate-50 border border-slate-300 rounded-md px-2 py-1 outline-none text-slate-700"
                >
                  <option value={4}>TRL 4+</option>
                  <option value={5}>TRL 5+</option>
                  <option value={6}>TRL 6+</option>
                  <option value={7}>TRL 7+</option>
                </select>
              </div>

              <div className="flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500" />
                <span className="text-xs text-slate-500">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-xs bg-slate-50 border border-slate-300 rounded-md px-2 py-1 outline-none text-slate-700 font-medium"
                >
                  <option value="fitScore">Objective Fit Score</option>
                  <option value="trl">Technology Readiness (TRL)</option>
                  <option value="name">Company Name</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
            <span>Showing {filteredStartups.length} of {startups.length} candidate companies</span>
            <span className="italic text-[11px]">Ranked strictly against weighted operational criteria</span>
          </div>
        </div>

        <div className="lg:col-span-4 bg-white rounded-xl border border-slate-200 shadow-sm p-4 sm:p-5">
          <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Award className="w-4 h-4 text-amber-500" />
            Maturity (TRL) Distribution
          </h2>
          <div className="space-y-2">
            {trlDistribution.map((item) => {
              const maxVal = startups.length
              const pct = (item.count / maxVal) * 100
              return (
                <div key={item.trl} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-600">{item.label}</span>
                    <span className="font-mono font-semibold text-slate-800">{item.count}</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        item.trl >= 7 ? 'bg-emerald-500' : item.trl >= 5 ? 'bg-blue-500' : 'bg-slate-400'
                      }`}
                      style={{ width: `${pct}%` }}
                    ></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {filteredStartups.map((startup, index) => {
          const isSelected = selectedStartups.includes(startup.id)
          const verifiedCount = startup.findings.filter(f => f.status.toLowerCase() === 'verified fact').length
          const totalFindings = startup.findings.length

          return (
            <div
              key={startup.id}
              className={`bg-white rounded-xl border transition-all hover:shadow-md ${
                index === 0
                  ? 'border-blue-400 ring-1 ring-blue-200'
                  : 'border-slate-200'
              }`}
            >
              <div className="p-5 sm:p-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                        Rank #{index + 1}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900">{startup.name}</h3>
                      <span className="text-xs text-slate-500">&bull; {startup.location}</span>
                      <span className="text-xs font-medium bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full border border-slate-200">
                        {startup.category}
                      </span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${
                        startup.trl >= 7
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          : startup.trl >= 6
                          ? 'bg-blue-50 text-blue-700 border-blue-200'
                          : 'bg-amber-50 text-amber-700 border-amber-200'
                      }`}>
                        TRL {startup.trl}
                      </span>
                    </div>

                    <p className="text-xs font-medium text-slate-600">
                      {startup.headline}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed pt-1 max-w-4xl">
                      {startup.overview}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {startup.keyStrengths.slice(0, 3).map((strength, sIdx) => (
                        <span
                          key={sIdx}
                          className="inline-flex items-center gap-1 text-[11px] bg-slate-50 text-slate-700 border border-slate-200 px-2 py-0.5 rounded"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span className="truncate max-w-xs">{strength}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center border-t md:border-t-0 pt-4 md:pt-0 border-slate-100 shrink-0 gap-3">
                    <div className="text-left md:text-right">
                      <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Fit Score</div>
                      <div className="text-3xl font-extrabold text-blue-600 font-mono tracking-tight">
                        {startup.fitScore}%
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium">
                        {verifiedCount}/{totalFindings} claims verified
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onInspectStartupEvidence(startup.id)}
                        className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors cursor-pointer"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                        Evidence
                      </button>

                      <button
                        onClick={() => onToggleStartupSelection(startup.id)}
                        className={`flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <Scale className="w-3.5 h-3.5" />
                        {isSelected ? 'Selected' : 'Compare'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 px-5 sm:px-6 py-2.5 rounded-b-xl border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-slate-700">Commercial Pilot:</span>
                  <span className="text-slate-600 truncate max-w-md">{startup.comparisonMetrics.commercialDeployment}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-slate-700">Patents:</span>
                  <span className="text-slate-600">{startup.comparisonMetrics.patentEvidence.split('(')[0]}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider">
            Ready to Evaluate Shortlist Trade-offs?
          </h4>
          <p className="text-xs text-blue-700 mt-0.5">
            {selectedStartups.length} startups selected for side-by-side technical and patent comparison matrix.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={onNavigateToComparison}
            className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg shadow-sm transition-all cursor-pointer"
          >
            <span>View Comparison Matrix</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onNavigateToRecommendation}
            className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-sm transition-all cursor-pointer"
          >
            <span>Jump to Final Recommendation</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
