import type { Metadata } from 'next'
import { TermsOfService } from '@/features/marketing/legal/terms-of-service'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Caesar Health terms of service. Review our service agreement and user terms.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://caesarhealth.com/terms-of-service',
  },
}

export default function TermsOfServicePage() {
  return <TermsOfService />
}

