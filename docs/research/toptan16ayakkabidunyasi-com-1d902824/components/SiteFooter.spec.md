# SiteFooter Specification

## Overview
- Target file: `src/components/sites/toptan16ayakkabidunyasi-com-1d902824/shared/SiteFooter.tsx`
- Screenshot: `docs/design-references/toptan16ayakkabidunyasi-com-1d902824/home/footer.jpg`
- Interaction model: static + hover underline on links

## Structure
Background `#121212`, text white/light-gray, padding ~64px top, ~24px bottom. 3-column grid (desktop), gap ~48px, max-width container centered, font Poppins.

### Column 1 — "KURUMSAL" (heading: font Archivo, ~20px, white, bold-ish, margin-bottom ~20px)
List of links (each own line, ~15px, color `rgba(255,255,255,0.85)`, hover underline/white), all href="#" placeholders except where noted:
- Teslimat Koşulları
- Üyelik Sözleşmesi
- Satış Sözleşmesi
- KVKK
- Garanti ve İade Koşulları
- Gizlilik ve Güvenlik
- ETK

### Column 2 — "Toptan 16 Ayakkabı Dünyası" (heading same style)
Plain text blocks (not links), ~15px, `rgba(255,255,255,0.85)`, line-height 1.6:
- "Adres" (bold label) then "Emek Adnan Menderes mahallaesi Turgut Özal caddesi no: 64/A Osmangazi Bursa"
- blank spacing
- "Telefon" (bold label) then "0544 166 00 40"
- blank spacing
- "E-posta" (bold label) then "info@toptan16ayakkabidunyasi.com"

### Column 3 — "Kategorilerimiz" (heading same style)
Links, same style as column 1:
- Erkek Spor Ayakkabı → `/collections/erkek-spor-ayakkabi`
- Kadın Spor Ayakkabı → `/collections/kadin-spor-ayakkabi`
- Adidas → `/collections/adidas-ayakkabi`
- Nike → `/collections/nike`
- Vans → `/collections/vans`
- Terlik → `/collections/terlik`
- Topuklu Ayakkabı → `/collections/topuklu-ayakkabi`
- Tüm Ayakkabılar → `/collections/tum-ayakkabilar`

### Bottom bar
Full-width border-top `1px solid rgba(255,255,255,0.1)`, padding ~24px vertical, centered text, ~13px, `rgba(255,255,255,0.6)`: "© 2026, Toptan 16 Ayakkabı Dünyası"

## Responsive
- Desktop (1440px): 3 columns side by side as described
- Tablet (768px): 2 columns, contact info column wraps to full width or stacks
- Mobile (390px): single column, stacked, each section full width with ~32px gap between sections

## Notes
Static server component (no client interactivity needed beyond native `<a>` hover via CSS).
