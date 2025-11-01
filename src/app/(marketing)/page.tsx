import type { Metadata } from 'next'
import { AIAgentsOverview } from '@/features/marketing/ai-agents/overview'

export const metadata: Metadata = {
  title: 'AI-Powered Healthcare Administration Platform',
  description:
    'Your 24/7 Healthcare Workforce. No Breaks. No Burnout. No Errors. 16 specialized AI agents for complete healthcare workflow automation - from phone answering to revenue cycle management.',
  keywords: [
    'AI healthcare platform',
    'healthcare automation',
    'medical AI agents',
    'clinical documentation',
    'AI medical scribe',
    'healthcare workflow automation',
    'HIPAA compliant AI',
    'medical practice automation',
  ],
  openGraph: {
    title: 'Caesar Health - AI Agents for Healthcare',
    description:
      '16 specialized AI agents for complete healthcare workflow automation. From phone answering to revenue cycle management.',
    url: 'https://caesarhealth.com',
    images: [
      {
        url: '/images/caesar-health-simplified.svg',
        width: 1200,
        height: 630,
        alt: 'Caesar Health - AI Healthcare Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caesar Health - AI Agents for Healthcare',
    description:
      '16 specialized AI agents for complete healthcare workflow automation',
  },
  alternates: {
    canonical: 'https://caesarhealth.com',
  },
}

export default function HomePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Caesar Health',
    url: 'https://caesarhealth.com',
    logo: 'https://caesarhealth.com/images/caesar-health-simplified.svg',
    description:
      'AI-first healthcare platform streamlining medical workflows with automated clinical documentation, care coordination, and EMR integration.',
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      url: 'https://caesarhealth.com',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <AIAgentsOverview />
    </>
  )
}

