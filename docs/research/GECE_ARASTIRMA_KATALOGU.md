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
- **Dışlama kriterlerine takılan ve hiç araştırılmayan kategoriler:** paylaşımlı/havuzlanmış
  API key sunan "sınırsız ücretsiz AI" araçları, X/Twitter/Reddit giriş engeli aşan scraping
  araçları, ve kanıtsız yüksek kazanç iddialı trading botları — talimat gereği hiç aranmadı.

---

*Son güncelleme: 2026-09-16 (Tur 1). Sonraki turlarda bu dosya okunup yeni kaynaklar üstüne
eklenecek, bu turda listelenenler tekrarlanmayacak.*
