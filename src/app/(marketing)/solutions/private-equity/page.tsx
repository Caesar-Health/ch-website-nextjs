import type { Metadata } from 'next'
import { PrivateEquity } from '@/features/marketing/solutions/private-equity'

export const metadata: Metadata = {
  title: 'Private Equity Healthcare Portfolio Management',
  description:
    'One platform for your entire healthcare portfolio. Standardize operations, maximize EBITDA, and scale efficiently across all portfolio companies.',
  keywords: [
    'private equity healthcare',
    'healthcare portfolio management',
    'practice management platform',
    'healthcare operations',
    'EBITDA optimization',
  ],
  openGraph: {
    title: 'Private Equity Solution | Caesar Health',
    description: 'One platform. Entire portfolio. Maximized EBITDA.',
    url: 'https://caesarhealth.com/solutions/private-equity',
  },
  alternates: {
    canonical: 'https://caesarhealth.com/solutions/private-equity',
  },
}

export default function PrivateEquityPage() {
  return <PrivateEquity />
}

