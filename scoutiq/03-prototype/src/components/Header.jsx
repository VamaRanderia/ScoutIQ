import React from 'react'
import { Search, Layers, Scale, ShieldCheck, FileText, FolderKanban, Sparkles } from 'lucide-react'

export default function Header({ currentScreen, setCurrentScreen, onOpenSavedProjects, activeProjectTitle }) {
  const navItems = [
    { id: 'objective', label: '1. Objective Input', icon: Sparkles },
    { id: 'discovery', label: '2. Technology Discovery', icon: Layers },
    { id: 'comparison', label: '3. Startup Comparison', icon: Scale },
    { id: 'evidence', label: '4. Evidence Verification', icon: ShieldCheck },
    { id: 'recommendation', label: '5. Recommendation Report', icon: FileText }
  ]

  return (
    <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 text-white shadow-md">
      <div className="bg-amber-500 text-slate-950 px-4 py-1.5 text-xs font-semibold text-center tracking-wide uppercase flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-slate-950 animate-pulse"></span>
        Product Management Case Study - Illustrative data only (All entities, claims, and figures are fictional)
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-inner">
              <Search className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-white">Scout<span className="text-blue-400">IQ</span></span>
                <span className="text-[10px] font-medium bg-blue-900/60 text-blue-300 border border-blue-700/50 px-2 py-0.5 rounded-full">
                  PM Case Study Prototype
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block truncate max-w-xs md:max-w-md">
                Active Brief: <span className="text-slate-200 font-medium">{activeProjectTitle}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSavedProjects}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
            >
              <FolderKanban className="w-4 h-4 text-blue-400" />
              <span className="hidden md:inline">Saved Projects</span>
            </button>
          </div>
        </div>

        <nav className="flex space-x-1 sm:space-x-2 overflow-x-auto pb-2 scrollbar-none border-t border-slate-800/80 pt-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = currentScreen === item.id
            return (
              <button
                key={item.id}
                onClick={() => setCurrentScreen(item.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                {item.label}
              </button>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
