import type { Metadata } from 'next'
import { Dermatology } from '@/features/marketing/solutions/dermatology'

export const metadata: Metadata = {
  title: 'Dermatology EMR - The EMR That Sees What You See',
  description:
    'Dermatology-specific EMR with AI-powered image analysis, automated dermpath integration, and procedure documentation. Built for dermatologists.',
  keywords: [
    'dermatology EMR',
    'dermpath integration',
    'AI skin imaging',
    'dermatology EHR',
    'dermatology practice software',
  ],
  openGraph: {
    title: 'Dermatology Solution | Caesar Health',
    description: 'The EMR that sees what you see. Built for dermatologists.',
    url: 'https://caesarhealth.com/solutions/dermatology',
  },
  alternates: {
    canonical: 'https://caesarhealth.com/solutions/dermatology',
  },
}

export default function DermatologyPage() {
  return <Dermatology />
}

