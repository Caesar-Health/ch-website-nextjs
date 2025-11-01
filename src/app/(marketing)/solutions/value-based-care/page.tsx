import type { Metadata } from 'next'
import { ValueBasedCare } from '@/features/marketing/solutions/value-based-care'

export const metadata: Metadata = {
  title: 'Value-Based Care Platform - Stop Aligning. Start Executing.',
  description:
    'AI-powered value-based care platform. Automate quality measure tracking, care gap closure, and risk adjustment. Maximize shared savings and quality bonuses.',
  keywords: [
    'value-based care platform',
    'ACO software',
    'quality measure automation',
    'risk adjustment AI',
    'population health management',
  ],
  openGraph: {
    title: 'Value-Based Care Solution | Caesar Health',
    description: 'Stop just aligning. Start executing on value-based care.',
    url: 'https://caesarhealth.com/solutions/value-based-care',
  },
  alternates: {
    canonical: 'https://caesarhealth.com/solutions/value-based-care',
  },
}

export default function ValueBasedCarePage() {
  return <ValueBasedCare />
}

