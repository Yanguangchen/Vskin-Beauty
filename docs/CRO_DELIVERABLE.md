# VSkin Beauty — CRO & direct-response deliverable

This document mirrors the strategic audit you requested. **On-site implementation** lives in `lib/conversionCopy.js`, `components/conversionPage.js`, and the updated homepage stack.

---

## 1. Hero (three angles — implemented)

Rotate via **“rotate headline angle”** on the homepage (`HERO_VARIANTS` in `lib/conversionCopy.js`).

| Version | Role | Headline (summary) |
|--------|------|---------------------|
| **Results** | Outcome + audience | Sculpt a leaner-looking jawline and face—without needles or downtime |
| **Price entry** | Risk reversal | Try needle-free facial sculpting from $158—analysis included |
| **Premium** | Authority + taste | Clinic-grade facial sculpting—without the needle-tradeoff |

**Primary CTA (all):** WhatsApp pre-filled intent to **9880 7382**.  
**Secondary:** Jump to Beauty Concierge quiz or FAQ as configured per variant.

---

## 2. Positioning — ONE core offer (implemented)

**Core anchor:** **V-Sculpt Method™** — natural-looking **facial sculpting & contour** delivered **needle-free** (VJet).  
Body slimming / tightening / wrinkles are **support protocols**, introduced after the dominant face outcome is clear (see treatments hub + concierge).

---

## 3. Mechanism (implemented on homepage)

- **Analogy:** pressure-delivered “mist” vs puncture.  
- **Steps:** Assess → Deliver → Support.  
- **Why it works:** copy explains dermal delivery without needle trauma (no fabricated clinical stats).  
- **vs injections:** honest comparison table—not “better,” but **different job**.

---

## 4. Trust & proof

**Live on site:** three **verbatim** review spotlight cards (same data as carousel).  
**Placeholder:** consent-based before/after + live Google embed (see `TRUST_CHECKLIST` below).

---

## 5. Offer engineering (implemented)

**Framed offer:** “First visit: Face Analysis + Trial Experience” with inclusions, bonus (after-care checklist), urgency (appointment-only, peak slots), and **from $158** with “confirmed in-clinic / WhatsApp” disclaimer—no fake scarcity counts.

---

## 6. CTA & funnel

**Implemented path:**  
`Home (hook → problem → solution → mechanism → proof → offer → objections)` → **WhatsApp** / **Quiz** (`#beauty-concierge`) → **In-clinic analysis** → trial / course.

**Extended:** `/listings` for concern-based **support** treatments; `/faq` for depth.

---

## 7. Objection handling

**Homepage:** accordion (`OBJECTION_FAQ` in `lib/conversionCopy.js`).  
**FAQ page:** four additional questions aligned with CRO (work for me, vs injections, longevity, trust).

---

## 8. Differentiation

**Branded system:** **V-Sculpt Method™** + VJet mechanism story + category: **natural facial sculpting without fillers as the default answer.**

---

## 9. Page structure (homepage order)

1. Conversion stack (`conversionPage.js`)  
2. Spline / visual hook  
3. Beauty Concierge quiz  
4. Media showcase  
5. Horizontal video banners  
6. Review carousel  
7. Contact + map  

*(About cards were removed from home to reduce generic “three pillars” noise; `/about` remains for depth.)*

---

## 10. Five headline options (copy bank)

Also exported in code as `HEADLINE_OPTIONS` in `lib/conversionCopy.js`:

1. Needle-free facial sculpting in Jurong—book your face analysis today  
2. From $158: analysis + trial for sharper-looking contours (no syringes)  
3. Stop guessing treatments—start with one dominant face outcome  
4. Low needle tolerance? There is still a clinic-grade path to lift and refine  
5. V-Sculpt Method: pressure-delivered serums. Real sessions. Real human follow-up  

---

## 11. Three irresistible offer ideas (copy bank)

See `OFFER_IDEAS` in `lib/conversionCopy.js` (e.g. **7-Day Confidence Window**, **Camera-Ready Mini Series**, **Sensitive Skin Safe Start**). Price bundles for #2/#3 must be set **in-clinic**—not invented here.

---

## 12. Trust-building checklist

See `TRUST_CHECKLIST` in `lib/conversionCopy.js` (before/afters, live Google widget, provable credentials, policy copy, performance, analytics).

---

## Compliance note

We did **not** add fabricated years-in-business, fake session counts, or unverified before/afters. Add only what you can **prove** and **document**.
