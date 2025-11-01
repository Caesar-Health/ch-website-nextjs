import type { Metadata } from 'next'
import { CreditCard } from 'lucide-react'
import { AgentPageLayout } from '@/features/marketing/ai-agents/agent-page-layout'
import {
  AgentHero,
  AgentCapabilities,
  AgentImpact,
  AgentTechnical,
} from '@/features/marketing/ai-agents/components'

export const metadata: Metadata = {
  title: 'Payment Posting Agent - Automated Payment Reconciliation',
  description:
    'Automatically posts insurance and patient payments with 99.9% accuracy. Same-day posting. Eliminate manual entry errors.',
  keywords: [
    'automated payment posting',
    'medical payment reconciliation',
    'insurance payment automation',
    'EOB processing AI',
  ],
  openGraph: {
    title: 'Payment Posting Agent | Caesar Health',
    description: 'Automated reconciliation. 99.9% accuracy. Same-day posting.',
    url: 'https://caesarhealth.com/ai-agents/payment-posting',
  },
  alternates: {
    canonical: 'https://caesarhealth.com/ai-agents/payment-posting',
  },
}

export default function PaymentPostingAgentPage() {
  const category = 'revenue-cycle' as const

  return (
    <AgentPageLayout>
      <AgentHero
        category={category}
        icon={<CreditCard className="h-16 w-16" />}
        headline="Payment Posting Agent: Automated Reconciliation"
        subheadline="Automatically posts payments from insurance companies and patients to the correct patient accounts—reconciling EOBs, identifying underpayments, and flagging discrepancies."
      />

      <AgentCapabilities
        category={category}
        capabilities={[
          'EDI 835 Auto-Posting - Reads electronic remittance advice, posts payments automatically',
          'Patient Payment Posting - Processes credit card, check, and cash payments',
          'Adjustment Posting - Applies contractual adjustments, write-offs per payer contracts',
          'Underpayment Detection - Flags payments below contracted rates',
          'Reconciliation - Matches payments to claims, identifies missing payments',
          'Aging Report Updates - Real-time A/R aging updates',
          'Bank Reconciliation - Matches posted payments to bank deposits',
          'Audit Trail - Complete logging of all posted transactions',
        ]}
      />

      <AgentImpact
        category={category}
        metrics={[
          { label: 'Annual Savings', value: '$60K-$120K', icon: 'dollar' },
          { label: 'Posting Speed', value: 'Same-day', icon: 'clock' },
          { label: 'Accuracy', value: '99.9%', icon: 'target' },
          { label: 'Manual Errors', value: 'Zero', icon: 'trending' },
        ]}
      />

      <AgentTechnical
        details={[
          { label: 'EDI Standards', value: '835 remittance advice parsing' },
          { label: 'Integration', value: 'Practice management system and bank accounts' },
          { label: 'Reconciliation', value: 'Automated bank account matching' },
          { label: 'Audit', value: 'Complete transaction logging and reporting' },
        ]}
      />
    </AgentPageLayout>
  )
}

