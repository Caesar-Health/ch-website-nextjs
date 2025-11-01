import type { Metadata } from 'next'
import { Target } from 'lucide-react'
import { AgentPageLayout } from '@/features/marketing/ai-agents/agent-page-layout'
import {
  AgentHero,
  AgentCapabilities,
  AgentImpact,
  AgentTechnical,
} from '@/features/marketing/ai-agents/components'

export const metadata: Metadata = {
  title: 'Care Gap Agent - Proactive Quality Measure Management',
  description:
    'Identifies and closes care gaps automatically. Track HEDIS, MIPS, Star Ratings. Increase quality bonuses by $50K-$200K annually.',
  keywords: [
    'care gap closure',
    'quality measure AI',
    'HEDIS automation',
    'population health management',
  ],
  openGraph: {
    title: 'Care Gap Agent | Caesar Health',
    description: 'Close gaps 3x faster. Improve HEDIS by 40%.',
    url: 'https://caesarhealth.com/ai-agents/care-gap',
  },
  alternates: {
    canonical: 'https://caesarhealth.com/ai-agents/care-gap',
  },
}

export default function CareGapAgentPage() {
  const category = 'care-coordination' as const

  return (
    <AgentPageLayout>
      <AgentHero
        category={category}
        icon={<Target className="h-16 w-16" />}
        headline="Care Gap Agent: Proactive Quality Management"
        subheadline="Identifies patients overdue for preventive care, chronic disease management, and quality measures—then automatically schedules outreach and appointments."
      />

      <AgentCapabilities
        category={category}
        capabilities={[
          'Quality Measure Tracking - Monitors HEDIS, MIPS, Star Ratings, ACO measures',
          'Gap Identification - Flags patients overdue for mammograms, A1C tests, colonoscopies, etc.',
          'Risk Stratification - Prioritizes high-risk patients (diabetic, no A1C in 12 months)',
          'Automated Outreach - Sends SMS, email, or phone call to schedule appointment',
          'Provider Alerts - Flags care gaps during scheduled visits',
          'Real-Time Closure - Updates quality dashboard when gap is closed',
          'Population Analytics - Tracks quality measure performance across entire panel',
          'Incentive Tracking - Monitors quality bonus payments and opportunities',
        ]}
      />

      <AgentImpact
        category={category}
        metrics={[
          { label: 'Gap Closure Speed', value: '3x faster', icon: 'clock' },
          { label: 'HEDIS Improvement', value: '+40%', icon: 'trending' },
          { label: 'Quality Bonuses', value: '$50K-$200K', icon: 'dollar' },
          { label: 'Patient Outcomes', value: 'Better', icon: 'target' },
        ]}
      />

      <AgentTechnical
        details={[
          { label: 'Data Source', value: 'EHR clinical data integration' },
          { label: 'Measure Logic', value: 'NCQA, CMS quality specifications' },
          { label: 'Outreach', value: 'Multi-channel patient communication' },
          { label: 'Dashboard', value: 'Real-time quality measure reporting' },
        ]}
      />
    </AgentPageLayout>
  )
}

