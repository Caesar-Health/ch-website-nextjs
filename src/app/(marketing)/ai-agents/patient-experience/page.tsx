import type { Metadata } from 'next'
import { CategoryPage } from '@/features/marketing/ai-agents/category'

export const metadata: Metadata = {
  title: 'Patient Experience AI Agents - Intake, Education & Scheduling',
  description:
    'AI agents for patient intake, education, and appointment coordination. Improve satisfaction by 45%. Reduce no-shows by 40-60%.',
  keywords: [
    'patient experience AI',
    'patient intake automation',
    'appointment scheduling AI',
    'patient education automation',
  ],
  openGraph: {
    title: 'Patient Experience AI Agents | Caesar Health',
    description: 'Enhance patient experience with automation.',
    url: 'https://caesarhealth.com/ai-agents/patient-experience',
  },
  alternates: {
    canonical: 'https://caesarhealth.com/ai-agents/patient-experience',
  },
}

export default function PatientExperienceAgentsPage() {
  return <CategoryPage category="patient-experience" />
}

