<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project Overview

**KODY Works** — A Next.js 16 (App Router) consulting business website. Tech stack: Next.js 16.2.11, React 19.2.4, Tailwind CSS v4, TypeScript, react-icons.

## Directory Structure

```
app/
├── assets/              # Static images (PNG, JPEG, ICO)
│   ├── ai_automation_1.png
│   ├── cloude_solution.png
│   ├── footer_left.png
│   ├── footer_right.png
│   ├── it_consulting.png
│   ├── logo.jpeg
│   ├── project_management.png
│   ├── remote_resource_management.png
│   └── softwer_development.png
├── components/
│   ├── Header.tsx       # Layout header (imported in layout.tsx)
│   ├── Header.css
│   ├── Footer.tsx       # Layout footer (imported in layout.tsx)
│   └── Footer.css
├── globals.css          # Global styles (Tailwind import, CSS variables)
├── layout.tsx           # Root layout — wraps all pages with Header + Footer
├── page.tsx             # Home page
├── page.css             # Home page styles
└── favicon.ico
```

## Layout & Page Convention

### Root Layout (`app/layout.tsx`)
- Wraps every page with `<Header />` at top and `<Footer />` at bottom inside a flex column container (`<div className="flex min-h-screen flex-col">`).
- Font: Geist Sans / Geist Mono via `next/font/google`, also `Arial, Helvetica, sans-serif` in CSS.
- `globals.css` is imported at the layout level (applies globally).

### Creating a New Page
1. **Create `app/<page-name>/page.tsx`** — export a default component returning JSX.
2. **Create `app/<page-name>/page.css`** — import it at the top of the page: `import "./page.css";`
3. **Page structure pattern** (from `app/page.tsx`):
   - Import CSS first, then other dependencies (images, components).
   - Use `<section className="...">` as the outer wrapper.
   - Use the **section-title** pattern (two `.line` spans with centered `<h2>`).
   - Use a grid or flex container for content.
   - All pages are automatically wrapped by Header + Footer via layout.tsx.

### Example page scaffold
```tsx
import "./page.css";

import Image from "next/image";

export default function NewPage() {
  return (
    <section className="newpage-section">
      <div className="section-title">
        <span className="line"></span>
        <h2>PAGE TITLE</h2>
        <span className="line"></span>
      </div>

      {/* content */}
    </section>
  );
}
```

## Color Palette

### Primary Colors
| Color  | Hex       | Usage                          |
|--------|-----------|--------------------------------|
| Navy   | `#011542` | Header nav bg, logo "K" dark   |
| Blue   | `#0439AD` | Company name "Works", corner   |
| Light Blue | `#0d6efd` | Logo arrow                  |
| Accent Blue | `#1d4ea6` | Header lines, nav separators |

### Secondary Colors
| Color  | Hex       | Usage                          |
|--------|-----------|--------------------------------|
| Deep Blue  | `#081b44` | Service card titles            |
| Title Blue | `#0d4bb8` | Section titles, divider lines  |
| Medium Blue | `#1147b3` | Footer label text              |
| Sky Blue   | `#1565ff` | Footer icon bg, owner icon     |
| Light Sky  | `#2e8cff` | Footer item headings           |

### Neutrals
| Color  | Hex       | Usage                          |
|--------|-----------|--------------------------------|
| White  | `#fff`    | Backgrounds (footer bottom, section bg) |
| Near White | `#f8fbff` | Page background gradient start |
| Light Gray | `#f1f5f9` | Page background gradient end  |
| Border Gray | `#cdd6e3` | Service card borders         |
| Soft Gray | `#ddd`   | Responsive dividers             |
| Text Gray | `#3f4652` | Consulting row text            |
| Dark Gray | `#111`   | Footer owner name              |
| Teal tint | `rgba(34, 211, 238, 0.18)` | Body radial gradient |

## Design Patterns

### Section Title
Wraps a heading with two decorative lines:
```html
<div className="section-title">
  <span className="line"></span>
  <h2>TITLE TEXT</h2>
  <span className="line"></span>
</div>
```
- CSS: `.section-title` uses flexbox center with `gap: 20px`.
- `.line` is `280px` wide, `3px` tall, `#0d4bb8` blue, with a circular `::before` dot.
- `.line:first-child::before` aligns dot to left; `.line:last-child::before` aligns to right.

### Service Card (Grid)
Used in the home page grid:
```html
<div className="service-card">
  <div className="service-icon">{icon}</div>
  <h3>TITLE</h3>
  <h4>SUBTITLE</h4>
</div>
```
- Grid: `repeat(6, 1fr)` on desktop, `repeat(3, 1fr)` at ≤1100px, `repeat(2, 1fr)` at ≤700px, `1fr` at ≤500px.
- Each card has a right border (`2px solid #cdd6e3`), removed on last child.
- Card titles: `h3`/`h4` in `#081b44`, bold, 18px.
- Icons: `<Image>` with `className="logo-image"` and `object-fit: contain`, `priority` flag.

### Footer
- Top bar: dark blue background `#052760`, white text, contact items with circular `#1565ff` icons.
- Bottom bar: white background, logo images left/right, owner info centered.
- Font sizes adjust at `@media (max-width: 900px)` and `@media (max-width: 480px)`.

### Header
- Top: logo image + company name ("KODY" in `#011542`, "Works" in `#0439AD`) + "CONSULTING" text with line separators (`#1d4ea6`).
- Tagline: italic, `#102a63`.
- Nav: dark blue `#011542` background, menu items separated by `|` (even spans in `#1d4ea6`).
- Corner triangles: light blue `#0439AD` and dark `#011542` using `clip-path: polygon(...)`.
- Sticky nav on scroll (JS adds `.header-nav-fixed`).

### Responsive Design
- Uses `@media` breakpoints: 1100px, 700px, 500px, 900px, 480px.
- Uses `clamp()` for fluid font sizes and padding.
- CSS files colocated with components: `Component.tsx` + `Component.css`, imported at top of TSX.

## CSS Conventions
- Font family: `Arial, Helvetica, sans-serif` (global fallback).
- No CSS modules — plain `.css` files imported into components.
- File naming: PascalCase component files (`Header.tsx`, `Footer.tsx`), camelCase or kebab CSS files.
- CSS structure: top-to-bottom, sectioned with `/* ==== SECTION ==== */` comments, responsive rules at the bottom.
