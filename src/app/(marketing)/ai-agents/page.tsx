import type { Metadata } from 'next'
import { AIAgentsOverview } from '@/features/marketing/ai-agents/overview'

export const metadata: Metadata = {
  title: 'AI Agents - 16 Specialized Healthcare Automation Agents',
  description:
    '16 specialized AI agents for complete healthcare workflow automation. From phone answering to revenue cycle management. Save $500K-$1M annually.',
  keywords: [
    'healthcare AI agents',
    'medical workflow automation',
    'healthcare AI platform',
    'clinical automation',
    'revenue cycle automation',
  ],
  openGraph: {
    title: '16 AI Agents for Healthcare | Caesar Health',
    description:
      '16 specialized AI agents handling phone calls, clinical documentation, billing, and more.',
    url: 'https://caesarhealth.com/ai-agents',
  },
  alternates: {
    canonical: 'https://caesarhealth.com/ai-agents',
  },
}

export default function AIAgentsPage() {
  return <AIAgentsOverview />
}

