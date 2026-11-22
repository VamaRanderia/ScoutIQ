import React, { useState } from 'react'
import { Sparkles, Sliders, CheckCircle2, RefreshCw, ArrowRight, ShieldCheck, Factory, Layers, Award } from 'lucide-react'

export default function ObjectiveScreen({ objective, setObjective, onRunScouting, isAnalyzing, analysisStep }) {
  const [newMustHave, setNewMustHave] = useState('')

  const handleWeightChange = (key, value) => {
    const val = parseInt(value, 10) || 0
    setObjective(prev => ({
      ...prev,
      weights: {
        ...prev.weights,
        [key]: val
      }
    }))
  }

  const handleAddMustHave = (e) => {
    e.preventDefault()
    if (!newMustHave.trim()) return
    setObjective(prev => ({
      ...prev,
      mustHaves: [...prev.mustHaves, newMustHave.trim()]
    }))
    setNewMustHave('')
  }

  const handleRemoveMustHave = (index) => {
    setObjective(prev => ({
      ...prev,
      mustHaves: prev.mustHaves.filter((_, i) => i !== index)
    }))
  }

  const totalWeight = Object.values(objective.weights).reduce((a, b) => a + b, 0)

  const steps = [
    { id: 1, title: 'Understanding Objective & Domain Taxonomy', desc: 'Decomposing technical requirements into chemical/physical parameters' },
    { id: 2, title: 'Searching Global Sources & Registries', desc: 'Cross-querying USPTO, EPO, arXiv preprints, and environmental permits' },
    { id: 3, title: 'Extracting Technologies & Operational Data', desc: 'Parsing continuous throughput, recovery yields, and pilot status' },
    { id: 4, title: 'Verifying Provider Claims Against Evidence', desc: 'Assigning 4-tier credibility badges and detecting unsupported PR claims' },
    { id: 5, title: 'Constraint-Weighted Ranking & Synthesis', desc: 'Applying custom criteria weights to produce top-3 partner recommendations' }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
          <div>
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full uppercase tracking-wider">
              Step 1 of 5: Problem Formulation
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Business Challenge & Scouting Objective
            </h1>
          </div>
          <button
            onClick={() => {
              setObjective({
                id: 'proj-ev-rec-2026',
                title: 'Closed-Loop EV Battery Recycling & Hydrometallurgical Purity',
                industry: 'Automotive & Clean Mobility',
                technologyArea: 'Hydrometallurgy & Direct Recycling',
                geography: 'Europe & North America',
                minTrl: 6,
                maxTrl: 8,
                prompt: 'Identify emerging technology providers specializing in closed-loop hydrometallurgical or direct recycling of lithium-ion EV battery packs (NMC chemistries). Must achieve >95% recovery yield of battery-grade lithium carbonate/hydroxide with verified continuous pilot operations in EU or North America.',
                mustHaves: [
                  'Lithium recovery yield >95%',
                  'Continuous pilot operational (TRL >= 6)',
                  'Battery-grade purity (>99.5%)',
                  'Granted or pending patent protection in EU/US'
                ],
                weights: {
                  technicalMaturity: 25,
                  industrialScalability: 25,
                  ipStrength: 20,
                  commercialAlignment: 15,
                  performanceYield: 15
                }
              })
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Reset to Pre-filled EV Battery Scenario
          </button>
        </div>
        <p className="text-sm text-slate-600 max-w-3xl">
          Define your technical challenge in natural language or adjust structured parameters. ScoutIQ indexes technical publications, patent offices, and operating registries to discover and independently verify candidate partners.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Natural Language Innovation Mandate
            </label>
            <textarea
              rows={5}
              value={objective.prompt}
              onChange={(e) => setObjective(prev => ({ ...prev, prompt: e.target.value }))}
              placeholder="e.g. Identify emerging technology providers specializing in closed-loop hydrometallurgical or direct recycling of lithium-ion EV battery packs..."
              className="w-full text-sm text-slate-800 bg-slate-50 border border-slate-300 rounded-lg p-3 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all leading-relaxed"
            />
            <p className="mt-2 text-xs text-slate-500">
              The semantic parser automatically decomposes this narrative into technical parameters, chemical process classifications, and search vectors.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-4">
            <h2 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-600" />
              Structured Operating Constraints
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Target Industry</label>
                <input
                  type="text"
                  value={objective.industry}
                  onChange={(e) => setObjective(prev => ({ ...prev, industry: e.target.value }))}
                  className="w-full text-xs text-slate-800 bg-slate-50 border border-slate-300 rounded-md p-2.5 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Technology Focus Area</label>
                <input
                  type="text"
                  value={objective.technologyArea}
                  onChange={(e) => setObjective(prev => ({ ...prev, technologyArea: e.target.value }))}
                  className="w-full text-xs text-slate-800 bg-slate-50 border border-slate-300 rounded-md p-2.5 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Target Geographies</label>
                <input
                  type="text"
                  value={objective.geography}
                  onChange={(e) => setObjective(prev => ({ ...prev, geography: e.target.value }))}
                  className="w-full text-xs text-slate-800 bg-slate-50 border border-slate-300 rounded-md p-2.5 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Maturity Range (TRL {objective.minTrl} - {objective.maxTrl})
                </label>
                <div className="flex items-center gap-3 pt-1.5">
                  <span className="text-xs text-slate-500 font-mono">TRL 4</span>
                  <input
                    type="range"
                    min="4"
                    max="9"
                    value={objective.minTrl}
                    onChange={(e) => setObjective(prev => ({ ...prev, minTrl: parseInt(e.target.value, 10) }))}
                    className="w-full accent-blue-600"
                  />
                  <span className="text-xs text-slate-500 font-mono">TRL 9</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <label className="block text-xs font-medium text-slate-700 mb-2">
                Mandatory "Must-Have" Criteria
              </label>
              <div className="flex flex-wrap gap-2 mb-3">
                {objective.mustHaves.map((item, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 text-xs bg-slate-100 text-slate-800 border border-slate-200 px-2.5 py-1 rounded-md"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    {item}
                    <button
                      type="button"
                      onClick={() => handleRemoveMustHave(index)}
                      className="text-slate-400 hover:text-rose-600 ml-1 font-bold"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>

              <form onSubmit={handleAddMustHave} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add custom engineering constraint (e.g., Continuous throughput >500 t/yr)..."
                  value={newMustHave}
                  onChange={(e) => setNewMustHave(e.target.value)}
                  className="flex-1 text-xs text-slate-800 bg-slate-50 border border-slate-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium rounded-md transition-colors"
                >
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-blue-600" />
                <h2 className="text-sm font-semibold text-slate-900">
                  Custom Criteria Weighting
                </h2>
              </div>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                totalWeight === 100 ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
              }`}>
                Sum: {totalWeight}%
              </span>
            </div>

            <p className="text-xs text-slate-500 mb-5">
              ScoutIQ ranks by fit to your specific challenge, not by venture capital hype. Adjust sliders to reflect your project priorities.
            </p>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium text-slate-700 flex items-center gap-1.5">
                    <Factory className="w-3.5 h-3.5 text-slate-500" />
                    Technical Maturity (TRL)
                  </span>
                  <span className="font-mono font-semibold text-slate-900">{objective.weights.technicalMaturity}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="5"
                  value={objective.weights.technicalMaturity}
                  onChange={(e) => handleWeightChange('technicalMaturity', e.target.value)}
                  className="w-full accent-blue-600"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium text-slate-700 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-slate-500" />
                    Industrial Scalability & Pilot Ops
                  </span>
                  <span className="font-mono font-semibold text-slate-900">{objective.weights.industrialScalability}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="5"
                  value={objective.weights.industrialScalability}
                  onChange={(e) => handleWeightChange('industrialScalability', e.target.value)}
                  className="w-full accent-blue-600"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium text-slate-700 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
                    IP & Patent Defensibility
                  </span>
                  <span className="font-mono font-semibold text-slate-900">{objective.weights.ipStrength}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="5"
                  value={objective.weights.ipStrength}
                  onChange={(e) => handleWeightChange('ipStrength', e.target.value)}
                  className="w-full accent-blue-600"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium text-slate-700 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-slate-500" />
                    Commercial & Geographic Alignment
                  </span>
                  <span className="font-mono font-semibold text-slate-900">{objective.weights.commercialAlignment}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="5"
                  value={objective.weights.commercialAlignment}
                  onChange={(e) => handleWeightChange('commercialAlignment', e.target.value)}
                  className="w-full accent-blue-600"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium text-slate-700 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-slate-500" />
                    Performance Yield & Circularity
                  </span>
                  <span className="font-mono font-semibold text-slate-900">{objective.weights.performanceYield}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="5"
                  value={objective.weights.performanceYield}
                  onChange={(e) => handleWeightChange('performanceYield', e.target.value)}
                  className="w-full accent-blue-600"
                />
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 bg-slate-50 rounded-lg p-3 text-[11px] text-slate-600">
              <strong>Core PM Decision Note:</strong> High technical performance without industrial deployment is penalized. Startups with demonstrated continuous pilot operation outrank laboratory favorites.
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-xl p-6 text-white shadow-lg">
            <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              Initiate Multi-Source Scouting
            </h3>
            <p className="text-xs text-slate-300 mb-6 leading-relaxed">
              ScoutIQ will execute query plans across patent databases, scientific preprint repositories, and environmental registries, verifying technical assertions before ranking.
            </p>

            <button
              onClick={onRunScouting}
              disabled={isAnalyzing}
              className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold text-sm rounded-lg shadow-md hover:shadow-blue-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              {isAnalyzing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-white" />
                  <span>Synthesizing Intelligence...</span>
                </>
              ) : (
                <>
                  <span>Run Scouting Analysis</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {isAnalyzing && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <RefreshCw className="w-5 h-5 text-blue-600 animate-spin" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Executing Agentic Scouting Pipeline</h3>
                <p className="text-xs text-slate-500">Autonomous multi-source extraction & verification</p>
              </div>
            </div>

            <div className="space-y-4">
              {steps.map((step) => {
                const isPast = analysisStep > step.id
                const isCurrent = analysisStep === step.id
                const isFuture = analysisStep < step.id

                return (
                  <div
                    key={step.id}
                    className={`flex items-start gap-3 p-3 rounded-lg border transition-all ${
                      isCurrent
                        ? 'bg-blue-50/80 border-blue-200 shadow-sm'
                        : isPast
                        ? 'bg-slate-50 border-slate-200'
                        : 'bg-white border-transparent opacity-40'
                    }`}
                  >
                    <div className="mt-0.5">
                      {isPast ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      ) : isCurrent ? (
                        <span className="flex h-4 w-4 relative items-center justify-center">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
                        </span>
                      ) : (
                        <div className="w-4 h-4 rounded-full border border-slate-300"></div>
                      )}
                    </div>
                    <div>
                      <p className={`text-xs font-semibold ${isCurrent ? 'text-blue-900' : isPast ? 'text-slate-800' : 'text-slate-400'}`}>
                        {step.title}
                      </p>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-center">
              <span className="text-xs text-slate-500">
                Processing stage {analysisStep} of 5 &bull; Grounding against 18 primary sources
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
