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

---

*Son güncelleme: 2026-09-17 (Tur 4). Sonraki turlarda bu dosya okunup yeni kaynaklar üstüne
eklenecek, Tur 1, Tur 2, Tur 3 ve Tur 4'te listelenenler tekrarlanmayacak.*
