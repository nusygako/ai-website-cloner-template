# Page Topology — toptan16ayakkabidunyasi.com

Site-key: `toptan16ayakkabidunyasi-com-1d902824`
Platform: Shopify (customized Dawn theme) + apps (wishlist, reviews, iCart cart drawer, WhatsApp widget)

## Global (every page)
1. Announcement bar — orange `#FF8300` bg, white bold text, single line: "🔥 1 Alana 1 Bedava Fırsatı Başladı!"
2. Shipping ticker — black bg marquee (horizontal auto-scroll, infinite loop), repeats: "🚚 TÜM TÜRKİYE'YE ŞEFFAF KARGO", "2500₺ ÜSTÜ ÜCRETSİZ KARGO"
3. Header — sticky, white bg. Row 1: search icon (left) / logo "TopTan16 Ayakkabı Dünyası" (center) / wishlist heart, account, cart-bag-with-count icons (right). Row 2: nav links centered — Erkek Spor Ayakkabı, Kadın Spor Ayakkabı, Adidas▾ (Adizero/Samba/Spezial/Süperstar), Nike▾ (530/Airforce Premium/Airmax TN/Dunk/Monarch/Zoomx), Vans, Terlik, Topuklu Ayakkabı, Tüm Ayakkabılar
4. Cart drawer — slide-in panel (hidden by default), triggered by cart icon click
5. Footer — near-black `#121212` bg, white text, 3 columns: KURUMSAL (legal links), address/contact block, Kategorilerimiz (category links); copyright bar at very bottom
6. Floating WhatsApp chat bubble — fixed bottom-right, green circle
7. Scroll-to-top button — fixed, appears after scroll (hidden height=0 initially)

## Home page (`/`)
1. Hero slideshow — 2 slides, full-bleed image + "YENİ SEZON / 1 ALANA 1 BEDAVA!" text overlay + "ALIŞVERİŞE BAŞLA →" outlined button + dot pagination + prev/next arrows + play/pause control. INTERACTION: auto-advancing carousel (time-driven) + manual arrows/dots (click-driven).
2. "En Çok Satanlar" (best sellers) — heading + 3-col product grid (ProductCard) + "Tümünü görüntüle" link
3. "Popüler Ürünler" (popular products) — heading + 3-col product grid (ProductCard) + "Tümünü görüntüle" link
4. "Tarzını Yansıt Her Adımda Fark Oluştur!" block — heading + subtext + before/after image comparison slider (drag handle divider, "Before"/"After" labels)
5. "Müşteri Memnuniyeti" testimonials — heading + 3 cards (gold 5-star rating, orange quote-icon badge, quote text, name)
6. Features ticker — black bg marquee: "Hızlı Gönderim · Güvenli Ödeme · %100 Güvenli Alışveriş"
7. Features grid — 4 cols, icon (lightning/shield/check/calendar) + title + description: Hızlı Gönderim, Güvenli Ödeme, Kolay İade & Değişim, %100 Güvenli Alışveriş

## Collection page (`/collections/[handle]`)
- Same header/footer chrome
- Filter bar: "Filtre: Stok durumu▾  Fiyat▾" (left) — "Sıralama ölçütü: [select]" + "N ürün" count (right)
- Product grid: 4 cols desktop, ProductCard repeated (with wishlist heart top-left overlay, badge, title, price, rating stars if reviewed)
- Pagination at bottom (numbered pages)
- 24 collections total; only 16 appear in the nav (see COLLECTIONS list in data file); all 24 must be routable

## Product detail page (`/products/[handle]`)
1. Breadcrumb-less; two-column layout: media gallery (main image + thumbnail strip, left, wishlist heart overlay) / info panel (right)
2. Info panel: title, price row (current + strikethrough compare-at + "1 Alana 1 Bedava" badge), "Renk Seçenekleri" swatches (image thumbnails = other color variants of related product, click-driven), social-proof box ("N kişi bu ürünü inceliyor!", "N kişi sepetine ekledi" — blue tinted box, likely a fake-urgency app with periodically-changing numbers — TIME-driven), disclaimer line "Ürünlerimiz yüksek kaliteli replikadır.", "Ayakkabı Numarası" size pill-selector (36–44, click-driven, single-select), "SEPETE EKLE" (black, full-width) + "HEMEN SATIN ALIN" (orange outline, full-width) buttons, trust-badge row (Kapıda Ödeme / Kolay İade / Hızlı Kargo icons+labels)
3. Sticky bottom bar (appears once scrolled past main CTA) — mini thumbnail + title + price + size select + "SEPETE EKLE" button, fixed to viewport bottom
4. Reviews section — tabs "Ürün değerlendirmeleri (N)" / "Mağazadeğerlendirmeleri (N)", sort dropdown, review cards (star rating in teal/green, avatar-initial circle, name, "Doğrulanmış" pill, date, text, optional "Değerlendirme for [product]" attribution box with thumbnail)
5. (Related/you-may-also-like products grid — not fully confirmed further down; treat as optional/lower priority)

## Cart (`/cart` + drawer)
- Drawer: slide-in from right, list of `cart-drawer-item`s (image, title, variant/size, qty stepper, remove button), subtotal, checkout button
- Full `/cart` page: same line-item structure in page layout + order note + subtotal + checkout CTA

## Other routes
- `/search` — search results page (search icon in header opens an overlay/predictive search; confirm structure during build)
- `/account`, login — Shopify customer_authentication redirect (external OAuth-style flow); build a simple mock login/account placeholder page since real Shopify auth can't be replicated
- `/apps/page/wishlist` — wishlist app page (list of hearted products)
- 404 page — "404 / Sayfa bulunamadı" + "Alışverişe devam et" black button (captured)
- Footer legal pages (Teslimat Koşulları, Üyelik Sözleşmesi, Satış Sözleşmesi, KVKK, Garanti ve İade Koşulları, Gizlilik ve Güvenlik, ETK) — simple text/policy pages, lower priority static content
