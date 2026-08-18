# FeaturesSection Specification (ticker + trust grid)

## Overview
- Target file: `src/components/sites/toptan16ayakkabidunyasi-com-1d902824/home/FeaturesSection.tsx`
- Screenshot: bottom portion visible in `docs/design-references/toptan16ayakkabidunyasi-com-1d902824/home/footer.jpg` (the "Hızlı Gönderim / Güvenli Ödeme / Kolay İade & Değişim / %100 Güvenli Alışveriş" row above the black footer)
- Interaction model: time-driven marquee (ticker) + static grid

## Part A — ticker
Same visual treatment as the header shipping ticker: black bg (`#121212`), white text, horizontal infinite marquee (reuse the `.marquee-track` keyframe utility from globals.css), repeating text "1 Alana 1 Bedava" separated by gaps, ~14px font, ~10px vertical padding. (This can literally reuse the same small `<Ticker items={[...]} />` pattern as the header — feel free to export a tiny shared `Ticker` helper if convenient, or just duplicate the markup inline; keep it simple.)

## Part B — features grid
White background, padding ~48px vertical. 4-column grid (desktop), gap ~32px, each item centered text:
- Icon (lucide, ~28px, `#121212`, centered) above title above description
- Title: font Archivo/semibold, ~18px, `#121212`, margin-top ~12px
- Description: Poppins, ~14px, `rgba(18,18,18,0.6)`, line-height 1.5, margin-top ~8px, max-width ~220px centered

Content (exact, 4 items, in order):
1. Icon `Zap` — "Hızlı Gönderim" — "Siparişleriniz en kısa sürede özenle paketlenerek kargoya teslim edilir."
2. Icon `Shield` — "Güvenli Ödeme" — "256-bit SSL sertifikalı güvenli altyapımız üzerinden gönül rahatlığıyla ödeme yapabilirsiniz."
3. Icon `CheckCircle` — "Kolay İade & Değişim" — "Memnun kalmadığınız ürünleri kolayca iade edebilir veya değişim talebinde bulunabilirsiniz."
4. Icon `Calendar` — "%100 Güvenli Alışveriş" — "Tüm ürünlerimiz orijinaldir ve kalite kontrol testlerinden geçerek size ulaşır."

## Responsive
- Desktop (1440px): 4 columns
- Tablet (768px): 2 columns, 2 rows
- Mobile (390px): 1 column, stacked, ~32px gap between items
