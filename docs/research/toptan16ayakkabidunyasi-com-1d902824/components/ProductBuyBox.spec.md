# ProductBuyBox Specification

## Overview
- Target file: `src/components/sites/toptan16ayakkabidunyasi-com-1d902824/product/ProductBuyBox.tsx`
- Screenshot: `docs/design-references/toptan16ayakkabidunyasi-com-1d902824/product/product-buybox.jpg`
- Interaction model: click-driven size selection (single-select pills) + click-driven color swatch (navigates to a sibling product, treat as a `Link`) + sticky-on-scroll bottom bar (scroll-driven visibility)

## Structure (top to bottom, right column of product page)
1. Title: font Archivo, ~32px, `#121212`. e.g. "Airforce Premium Full Beyaz"
2. Price row: current price bold `#121212` ~24px, compare-at price `line-through rgba(18,18,18,0.5)` ~18px, gap ~12px, then badge pill "1 Alana 1 Bedava" (bg `#FF8300`, white text, tag icon, same style as ProductCard badge) inline to the right
3. "Renk Seçenekleri" (font Archivo/semibold ~16px, `#121212`, margin-bottom ~12px) — row of small square image swatches (~64x64, rounded ~6px), each is a `Link` to another product's page (color variants are actually separate products on this store, not true Shopify variants — pass an optional `colorOptions: {handle, image}[]` prop; if not provided, omit this block entirely). Active/current swatch has `2px solid #121212` border.
4. Social-proof box: light blue bg (`#EAF3FC` or similar, `rounded-lg`, padding ~16px), two lines: "👀 **{N}** kişi bu ürünü inceliyor!" and "🔥 **{N}** kişi sepetine ekledi." — numbers bold/blue-ish link color, static plausible numbers are fine (e.g. 167 / 189) since this mirrors a fake-urgency widget; pass as optional props with sane defaults.
5. Disclaimer line: small gray text `#666666`, ~14px: "Ürünlerimiz yüksek kaliteli replikadır."
6. "Ayakkabı Numarası" (label, font Archivo/semibold ~16px, margin-bottom ~12px) — size pill buttons, wrap in a flex row with gap ~10px: sizes 36–44 (only render sizes present in `product.variants`, mark unavailable ones with a muted/disabled style + no click). Each pill: `rounded-full`, border `1.6px solid rgba(18,18,18,0.25)`, ~48px square-ish, selected state = filled `#121212` bg + white text; unselected = white bg + `#121212` text. Single-select, `useState`.
7. "SEPETE EKLE" button: full width, `#121212` bg, white text, bold, `rounded-full` or large rounded-rect, padding ~16px, font ~16px uppercase-ish
8. "HEMEN SATIN ALIN" button: full width, below the first, border `1.6px solid #FF8300`, text `#FF8300`, bg transparent, same padding/shape
9. Trust badges row: 3 items inline (icon + short label), ~13px text, icons lucide `CheckCircle` "Kapıda Ödeme", `RefreshCw`/`Repeat` "Kolay İade", `Truck` "Hızlı Kargo" — small, gray-ish `rgba(18,18,18,0.7)`

## Sticky bottom bar
Separate small always-mounted bar, `position: fixed; bottom: 0; left: 0; right: 0; z-index: 40`, white bg, border-top `1px solid rgba(18,18,18,0.1)`, padding ~12px 24px, flex row: small thumbnail (~48px) + title + price (left/center), size `<select>` dropdown (native `<select>`, styled minimally) + "SEPETE EKLE" button (right). SCROLL-DRIVEN: only rendered/visible once the user has scrolled past the main buy box (`IntersectionObserver` on the main "SEPETE EKLE" button — show the sticky bar when that button scrolls out of view above the viewport; hide when it's visible). Implement with `useState` + `IntersectionObserver` in a `useEffect`.

## Props
```ts
interface ProductBuyBoxProps {
  product: Product; // from "@/types/toptan16"
}
```
Use `formatPrice` from the data lib. This must be a client component (`"use client"`) given all the interactive state.

## Responsive
- Desktop (1440px): right column of 2-col layout, ~50% width
- Mobile (390px): full width below the gallery; sticky bottom bar still applies and is especially important on mobile
