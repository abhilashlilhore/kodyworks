# Single-Page Website Implementation Plan

## Goal

Rebuild `app/page.tsx` as a full single-page portfolio for **KODY Works** with 5 new sections (About, Brand Slider, Testimonials, Contact, Why Choose Us), inspired by https://savior.im/ — new, eye-catching design using the existing Header/Footer. All sections are scroll-snap anchors on one page.

## Key Facts (from codebase)

- Next.js 16.2.11 App Router, React 19, Tailwind CSS v4, react-icons
- Existing: `app/page.tsx` (+`page.css`) = Services grid; `Header.tsx`/`.Header.css`; `Footer.tsx`/`.Footer.css`
- Design tokens: dark blue `#011542`, mid blue `#0d4bb8`/`#0439AD`, accent `#0d6efd`/`#1565ff`, navy `#081b44`
- Font: Arial/Helvetica — keep consistent
- `globals.css` has `@import "tailwindcss"`; tailwind utilities available
- Assets in `app/assets/`: 6 service icons, `logo.jpeg`, `footer_left.png`, `footer_right.png`
- **No email library installed** — package.json has only `react-icons` as extra
- AGENTS.md warns Next.js 16 has breaking changes; check `node_modules/next/dist/docs/` if uncertain

## Confirmed Decisions

| # | Decision | Choice | Rationale |
|---|----------|--------|-----------|
| 1 | **Email backend** — contact form must send to `abhilashlilhore1729@gmail.com` | **Next.js API Route + nodemailer** with Gmail SMTP (CONFIRMED by user) | Server-side keeps credentials secret; user owns the Gmail account. |
| 2 | **Brand slider source images** — "use whatever images exist" | Reuse existing `footer_left.png`, `footer_right.png`, and 6 service icons in auto-scrolling carousel (CONFIRMED by user instruction) | No new assets required; reuses what's available. |
| 3 | **Testimonial content** — "what clients said" | Use placeholder text authored for 3 fictional KODY Works clients | Avoids fabricating real testimonials; user can replace with real quotes later. |

## File-by-File Change List

### 1. `app/page.tsx` — complete rewrite

Replace the single Services section with 6 full page sections + keep a simplified Services reference inline.

```tsx
// app/page.tsx
// Scroll-snap container wrapping all sections; smooth anchor-scroll nav in Header
// Sections (in DOM order):
//   #hero         → hero headline + CTA (inspiration from savior "Next Level" hero)
//   #about        → About KODY Works
//   #brands       → Brand/Logo slider
//   #services     → current services grid (preserved as-is, restyled)
//   #testimonials → client quotes
//   #why-choose   → why choose us (numbered cards)
//   #contact      → map + form + details
```

All sections rendered from plain JS objects (no schema files needed).

### 2. New component files (per section)

| File | Description |
|------|-------------|
| `app/components/Hero.tsx` | Full-viewport hero with gradient overlay, headline, subheading, CTA button |
| `app/components/Hero.css` | Responsive styles |
| `app/components/About.tsx` | Two-column: text left, decorative graphic right; mission & vision text for KODY Works |
| `app/components/About.css` | Styles |
| `app/components/BrandSlider.tsx` | Auto-scrolling horizontal carousel of existing images; `use client` for animation loop |
| `app/components/BrandSlider.css` | Marquee/gradient-fade edges |
| `app/components/Testimonials.tsx` | Card carousel with client photo, quote, name & title |
| `app/components/Testimonials.css` | Styles |
| `app/components/WhyChoose.tsx` | Grid of 4–6 numbered feature cards with icons (use service icons) |
| `app/components/WhyChoose.css` | Styles |
| `app/components/Contact.tsx` | Map iframe + contact details + form (name, email, phone, message) |
| `app/components/ContactForm.css` | Form styling |

### 3. `app/api/contact/route.ts` — new API route

- POST endpoint: receives `{ name, email, phone, message }`
- Uses `nodemailer` to send to `abhilashlilhore1729@gmail.com`
- Returns JSON `{ success: true }` or `{ error }`
- Reads SMTP config from env: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`

### 4. `app/page.tsx` import wiring

```tsx
import Hero from "./components/Hero";
import About from "./components/About";
import BrandSlider from "./components/BrandSlider";
import ... // etc
```

### 5. `app/components/Header.tsx` — nav links

Add anchor links to the existing nav bar so sections scroll into view:
`#hero #about #services #testimonials #contact`

## Design Approach (per section)

### Hero (inspiration)
- Full `100vh` section, centered text
- Gradient background matching existing blue palette
- Headline: "KODY Works — Delivering Technology Solutions Worldwide"
- Subheading: modified tagline from existing Header
- CTA button: "Get Free Consultation" → scrolls to `#contact`

