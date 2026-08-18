# CollectionToolbar Specification

## Overview
- Target file: `src/components/sites/toptan16ayakkabidunyasi-com-1d902824/collection/CollectionToolbar.tsx`
- Screenshot: `docs/design-references/toptan16ayakkabidunyasi-com-1d902824/collection/nike-collection-grid.jpg` (top bar above the grid)
- Interaction model: click-driven dropdowns (cosmetic; no real filtering logic required), the sort `<select>` may actually re-sort the product array client-side (nice-to-have)

## Structure
Single row, flex, `justify-between items-center`, padding ~16px vertical, border-bottom `1px solid rgba(18,18,18,0.1)`, font Poppins ~15px, color `#121212`.

- Left group, gap ~16px: "Filtre:" label (semibold) then two dropdown-trigger buttons: "Stok durumu" and "Fiyat" (each with a small chevron-down icon, `rounded-full` border `1px solid rgba(18,18,18,0.2)`, padding ~8px 16px) — clicking toggles a simple absolute dropdown panel below (can be a placeholder checkbox list or just visually present with no real filtering wired up; keep functional enough that it opens/closes).
- Right group, gap ~16px: "Sıralama ölçütü:" label + a native `<select>` (styled minimally, bordered, rounded) with options: Öne çıkan, En alakalı, En çok satan, Alfabetik olarak A-Z, Alfabetik olarak Z-A, Fiyat düşükten yükseğe, Fiyat yüksekten düşüğe, Tarih eskiden yeniye, Tarih yeniden eskiye. Then plain text "{count} ürün" (not interactive).

## Props
```ts
interface CollectionToolbarProps {
  productCount: number;
  sortValue: string;
  onSortChange: (value: string) => void;
}
```
Client component (`"use client"`) since it has dropdown open/close state and calls back to the parent for sorting.

## Responsive
- Desktop (1440px): single row as described
- Mobile (390px): stack into two rows (filter group row, then sort+count row) or allow horizontal scroll — stacking is simpler and fine
