import type { Metadata } from 'next'
import { EmrIntegration } from '@/features/marketing/solutions/emr-integration'

export const metadata: Metadata = {
  title: 'EMR Integration - Make Your EMR Smarter Without Ripping It Out',
  description:
    'Integrate AI agents with your existing EMR. Works with Epic, Cerner, athenahealth, and all major EHRs. No migration required.',
  keywords: [
    'EMR integration',
    'EHR integration AI',
    'Epic integration',
    'Cerner integration',
    'healthcare interoperability',
  ],
  openGraph: {
    title: 'EMR Integration Solution | Caesar Health',
    description: 'Make your existing EMR smarter with AI. No migration required.',
    url: 'https://caesarhealth.com/solutions/emr-integration',
  },
  alternates: {
    canonical: 'https://caesarhealth.com/solutions/emr-integration',
  },
}

export default function EmrIntegrationPage() {
  return <EmrIntegration />
}

