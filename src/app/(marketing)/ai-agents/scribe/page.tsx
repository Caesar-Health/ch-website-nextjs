import type { Metadata } from 'next'
import { FileText } from 'lucide-react'
import { AgentPageLayout } from '@/features/marketing/ai-agents/agent-page-layout'
import {
  AgentHero,
  AgentCapabilities,
  AgentImpact,
  AgentTechnical,
} from '@/features/marketing/ai-agents/components'

export const metadata: Metadata = {
  title: 'AI Medical Scribe - Real-Time Clinical Documentation',
  description:
    'Real-time AI medical scribe generates complete SOAP notes, HPI, and clinical documentation from patient conversations. Save 2-3 hours daily on documentation.',
  keywords: [
    'AI medical scribe',
    'clinical documentation AI',
    'automated SOAP notes',
    'medical transcription AI',
    'real-time medical scribe',
    'AI clinical note taking',
  ],
  openGraph: {
    title: 'AI Medical Scribe | Caesar Health',
    description:
      'Real-time clinical documentation and SOAP note generation. Save 2-3 hours per day on charting.',
    url: 'https://caesarhealth.com/ai-agents/scribe',
  },
  alternates: {
    canonical: 'https://caesarhealth.com/ai-agents/scribe',
  },
}

export default function ScribeAgentPage() {
  const category = 'clinical' as const

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Caesar Health AI Scribe',
    applicationCategory: 'HealthApplication',
    description:
      'Real-time clinical documentation and SOAP note generation from patient conversations',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
    },
    operatingSystem: 'Web',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <AgentPageLayout>
      <AgentHero
        icon={<FileText className="h-16 w-16" />}
        headline="AI Scribe: From Conversation to Chart Note"
        subheadline="Real-time clinical documentation that writes itself. Listens to patient encounters, generates comprehensive SOAP notes, HPI, and clinical documentation—all while you focus on patient care."
        category={category}
      />

      <AgentCapabilities
        category={category}
        capabilities={[
          'Real-Time Transcription - Converts speech to text with 99% medical terminology accuracy',
          'SOAP Note Generation - Auto-generates Assessment, Plan, and clinical reasoning',
          'HPI Extraction - Pulls comprehensive history from natural conversation',
          'ICD-10/CPT Suggestions - Recommends billable codes based on documentation',
          'Clinical Decision Support - Flags missing information and suggests differential diagnoses',
          'Multi-Provider Support - Works with physicians, NPs, PAs, and specialists',
          'Ambient Listening - No typing, clicking, or dictation required',
          'EHR Integration - One-click insertion into any EHR system',
        ]}
      />

      <AgentImpact
        category={category}
        metrics={[
          { label: 'Time Saved Daily', value: '2-3 hours', icon: 'clock' },
          { label: 'Additional Revenue', value: '$150K-$300K', icon: 'dollar' },
          { label: 'Documentation Accuracy', value: '99%', icon: 'target' },
          { label: 'Provider Burnout', value: '-50%', icon: 'trending' },
        ]}
      />

      <AgentTechnical
        details={[
          { label: 'HIPAA Compliance', value: 'End-to-end encrypted, BAA included' },
          { label: 'EHR Integration', value: 'Epic, Cerner, athenahealth, and all major EHRs' },
          { label: 'Processing Time', value: 'Real-time during encounter, finalized within 30 seconds' },
          { label: 'Accuracy', value: '99% medical terminology recognition' },
        ]}
      />
    </AgentPageLayout>
    </>
  )
}

