import React from 'react'
import { CheckCircle2, AlertTriangle, Sparkles, XCircle } from 'lucide-react'

export default function StatusBadge({ status, showIcon = true, size = 'sm' }) {
  const normalized = (status || '').toLowerCase().trim()

  const config = {
    'verified fact': {
      bg: 'bg-emerald-50 text-emerald-800 border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-700',
      icon: CheckCircle2,
      label: 'Verified fact'
    },
    'company-reported claim': {
      bg: 'bg-amber-50 text-amber-900 border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-700',
      icon: AlertTriangle,
      label: 'Company-reported claim'
    },
    'ai-generated inference': {
      bg: 'bg-purple-50 text-purple-900 border-purple-300 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-700',
      icon: Sparkles,
      label: 'AI-generated inference'
    },
    'could not be verified': {
      bg: 'bg-rose-50 text-rose-900 border-rose-300 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-700',
      icon: XCircle,
      label: 'Could not be verified'
    }
  }

  const current = config[normalized] || {
    bg: 'bg-slate-100 text-slate-700 border-slate-300',
    icon: CheckCircle2,
    label: status || 'Unknown'
  }

  const Icon = current.icon
  const sizeClasses = size === 'xs' ? 'text-[10px] px-1.5 py-0.5' : size === 'lg' ? 'text-sm px-3 py-1' : 'text-xs px-2.5 py-0.5'
  const iconSizes = size === 'xs' ? 'w-2.5 h-2.5' : size === 'lg' ? 'w-4 h-4' : 'w-3.5 h-3.5'

  return (
    <span className={`inline-flex items-center gap-1.5 font-medium rounded-md border ${current.bg} ${sizeClasses}`}>
      {showIcon && <Icon className={iconSizes} />}
      <span>{current.label}</span>
    </span>
  )
}
