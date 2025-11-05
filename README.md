# DigitalAgency4Us - Modern Web Agency Website

A modern, mobile-first website for DigitalAgency4Us built with React, Vite, and Tailwind CSS.

**Tagline:** "We build, host & scale websites that grow your business."

## Features

- ✅ Complete 6-page React SPA (Home, Services, Portfolio, Pricing, About, Contact)
- ✅ Sticky navigation header with transparent-to-solid scroll effect
- ✅ Responsive design optimized for mobile, tablet, and desktop
- ✅ Portfolio showcasing Veluxe Interiors and MS Properties
- ✅ Testimonials from Hemath Kumar Reddy and Ramesh Goud
- ✅ JSON-driven content system for easy updates
- ✅ SEO-optimized with meta tags and Open Graph
- ✅ Smooth animations and interactions
- ✅ Contact form with validation (ready for backend integration)

## Project Structure

```
client/
├── src/
│   ├── components/         # Reusable UI components
│   ├── pages/             # Page components
│   ├── data/              # JSON content files
│   │   ├── services.json
│   │   ├── portfolio.json
│   │   ├── testimonials.json
│   │   └── pricing.json
│   └── lib/               # Utilities
server/
├── routes.ts              # API routes (contact endpoint ready)
└── storage.ts             # Storage interface
```

## Editing Content

All content is stored in JSON files in `client/src/data/`:

### Services (`services.json`)
Add or modify services by editing the JSON array. Each service needs:
- `id`: Unique identifier
- `title`: Service name
- `description`: Short description
- `icon`: Icon name (wordpress, code, palette, search, zap, headset)
- `features`: Array of feature strings

### Portfolio (`portfolio.json`)
Add projects with:
- `id`: Unique identifier
- `title`: Project name
- `description`: Project description
- `url`: Live site URL
- `type`: "wordpress" or "custom"
- `image`: Image reference (add corresponding image to imageMap)
- `tags`: Array of tag strings

### Testimonials (`testimonials.json`)
Add testimonials with:
- `id`: Unique identifier
- `name`: Client name
- `company`: Company name
- `role`: Client role
- `quote`: Testimonial text
- `image`: Image reference

### Pricing (`pricing.json`)
Edit packages, add-on pricing, comparison table, and FAQs.

## Switching Portfolio Badges

To change a portfolio item between WordPress and Custom Code:

1. Open `client/src/data/portfolio.json`
2. Find the project
3. Change `"type": "wordpress"` to `"type": "custom"` (or vice versa)
4. Update tags array if needed

Example:
```json
{
  "id": "example-project",
  "type": "custom",  // Change this
  "tags": ["Custom Code", "Full-Stack"]  // Update these
}
```

## Email Integration (TODO)

The contact form is ready for backend integration. To enable email sending:

1. Choose an email service (EmailJS, SendGrid, Resend, etc.)
2. Add your API keys to environment variables
3. Implement the `/api/contact` endpoint in `server/routes.ts`
4. The endpoint receives: name, email, phone, company, projectType, budget, message

See `server/routes.ts` for implementation placeholder.

## Running the Project

```bash
# Install dependencies (already done)
npm install

# Start development server
npm run dev
```

The site will be available at the local development URL.

## Deployment on Replit

1. Click "Deploy" in the Replit interface
2. Configure your custom domain (optional)
3. Set up environment variables for email service
4. The site will be live at your `.replit.app` domain

## Technologies Used

- **Frontend:** React, Vite, Tailwind CSS
- **UI Components:** Radix UI, Shadcn
- **Icons:** Lucide React, React Icons
- **Routing:** Wouter
- **Forms:** React Hook Form
- **Backend:** Express.js (ready for API integration)

## Brand Colors

- Primary: `#0EA5E9` (sky-500)
- Dark: `#0B1220`
- Light: `#F1F5F9`

## Contact

For questions or support with this codebase, refer to the inline comments and JSON structure examples.
