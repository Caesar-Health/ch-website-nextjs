import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ThemeProvider } from '@/context/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import '@/styles/index.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://caesarhealth.com'),
  title: {
    default: 'Caesar Health - AI-Powered Healthcare Administration Platform',
    template: '%s | Caesar Health',
  },
  description:
    'AI-first healthcare platform streamlining medical workflows with automated clinical documentation, care coordination, and EMR integration. HIPAA-compliant solutions for medical practices, hospitals, and healthcare organizations.',
  keywords: [
    'healthcare administration',
    'AI medical scribe',
    'clinical documentation',
    'EMR integration',
    'care coordination',
    'HIPAA compliant',
    'healthcare technology',
    'medical practice management',
    'AI healthcare',
    'automated medical workflows',
  ],
  authors: [{ name: 'Caesar Health' }],
  icons: {
    icon: [
      { url: '/images/caesar-health-simplified.svg', type: 'image/svg+xml' },
      { url: '/images/caesar-health-simplified.svg', sizes: 'any' },
    ],
    apple: [
      { url: '/images/caesar-health-simplified.svg', sizes: '180x180' },
    ],
    shortcut: '/images/caesar-health-simplified.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://caesarhealth.com',
    siteName: 'Caesar Health',
    title: 'Caesar Health - AI-Powered Healthcare Administration Platform',
    description:
      'AI-first healthcare platform streamlining medical workflows with automated clinical documentation, care coordination, and EMR integration.',
    images: [
      {
        url: '/images/caesar_health_logo.png',
        width: 1200,
        height: 630,
        alt: 'Caesar Health - AI-Powered Healthcare Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caesar Health - AI-Powered Healthcare Administration Platform',
    description:
      'AI-first healthcare platform streamlining medical workflows with automated clinical documentation, care coordination, and EMR integration.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {children}
          <Toaster duration={5000} />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
