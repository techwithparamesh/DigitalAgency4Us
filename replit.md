# DigitalAgency4Us - Project Documentation

## Overview

DigitalAgency4Us is a modern, mobile-first marketing website for a web agency that specializes in WordPress and custom-coded websites. The application is built as a React single-page application (SPA) with a Node.js/Express backend for handling contact form submissions. The site showcases the agency's services, portfolio, pricing, and includes a complete contact system.

The application follows a content-driven architecture where most textual content is stored in JSON files, making it easy to update without modifying React components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing (instead of React Router)
- TanStack Query (React Query) for server state management

**UI Component System**
- Shadcn/ui component library built on Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Custom theme system supporting light/dark modes via CSS variables
- Component variants managed through class-variance-authority (CVA)

**Design System**
- Typography: Inter font family from Google Fonts
- Color palette: Primary sky-500 (#0EA5E9), dark (#0B1220), light (#F1F5F9)
- Spacing: Tailwind's standard spacing scale (4, 8, 12, 16, 20, 24)
- Border radius: Custom values (lg: 9px, md: 6px, sm: 3px)
- Elevation system: CSS custom properties for hover/active states (--elevate-1, --elevate-2)

**Content Management**
- JSON-driven content system located in `client/src/data/`
- Separate files for services, portfolio, testimonials, and pricing data
- Image mapping system for assets stored in `attached_assets/`
- Enables non-technical content updates without code changes

**Page Structure**
- Home: Hero section, services preview, portfolio preview, testimonials carousel, tech stack, CTA bands
- Services: Detailed service offerings with WordPress vs Custom Code tracks
- Portfolio: Filterable project gallery (all/WordPress/custom)
- Pricing: Three-tier pricing cards plus annual hosting add-on
- About: Process steps and company values
- Contact: Form with validation and rate limiting

### Backend Architecture

**Server Framework**
- Express.js for HTTP server and routing
- TypeScript for type safety across the stack
- Development/production mode handling via NODE_ENV

**API Design**
- RESTful endpoint structure under `/api` prefix
- Contact form endpoint: `POST /api/contact`
- Rate limiting: 5 requests per 15 minutes per IP for contact submissions
- Input validation using express-validator
- Honeypot field for basic bot detection

**Request Handling**
- JSON body parsing with raw body preservation for webhook verification
- URL-encoded form data support
- Request/response logging middleware for API routes
- Error handling with appropriate HTTP status codes

**Session & Storage**
- In-memory storage implementation (MemStorage class) for user data
- Interface-based design (IStorage) for easy database adapter swapping
- User schema defined in shared types
- Ready for PostgreSQL integration via existing Drizzle ORM configuration

### Data Layer

**ORM & Database Configuration**
- Drizzle ORM configured for PostgreSQL (currently not actively used)
- Schema definitions in `shared/schema.ts`
- Migration folder structure prepared at `./migrations`
- Database connection via environment variable (DATABASE_URL)
- Neon Database serverless driver included as dependency

**Data Models**
- User table: id (UUID), username (unique), password fields
- Zod validation schemas for insert operations
- Type inference from Drizzle schemas for type safety

**Current State**
- No active database connection required for current functionality
- Contact form submissions logged to console (email integration pending)
- All content served from static JSON files
- Ready for database integration when needed

### Build & Deployment

**Development Mode**
- Vite dev server with HMR running on Express middleware
- Server-side rendering preparation via custom Vite setup
- Replit-specific plugins for error overlay and development banners
- Source maps for debugging

**Production Build**
- Client build: Vite bundles to `dist/public`
- Server build: esbuild bundles to `dist/index.js`
- ESM module format throughout
- Tree-shaking and code splitting enabled

**Asset Management**
- Static assets in `attached_assets/` directory
- Generated images for portfolio and testimonials
- Vite alias configuration: `@/` → client/src, `@shared/` → shared, `@assets/` → attached_assets

## External Dependencies

**UI & Styling**
- Radix UI primitives (accordion, dialog, dropdown, select, etc.) for accessible components
- Tailwind CSS with autoprefixer for styling
- Lucide React for icon components
- React Icons for brand icons (WordPress, HTML, CSS, JavaScript, Git, MySQL, PostgreSQL)
- Embla Carousel for testimonial slider
- cmdk for command palette functionality

**Forms & Validation**
- React Hook Form for form state management
- @hookform/resolvers for validation schema integration
- Zod for runtime type validation
- express-validator for server-side validation
- drizzle-zod for database schema validation

**State Management & Data Fetching**
- TanStack Query (React Query) v5 for server state
- Custom query client configuration with authentication handling
- Wouter for routing with location hooks

**Server Dependencies**
- Express with TypeScript types
- express-rate-limit for API throttling
- Vite as middleware for development server
- esbuild for production server bundling

**Database (Configured but Not Active)**
- @neondatabase/serverless for PostgreSQL connection
- Drizzle ORM for query building and schema management
- drizzle-kit for migrations
- connect-pg-simple for session storage (when needed)

**Developer Experience**
- TypeScript for type safety
- Replit-specific tooling: error modal, cartographer, dev banner
- Source map support via @jridgewell/trace-mapping

**Email Integration (Pending)**
- Contact form ready for EmailJS, SendGrid, or Resend integration
- Commented placeholder in `/api/contact` endpoint
- Environment variables expected for SMTP/API key configuration