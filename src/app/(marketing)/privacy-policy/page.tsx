import type { Metadata } from 'next'
import { PrivacyPolicy } from '@/features/marketing/legal/privacy-policy'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Caesar Health privacy policy. Learn how we protect your data and comply with HIPAA regulations.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://caesarhealth.com/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />
}

