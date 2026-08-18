# StyleShowcase Specification (comparison slider + testimonials)

## Overview
- Target file: `src/components/sites/toptan16ayakkabidunyasi-com-1d902824/home/StyleShowcase.tsx`
- No direct screenshot captured for this exact section; rely on this written description (verified via DOM/text extraction).
- Interaction model: comparison slider is **drag-driven** (mouse/touch drag moves a vertical divider revealing before/after); testimonials are static

## Part A — "Tarzını Yansıt Her Adımda Fark Oluştur!" block
Two-column layout (desktop): left = text, right = before/after comparison slider.
- Left column: heading "Tarzını Yansıt Her Adımda Fark Oluştur!" (font Archivo, ~39px, `#121212`, line-height tight), subtext below "Spor, terlik, topuklu, babet yüzlerce ürün seni bekliyor." (Poppins, ~16px, `rgba(18,18,18,0.7)`, margin-top ~16px)
- Right column: before/after image comparison slider component:
  - "Before" image: `/sites/toptan16ayakkabidunyasi-com-1d902824/shared/global/comparison-1.webp` (plain silver glitter heel on white bg)
  - "After" image: `/sites/toptan16ayakkabidunyasi-com-1d902824/shared/global/comparison-2.webp` (gold glitter heel on white bg)
  - Both images stacked in the same box (aspect-square-ish, ~460x460), "After" image clipped via `clip-path: inset(0 0 0 X%)` where X is the slider position (state, default 50%), revealing "Before" underneath on the left portion
  - Small label pills: "Before" top-left (dark bg, white text, ~12px, rounded), "After" top-right (dark bg, white text, ~12px, rounded)
  - Circular drag handle at the divider line (white circle ~40px, subtle shadow, centered vertically, with a small icon or just a plain circle), a thin white vertical line spans the full height at the divider
  - Client component: `useState` for slider percentage (0-100), pointer/mouse drag handlers (`onMouseDown`/`onMouseMove`/`onMouseUp` on a wrapping div, plus touch equivalents) to update percentage based on horizontal drag position relative to container width. Default 50%.

## Part B — "Müşteri Memnuniyeti" testimonials
- Heading centered: "Müşteri Memnuniyeti" (font Archivo, ~32px, `#121212`, margin-bottom ~32px)
- 3-column grid (desktop), gap ~24px, each card:
  - Light gray bg (`#EFF2F6` or `rgba(18,18,18,0.03)`), rounded corners ~12px, padding ~24px
  - Top row: 5 gold stars (`#FFD700`, lucide `Star` filled, ~16px each, inline row) on the left, and a small orange circular quote-icon badge on the right (bg `#FF8300`, white quote mark, ~32px circle)
  - Quote text below (Poppins, ~15px, `#121212`, line-height 1.6)
  - Name below quote (Poppins, ~14px, `rgba(18,18,18,0.6)`, margin-top ~12px)
- Content (exact, 3 cards):
  1. "İkinci siparişimi verdim, gönül rahatlığıyla öneririm." — Ayşe K.
  2. "Kargolama çok hızlıydı. Günlük kullanımda inanılmaz rahat." — Elif T.
  3. "Fotoğraftakinden daha güzel geldi. Kombinlemesi çok kolay." — Buse Ç.

## Responsive
- Desktop (1440px): Part A is 2-col grid (text ~40%, slider ~60%); Part B is 3-col grid
- Mobile (390px): Part A stacks (text above, slider below, full width); Part B stacks to 1 column, cards full width

## Section spacing
Both parts stacked vertically with ~80px gap between them and ~80px section padding top/bottom overall.
