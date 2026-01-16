# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CodiceAmico Guru is a static Italian website that aggregates referral codes ("codici amico") for various services like banks, energy providers, telecom, and delivery apps. The site is SEO-optimized and generates static HTML pages for each referral code and category.

**Live site**: https://codiceamico.guru

## Commands

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Build (generates static export to /out folder)
npm run build

# Lint
npm run lint
```

## Architecture

### Static Site Generation
The site uses Next.js 14 with `output: 'export'` for fully static HTML generation. All pages are pre-rendered at build time using `generateStaticParams()`.

### Data Model
All referral codes are stored in a single TypeScript file: `src/data/codes.ts`

- **`ReferralCode`**: Main data type with fields for code, bonus amounts, instructions, terms
- **`Category`**: Groups codes (banche, energia, telefonia, delivery, assicurazioni, finanza, altro)
- Helper functions: `getCodeBySlug()`, `getCodesByCategory()`, `getFeaturedCodes()`, `getAllActiveCodes()`

### Route Structure
- `/` - Homepage with featured codes and category grid
- `/[codeSlug]/` - Individual code pages (e.g., `/codice-amico-n26/`)
- `/categoria/[slug]/` - Category listing pages (e.g., `/categoria/banche/`)

### Adding New Codes
Edit `src/data/codes.ts` and add a new object to the `referralCodes` array. The site will automatically:
- Generate a new page at `/{slug}/`
- Include it in the sitemap
- Show it in the appropriate category page
- Display on homepage if `featured: true`

### SEO Features
- Automatic sitemap generation (`src/app/sitemap.ts`)
- Schema.org structured data on all pages (Offer, FAQPage, CollectionPage)
- Canonical URLs and OpenGraph metadata
- robots.txt (`src/app/robots.ts`)

### Styling
- Tailwind CSS with custom theme colors (`guru` and `ink` palettes)
- Custom component classes in `globals.css`: `.btn-primary`, `.btn-secondary`, `.card-hover`, `.code-box`, `.badge-*`
- Fonts: Outfit (display/body), Space Mono (code boxes)

## Path Alias
`@/*` maps to `./src/*` (configured in tsconfig.json)
