# Placeholder Cleaning Co. — Marketing Site

A 4-page marketing website for a cleaning company, built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Pages

- **Residential Cleaning** (`/`) — houses, apartments, condos, penthouses, mansions.
- **Office & Commercial Cleaning** (`/office-commercial-cleaning`) — one-time or recurring cleaning for offices and commercial spaces.
- **Post-Construction Cleaning** (`/post-construction-cleaning`) — dust, debris, and residue removal after a build or renovation.
- **Deep Cleaning** (`/deep-cleaning`) — detailed cleaning beyond a standard visit (baseboards, walls, fixtures, and more).

All four pages share a header/footer and a common section layout (hero, service description, "what's included" checklist, process steps, trust signals, and a quote request form).

## Content & Contact Info

All company details (name, phone, email, address, service area) and navigation links live in [`src/lib/site-config.ts`](./src/lib/site-config.ts) as **placeholders** — update that single file to roll out real business details across every page. The quote request form (`src/components/sections/ContactForm.tsx`) is UI-only; wire its `onSubmit` handler up to a real backend, CRM, or email service before launch.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. Each page auto-updates as you edit its file under `src/app/`.

## Build

```bash
npm run build
npm run start
```

## Project Structure

```
src/
  app/                          # routes (one folder per page)
  components/
    layout/                     # SiteHeader, SiteFooter
    sections/                   # Hero, ServiceFeatureList, ProcessSteps, TrustSignals, CTASection, ContactForm
    ui/                         # Button, Container, SectionHeading
  lib/site-config.ts            # placeholder company info + nav items
```

Imagery uses warm-neutral gradient hero sections with [lucide-react](https://lucide.dev/) icons rather than stock photography, keeping the site fast and license-clean while matching a warm, minimalist, modern aesthetic.
