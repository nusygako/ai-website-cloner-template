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

*Son güncelleme: 2026-09-17 (Tur 8). Sonraki turlarda bu dosya okunup yeni kaynaklar üstüne
eklenecek, Tur 1–8'de listelenenler tekrarlanmayacak. Tur 6'da `OthmanAdi/planning-with-files`
(ve aynı adla dolaşan fork/mirror'ları) şüpheli bulundu — kurmadan önce ilgili notu oku. Tur 8'de
genel `claude-code-plugin` taramasında çok sayıda şişirilmiş-yıldız reposu tespit edildi (yukarıdaki
gözlem notuna bak) — bu ekosistemde yıldız sayısını TEK BAŞINA güvenilirlik kriteri olarak kullanmak
giderek daha riskli hale geliyor, gelecek turlarda issue/fork oranı + kuruluş tarihi + bağımsız
doğrulama önceliklendirilmeli. OpenRouter ücretsiz katmanı yine ağ kısıtlaması nedeniyle
doğrulanamadı.*
