import type { Metadata } from 'next'
import { CategoryPage } from '@/features/marketing/ai-agents/category'

export const metadata: Metadata = {
  title: 'Communication AI Agents - Phone, Fax, Email & SMS Automation',
  description:
    'AI agents for phone answering, fax processing, email triage, and SMS messaging. Never miss patient communications. 24/7 availability.',
  keywords: [
    'communication AI agents',
    'AI phone answering',
    'automated fax processing',
    'email triage AI',
    'SMS automation',
  ],
  openGraph: {
    title: 'Communication AI Agents | Caesar Health',
    description: '24/7 patient communication automation across all channels.',
    url: 'https://caesarhealth.com/ai-agents/communication',
  },
  alternates: {
    canonical: 'https://caesarhealth.com/ai-agents/communication',
  },
}

export default function CommunicationAgentsPage() {
  return <CategoryPage category="communication" />
}

