# Caesar Health Marketing Website

**Next.js 15** marketing website with **SEO & LLM optimization**

🌐 **Live Site:** https://caesarhealth.com  
📦 **Repository:** https://github.com/Caesar-Health/ch-website-nextjs  
🚀 **Framework:** Next.js 15 (App Router)

---

## Features

### SEO Optimization
- ✅ Per-page unique metadata (title, description, keywords)
- ✅ Server-side rendering for instant search engine indexing
- ✅ Dynamic sitemap generation
- ✅ Dynamic robots.txt with LLM bot permissions
- ✅ Structured data (JSON-LD) on key pages
- ✅ Open Graph and Twitter Card meta tags

### LLM Optimization
- ✅ AI crawler allowances (GPTBot, Claude-Web, Google-Extended, PerplexityBot)
- ✅ llms.txt with comprehensive platform description
- ✅ Full HTML on first request for AI crawlers
- ✅ Structured data for better AI understanding

### Performance
- ✅ Static page generation (35 pages)
- ✅ Automatic image optimization (AVIF/WebP)
- ✅ Security headers (HSTS, CSP, X-Frame-Options)
- ✅ Vercel Analytics and Speed Insights

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI
- **Icons:** Lucide React
- **Analytics:** Vercel Analytics & Speed Insights
- **Deployment:** Vercel

---

## Getting Started

### Prerequisites
- Node.js 20.17+ or 22.12+
- pnpm 9.0+

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open http://localhost:3000
```

### Build

```bash
# Production build
pnpm build

# Preview production build
pnpm start
```

---

## Project Structure

```
src/
├── app/
│   ├── (marketing)/
│   │   ├── layout.tsx              # Marketing layout wrapper
│   │   ├── page.tsx                # Homepage
│   │   ├── ai-agents/              # 21 AI agent pages
│   │   ├── solutions/              # 5 solution pages
│   │   ├── privacy-policy/         # Legal pages
│   │   └── terms-of-service/
│   ├── layout.tsx                  # Root layout with SEO metadata
│   ├── sitemap.ts                  # Dynamic sitemap
│   ├── robots.ts                   # Dynamic robots.txt
│   ├── error.tsx                   # 500 error page
│   └── not-found.tsx               # 404 page
├── components/
│   ├── ui/                         # Radix UI components
│   └── layout/                     # Header & footer
├── features/
│   └── marketing/                  # Marketing page components
├── context/                        # React context providers
├── lib/                            # Utility functions
├── data/                           # AI agents data
├── assets/                         # Logos and icons
├── styles/                         # Global styles
└── public/                         # Static assets

```

---

## Pages (35 Total)

### AI Agents (21)
- Homepage: `/`
- AI Agents Overview: `/ai-agents`
- Communication: phone, fax, email, sms
- Clinical: scribe, clinical-documentation
- Patient Experience: patient-intake, patient-education, appointment-coordination
- Revenue Cycle: coding-billing, prior-authorization, denial-management, payment-posting
- Care Coordination: care-gap, referral-management, chronic-care
- Category pages: communication, clinical, patient-experience, revenue-cycle, care-coordination

### Solutions (5)
- `/solutions/behavioral-health`
- `/solutions/dermatology`
- `/solutions/emr-integration`
- `/solutions/private-equity`
- `/solutions/value-based-care`

### Legal (2)
- `/privacy-policy`
- `/terms-of-service`

### SEO (2)
- `/robots.txt` (dynamic)
- `/sitemap.xml` (dynamic)

---

## Deployment

### Vercel (Recommended)

The site is optimized for Vercel deployment:

```bash
# Deploy with Vercel CLI
pnpm install -g vercel
vercel
```

Or connect the GitHub repository in the Vercel dashboard.

### Environment Variables

Add to Vercel:
```
NEXT_PUBLIC_SITE_URL=https://caesarhealth.com
```

---

## SEO Configuration

### Metadata
Each page has unique:
- Title (with template: "Page Title | Caesar Health")
- Description
- Keywords
- Open Graph tags
- Twitter Card tags
- Canonical URL

### Structured Data
- Homepage: Organization schema
- AI Agent pages: SoftwareApplication schema

### Robots.txt
Allows all major search engines and LLM crawlers:
- Googlebot
- GPTBot (OpenAI)
- Claude-Web (Anthropic)
- Google-Extended (Gemini)
- PerplexityBot
- CCBot (Common Crawl)

---

## Development

### Running Locally
```bash
pnpm dev
```

### Type Checking
```bash
pnpm build  # Runs TypeScript check automatically
```

### Code Quality
- TypeScript strict mode
- ESLint configured
- Next.js best practices

---

## Migration Notes

Migrated from Vite + TanStack Router to Next.js 15.

**Preserved:**
- All design systems (colors, fonts, layouts)
- All UI components (Radix UI)
- All marketing content
- All styling and animations

**Improved:**
- SEO (server-side rendering, per-page metadata)
- LLM visibility (structured data, robots.txt)
- Performance (static generation, image optimization)
- Developer experience (Next.js tooling)

See `MIGRATION-COMPLETE.md` for full migration details.

---

## License

Private - Caesar Health

---

## Support

- **Repository Issues:** https://github.com/Caesar-Health/ch-website-nextjs/issues
- **Documentation:** https://nextjs.org/docs
- **Vercel Support:** https://vercel.com/docs

---

**Built with ❤️ by Caesar Health**
