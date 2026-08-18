# SiteHeader Specification

## Overview
- Target file: `src/components/sites/toptan16ayakkabidunyasi-com-1d902824/shared/SiteHeader.tsx`
- Screenshot: `docs/design-references/toptan16ayakkabidunyasi-com-1d902824/home/hero-header.jpg`
- Interaction model: static layout + click-driven mobile menu/search overlay + time-driven marquee

## Structure (top to bottom, full width, sticky)
1. **Announcement bar**: single line, background `#FF8300`, text white, bold, centered, padding ~12px vertical. Text: "🔥 1 Alana 1 Bedava Fırsatı Başladı!"
2. **Shipping ticker**: background `#121212` (near-black), white text, horizontal infinite marquee (CSS animation, ~22s linear loop, `.marquee-track` utility already defined in globals.css — duplicate the content div so it tiles seamlessly). Repeating items separated by generous gap: "🚚 TÜM TÜRKİYE'YE ŞEFFAF KARGO" and "2500₺ ÜSTÜ ÜCRETSİZ KARGO". Padding ~10px vertical, font-size ~14px.
3. **Header row** (white bg, padding ~24px vertical):
   - Left: search icon button (lucide `Search`, ~20px)
   - Center: logo image `/sites/toptan16ayakkabidunyasi-com-1d902824/shared/global/logo.webp` (site name "TopTan16 Ayakkabı Dünyası"), height ~90px, use next/image
   - Right: 3 icon buttons in a row with ~24px gap: wishlist (lucide `Heart`), account (lucide `User`), cart (lucide `ShoppingBag`) with a small circular badge (black bg, white text, cart item count) overlapping the top-right of the cart icon
4. **Nav row** (white bg, centered, padding ~12px vertical, border-top 1px solid rgba(18,18,18,0.1)): font Poppins 18px, color `#121212`, gap ~32px between items. Items left to right:
   - "Erkek Spor Ayakkabı" → `/collections/erkek-spor-ayakkabi`
   - "Kadın Spor Ayakkabı" → `/collections/kadin-spor-ayakkabi`
   - "Adidas" (dropdown chevron) → hover/click reveals dropdown: Adizero (`/collections/adizero`), Samba (`/collections/samba`), Spezial (`/collections/spezial`), Süperstar (`/collections/superstar`)
   - "Nike" (dropdown chevron) → dropdown: 530 (`/collections/530`), Airforce Premium (`/collections/airforce-premium`), Airmax TN (`/collections/airmax-tn`), Dunk (`/collections/dunk`), Monarch (`/collections/monarch`), Zoomx (`/collections/zoomx`)
   - "Vans" → `/collections/vans`
   - "Terlik" → `/collections/terlik`
   - "Topuklu Ayakkabı" → `/collections/topuklu-ayakkabi`
   - "Tüm Ayakkabılar" → `/collections/tum-ayakkabilar`
   - Dropdowns: simple absolute-positioned panel below the trigger, white bg, subtle shadow, appears on hover (desktop) with a short opacity/translate-y transition (150ms ease)

## Behaviors
- Header is `position: sticky; top: 0; z-index: 50` (announcement bar + ticker scroll away normally, only the header row + nav stay pinned — OR keep entire stack sticky if simpler; prioritize header row+nav staying visible on scroll since that's the common Dawn-theme pattern). Use your judgement for a clean sticky header, add `bg-white shadow-sm` once scrolled (scroll listener, threshold 10px).
- Search icon click: toggle a simple full-width overlay/input below the header (client component with `useState`) — no need for live search results, just a working input UI.
- Mobile (< 768px): hide nav row, show a hamburger menu (lucide `Menu`) left of logo that opens a slide-in/dropdown panel listing all nav links stacked vertically. Logo stays centered, cart/account/wishlist icons stay right (wishlist/account may collapse to just cart+menu on very small screens — use judgement).

## Assets
- Logo: `/sites/toptan16ayakkabidunyasi-com-1d902824/shared/global/logo.webp`
- Icons: lucide-react — `Search`, `Heart`, `User`, `ShoppingBag`, `Menu`, `X`, `ChevronDown`

## Responsive
- Desktop (1440px): full layout as described, nav gap 32px
- Tablet (768px): nav items may wrap or reduce gap to 16px; keep layout otherwise
- Mobile (390px): hamburger menu replaces nav row; header row padding reduces to ~16px; logo height ~64px

## Props
```ts
interface SiteHeaderProps {
  cartCount?: number; // default 0
}
```
Component must be a client component (`"use client"`) since it has interactive state (mobile menu, search toggle, scroll listener, marquee).
