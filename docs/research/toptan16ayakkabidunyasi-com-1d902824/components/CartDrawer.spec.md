# CartDrawer Specification

## Overview
- Target file: `src/components/sites/toptan16ayakkabidunyasi-com-1d902824/shared/CartDrawer.tsx`
- No direct screenshot captured; based on standard Shopify Dawn-theme cart-drawer DOM structure observed (`cart-drawer-item`, `cart-item__media`, `cart-item__image`, `cart-drawer-item__right`, `cart-item__details`, `cart-remove-button`) plus the site's established visual language (Poppins/Archivo fonts, `#121212`/`#FF8300` palette, `8px` radius, `1.6px` borders).
- Interaction model: click-driven open/close, click-driven quantity stepper, click-driven remove

## Structure
- Slide-in panel from the right, `position: fixed; top:0; right:0; height:100dvh; width: min(420px, 100vw); z-index: 100`, white bg, box-shadow on the left edge, `transform: translateX(100%)` when closed → `translateX(0)` when open, `transition: transform 300ms ease`
- Backdrop: `fixed inset-0 bg-black/40`, fades in/out with the drawer, clicking it closes the drawer
- Header row: "Sepetiniz" (font Archivo ~20px) + close button (lucide `X`) top-right, padding ~20px, border-bottom `1px solid rgba(18,18,18,0.1)`
- Empty state (when no items): centered, icon (lucide `ShoppingBag` large, muted), text "Sepetiniz boş", a black "Alışverişe devam et" button that closes the drawer
- Item list (scrollable, `flex-1 overflow-y-auto`, padding ~16px, gap ~16px between items):
  - Each item row: flex, thumbnail image (~80x80, rounded ~8px, border `1px solid rgba(18,18,18,0.1)`) + right column (title ~15px bold, size/variant text ~13px gray, price ~14px, quantity stepper row: `-` button / count / `+` button in a bordered rounded-full pill, remove button (lucide `Trash2` or `X`, small, gray, top-right of the row))
- Footer (sticky bottom, border-top `1px solid rgba(18,18,18,0.1)`, padding ~20px): subtotal row ("Ara Toplam" label + bold price), then full-width black "Sepete Git" / "Ödemeye Geç" button (`rounded-full`, padding ~16px)

## Props
```ts
interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  items: CartLine[]; // define a small local CartLine type: { id, title, image, size, price, quantity }
}
```
Keep cart state management simple: this component only needs local `useState` for quantity changes within the mock items array it's given (no real persistence/checkout required — "Ödemeye Geç" can be a no-op or link to `/cart`). Client component (`"use client"`).

## Responsive
- Desktop: fixed 420px width panel as described
- Mobile (390px): panel width `100vw` (full screen takeover), everything else the same
