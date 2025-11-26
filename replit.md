# Tantra Intuitions Rigdzin - Replit Project Guide

## Overview

This is a bilingual (French/English) web application for "Tantra Intuitions Rigdzin" - a spiritual wellness platform focused on tantra, sexuality, and non-duality for couples over 40. The site promotes the Rigdzin method through a book, retreats, coaching services, and showcases the author's artistic work (painting and sculpture).

**Target Audience**: Mature couples (40+) seeking spiritual growth and conscious sexuality  
**Primary Language**: French (with English support)  
**Design Philosophy**: Spiritual elegance with premium wellness aesthetics inspired by Calm, Headspace, and high-end e-learning platforms

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for component-based UI
- **Vite** as the build tool and development server
- **Wouter** for lightweight client-side routing (not React Router)
- **Framer Motion** for animations and transitions

**UI Component System**
- **Shadcn/ui** component library (New York style variant)
- **Radix UI** primitives for accessible components
- **Tailwind CSS** for utility-first styling with custom design tokens
- Component path aliases configured via `@/components`, `@/lib`, `@/hooks`

**State Management**
- **TanStack Query v5** for server state and data fetching
- **React Context** for language switching (FR/EN)
- Local component state with React hooks

**Design System**
- Custom color palette: Primary (deep purple `270 45% 18%`), Accent (gold `40 55% 57%`)
- Typography: Playfair Display (serif headings), Montserrat (body text)
- Tailwind custom variables for consistent spacing, shadows, and elevations
- Responsive design with mobile-first approach

**Key Pages**
- `/` - Home page with hero, features, quotes, and contact sections
- `/parcours` - Author's journey/biography page with CV and mindmap PDFs
- `/livre` - Book details page with excerpts
- Custom 404 page

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript
- Custom middleware for request logging and JSON parsing
- Raw body preservation for webhook handling

**Development Setup**
- **tsx** for running TypeScript in development
- **esbuild** for production builds
- Vite middleware integration for HMR in development
- Server-side rendering preparation (template loading)

**API Design Pattern**
- All routes prefixed with `/api`
- RESTful endpoint structure
- Static file serving for PDFs and media assets

**File Serving Routes**
- `/api/assets/cv` - CV PDF viewer (inline display)
- `/api/assets/mindmap` - Therapy mindmap PDF viewer
- `/api/assets/cv/download` - CV download endpoint
- `/api/assets/mindmap/download` - Mindmap download endpoint
- `/api/assets/livre-extrait/download` - Book excerpt download
- `/api/assets/chakras-video` - Video serving endpoint for chakra visualization content

**Webhook Integration**
- `/api/surprise-2026` - POST endpoint for "Surprise 2026" form submissions
  - Accepts: `{ name: string, email: string }`
  - Forwards to Make.com webhook with timestamp
  - Environment variable: `MAKE_WEBHOOK_URL` (stored in shared environment)
  - Returns success/error response with toast notifications on frontend

### Data Storage Architecture

**Database Setup**
- **Drizzle ORM** configured for PostgreSQL
- **Neon Serverless** driver for database connectivity
- Schema defined in `shared/schema.ts` for code sharing between client/server

**Storage Interface Pattern**
- Abstract `IStorage` interface defining CRUD operations
- `MemStorage` in-memory implementation for development
- Designed for easy swap to PostgreSQL implementation
- User model with username/password authentication structure

**Schema Design**
- Users table with UUID primary keys, unique usernames
- Zod schemas for validation using `drizzle-zod`
- Type-safe insert and select types exported

### External Dependencies

**UI & Design Libraries**
- Radix UI component primitives (20+ packages for dialogs, dropdowns, tooltips, etc.)
- Framer Motion for animations
- Lucide React for icons
- class-variance-authority and clsx for conditional styling
- cmdk for command palette patterns
- embla-carousel-react for carousels

**Form Handling**
- React Hook Form with @hookform/resolvers
- Zod for schema validation

**Database & Backend**
- @neondatabase/serverless for PostgreSQL connection
- drizzle-orm and drizzle-zod for type-safe database operations
- connect-pg-simple for session storage (configured but not actively used yet)

**Development Tools**
- Replit-specific plugins for runtime error overlay, cartographer, and dev banner
- PostCSS with autoprefixer for CSS processing

**Asset Management**
- Static assets stored in `attached_assets/` directory
- PDF files for CV, mindmap, and book excerpts
- Images for book cover, logo, and author photos
- Video content for chakra visualizations

**Google Fonts Integration**
- Architects Daughter, DM Sans, Fira Code, Geist Mono, Montserrat, Playfair Display
- Preconnected font loading for performance

**Build & Production**
- ESM module system throughout
- Separate build outputs: client to `dist/public`, server to `dist`
- Environment variable configuration via `DATABASE_URL`