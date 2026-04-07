# Vskin Beauty — Design Context

## Project
Beauty & slimming salon website for VSkin Beauty (Singapore). PWA built with Next.js 15 App Router, Firebase/Firestore, deployed on Vercel at vskinbeauty.shop.

## Design Direction
The website is being redesigned around a cohesive aesthetic. All new design elements should follow the **FeatureCards** standard (see `components/about.js`).

### FeatureCards Aesthetic (the reference standard)
- **Background**: `linear-gradient(135deg, #652D90 0%, #40215C 100%)` — deep purple gradient
- **Shape**: `border-radius: 1.5rem`, rounded and modern
- **Shadows**: Multi-layered neumorphic box-shadow with subtle glow (`rgba(101, 45, 144, 0.3)`)
- **Hover**: `translateY(-8px) scale(1.02)` + intensified shadow + lighter gradient
- **Press**: Inset shadow for depth, scale down slightly
- **Animations**: Ripple on click, shimmer gradient sweep on hover, pulse glow at rest
- **Text**: White on dark purple, bold titles with letter-spacing
- **Details**: Small decorative corner dots (rgba white, inset shadow)

### Glassmorphic Navbar
- Sticky, top: 0
- `backdrop-filter: blur(12px)`
- `background: rgba(255, 255, 255, 0.75)`
- Border bottom: `1px solid rgba(255,255,255,0.4)`
- No heavy box shadow on logo

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| Primary Purple | `#652D90` | Cards, accents |
| Deep Purple | `#40215C` | Gradient end, dark elements |
| Gold | `#e2b019` | Nav links hover, CTA |
| Background | `#f0f0f0` / `#fff` | Page background |

## Component Map
| File | Purpose |
|------|---------|
| `components/splice.js` | Hero — Spline 3D viewer |
| `components/about.js` | FeatureCards section (design reference) |
| `components/horizontalbanner.js` | Two-card info section with video |
| `components/listings.js` | Service/price listings |
| `components/reviewCarousell.js` | Customer reviews carousel |
| `components/contactParent.js` | Contact form section |
| `components/navbar.js` | Navigation (glassmorphic sticky) |
| `components/socials.js` | Social media links |
| `app/about/page.js` | About Us — VJet technology credibility, safety, compliance |
| `app/faq/page.js` | FAQ — accordion-style, FeatureCards aesthetic |

## Design Rules Going Forward
1. All cards/sections follow the FeatureCards aesthetic (purple gradient, neumorphic shadows, hover lift).
2. Animations must be **simple and smooth** — fade-in or slide-in once on scroll, no jank.
3. Navbar is glassmorphic and sticky — blurred background, no heavy borders.
4. No box shadow on the topBanner logo image.
5. `quote.js` has been removed — do not re-add it.
6. Transitions use `cubic-bezier(0.25, 0.46, 0.45, 0.94)` for consistency.
