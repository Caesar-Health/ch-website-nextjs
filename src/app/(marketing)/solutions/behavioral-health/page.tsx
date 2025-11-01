import type { Metadata } from 'next'
import { BehavioralHealth } from '@/features/marketing/solutions/behavioral-health'

export const metadata: Metadata = {
  title: 'Behavioral Health EMR - Built for How Therapists Actually Work',
  description:
    'EHR designed specifically for behavioral health. Automated session notes, treatment planning, and outcome tracking. Reduce documentation time by 70%.',
  keywords: [
    'behavioral health EMR',
    'therapy EMR',
    'mental health EHR',
    'therapist documentation software',
    'behavioral health documentation',
  ],
  openGraph: {
    title: 'Behavioral Health Solution | Caesar Health',
    description: 'EMR built for therapists. Reduce documentation by 70%.',
    url: 'https://caesarhealth.com/solutions/behavioral-health',
  },
  alternates: {
    canonical: 'https://caesarhealth.com/solutions/behavioral-health',
  },
}

export default function BehavioralHealthPage() {
  return <BehavioralHealth />
}

