import React, { useState, useMemo } from 'react'
import mockData from './data/mockData.json'
import Header from './components/Header'
import ObjectiveScreen from './components/ObjectiveScreen'
import DiscoveryScreen from './components/DiscoveryScreen'
import ComparisonScreen from './components/ComparisonScreen'
import EvidenceScreen from './components/EvidenceScreen'
import RecommendationScreen from './components/RecommendationScreen'
import SavedProjectsModal from './components/SavedProjectsModal'

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('objective')
  const [objective, setObjective] = useState(mockData.defaultScenario)
  const [savedProjectsModalOpen, setSavedProjectsModalOpen] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisStep, setAnalysisStep] = useState(1)
  const [selectedStartupIds, setSelectedStartupIds] = useState([
    'circura-materials',
    'hydravolt-solutions',
    'pyroloop-technologies',
    'disassembli-robotics'
  ])
  const [activeStartupId, setActiveStartupId] = useState('circura-materials')

  const recomputedStartups = useMemo(() => {
    const weights = objective.weights
    const totalW = weights.technicalMaturity + weights.industrialScalability + weights.ipStrength + weights.commercialAlignment + weights.performanceYield || 100

    return mockData.startups.map(startup => {
      const b = startup.scoreBreakdown
      const weightedRaw = (
        (b.technicalMaturity * weights.technicalMaturity) +
        (b.industrialScalability * weights.industrialScalability) +
        (b.ipStrength * weights.ipStrength) +
        (b.commercialAlignment * weights.commercialAlignment) +
        (b.performanceYield * weights.performanceYield)
      ) / totalW

      const fitScore = Math.round(weightedRaw)
      return {
        ...startup,
        fitScore
      }
    }).sort((a, b) => b.fitScore - a.fitScore)
  }, [objective.weights])

  const handleRunScouting = () => {
    setIsAnalyzing(true)
    setAnalysisStep(1)

    const timer1 = setTimeout(() => setAnalysisStep(2), 600)
    const timer2 = setTimeout(() => setAnalysisStep(3), 1300)
    const timer3 = setTimeout(() => setAnalysisStep(4), 2000)
    const timer4 = setTimeout(() => setAnalysisStep(5), 2700)
    const timer5 = setTimeout(() => {
      setIsAnalyzing(false)
      setCurrentScreen('discovery')
    }, 3400)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timer5)
    }
  }

  const handleToggleStartupSelection = (id) => {
    setSelectedStartupIds(prev => {
      if (prev.includes(id)) {
        if (prev.length <= 2) return prev
        return prev.filter(item => item !== id)
      } else {
        return [...prev, id]
      }
    })
  }

  const handleInspectStartupEvidence = (id) => {
    setActiveStartupId(id)
    setCurrentScreen('evidence')
  }

  const handleSelectProject = (projectId) => {
    const proj = mockData.savedProjects.find(p => p.id === projectId)
    if (proj) {
      setObjective(prev => ({
        ...prev,
        id: proj.id,
        title: proj.name
      }))
      setCurrentScreen('discovery')
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased">
      <Header
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
        onOpenSavedProjects={() => setSavedProjectsModalOpen(true)}
        activeProjectTitle={objective.title}
      />

      <main className="flex-1">
        {currentScreen === 'objective' && (
          <ObjectiveScreen
            objective={objective}
            setObjective={setObjective}
            onRunScouting={handleRunScouting}
            isAnalyzing={isAnalyzing}
            analysisStep={analysisStep}
          />
        )}

        {currentScreen === 'discovery' && (
          <DiscoveryScreen
            startups={recomputedStartups}
            categories={mockData.technologyCategories}
            selectedStartups={selectedStartupIds}
            onToggleStartupSelection={handleToggleStartupSelection}
            onInspectStartupEvidence={handleInspectStartupEvidence}
            onNavigateToComparison={() => setCurrentScreen('comparison')}
            onNavigateToRecommendation={() => setCurrentScreen('recommendation')}
          />
        )}

        {currentScreen === 'comparison' && (
          <ComparisonScreen
            startups={recomputedStartups}
            selectedStartupIds={selectedStartupIds}
            onInspectStartupEvidence={handleInspectStartupEvidence}
            onNavigateToRecommendation={() => setCurrentScreen('recommendation')}
          />
        )}

        {currentScreen === 'evidence' && (
          <EvidenceScreen
            startups={recomputedStartups}
            activeStartupId={activeStartupId}
            setActiveStartupId={setActiveStartupId}
            onNavigateToRecommendation={() => setCurrentScreen('recommendation')}
          />
        )}

        {currentScreen === 'recommendation' && (
          <RecommendationScreen
            startups={recomputedStartups}
            objective={objective}
          />
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 py-6 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500 space-y-1">
          <p className="font-semibold text-slate-700">
            ScoutIQ &bull; Product Management Case Study & Interactive Prototype
          </p>
          <p>
            All startups, metrics, patents, and claims are FICTIONAL and generated for demonstration purposes as illustrative data.
          </p>
          <p className="text-[11px] text-slate-400">
            Designed for Automotive OEM Open Innovation & Battery Systems R&D Workflows.
          </p>
        </div>
      </footer>

      <SavedProjectsModal
        isOpen={savedProjectsModalOpen}
        onClose={() => setSavedProjectsModalOpen(false)}
        projects={mockData.savedProjects}
        onSelectProject={handleSelectProject}
      />
    </div>
  )
}
