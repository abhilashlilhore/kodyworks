# Website Rebuild Plan — AmericanChase-inspired, AI-free

## Current State
- Next.js App Router app at `C:\xampp\htdocs\kodyworks`
- Header (`app/components/Header.tsx`) with logo, company name, tagline, sticky nav
- Footer (`app/components/Footer.tsx`) with contact info + proprietor details
- Home page (`app/page.tsx`) currently has only a static 6-card services grid
- Assets live in `app/assets/`

## Goal
Rebuild the homepage to match the **layout, visual hierarchy, and section pattern** of `americanchase.com`, while:
- **Removing all AI/Generative AI consulting sections**
- **Keeping the existing header and footer completely unchanged**
- **Keeping the existing services section completely unchanged** (do not modify `app/page.tsx` services grid or `app/page.css` services styles)
- Keeping the site as a **static marketing site** (no CMS, no backend)

## Reference Site Sections (filtered)

| # | Section | Include? | Notes |
|---|---------|----------|-------|
| 1 | Sticky Header + Logo | ❌ | Keep current header structure — do not modify `Header.tsx` or `Header.css` |
| 2 | Hero / Banner Carousel | ✅ | Add hero with headline + CTA + background image |
| 3 | Revolutionizing YOUR Businesses with Generative AI | ❌ | AI consulting — excluded per user request |
| 4 | Our Services | ❌ | Keep current 6-card services grid exactly as-is — do not modify `page.tsx` or `page.css` services styles |
| 5 | Our Powerful Partners | ✅ | Add partner logo strip after services |
| 6 | Insights Corner / Latest Blogs | ✅ | Add latest blog cards grid after partners |

## Planned Page Sections (in order)

### 1. Hero / Banner Section
- Full-width banner with background image (gradient or image overlay)
- Large headline text + subheadline
- CTA button (e.g., "Explore Services" or "Contact Us")
- Optional: simple static image carousel (2–3 slides) with manual or auto transition
- **Inserted before the existing services section in `page.tsx`**

### 2. Services Section
- **NO CHANGES** — keep the existing 6-card services grid exactly as-is in `app/page.tsx`
- Do not modify `app/page.css` services styles

### 3. Partners Section
- Horizontal strip of partner logos
- Grayscale logos with hover color effect
- Keep it lightweight; no carousel needed unless logos overflow
- **Inserted after the services section in `page.tsx`**

### 4. Insights / Blog Section
- "Latest Blog" header
- Grid of blog cards (image, date, author, title, excerpt, "Learn More" link)
- Initially static with 4–6 hardcoded blog posts
- Use placeholder images from `unsplash` or local assets until real blog content is provided
- **Inserted after the partners section in `page.tsx`**

## Component Structure

```
app/
├── page.tsx                      # Updated homepage: add Hero, Partners, Insights before/around existing services
├── page.css                      # Add styles for new sections only; do NOT modify existing services styles
├── components/
│   ├── Header.tsx                # DO NOT MODIFY
│   ├── Header.css                # DO NOT MODIFY
│   ├── Footer.tsx                # DO NOT MODIFY
│   ├── Footer.css                # DO NOT MODIFY
│   ├── Hero.tsx                  # New: hero/banner component
│   ├── Hero.css                  # New
│   ├── Partners.tsx              # New
│   ├── Partners.css              # New
│   └── Insights.tsx              # New
│   └── Insights.css              # New
```

## Assets Needed
| Asset | Source | Notes |
|-------|--------|-------|
| Hero background image | Local or royalty-free | Dark gradient overlay on image |
| Partner logos (4–6) | PNG/SVG with transparency | Salesforce, Microsoft, AWS, Google style placeholders |
| Blog images (4–6) | Local placeholder images | Landscape aspect ratio |

## Styling Approach
- Continue using plain CSS modules (no Tailwind / no CSS-in-JS)
- Preserve existing blue color palette: `#0d4bb8`, `#011542`, `#0439AD`, `#1565ff`
- Add `max-width` container wrapper for content sections
- Use `clamp()` for responsive typography where needed
- Keep mobile breakpoints at 1100px, 700px, 500px

## Data Strategy
- All content **hardcoded in TypeScript arrays** (no CMS, no API)
- Service data: `{ id, title, subtitle, description, icon, link }`
- Blog data: `{ id, title, date, author, excerpt, image, link }`
- Partners: array of `{ name, logoSrc, alt }`

## Implementation Order
1. Create `Hero.tsx` + `Hero.css` and update `page.tsx` to insert hero before services
2. Create `Partners.tsx` + `Partners.css` and update `page.tsx` to insert partners after services
3. Create `Insights.tsx` + `Insights.css` and update `page.tsx` to insert insights after partners
4. Update `page.css` for new section spacing and typography (do not touch existing services styles)
5. Verify responsive behavior on 1100px, 700px, 500px breakpoints
6. Run `npm run lint` / `npm run typecheck` if scripts exist

## Risks / Decisions
- **Carousel vs static hero**: Default to static hero with optional manual dots to avoid heavy JS. Reference has carousel but a static hero is simpler and sufficient.
- **Partner logo overflow**: If logos are too many, convert to horizontal scroll strip.
- **Blog links**: Hardcode as `#` placeholders until real CMS/pages are added.
- **Services section untouched**: Do not modify `app/page.tsx` services grid or `app/page.css` services styles. New sections must be inserted before/after the existing services block.

## Validation
- Visual comparison against `americanchase.com` for new section order, spacing, and typography
- Test mobile responsiveness (stacking order, font sizes, padding) for new sections only
- Ensure no AI-related content appears anywhere on the site
- Verify `app/components/Header.tsx`, `Header.css`, `Footer.tsx`, `Footer.css` are unchanged
- Verify `app/page.tsx` services grid and `app/page.css` services styles are unchanged
- Run build: `npm run build` must succeed
