# ProductReviews Specification

## Overview
- Target file: `src/components/sites/toptan16ayakkabidunyasi-com-1d902824/product/ProductReviews.tsx`
- Screenshot: `docs/design-references/toptan16ayakkabidunyasi-com-1d902824/product/product-reviews.jpg` and `product-reviews-tabs.jpg`
- Interaction model: click-driven tabs + click-driven sort dropdown (cosmetic only, no real sort needed) + static review cards

## Structure
1. Tab row: "Ürün değerlendirmeleri (0)" / "Mağaza değerlendirmeleri (2)" — underline-style tabs, active tab has `2px solid #121212` bottom border + bold text, inactive is `rgba(18,18,18,0.5)`. Sort `<select>` on the right, small, native styling ok, options like "En yeni".
2. Empty-state (for the active "Ürün değerlendirmeleri" tab, since this product has 0 direct reviews): centered text "İlk değerlendirmeyi yapan siz olun" + a teal/green filled button "Değerlendirme yazın" (bg `#0F9D8C`-ish teal, white text, rounded ~6px, padding ~10px 20px). This is decorative/non-functional (no real form needed — button can be inert or just visually present).
3. "Diğer Ürünler İçin Değerlendirmeler (N)" heading (bold, ~20px) — a static list of review cards pulled from OTHER products in the store (store-wide reviews), each card:
   - Star row: 5 filled stars, teal/green color (`#0F9D8C`-ish, NOT gold — this section's stars are teal, different from the homepage testimonial gold stars), ~18px each
   - Reviewer name (bold) + "Doğrulanmış" pill badge (light green bg, dark green text, small rounded pill, ~11px) inline
   - Date below (gray, ~13px, format like "07/31/2026")
   - Optional emoji line (e.g. "👍🙌") if present
   - Review text (Poppins ~15px, `#121212`)
   - Small attribution box below (light green-gray bg `#EBF3F0`, rounded ~8px, padding ~12px, flex row): small product thumbnail (~48px square) + text "Değerlendirme for" + bold underlined product name link
   - Divider line between cards (`1px solid rgba(18,18,18,0.1)`, margin ~24px vertical)

## Sample content (use as static mock data array, 3 entries is enough — do not fabricate more)
1. Sezai Yılmaz, Doğrulanmış, 07/31/2026, "👍🙌" (no text body), reviewed "AIRMAX TN Beyaz Mavi"
2. Sezai Yılmaz, Doğrulanmış, 07/31/2026, "İlgilerinden dolayı teşekkür ederim görseldeki ürünün aynısı geldi", reviewed "AIRMAX TN Beyaz Siyah"
3. Anonim, Doğrulanmış, 07/24/2026, "Güzel çok beğendim", reviewed "Airforce Premium Full Beyaz"

## Props
```ts
interface ProductReviewsProps {
  productTitle: string; // used only for the empty-state count/context, not required to be dynamic
}
```
Reviews list can be hardcoded inside the component (static mock data matching the sample above) — this section is store-wide social proof, not per-product data we have from the JSON API.

## Responsive
- Desktop (1440px): max content width ~900px centered, as in screenshot
- Mobile (390px): full width, tabs may need smaller font (~14px), attribution box thumbnail shrinks to ~36px