### About
- Title pattern reusing `.section-title` style (lines + circle)
- Two-column layout:
  - Left: modified company text — "Enterprise-Level Technology Solutions With Personal Dedication"
  - Right: decorative split-circle graphic (reuse logo circle style from Header) or abstract SVG
- Text references KODY Works mission, 12+ years (placeholder), global reach

### Brand Slider
- "Can We Get A Hallelujah For These Brands We've Worked With?" heading
- Horizontal auto-scroll (`@keyframes` marquee) using existing 8 images
- Gradient fade on left/right edges
- `overflow-x: auto` fallback for accessibility

### Testimonials (Clients section)
- "Hear What Our Clients Have to Say" heading
- Testimonial card: photo placeholder, 5-star rating, quote, client name + title
- Swipe/drag carousel (CSS scroll-snap + JS for momentum)
- 3 placeholder testimonials for KODY Works clients

### Why Choose Us
- "Why Choose KODY Works" heading with numbered badges
- 4 cards: (1) Transparency & Accessibility, (2) Flexible & Adaptable Team, (3) Data-Driven Solutions, (4) High-Level Consultation
  - Reuse service icon images inside each card
- Each card has short description + optional "Learn More" CTA

### Contact
- Two-column on desktop:
  - Left: Google Maps embed iframe (centered on Betul, MP — existing office location from Footer)
  - Right: contact details (mobile, email, office address) + contact form
- Form fields: Name*, Email*, Phone, Message* (required marked *)
- Form validates client-side (use `react-icons`? or plain HTML5), posts via `fetch('/api/contact')` to the API route
- Form state: loading / success / error toast messages

## Email Implementation Detail

```
POST /api/contact
Body: { name, email, phone, message }
→ nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
  })
→ transporter.sendMail({
    from: SMTP_USER,
    to: 'abhilashlilhore1729@gmail.com',
    subject: 'New Inquiry from KODY Works Website',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
  })
```

**Env file:** `.env.local` with `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER=abhilashlilhore1729@gmail.com`, `SMTP_PASS`

> **Prerequisite (CONFIRMED):** Gmail app password for `abhilashlilhore1729@gmail.com`. Since May 2022, Gmail blocks plain account passwords — an App Password must be generated in Google Account settings. The implementation agent must create `.env.local` with these values and run `npm install nodemailer`. If SMTP access is unavailable, fall back to Resend (`npm install resend`) with an API key + verified sender.

## Styling Strategy

- Primary: Tailwind utility classes (consistent with `globals.css` Tailwind import)
- Secondary: Small scoped CSS files per component (matches existing Header.css/Footer.css pattern)
- Reuse `.section-title` pattern from `page.css` via a shared CSS fragment or replicate in each component CSS
- Color palette extends existing blue theme with lighter accent colors for modern feel
- Responsive: mobile-first, breakpoints at 768px (tablet), 480px (mobile) — matches existing media queries

## Component Structure Summary

```
app/
├── page.tsx          → imports 6 components, wraps in <main> with scroll-snap
├── page.css          → optional global page styles (keep or remove)
├── components/
│   ├── Header.tsx     (modify nav links only)
│   ├── Footer.tsx     (unchanged)
│   ├── Hero.tsx + Hero.css
│   ├── About.tsx + About.css
│   ├── BrandSlider.tsx + BrandSlider.css
│   ├── Testimonials.tsx + Testimonials.css
│   ├── WhyChoose.tsx + WhyChoose.css
│   └── Contact.tsx + Contact.css
└── api/
    └── contact/
        └── route.ts
```

## Prerequisites / Install Steps

1. `npm install nodemailer` (adds dependency to package.json)
2. Create `.env.local` with Gmail SMTP credentials:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=465
   SMTP_USER=abhilashlilhore1729@gmail.com
   SMTP_PASS=<Gmail app password>
   ```

## Validation Plan

1. `npm run lint` (eslint) — must pass
2. `npm run build` — compile check
3. `npm run dev` — manually test:
   - Hero → About → Services → Testimonials → Why Choose → Contact scroll
   - Brand slider auto-scrolls
   - Contact form validates required fields
   - Form POST reaches API route (check terminal log)
   - Email arrives at `abhilashlilhore1729@gmail.com` (requires valid SMTP creds)
4. Responsive check: Chrome DevTools at 375px, 768px, 1200px

## Out of Scope

- Backend admin panel
- Database persistence for messages
- Real client testimonials (placeholder text only)
- New image assets (reusing existing images only)
- Custom domain/SSL (hoster responsibility)
