# MUSA Soda Water — Premium Brand Website

A high-fidelity, world-class beverage marketing website for **MUSA Soda Water**, built with React, Vite, TypeScript, and Tailwind CSS. The site features an elegant dark premium theme, deep custom layouts, micro-animations, and complete device responsiveness.

---

## Brand & Aesthetic Identity

- **Tagline**: `PURE • SPARKLING • REFRESHING`
- **Origin**: Proudly made in Bannu, KPK, Pakistan (Since 2020)
- **Signature Palette**:
  - **Lobby Charcoal**: `#050A12` (the deep, dark beverage room base)
  - **Electric Cyan/Blue**: `#2DD4FF` (carbonated energy representation)
  - **Herbal Mint Green**: `#46F08A` (garden and spring purity)
- **Star Flavors**: Mint Sparkling, Lemon Zest, Blueberry Splash, and Imli Royal (Tamarind).

---

## Features Implemented

1. **Home Section (`/#/`)**:
   - **Interactive Canvas Bubble Engine**: Realtime rendering of floating fizzes that rise from the page, providing responsive movement.
   - **Bottle Lineup Vector Mockup**: Glowing containers styled for each of the four flavors.
   - **Quality Ticker / proof strip**: Quick scannable badges highlighting establishment dates, pure ingredients, carbonation, and provincial pride.
   - **Bento Grid Flavor Previews**: Interactive preview cards with color transitions.
   - **Founder Brand Block**: Dedicated story card highlighting MUSA's local roots.
   - **Distributor Call-To-Action Banner**: Glow panel linking directly to inquiry forms.
   - **Latest Journal Posts**: Dynamic grid showing excerpts, dates, and reading times.

2. **Flavors Catalog (`/#/products`)**:
   - Deep-linking active tabs (e.g., `#products?id=lemon`), supporting instant navigation states from other buttons.
   - Elegant SVG product simulation showing active beverage colors, ingredients, serving directives, and tasting notes.
   - **Interactive Expandable Nutrition Facts Drawer**: Standard micro-specs for sodium, sugar, carbs, and calories per flavor.
   - Context-aware wholesale deep-links that pre-populate inquiries.

3. **Our Story & History (`/#/about`)**:
   - Five core product value pillars in responsive bento styles.
   - **Chronological Timeline (Since 2020)**: Staggered story nodes detailing the brand’s history from design inception to corporate cross-provincial growth.

4. **Filterable Media Gallery (`/#/gallery`)**:
   - Tab toggles (Products / Factory / Events) filter the layouts instantly.
   - **MUSA Lightbox Overlay**: Beautiful fully native photo view modal carrying back-drop blur, metadata, and keyboard-mapped next/previous controls.

5. **Partner/Distributor Network Portal (`/#/distributor`)**:
   - Explicit margins and territorial protections summary.
   - **Distributor Inquiry Form**: High-validation controls checking active phone numbers, email structure, names, and field sizes. Outputting local storage records and instant interactive receipts.

6. **Journal System (`/#/blog` or `/#/blog?slug=...`)**:
   - Rich typographic articles with headings, custom tables, and blockquotes detailing serving physics and mixology.
   - Category filtering (Mixology / FMCG Guide / Brand Story).
   - In-app social clipboard share feature.

7. **Contact Panel (`/#/contact`)**:
   - Dedicated coordinate directories (legal address in Bannu Industrial Estate, direct hotlines, phone lines).
   - **Abstract Interactive Map Component**: Shows active GPS coordinate pins (`32.986° N, 70.603° E`) and vector road layouts with a heartbeat pulse on our factory.
   - Validated message board returning secure MSG transaction receipts.

---

## Getting Started

### Installation
```bash
# Clone or import this repo
# Install all required standard packages
npm install
```

### Development
```bash
# Launch the Vite local dev server
npm run dev
```
The application will boot on `http://localhost:3000` with hot-reload capabilities disabled (according to the agent workspace directives to save CPU and ensure render stability).

### Production Build
```bash
# Compile and optimize static assets for production under /dist
npm run build
```

---

## Customizing Assets (Guideline for replacements)

All static imagery is rendered using atmospheric Unsplash photography to maintain high startup polish. To replace with your own physical bottle photo shoots:
- **Products**: Replace background bottle visuals inside `src/components/Products.tsx` or reference direct image paths.
- **Gallery**: In `src/components/Gallery.tsx`, replace `imageUrl` strings inside the `galleryItems` array with local public directory paths (e.g., `"/images/my-imli.png"`).
- **Journal**: Modify `image` fields inside `src/data/blog.ts` to coordinate card headers.
