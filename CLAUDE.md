# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Teddy Gamiette, a back-end developer specializing in PHP/Symfony with expertise in React, Next.js, and NestJS. The portfolio showcases professional experience, technical skills, and personal projects with a sport-themed design aesthetic.
ton role est de me permetre d'être embauché en tant que developpeur analyse le poste et mes skill actuel sur mon portfolio japprends vit je madapte vite
## Tech Stack

- **Framework**: Next.js 15.3.2 with React 19
- **Language**: TypeScript
- **Styling**: TailwindCSS 3.3.0
- **Animations**: 
  - Framer Motion 12.12.1 (for declarative animations)
  - GSAP 3.13.0 (for complex timeline animations)
  - React Three Fiber 9.1.2 with Three.js (for 3D graphics)
- **PDF Generation**: html2pdf.js 0.10.3 and jspdf 3.0.1 (for CV export)
- **Analytics**: Vercel Analytics & Speed Insights
- **Package Manager**: Yarn 1.22.22 (preferred), also supports npm and pnpm

## Development Commands

```bash
# Start development server
yarn dev           # Main development server (port 3000)

# Build production bundle
yarn build

# Run production server
yarn start

# Code quality
yarn lint          # Next.js linting
yarn format        # Prettier formatting (writes changes)
yarn format:check  # Prettier check without writing
```

## Project Architecture

### Directory Structure
- `/src/app/` - Next.js App Router pages and layouts
  - `/cv/` - CV page with PDF export functionality
  - `/admin/analytics/` - Analytics dashboard
- `/src/components/` - React components organized by feature
  - Animation components (IntroAnimation, SportAnimation, AnimatedDivider)
  - Section components (Hero, About, Skills, Projects, Contact, Footer, Header)
  - UI components (CustomCursor, SmoothScroll, InfiniteScroll)
- `/src/data/` - Data constants and configuration
  - `personalData.ts` - Personal information, experiences, education, skills
- `/src/styles/` - Global styles and CSS modules
- `/src/utils/` - Utility functions
  - `analytics.ts` - Analytics tracking utilities

### Key Design Patterns

1. **Client Components**: Main page (`src/app/page.tsx`) uses 'use client' for interactive animations
2. **Animation Strategy**: 
   - IntersectionObserver for scroll-triggered animations
   - Framer Motion for component transitions
   - GSAP for complex timeline animations
   - Three.js for 3D sport-themed elements
3. **Performance Optimizations**:
   - Lazy loading with IntersectionObserver
   - Optimized animation thresholds (0.1 for visibility)
   - Speed Insights integration for monitoring

## Styling Conventions

- TailwindCSS for utility-first styling
- Custom animations defined in components using Framer Motion variants
- Responsive design with mobile-first approach
- Sport-themed design with athletic color palette and dynamic animations

## Data Management

Personal data is centralized in `/src/data/personalData.ts` containing:
- Personal information (name, contact, social links)
- Professional experiences at Kernix
- Education history (Master Tech Lead at HETIC)
- Technical skills categorized by proficiency
- Project showcases

## Special Features

1. **CV Page** (`/cv`): Interactive resume with PDF export capability
2. **Admin Analytics** (`/admin/analytics`): Dashboard for tracking portfolio metrics
3. **Custom Cursor**: Enhanced cursor animation for desktop experience
4. **Smooth Scrolling**: Lenis-based smooth scroll (currently commented out in layout)
5. **Sport Animations**: Three.js-based 3D animations with sport theme

## Deployment

- Hosted on Vercel
- Automatic deployments from main branch
- Analytics and Speed Insights enabled for production monitoring

## Important Notes

- The portfolio emphasizes sport-themed design aligned with Teddy's interests
- Animations are performance-optimized with careful threshold settings
- The site is fully responsive with special attention to mobile experience
- CV export functionality uses html2pdf.js for client-side PDF generation