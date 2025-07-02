# Apex Webs

A professional, SEO-optimized Kenyan web solutions platform.

## Project Overview
Apex Webs is a Kenyan tech startup providing innovative, user-centric web solutions for SMEs, schools, and startups. Our mission is to empower local businesses with affordable, high-quality digital solutions.

## MVP Strategy
- Vercel free tier
- 3 core services + 3 "coming soon" services
- Next.js 14, React 18, Tailwind CSS, Vercel KV, Postgres

## Project Structure (as per apexwebsRules.md)
- `src/app/` - Next.js App Router
- `src/components/` - Reusable UI components
- `src/lib/` - Utilities, constants, types
- `src/hooks/` - Custom hooks
- `src/data/` - Static data
- `public/` - Static assets (images, icons, documents)

## Naming Conventions
- Components: PascalCase
- Pages: kebab-case for URLs
- Utilities: camelCase
- Constants: UPPER_SNAKE_CASE
- Types: PascalCase

## Documentation Standards
- JSDoc for all components and functions
- Inline comments explain business logic and Kenyan context

## Kenyan Localization
- Use KES currency, +254 phone format, local business hours
- Payment methods: M-PESA, Airtel Money, Bank Transfer
- Culturally relevant content and communication

## SEO Optimization
- Metadata for every page
- Local keywords and OpenGraph tags

## AI Rules for Success
- Enforce code quality, documentation, and local relevance
- Prioritize accessibility, mobile-first design, and fast load times
- All forms and content tailored for Kenyan users
- Regularly update progress in AI_PROGRESS.md
- Propose improvements and monitor for new requirements

## Logo & Favicon
- The official logo is in `public/images/ApexLogo.jpg`
- Use this logo on all pages and as the favicon (see Next.js docs for favicon setup)

## Getting Started
1. `cd apexwebs`
2. `npm install`
3. `npm run dev`

---

For more details, see `plan/apexwebsRules.md` and `plan/apexwebsPRD.md`.
