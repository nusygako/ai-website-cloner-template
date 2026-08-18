# ProductGallery Specification

## Overview
- Target file: `src/components/sites/toptan16ayakkabidunyasi-com-1d902824/product/ProductGallery.tsx`
- Screenshot: `docs/design-references/toptan16ayakkabidunyasi-com-1d902824/product/product-top.jpg` and `product-buybox.jpg`
- Interaction model: click-driven thumbnail selection + click-driven wishlist heart

## Structure
- Main image: large square-ish container (~536x536 in screenshot at 1568 viewport, roughly 45% of content width), `next/image`, `object-fit: contain` or `cover` (images already have their own studio background so `cover` is fine), rounded corners ~8px
  - Wishlist heart button: absolute top-left over the image, ~16px inset, white circle bg ~40px, border `1px solid rgba(18,18,18,0.15)`, lucide `Heart` icon, toggles filled/outline on click (local state)
- Thumbnail strip below the main image: horizontal row of small square thumbnails (~72x72), gap ~8px, each `next/image`, rounded ~6px, `cursor-pointer`; active thumbnail has a `2px solid #121212` border (or `#FF8300` accent — use `#121212` to match "36" size-pill active pattern), inactive thumbnails have `1px solid rgba(18,18,18,0.15)`
- Clicking a thumbnail sets it as the main image (client component, `useState` for active index)

## Props
```ts
interface ProductGalleryProps {
  images: ProductImage[]; // from "@/types/toptan16", product.images
  title: string;
}
```

## Responsive
- Desktop (1440px): gallery occupies left ~45% column of the product page's 2-col layout
- Mobile (390px): full width, main image full-bleed within content padding, thumbnail strip scrolls horizontally if it overflows (`overflow-x-auto`)

Client component (`"use client"`) for thumbnail switching + wishlist toggle.
