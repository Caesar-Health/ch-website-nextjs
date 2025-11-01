import type { Metadata } from 'next'
import { CategoryPage } from '@/features/marketing/ai-agents/category'

export const metadata: Metadata = {
  title: 'Clinical AI Agents - Medical Scribe & Clinical Documentation',
  description:
    'AI medical scribe and clinical documentation automation. Save 2-3 hours daily on charting. 99% coding accuracy.',
  keywords: [
    'clinical AI agents',
    'AI medical scribe',
    'clinical documentation automation',
    'SOAP note generation',
  ],
  openGraph: {
    title: 'Clinical AI Agents | Caesar Health',
    description: 'Real-time medical scribe and clinical documentation automation.',
    url: 'https://caesarhealth.com/ai-agents/clinical',
  },
  alternates: {
    canonical: 'https://caesarhealth.com/ai-agents/clinical',
  },
}

export default function ClinicalAgentsPage() {
  return <CategoryPage category="clinical" />
}

