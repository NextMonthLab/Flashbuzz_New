# Flashbuzz

## Overview

Flashbuzz is a premium video production portfolio website for a filmmaker-led video production company based in Banbury, Oxfordshire, UK. The platform showcases documentary-style corporate video production services with a focus on authentic storytelling for businesses. The brand positioning emphasizes "documentary craft for business stories that matter" with a cinema-first, typography-led design aesthetic.

**Critical Brand Rule**: The brand name is "Flashbuzz" with a capital F and lowercase b. Never write "FlashBuzz" with capital B.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **State Management**: TanStack React Query for server state and data fetching
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens defined in CSS variables
- **Theme Support**: Light/dark mode with ThemeProvider context

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **API Pattern**: RESTful endpoints under `/api/*` prefix
- **Build Process**: Custom build script using esbuild for server, Vite for client

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` contains all database table definitions
- **Validation**: Zod schemas generated from Drizzle schemas using drizzle-zod
- **Database Push**: Use `npm run db:push` to sync schema changes

### Project Structure
```
├── client/src/          # React frontend application
│   ├── components/      # Reusable UI components
│   ├── pages/           # Route page components
│   ├── hooks/           # Custom React hooks
│   └── lib/             # Utilities and data
├── server/              # Express backend
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API route definitions
│   ├── storage.ts       # Database access layer
│   └── db.ts            # Database connection
├── shared/              # Shared types and schemas
│   └── schema.ts        # Drizzle database schema
└── attached_assets/     # Project documentation and assets
```

### Design System
- **Typography**: Inter for headings and body text, Merriweather for serif accents
- **Color Palette**: Warm neutral base with accent color (HSL 32° warm tone)
- **Component Style**: shadcn/ui "new-york" style with custom border radius and shadow system
- **Spacing**: Tailwind units of 4, 6, 8, 12, 16, 24, 32

## External Dependencies

### Database
- **PostgreSQL**: Primary database via `DATABASE_URL` environment variable
- **Connection**: Uses `pg` package with connection pooling
- **Session Storage**: connect-pg-simple for Express sessions

### Third-Party Services
- **Vimeo**: Video hosting and embedding (uses Vimeo Player API)
- **Google Fonts**: Inter and Merriweather font families

### Key NPM Packages
- **UI**: Radix UI primitives, Lucide React icons, react-icons
- **Forms**: React Hook Form with Zod resolver
- **Dates**: date-fns for date formatting
- **Carousel**: Embla Carousel for image/content carousels
- **Build**: esbuild for server bundling, Vite for client

### Environment Variables Required
- `DATABASE_URL`: PostgreSQL connection string (required)
- `NODE_ENV`: development or production