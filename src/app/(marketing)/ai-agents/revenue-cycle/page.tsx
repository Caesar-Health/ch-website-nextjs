import type { Metadata } from 'next'
import { CategoryPage } from '@/features/marketing/ai-agents/category'

export const metadata: Metadata = {
  title: 'Revenue Cycle AI Agents - Coding, Billing & Denial Management',
  description:
    'AI agents for medical coding, billing, prior authorization, denial management, and payment posting. 99% clean claim rate. Increase revenue by 15%.',
  keywords: [
    'revenue cycle automation',
    'AI medical coding',
    'automated billing',
    'denial management AI',
    'prior authorization automation',
  ],
  openGraph: {
    title: 'Revenue Cycle AI Agents | Caesar Health',
    description: 'Maximize reimbursement with automated revenue cycle management.',
    url: 'https://caesarhealth.com/ai-agents/revenue-cycle',
  },
  alternates: {
    canonical: 'https://caesarhealth.com/ai-agents/revenue-cycle',
  },
}

export default function RevenueCycleAgentsPage() {
  return <CategoryPage category="revenue-cycle" />
}

