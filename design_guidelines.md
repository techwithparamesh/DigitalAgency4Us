# DigitalAgency4Us Design Guidelines

## Design Approach
**Reference-Based Modern Agency Aesthetic** - Drawing inspiration from Vercel, Linear, and contemporary SaaS landing pages that emphasize clean layouts, bold typography, and strategic whitespace. This approach balances professional credibility with visual impact for a web agency showcasing technical expertise.

## Core Design Principles
- **Trust Through Minimalism**: Clean, uncluttered layouts that let work speak for itself
- **Technical Confidence**: Sharp typography and precise spacing convey expertise
- **Approachable Professionalism**: Soft edges and friendly interactions balance technical prowess

---

## Typography System

**Font Family**: Inter (Google Fonts)
- **Headings**: 
  - H1: 3.5rem (56px) / font-weight: 800 / line-height: 1.1 / letter-spacing: -0.02em
  - H2: 2.5rem (40px) / font-weight: 700 / line-height: 1.2 / letter-spacing: -0.01em
  - H3: 1.875rem (30px) / font-weight: 600 / line-height: 1.3
  - H4: 1.5rem (24px) / font-weight: 600 / line-height: 1.4
- **Body**: 
  - Large: 1.125rem (18px) / font-weight: 400 / line-height: 1.7
  - Regular: 1rem (16px) / font-weight: 400 / line-height: 1.6
  - Small: 0.875rem (14px) / font-weight: 400 / line-height: 1.5
- **Labels/UI**: 0.875rem (14px) / font-weight: 500 / uppercase / letter-spacing: 0.05em

**Mobile Adjustments**: Scale headings down 30-40% (H1: 2.25rem, H2: 1.875rem)

---

## Layout & Spacing System

**Tailwind Spacing Primitives**: Use units of **2, 4, 8, 12, 16, 20, 24** for consistency
- Component padding: p-4, p-6, p-8
- Section spacing: py-16, py-20, py-24 (desktop) / py-12, py-16 (mobile)
- Card gaps: gap-6, gap-8, gap-12
- Container max-width: max-w-7xl with px-4, px-6, px-8 horizontal padding

**Grid Patterns**:
- Services/Features: 3-column grid (lg:grid-cols-3, md:grid-cols-2, grid-cols-1)
- Portfolio: 2-column masonry-style grid (lg:grid-cols-2)
- Testimonials: Single carousel with 3 visible on desktop, 1 on mobile
- Pricing: 3-card horizontal layout with featured card elevated

---

## Component Design

**Cards**:
- Background: White with subtle border (border-slate-200)
- Border radius: rounded-2xl (16px)
- Shadow: Soft elevation (shadow-sm on rest, shadow-xl on hover)
- Padding: p-6 to p-8
- Hover: Slight lift (transform: translateY(-4px)) with shadow transition

**Buttons**:
- Primary: Sky-500 background, white text, rounded-full, px-8, py-3, font-semibold
- Secondary: Transparent with sky-500 border and text, same dimensions
- Hover: Darken 10% with smooth transition
- On images: Add backdrop-blur-sm with white/10 background

**Form Inputs**:
- Border: 2px solid slate-200, focus: sky-500 border
- Border radius: rounded-lg (8px)
- Padding: px-4, py-3
- Typography: 1rem regular weight
- Labels: Small caps, font-medium, mb-2

**Navigation Header**:
- Transparent background initially with backdrop-blur-md
- Solid white background (shadow-sm) after 50px scroll
- Sticky positioning with z-index layering
- Logo left, nav center/right, CTA button right
- Mobile: Hamburger menu with slide-in drawer

**Footer**:
- Dark navy background (#0B1220) with light slate text
- 4-column grid on desktop, stack on mobile
- Sections: Quick Links, Services, Portfolio, Contact
- Social icons as subtle outline circles
- Thin top border (border-slate-700)

---

## Page-Specific Layouts

### Home Page
1. **Hero Section** (min-h-screen flex center):
   - Large hero image: Modern workspace or abstract tech visuals (full-width background, overlay gradient from dark-navy/80 to transparent)
   - Centered content: H1 headline, subtitle (text-xl), dual CTAs (primary + secondary), trust badges row below
   
2. **Services Preview** (py-20):
   - H2 section title, 3-column grid of service cards with icons, titles, short descriptions
   
3. **Portfolio Preview** (py-20, bg-slate-50):
   - H2 "Featured Work", 2-column showcase with large project cards (image, title, description, badges, link)
   
4. **Testimonials** (py-24):
   - Centered carousel with quote cards, customer photo placeholders, names, companies
   
5. **Tech Stack Row** (py-16):
   - Horizontal logo grid (WordPress, HTML, CSS, JS, Git, MySQL icons with labels)
   
6. **CTA Band** (py-20, gradient background sky-500 to sky-600):
   - White text, centered H2, button

### Services Page
- Hero: Brief intro with illustration placeholder
- Two-track showcase: Large cards for WordPress vs Custom-Code (side-by-side on desktop)
- Additional services: 3-column grid below
- Include iconography for each service

### Portfolio Page
- Filter tabs: All / WordPress / Custom Code
- Masonry 2-column grid
- Project cards: Hover reveals overlay with "View Site" link
- Badges: Pill-shaped tags (bg-sky-100, text-sky-700)

### Pricing Page
- 3-tier cards: Equal height, center card highlighted (scale up 5%, shadow-2xl)
- Annual Add-On: Separate prominent card below tiers
- Comparison table: Striped rows, checkmarks for features
- FAQ Accordion: Chevron icons, smooth expand/collapse

### About Page
- Process timeline: 5 connected steps with numbers, icons, descriptions
- Team section: Grid of placeholder avatar circles with names/roles
- Values/philosophy: 2-column text blocks with subtle borders

### Contact Page
- Split layout: Form on left (60%), contact info/map placeholder right (40%)
- Form spans full width on mobile
- Success/error messages: Colored alert boxes with icons

---

## Visual Elements

**Shadows**: Use sparingly for depth
- sm: Subtle card elevation
- lg: Interactive hover states
- xl: Featured/focused elements

**Borders**: Minimal, thin (1-2px), slate-200 for separation

**Gradients**: Strategic use in hero overlays and CTA sections (sky-500 to sky-600)

**Animations**: Subtle, performance-focused
- Fade-in on scroll (IntersectionObserver): opacity 0 → 1, translateY 20px → 0
- Button hover: Background darken + scale(1.02)
- Card hover: translateY(-4px) + shadow increase
- No heavy scroll-jacking or parallax

---

## Images

**Hero Image**: Full-width background for home page hero - modern office workspace or abstract tech/code visualization with gradient overlay

**Portfolio Projects**: 
- Veluxe Interiors: Clean interior design mockup
- MS Properties: Real estate property grid screenshot
- Aspect ratio: 16:9, high quality

**Service Icons**: Use Heroicons (outline style) via CDN

**About Page**: Team photo placeholder, process step illustrations

All images: Lazy-load, alt text, webp format preferred

---

## Accessibility
- ARIA labels on all interactive elements
- Focus states: 2px sky-500 outline with offset
- Sufficient color contrast (WCAG AA minimum)
- Keyboard navigation for carousel and accordions
- Form validation with clear error messaging