import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://caesarhealth.com'
  const lastModified = new Date()

  // AI Agent routes
  const aiAgents = [
    // Communication
    'phone',
    'fax',
    'email',
    'sms',
    // Clinical
    'scribe',
    'clinical-documentation',
    // Patient Experience
    'patient-intake',
    'patient-education',
    'appointment-coordination',
    // Revenue Cycle
    'coding-billing',
    'prior-authorization',
    'denial-management',
    'payment-posting',
    // Care Coordination
    'care-gap',
    'referral-management',
    'chronic-care',
    // Category pages
    'communication',
    'clinical',
    'patient-experience',
    'revenue-cycle',
    'care-coordination',
  ]

  const solutions = [
    'behavioral-health',
    'dermatology',
    'emr-integration',
    'private-equity',
    'value-based-care',
  ]

  return [
    // Homepage
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // AI Agents Overview
    {
      url: `${baseUrl}/ai-agents`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Individual AI Agent pages
    ...aiAgents.map((agent) => ({
      url: `${baseUrl}/ai-agents/${agent}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    // Solution pages
    ...solutions.map((solution) => ({
      url: `${baseUrl}/solutions/${solution}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    // Legal pages
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ]
}

