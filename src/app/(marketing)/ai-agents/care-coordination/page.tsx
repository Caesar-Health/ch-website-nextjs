import type { Metadata } from 'next'
import { CategoryPage } from '@/features/marketing/ai-agents/category'

export const metadata: Metadata = {
  title: 'Care Coordination AI Agents - Quality Measures & Care Management',
  description:
    'AI agents for care gap closure, referral management, and chronic care management. Improve HEDIS scores and close the referral loop.',
  keywords: [
    'care coordination AI',
    'quality measures automation',
    'referral management',
    'chronic care management',
  ],
  openGraph: {
    title: 'Care Coordination AI Agents | Caesar Health',
    description: 'Automate quality measures and care coordination workflows.',
    url: 'https://caesarhealth.com/ai-agents/care-coordination',
  },
  alternates: {
    canonical: 'https://caesarhealth.com/ai-agents/care-coordination',
  },
}

export default function CareCoordinationAgentsPage() {
  return <CategoryPage category="care-coordination" />
}

