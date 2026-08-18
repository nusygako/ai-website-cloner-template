# HeroSlideshow Specification

## Overview
- Target file: `src/components/sites/toptan16ayakkabidunyasi-com-1d902824/home/HeroSlideshow.tsx`
- Screenshot: `docs/design-references/toptan16ayakkabidunyasi-com-1d902824/home/hero-header.jpg`
- Interaction model: time-driven auto-advance carousel + click-driven dots/arrows

## IMPORTANT — images already contain all text/graphics baked in
These are pre-designed marketing banner images (text, headline, and "ALIŞVERİŞE BAŞLA →" button graphic are ALL part of the image pixels, not separate HTML overlays). Do NOT render any text or button on top of them — just display the full-bleed images and make the whole slide clickable.

## Content (2 slides)
- Slide 1 image: `/sites/toptan16ayakkabidunyasi-com-1d902824/shared/global/hero-1.webp` (aspect ~1400x933 — Nike Air Force + adidas Spezial + heeled sandal on beige pedestals, "1 ALANA 1 BEDAVA!" text baked in, centered composition)
- Slide 2 image: `/sites/toptan16ayakkabidunyasi-com-1d902824/shared/global/hero-3.webp` (aspect ~1400x933 — similar shoes, left-aligned text card overlay style, "En iyi modellerde sınırlı süreli teklif." subtitle, baked in)
- Both slides: wrap the full image in a `<Link href="/collections/tum-ayakkabilar">` so clicking anywhere (including the baked-in button graphic) navigates to the shop.

## Layout
Full-bleed section, `next/image` with `fill` + `object-fit: cover`, container `position: relative`, `min-height` ~500px desktop / ~280px mobile (matches image aspect ratio ~3:2). No text/scrim overlay needed since it's baked into the image.

## Behavior
- Client component (`"use client"`). `useState` for current slide index (0 or 1) + `useEffect` with `setInterval` (~5000ms) auto-advancing, `clearInterval` on unmount.
- Slide transition: crossfade (`opacity` transition, 500ms ease) — render both slides `absolute inset-0`, only current one `opacity-100 z-10`, other `opacity-0`.
- Below the image: dot pagination (2 small circles, active = filled `#121212`, inactive = outline `rgba(18,18,18,0.3)`), positioned centered, ~16px below image (or overlaid near bottom of image with a subtle white pill background — use your judgement, centered row is safe). Clicking a dot jumps to that slide and resets the timer.
- Optional prev/next chevron arrows (lucide `ChevronLeft`/`ChevronRight`) vertically centered on left/right edges, semi-transparent white circle buttons, appear on container hover (desktop) — nice-to-have, keep simple.

## Responsive
- Desktop (1440px): container max-width full-bleed within the page's content width (not edge-to-edge browser, matches header width), aspect ratio preserved via `aspect-[3/2]` or explicit min-height
- Mobile (390px): same aspect ratio, images are already responsive via `next/image fill`
