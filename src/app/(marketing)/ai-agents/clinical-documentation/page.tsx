import type { Metadata } from 'next'
import { FileSignature } from 'lucide-react'
import { AgentPageLayout } from '@/features/marketing/ai-agents/agent-page-layout'
import {
  AgentHero,
  AgentCapabilities,
  AgentImpact,
  AgentTechnical,
} from '@/features/marketing/ai-agents/components'

export const metadata: Metadata = {
  title: 'Clinical Documentation Agent - Structured Data Conversion',
  description:
    'Converts unstructured clinical notes, voice recordings, and scanned documents into structured EHR data. Unlock historical data with NLP.',
  keywords: [
    'clinical documentation AI',
    'medical data structuring',
    'NLP healthcare',
    'EHR data conversion',
  ],
  openGraph: {
    title: 'Clinical Documentation Agent | Caesar Health',
    description: 'Structure your clinical data with AI-powered NLP.',
    url: 'https://caesarhealth.com/ai-agents/clinical-documentation',
  },
  alternates: {
    canonical: 'https://caesarhealth.com/ai-agents/clinical-documentation',
  },
}

export default function ClinicalDocumentationAgentPage() {
  const category = 'clinical' as const

  return (
    <AgentPageLayout>
      <AgentHero
        category={category}
        icon={<FileSignature className="h-16 w-16" />}
        headline="Clinical Documentation Agent: Structure Your Data"
        subheadline="Converts unstructured clinical data (free-text notes, voice recordings, scanned documents) into structured, coded, billable entries in the EHR."
      />

      <AgentCapabilities
        category={category}
        capabilities={[
          'Legacy Note Conversion - Transforms old free-text notes into structured data',
          'Voice Note Processing - Converts provider voice memos into chart entries',
          'Scanned Document Extraction - Pulls data from scanned hospital discharge summaries',
          'Problem List Management - Auto-updates active problem list based on encounters',
          'Medication Reconciliation - Identifies discrepancies between patient-reported and chart meds',
          'NLP-Powered Extraction - Advanced natural language processing for data extraction',
          'FHIR Resource Creation - Generates standards-compliant structured data',
          'Code Mapping - Maps to SNOMED CT, ICD-10, and RxNorm terminologies',
        ]}
      />

      <AgentImpact
        category={category}
        metrics={[
          { label: 'Data Entry Reduction', value: '80%', icon: 'trending' },
          { label: 'Coding Accuracy', value: '99%', icon: 'target' },
          { label: 'Historical Data', value: 'Unlocked', icon: 'dollar' },
          { label: 'Quality Improvement', value: 'Significant', icon: 'clock' },
        ]}
      />

      <AgentTechnical
        details={[
          { label: 'Standards', value: 'SNOMED CT, ICD-10, RxNorm mapping' },
          { label: 'Integration', value: 'Document management systems and EHRs' },
          { label: 'Data Format', value: 'FHIR-compliant structured data output' },
          { label: 'Processing', value: 'Real-time NLP-powered data extraction' },
        ]}
      />
    </AgentPageLayout>
  )
}

