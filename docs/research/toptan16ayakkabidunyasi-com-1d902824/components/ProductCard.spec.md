# ProductCard Specification

## Overview
- Target file: `src/components/sites/toptan16ayakkabidunyasi-com-1d902824/shared/ProductCard.tsx`
- Screenshot: `docs/design-references/toptan16ayakkabidunyasi-com-1d902824/home/bestsellers-grid.jpg` and `docs/design-references/toptan16ayakkabidunyasi-com-1d902824/collection/nike-collection-grid.jpg`
- Interaction model: static + hover (image zoom subtle) + click-driven wishlist heart (local toggle state only, no persistence needed) + link to product page

## DOM structure
Card wrapper (`<div>` or `<article>`, wraps a `<Link href="/products/[handle]">` around the image+title+price, with the wishlist button as a sibling overlay so its click doesn't navigate — use `e.preventDefault()`/`stopPropagation` on the heart button, or place it outside the Link with its own smaller Link-free zone).

1. **Image container**: aspect-square, background `#F5E6D3`-ish warm beige (use `#F3E4D0` or similar warm neutral — sample visually from screenshot, a soft peach/tan matching the product photography backdrop... actually the product photos already include their own beige studio background baked into the PNG, so container background can just be `#fff` or `transparent`; do NOT add an extra colored background behind the image), rounded top corners matching card radius, `object-fit: cover`, subtle hover scale (`transition-transform duration-300 hover:scale-105`, `overflow-hidden` on container)
   - Wishlist heart button: absolute top-left, ~12px inset, white circle bg, lucide `Heart` icon ~18px, border `1px solid rgba(18,18,18,0.15)`, toggles filled/outline on click (local `useState`)
   - Badge: absolute bottom-left over image, ~12px inset, pill shape (`rounded-full`), background `#FF8300`, white text, ~13px, padding `6px 12px`, small tag icon (lucide `Tag`) + text "1 Alana 1 Bedava" — only render if product has this promo (assume always true for this store's products, pass as prop with default true)
2. **Card body** (white bg, padding ~16px, text centered, border `1.6px solid rgba(18,18,18,0.2)`, border-radius `8px` on the whole card — image container top corners rounded, body bottom corners rounded, so the border wraps the entire card as one rounded rect):
   - Title: font Archivo, ~20-23px, color `#121212`, single line (truncate/ellipsis if long), margin-bottom ~8px, links to product
   - Rating row (optional, only if product has reviews — omit for MVP, static component doesn't need real review counts): skip, not required
   - Price row: current price bold `#121212` ~16-18px, then compare-at price with `line-through`, `rgba(18,18,18,0.5)`, ~14px, gap ~8px
   - "Hızlı Satın Al" button: full width, margin-top ~12px, `rounded-full`, border `1.6px solid #FF8300`, text `#FF8300`, bg transparent, padding `10px`, font ~15px, hover: bg `#FF8300` text white (transition-colors 200ms)

## Props
```ts
interface ProductCardProps {
  product: Product; // from "@/types/toptan16"
}
```
Use `formatPrice` from `@/lib/sites/toptan16ayakkabidunyasi-com-1d902824/data` for price strings. Use `product.images[0]` as the card image (next/image, sizes appropriately, the images are already reasonably sized webp). Link href: `/products/${product.handle}`.

## Responsive
- Desktop: card width is whatever the grid column gives it (grid handles sizing, 3 or 4 cols)
- Mobile: same card, just narrower column (2-col grid typical) — text sizes can drop slightly (title ~18px)

This is a client component only if the wishlist toggle needs local state (`"use client"`); keep it minimal.
