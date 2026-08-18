# Design Tokens — toptan16ayakkabidunyasi.com

## Fonts
- Body / UI text: **Poppins** (400), fallback sans-serif. Base body: 16px / line-height 28.8px (1.8) / letter-spacing 0.06em (0.96px) / color rgba(18,18,18,0.9)
- Headings: **Archivo** (400). H1/H2 ~39px desktop, letter-spacing 0.02em

## Colors
| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#FFFFFF` | page background |
| `--color-fg` | `#121212` (rgb(18,18,18)) | primary text, near-black |
| `--color-fg-muted` | `rgba(18,18,18,0.7)` | secondary text |
| `--color-fg-faint` | `rgba(18,18,18,0.55)` | tertiary/caption text |
| `--color-border` | `rgba(18,18,18,0.2)` | card borders (1.6px solid) |
| `--color-accent` | `#FF8300` (rgb(255,131,0)) | CTA buttons, badges, links, prices highlight |
| `--color-dark-surface` | `#121212` | ticker bar, footer background |
| `--color-surface-muted` | `#EFF2F6` | light gray section backgrounds |
| `--color-success` | `#35CC3A` | success/available indicators |
| `--color-star` | `#FFD700` | rating stars (gold, home testimonials) |
| `--color-star-alt` | `#0F9D8C`-ish teal/green | rating stars (product review widget — verify visually, looked teal-green) |
| `--color-gray-text` | `#666666` | disclaimer/fine print text |

## Spacing / Radius / Shadow
- Card border-radius: `8px`
- Card border: `1.6px solid rgba(18,18,18,0.2)`
- Product grid gap: `40px` (desktop, 3-col); collection grid is 4-col desktop
- Section vertical rhythm: ~64–80px between major homepage sections
- Buttons: pill/rounded, `border-radius: 999px` (fully rounded) for "Hızlı Satın Al" / "Ayakkabı Numarası" size pills; primary CTA "SEPETE EKLE" is a large rounded-rect black button; "HEMEN SATIN ALIN" is an orange-outlined rounded-rect button

## Layout
- Desktop container width: ~1520–1568px effective viewport, content appears full-bleed with internal padding
- Announcement bar (orange, `#FF8300` bg, white text) → shipping ticker (black bg, marquee, white text) → header (white, sticky) → page content → features ticker (black bg marquee) → features grid (4 cols, icon + title + desc) → footer (near-black `#121212` bg, white text, 3 columns)
- Header: logo centered, search icon far left, wishlist/account/cart icons far right, nav row below logo (centered links)
- Collection grid: 4 columns desktop, likely 2 columns tablet, 1-2 columns mobile
- Product page: 2-column (gallery left ~45%, info right ~55%) desktop; sticky bottom mini add-to-cart bar always visible

## Component identity (Shopify Dawn-theme based, customized)
- Theme is a customized Shopify **Dawn** theme. Classes observed: `card-wrapper product-card-wrapper`, `card`, `card__heading`, `price`, `price__regular`, `price__sale`, `grid product-grid grid--3-col-desktop` / `grid--4-col-desktop`, `cart-drawer-item`, `cart-item__media`, `badge`.
- Third-party apps layered on top: a wishlist app (`Vtl-WishlistIcon`, `Vtl-WishlistButton`), a reviews app (star ratings + "Doğrulanmış" verified badge + avatar-initial circles), a floating WhatsApp chat bubble (bottom-right), an "iCart" cart-drawer app, a hidden `global-music-player` element (likely inactive/unused).
