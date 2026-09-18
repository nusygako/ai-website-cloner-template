## ARAŞTIRMA DURUMU (en son Tur 18 — 2026-09-18)

**Durum:** Bu gece boyunca 18 tur (Tur 1–18) araştırma yapıldı. Tur 12, saat 12:00 UTC / 15:00
Türkiye kesme noktasına ulaşıldığı için sadece özet eklemişti; Tur 13, 14, 15, 16, 17 ve 18 farklı
oturumlarda (altısı da kesme noktasından önce, sırasıyla 03:04, 04:04, 05:06, 06:10, 07:05 ve
08:05 UTC'de) başladı ve normal araştırmaya devam etti. **Tur 14'te metodoloji notu (Tur 15 ve
16'da da doğrulandı, Tur 17'de DÜZELTİLDİ, Tur 18'de tekrar teyit edildi):** önceki turlar bu
oturumun GitHub erişiminin tek repoya (`nusygako/ai-website-cloner-template`) kilitli olduğunu ve
bunun `WebSearch`/`WebFetch`'i de etkilediğini varsaymıştı — **Tur 17'de netleşti ki bu kısıtlama
sadece `mcp__github__*` MCP araçları için geçerli** (bu oturumun GitHub entegrasyonu tek repoya
scope'lu); genel `WebFetch` (github.com dahil) ve `WebSearch` araçları kısıtlanmamış durumda.
**Tur 18'de ek netlik:** ticari sağlayıcı domainleri (`openrouter.ai`, `jina.ai`) bu turda da
`WebFetch` ile denendi ve yine `EGRESS_BLOCKED` hatasıyla engellendi — bu, Tur 1/7-11/13-17'deki
"ticari domain kısıtlaması genel bir proxy politikası, GitHub'a özgü değil" tespitini bir kez daha
doğruluyor; sadece GitHub (ve bazı belgeleme/blog siteleri) serbest. **Tur 16'da ek yöntem notu:**
bir sağlayıcının resmi domaini engellenmişse, docs'u GitHub'da açık kaynaklıysa
`raw.githubusercontent.com` üzerinden birincil kaynağa hâlâ ulaşılabiliyor (Cloudflare örneği,
aşağıya bak). **Tur 18'de git hijyeni notu (Tur 17'deki ile birebir aynı tekrarlayan sorun):**
oturum başında repo yine `master`'dan ayrı, bağlı olmayan bir "detached HEAD" durumundaydı;
`git fetch` sonrası `origin/master`'ın (3429aaa) HEAD ile birebir aynı commit'te olduğu doğrulandı
(çalışma kaybı YOK) — `git checkout -B master origin/master` ile branch normale döndürüldü. **Bu
düzenli tekrarlayan bir desen haline geldi (Tur 13, 17, 18) — muhtemel neden: bu görevi tetikleyen
otomasyon her oturumda repoyu belirli bir commit'e `checkout` ediyor, branch'e değil; gelecek
turlar bunu oturum başında rutin bir kontrol olarak görmeli, sürpriz değil.**

**Toplam:** 56 doğrulanmış kaynak kataloglandı (skill koleksiyonları, agent/subagent koleksiyonları,
MCP sunucuları, ücretsiz API sağlayıcıları) + 1 kritik güvenlik uyarısı + Tur 13'te tespit edilen
1 ek "manipülatif hook" uyarısı (aşağıya bak) + Tur 16'da eklenen 1 "artık mevcut değil" uyarısı
(GitHub Models, 30 Temmuz 2026'da kapatıldı) + onlarca "doğrulandı ama eklenmedi" madde (şişirilmiş
yıldız, geçersiz/tek-seferlik ya da anlamsız derecede küçük ücretsiz katman, ToS-bypass riski,
lisanssız font kazıma riski, meta-dizin/gerçek dosya içermeme vb. gerekçelerle elendi).

**En önemli 5 bulgu:**

1. **🚨 GÜVENLİK UYARISI — [OthmanAdi/planning-with-files](https://github.com/OthmanAdi/planning-with-files) KURMA.**
   Şişirilmiş yıldız (~27k yıldız / sadece 11 açık issue), 11+ ajan platformunda
   `UserPromptSubmit` olayında otomatik shell/PowerShell çalıştıran hook'lar kuruyor, aynı
   pazarlama metniyle birden fazla mirror/fork hesabı bulundu. Detay: Tur 6 bölümü.
2. **[vercel/next-devtools-mcp](https://github.com/vercel/next-devtools-mcp)** — Resmi Vercel MCP,
   bu şablonun tam kullandığı Next.js 16 sürümüyle birebir örtüşüyor; çalışan dev server'ın
   gerçek API'sini sorgulayarak `AGENTS.md`'deki "training data'dan farklı, breaking change'lere
   dikkat et" uyarısını doğrudan çözüyor. API key gerekmez. (Tur 8, #30)
3. **[shadcn-ui/ui resmi `shadcn mcp` + skill](https://github.com/shadcn-ui/ui)** — shadcn/ui artık
   MCP sunucusunu kendi CLI'sine gömmüş; `npx shadcn mcp init` ile tek komutla kurulum, bu
   şablonun UI kütüphanesiyle (shadcn/ui + Tailwind v4) birebir örtüşüyor. API key gerekmez.
   (Tur 11, #37 — Tur 3'teki üçüncü parti alternatifi tamamlıyor, değiştirmiyor)
4. **[anthropics/skills](https://github.com/anthropics/skills)** — Anthropic'in resmi Agent
   Skills referans deposu (~176k yıldız), doğrudan `~/.claude/skills/` altına kopyalanabilir
   gerçek `SKILL.md` dosyaları. (Tur 1, #1)
5. **[Manavarya09/design-extract](https://github.com/Manavarya09/design-extract)** — Tek komutla
   bir web sitesinin tüm design token sistemini (Tailwind v4 + shadcn/ui uyumlu) çıkarıyor;
   `docs/research/INSPECTION_GUIDE.md` Phase 1'in (Visual Audit → Design Tokens) otomasyonu.
   (Tur 8, #31)
6. **[anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)**
   — Anthropic'in RESMİ, küratörlü Claude Code plugin marketplace'i (~36.4k yıldız, Apache-2.0,
   400+ plugin: internal + vetted 3.parti). Tur 1-16'da dağınık şekilde aranan "hangi skill/agent
   koleksiyonu güvenilir" sorusuna Anthropic'in kendisinin verdiği resmi cevap niteliğinde — tek
   bir kaynaktan onlarca kategoride (database, security, monitoring, deployment) doğrulanmış
   plugin. (Tur 17, #52)
7. **[danielsogl/lighthouse-mcp-server](https://github.com/danielsogl/lighthouse-mcp-server)** —
   Google Lighthouse'u MCP üzerinden ajana açan araç (71 yıldız, MIT, 270+ commit); performans,
   erişilebilirlik (WCAG), SEO ve güvenlik denetimini API key gerektirmeden yapıyor. `AGENTS.md`'nin
   "UI değişikliklerinde dev server başlatıp tarayıcıda test et" ve "Beauty-first — her piksel
   önemli" ilkelerine somut, ölçülebilir bir doğrulama katmanı ekliyor. (Tur 18, #56)

**Ayrıca dikkat:** Tur 8'de ve sonrasında, GitHub'da "binlerce yıldız + tek haneli issue sayısı"
deseni gösteren çok sayıda şişirilmiş/şüpheli repo tespit edildi (`DietrichGebert/ponytail`,
`thedotmack/claude-mem`, `sickn33/agentic-awesome-skills`, `affaan-m/ECC` vb.) — bunların hiçbiri
kataloğa eklenmedi. Tüm turların tam detayı, kurulum adımları ve "eklenmedi" gerekçeleri aşağıda.

---

# Gece Araştırma Kataloğu — Claude Code'u Güçlendirecek Ücretsiz & Meşru Kaynaklar

Bu dosya, otomatik gece araştırma görevi tarafından derlenmiştir. Her kaynak GitHub üzerinden
(yıldız sayısı, lisans, dosya yapısı) veya resmi sağlayıcı sayfalarından doğrulanmıştır.
**Paylaşımlı/havuzlanmış API key kullanan araçlar, ToS bypass eden scraping araçları ve kanıtsız
trading araçları bilerek DIŞLANMIŞTIR.**

> Not: Bu oturumun ağ erişimi bazı ticari sağlayıcı sitelerine (ör. openrouter.ai, ai.google.dev,
> console.groq.com) doğrudan izin vermiyor (proxy politikası gereği engellendi). Bu sağlayıcılara
> ait bilgiler web araması sonuçlarından derlenmiştir; kaynak linkleri verilmiştir, kullanıcı
> kurulumdan önce resmi sayfada teyit etmelidir. GitHub repoları ise doğrudan fetch edilerek
> yıldız/lisans/dosya yapısı birebir doğrulanmıştır.

---

## Tur 1 — 2026-09-16

### A) Skill Koleksiyonları

#### 1. [anthropics/skills](https://github.com/anthropics/skills) — RESMİ
- **Yıldız:** ~176.6k · **Lisans:** Apache 2.0 (istisna: `skills/docx`, `skills/pdf`, `skills/pptx`,
  `skills/xlsx` kaynak-erişilebilir ama tam open-source değil, kullanmadan önce lisans metnini oku)
- **Güncellik:** Aktif, 55+ commit, açık PR'lar mevcut (aktif bakım)
- **Ne işe yarar:** Anthropic'in resmi Agent Skills referans deposu — creative/design, development,
  enterprise/communication ve document (docx/pdf/pptx/xlsx) kategorilerinde gerçek `SKILL.md`
  dosyaları içerir. Ayrıca `spec/` (Agent Skills standardı) ve `template/` (kendi skill'ini
  yazmak için şablon) klasörleri var.
- **Neden meşru:** Anthropic'in kendi resmi deposu — agentskills.io standardının referans
  implementasyonu, Claude Code/Claude.ai/Claude API'de birebir kullanılabilir.
- **Kurulum:** Repoyu klonla, istediğin skill klasörünü `~/.claude/skills/` altına kopyala
  (yerel dosya kopyalama, onay/kurulum script'i gerekmez). Document skill'leri (docx/pdf/pptx/xlsx)
  için lisans metnini oku.

#### 2. [obra/superpowers](https://github.com/obra/superpowers) — TOPLULUK
- **Yıldız:** ~287.4k · **Lisans:** MIT
- **Güncellik:** Aktif, 681 commit, 25.7k fork, 136 açık issue (yüksek topluluk etkileşimi)
- **Ne işe yarar:** Ajanlar için yapılandırılmış bir yazılım geliştirme metodolojisi — brainstorm →
  spec → plan → TDD → subagent-driven implementation → code review akışını zorunlu kılan 14+
  composable `SKILL.md` dosyası (`test-driven-development`, `systematic-debugging`,
  `brainstorming`, `writing-plans`, `requesting-code-review` vb.). Anthropic'in resmi plugin
  marketplace'inde de listeleniyor.
- **Neden meşru:** Jesse Vincent (@obra, Keyboardio kurucusu) tarafından geliştirilen, kod
  içeriği tamamen açık ve incelenebilir bir framework; gizli API çağrısı veya harici servis
  bağımlılığı yok.
- **Kurulum:** `npx skills add obra/superpowers` benzeri bir skill yükleyici veya doğrudan repo
  klonlayıp `~/.claude/skills/` altına kopyalama. İlgili `skills/writing-skills/SKILL.md`
  dosyası kendi skill'lerini yazmak isteyenler için rehber içeriyor. Yerel onay gerekmez.

### B) Agent / Subagent Koleksiyonları

#### 3. [VoltAgent/awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents)
- **Yıldız:** ~25.1k · **Lisans:** MIT
- **Güncellik:** 517 commit, aktif
- **Ne işe yarar:** 161+ uzman subagent, 10 kategoriye ayrılmış gerçek `.md` dosyaları:
  `categories/01-core-development/` (api-designer.md, backend-developer.md...),
  `02-language-specialists/` (31 dil uzmanı), `03-infrastructure/`, `04-quality-security/`,
  `05-data-ai/`, `06-developer-experience/`, `07-specialized-domains/`, `08-business-product/`,
  `09-meta-orchestration/`, `10-research-analysis/`. Ayrıca `tools/subagent-catalog/` var.
- **Neden meşru:** Gerçek, incelenebilir Markdown agent tanımları; harici servis veya API key
  gerektirmiyor, tamamen prompt/config dosyaları.
- **Kurulum:** İstediğin `.md` dosyalarını `~/.claude/agents/` altına kopyala (dosya kopyalama,
  yerel onay gerekmez). NOT: `afsarctg/`, `Shyboy0499/`, `Saad-web-spec/` gibi kullanıcı adlarıyla
  aynı isimde depolar da bulundu — bunlar VoltAgent orijinalinin fork'ları/klonları gibi görünüyor,
  orijinal kaynağı (VoltAgent) tercih et.

#### 4. [wshobson/agents](https://github.com/wshobson/agents)
- **Yıldız:** ~39.7k · **Lisans:** MIT
- **Güncellik:** 576 commit, aktif
- **Ne işe yarar:** "94 plugin, 202 agent, 183 skill, 105 command" içeren çok-harness'lı
  (Claude Code, Codex, Cursor, OpenCode, GitHub Copilot, Antigravity, Pi) plugin marketplace.
  Gerçek dosya yapısı: `plugins/<plugin>/{agents,commands,skills}/`, kataloglar için
  `docs/agents.md` ve `docs/agent-skills.md`.
  Agent'lar model karmaşıklığına göre Haiku/Sonnet/Opus arasında dağıtılmış.
- **Neden meşru:** Tek bir Markdown kaynağından çok-harness native dosyalar üretiliyor,
  kod tamamen açık, gizli servis çağrısı yok.
- **Kurulum:** `cd ~/.claude && git clone https://github.com/wshobson/agents.git` — subagent'lar
  otomatik olarak `~/.claude/agents/` altında kullanılabilir hale gelir. Yerel onay gerekmez,
  npm install gerekmiyor.

### C) Ücretsiz & Meşru API Sağlayıcıları

#### 5. [Groq API](https://console.groq.com/keys) (resmi, bireysel key)
- **Ücretsiz katman:** Kredi kartı gerektirmeyen, gerçek ücretsiz geliştirici katmanı.
  Genel limit: 30 istek/dk, 6.000 token/dk, 14.400 istek/gün (model bazında değişiyor —
  ör. Llama 3.1 8B Instant: 14.400 istek/gün, 500.000 token/gün).
- **Ne işe yarar:** Ultra hızlı LPU donanımında açık modelleri (Llama, GPT-OSS vb.) çalıştırır —
  Claude Code'un yanında ikincil/hızlı bir model sağlayıcısı olarak (ör. MCP tool içinde hızlı
  özetleme, draft üretimi) kullanılabilir.
- **Neden meşru:** Her kullanıcı kendi e-postasıyla kendi API key'ini alıyor (paylaşımlı key değil),
  limitler organizasyon bazında uygulanıyor, resmi console.groq.com üzerinden.
- **Kurulum:** console.groq.com/keys üzerinden ücretsiz kayıt + kendi API key'in — bu template'te
  kullanmak istersen key'i ortam değişkeni olarak ekleyip ilgili MCP/tool config'ine gir (yerel
  onay/gizli bilgi girişi gerektirir, otomatik yapılamaz).

#### 6. Google AI Studio / Gemini API ücretsiz katmanı (resmi)
- **Ücretsiz katman:** AI Studio'dan key oluşturduğunda otomatik ücretsiz katman açılıyor.
  2026 itibarıyla ücretsiz katman sadece Flash modelleri kapsıyor (Gemini 3 Flash, 3.1
  Flash-Lite, 2.5/2.0 Flash) — Pro modeller Mayıs 2026'dan beri ücretli. Google artık standart
  limit rakamlarını yayınlamıyor, limitler proje bazında AI Studio konsolunda görünüyor.
- **Ne işe yarar:** Alternatif/yedek LLM erişimi, özellikle doküman/uzun bağlam işleri için.
- **Neden meşru:** Resmi Google ürünü, bireysel Google hesabıyla kendi key'ini alıyorsun.
- **Kurulum:** aistudio.google.com üzerinden ücretsiz key al, kendi ortamına ekle — yerel onay
  gerekir, bu oturumdan otomatik yapılamaz (bu sandbox'ta ai.google.dev'e ağ erişimi de kapalı).

#### 7. [Tavily API + resmi MCP sunucusu](https://github.com/tavily-ai/tavily-mcp)
- **Yıldız (MCP repo):** ~2.4k · **Lisans:** MIT · **Güncellik:** 233 commit, aktif (36 açık issue)
- **Ücretsiz katman:** Kredi kartı gerektirmeden ayda 1.000 API kredisi (kalıcı ücretsiz plan,
  deneme süresi değil).
- **Ne işe yarar:** Web araması, sayfa içeriği çıkarma (extract), site haritalama (map) ve
  crawl — Claude Code'a MCP üzerinden gerçek zamanlı web erişimi kazandırır (ör. hedef site
  araştırması, kaynak doğrulama).
- **Neden meşru:** Resmi Tavily deposu, her kullanıcı kendi API key'ini alıyor, MCP sunucusu
  hem uzaktan (`https://mcp.tavily.com/mcp/?tavilyApiKey=<key>`) hem yerel çalıştırılabiliyor.
- **Kurulum:** tavily.com'dan ücretsiz key al → Claude Code MCP config'ine
  (`claude mcp add tavily ...` veya `.mcp.json`) ekle. Yerel onay gerekir (API key girişi).

#### 8. [Context7 MCP](https://github.com/upstash/context7) (Upstash)
- **Yıldız:** ~62.1k · **Lisans:** MIT · **Güncellik:** 974 commit, aktif
- **Ücretsiz katman:** API key olmadan da çalışıyor ama düşük rate limit'li; ücretsiz key
  (context7.com/dashboard) ile daha yüksek limit. Gerçek ücretsiz kullanım var, paylaşımlı
  key sistemi DEĞİL.
- **Ne işe yarar:** Güncel, versiyona özel kütüphane dokümantasyonunu ve kod örneklerini
  doğrudan prompt'a çeker — Claude Code'un halüsinasyonla eski/yanlış API kullanmasını önler
  (ör. bu template'te Next.js 16 gibi "training data'dan farklı" bir framework kullanılırken
  özellikle faydalı).
- **Neden meşru:** Upstash'in resmi açık kaynak projesi, geniş topluluk kullanımı, kod tamamen
  incelenebilir.
- **Kurulum:** `npx ctx7 setup` veya MCP config'e sunucu ekleme — yerel onay gerekir.

---

## Tur 2 — 2026-09-16

### A) Skill Koleksiyonları

#### 9. [glebis/claude-skills](https://github.com/glebis/claude-skills)
- **Yıldız:** 378 · **Fork:** 56 · **Lisans:** MIT (istisnalar için ilgili skill klasörüne bak)
- **Güncellik:** 349 commit, en son eklemeler 2026-07 tarihli, 7 açık issue / 4 açık PR — aktif
- **Ne işe yarar:** ~100 gerçek `SKILL.md` dosyası (her biri kendi klasöründe
  `SKILL.md` + `CHANGELOG.md` + `scripts/` + `assets/` + `references/` yapısıyla) — toplantı
  pipeline'ları, araştırma, görsel üretim, TDD, yayınlama, kişisel analitik ve Claude Code
  operasyon skill'leri.
- **Neden meşru:** Tek geliştirici (Gleb Kalinin) tarafından yönetilen, kodu tamamen açık ve
  incelenebilir bir koleksiyon; gizli API çağrısı veya paylaşımlı servis yok.
- **Kurulum:** Claude plugin marketplace üzerinden, `npx skills add glebis/claude-skills --skill <isim>`
  ile ya da doğrudan `git clone` + `~/.claude/skills/` altına kopyalama. Yerel onay gerekmez.

#### 10. [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) — DİKKAT: liste/keşif deposu
- **Yıldız:** ~75.2k · **Lisans:** Apache 2.0 · **Güncellik:** 77 commit, aktif
- **Ne işe yarar:** "1000+ production ready" skill'i kataloglayan bir dizin. **Önemli:** doğrulama
  sonucu bu deponun büyük çoğunluğu (200+ giriş) `anthropics/skills`, `zxkane/aws-skills` gibi
  BAŞKA repolara link veriyor — depoda gömülü/yerel gerçek `SKILL.md` sadece ~15-20 skill için var
  (`changelog-generator/`, `connect/`, `mcp-builder/` vb.). Yani kendisi bir "skill deposu" değil,
  bir **keşif/dizin** kaynağı.
- **Neden meşru:** Composio'nun (YC destekli, gerçek şirket) resmi deposu, içerik tamamen açık
  ve linkler gerçek/incelenebilir; hiçbir gizli/paylaşımlı erişim önermiyor.
- **Kurulum:** Doğrudan kurulum yok — bir keşif noktası olarak kullan, ilgini çeken linke gidip
  ORADAKI deponun kendi lisans/güncellik durumunu tekrar doğrula, sonra normal skill kurulumunu
  (dosya kopyalama / `npx skills add`) uygula.

### B) Agent / Subagent Koleksiyonları

#### 11. [0xfurai/claude-code-subagents](https://github.com/0xfurai/claude-code-subagents)
- **Yıldız:** ~1.000 · **Fork:** 186 · **Lisans:** MIT
- **Güncellik:** 7 commit (toplu eklenmiş), 5 açık PR, 2 açık issue — düşük commit sayısına
  rağmen aktif topluluk etkileşimi var
- **Ne işe yarar:** 100+ gerçek `agents/<isim>.md` dosyası — programlama dilleri (23),
  web framework'leri (17), mobil/masaüstü (8), veritabanları (16), altyapı/DevOps (9) ve
  servis/test/ML/güvenlik kategorilerinde uzman subagent tanımları.
- **Neden meşru:** MIT lisanslı, tamamen incelenebilir Markdown dosyaları; harici servis veya
  API key gerektirmiyor. VoltAgent/wshobson'dan farklı, bağımsız bir koleksiyon (Tur 1'de
  bahsedilen fork/klon sorunuyla karıştırılmamalı).
- **Kurulum:** `cd ~/.claude && git clone https://github.com/0xfurai/claude-code-subagents.git`
  — subagent'lar otomatik olarak `~/.claude/agents/` altında kullanılabilir olur. Yerel onay
  gerekmez.

### C) Ücretsiz & Meşru API / MCP Sağlayıcıları

#### 12. [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp) — RESMİ (Google)
- **Yıldız:** ~52.1k · **Lisans:** Apache 2.0 · **Güncellik:** 1.231 commit, aktif
- **Ücretsiz katman:** Tamamen ücretsiz, API key GEREKTİRMİYOR — yerel makinendeki Chrome'a
  doğrudan bağlanıyor (Puppeteer tabanlı).
- **Ne işe yarar:** Kod ajanlarının canlı bir Chrome tarayıcısını kontrol etmesini ve
  incelemesini sağlıyor — performans trace'i kaydetme, network isteklerini analiz etme,
  ekran görüntüsü alma, console mesajlarını okuma, otomatik sonuç bekleme ile tarayıcı
  eylemlerini otomatikleştirme. **Bu template'in kendi `docs/research/INSPECTION_GUIDE.md`
  akışıyla (Chrome MCP / DevTools ile hedef site inceleme) doğrudan örtüşüyor** — hedef site
  reverse-engineering'inde tasarım token'ı/komponent envanteri çıkarmak için birebir kullanılabilir.
- **Neden meşru:** Google Chrome DevTools ekibinin resmi deposu (`developer.chrome.com/docs/devtools/agents`
  referansı var), kod tamamen açık. Not: Google varsayılan olarak anonim kullanım istatistiği
  topluyor, `--no-usage-statistics` bayrağıyla kapatılabilir (gizlilik hassasiyeti olan kullanıcı
  için belirtmekte fayda var, engelleyici bir sorun değil).
- **Kurulum:** `claude mcp add chrome-devtools npx chrome-devtools-mcp@latest` (veya MCP config'e
  ekleme) — yerel onay gerekir (MCP sunucusu ekleme), API key gerekmez.

#### 13. Cloudflare Workers AI ücretsiz katmanı (resmi)
- **Ücretsiz katman:** Her ücretsiz Cloudflare hesabında kredi kartı/onay olmadan günlük
  **10.000 Neuron** (Cloudflare'in normalize edilmiş hesaplama birimi), her gün 00:00 UTC'de
  sıfırlanıyor — tek seferlik kredi değil, süresiz tekrarlayan katman. 82 modele erişim
  (Llama, Mistral, Gemma, DeepSeek, Qwen dahil). Örnek: ~500 token'lık bir Llama 3 yanıtı
  ~400-600 Neuron tutuyor → günde yaklaşık 15-25 metin çağrısı ücretsiz.
- **Ne işe yarar:** Claude Code'un yanında ikincil/yedek model sağlayıcısı — MCP tool içinde
  hızlı sınıflandırma, kısa özet gibi düşük hacimli işler için.
- **Neden meşru:** Resmi Cloudflare ürünü (cloudflare.com/products/workers-ai), her kullanıcı
  kendi hesabı ve kendi API token'ıyla erişiyor, paylaşımlı key yok.
- **Kurulum:** dash.cloudflare.com üzerinden ücretsiz hesap + Workers AI API token oluştur,
  kendi ortamına ekle — yerel onay/gizli bilgi girişi gerekir, bu oturumdan otomatik yapılamaz
  (bu sandbox'ta developers.cloudflare.com'a doğrudan ağ erişimi de kapalı, bilgiler bağımsız
  kaynaklardan çapraz doğrulanmıştır).

#### 14. Mistral La Plateforme "Experiment" ücretsiz katmanı (resmi)
- **Ücretsiz katman:** Tüm API modellerine (Mistral Large, Codestral dahil) kredi kartı
  gerektirmeden erişim; yaklaşık ayda 1 milyar token / ~1 istek-saniye sınırı (Mistral tam
  rakamları artık herkese açık yayınlamıyor — kesin limitler için Admin Console → Limits'e bak).
  Telefon numarası doğrulaması gerekiyor.
- **Ne işe yarar:** Deneme/prototipleme amaçlı alternatif model erişimi — production için
  önerilmiyor ama geliştirme/test için gerçek ve kalıcı bir ücretsiz katman.
- **Neden meşru:** Resmi Mistral AI ürünü, bireysel hesap + kendi key'in; paylaşımlı erişim yok.
- **Kurulum:** console.mistral.ai üzerinden ücretsiz kayıt (telefon doğrulama gerekir) + key al,
  ortam değişkeni olarak ekle — yerel onay gerekir, bu oturumdan otomatik yapılamaz (bu
  sandbox'ta mistral.ai'a doğrudan ağ erişimi de kapalı).

---

## Tur 3 — 2026-09-17

### A) Skill Koleksiyonları

#### 15. [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)
- **Yıldız:** ~95.5k · **Lisans:** MIT
- **Güncellik:** Aktif, güncel commit'ler var
- **Ne işe yarar:** "Production-grade engineering skills for AI coding agents" — `skills/`
  klasöründe gerçek `SKILL.md` dosyaları (test-driven-development, spec-driven-development,
  code-review-and-quality vb. ~25 workflow dosyası), ayrıca `agents/` (uzman personalar),
  `commands/`, `hooks/`, `references/`, `evals/` klasörleri. Google mühendislik kültüründen
  (test pyramid, Hyrum's Law, trunk-based development) esinlenen disiplinli bir SDLC akışı.
  Claude Code, Codex, Cursor, Gemini CLI, OpenCode için adaptörleri var (`.claude/`,
  `.codex-plugin/`, `.gemini/commands/`, `.opencode/`).
- **Neden meşru:** Yazarı Addy Osmani — Google Chrome ekibinden tanınan, doğrulanabilir bir
  geliştirici (halka açık konuşmalar, kitaplar, uzun süredir devam eden GitHub geçmişi var).
  İçerik tamamen açık Markdown dosyaları, gizli API çağrısı yok.
- **Kurulum:** Repoyu klonla, istediğin `skills/<isim>/SKILL.md` dosyasını `~/.claude/skills/`
  altına kopyala; ya da reponun kendi plugin marketplace entegrasyonunu kullan. Yerel dosya
  kopyalama, onay gerekmez.
  - **Not:** Bu proje ~7 ayda ~95k yıldıza ulaşmış — yüksek ama Addy Osmani'nin geniş kitlesi
    göz önüne alındığında (bkz. Tur 3 sonundaki "dikkat" notu) organik olabilir; içerik kalitesi
    doğrulandı, kurulum öncesi yine de kendi gözlemini yap.

### B) MCP Sunucuları (proje-özel faydalı)

#### 16. [Jpisnice/shadcn-ui-mcp-server](https://github.com/Jpisnice/shadcn-ui-mcp-server)
- **Yıldız:** ~3.0k · **Fork:** 306 · **Lisans:** MIT
- **Ücretsiz katman:** Tamamen ücretsiz; API key GEREKTİRMİYOR (opsiyonel bir GitHub personal
  access token saatlik rate limit'i 60'tan 5.000'e çıkarıyor — kendi token'ın, paylaşımlı değil).
- **Ne işe yarar:** LLM ajanlarına shadcn/ui komponent kaynak kodu, demo, block ve metadata
  erişimi sağlıyor (React/varsayılan, Svelte, Vue, React Native, Base UI çerçeveleri dahil).
  **Bu template'in kendi tech stack'iyle (shadcn/ui + Tailwind v4, `AGENTS.md`'de belirtilen)
  birebir örtüşüyor** — clone edilen sitedeki component'leri shadcn primitiflerine eşlerken
  doğru prop/varyant bilgisini doğrudan sağlayabilir.
- **Neden meşru:** Açık kaynak, MIT lisanslı, npm üzerinden `@jpisnice/shadcn-ui-mcp-server`
  paketi olarak dağıtılıyor, kod tamamen incelenebilir.
- **Kurulum:** `npx @jpisnice/shadcn-ui-mcp-server` (kurulum gerektirmez) veya MCP config'e ekle
  — yerel onay gerekir (yeni MCP sunucusu ekleme), API key zorunlu değil.

### C) Keşif/Dizin Kaynağı (kurulum değil, referans)

#### 17. [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) — DİKKAT: liste/keşif deposu
- **Yıldız:** ~95.1k · **Fork:** 16.2k · **Lisans:** MIT · **Güncellik:** 12.271+ commit, çok aktif
- **Ne işe yarar:** MCP sunucularını kategorilere ayırarak listeleyen geniş, çok dilli (EN, JA,
  KO, PT, ZH, FA) bir "awesome list". Kendisi bir MCP implementasyonu DEĞİL, dizin/keşif kaynağı
  (Tur 2'deki ComposioHQ/awesome-claude-skills ile aynı kategori).
- **Neden meşru:** glama.ai ekibi tarafından yönetiliyor, içerik tamamen açık ve linkler
  incelenebilir, gizli/paylaşımlı erişim önermiyor.
- **Kurulum:** Doğrudan kurulum yok — ilgini çeken MCP sunucusuna gidip ORADA lisans/güncellik/
  API key gereksinimini ayrıca doğrula, sonra normal MCP kurulumunu uygula.

---

## Tur 4 — 2026-09-17

### A) MCP Sunucuları (resmi, proje-özel faydalı)

#### 18. [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — RESMİ
- **Yıldız:** ~90.4k · **Lisans:** Apache 2.0 (yeni katkılar) / MIT (mevcut kod)
- **Güncellik:** 4.188 commit, aktif (MCP steering group tarafından yönetiliyor)
- **Ne işe yarar:** MCP'nin resmi referans sunucu koleksiyonu — `src/filesystem`, `src/git`,
  `src/fetch`, `src/memory`, `src/time`, `src/sequentialthinking`, `src/everything`. Bunların
  çoğu sadece "nasıl MCP sunucusu yazılır" örneği değil, doğrudan kullanılabilir gerçek araçlar
  (ör. `fetch` web içeriği çekip LLM için temizliyor, `filesystem` kontrollü dosya erişimi
  sağlıyor, `sequential-thinking` yapılandırılmış problem çözme adımı ekliyor).
- **Neden meşru:** README'de açıkça "maintained by the MCP steering group" yazıyor — Anthropic'in
  de içinde olduğu resmi MCP yönetişim grubu; npm paketleri (`@modelcontextprotocol/server-*`)
  olarak resmi dağıtılıyor.
- **Kurulum:** `claude mcp add fetch npx @modelcontextprotocol/server-fetch` gibi MCP config'e
  doğrudan ekleme — çoğu sunucu (fetch, filesystem, memory, time, sequential-thinking) API key
  gerektirmiyor. Yerel onay gerekir (yeni MCP sunucusu ekleme).

#### 19. [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) — RESMİ
- **Yıldız:** ~37.2k · **Fork:** ~3.2k · **Lisans:** Apache-2.0
- **Güncellik:** 582 commit, aktif
- **Ne işe yarar:** LLM ajanlarının gerçek bir tarayıcıyı Playwright üzerinden, ekran görüntüsü
  yerine accessibility tree kullanarak kontrol etmesini sağlıyor — 60+ araç (navigasyon, tab
  yönetimi, form doldurma, network mocking, kayıt). **Bu template'in kendi kuralıyla ("UI/frontend
  değişikliklerinde dev server başlatıp tarayıcıda test et") ve `clone-website` akışının hedef
  site inceleme + kendi klonunu doğrulama adımlarıyla birebir örtüşüyor.**
- **Neden meşru:** Playwright'ın kendi ekibi tarafından yönetilen resmi Microsoft deposu, API key
  gerektirmiyor, tamamen yerel çalışıyor (Puppeteer tabanlı Chrome DevTools MCP'den — Tur 2 #12 —
  farklı bir yaklaşım; ikisi birbirini dışlamıyor, tamamlayıcı).
- **Kurulum:** `claude mcp add playwright npx @playwright/mcp@latest` — yerel onay gerekir,
  API key gerekmez.

### B) Agent / Plugin Koleksiyonu

#### 20. [davepoon/claude-code-subagents-collection](https://github.com/davepoon/claude-code-subagents-collection) (buildwithclaude.com)
- **Yıldız:** ~3.5k · **Fork:** ~508 · **Lisans:** MIT
- **Güncellik:** 566 commit, aktif
- **Ne işe yarar:** buildwithclaude.com sitesinin kaynak deposu — gerçek `plugins/<isim>/{agents,
  commands,hooks}/*.md` dosya yapısıyla 117 agent, 175 command, 28 hook, 26 skill barındırıyor;
  ayrıca 20k+ topluluk plugin'i ve 4.500+ MCP sunucusunu indeksleyen bir keşif katmanı da var.
  Tur 1'deki wshobson/agents'a benzer ama farklı/bağımsız bir koleksiyon.
- **Neden meşru:** MIT lisanslı, tamamen açık kod, içerik resmi web sitesiyle (buildwithclaude.com)
  senkron ve incelenebilir; gizli servis çağrısı yok.
- **Kurulum:** İlgili `plugins/<isim>/agents|commands|hooks/*.md` dosyasını `~/.claude/agents/`
  (veya `commands/`, `hooks/`) altına kopyala, ya da reponun `.claude-plugin/` marketplace
  entegrasyonunu kullan. Yerel dosya kopyalama, onay gerekmez.

### C) Ücretsiz & Meşru API Sağlayıcıları

#### 21. [Cerebras Cloud API](https://cloud.cerebras.ai) ücretsiz katmanı (resmi)
- **Ücretsiz katman:** Günde **1 milyon token**, kredi kartı gerektirmeden, kalıcı (tek seferlik
  deneme kredisi değil). 30 istek/dk limit. Llama 4 Scout, Qwen3 32B, DeepSeek R1 Distill gibi
  modellere erişim. WSE-3 wafer-scale donanımında 2.600+ token/sn hız (bilinen en hızlı
  sağlayıcılardan biri).
- **Ne işe yarar:** Claude Code'un yanında ultra hızlı ikincil/yedek model sağlayıcısı — MCP tool
  içinde hızlı sınıflandırma, taslak üretimi, kısa özetleme gibi düşük gecikme gerektiren işler için.
- **Neden meşru:** Resmi Cerebras ürünü, bireysel email/GitHub hesabıyla kendi key'ini alıyorsun,
  paylaşımlı erişim değil.
- **Kurulum:** cloud.cerebras.ai üzerinden ücretsiz kayıt + key al, ortam değişkeni olarak ekle
  — yerel onay/gizli bilgi girişi gerekir, bu oturumdan otomatik yapılamaz (bu sandbox'ta
  cerebras.ai'a doğrudan ağ erişimi de kapalı; rakamlar birden fazla bağımsız kaynaktan (yangmao.ai,
  getaiperks.com, LinkedIn duyurusu) çapraz doğrulanmıştır — kurulum öncesi resmi sayfada
  teyit et).

### D) Keşif/Dizin Kaynağı (kurulum değil, referans)

#### 22. [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) — DİKKAT: liste/keşif deposu
- **Yıldız:** ~54.2k · **Fork:** ~4.7k · **Lisans:** mevcut (LICENSE dosyası var)
- **Güncellik:** 1.818 commit, çok aktif
- **Ne işe yarar:** Claude Code ekosistemi için elle seçilmiş, yapılandırılmış kaynak kataloğu —
  slash command'lar, `CLAUDE.md` örnekleri, hook'lar, statusline'lar, agent skill'leri, plugin'ler.
  Programatik olarak yönetiliyor (`THE_RESOURCES_TABLE_NEW.csv` + `generate_readme.py`), Tur 2/3'teki
  ComposioHQ ve punkpeye kataloglarından farklı olarak özellikle Claude Code'a (genel MCP/skill
  ekosistemine değil) odaklanıyor.
- **Neden meşru:** Geniş topluluk kabul görmüş, aktif bakımlı, tamamen açık kaynak; kendisi bir
  kurulum paketi değil, doğrulanabilir bir keşif noktası.
- **Kurulum:** Doğrudan kurulum yok — ilgini çeken linke git, ORADAKI kaynağın kendi lisans/
  güncellik durumunu ayrıca doğrula, sonra normal kurulum adımını (dosya kopyalama / `npx skills add`
  / MCP config) uygula.

---

## Tur 5 — 2026-09-17

### A) Skill Koleksiyonu

#### 23. [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills)
- **Yıldız:** ~26k · **Fork:** ~3.7k · **Lisans:** MIT
- **Güncellik:** 1.499 commit, 6 açık issue, 12 açık PR — bu oran (aşağıdaki #24'te
  bahsedilen sickn33 vakasının aksine) organik topluluk büyümesiyle uyumlu.
- **Ne işe yarar:** 388 üretim-hazır skill, 20 domain dizini (`engineering/`,
  `marketing-skill/`, `product-team/`, `research/`, `c-level-advisor/` vb.); her skill kendi
  `SKILL.md` + `scripts/` (727 adet stdlib-only, pip bağımlılığı olmayan Python CLI aracı) +
  `references/` (823 şablon/checklist) + `assets/` içeriyor. `.claude/`, `.codex/`, `.vibe/`,
  `.hermes/` dizinleriyle çoklu harness desteği var.
- **Neden meşru:** Tek geliştirici (Alireza Rezvani) tarafından yönetiliyor, doğrulanabilir bir
  yazar profili var (kişisel site, Medium, uzun süredir yazı/konuşma geçmişi); klasör yapısı
  gerçek içerik gösteriyor (placeholder link değil), gizli API/servis bağımlılığı yok.
- **Kurulum:** Repoyu klonla, ilgili domain klasöründeki skill'i `~/.claude/skills/` altına
  kopyala ya da reponun kendi kurulum script'ini kullan. Yerel dosya kopyalama, onay gerekmez.

### B) Proje-Özel MCP / API Sağlayıcıları (web scraping — `clone-website` akışıyla örtüşüyor)

#### 24. [firecrawl/firecrawl-mcp-server](https://github.com/firecrawl/firecrawl-mcp-server) — RESMİ
- **Yıldız:** ~7.5k · **Fork:** ~887 · **Lisans:** MIT
- **Güncellik:** 477 commit, güncel CHANGELOG.md ve CI workflow'ları — aktif
- **Ücretsiz katman:** Kredi kartı gerektirmeden aylık 1.000 kredi (kaynaklar arasında "aylık
  yenilenen" vs "tek seferlik" konusunda küçük tutarsızlık var, çoğunluk kaynak aylık diyor —
  kurulumdan önce firecrawl.dev/pricing'den teyit et).
- **Ne işe yarar:** `scrape`/`crawl`/`map`/`search`/`extract`/`interact` araçlarıyla bir web
  sayfasını temiz Markdown/yapılandırılmış veriye çeviriyor, JS render destekli. **Bu template'in
  `clone-website` akışıyla (hedef siteden gerçek içerik/asset çıkarma, `AGENTS.md`'deki "Real
  content" ilkesi) birebir örtüşüyor** — hedef sitenin sayfalarını toplu olarak temiz markdown'a
  çevirip içerik/asset envanterini hızlandırabilir.
- **Neden meşru:** Firecrawl'ın resmi organizasyon deposu, MIT lisanslı, her kullanıcı kendi API
  key'ini alıyor (paylaşımlı key değil); kullanım kamuya açık/kullanıcının kendi hedef sitesi
  içindir — login duvarı arkasındaki içerik kazıma (X/Twitter/Reddit bypass) amaçlı DEĞİL.
- **Kurulum:** firecrawl.dev'den ücretsiz kayıt + API key al, `claude mcp add firecrawl ...` ile
  MCP config'ine ekle (npx üzerinden de çalışıyor). Yerel onay + API key girişi gerekir.

#### 25. [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) — self-hosted, ücretsiz alternatif
- **Yıldız:** ~83.7k · **Fork:** ~8.7k · **Lisans:** Apache 2.0
- **Güncellik:** 1.651 commit, güncel sürüm v0.9.3 (güvenlik yaması) — aktif
- **Ne işe yarar:** Açık kaynak, tamamen yerel çalışan "LLM-friendly" web crawler — sayfaları
  temiz Markdown'a çeviriyor, JS render destekli, **API key GEREKTİRMİYOR** (Firecrawl'a göre
  kota/kredi limiti olmayan tamamen ücretsiz self-hosted alternatif). Resmi/tek bir MCP sunucusu
  içermiyor; Docker dağıtımı MCP entegrasyonundan bahsediyor ve topluluk tarafından yazılmış
  birden fazla bağımsız MCP wrapper reposu var (ör. `sadiuysal/crawl4ai-mcp-server`) — bunlar
  tek tek doğrulanmadı, kullanmadan önce kendi güncellik/lisans kontrolünü ayrıca yap.
- **Neden meşru:** Apache 2.0, tamamen açık kod, gizli servis çağrısı yok, geniş topluluk kabul
  görmüş (83k+ yıldız, düzenli sürüm geçmişi, güvenlik yamaları).
- **Kurulum:** `pip install crawl4ai` veya Docker imajıyla self-hosted çalıştır; MCP olarak
  kullanmak istersen topluluk wrapper'larından birini (lisans/güncellik kontrolü sonrası) MCP
  config'ine ekle. Yerel onay gerekir (paket kurulumu), API key gerekmez.

---

## ⚠️ Doğrulanan ama EKLENMEYEN / Dikkat Edilmesi Gereken Bulgular

- **GitHub Models (resmi ücretsiz LLM API)** — **2026-07-30 tarihinde GitHub tarafından
  tamamen kapatıldı.** Hâlâ birçok "ücretsiz LLM API listesi" (ör. `awesome-free-llm-apis`
  tarzı depolar) bunu güncel ücretsiz kaynak olarak öneriyor — bu artık YANLIŞ ve çalışmıyor.
  Bu kataloğa dahil EDİLMEDİ, gelecekte başka bir kaynakta önerilirse güncelliğini önce kontrol et.
- **Brave Search MCP** — eskiden "2.000 sorgu/ay ücretsiz" sunuyordu, bu katman artık YOK;
  şu an plan başına ayda 5$ kredi (~1.000 sorgu) modeline geçmiş durumda. Tamamen ücretsiz
  olmadığı için ayrı madde olarak eklenmedi (isteğe bağlı, düşük öncelikli alternatif).
- **VoltAgent deposunun `afsarctg/`, `Shyboy0499/`, `Saad-web-spec/` kullanıcı adlarındaki
  kopyaları** — aynı README ve içerikle görünüyorlar, orijinal/kaynak depo değiller; olası
  fork'lar. Katalogda sadece orijinal VoltAgent deposu listelendi.
- **"FreeLLMAPI" ve benzeri "birden fazla ücretsiz sağlayıcıyı tek key altında birleştiren
  self-hosted router" araçları** (Tur 2'de rastlandı) — **bilerek eklenmedi.** Bu tarz araçlar
  birden fazla sağlayıcının ücretsiz katmanını otomatik/programatik olarak art arda tüketiyor;
  bu, ilgili sağlayıcıların ToS'unda genelde "otomatik/toplu erişim" veya "yeniden satış" olarak
  yasaklanan bir kullanım deseni sayılabilir ve hesap askıya alınma riski taşır. Talimattaki
  "hesap askıya alınma riski taşıyan hiçbir şey eklenmeyecek" kuralına takıldığı için dışlandı.
- **"tokenmix.ai", "freellmapi.co", "costbench.com", "pricepertoken.com", "itsfree.ai" gibi
  SEO/listicle siteleri** — ücretsiz API karşılaştırmaları için çapraz referans olarak
  kullanıldı ama kaynak/repo olarak kataloğa EKLENMEDİ; bunlar resmi sağlayıcı değil, üçüncü
  parti pazarlama içerikleri (rakamları bağımsız doğrulama için kullanışlı ama tek başına
  güvenilir birincil kaynak değil).
- **Dışlama kriterlerine takılan ve hiç araştırılmayan kategoriler:** paylaşımlı/havuzlanmış
  API key sunan "sınırsız ücretsiz AI" araçları, X/Twitter/Reddit giriş engeli aşan scraping
  araçları, ve kanıtsız yüksek kazanç iddialı trading botları — talimat gereği hiç aranmadı.
- **[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)** (Tur 3'te
  rastlandı) — "Read & search Twitter, Reddit, YouTube... one CLI, zero API fees" olarak
  tanıtılıyor; bu birebir talimattaki "X/Twitter/Reddit giriş engelini aşan scraping aracı"
  dışlama kriterine giriyor. **Bilerek eklenmedi.**
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** (Tur 3'te rastlandı) — "agent harness
  performance optimization system" olarak 68 agent/292 skill/94 komut iddia ediyor, teknik
  içerik gerçek görünüyor (MIT lisans, gerçek dosya ağacı). Ancak **yıldız/fork/issue oranı
  şüpheli**: Ocak 2026'da açılmış (~8 aylık), ~260k yıldız + ~39k fork'a karşılık sadece
  ~218 açık issue — organik topluluk büyümesiyle uyumsuz bir hız. Sahte/şişirilmiş yıldız
  riski nedeniyle **bilerek eklenmedi**; ileride tekrar değerlendirilecekse önce yıldız
  geçmişi (star history) ayrıca doğrulanmalı.
- **DeepSeek Platform API "ücretsiz katmanı"** (Tur 4'te araştırıldı) — resmi kaynaklarda kalıcı
  bir ücretsiz katman **yok**; yeni hesaplara tek seferlik ~5 milyon token / 30 gün deneme
  kredisi veriliyor, süre/kota bitince ödeme yöntemi eklemek zorunlu. Diğer maddeler (Groq,
  Cerebras, Cloudflare Workers AI, Mistral) kalıcı/tekrarlayan ücretsiz katman sunduğu için
  kataloğa alındı; DeepSeek'in tek seferlik deneme kredisi bu kritere uymadığından **bilerek
  eklenmedi**.
- **rahulvrane/awesome-claude-agents, navin4078/awesome-claude-code-agents** (Tur 4'te
  incelendi) — ilki sadece başka depolara link veren bir meta-dizin (gerçek agent dosyası yok),
  ikincisi teknik olarak gerçek `.md` dosyaları içeriyor ama sadece 1 yıldız/0 fork ile
  doğrulanamayacak kadar erken/küçük. İkisi de **eklenmedi**. Aynı taramada bulunan
  [vijaythecoder/awesome-claude-agents](https://github.com/vijaythecoder/awesome-claude-agents)
  (MIT, ~4.4k yıldız/531 fork, 24 gerçek agent — Laravel/Django/Rails/React/Vue
  orchestrator deseni) gerçek ve olgun ama Tur 1'deki VoltAgent/wshobson/0xfurai kapsamıyla
  yeterince örtüştüğü için ayrı madde açılmadı, burada referans olarak bırakıldı.
- **sickn33/agentic-awesome-skills** (eskiden "antigravity-awesome-skills" adıyla dolaşıma
  girmiş, Tur 5'te rastlandı) — "AAS Core... local, agent-first control plane... agent-owned
  selection, stack validation" gibi pazarlama diliyle 2.115+ skill iddia ediyor; 46.5k yıldız,
  6.8k fork ve 2.760 commit gösteriyor ama sadece **0 açık issue / 2 açık PR** var. Bu oran
  (Tur 3'teki affaan-m/ECC vakasına çok benzer şekilde) bu ölçekte organik bir topluluğun
  bırakması beklenen iz ile uyumsuz — gerçek SKILL.md dosyaları var gibi görünse de sahte/
  şişirilmiş yıldız riski nedeniyle **bilerek eklenmedi**. Tekrar değerlendirilecekse önce
  yıldız geçmişi (star history) ve kuruluş tarihi ayrıca doğrulanmalı.
- **NVIDIA NIM ücretsiz katmanı** (Tur 5'te araştırıldı) — birden fazla bağımsız kaynak
  birbiriyle çelişiyor: kimi "1.000 kredi tek seferlik + istek üzerine 4.000 ek kredi", kimi
  "aylık 1.000 kredi", kimi de "Ağustos 2026 itibarıyla süresiz ücretsiz plan" diyor.
  `build.nvidia.com` bu oturumdan ağ engeli nedeniyle doğrudan doğrulanamadı. DeepSeek'teki
  (Tur 4, #21 sonrası not) ile aynı gerekçeyle — "kalıcı/tekrarlayan ücretsiz katman" kriteri
  net olarak sağlanamadığı için — **bilerek eklenmedi**. İleride tekrar değerlendirilecekse
  önce resmi `developer.nvidia.com/nim` sayfasından doğrudan teyit edilmeli.

---

## Tur 6 — 2026-09-17

Bu oturumda `gh` CLI yoktu; doğrulama GitHub MCP sunucusunun `search_repositories`/`search_code`
araçlarıyla yapıldı (bu araçlar repo-scope kısıtlamasına tabi değil, ama `get_file_contents`/
`list_commits` gibi tekil-repo araçları sadece bu oturuma tanımlı repo için çalışıyor — o yüzden
dosya içeriği doğrulaması `search_code` ile path/içerik araması üzerinden yapıldı).

### A) Skill / Plugin Marketplace

#### 26. [numman-ali/n-skills](https://github.com/numman-ali/n-skills)
- **Yıldız:** ~1.046 · **Fork:** ~110 · **Açık issue:** 39 · **Lisans:** Apache 2.0
- **Güncellik:** Aktif (son güncelleme 2026-09-12), gerçek `package.json` (v1.3.6, `scripts.sync`
  ile harici skill senkronizasyonu)
- **Ne işe yarar:** Claude Code / Codex / openskills için küratörlü plugin marketplace —
  `skills/<kategori>/<isim>/skills/<isim>/SKILL.md` yapısında gerçek dosyalar doğrulandı
  (`orchestration`, `open-source-maintainer`, `dev-browser`, `zai-cli`, `gastown` vb.). Yıldız/
  fork/issue oranı organik büyümeyle uyumlu (Tur 3/5'teki şişirilmiş-yıldız vakalarının aksine).
- **Neden meşru:** Apache 2.0, gerçek ve tutarlı dosya ağacı, paylaşımlı/gömülü API key izine
  rastlanmadı (`zai-cli` skill'i kendi API key'ini kullanıcıdan istiyor, gömülü key yok).
- **Kurulum:** İlgili `skills/.../SKILL.md` dosyasını `~/.claude/skills/` altına kopyala ya da
  reponun kendi marketplace/sync mekanizmasını kullan. Yerel dosya kopyalama, onay gerekmez.
  Not: İçindeki `gastown` (çok-agent orkestrasyon) ve `open-source-maintainer` skill'leri
  kurulum sırasında ekstra CLI (`gt`/`bd` komutları) kurabilir — kurulum scriptini gözden
  geçirmeden çalıştırma.

### B) Ücretsiz & Meşru API Sağlayıcıları

#### 27. [SambaNova Cloud API](https://docs.sambanova.ai/docs/en/models/rate-limits) ücretsiz katmanı (resmi)
- **Ücretsiz katman:** Kredi kartı gerektirmeden, çoğu model için 20 istek/dk, 20 istek/gün,
  200K token/gün (çok dar); MiniMax M3 modeli için günlük token limiti 1M'e çıkıyor. Ücretli
  "Developer Tier"e geçince limit 20M token/gün'e sıçrıyor.
- **Ne işe yarar:** Claude Code'un yanında son derece dar kapsamlı bir yedek/deneme model
  sağlayıcısı — günlük 20 istek limiti nedeniyle ancak nokta atışı/deneme amaçlı kullanılabilir,
  Groq/Cerebras/Cloudflare gibi (Tur 1/4) günlük kullanım için pratik değil.
- **Neden meşru:** Resmi SambaNova ürünü, bireysel hesap + kendi key, paylaşımlı erişim yok;
  rakamlar resmi `docs.sambanova.ai/docs/en/models/rate-limits` sayfasından teyit edildi.
- **Kurulum:** cloud.sambanova.ai üzerinden ücretsiz kayıt + key al, ortam değişkeni olarak ekle
  — yerel onay/gizli bilgi girişi gerekir, bu oturumdan otomatik yapılamaz. Limitin darlığı
  nedeniyle günlük iş akışı için ÖNCELİKLİ değil, bilgi amaçlı not edildi.

---

## ⚠️ Tur 6 ÖNEMLİ GÜVENLİK BULGUSU — Kesinlikle EKLENMEDİ

### [OthmanAdi/planning-with-files](https://github.com/OthmanAdi/planning-with-files) — ŞÜPHELİ, KURMA

- **Görünen rakamlar:** ~26.944 yıldız, ~2.243 fork ama sadece **11 açık issue** — Tur 3'teki
  `affaan-m/ECC` ve Tur 5'teki `sickn33/agentic-awesome-skills` ile AYNI şişirilmiş-yıldız deseni
  (bu ölçekte organik bir toplulukta yüzlerce açık issue/PR beklenir, 11 tanesi istatistiksel
  olarak uyumsuz).
- **Doğrulanan dosya yapısı ciddi bir kırmızı bayrak taşıyor:** Repo, 11+ farklı ajan platformu
  için (`.cursor/hooks.json`, `.codex/hooks.json`, `.kiro/`, `hooks/hooks.json` vb.) her platformda
  **`UserPromptSubmit` olayında otomatik shell/PowerShell script çalıştıran hook'lar** kuruyor
  (`sh`, `powershell -ExecutionPolicy Bypass -File ...`, `python3 .../run_sh.py ...` komutları
  doğrudan `search_code` ile görüldü) — yani kullanıcı her prompt gönderdiğinde arka planda kod
  çalıştırıyor.
- **SKILL.md açıklaması alışılmadık şekilde savunmacı/önleyici dil kullanıyor:** "The skill has no
  network upload path", "never runs commands declared in Markdown", "emits aggregate counts only",
  "bounded nonce-framed excerpts" gibi ifadeler — bu, bir AI ajanının (tam da bu oturumun yaptığı
  gibi) güvenlik değerlendirmesi yapacağını öngörüp ONA ÖZEL yazılmış gibi okunuyor, normal bir
  kullanıcı-yönelimli açıklama değil.
- **Web araması ek bir kırmızı bayrak ortaya çıkardı:** Aynı isim ve BİREBİR AYNI pazarlama
  metniyle ("the workflow pattern behind the $2B acquisition") farklı, ilgisiz görünen
  hesaplarda (`tokenaissance/`, `CloudEngineHub/`, `justinseger015-ctrl/`, `GongYuanCaiJi/`)
  kopya/mirror repolar bulundu — koordineli bir görünürlük/güven şişirme deseniyle uyumlu.
- **En kritik bulgu:** Web araması, projenin kendi GitHub Discussion'ında hook'ların "şüpheli
  görünmesinin" sebebini açıklayan bir metin ortaya çıkardı — bu metin "tamper attestation",
  "skill-discovery loader", "plan-injection delimiters" gibi güvenlik-jargonu kullanarak tam da
  bu tür bir incelemenin çıkaracağı şüpheleri ÖNCEDEN cevaplıyor. Bu içerik dış kaynaklı/
  doğrulanamaz olduğu için güvenilir bir açıklama olarak KABUL EDİLMEDİ — tam tersine, bir AI
  ajanını ikna etmek için özel olarak yazılmış olabileceği ihtimalini güçlendiriyor.
- **Bağımsız doğrulama:** Aynı araştırmada, Ağustos 2026'da gerçek bir tedarik zinciri saldırısının
  (Keyv npm worm, thehackernews.com) tam olarak bu deseni kullandığı görüldü: yüzlerce npm paketine
  gömülü, "GitHub-verified" rozetiyle kamufle edilmiş Claude Code/VS Code hook'ları ekleyen bir
  saldırı. `planning-with-files`'ın AYNI kategoride (çok-platformlu, otomatik-çalışan prompt hook'u)
  olması, kötü niyetli olmasa bile risk profilinin talimattaki "hiçbir şey eklenmeyecek" barının
  çok altında olduğunu gösteriyor.
- **Sonuç:** Talimattaki dışlama kriterlerinin ruhuna (hesap/veri güvenliği riski taşıyan hiçbir
  şey) göre **KESİNLİKLE EKLENMEDİ**. Kullanıcıya: bu repo veya "planning-with-files" adıyla
  dolaşan herhangi bir fork/mirror, `~/.claude/` veya başka bir ajan config dizinine KURULMAMALI;
  zaten kurulmuşsa `.claude/hooks/`, `.cursor/hooks.json`, `.codex/hooks.json` vb. dosyalar elle
  kontrol edilmeli.

---

## Tur 7 — 2026-09-17

Bu turda `gh` CLI yine yoktu; doğrulama GitHub MCP sunucusunun `search_repositories`/`search_code`
araçlarıyla yapıldı. Web araması (WebSearch) bu oturumda tutarsız çalıştı — `openrouter.ai`
sorguları özellikle "unavailable" döndü (Tur 1'deki ağ kısıtlaması notuyla uyumlu), bu yüzden
OpenRouter/HuggingFace gibi ticari sağlayıcı ücretsiz katmanları bu turda GÜVENİLİR şekilde
doğrulanamadı ve kataloğa eklenmedi (HuggingFace Inference: 30k çağrı/ay + belirsiz dk-bazlı
limit + sadece $0.10 aylık kredi — Tur 4/5'teki "belirsiz/zayıf ücretsiz katman" kriterine takılıp
zaten eklenmezdi).

### A) Proje-Özel Araç (görsel → kod, `clone-website` akışıyla birebir örtüşüyor)

#### 28. [abi/screenshot-to-code](https://github.com/abi/screenshot-to-code)
- **Yıldız:** ~79.1k · **Fork:** ~9.7k · **Lisans:** MIT · **Açık issue:** 145
- **Güncellik:** Kasım 2023'ten beri aktif, bugün (2026-09-17) güncellenmiş commit'ler var —
  açık issue/yıldız oranı bu ölçekte organik büyümeyle uyumlu (Tur 3/5/6'daki şişirilmiş-yıldız
  vakalarının aksine).
- **Ne işe yarar:** Bir ekran görüntüsünü (veya Figma tasarımını/video kaydını) temiz HTML/
  Tailwind/React/Vue koduna çeviriyor. **Bu template'in tam da yaptığı işle (hedef siteyi
  görsel olarak inceleyip pixel-perfect Next.js/Tailwind koduna dönüştürme, `AGENTS.md`'deki
  "Beauty-first" ve "pixel-perfect emulation" ilkeleri) birebir örtüşüyor** — `clone-website`
  akışının Phase 1 (Visual Audit) çıktısı olan ekran görüntülerini hızlı bir ilk-taslak koda
  çevirmek için kullanılabilir (üretilen kod birebir kullanılmaz ama referans/başlangıç noktası
  olarak değerli).
- **Neden meşru:** MIT lisanslı (README'de doğrulandı: `Copyright (c) 2023 Abi Raja`), kod
  tamamen açık ve self-hosted (Docker ile kendi makinende çalıştırıyorsun); kendi
  OpenAI/Anthropic/Gemini API key'ini giriyorsun (`OPENAI_API_KEY=sk-your-key` — paylaşımlı key
  DEĞİL, README'de doğrulandı). Gizli/harici servis çağrısı yok.
- **Kurulum:** `git clone` + `docker-compose up -d --build` (kendi API key'ini `.env` dosyasına
  gir) veya barındırılan sürümünü (screenshottocode.com, ücretli) kullan. Yerel onay + API key
  girişi gerekir, bu oturumdan otomatik yapılamaz. NOT: GitHub'da aynı isimle (`screenshot-to-code`,
  `image-to-code-mcp`, `UI-to-Code`, `visionforge-ui` vb.) 0 yıldızlı, çok yeni kopya/benzer
  projeler de bulundu — orijinal/doğrulanmış kaynak olan `abi/screenshot-to-code`'u tercih et.

### B) MCP Sunucusu (proje-özel faydalı — inceleme/QA aşaması)

#### 29. [danielsogl/lighthouse-mcp-server](https://github.com/danielsogl/lighthouse-mcp-server)
- **Yıldız:** ~71 · **Fork:** ~13 · **Lisans:** MIT · **Açık issue:** 6
- **Güncellik:** Haziran 2025'ten beri aktif, son güncelleme 2026-09-14; gerçek CI pipeline'ı
  (`.github/workflows/release.yml` içinde typecheck + test adımları) doğrulandı.
- **Ne işe yarar:** Google Lighthouse'u MCP üzerinden 13+ araçla (performans, erişilebilirlik,
  SEO, güvenlik) çalıştırıyor. **`docs/research/INSPECTION_GUIDE.md`'nin Phase 4 (Technical
  Stack Analysis) ve genel "check" akışıyla (`npm run check`) örtüşüyor** — hedef siteyi VEYA
  kendi klonlanmış sonucunu Lighthouse skorlarıyla karşılaştırmak için kullanılabilir.
- **Neden meşru:** MIT lisanslı (README'de doğrulandı: `Copyright (c) 2025 Daniel Sogl`), Google'ın
  kendi açık kaynak Lighthouse motorunu sarmalıyor, API key veya harici servis gerektirmiyor
  (tamamen yerel Chrome ile çalışıyor).
- **Kurulum:** `claude mcp add lighthouse npx lighthouse-mcp-server@latest` (veya MCP config'e
  ekleme) — yerel onay gerekir, API key gerekmez.

### C) Doğrulanan ama EKLENMEYEN Bulgular (Tur 7)

- **Figma MCP alternatifleri** (`tathagat22/plumb-mcp` — 82 yıldız, "no REST rate limits, no
  metered tool-call quotas" iddiasıyla Figma'nın kendi Dev Mode/REST kota sistemini bypass etmeyi
  pazarlıyor) — talimattaki "platform ToS'unu bypass eden araçlar" dışlama kriterine potansiyel
  olarak giriyor, ayrıca çok yeni/küçük (Mayıs 2026, 82 yıldız) ve doğrulanmamış; **bilerek
  eklenmedi**. Figma'nın kendi resmi Dev Mode MCP sunucusunun ayrı bir GitHub deposu yok (Figma
  masaüstü uygulamasına gömülü özellik) — bu yüzden "resmi" bir GitHub kaynağı olarak da
  eklenemedi.
- **`wtznicy/my-websearch`** — "9 engine (bing/baidu/csdn/juejin/sogou/duckduckgo/exa/brave/
  startpage), no API keys required" web arama MCP'si — API key olmadan arama motorlarını
  scrape ettiğini açıkça belirtiyor, bu birebir talimattaki ToS-bypass scraping dışlama
  kriterine giriyor (ayrıca 1 yıldız, doğrulanamaz). **Bilerek eklenmedi.**
- **OpenRouter (openrouter.ai) ücretsiz `:free` modelleri** — resmi ve meşru olduğu biliniyor
  (paylaşımlı key değil, her kullanıcı kendi key'i), ANCAK bu oturumda `openrouter.ai`'a hem
  doğrudan ağ erişimi hem de bu domain hakkındaki web araması sorguları tutarlı şekilde
  başarısız oldu (Tur 1'de de aynı kısıtlama not edilmişti). Güncel rate limit rakamlarını
  güvenilir şekilde doğrulayamadığım için **bu turda eklenmedi** — gelecek bir turda ağ erişimi
  varsa öncelikli olarak tekrar denenmeli.
- Küçük/yeni (0-4 yıldız) görüntü optimizasyon CLI'ları (`pic-shrink`, `image-optimizer`,
  `webp-crusher`, `imgforge` vb.) ve "awesome skills/agents" marketplace'leri (`eduwxyz/
  my-awesome-skills`, `bakhod1r/awesome-agents` vb., 0-16 yıldız) tarandı ama Tur 1-6'daki
  kurulu koleksiyonlara (VoltAgent, wshobson, davepoon, numman-ali) anlamlı bir katkı
  sağlamadıkları ve tek başlarına doğrulanamayacak kadar küçük/yeni oldukları için
  **eklenmedi**.

---

## Tur 8 — 2026-09-17

Bu turda da `gh` CLI yoktu; doğrulama GitHub MCP sunucusunun `search_repositories`/`search_code`
araçlarıyla yapıldı. `get_file_contents`/`list_commits` bu oturumda YALNIZCA bu şablon reposu
(`nusygako/ai-website-cloner-template`) için çalışıyor — başka bir repo için çağrıldığında
"Access denied: repository not configured for this session" hatası döndüğü doğrulandı; bu yüzden
dış repoların dosya içeriği doğrulaması yine `search_code` üzerinden path/içerik araması ile
yapıldı. `openrouter.ai` bu oturumda da ağ proxy'si tarafından doğrudan engellendi
(`EGRESS_BLOCKED` hatası) — Tur 1 ve Tur 7'deki kısıtlamayla birebir aynı, ücretsiz katman yine
doğrulanamadı.

**Önemli gözlem:** Bu turun genel repo taramasında (`claude-code-plugin` topic'i, stars:>500),
sonuçların büyük bölümü Tur 3/5/6'da tespit edilen "şişirilmiş yıldız" deseniyle uyumluydu —
ör. `DietrichGebert/ponytail` (~140.7k yıldız / sadece 274 açık issue), `thedotmack/claude-mem`
(~94.1k yıldız / 198 issue), `ayghri/i-have-adhd` (~47.1k yıldız / 69 issue),
`shanraisshan/claude-code-best-practice` (~66k yıldız / 34 issue) — hepsi bu ölçekte organik
topluluk büyümesiyle uyumsuz yıldız/issue oranı gösteriyor, **hiçbiri eklenmedi**. Ayrıca
`mvanhorn/last30days-skill` (~62.2k yıldız) Reddit/X/Instagram/TikTok gibi platformları
"araştırma" amacıyla tarıyor — talimattaki ToS-bypass scraping dışlama kriterine girdiği için
(Tur 3'teki Agent-Reach ile aynı gerekçe) **bilerek eklenmedi**.

### A) MCP Sunucusu (resmi, proje-özel — Next.js 16 + Vercel ile birebir örtüşüyor)

#### 30. [vercel/next-devtools-mcp](https://github.com/vercel/next-devtools-mcp) — RESMİ (Vercel)
- **Yıldız:** 821 · **Fork:** 66 · **Açık issue:** 10 · **Lisans:** MIT
- **Güncellik:** Aktif, son güncelleme 2026-09-15; yıldız/issue/fork oranı organik (bu turdaki
  şişirilmiş-yıldız vakalarının aksine — küçük ama gerçek bir resmi araç).
- **Ne işe yarar:** `package.json`da doğrulandı: "Next.js development tools MCP server with
  stdio transport". `nextjs_index`/`nextjs_call` araçlarıyla çalışan Next.js dev server'ları
  keşfediyor ve sunucunun kendi MCP tool'larını (Next.js 16'nın yerleşik MCP desteği) proxy'liyor;
  ayrıca `browser_eval` ile tarayıcı otomasyonu köprüsü var. **Kod içinde birebir doğrulandı:**
  "Next.js MCP support requires Next.js 16+ where MCP is enabled by default" — bu şablonun
  `AGENTS.md`'de belirttiği tam sürüm (Next.js 16, App Router) ile birebir örtüşüyor; ayrıca
  `AGENTS.md`'nin "Bu Next.js sürümü training data'dan farklı, breaking change'lere dikkat et"
  uyarısıyla da doğrudan alakalı — bu MCP, çalışan dev server'ın GERÇEK API'sini sorgulayarak
  ajanın eski/yanlış Next.js bilgisine güvenmesini önlüyor.
- **Neden meşru:** Vercel'in kendi resmi GitHub organizasyonundan (`vercel/`), MIT lisanslı,
  kod tamamen açık, harici/paylaşımlı API key gerektirmiyor (tamamen yerel dev server'a bağlanıyor).
- **Kurulum:** `claude mcp add next-devtools npx next-devtools-mcp@latest` (veya MCP config'e
  ekleme) — yerel onay gerekir, API key gerekmez. `npm run dev` çalışırken kullanılabilir.

### B) Proje-Özel Araç (hedef site → design token, `INSPECTION_GUIDE.md` Phase 1 ile örtüşüyor)

#### 31. [Manavarya09/design-extract](https://github.com/Manavarya09/design-extract)
- **Yıldız:** 4.109 · **Fork:** 348 · **Açık issue:** 23 · **Lisans:** MIT (LICENSE dosyasında
  "Copyright (c) 2024 Manavarya Singh" doğrulandı)
- **Güncellik:** Aktif, son push 2026-09-16; yıldız/fork/issue oranı (11.8 yıldız/fork) bu turdaki
  şişirilmiş-yıldız vakalarının aksine makul/organik görünüyor; resmi ürün sitesi de var
  (designlang.app).
- **Ne işe yarar:** Tek komutla bir web sitesinin **tüm design sistemini** çıkarıyor — DTCG
  (Design Tokens Community Group) formatında semantic+primitive+composite token'lar, Tailwind v4
  ve shadcn/ui'a özel çıktı, Figma variables entegrasyonu, CSS sağlık denetimi, WCAG uyumluluk
  düzeltmeleri, Chrome eklentisi ve Claude Code/Cursor/Windsurf için MCP sunucusu. **Bu şablonun
  `docs/research/INSPECTION_GUIDE.md` Phase 1 (Visual Audit → Design Tokens) ve
  `DESIGN_TOKENS.md` çıktı adımıyla, ayrıca `AGENTS.md`'deki tam tech stack'iyle (Tailwind v4,
  shadcn/ui) birebir örtüşüyor** — hedef siteyi elle inceleyip token tablosu yazmak yerine bu
  araçla otomatik ilk taslak çıkarılabilir (yine de "gerçek içerik/pixel-perfect" ilkesi gereği
  çıktı elle doğrulanmalı).
- **Neden meşru:** MIT lisanslı, kaynağı tek bir geliştiriciye ait (doğrulanabilir profil +
  gerçek ürün sitesi), API key veya paylaşımlı servis gerektirmiyor (Playwright ile yerel/kendi
  makinende çalışıyor); "web-scraping" etiketi kullanıcının KENDİ hedeflediği (klonlamak istediği)
  siteyi taramasıyla ilgili, login duvarı arkasındaki üçüncü parti platform (X/Reddit) bypass'ı
  DEĞİL.
- **Kurulum:** `npx design-extract <url>` (kurulum gerektirmez) veya MCP sunucusu olarak
  `claude mcp add design-extract ...` ile ekle — yerel onay gerekir (npx paket çalıştırma / yeni
  MCP sunucusu), API key gerekmez. Node 20+ gerektiriyor.

---

## Tur 9 — 2026-09-17

Bu turda ilk kez `WebSearch`/`WebFetch` araçları çalışır durumdaydı (önceki turlarda bazı ticari
domain'ler ağ proxy'si tarafından engellenmişti). `openrouter.ai` ve `openrouter.zendesk.com`'a
doğrudan `WebFetch` bu turda da `EGRESS_BLOCKED` hatasıyla engellendi (Tur 1/7/8 ile aynı kısıtlama),
ancak `WebSearch` çalıştı ve birden fazla bağımsız üçüncü parti kaynaktan (klymentiev.com,
buldrr.com, costgoat.com, pricepertoken.com) tutarlı rakamlar elde edildi — bu yüzden OpenRouter
artık "birden fazla bağımsız kaynaktan çapraz doğrulanmış" (Tur 4'teki Cerebras/Cloudflare ile aynı
güvenilirlik seviyesi) statüsünde kataloğa eklenebildi. GitHub adaylarının repo sayfaları doğrudan
`WebFetch` ile teyit edildi (yıldız/fork/issue/lisans/dosya yapısı).

### A) Ücretsiz & Meşru API Sağlayıcısı

#### 32. [OpenRouter](https://openrouter.ai) `:free` model katmanı (resmi, çok sağlayıcılı)
- **Ücretsiz katman:** Kredi kartı GEREKTİRMİYOR — openrouter.ai/keys üzerinden email/GitHub ile
  kayıt, $0 bakiyeyle kullanılabiliyor. ID'si `:free` ile biten ~19-28 model (DeepSeek, Llama,
  Qwen, Mistral türevleri — liste zamanla döner/değişir). Limit: dakikada 20 istek her zaman;
  günlük limit toplam harcama geçmişine göre değişiyor — hiç ödeme yapılmamışsa 50 istek/gün,
  herhangi bir zamanda toplam $10+ ödeme yapılmışsa 1.000 istek/gün'e çıkıyor (tek seferlik
  deneme değil, kalıcı/tekrarlayan bir katman — başarısız istekler de günlük kotadan düşüyor).
- **Ne işe yarar:** Tek bir API key ile OpenAI-uyumlu endpoint üzerinden birden fazla açık modele
  erişim — Claude Code'un yanında ikincil/yedek model sağlayıcısı, özellikle model çeşitliliği
  gerektiren deneme/karşılaştırma işleri için (ör. farklı modellerin aynı prompt'a yanıtını
  karşılaştırma).
- **Neden meşru:** Her kullanıcı kendi email/GitHub hesabıyla kendi API key'ini alıyor
  (paylaşımlı key DEĞİL), resmi openrouter.ai ürünü, rakamlar birden fazla bağımsız kaynaktan
  çapraz doğrulandı. **Dikkat:** Bu oturumda resmi `openrouter.ai/docs` sayfasına doğrudan ağ
  erişimi engellendiği için birincil kaynaktan teyit edilemedi — kurulum öncesi resmi FAQ/rate-limit
  sayfasından güncel rakamları teyit et (ücretsiz model listesi zamanla değişiyor).
- **Kurulum:** openrouter.ai/keys üzerinden ücretsiz kayıt + key al, model ID'sinin sonuna `:free`
  ekleyerek OpenAI-uyumlu endpoint'e istek gönder. Yerel onay/gizli bilgi girişi gerekir, bu
  oturumdan otomatik yapılamaz.

### B) MCP Sunucuları (proje-özel faydalı)

#### 33. [JustasMonkev/mcp-accessibility-scanner](https://github.com/JustasMonkev/mcp-accessibility-scanner)
- **Yıldız:** 56 · **Fork:** 15 · **Açık issue:** 1 · **Lisans:** MIT
- **Güncellik:** 645 commit (`main`), 2025-01-26'dan beri aktif, son push 2026-09-16 — yıldız/
  issue oranı (56:1) organik büyümeyle uyumlu (bu kataloğun sık rastladığı şişirilmiş-yıldız
  deseninin aksine).
- **Ne işe yarar:** Playwright + axe-core tabanlı, gerçek kaynak kodu doğrulanmış (`src/`,
  `index.js`/`index.d.ts`, `cli.js`, `tests/`) bir MCP sunucusu — `scan_page`, `audit_site`,
  `scan_page_matrix`, `audit_keyboard`, `audit_screen_reader` araçlarıyla WCAG 2.0/2.1/2.2
  A/AA/AAA denetimi yapıyor. **Bu şablonun `docs/research/INSPECTION_GUIDE.md` Phase 2
  (Component Inventory → States/Interactions) ve genel erişilebilirlik doğrulama ihtiyacıyla
  örtüşüyor** — hem hedef siteyi hem kendi klonlanmış sonucu tarayarak karşılaştırmalı
  erişilebilirlik raporu çıkarabilir.
- **Neden meşru:** MIT lisanslı, tamamen açık ve incelenebilir kod, API key veya harici servis
  gerektirmiyor (yerel Playwright ile çalışıyor), gerçek entegrasyon testleri (`vitest.config.ts`)
  var.
- **Kurulum:** `git clone` + `npm install`, stdio MCP sunucusu olarak `claude mcp add
  accessibility-scanner ...` ile config'e ekle (veya Docker imajıyla çalıştır). Yerel onay
  gerekir, API key gerekmez.

#### 34. [cloudinary/mcp-servers](https://github.com/cloudinary/mcp-servers) — RESMİ (Cloudinary)
- **Yıldız:** 10 · **Fork:** 2 · **Açık issue:** 0 · **Lisans:** MIT
- **Güncellik:** Aktif; **dikkat:** yıldız sayısı çok düşük (yeni/niş bir resmi araç, henüz geniş
  benimsenme yok) — bu düşük sayı şişirilmiş-yıldız şüphesi YARATMIYOR (ki bu kataloğun asıl
  endişesi *yüksek* yıldıza karşı *düşük* issue oranıydı), ama tek başına "geniş topluluk kabul
  görmüş" da denemez; dahil etme gerekçesi resmi Cloudinary organizasyon hesabından (`cloudinary/`)
  gelmesi.
- **Ne işe yarar:** Cloudinary'nin resmi 5 MCP sunucusu (asset-management, environment-config,
  structured-metadata, analysis, mediaflows) — doğal dilde medya yükleme/dönüştürme/organize etme.
  **Bu şablonun `public/images/` ve `public/videos/` (hedef siteden indirilen asset'ler) akışıyla
  örtüşüyor** — indirilen görselleri toplu optimize etme/dönüştürme için kullanılabilir (Cloudinary
  hesabı ve kendi API key'ini gerektiriyor, ücretsiz katmanı ayrıca cloudinary.com/pricing'den
  doğrulanmalı — bu MCP'nin kendisi ücretsiz/açık kaynak ama ARKASINDAKİ Cloudinary servisi
  kendi ücretsiz/ücretli katmanına sahip).
- **Neden meşru:** Resmi Cloudinary GitHub organizasyonu, MIT lisanslı, README'de "Official
  Cloudinary MCP Servers" olarak tanımlanıyor, kod tamamen açık.
- **Kurulum:** İlgili paketi `npx` ile çalıştır veya Cloudinary'nin barındırılan MCP endpoint'ine
  bağlan (OAuth2 veya API key ile) — README'deki adımları takip et. Yerel onay + Cloudinary
  hesabı/API key girişi gerekir.

#### 35. [Vercel MCP](https://vercel.com/docs/mcp/vercel-mcp) — RESMİ (Vercel, barındırılan servis)
- **Doğrulama notu:** Bu bir GitHub deposu değil, Vercel'in resmi barındırılan (hosted) MCP
  servisi (`https://mcp.vercel.com`); yıldız/commit sayısı bu yüzden geçerli değil — doğrulama
  resmi vercel.com dokümantasyonu üzerinden yapıldı.
- **Ücretsiz katman:** Servisin kendisi ücretsiz (OAuth ile kendi Vercel hesabına bağlanıyor);
  altındaki Vercel deployment/hosting kendi ücretsiz Hobby planı limitlerine tabi (ayrıca
  vercel.com/pricing'den doğrulanmalı).
- **Ne işe yarar:** AI istemcisine (Claude Code dahil) OAuth ile güvenli erişim vererek Vercel
  proje/deployment/log/dokümantasyon sorgulamasını sağlıyor. **Bu şablonun `AGENTS.md`'de
  belirtilen "Deployment: Vercel" satırıyla birebir örtüşüyor** — deploy sonrası log/hata
  takibini veya proje ayarlarını doğal dille sorgulamak için kullanılabilir.
- **Neden meşru:** Vercel'in kendi resmi ürün dokümantasyonunda tanımlanmış, birinci taraf
  barındırılan servis; paylaşımlı erişim yok, her kullanıcı kendi Vercel hesabıyla OAuth yapıyor.
- **Kurulum:** Claude Code MCP config'ine `https://mcp.vercel.com` sunucusunu ekle, OAuth akışını
  tamamla — yerel onay gerekir, ayrı API key girişi gerekmez (OAuth).

### C) Doğrulanan ama EKLENMEYEN Bulgular (Tur 9)

- **Together AI, Novita AI** — kalıcı/tekrarlayan ücretsiz katman YOK (Together AI: sadece $5
  tek seferlik kayıt kredisi; Novita AI: $0.50 tek seferlik + referans kredisi) — Tur 4/5'teki
  "tek seferlik deneme kredisi" kriterine takılıp **eklenmedi**.
- **Chutes.ai** — "kalıcı ücretsiz" iddia ediyor ama Bittensor/kripto-sübvansiyonlu merkeziyetsiz
  bir compute pazarı; rate limit'leri "topluluk gücüyle" belirsiz/garantisiz — güvenilir bir
  "kalıcı" katman olarak kabul edilemeyecek kadar istikrarsız, **eklenmedi**.
- **microsoft/power-platform-skills** — gerçek `SKILL.md` ve `agents/`/`AGENTS.md` dosyaları
  doğrulandı (879 yıldız/179 fork/129 issue — organik oran), resmi Microsoft deposu. Ancak
  kapsamı Power Platform'a (canvas apps, power pages, power automate) özel — bu şablonun
  Next.js/web geliştirme kapsamıyla örtüşmüyor, bu yüzden ayrı madde açılmadı; ileride başka bir
  proje türü için referans olarak not edildi.
- **mylee04/claude-code-subagents** — gerçek `agents/**/*.md` dosyaları var ama sadece 32
  yıldız/4 fork — meşru ama Tur 1-8'deki kurulu koleksiyonlara (VoltAgent, wshobson, davepoon,
  0xfurai, numman-ali) anlamlı bir katkısı olmadığı için **eklenmedi**.
- Genel `topic:claude-code-skills` / `topic:claude-code-subagents` taramasında bulunan
  `jangviktor-web/nihaixia` (2.961★/1 issue), `ciembor/agent-rules-books` (2.801★/5 issue),
  `wondelai/skills` (2.193★/8 issue), `Weizhena/Deep-Research-skills` (2.174★/0 issue),
  `rohitg00/pro-workflow` (2.872★/29 issue) — hepsi klasik şişirilmiş-yıldız deseni gösteriyor
  (binlerce yıldıza karşı tek/çift haneli issue, 2026'nın son aylarında kurulmuş) — Tur 3/5/6/8'deki
  kriterle **eklenmedi**, tekrar araştırılmasın.
- SEO/favicon/SVG optimizasyonu için meşru bir MCP sunucusu bulunamadı — aramalar sadece
  sıfıra-yakın-yıldızlı, bakımsız veya tek-yazarlı "toy" repolar döndürdü, benimsenme sinyali
  yok — **eklenmedi**.

---

## Tur 10 — 2026-09-17

Oturum başında saat kontrol edildi: 10:05 UTC / 13:05 Türkiye saati — talimattaki 12:00 UTC / 15:00
Türkiye kesme noktasının ÖNCESİNDE, bu yüzden normal araştırma turu yapıldı (özet-moduna geçilmedi).
`WebSearch` çalıştı, ama `WebFetch` ile `huggingface.co` ve `jina.ai`'a doğrudan erişim yine
`EGRESS_BLOCKED` hatasıyla engellendi (Tur 1/7/8/9'daki ticari domain kısıtlamasıyla aynı desen) —
bu yüzden aşağıdaki Jina AI maddesi Tur 9'daki OpenRouter ile aynı yöntemle (birincil kaynak değil,
birden fazla bağımsız üçüncü parti kaynağın çapraz doğrulanmasıyla) doğrulandı; kurulum öncesi
resmi `jina.ai/reader` sayfasından rakamları teyit etmek gerekiyor.

`topic:claude-code-skill` (stars:>200) genel taraması 52 sonuç döndürdü ama hiçbiri üç kategoriye
(skill/agent koleksiyonu, ücretsiz API sağlayıcı) temiz bir şekilde uymuyordu — çoğu token/context
optimizasyon araçları, görsel üretim araçları veya not-alma sistemleri gibi kapsam dışı projelerdi;
**bilerek eklenmedi**. Özellikle `mksglu/context-mode` (23.319★/1.680 fork/253 issue — oran kendi
başına şişirilmiş-yıldız şüphesi yaratmıyor) dikkat çekti: "17 platform boyunca hook + MCP ile
routing zorluyor" açıklaması, Tur 6'daki `OthmanAdi/planning-with-files` bulgusundaki "çoklu-platform
otomatik-çalışan hook" risk profiliyle yüzeysel olarak örtüşüyor (kötü niyetli olduğuna dair KANIT
yok, sadece kapsam dışı + dosya içeriği bu oturumdan doğrulanamadı) — bu yüzden hem kapsam dışı
olduğu hem de ekstra doğrulama gerektirdiği için **bilerek eklenmedi**, ileride tekrar
değerlendirilecekse önce `search_code` ile hook dosyalarının içeriği tek tek okunmalı.
`topic:sitemap topic:seo mcp` taraması 0 sonuç döndürdü (Tur 9'daki SEO/favicon bulgusuz sonucuyla
aynı).

### A) Ücretsiz & Meşru API Sağlayıcısı (proje-özel faydalı — web içerik çıkarma)

#### 36. [Jina AI Reader](https://jina.ai/reader/) (`r.jina.ai`) — RESMİ, GitHub deposu değil
- **Doğrulama notu:** Barındırılan (hosted) bir API — GitHub yıldız/lisans doğrulaması geçerli
  değil; doğrulama birden fazla bağımsız kaynaktan (yangmao.ai, linkstartai.com, xpay.sh,
  makerstack.co) çapraz yapıldı (Tur 9'daki OpenRouter ile aynı güvenilirlik seviyesi).
- **Ücretsiz katman:** API key OLMADAN da çalışıyor (~20 istek/dk, gerçek ücretsiz hobi kullanımı
  için yeterli); ücretsiz key ile (jina.ai üzerinden kayıt, kredi kartı gerekmiyor) kayıt anında
  10 milyon token kredisi (Reader/embeddings/reranker arasında paylaşımlı) + 500 istek/dk (read)
  / 100 istek/dk (search) limiti.
- **Ne işe yarar:** Tek bir GET isteğiyle (`https://r.jina.ai/<hedef-url>`) herhangi bir web
  sayfasını temiz, LLM-dostu Markdown'a çeviriyor — JS render destekli. **Bu şablonun
  `clone-website` akışıyla (Tur 5'teki Firecrawl/crawl4ai ile aynı kategori — hedef siteden
  içerik çıkarma) birebir örtüşüyor**, ama MCP kurulumu bile gerektirmiyor: tek satır HTTP isteği.
- **Neden meşru:** Jina AI'nin resmi ürünü (bilinen bir "search foundation" şirketi — embeddings/
  reranker API'leriyle de tanınıyor), her kullanıcı isteğe bağlı kendi key'ini alıyor (paylaşımlı
  key DEĞİL), kullanım kullanıcının kendi hedef sitesini kazımasıyla ilgili — üçüncü parti
  platform (X/Reddit) login duvarı bypass'ı DEĞİL.
- **Kurulum:** Doğrudan kullanılabilir, kurulum gerekmez: `curl https://r.jina.ai/<url>` (key'siz,
  düşük limit) veya `Authorization: Bearer <jina-key>` header'ıyla (jina.ai'dan ücretsiz key alıp)
  yüksek limit. MCP olarak sarmalamak istersen bulunan wrapper depoları (`spences10/
  mcp-jinaai-reader` — 29★ ama ARŞİVLENMİŞ/bakımsız, `kealuya/mcp-jina-ai` — 9★, diğerleri 0-2★)
  hepsi çok küçük/bakımsız — bağımlılık olarak ÖNERİLMİYOR, düz HTTP isteği yeterli ve daha güvenli.

---

## Tur 11 — 2026-09-17

Oturum başında saat kontrol edildi: 11:05 UTC / 14:05 Türkiye saati — talimattaki 12:00 UTC / 15:00
Türkiye kesme noktasının ÖNCESİNDE, bu yüzden normal araştırma turu yapıldı. Bu oturumda ayrıca
önceki turlarda `master` dalına hiç push edilmemiş 11 commit'lik bir kuyruk bulundu (detached HEAD'de
kalmışlardı) — bu turun başında `master`'a fast-forward edilip `origin/master`'a push edildi, veri
kaybı yaşanmadı. `WebSearch` çalıştı; `WebFetch` ile ticari sağlayıcı dokümantasyon domain'lerine
(`inference-docs.cerebras.ai`, `console.groq.com`, `docs.cohere.com`) erişim yine Tur 1/7/8/9/10'daki
gibi `EGRESS_BLOCKED` hatasıyla engellendi — bu üç sağlayıcı da Tur 9/10'daki yöntemle (birden fazla
bağımsız üçüncü parti kaynağın çapraz doğrulanması) teyit edildi. `github.com` sayfalarına `WebFetch`
ile doğrudan erişim ise SORUNSUZ çalıştı (Tur 6-10'da GitHub MCP sunucusunun repo-scope kısıtlaması
nedeniyle sadece `search_code` ile dolaylı doğrulama yapılabiliyordu — bu turda ilk kez GitHub repo
sayfaları doğrudan `WebFetch` ile teyit edildi: yıldız/fork/issue/lisans birebir okunabildi).

### A) MCP Sunucusu / Skill (RESMİ — bu şablonun tech stack'iyle birebir örtüşüyor, önceki bir
maddeyi GÜNCELLİYOR)

#### 37. [shadcn-ui/ui](https://github.com/shadcn-ui/ui) — resmi `shadcn mcp` + `skills/shadcn/SKILL.md`
- **Yıldız:** 124.1k · **Fork:** 10.5k · **Açık issue:** 836 · **Lisans:** MIT — oran (148:1)
  bu ölçekte organik/köklü bir projeyle tutarlı (shadcn/ui zaten bu şablonun resmi UI kütüphanesi).
- **Ne işe yarar:** shadcn/ui artık MCP sunucusunu **kendi CLI'sine gömmüş durumda** — `npx shadcn
  mcp` (stdio) veya `npx shadcn mcp init` (Claude Code, Cursor, VS Code, OpenCode için otomatik
  config üretir) komutlarıyla çalışıyor. `WebFetch` ile `skills/shadcn/mcp.md` dosyası birebir
  doğrulandı: registry listeleme, fuzzy component arama, component/demo içeriği görüntüleme, kurulum
  komutu üretme ve **"audit checklist" (import/dependency/lint/TypeScript doğrulama)** araçları var.
  API key gerekmiyor. Ayrıca repo içinde `skills/shadcn/SKILL.md` + `cli.md` + `customization.md` +
  `registry.md` + `rules/` yapısıyla gerçek, resmi bir Claude Skill de bulunuyor — bu şablonun
  `AGENTS.md`'de belirttiği "shadcn/ui (Radix primitives, Tailwind v4)" tech stack'iyle birebir
  örtüşüyor.
- **Neden meşru:** shadcn/ui'ın kendi resmi organizasyon deposu (`shadcn-ui/`), MIT lisanslı, kod ve
  skill/MCP dosyaları tamamen açık; harici/paylaşımlı API key veya servis çağrısı yok.
- **Kurulum:** `npx shadcn mcp init` (mevcut Claude Code kurulumuna otomatik MCP config'i ekler) veya
  `skills/shadcn/SKILL.md` dosyasını `~/.claude/skills/` altına kopyala. Yerel onay gerekir
  (yeni MCP sunucusu / npx çalıştırma), API key gerekmez.
- **GÜNCELLEME NOTU (Tur 3 #16'yı değiştirmiyor, TAMAMLIYOR):** Tur 3'te eklenen
  `Jpisnice/shadcn-ui-mcp-server` (üçüncü parti, ~3.0k yıldız) hâlâ geçerli/kullanılabilir — özellikle
  Svelte/Vue/React Native gibi shadcn/ui'ın resmi CLI'sinin henüz tam kapsamadığı framework'ler için
  faydalı olabilir. Ama **React/Next.js için (bu şablonun kullandığı) artık önce resmi `shadcn mcp`
  denenmeli** — birinci taraf, bakımı garantili ve `components.json`'daki özel registry'leri de
  destekliyor.

### B) Ücretsiz & Meşru API Sağlayıcısı

#### 38. [Cohere Trial API Key](https://cohere.com/pricing) (resmi)
- **Ücretsiz katman:** Kredi kartı gerektirmeden, **süresi dolmayan** (tek seferlik deneme değil)
  bir "Trial" API key; ayda 1.000 çağrı limiti. Endpoint bazlı dakika limiti: Chat 20 istek/dk,
  Embed 5 istek/dk, Rerank 10 istek/dk. Birden fazla bağımsız kaynaktan (eesel.ai, pocketlantern.dev,
  codenote.net, itsfree.ai) çapraz doğrulandı.
- **Ne işe yarar:** Claude Code'un yanında ikincil model/embedding/rerank sağlayıcısı — ÖZELLİKLE
  Cohere'in rerank API'si RAG/arama sıralaması gerektiren araçlarda faydalı olabilir. **Önemli
  kısıtlama:** Trial key resmi olarak "prototip/geliştirme amaçlı" lisanslanmış, **production/ticari
  kullanım için AÇIKÇA yasaklanmış** — bu şablon gibi bir geliştirme/deneme ortamında kullanılması
  amaca uygun, ama üretime alınacak bir entegrasyona bu key ile gidilmemeli.
- **Neden meşru:** Resmi Cohere ürünü, her kullanıcı kendi hesabı ve kendi key'iyle kayıt oluyor
  (paylaşımlı key DEĞİL); kısıtlama (production yasağı) şeffaf şekilde belgelenmiş, gizli bir tuzak
  değil.
- **Kurulum:** dashboard.cohere.com üzerinden ücretsiz kayıt + Trial key al, ortam değişkeni olarak
  ekle — yerel onay/gizli bilgi girişi gerekir, bu oturumdan otomatik yapılamaz (bu sandbox'ta
  `docs.cohere.com`'a doğrudan ağ erişimi de kapalı, rakamlar bağımsız kaynaklardan çapraz
  doğrulanmıştır).

### C) ÖNEMLİ GÜNCELLEME — Daha Önce Eklenen Maddelerde Değişiklik Tespit Edildi

- **Tur 4 #21 (Cerebras Cloud API) ARTIK GEÇERSİZ — kredi kartsız ücretsiz katman KALDIRILDI.**
  Birden fazla bağımsız kaynak (toolfreebie.com, yangmao.ai, tokenmix.ai, pricepertoken.com) tutarlı
  şekilde doğruluyor: **16 Temmuz 2026 itibarıyla** Cerebras kalıcı ücretsiz katmanı kaldırdı, yeni
  hesaplar artık doğrulanmış bir ödeme yöntemi eklemeden kullanamıyor (karşılığında 30 gün geçerli
  $5 deneme kredisi + 5 istek/dk, 1M token/gün, ~64K bağlam limiti). **Sonuç:** Tur 4 #21 maddesi
  dosyada bilgi amaçlı bırakıldı ama artık "kredi kartı gerektirmeyen kalıcı ücretsiz katman"
  KRİTERİNİ KARŞILAMIYOR — kullanıcı bu kaynağı kurmadan önce mutlaka cloud.cerebras.ai/pricing'den
  güncel durumu teyit etmeli, "ücretsiz" beklentisiyle kart bilgisi girmemeli.
- **Tur 1 #5 (Groq API) KISMİ GÜNCELLEME — Llama modelleri ücretsiz katmandan kaldırıldı.**
  Birden fazla bağımsız kaynak (eesel.ai, pricepertoken.com, tokenmix.ai) doğruluyor: **16 Ağustos
  2026** itibarıyla Llama 3.3 70B ve Llama 3.1 8B Groq'un ücretsiz/geliştirici katmanından kaldırıldı,
  artık sadece kurumsal (enterprise) katmanda mevcut. Ücretsiz katman kredi kartsız/kalıcı olma
  özelliğini KORUYOR — GPT-OSS 120B (30 istek/dk, 1.000 istek/gün, 200K token/gün) ve GPT-OSS 20B
  gibi modeller hâlâ ücretsiz erişilebilir durumda. **Sonuç:** Tur 1 #5 maddesi genel olarak GEÇERLİ
  kalıyor (kalıcı, kredi kartsız katman hâlâ var) ama "Llama, GPT-OSS vb." ifadesi artık kısmen
  eskimiş — kurulum öncesi console.groq.com/docs/models'dan güncel model listesi teyit edilmeli.

---

## Tur 13 — 2026-09-18

Oturum başında saat kontrol edildi: 03:04 UTC / 06:04 Türkiye saati — talimattaki 12:00 UTC / 15:00
Türkiye kesme noktasının ÇOK ÖNCESİNDE, bu yüzden normal araştırma turu yapıldı. Doğrulama, bir alt
ajana devredilip (`mcp__github__search_repositories`/`search_code` + `WebSearch` ile) sonrasında bu
turun yazarı tarafından iki ana adayın (Figma-Context-MCP, styleseed) yıldız/fork/issue/lisans/dosya
verileri BAĞIMSIZ OLARAK TEKRAR doğrulandı (aşağıdaki rakamlar ikinci elden teyitli). `openrouter.ai`
ve `jina.ai`'a `WebFetch` bu turda da `EGRESS_BLOCKED` hatasıyla engellendi (Tur 1/7-11'deki
kısıtlamayla aynı) — Tur 9/10'da eklenen OpenRouter/Jina maddelerinin birincil kaynak doğrulaması
hâlâ bekliyor.

### A) MCP Sunucusu (proje-özel faydalı — önceki turlarda "bulunamadı" notu düşülen Figma/design-to-code boşluğunu dolduruyor)

#### 39. [GLips/Figma-Context-MCP](https://github.com/GLips/Figma-Context-MCP) ("Framelink")
- **Yıldız:** 15.871 · **Fork:** 1.261 · **Açık issue:** 25 · **Lisans:** MIT
- **Güncellik:** Kuruluş 2025-02, son push 2026-09-16 (dün) — yıldız/fork/issue oranı (635:1 yıldız/
  issue ama 1.261 gerçek fork ile birlikte) bu kataloğun sık rastladığı şişirilmiş-yıldız deseninden
  farklı: 1.000+ gerçek fork'lu, 1.5+ yıllık, aktif geliştirilen köklü bir proje — organik büyüme
  ile uyumlu.
- **Ne işe yarar:** Figma tasarım dosyalarındaki layout/spacing/font/component bilgisini doğrudan
  ajanın bağlamına akıtan bir MCP sunucusu — bir Figma tasarımından çerçeve-farkında (Next.js/
  Tailwind/shadcn) kod üretimini mümkün kılıyor. **Önceki turlarda (Tur 7) "Figma MCP alternatifleri
  yetersiz/şüpheli" notuyla açık bırakılan boşluğu dolduruyor** — bu şablonun hedef siteyi Figma
  tasarımından değil canlı siteden klonlaması senaryosunda doğrudan kullanılmasa da, kullanıcı
  hedef sitenin Figma kaynağına erişebiliyorsa (ör. kendi tasarımını klonlarken) `INSPECTION_GUIDE.md`
  Phase 1 (Design Tokens) çıkarımını hızlandırabilir.
- **Neden meşru:** Framelink.ai adlı gerçek bir ürünün arkasındaki resmi depo, MIT lisanslı, kod
  tamamen açık; kullanıcı kendi Figma hesabından kendi ücretsiz API key'ini alıyor (paylaşımlı key
  DEĞİL).
- **Kurulum:** `npx -y figma-developer-mcp --figma-api-key=<kendi-key'in>` ile MCP config'ine ekle
  — yerel onay + kendi Figma API key'ini girme gerekir (figma.com hesap ayarlarından ücretsiz alınır).

### B) Skill Koleksiyonu (bu şablonun tam tech stack'ine özel — nextjs/shadcn/tailwindcss/radix-ui repo topic'leriyle doğrulandı)

#### 40. [bitjaru/styleseed](https://github.com/bitjaru/styleseed)
- **Yıldız:** 956 · **Fork:** 87 · **Açık issue:** 8 · **Lisans:** MIT
- **Güncellik:** Kuruluş 2026-04-07, son push 2026-09-17 (dün) — oran (110:1 yıldız/issue, 87 gerçek
  fork) bu kataloğun tespit ettiği şişirilmiş-yıldız deseninden (binlerce yıldız/tek haneli issue)
  belirgin şekilde farklı; makul/organik görünüyor.
- **Ne işe yarar:** Repo topic'leri BİREBİR bu şablonun tech stack'iyle örtüşüyor —
  `nextjs`, `shadcn`, `shadcn-ui`, `tailwindcss`, `radix-ui`, `react`, `typescript`. 23 agent skill
  (47 gerçek `SKILL.md` dosyası `skills/ss-*/SKILL.md` altında `search_code` ile birebir doğrulandı:
  `ss-tokens`, `ss-component`, `ss-a11y`, `ss-audit`, `ss-page`, `ss-motion`, `ss-review` vb.) —
  sabit tasarım yargısı, semantic renk/tipografi token'ları, component pattern kütüphanesi,
  erişilebilirlik denetimi, kanıt-doğrulamalı UI review akışı sunuyor. **Bu şablonun `AGENTS.md`
  "Design Principles" (pixel-perfect emulation, beauty-first) ve `INSPECTION_GUIDE.md` Phase 1-2
  ile doğrudan örtüşüyor.**
- **Neden meşru:** MIT lisanslı, gerçek ve tutarlı `skills/ss-*/SKILL.md` dosya ağacı (README
  iddiası değil, `search_code` ile path bazında doğrulandı), demo sitesi var
  (styleseed-demo.vercel.app), Tur 6/10'daki manipülatif-hook deseni (bkz. aşağıdaki Tur 13 güvenlik
  notu) için özellikle kontrol edildi — bulunamadı.
- **Kurulum:** İlgili `skills/ss-*/SKILL.md` klasörlerini `~/.claude/skills/` altına kopyala ya da
  reponun kendi plugin mekanizmasını kullan. Yerel dosya kopyalama, onay gerekmez.

### C) Ücretsiz & Meşru API Sağlayıcısı

#### 41. [Nebius AI Studio (Token Factory)](https://nebius.com/services/token-factory) ücretsiz model katmanı (resmi)
- **Doğrulama notu:** GitHub deposu değil, resmi barındırılan API — bu oturumda `nebius.com`'a
  doğrudan `WebFetch` engellendi (Tur 1/7-11'deki ticari domain kısıtlamasıyla aynı desen), rakamlar
  birden fazla bağımsız üçüncü parti kaynaktan çapraz doğrulandı (Tur 9/10'daki OpenRouter/Jina ile
  aynı güvenilirlik seviyesi) — kurulum öncesi resmi studio.nebius.com sayfasından teyit edilmeli.
- **Ücretsiz katman:** Kredi kartı gerektirmeden, OpenAI-uyumlu endpoint (`api.studio.nebius.com/v1`)
  üzerinden iki büyük açık modele (Meta-Llama-3.3-70B-Instruct, Qwen3-235B-A22B) SÜREKLİ/tekrarlayan
  ücretsiz erişim — bu, şirketin ayrı $1'lık tek seferlik deneme kredisinden FARKLI, kalıcı bir
  katman (kullanım geçmişine göre yükselen katman bazlı rate limit — paylaşımlı key değil, standart
  kötüye-kullanım-önleme deseni).
- **Ne işe yarar:** Claude Code'un yanında GPT-4 sınıfı açık model erişimi sunan ikincil/yedek
  sağlayıcı — Tur 1'deki Groq, Tur 4'teki Cloudflare Workers AI ile aynı kategori (hızlı
  sınıflandırma, taslak üretimi, içerik üretimi gibi düşük-riskli yardımcı işler için).
- **Neden meşru:** Nebius, Yandex Cloud'dan ayrılan gerçek bir Avrupa bulut şirketi, resmi ürün
  sayfası; her kullanıcı kendi hesabı ve kendi key'iyle kayıt oluyor.
- **Kurulum:** studio.nebius.com üzerinden ücretsiz kayıt + key al, ortam değişkeni olarak ekle —
  yerel onay/gizli bilgi girişi gerekir, bu oturumdan otomatik yapılamaz.

### D) Doğrulanan ama EKLENMEYEN Bulgular (Tur 13)

- **⚠️ [athola/claude-night-market](https://github.com/athola/claude-night-market)** (336★/35
  fork/21 issue, 215 gerçek `SKILL.md` dosyası doğrulandı) — **manipülatif hook nedeniyle
  bilerek eklenmedi.** `plugins/leyline/hooks/auto-star-repo.sh` adlı bir hook, kullanıcının
  repoyu yıldızlayıp yıldızlamadığını kontrol ediyor ve yıldızlamamışsa Claude'un BİR SONRAKİ
  yanıtında kullanıcıdan proaktif olarak repoyu yıldızlamasını İSTEMESİ için bir talimat
  enjekte ediyor. Bu, ajan çıktısını kullanıcının gerçek niyeti olmadan manipüle eden bir
  desen — Tur 6'daki `OthmanAdi/planning-with-files` bulgusuyla AYNI kategoride (hook'ların
  ajan davranışını kullanıcı bilgisi/onayı dışında değiştirmesi), ama daha düşük şiddette
  (shell/PowerShell çalıştırmıyor, sadece kendini-tanıtım metni enjekte ediyor). Kod kalitesi
  başka yerlerde iyi olsa da (ör. `permission_request.py` içinde `curl|bash` engelleme) bu
  tek başına "meşru kaynak" kataloğu için diskalifiye edici.
- **cbrock84/headcount** (1.608★, 238 fork, sadece **2** açık issue, ~3 hafta önce kurulmuş) —
  Tur 3/5/6/8'deki "binlerce yıldız/tek haneli issue" şişirilmiş-yıldız deseniyle uyumlu; gerçek
  fork sayısı yüksek olsa da (238) 3 haftalık bir repo için bu oran yeterince şüpheli —
  **bilerek eklenmedi**, ileride yıldız geçmişi ayrıca doğrulanmadan tekrar değerlendirilmesin.
- **adityaarsharma/librecrawl-technical-seo-audit-mcp** (40★) — en az 6 farklı GitHub hesabında
  (VarunAtZethic, PhialsBasement, amedipiran, jamie-dit, jirehnet/SiteCrawlAudit, swang62/
  seo-crawler) BİREBİR AYNI pazarlama metniyle mirror/kopya bulundu — Tur 6'daki
  `OthmanAdi/planning-with-files` bulgusundaki "koordineli görünürlük şişirme" işaretiyle aynı
  desen. MCP wrapper'ın kendisi zararsız görünse de bu belirsizlik nedeniyle **bilerek eklenmedi**.
- **GetBindu/awesome-claude-code-and-skills** (192★), **obviousworks/Claude-AI-skills-collection-2026**
  (55★) — `filename:SKILL.md` araması SIFIR sonuç döndürdü; ikisi de sadece başka depolara
  (çoğunlukla zaten kataloglanmış `anthropics/skills`, `obra/superpowers`) link veren meta-dizin —
  gerçek skill dosyası yok, **eklenmedi**.
- **aiskillstore/marketplace** (427★, "security-audited" iddiası) — 6.512 `SKILL.md` bulgusu var
  ama farklı/ilgisiz yazarların (Tur 5'te zaten reddedilen `sickn33/*` dahil) içeriğini toplu
  mirror'layan bir agregatör; "security-audited" iddiası bu oturumdan doğrulanamadı — **eklenmedi**.
- **g-battaglia/mcp-seo** (1★), **vdalhambra/siteaudit-mcp** (5★/0 issue),
  **undirectlookable/svgo-mcp** (0★), **elliotxx/favicon-mcp-server** (4★) — Tur 9'daki
  "SEO/favicon/SVG için meşru MCP bulunamadı" notuyla aynı sonuç: gerçek ama neredeyse sıfır
  topluluk doğrulaması olan tek-yazarlı "toy" repolar — **eklenmedi**, gelecekte benimsenme
  artarsa tekrar bakılabilir.
- **hellolucky/v0-mcp** (20★) — Vercel v0 API'sini MCP olarak sarmalıyor ama v0 API kullanımı
  ÜCRETLİ (ücretsiz katman değil) — talimatın "ücretsiz" kriterine uymadığı için **eklenmedi**
  (bilgi amaçlı not: proje-özel ilginç ama ücretsiz değil).
- **xAI Grok API** — ücretsiz katman Mayıs 2025'te sona erdi, mevcut "ücretsiz" yol ödeme
  yöntemi + veri paylaşım programına (prompt'ların eğitim için kullanılması karşılığı
  $150/ay kredi) zorunlu kayıt gerektiriyor — "koşulsuz gerçekten ücretsiz" kriterine
  uymuyor, **eklenmedi**.
- **Perplexity Sonar API** — ücretsiz katman yok, key almak için bile ödeme yöntemi gerekiyor
  — **eklenmedi**.
- **Fireworks AI, Baseten** — sadece tek seferlik kayıt kredisi ($1-$30), tekrarlayan ücretsiz
  katman yok — Tur 4/5/9'daki kriterle **eklenmedi**.
- **HuggingFace Inference Providers ücretsiz katmanı** — gerçek ama ayda sadece $0.10 kredi,
  pratik kullanım için önemsiz — **eklenmedi**.

---

## ⚠️ Tur 13 GÜVENLİK BULGUSU — Manipülatif Hook (Tur 6'dan farklı, daha düşük şiddette)

### [athola/claude-night-market](https://github.com/athola/claude-night-market) — DİKKAT, "auto-star" hook'u kurmadan sil

Yukarıdaki "eklenmedi" notuna ek olarak ayrıca vurgulanıyor: bu repo Tur 6'daki
`OthmanAdi/planning-with-files` kadar tehlikeli değil (shell/PowerShell çalıştırmıyor), ama
`plugins/leyline/hooks/auto-star-repo.sh` dosyası **Claude'un kendi yanıtına, kullanıcının
gerçek niyeti olmadan, repoyu yıldızlaması için bir istek enjekte ediyor** — bu, ajan çıktısının
kullanıcı bilgisi dışında bir üçüncü taraf (repo sahibi) lehine manipüle edilmesi anlamına geliyor.
Kullanıcıya: bu depo veya benzer "otomatik yıldızlama isteği enjekte eden" hook'lar içeren
herhangi bir skill/plugin kurulmadan önce `hooks/` klasörü elle incelenmeli.

---

---

## Tur 14 — 2026-09-18

Oturum başında saat kontrol edildi: 04:04 UTC / 07:04 Türkiye saati — talimattaki 12:00 UTC / 15:00
Türkiye kesme noktasının ÇOK ÖNCESİNDE, bu yüzden normal araştırma turu yapıldı. Bu turda bu
oturumun GitHub erişimi tek repoya kilitliydi (bkz. yukarıdaki metodoloji notu), bu yüzden doğrulama
bir alt ajana devredilip tamamen `WebSearch` + `WebFetch` (GitHub'ın normal web sayfaları — repo ana
sayfası, `/commits`, `/graphs/contributors`, yazar profilleri — ve `raw.githubusercontent.com` ham
README'leri) üzerinden yapıldı; `api.github.com` JSON uç noktası da bu repoya kilitliydi. `z.ai` /
`docs.z.ai` domain'lerine bu oturumdan `WebFetch` yine engellendi (Tur 1/7-11/13'teki ticari domain
kısıtlamasıyla aynı desen) — 4 bağımsız üçüncü parti kaynaktan çapraz doğrulama yapıldı.

### A) Keşif/Dizin Kaynağı (kurulum değil, referans)

#### 42. [travisvn/awesome-claude-skills](https://github.com/travisvn/awesome-claude-skills) — DİKKAT: liste/keşif deposu
- **Yıldız:** ~15,1k · **Fork:** ~2,0k · **Açık issue:** 46 · **Lisans:** belirtilmemiş (çoğu
  awesome-list gibi ayrı `LICENSE` dosyası yok — kendi SKILL.md dosyasını barındırmıyor zaten,
  sadece linkliyor, bu yüzden lisans belirsizliği engelleyici değil)
- **Güncellik:** 3 bağımsız üçüncü taraf kaynağı (ecosyste.ms, skillsllm.com, c-sharpcorner) yıldız
  sayısını çapraz doğruladı — zaman içinde organik büyüme izliyor, ani sıçrama yok.
- **Ne işe yarar:** Anthropic'in resmi skill'lerini ve topluluk skill'lerini (`playwright-skill`,
  `ios-simulator-skill`, `ffuf-web-fuzzing`, Tur 1'deki `obra/superpowers` dahil 20+ koleksiyon)
  kategorize eden küratörlü keşif listesi — Tur 2'deki ComposioHQ ve Tur 3'teki punkpeye
  kataloglarıyla aynı kategoride ama özellikle skill'lere (genel MCP'ye değil) odaklanıyor.
- **Neden meşru:** Repoda aktif "Skill Verification" ve "Skill Additions" adlı GitHub Discussions
  kategorileri var — eklenen her skill bir doğrulama sürecinden geçiyor, rastgele link çöplüğü değil.
- **Kurulum:** Doğrudan kurulum yok — ilgini çeken linke git, ORADAKİ deponun kendi lisans/güncellik
  durumunu ayrıca doğrula, sonra normal skill kurulumunu (dosya kopyalama / `npx skills add`) uygula.

### B) Agent / Subagent Koleksiyonu

#### 43. [dl-ezo/claude-code-sub-agents](https://github.com/dl-ezo/claude-code-sub-agents)
- **Yıldız:** 185 · **Fork:** 31 · **Açık issue:** 0 · **Lisans:** MIT
- **Güncellik:** ⚠️ Son commit 2025-07-30 (~14 ay önce) — proje "tamamlanmış" olarak sunuluyor,
  aktif geliştirme yavaş/durmuş görünüyor. Ancak şişirilmiş yıldız paterni YOK (185★/31 fork, düşük
  ama tutarlı oran) — sadece düşük aktivite, şüpheli değil.
- **Ne işe yarar:** Uçtan uca yazılım geliştirme yaşam döngüsünü (gereksinim analizi → mimari →
  implementasyon → proje yönetimi → deployment) kapsayan, `project-orchestrator` merkezli 35 gerçek
  uzman subagent `.md` dosyası (`requirements-analyst.md`, `system-architect.md`,
  `code-reviewer.md` vb. doğrulandı) — `AGENTS.md`'deki "agent team'leri worktree'lerde çalıştır,
  orkestratör rolü" talimatıyla birebir örtüşen bir orkestrasyon deseni sunuyor.
- **Neden meşru:** Yazar profilinde 5 gerçek repo var (ör. `mcp-server-miro`, AsyncAPI/OpenAPI model
  üretici `modelina` fork'u), gerçek GitHub achievement rozetleri, şişirme paterni olmayan tutarlı
  takipçi/yıldız oranı.
- **Kurulum:** `agents/` klasöründeki `.md` dosyalarını `~/.claude/agents/` veya proje
  `.claude/agents/` altına kopyala. Yerel dosya kopyalama, onay gerekmez. Kurulum öncesi 14 aylık
  güncellik boşluğunu göz önünde bulundur.

### C) MCP Sunucuları (proje-özel faydalı — design token / renk / görsel optimizasyon)

#### 44. [Kargatharaakash/website-design-systems-mcp](https://github.com/Kargatharaakash/website-design-systems-mcp)
- **Yıldız:** 16 · **Fork:** 2 · **Açık issue:** 0 · **Lisans:** MIT
- **Güncellik:** Son commit 2026-02-13 — aktif bakım, gerçek `src/` + `package.json` +
  `CONTRIBUTING.md` + `CHANGELOG.md` içeren TypeScript proje yapısı.
- **Ne işe yarar:** Bir website URL'sinden **tarayıcı gerektirmeden** komple tasarım sistemini
  (renk paleti, tipografi, spacing, border-radius, shadow, CSS custom properties) çıkarıp doğrudan
  bir AI-okuyucu `skill.md` dosyası üretiyor. Araçları: `extract_design_system`, `validate_url`,
  `get_site_colors`, `get_site_typography`. **Bu şablonun `docs/research/INSPECTION_GUIDE.md`
  Phase 1 (Visual Audit → Design Tokens) ve Phase 5 (`DESIGN_TOKENS.md` çıktısı) adımlarını neredeyse
  birebir otomatikleştiriyor** — Tur 8'deki `Manavarya09/design-extract` (#31) ile aynı kategoride
  ama farklı/bağımsız bir implementasyon, ikisi karşılaştırılıp tercih edilebilir.
- **Neden meşru:** Yazar (Kargatharaakash) 43 gerçek repo, doğrulanmış Twitter/LinkedIn/
  StackOverflow/Medium hesapları; en popüler diğer projesi `stitch-mcp` 123★/28 fork ile tutarlı
  bir geliştirici profili gösteriyor.
- **Kurulum:** `claude mcp add design-systems -- npx -y website-design-systems-mcp` (npm paketi
  mevcut) veya `.mcp.json`'a stdio server olarak ekleme. Yerel onay gerekir, API key gerekmez.

#### 45. [x51xxx/coolors-mcp](https://github.com/x51xxx/coolors-mcp)
- **Yıldız:** 3 · **Fork:** 0 · **Açık issue:** 0 · **Lisans:** MIT
- **Güncellik:** Son commit 2026-05-20 — en taze bulunan kaynak, aktif geliştiriliyor. Düşük yıldız
  sayısı şişirme paterni DEĞİL, gerçekten yeni/niş bir proje olmasından kaynaklanıyor (Tur 2'deki
  #12 Chrome DevTools MCP gibi köklü büyük projelerin aksine, erken aşama — kurulum öncesi kendi
  gözlemini yap).
- **Ne işe yarar:** Görüntüden dominant renk çıkarma, Material Design 3 tonal palet üretimi,
  WCAG/APCA kontrast kontrolü, renk körlüğü simülasyonu, CSS/SCSS/Tailwind/W3C DTCG token export —
  #44 (design-systems-mcp) ile birlikte kullanılırsa hedef sitenin renk sistemini çıkarma + bu
  şablonun shadcn/Tailwind v4 oklch token'larına dönüştürme işini tamamlıyor.
- **Neden meşru:** Yazar Taras Trishchuk (Softjourn Inc.), 51 gerçek repo, kişisel portfolyo sitesi
  (trishchuk.com), başka doğrulanabilir MCP projeleri (`gemini-mcp-server`, `kimi-mcp-server`,
  `codex-mcp-tool`).
- **Kurulum:** npm paketi olarak `.mcp.json`'a stdio server ekleme. Yerel onay gerekir, API key
  gerekmez.

#### 46. [piephai/mcp-image-optimizer](https://github.com/piephai/mcp-image-optimizer)
- **Yıldız:** 12 · **Fork:** 2 · **Açık issue:** 0 · **Lisans:** MIT
- **Güncellik:** ⚠️ Son commit 2025-10-21 (~11 ay önce, dependabot merge) — aktif ama yavaş bakımlı.
- **Ne işe yarar:** Sharp tabanlı; URL veya yerel dosyadan resize/crop, JPEG/PNG/WebP/AVIF/TIFF
  format dönüşümü, akıllı (attention-detection) crop, watermark, favicon üretimi, lazy-load için
  low-quality placeholder — bu şablonun `scripts/` asset indirme adımından sonra `public/images/`
  optimizasyonu için doğrudan kullanılabilir.
- **Neden meşru:** Yazarın 24 gerçek repo'su var (ör. `V2Ray` dokümantasyonu 30★), gerçek
  achievement rozetleri, tutarlı commit geçmişi.
- **Kurulum:** `claude mcp add image-optimizer -- npx -y mcp-image-optimizer`. Yerel onay gerekir,
  API key gerekmez.

### D) Ücretsiz & Meşru API Sağlayıcısı

#### 47. Z.ai (Zhipu) GLM Flash modelleri ücretsiz katmanı (resmi)
- **Doğrulama notu:** GitHub deposu değil, resmi barındırılan API — bu oturumda `z.ai`/`docs.z.ai`'a
  doğrudan `WebFetch` engellendi (Tur 1/7-11/13'teki ticari domain kısıtlamasıyla aynı desen),
  rakamlar 4 bağımsız üçüncü parti kaynaktan (freellmapi.co, free-llm.com, yangmao.ai,
  developer.puter.com) çapraz doğrulandı — kurulum öncesi resmi `z.ai`/`bigmodel.cn` sayfasından
  teyit edilmeli (Tur 9/10/13'teki OpenRouter/Jina/Nebius ile aynı güvenilirlik seviyesi).
- **Ücretsiz katman:** GLM-4.5-Flash, GLM-4.7-Flash (metin) ve GLM-4.6V-Flash (vision/multimodal)
  resmi fiyatlandırma tablosunda input/cached-input/output için **$0** olarak listeleniyor. API key
  oluşturmak kredi kartı istemiyor; kendi API key'inle rate-limitli ama kalıcı (tek seferlik deneme
  kredisi DEĞİL) bir ücretsiz katman.
- **Ne işe yarar:** Bu şablonda görsel tarama/analiz gerektiren adımlarda (ör. hedef sitenin ekran
  görüntüsünü yorumlama, çok modlu tasarım analizi) GLM-4.6V-Flash vision modeli; genel kod/metin
  üretiminde GLM-4.5-Flash/4.7-Flash kullanılabilir — mevcut kataloğa (Groq #5, Gemini #6,
  Mistral #14, SambaNova #27, OpenRouter #32, Cohere #38, Nebius #41) ek bir bağımsız ücretsiz
  sağlayıcı çeşitliliği katıyor, özellikle vision/multimodal tarafında boşluk dolduruyor.
- **Neden meşru:** Zhipu AI / Z.ai, gerçek ve tanınan bir Çinli AI şirketi (GLM model ailesinin
  geliştiricisi), resmi fiyatlandırma sayfası; her kullanıcı kendi hesabı ve kendi key'iyle kayıt
  oluyor, paylaşımlı key yok. Not: veri işleme Çin merkezli bir şirket üzerinden gerçekleşiyor —
  hassas/özel proje verisi için kullanmadan önce kendi gizlilik politikanı değerlendir.
- **Kurulum:** Z.ai API Platform'da ücretsiz kayıt → API Keys sayfasından key oluştur →
  OpenAI-uyumlu SDK/REST endpoint ile `GLM-4.5-Flash` model adını çağır. Yerel onay/gizli bilgi
  girişi gerekir, bu oturumdan otomatik yapılamaz.

### E) Doğrulanan ama EKLENMEYEN Bulgular (Tur 14)

- **RichardDillman/seo-audit-mcp** (0★, 1 commit) — sadece "job board" siteleri için optimize
  edilmiş dar kapsamlı bir araç, genel amaçlı SEO/performans denetimi için yeterli olgunlukta değil.
  Tur 8'deki `danielsogl/lighthouse-mcp-server` (#29) zaten bu ihtiyacı karşılıyor — **eklenmedi**.
- **glorynguyen/gsap-mcp** (4★/0 fork/0 issue) — iddia edilen "60fps-optimized production kod" için
  yeterli topluluk doğrulaması/kullanım kanıtı yok; şüpheli değil ama fazla ham/erken aşamada —
  **eklenmedi**, ileride tekrar bakılabilir.
- **vdalhambra/siteaudit-mcp, g-battaglia/mcp-seo** — Tur 13'te zaten reddedilmişti, aramada tekrar
  çıktı, tekrar incelenmedi — **eklenmedi**.

---

## Tur 15 — 2026-09-18

Oturum başında saat kontrol edildi: 05:06 UTC / 08:06 Türkiye saati — talimattaki 12:00 UTC / 15:00
Türkiye kesme noktasının ÇOK ÖNCESİNDE, bu yüzden normal araştırma turu yapıldı. Doğrulama bir alt
ajana devredildi; Tur 14'ün notu doğrulandı — bu oturumun GitHub MCP arama araçları
(`mcp__github__search_repositories`/`search_code`) da tek-repo kısıtlamasına tabi olduğu için hiç
kullanılmadı, doğrulama tamamen `WebSearch` + `WebFetch` (GitHub web sayfaları, `/commits/main`,
`raw.githubusercontent.com`) + bağımsız üçüncü parti kaynaklar üzerinden yapıldı. `vercel.com` ve
`community.vercel.com`'a doğrudan `WebFetch` bu turda da engellendi (Tur 1/7-11/13/14'teki ticari
domain kısıtlamasıyla aynı desen) — Vercel AI Gateway rakamları 4+ bağımsız üçüncü parti kaynaktan
çapraz doğrulandı.

### A) MCP Sunucusu (proje-özel faydalı — `src/components/icons.tsx` "Extracted SVG icons" akışı)

#### 48. [better-auth/better-icons](https://github.com/better-auth/better-icons)
- **Yıldız:** ~1.3k · **Fork:** 55 · **Açık issue:** 2 · **Lisans:** MIT
- **Güncellik:** Son commit 2026-04-02 (`/commits/main` ile doğrulandı) — commit geçmişi
  Ocak 2026'da yoğun, sonrasında seyrek; küçük/olgunlaşmış bir araç için normal, şişirilmiş yıldız
  paterni DEĞİL.
- **Ne işe yarar:** 150+ koleksiyondan (Lucide, Heroicons, Material Design, Tabler vb.) 200.000+
  ikonu arayıp doğrudan proje dosyasına (SVG/React/Vue/Svelte) yazan MCP sunucusu + Claude Code
  skill'i — inline yapıştırma yerine gerçek dosya güncelliyor. **Bu şablonun `AGENTS.md`'de
  belirtilen `src/components/icons.tsx` ("Extracted SVG icons as React components") akışıyla
  birebir örtüşüyor** — hedef siteden çıkarılan ikonları shadcn/Lucide muadilleriyle
  değiştirirken/tamamlarken doğrudan kullanılabilir.
- **Neden meşru:** Yayıncı organizasyonu doğrulandı — gerçek `better-auth` (framework-agnostik
  TypeScript auth kütüphanesi, ~30k yıldız) organizasyonunun kendi deposu, isim benzetmesi/namesquat
  DEĞİL. `hooks/postinstall/auto-star` gibi şüpheli davranış için kod ayrıca kontrol edildi —
  bulunamadı, temiz kurulum.
- **Kurulum:** `npx skills add better-auth/better-icons` (skill) veya
  `npm install -g better-icons` + `npx better-icons setup` (MCP) ya da `.mcp.json`'a
  `{"command":"npx","args":["-y","better-icons"]}` ekleme. Yerel onay gerekir, API key gerekmez.

### B) Agent / Skill Koleksiyonu (karma — dikkatli değerlendirildi)

#### 49. [rohitg00/awesome-claude-code-toolkit](https://github.com/rohitg00/awesome-claude-code-toolkit)
- **Yıldız:** ~2.6k · **Fork:** 963 · **Açık issue:** 18 · **Açık PR:** 310 · **Lisans:** Apache 2.0
- **Güncellik:** Mart 2026'da güncellendi, aktif.
- **Ne işe yarar:** Hem karma-dizin hem gerçek içerik: `agents/` altında 10 kategoride 135 gerçek
  agent `.md` dosyası, `skills/` altında 35 küratörlü skill şablonu, ayrıca `plugins/`, `commands/`,
  `rules/`, `templates/` ve `hooks/` (20 yaşam-döngüsü script'i) içeriyor.
- **Neden meşru (özellikle kontrol edildi):** Bu desen (`hooks/` klasörü içeren büyük koleksiyon)
  Tur 6'daki `OthmanAdi/planning-with-files` ve Tur 13'teki `athola/claude-night-market` ile aynı
  risk kategorisine girdiği için `hooks/hooks.json` kaydı özellikle incelendi — 20 hook'un tamamı
  meşru geliştirme koruma script'leri (`secret-scanner.js`, `commit-guard.js`, `lint-fix.js`,
  `type-check.js`, `auto-test.js`, oturum başlangıç/bitiş bağlam yükleyicileri) — **otomatik
  yıldızlama, kendini-tanıtım enjeksiyonu veya telemetri YOK**. `setup/install.sh` de ayrıca
  okundu: sadece yerel dosya kopyalıyor, her adımda onay istiyor, uzaktan kod çalıştırma veya git
  config değişikliği yok. README'deki "SkillKit üzerinden 400.000+ ek skill" iddiası harici bir
  pazar yerine referans — depoya gömülü DEĞİL, bu iddiaya şüpheyle yaklaşılmalı.
- **Kurulum:** `curl -fsSL https://raw.githubusercontent.com/rohitg00/awesome-claude-code-toolkit/main/setup/install.sh | bash`
  (incelendi, temiz — yine de pipe edilen script'i kurmadan önce okumak her zaman daha güvenli) veya
  sadece istediğin `agents/*.md` / `skills/*` dosyalarını elle `.claude/agents/` ve `.claude/skills/`
  altına kopyala.

### C) Ücretsiz & Meşru API Sağlayıcısı (yeni kategori — Vercel deployment stack'iyle örtüşüyor)

#### 50. [Vercel AI Gateway](https://vercel.com/ai-gateway) ücretsiz katmanı (resmi)
- **Doğrulama notu:** `vercel.com`/`community.vercel.com`'a bu oturumdan doğrudan `WebFetch`
  engellendi (önceki turlardaki ticari domain kısıtlamasıyla aynı desen); rakamlar TrueFoundry,
  costbench.com, continuumcode.ai, yangmao.ai ve Vercel'in kendi topluluk forumundaki bir başlıktan
  çapraz doğrulandı — kurulum öncesi resmi `vercel.com/ai-gateway` sayfasından teyit edilmeli.
- **Ücretsiz katman:** Her Vercel takım hesabına ayda **$5 AI Gateway kredisi**, ilk istekle
  başlıyor ve her 30 günde bir **süresiz olarak yenileniyor** (ek ücretli kredi satın alınmadığı
  sürece kalıcı) — bu, kataloğun "tek seferlik deneme kredisi değil, tekrarlayan katman" kriterini
  karşılıyor. Ücretsiz katman modelleri arasında GPT-OSS 120B, Gemini 2.5 Flash, Llama 4 Maverick,
  DeepSeek V3.2, Qwen/GLM/Kimi varyantları var.
- ⚠️ **Belirsizlik dürüstçe işaretleniyor:** Kaynaklar kredi kartı gerekip gerekmediği konusunda
  çelişiyor — bazıları "sadece email, kart yok" derken, Vercel Community forumundaki bir başlık
  ("AI Gateway free credits on Hobby without a credit card?") Hobby planında kart doğrulaması
  gerekebileceğini düşündürüyor. Bu oturumdan `vercel.com` doğrudan doğrulanamadığı için net
  değil — kayıt sırasında teyit edilmeli.
- **Ne işe yarar:** Bu şablon zaten Vercel'e deploy ediliyor (`AGENTS.md` "Deployment: Vercel") —
  AI Gateway kredisi, Groq/Gemini/Mistral/Nebius/Z.ai'den farklı, deployment stack'iyle doğal olarak
  örtüşen tamamlayıcı bir ücretsiz sağlayıcı kategorisi ekliyor.
- **Kurulum:** Vercel hesabında AI Gateway'i takım için etkinleştir, OpenAI-uyumlu endpoint'i kendi
  AI Gateway API key'inle kullan. Yerel onay/gizli bilgi girişi gerekir; kredi kartı gereksinimini
  kayıt sırasında ayrıca doğrula.

### D) Doğrulanan ama EKLENMEYEN Bulgular (Tur 15)

- **Microck/font-mcp** (9★/1 fork/0 issue, MIT) — **bilerek eklenmedi.** "Font Hunter v2" özelliği
  font dosyalarını GitHub, GitLab, VK ve Archive.org'dan otomatik indirip "test için" topluyor,
  hiçbir lisans doğrulama mekanizması yok — bir projeye korsan/lisanssız ticari font çekme riski
  taşıyor. MCP mekaniği kendi başına sorunlu olmasa da bu davranış "meşru kaynak" barını karşılamıyor.
- **supatest-ai/awesome-claude-code-sub-agents** (171★/28 fork/1 issue, MIT) — incelendi, meşru
  bulundu (Supatest AI gerçek bir YC S24 destekli şirket, agent `.md` dosyaları gerçek) ama
  **eklenmedi**: son commit 2025-09-19 (~1 yıl önce, durgun) ve kategori (genel dil/framework
  subagent koleksiyonu) zaten 5 mevcut kayıtla (VoltAgent, wshobson, 0xfurai, davepoon, dl-ezo)
  yeterince kapsanıyor.
- **awssat/mcp-universal-icons, devstroop/icons-mcp, hustcc/mcp-icon, icons8/icons8-mcp,
  johndavedecano/icon-mcp** — geçerli ama daha küçük/az doğrulanmış ikon-arama MCP sunucuları;
  daha güçlü organizasyon desteği, daha fazla yıldız/fork ve temiz doğrulama nedeniyle
  `better-auth/better-icons` tercih edildi, bunlar **eklenmedi**.
- **Apify tabanlı "visual regression"/"screenshot diff" MCP sunucuları** (Website Screenshot
  Monitor, Screenshot Comparison, Visual Regression Monitor vb.) — bunlar Apify platform hesabı
  gerektiren ÜCRETLİ Apify Actor'ları, bağımsız/açık kaynak ücretsiz araçlar değil — kataloğun
  "ücretsiz ve meşru" barını bu haliyle karşılamadığı için **eklenmedi**.
- **glorynguyen/gsap-mcp** — Tur 14'te zaten "erken/doğrulanmamış" notuyla ertelenmişti, talimat
  gereği tekrar araştırılmadı.

---

*Son güncelleme: 2026-09-18 (Tur 15). Sonraki turlarda bu dosya okunup yeni kaynaklar üstüne
eklenecek, Tur 1–15'te listelenenler tekrarlanmayacak. Tur 6'da `OthmanAdi/planning-with-files`
(ve aynı adla dolaşan fork/mirror'ları), Tur 13'te `athola/claude-night-market`
(`auto-star-repo.sh` hook'u) şüpheli/manipülatif bulundu — kurmadan önce ilgili notları oku.
Tur 8'de genel `claude-code-plugin` taramasında çok sayıda şişirilmiş-yıldız reposu tespit edildi —
bu ekosistemde yıldız sayısını TEK BAŞINA güvenilirlik kriteri olarak kullanmak giderek daha riskli
hale geliyor, gelecek turlarda issue/fork oranı + kuruluş tarihi + bağımsız doğrulama + hook/script
dosyalarının içeriği önceliklendirilmeli (Tur 15'te `rohitg00/awesome-claude-code-toolkit`'in
`hooks/` klasörü bu yöntemle kontrol edilip temiz bulundu — yöntem işe yarıyor, sürdürülmeli).
Tur 9'da OpenRouter, Tur 10'da Jina AI Reader, Tur 13'te Nebius AI Studio, Tur 14'te Z.ai GLM Flash,
Tur 15'te Vercel AI Gateway ücretsiz katmanları birincil kaynak yerine çapraz bağımsız kaynaklarla
doğrulanıp kataloğa eklenebildi — beşinin de birincil kaynak (`openrouter.ai`, `jina.ai`,
`nebius.com`, `z.ai`, `vercel.com`) doğrulaması hâlâ bekliyor, ağ erişimi açılırsa öncelikli olarak
tekrar teyit edilmeli; Vercel AI Gateway'in kredi kartı gereksinimi özellikle netleştirilmeli.
**Tur 11'de ÖNEMLİ:** Tur 4 #21 (Cerebras) artık kredi kartsız ücretsiz katman sunmuyor (16 Temmuz
2026'da kaldırıldı). Tur 1 #5 (Groq) hâlâ geçerli ama Llama modelleri 16 Ağustos 2026'da ücretsiz
katmandan kaldırıldı. Tur 13'te Figma/design-to-code MCP boşluğu (`GLips/Figma-Context-MCP`, #39)
ve bu şablonun tam tech stack'ine özel bir skill koleksiyonu (`bitjaru/styleseed`, #40) ile
dolduruldu. **Tur 14'te ÖNEMLİ metodoloji notu (Tur 15'te doğrulandı):** bu oturumun GitHub MCP
arama araçları (`search_repositories`/`search_code`) da tek-repo kısıtlamasına tabi tutuldu — Tur
6'nın notunun aksine, artık bu araçlar genel GitHub aramasında KULLANILAMIYOR; doğrulama tamamen
`WebSearch`/`WebFetch` (GitHub web sayfaları + `raw.githubusercontent.com`) üzerinden yapılmalı.
Tur 14'te proje-özel design-token/renk/görsel-optimizasyon MCP boşluğu üç yeni kaynakla (#44, #45,
#46) genişletildi. Tur 15'te ikon-arama MCP boşluğu (#48) ve Vercel deployment stack'ine özel yeni
bir ücretsiz API kategorisi (#50) eklendi; ayrıca font-lisans-riski taşıyan bir MCP (`Microck/font-mcp`)
ilk kez bu kategoride reddedildi — gelecek turlar font/asset-indirme araçlarını incelerken benzer
lisans-doğrulama kontrolü yapmalı. **Tur 16'da ÖNEMLİ:** `raw.githubusercontent.com` üzerinden
üçüncü parti sağlayıcının (Cloudflare) KENDİ resmi docs deposunun production branch kaynağı
doğrudan fetch edilebildiğini gösterdi — bu, Tur 9/10/13/14/15'teki (OpenRouter, Jina, Nebius,
Z.ai, Vercel) "birincil kaynak engellendi, üçüncü parti çapraz doğrulamayla yetinildi" sınırlamasını
kısmen aşan bir yöntem: gelecek turlar bir sağlayıcının resmi docs'u GitHub'da açık kaynaklıysa
(çoğu büyük sağlayıcının docs'u GitHub'da barınıyor) önce `raw.githubusercontent.com/<org>/<docs-repo>/...`
üzerinden birincil doğrulama denemeli, ancak GitHub üzerinde barınmayan sağlayıcılar (örn. Groq,
OpenRouter'ın kendi domaini) için bu yöntem uygulanamaz.*

---

## Tur 16 — 2026-09-18

### A) Ücretsiz & Meşru API Sağlayıcısı

#### 51. [Cloudflare Workers AI](https://developers.cloudflare.com/workers-ai/) ücretsiz katmanı (resmi)
- **Doğrulama notu:** `developers.cloudflare.com`, `patch-diff.githubusercontent.com` ve
  `pricepertoken.com` bu oturumdan `WebFetch` ile engellendi (önceki turlardaki ticari domain
  kısıtlamasıyla aynı desen), AMA Cloudflare'in resmi docs deposunun (`cloudflare/cloudflare-docs`)
  production branch'indeki kaynak `.mdx` dosyası `raw.githubusercontent.com` üzerinden **doğrudan
  fetch edilip birincil kaynaktan doğrulandı** — Tur 9'dan beri ilk kez üçüncü parti bir API
  sağlayıcısının rakamları çapraz doğrulama değil, doğrudan resmi metinle teyit edildi.
- **Ücretsiz katman:** Hesap başına **günde 10.000 Neuron** (Cloudflare'in normalize compute
  birimi), her gün UTC 00:00'da sıfırlanıyor — tek seferlik deneme kredisi DEĞİL, süresiz
  tekrarlayan bir katman. **Kredi kartı gerekmiyor** (resmi metin: "No credit card is needed for
  the free tier"); kart yalnızca Kimi/GLM/DeepSeek gibi bazı premium modellere erişim için
  isteniyor. Limit aşılırsa istek hata döner ("further operations will fail with an error"),
  ek kullanım için Workers Paid'e ($5/ay) geçmek gerekiyor.
- **Ne işe yarar:** 50+ model (Llama 3.1/3.3, Gemma, Mistral, Stable Diffusion XL görsel üretimi,
  BGE embedding vb.) edge'de REST API üzerinden çalıştırılabiliyor — Tur 1 (Groq), Tur 9
  (OpenRouter), Tur 13 (Nebius) ve Tur 14 (Z.ai) sağlayıcılarına ek, kredi kartsız ve gerçekten
  tekrarlayan bir LLM+görsel+embedding kategorisi.
- **Neden meşru:** Cloudflare'in kendi resmi ürünü; rakamlar şirketin kendi GitHub'da barınan
  docs kaynağından (üçüncü parti özet değil) doğrulandı.
- **Kurulum:** Cloudflare hesabı aç (kart istemiyor) → Workers AI için API token oluştur →
  `https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/run/{model}` REST endpoint'ini
  veya resmi `wrangler`/SDK'yı kullan. Yerel API key girişi gerekir.

### B) Doğrulanan ama EKLENMEYEN Bulgular (Tur 16)

- **GitHub Models — artık MEVCUT DEĞİL, ileride önerilmemeli.** `github.blog/changelog` (çoklu
  bağımsız kaynakla çapraz doğrulandı) GitHub Models'ın **30 Temmuz 2026'da tamamen kapatıldığını**
  doğruluyor — playground, model katalog, inference API ve BYOK artık hiçbir müşteriye (mevcut
  aktif kullanıcılar dahil) açık değil. Bu kataloğa hiçbir turda eklenmemişti, bu not sadece bir
  uyarı: şu anda gezinen çok sayıda "ücretsiz LLM API listesi" sitesi (freellm.net, free-model.com,
  free-llm-apis.pages.dev vb.) GitHub Models'ı hâlâ aktif gibi listeliyor — bu bilgi GÜNCEL DEĞİL,
  gelecek turlar bu kaynaklara güvenmeden önce retirement tarihini kontrol etmeli.
- **rshah515/claude-code-subagents** (102 yıldız/17 fork/0 açık issue, MIT) — doğrulandı, meşru
  (gerçek `core/*.md`, `languages/*.md`, `frameworks/*.md` vb. dosyalar mevcut, yıldız/fork oranı
  şişirilmiş değil) ama **eklenmedi**: kategori (genel amaçlı subagent koleksiyonu) zaten 5 mevcut
  kayıtla (VoltAgent, wshobson, 0xfurai, davepoon, dl-ezo) doyurulmuş durumda — Tur 15'teki
  supatest-ai ile birebir aynı gerekçe.
- **Hugging Face Inference Providers ücretsiz katmanı** — incelendi ama **eklenmedi**: kredi kartı
  gerekmiyor olması iyi ama katman ayda sadece **$0,10 kredi** ile sınırlı — ucuz bir modelde bile
  yalnızca birkaç yüz bin token'a denk geliyor, kataloğun "anlamlı, tekrarlayan ücretsiz katman"
  barını zar zor karşılıyor. Cloudflare Workers AI'nin (bu turda eklenen) çok daha cömert katmanı
  tercih edildi.
- **GetBindu/awesome-claude-code-and-skills** (192 yıldız/187 fork, Apache-2.0) — incelendi, meşru
  görünüyor ama **eklenmedi**: gerçek `SKILL.md`/agent dosyalarını barındırmıyor, sadece harici
  kaynaklara (çoğu zaten bu katalogda olan repolara) link veren bir "meta-dizin" — kataloğun
  "gerçek dosya yapısı doğrulanmış" kriterini karşılamıyor.

---

*Son güncelleme: 2026-09-18 (Tur 16). Sonraki turlarda bu dosya okunup yeni kaynaklar üstüne
eklenecek, Tur 1–16'da listelenenler tekrarlanmayacak. Tur 6'da `OthmanAdi/planning-with-files`
(ve aynı adla dolaşan fork/mirror'ları), Tur 13'te `athola/claude-night-market`
(`auto-star-repo.sh` hook'u) şüpheli/manipülatif bulundu — kurmadan önce ilgili notları oku.
Tur 8'de genel `claude-code-plugin` taramasında çok sayıda şişirilmiş-yıldız reposu tespit edildi —
bu ekosistemde yıldız sayısını TEK BAŞINA güvenilirlik kriteri olarak kullanmak giderek daha riskli
hale geliyor, gelecek turlarda issue/fork oranı + kuruluş tarihi + bağımsız doğrulama + hook/script
dosyalarının içeriği önceliklendirilmeli. Tur 9'da OpenRouter, Tur 10'da Jina AI Reader, Tur 13'te
Nebius AI Studio, Tur 14'te Z.ai GLM Flash, Tur 15'te Vercel AI Gateway ücretsiz katmanları
birincil kaynak yerine çapraz bağımsız kaynaklarla doğrulanabildi — beşinin birincil kaynak
doğrulaması hâlâ bekliyor. **Tur 16'da YENİ YÖNTEM:** bir sağlayıcının resmi domaini engellenmiş
olsa bile, docs'u GitHub'da açık kaynaklıysa `raw.githubusercontent.com/<org>/<docs-repo>/<branch>/...`
üzerinden birincil kaynağa ulaşılabiliyor (Cloudflare Workers AI, #51, bu yöntemle doğrulandı) —
gelecek turlar OpenRouter/Jina/Nebius/Z.ai/Vercel için de docs'larının GitHub'da açık kaynaklı
olup olmadığını kontrol etmeli. Tur 16'da ayrıca GitHub Models'ın 30 Temmuz 2026'da tamamen
kapatıldığı doğrulandı (hiçbir turda önerilmemişti, sadece gelecekteki hatalı önerileri önlemek
için not edildi) ve genel-amaçlı subagent koleksiyonu kategorisinin artık doygun olduğu bir kez
daha teyit edildi (rshah515 reddi).*

---

## Tur 17 — 2026-09-18

### A) Resmi Anthropic / GitHub Kaynakları (yeni kategori — Tur 1-16'da hiç kapsanmamıştı)

#### 52. [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) — RESMİ
- **Yıldız:** ~36.4k · **Fork:** ~4.1k · **Açık issue:** 998 · **Lisans:** Apache-2.0
- **Güncellik:** 4.283 commit, aktif
- **Ne işe yarar:** Anthropic'in kendi resmi, küratörlü Claude Code plugin marketplace'i.
  `.claude-plugin/marketplace.json` içinde 400+ plugin girdisi var; her girdi `name`,
  `description`, `category`, `author`, `source` (git repo + path), `homepage` alanlarını
  içeriyor. `plugins/` klasörü Anthropic'in kendi geliştirdiği internal plugin'leri
  (ör. `claude-security` — oturum içinde ajan tabanlı doğrulamayla güvenlik açığı taraması),
  `external_plugins/` klasörü ise vetted 3. parti partner/topluluk plugin'lerini (ör. `airtable`,
  `aws-core`, `42crunch-api-security-testing`) barındırıyor. Kategoriler: database, security,
  monitoring, deployment, design, productivity vb.
- **Neden meşru:** Doğrudan `anthropics` GitHub organizasyonu altında, Apache-2.0 lisanslı, README
  ve marketplace.json şeması tamamen açık/incelenebilir; gizli/paylaşımlı erişim yok — her plugin
  kendi kaynağından (çoğu ayrı açık kaynak repo) çekiliyor.
- **Kurulum:** Claude Code içinde `/plugin marketplace add anthropics/claude-plugins-official`
  (varsayılan olarak zaten bağlı olabilir) ardından `/plugin install <isim>` — yerel onay gerekir,
  API key gerekmez (plugin'in kendi gerektirdiği harici servis hariç, örn. Airtable kendi key'ini
  ister).

#### 53. [anthropics/claude-code](https://github.com/anthropics/claude-code) — `plugins/` klasörü (RESMİ, ürünle birlikte gelen ilk-parti skill'ler)
- **Yıldız:** ~146k · **Fork:** ~23.7k · **Lisans:** `LICENSE.md` mevcut ama açık kaynak DEĞİL —
  içerik "Anthropic's Commercial Terms of Service"e tabi olduğunu belirtiyor (MIT/Apache değil,
  ticari kullanım şartları). **Bu dürüstçe belirtiliyor:** aşağıdaki plugin'ler ücretsiz ve
  Claude Code'un kendisiyle birlikte geliyor ama kaynak kodu yeniden dağıtım/türev açısından
  tam open-source lisans korumasına sahip değil.
- **Güncellik:** 852 commit, aktif — bu, Claude Code CLI'sinin kendi ana deposu (kurulum
  script'leri, changelog, güvenlik politikası dahil).
- **Ne işe yarar:** `plugins/README.md`'de listelenen, CLI ile birlikte kullanılabilen 13 resmi
  ilk-parti plugin: `frontend-design` (jenerik AI estetiğinden kaçınan, üretim kalitesinde
  arayüz tasarımı — **bu şablonun `AGENTS.md`'deki "Beauty-first", "pixel-perfect emulation"
  ilkeleriyle birebir örtüşüyor**), `code-review` (çoklu-ajan, güven skorlu otomatik PR review),
  `pr-review-toolkit`, `commit-commands` (git commit/push/PR akışı otomasyonu), `plugin-dev`
  (7 uzman skill ile kendi plugin'ini yazma kiti), `security-guidance` (dosya düzenlerken güvenlik
  hatırlatma hook'u), `hookify`, `feature-dev`, `agent-sdk-dev`, `ralph-wiggum`,
  `explanatory-output-style`, `learning-output-style`, `claude-opus-4-5-migration`.
- **Neden meşru:** Claude Code'un kendi resmi kaynak deposu — Tur 1-16'da bahsi geçen hiçbir
  3. parti koleksiyondan farklı olarak, doğrudan ürünün kendisiyle birlikte bakımı yapılıyor.
- **Kurulum:** Bu plugin'ler genelde Claude Code'a önceden dahil/önerilen durumda; elle eklemek
  için `/plugin marketplace add anthropics/claude-code` + `/plugin install frontend-design` (veya
  istenen diğer isim). Yerel onay gerekir, API key gerekmez.

#### 54. [github/github-mcp-server](https://github.com/github/github-mcp-server) — RESMİ (GitHub)
- **Yıldız:** ~32.3k · **Lisans:** MIT
- **Güncellik:** Aktif, GitHub'ın kendi organizasyonu tarafından bakımı yapılıyor
- **Ne işe yarar:** GitHub'ın resmi MCP sunucusu — repo/dosya okuma, issue/PR yönetimi
  (oluşturma, yorum, review, merge), kod arama, Actions/CI durumu sorgulama, commit/branch
  yönetimi gibi GitHub platformunun tamamına ajan erişimi sağlıyor. (Bu oturumun kendisi de
  GitHub etkileşimleri için `mcp__github__*` araçlarını kullanıyor — yani bu proje zaten bu
  sunucunun bir örneğine bağlı çalışıyor.)
- **Neden meşru:** `github` organizasyonu altında resmi repo, MIT lisanslı, tamamen açık kod;
  her kullanıcı kendi GitHub Personal Access Token'ıyla (veya OAuth) bağlanıyor — paylaşımlı
  key sistemi değil, yetkiler token'ın kapsamıyla sınırlı.
- **Kurulum:** `claude mcp add github -- npx @modelcontextprotocol/... ` yerine resmi Docker imajı
  (`ghcr.io/github/github-mcp-server`) veya binary indirilip MCP config'e eklenir; bir GitHub
  PAT (fine-grained, minimum gerekli scope'larla) gerekir. Yerel onay + kendi token'ını girme
  gerekir, paylaşımlı/pooled erişim değildir.

### B) Doğrulanan ama EKLENMEYEN Bulgular (Tur 17)

- **Figma Dev Mode MCP Server (resmi, `figma/mcp-server-guide`)** — incelendi, resmi ve meşru
  ama **eklenmedi**: masaüstü sunucusu yalnızca ücretli Figma planında (Professional/Organization/
  Enterprise) Dev/Full seat ile çalışıyor; ücretsiz/Starter hesaplar veya View/Collab seat'ler
  ayda sadece **6 tool call** ile sınırlı — kataloğun "anlamlı, tekrarlayan ücretsiz katman"
  barını karşılamıyor (Tur 16'daki Hugging Face $0,10/ay reddiyle aynı gerekçe). Not: proje-özel
  design-token boşluğu zaten Tur 13'te `GLips/Figma-Context-MCP` (#39, tamamen ücretsiz, kendi
  Figma personal access token'ınla) ile dolduruldu — o tercih edilmeye devam ediyor.
- **xAI Grok API "ücretsiz kredi" iddiaları** — birden fazla SEO/blog kaynağı ($25 kayıt kredisi +
  "veri paylaşımı programı" üzerinden $150/ay) bahsediyor ama **eklenmedi**: (1) resmi `x.ai`
  bu oturumdan `WebFetch` ile engellendi, birincil kaynaktan doğrulanamadı; (2) $150/ay kısmı
  kullanıcı verisinin paylaşılmasına opt-in şartına bağlı — bu, Tur 5'teki "paylaşımlı/pooled key"
  kadar net bir ihlal olmasa da şeffaf bir "kalıcı, koşulsuz ücretsiz katman" değil, DeepSeek
  (Tur 4) ve NVIDIA NIM (Tur 5) ile aynı "doğrulanamayan/koşullu" gerekçesiyle dışlandı.
- **[robotmice/awesome-claude-code-subagents](https://github.com/robotmice/awesome-claude-code-subagents)
  ve [NeatNerdPrime/awesome-claude-code-subagents](https://github.com/NeatNerdPrime/awesome-claude-code-subagents)**
  — ikisi de VoltAgent/awesome-claude-code-subagents (Tur 1, #3) ile birebir aynı açıklama
  ("A collection of 100+ specialized Claude Code subagents covering a wide range of development
  use cases") ve görünüşe göre aynı içeriği taşıyor — Tur 1'deki `afsarctg/`, `Shyboy0499/`,
  `Saad-web-spec/` fork/mirror deseniyle aynı kategori. **Eklenmedi**, orijinal VoltAgent deposu
  tercih edilmeye devam ediyor.

---

*Son güncelleme: 2026-09-18 (Tur 17). Sonraki turlarda bu dosya okunup yeni kaynaklar üstüne
eklenecek, Tur 1–17'de listelenenler tekrarlanmayacak. Tur 6'da `OthmanAdi/planning-with-files`
(ve aynı adla dolaşan fork/mirror'ları), Tur 13'te `athola/claude-night-market`
(`auto-star-repo.sh` hook'u) şüpheli/manipülatif bulundu — kurmadan önce ilgili notları oku.
**Tur 17'de EN ÖNEMLİ metodoloji düzeltmesi:** Tur 14-16'nın "bu oturumun WebSearch/WebFetch'i de
tek-repo GitHub kısıtlamasına tabi" varsayımı YANLIŞTI — sadece `mcp__github__*` MCP araçları
scope'lu, genel `WebFetch`/`WebSearch` serbestçe github.com ve raw.githubusercontent.com'a
erişebiliyor (Tur 17'de `anthropics/claude-plugins-official`, `anthropics/claude-code`,
`github/github-mcp-server` bu şekilde doğrudan doğrulandı). Gelecek turlar artık ticari
sağlayıcı domain'leri (openrouter.ai, ai.google.dev, console.groq.com, vercel.com,
developers.cloudflare.com, developers.figma.com, x.ai gibi) hariç GitHub doğrulaması için
üçüncü parti çapraz kaynağa güvenmek ZORUNDA DEĞİL — doğrudan WebFetch/WebSearch kullanmalı.
Tur 9'da OpenRouter, Tur 10'da Jina AI Reader, Tur 13'te Nebius AI Studio, Tur 14'te Z.ai GLM
Flash, Tur 15'te Vercel AI Gateway ücretsiz katmanlarının birincil kaynak doğrulaması hâlâ
bekliyor (bu beşi ticari domain engeline takıldı, GitHub kısıtlaması değil). Tur 17'de ayrıca
repo git hijyeni düzeltildi: oturum başında repo bağlı olmayan bir "detached HEAD" durumundaydı
(muhtemelen önceki bir oturumun `git checkout <commit>` sonrası branch'e dönmeyi unutmasından);
`master` branch'i mevcut tüm araştırma commit'lerine fast-forward edilip normale döndürüldü —
gelecek turlar oturum başında `git status`/`git branch` ile HEAD'in bir branch'e bağlı olduğunu
doğrulamalı, aksi halde yeni commit'ler yine "kayıp" bir duruma düşebilir.*

---

## Tur 18 — 2026-09-18

Oturum başında saat kontrol edildi: 08:05 UTC / 11:05 Türkiye saati — talimattaki 12:00 UTC / 15:00
Türkiye kesme noktasının ÇOK ÖNCESİNDE, bu yüzden normal araştırma turu yapıldı. Oturum başında repo
yine Tur 17'deki gibi "detached HEAD" durumundaydı; `git fetch origin master` ile `origin/master`'ın
(`3429aaa`) HEAD ile birebir aynı commit olduğu doğrulandı (çalışma kaybı yok, sadece yerel ref
bayatlamıştı) ve `git checkout -B master origin/master` ile branch normale döndürüldü — bu artık
üçüncü kez tekrarlayan bir desen (Tur 13, 17, 18), muhtemelen görevi tetikleyen otomasyonun
oturumu belirli bir commit'e checkout etmesinden kaynaklanıyor; gelecek turlar bunu rutin bir
kontrol maddesi olarak görmeli. Doğrulama `WebSearch` + `WebFetch` üzerinden yapıldı;
`mcp__github__*` MCP araçları bu oturumda da tek-repo scope'una tabi olduğu için hiç kullanılmadı.
`openrouter.ai` ve `jina.ai`'a doğrudan `WebFetch` bu turda tekrar denendi ve yine `EGRESS_BLOCKED`
hatasıyla engellendi — Tur 9/10'daki bu iki sağlayıcının birincil kaynak doğrulaması hâlâ bekliyor.

### A) MCP Sunucuları (proje-özel faydalı — `public/seo/` ve genel "pixel-perfect" doğrulama)

#### 55. [dh1011/auto-favicon-mcp](https://github.com/dh1011/auto-favicon-mcp)
- **Yıldız:** 34 · **Fork:** 5 · **Açık issue:** 1 · **Lisans:** MIT
- **Güncellik:** Küçük ama net bir araç için normal commit hacmi (4 commit ana dalda), şişirilmiş
  yıldız paterni DEĞİL (yıldız/fork/issue oranı organik).
- **Ne işe yarar:** Tek bir PNG dosyasından veya URL'den eksiksiz bir favicon seti (16x16'dan
  256x256'ya kadar boyutlar, `.ico`, Apple touch icon'ları, PWA `manifest.json`) üreten MCP
  sunucusu — hem yerel dosya hem uzak URL girişini destekleyen iki ayrı araç sunuyor. **Bu
  şablonun `AGENTS.md`'de tanımlı `public/seo/` klasörüyle ("Favicons, OG images, webmanifest")
  birebir örtüşüyor** — hedef siteden çıkarılan logo/favicon kaynağından otomatik tam SEO ikon
  seti üretmek için doğrudan kullanılabilir.
- **Neden meşru:** MIT lisanslı, tamamen açık kod, standart Python paketleme (`pyproject.toml`),
  şüpheli hook/otomatik-çalıştırma kodu bulunamadı. Karşılaştırma için aynı kategorideki
  `elliotxx/favicon-mcp-server` (4 yıldız/0 fork, çok daha erken/az doğrulanmış) ve
  `shrinathprabhu/favicon-generator` (0 yıldız/0 fork, kendi açıklamasında "vibe coded" ibaresi
  var — topluluk doğrulaması yok) ayrıca kontrol edildi; dh1011 deposu belirgin şekilde daha
  olgun/doğrulanabilir bulundu.
- **Kurulum:** `uvx auto-favicon` (Python 3.12+ ve `uv` paket yöneticisi gerekir) ile MCP config'e
  ekleme. Yerel onay gerekir, API key gerekmez.

#### 56. [danielsogl/lighthouse-mcp-server](https://github.com/danielsogl/lighthouse-mcp-server)
- **Yıldız:** ~71 · **Fork:** ~13 · **Açık issue:** 3 · **Lisans:** MIT
- **Güncellik:** 270+ commit, aktif; CI/CD workflow'ları, uçtan uca test paketi, coverage
  raporlama ve semantic versioning (release-please) var — olgun bir mühendislik pratiği gösteriyor.
- **Ne işe yarar:** Google Lighthouse'u yerel Chrome/Chromium üzerinden çalıştırıp MCP ile ajana
  açan 13+ araç: performans skoru + Core Web Vitals, erişilebilirlik (WCAG uyumluluk), SEO analizi,
  güvenlik denetimi (HTTPS, CSP), kaynak analizi (JS/CSS/görsel/font optimizasyon fırsatları),
  mobil/masaüstü karşılaştırmalı analiz. **Bu şablonun `AGENTS.md`'deki "UI/frontend değişikliklerinde
  dev server başlatıp tarayıcıda test et" kuralı ve "Beauty-first — her piksel önemli" ilkesiyle
  birebir örtüşüyor** — klonlanan bir sitenin kendi orijinaliyle ölçülebilir şekilde (performans/
  erişilebilirlik/SEO skoru) karşılaştırılmasını sağlıyor; Tur 2'deki Chrome DevTools MCP (#12) ve
  Tur 4'teki Playwright MCP (#19) ile tamamlayıcı, çakışmıyor (onlar etkileşim/otomasyon içinken bu
  ölçüm/audit sağlıyor).
- **Neden meşru:** MIT lisanslı, npm üzerinden `@danielsogl/lighthouse-mcp` olarak resmi dağıtılıyor,
  API key gerektirmiyor (tamamen yerel Lighthouse çalıştırıyor), TypeScript + Zod ile yapılandırılmış
  şema doğrulaması kullanıyor; şüpheli hook/otomatik-çalıştırma davranışı bulunamadı.
- **Kurulum:** `claude mcp add lighthouse npx @danielsogl/lighthouse-mcp` (veya MCP config'e ekleme)
  — yerel onay gerekir (yeni MCP sunucusu ekleme + yerel Chrome/Chromium bağımlılığı), API key
  gerekmez.

### B) Doğrulanan ama EKLENMEYEN Bulgular (Tur 18)

- **[harness/harness-skills](https://github.com/harness/harness-skills)** — doğrulandı, gerçek ve
  meşru (106 yıldız, 18 fork, 1 açık issue, Apache-2.0, gerçek `skills/<isim>/SKILL.md` dosyaları:
  `create-pipeline`, `debug-pipeline`, `manage-users` vb.). **Eklenmedi:** Harness CI/CD platformuna
  özel, bu şablonun tech stack'iyle (Next.js/shadcn/Vercel) veya genel Claude Code kullanımıyla
  hiçbir örtüşmesi yok — çok niş, ilgisiz bir platforma bağımlı.
- **[obviousworks/Claude-AI-skills-collection-2026](https://github.com/obviousworks/Claude-AI-skills-collection-2026)**
  — incelendi (55 yıldız, 19 fork, Apache-2.0 benzeri) ama Tur 2'deki ComposioHQ/awesome-claude-skills
  ve Tur 3'teki hesreallyhim/awesome-claude-code ile aynı kategori: kendi `SKILL.md` dosyası yok,
  94 skill'i başka repolara (çoğu zaten bu katalogda) link veren bir meta-dizin. **Eklenmedi**
  (README'de dürüst bir güvenlik uyarısı var — "bir skill dosya sistemine/shell'e/API key'lere
  erişimi olan çalıştırılabilir koddur, bir bağımlılık gibi değerlendir" — bu olumlu bir gözlem ama
  yine de meta-dizin kriterine takıldığı için ayrı madde açılmadı).
- **`elliotxx/favicon-mcp-server`** (4★/0 fork, MIT) ve **`shrinathprabhu/favicon-generator`**
  (0★/0 fork, kendi açıklamasında "vibe coded") — yukarıda #55 seçilirken karşılaştırma için
  incelendi, ikisi de yeterli topluluk doğrulaması olmadığı için **eklenmedi**.
- **OpenRouter ve Jina AI Reader birincil kaynak doğrulaması** — bu turda da denendi
  (`openrouter.ai`, `jina.ai`), ikisi de `EGRESS_BLOCKED` ile engellendi. Tur 9/10'dan beri
  hâlâ sadece üçüncü parti çapraz kaynaklarla doğrulanabiliyor, birincil kaynak bekliyor.

---

*Son güncelleme: 2026-09-18 (Tur 18). Sonraki turlarda bu dosya okunup yeni kaynaklar üstüne
eklenecek, Tur 1–18'de listelenenler tekrarlanmayacak. Tur 6'da `OthmanAdi/planning-with-files`
(ve aynı adla dolaşan fork/mirror'ları), Tur 13'te `athola/claude-night-market`
(`auto-star-repo.sh` hook'u) şüpheli/manipülatif bulundu — kurmadan önce ilgili notları oku.
Tur 17'nin metodoloji düzeltmesi (genel `WebFetch`/`WebSearch` tek-repo GitHub kısıtlamasına tabi
DEĞİL, sadece `mcp__github__*` MCP araçları scope'lu) Tur 18'de tekrar doğrulandı ve kullanıldı.
Tur 9'da OpenRouter, Tur 10'da Jina AI Reader, Tur 13'te Nebius AI Studio, Tur 14'te Z.ai GLM
Flash, Tur 15'te Vercel AI Gateway ücretsiz katmanlarının birincil kaynak doğrulaması hâlâ
bekliyor (ticari domain engeline takılıyorlar — Tur 18'de OpenRouter ve Jina tekrar denendi, yine
engellendi — GitHub kısıtlaması değil, genel ticari-domain proxy politikası). **Tur 18'de YENİ:**
proje-özel `public/seo/` (favicon/OG/manifest) boşluğu `dh1011/auto-favicon-mcp` (#55) ile
dolduruldu; ayrıca genel "klonlanan site orijinaliyle ne kadar örtüşüyor" ölçülebilir doğrulama
boşluğu `danielsogl/lighthouse-mcp-server` (#56) ile kapatıldı — Tur 2 (Chrome DevTools MCP) ve
Tur 4 (Playwright MCP) ile birlikte artık üç farklı tarayıcı-tabanlı doğrulama katmanı (etkileşim,
otomasyon, ölçüm/audit) mevcut. **Tur 18'de git hijyeni notu:** detached HEAD durumu Tur 13 ve
17'den sonra üçüncü kez tekrarladı — bu artık şaşırtıcı değil, muhtemelen tetikleyici otomasyonun
davranışından kaynaklanıyor; gelecek turlar oturum başında rutin olarak kontrol edip düzeltmeli,
ayrı bir "sorun" olarak raporlamaya gerek yok.*
