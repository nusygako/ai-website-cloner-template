# ARAŞTIRMA TAMAMLANDI - KULLANICI DÖNDÜĞÜNDE OKUNACAK

**Son tur:** Tur 53, 2026-09-25, ~08:03 UTC (11:03 Türkiye saati) — kesme noktasının (12:00 UTC) hâlâ
öncesinde çalıştı, aynı gün içindeki 6. tur (Tur 48 ~03:03, 49 ~04:02, 50 ~05:04, 51 ~06:03, 52 ~07:04,
53 ~08:03 UTC — hepsi ~1 saat arayla). **1 yeni kaynak eklendi** (#162,
`vishalsachdev/claude-skills` — küçük ama doğrulanmış, gerçek `SKILL.md` dosyaları içeren kişisel bir
koleksiyon). Dar kapsamlı bir kontrol yapıldı (geniş anahtar-kelime taraması yine tekrarlanmadı — son 5
tur zaten yaptı): `anthropics` GitHub org'u yeniden tazelik sırasına göre tarandı (yeni resmi depo yok)
ve "SKILL.md claude code" için dar bir `WebSearch` yapıldı — bkz. "Tur 53" bölümü.

**YENİ VE ÖNEMLİ BULGU — Tur 50:** Bu tur, önceki turların "alan doydu/tekrar keşfediyor" gözleminden
farklı ve daha ciddi bir şey buldu: tam olarak bu görevin taradığı "claude code skill/subagent"
arama uzayı, onlarca yıldızı şüpheli biçimde şişirilmiş (birkaç hafta/ay içinde 30.000-94.000★'a
ulaşan, ama commit derinliği/organik büyüme paterniyle uyuşmayan) depoyla dolmuş durumda. En az bir
örnek (`code-yeongyu/oh-my-openagent`, 69,4k★) doğrulanabilir yanıltıcı iddialar taşıyor ("Anthropic
blocked OpenCode because of us" gibi) VE kullanıcıları değil doğrudan **AI ajanlarını** kendi kendine
kurulum yapmaya teşvik ediyor ("let an LLM agent install this for you") — bu, tam olarak bu gibi
otomatik gece-araştırma görevlerini hedef alan bir sosyal-mühendislik/tedarik-zinciri deseni.
Ayrıntılar dosyanın "Tur 50" bölümünde. **Hiçbir şüpheli aday kataloğa eklenmedi**, bulgu yalnızca
kullanıcının dikkatine sunulmak üzere belgelendi ve ayrıca bir bildirimle iletildi.

**Toplam kataloglanmış kaynak sayısı:** 162 (53 gece turu boyunca biriktirildi, 2026-09-16'dan bu yana,
10 gün — Tur 53 ile #162 eklendi, Tur 50-52'de değişmemişti).

**Öne çıkan 5 kaynak (kataloğun genelinden en yüksek etkili / en alakalı girdiler):**
1. **[garrytan/gstack](https://github.com/garrytan/gstack)** (~134.000★, MIT) — Y Combinator Başkanı
   Garry Tan'a ait, Claude Code'u sanal bir mühendislik ekibine dönüştüren 50+ gerçek skill
   (`/review`, `/ship`, `/qa`, `/design-review` vb.).
2. **[VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)**
   (~34.800★, MIT) — Anthropic, Google, Microsoft, Vercel, Cloudflare gibi kaynaklara göre indekslenen
   1000+ agent skill'lik küratörlü liste.
3. **[google/skills](https://github.com/google/skills)** (~20.300★, Apache-2.0) — Google'ın resmi
   Agent Skills deposu; BigQuery, GKE, Cloud Run, Gemini API gibi 100+ gerçek `SKILL.md` paketi.
4. **[cloudflare/mcp-server-cloudflare](https://github.com/cloudflare/mcp-server-cloudflare)**
   (~4.300★, Apache-2.0) — Cloudflare'in resmi, ürüne-özel 13+ MCP sunucusu koleksiyonu.
5. **[Jane-xiaoer/claude-skill-web-clone](https://github.com/Jane-xiaoer/claude-skill-web-clone)**
   (#159, en son eklenen — 1.000★, MIT) — bu şablonun ana amacıyla (website klonlama) doğrudan
   örtüşen bir karar-ağacı metodolojisi skill'i.

**ÖNEMLİ GÖZLEM — görevin kullanıcı tarafından gözden geçirilmesi önerilir:** Bu katalog 10 gündür,
52 turdur her ~1 saatte bir çalışıyor ve dosya artık ~475KB / 5900+ satır. Yeni bulgular Tur 36'dan
beri sürekli azalıyor (Tur 44: birkaç yeni, Tur 45: 1, Tur 46: 2, Tur 47: 1, Tur 48: 2, Tur 49-52: 0) —
alan "genel tarama modu"na girdi, kolay/yüksek-kaliteli adaylar büyük ölçüde tükendi. Tur 50 ayrıca
somut bir güvenlik deseni buldu: bu görevin taradığı arama uzayı, AI ajanlarını kendi kendine kurulum
yapmaya teşvik eden, şişirilmiş yıldız sayılı en az bir sosyal-mühendislik/tedarik-zinciri örneği
(`code-yeongyu/oh-my-openagent`) içeriyor. Tur 52, "ücretsiz LLM API" alanında da benzer bir pazarlama
dili örneği daha buldu (`open-free-llm-api/awesome-freellm-apis` — "one-click setup for Claude Code,
Cursor and Codex"), aynı desenin tek bir nişe özgü olmadığını doğruluyor. Önceki turlar bu gözlemi
tekrar tekrar not düşüp görevin sıklığının azaltılmasını veya durdurulmasını önerdi (17 ardışık tur);
bu hâlâ geçerli, artık daha da güçlü bir öneridir. **Bu turda kullanıcıya yeni bir bildirim
gönderilmedi** — Tur 50 (güvenlik bulgusu) ve Tur 51 (sıklık önerisi) için son ~2 saat içinde zaten iki
bildirim iletildi; bu tur aynı sonucu bir kez daha teyit ediyor, tekrar bildirim göndermek gürültü
olurdu.

Aşağıdaki bölümler önceki 47 turun tam detaylı geçmişini içerir.

---

## Gece Araştırma Kataloğu — Claude Code'u Güçlendirecek Ücretsiz & Meşru Kaynaklar

Bu dosya, otomatik gece araştırma görevi tarafından derlenmiştir. Her kaynak GitHub üzerinden
(yıldız sayısı, lisans, dosya yapısı) veya resmi sağlayıcı sayfalarından doğrulanmıştır.
**Paylaşımlı/havuzlanmış API key kullanan araçlar, ToS bypass eden scraping araçları ve kanıtsız
trading araçları bilerek DIŞLANMIŞTIR.**

> Not: Bu oturumun ağ erişimi bazı ticari sağlayıcı sitelerine (ör. openrouter.ai, ai.google.dev,
> console.groq.com) doğrudan izin vermiyor (proxy politikası gereği engellendi). Bu sağlayıcılara
> ait bilgiler web araması sonuçlarından derlenmiştir; kaynak linkleri verilmiştir, kullanıcı
> kurulumdan önce resmi sayfada teyit etmelidir. GitHub repoları ise doğrudan fetch edilerek
> yıldız/lisans/dosya yapısı birebir doğrulanmıştır.

**Toplam kataloglanmış kaynak sayısı:** 159 (47 gece turu boyunca biriktirildi, 2026-09-16'dan bu yana).
Tur 1-40'ın tam dökümü aşağıda kronolojik olarak yer alır; en yeni tur (Tur 47) dosyanın sonundadır.

---

## ARAŞTIRMA DURUMU (en son Tur 47 — 2026-09-24)

**Tur 47 notu (2026-09-24, ~11:04 UTC / 14:04 Türkiye saati başladı):** Araştırma bir general-purpose
alt-agent'a devredildi, tek kabul edilen aday ana oturum tarafından bağımsız `WebFetch` ile yeniden
doğrulandı. 1 yeni kaynak eklendi: `Jane-xiaoer/claude-skill-web-clone` (#159, bu şablonun
website-klonlama amacıyla doğrudan örtüşen bir metodoloji skill'i — kurulum için yol-adaptasyonu
gerekiyor, bkz. detay). Örtüşen/erken-aşama/liste-toplayıcı adaylar (andreasskyt, ghassan-gaidi,
tryalan-ai, netresearch, BehiSecc, muhammadsuheer, design-extract fork'ları) reddedildi. Tam detay
dosyanın "Tur 47" bölümünde.

**Toplam:** 159 doğrulanmış kaynak (Tur 46 sonunda 158'di, Tur 47 ile #159 eklendi).

**Gözlem (Tur 47):** Bu, kataloğun 9. gününde 47. turu. Yeni bulgular giderek seyrekleşiyor (Tur 44:
birkaç yeni, Tur 45: 1, Tur 46: 2, Tur 47: 1). Alan Tur 36'dan beri "genel tarama modu"nda. Görevin
sıklığını azaltmak veya durdurmak kullanıcı tarafından değerlendirilebilir.

**Önceki durum (Tur 46 — 2026-09-24):**

**Tur 46 notu (2026-09-24, ~10:03 UTC / 13:03 Türkiye saati başladı):** Ana oturum tarafından
doğrudan yürütüldü (alt-agent kullanılmadı). 2 yeni kaynak eklendi: `ayush-that/sub-agents.directory`
(#157, subagent/MCP keşif dizini) ve `peter123023/awesome-free-llm-api` (#158, en katı "sadece
gerçek API key" filtreli ücretsiz-LLM-API listesi). Örtüşen/erken-aşama adaylar (velo4705,
4pixeltechBR, AIwithDiego/hank, linny006) reddedildi. Tam detay dosyanın "Tur 46" bölümünde.

**Toplam:** 158 doğrulanmış kaynak (Tur 45 sonunda 156'ydı, Tur 46 ile #157-#158 eklendi).

**Önceki durum (Tur 45 — 2026-09-24):**

**Tur 45 notu (2026-09-24, ~09:03 UTC / 12:03 Türkiye saati başladı):** Kesme noktasının (12:00 UTC)
hemen öncesinde başladı. Oturum başında yine "detached HEAD" durumu görüldü (onyedinci kez tekrarlayan
aynı desen); `git fetch origin master` ile `origin/master`'ın (b3451c6, Tur 44 commit'i) HEAD ile
birebir aynı commit'te olduğu doğrulanıp `git checkout -B master origin/master` ile normale
döndürüldü, çalışma kaybı yok. Dosyanın tamamı `grep -oE 'github\.com/...'` ile taranıp mevcut 155
kaynaktan çıkan 153 benzersiz GitHub repo linki (iki `.git` varyantı normalize edilerek) tekrarın
önüne geçmek için çıkarıldı. Araştırma bir general-purpose alt-agent'a devredildi; 153 mevcut kaynağın
tam listesi + görev talimatındaki hariç-tutma kriterleri verildi. Alt-agent skill/agent koleksiyonu
tarafında hiçbir yeni/redundant-olmayan aday bulamadı (bu niş Tur 36'dan beri "genel tarama modu"nda,
kolay bulgular tükenmiş durumda); ücretsiz-LLM-API dizini tarafında 2 aday buldu
(`mvalentsev/awesome-free-ai-coding`, `pacocartones/free-llm-api-hub`) — ikisi de otomatik/CI-tabanlı
periyodik doğrulama (canlı API/pricing-page probe'u, tarihli "freshness" rozeti) kullanan, statik
markdown listelerden farklı bir yöntem sunuyor. Ana oturum ikisini de kendi `WebFetch` çağrılarıyla
bağımsız doğruladı (yıldız/fork/açık-issue/lisans rakamları alt-agent'ınkiyle birebir tutarlıydı);
ikisi birbiriyle örtüştüğü için (aynı niş, aynı yöntem) sadece daha güçlü doğrulama yöntemine sahip
olanı (`mvalentsev/awesome-free-ai-coding` — gerçek model API'lerini çağırıyor, sadece dokümantasyon
sayfası değil) #156 olarak eklendi, diğeri redundancy nedeniyle eklenmedi. 3 erken-aşama/kanıtsız aday
ve birkaç ToS-riski/pooled-key gateway adayı (görev talimatına uygun şekilde) reddedildi (aşağıya bak).

**Toplam:** 156 doğrulanmış kaynak (Tur 44 sonunda 155'ti, Tur 45 ile #156 eklendi).

**Önceki durum (Tur 44 — 2026-09-24):

**Tur 44 notu (2026-09-24, ~08:03 UTC / 11:03 Türkiye saati başladı):** Kesme noktasının (12:00 UTC)
öncesinde başladı. Oturum başında yine "detached HEAD" durumu görüldü (onaltıncı kez tekrarlayan aynı
desen, bkz. Tur 43 notu); `origin/master` ile HEAD'in birebir aynı commit'te (aeb2727, Tur 43 commit'i)
olduğu `git fetch` ile doğrulanıp `git checkout -B master origin/master` ile normale döndürüldü, çalışma
kaybı yok. Dosyanın tamamı `grep -oE 'github\.com/...'` ile taranıp mevcut 152 kaynaktan çıkan 150
benzersiz GitHub repo linki tekrarın önüne geçmek için çıkarıldı. Araştırma bir general-purpose
alt-agent'a devredildi; 150 mevcut kaynağın tam listesi + görev talimatındaki hariç-tutma kriterleri
(paylaşımlı/havuzlanmış API key, ToS-bypass scraping, hesap-askıya-alınma riski, kanıtsız trading
araçları) verildi. Alt-agent 3 güçlü + 3 erken-aşama aday buldu; ana oturum 3 güçlü adayın **tamamını**
kendi `WebFetch` çağrılarıyla (gerçek github.com repo sayfası + `raw.githubusercontent.com` üzerinden
gerçek SKILL.md içeriği — yıldız/fork/açık-issue/lisans/dosya yapısı) ikinci kez bağımsız doğruladı,
tüm rakamlar tutarlıydı. 3 yeni kaynak eklendi (#153-#155: `vercel-labs/agent-skills`,
`ArnavPuri/designskills`, `mcpc-tech/dev-inspector-mcp`), 3 erken-aşama/kanıtsız MCP sunucusu not
düşülüp eklenmedi, birkaç aday (bir doğrulanamayan ücretsiz LLM API adayı dahil) reddedildi/pending
bırakıldı (bkz. dosyanın sonundaki "Tur 44" bölümü).

**Toplam:** 155 doğrulanmış kaynak (Tur 43 sonunda 152'ydi, Tur 44 ile #153-#155 eklendi).

**Önceki durum (Tur 43 — 2026-09-24):** Kesme noktasının (12:00 UTC) öncesinde başladı. Oturum başında
yine "detached HEAD" durumu görüldü (onbeşinci kez tekrarlayan aynı desen); `git fetch` ile
`origin/master`'ın (1c13985, Tur 42 commit'i) HEAD ile birebir aynı commit'te olduğu doğrulanıp
`git checkout -B master origin/master` ile normale döndürüldü. 3 yeni kaynak eklendi (#150-#152:
`vanzan01/claude-code-sub-agent-collective`, `mgifford/accessibility-skills`,
`ericshang98/perfect-web-clone-skill`), ~8 aday reddedildi. Tam detay dosyanın "Tur 43" bölümünde.

**Önceki durum (Tur 42 — 2026-09-24):** Kesme noktasının (12:00 UTC)
çok öncesinde başladı. Oturum başında yine "detached HEAD" durumu görüldü (ondördüncüncü kez
tekrarlayan aynı desen); `git checkout master && git merge --ff-only` ile normale döndürüldü, çalışma
kaybı yok. 4 yeni kaynak eklendi (#146-#149: `dembrandt/dembrandt`, `VoltAgent/awesome-agent-skills`,
`open-free-llm-api/awesome-freellm-apis`, `posthog/skills`), 6 aday reddedildi. Tam detay dosyanın
"Tur 42" bölümünde.

**Önceki durum (Tur 36 — 2026-09-23):

**Tur 36 notu (2026-09-23, ~07:15 UTC / 10:15 Türkiye saati başladı):** Kesme noktasının (12:00 UTC)
çok öncesinde başladı. Oturum başında yine "detached HEAD" durumu görüldü (artık onüçüncü kez
tekrarlayan aynı desen); `git fetch origin master` ile `origin/master`'ın (bc99dc9, Tur 35 commit'i)
HEAD ile birebir aynı commit'te olduğu doğrulanıp `git checkout -B master origin/master` ile normale
döndürüldü. Dosyanın tamamı `grep -oE 'github\.com/...'` ile taranıp mevcut 112 kaynaktan çıkan 111
benzersiz GitHub repo linki çıkarıldı (#105 OVHcloud GitHub-barındırılı değil, listeye dahil değil),
tekrarın önüne geçmek için kullanıldı. Tur 35'in notu doğruydu: bilinen tüm proje-özel niş boşluklar
(dark-mode/tema dahil) dolmuş durumda, bu yüzden bu tur **genel tarama moduna** geçti (yeni resmi
sağlayıcı skill/agent koleksiyonları ve MCP sunucuları). Araştırma bir general-purpose alt-agent'a
devredildi; 111 mevcut GitHub kaynağının TAM listesi + önceki turlarda reddedilen ~25 adayın özeti +
görev talimatındaki hariç-tutma kriterleri (paylaşımlı/havuzlanmış API key, ToS-bypass scraping,
hesap-askıya-alınma riski, kanıtsız trading araçları) verildi. Alt-agent 4 yeni aday buldu ve
`WebFetch` ile bağımsız doğruladı (#113-#116); ana oturum bu 4 adayın **tamamını** kendi `WebFetch`
çağrılarıyla (GitHub repo sayfası + `raw.githubusercontent.com` üzerinden gerçek `SKILL.md`/dizin
içeriği) ikinci kez bağımsız doğruladı — tüm rakamlar (yıldız/fork/issue/lisans) ve dosya yapıları
tutarlıydı, tutarsızlık bulunmadı. Alt-agent ayrıca 8 adayı reddetti (iki şişirilmiş-yıldız/çoklu-
mirror deseni gösteren "kişilik" reposu — biri 214.7k yıldıza karşı görünür issue sayısı yok, diğeri
64.5k yıldız/0 açık issue + birden fazla organizasyon arasında zıplayan fork zinciri —, artık kapanmış
iki ücretsiz API katmanı [GitHub Models, Cerebras], resmi sayı yayınlamayan bir API sağlayıcısı
[Mistral], gerçek kaynak kodu içermeyen bir "overview" reposu [Vercel MCP] ve üçüncü-parti/resmi-
olmayan OpenRouter MCP sarmalayıcıları — aşağıya bak). **Dikkat:** #116 (`garrytan/gstack`) 134k
yıldız/371 açık issue ile katalogdaki en yüksek yıldız sayısına sahip — oran (~361:1) tipik organik
depolardan düşük ama daha önce reddedilen "şişirilmiş yıldız" örneklerinden (ör. Tur 22'nin ~3300:1
"UI/UX Pro Max"ı, bu turun reddettiği 214.7k-yıldız/görünür-issue-yok reposu) çok farklı — gerçek,
kimliği doğrulanmış bir kişiye (Y Combinator Başkanı Garry Tan) ait, tek bir kanonik repo (mirror
çoğalması yok), 371 gerçek açık issue ve bağımsız üçüncü-parti kaynaklarla (blog yazıları, entegrasyon
repoları) doğrulandı; yine de temkinli bir uyarıyla eklendi, gelecek turlar büyüme paternini izlemeli.

**Toplam:** 116 doğrulanmış kaynak (Tur 35 sonunda 112'ydi, Tur 36 ile #113-#116 eklendi).

**Önceki durum (Tur 35, 2026-09-23, ~06:15 UTC / 09:15 Türkiye saati başladı):** Kesme noktasının (12:00 UTC)
çok öncesinde başladı. Oturum başında yine "detached HEAD" durumu görüldü (artık onikinci kez
tekrarlayan aynı desen); `git fetch` ile `origin/master`'ın (1ad4250, Tur 34 commit'i) HEAD ile
birebir aynı commit'te olduğu doğrulanıp `git checkout -B master origin/master` ile normale
döndürüldü. Dosyanın tamamı `grep -oE 'github\.com/...'` ile taranıp mevcut 107 benzersiz kaynak
linki + 107 başlık çıkarıldı, tekrarın önüne geçmek için kullanıldı. Araştırma bir general-purpose
alt-agent'a devredildi; 107 mevcut kaynağın tam listesi + önceki turlarda reddedilen başlıca
adayların özeti + görev talimatındaki hariç-tutma kriterleri + hâlâ dolmayan tek niş boşluk
(dark-mode/tema tespiti — yedi turdur pending) öncelikli arama alanı olarak verildi. Alt-agent 5
yeni aday buldu ve `WebFetch` ile bağımsız doğruladı (#108-#112); ana oturum bu 5 adayın **tamamını**
kendi `WebFetch` çağrılarıyla ikinci kez bağımsız doğruladı (yıldız/lisans/kaynak-kodu-varlığı) —
tüm rakamlar tutarlıydı, tutarsızlık bulunmadı. Alt-agent ayrıca ~10 adayı reddetti (şişirilmiş
yıldız/sıfır-issue deseni gösteren bir repo + üç mirror/fork hesabı, zaten kataloglanmış
`Manavarya09/design-extract`'ın üç mirror/fork'u, birbirini kopyalayan üç "video-extract-mcp"
mirror'ı, ve birkaç düşük-yıldız/redundant araç — aşağıya bak). **Dark-mode/tema tespiti nişi bu
turda NİHAYET dolduruldu** — hem birincil (designer-mcp, kapsamlı OKLCH+dark-mode token üretimi)
hem tamamlayıcı ikincil bir araçla (dark-mode-screenshot, basit ekran görüntüsü karşılaştırma).
Yeni bir niş boşluk bu turda kapatıldı: proje yapısındaki `public/videos/` klasörü için site
videosu indirme aracı yoktu (yt-dlp-mcp ile dolduruldu).

**Toplam:** 112 doğrulanmış kaynak (Tur 34 sonunda 107'ydi, Tur 35 ile #108-#112 eklendi).

**Önceki durum (Tur 34, 2026-09-23, ~05:15 UTC / 08:15 Türkiye saati başladı):** Kesme noktasının (12:00 UTC)
çok öncesinde başladı. Repo `master` branch'inden ayrı, "detached HEAD" durumundaydı; `git log`
ile `origin/master`'ın HEAD ile birebir aynı commit'te (e998647, Tur 33'ün commit'i) olduğu
doğrulandı, çalışma kaybı yok. Dosyanın tamamı `grep -oE 'github\.com/...'` ile taranıp mevcut 105
benzersiz kaynak linki çıkarıldı, tekrarın önüne geçmek için kullanıldı (not: dosyanın en üstteki bu
özet bloğu Tur 33'ün eklediği son bölümü yansıtacak şekilde güncellenmemiş kalmıştı — dosyanın kendisi
zaten #105'e kadar tam ve doğruydu, sadece bu özet paragrafı bir tur geriden geliyordu; bu tur bunu da
düzeltti). Araştırma bir general-purpose alt-agent'a devredildi; 105 mevcut kaynağın tam listesi +
hariç-tutma kriterleri + hâlâ dolmayan niş boşluklar (dark-mode/tema tespiti — beşinci turdur
pending) verildi. Alt-agent 2 yeni aday buldu ve `WebFetch` ile bağımsız doğruladı (#106-#107 —
biri FFmpeg'i MCP üzerinden ajana açan video/ses işleme aracı, biri paylaşımlı-anahtar İÇERMEDİĞİNİ
açıkça belirten ve her sağlayıcının kendi resmi kayıt sayfasına link veren küratörlü ücretsiz LLM API
listesi), 3 adayı reddetti (bir liste deposu şüpheli "hesapsız anında key" girdisi içerdiği için
paylaşımlı-anahtar riskiyle, bir WCAG aracı tek-günlük/0-yıldız/redundant olduğu için, birkaç Apify-
barındırılan "MCP sunucusu" incelenebilir kaynak kodu olmadığı için). Dark-mode/tema tespiti ve etik
scraping nişleri bu turda tekrar arandı — etik scraping nişi zaten Tur 33'te dolduruldu
(`YawLabs/fetch-mcp`), dark-mode/tema tespiti hâlâ meşru bağımsız aday bulunamadan pending kalıyor
(altıncı art arda tur).

**Toplam:** 107 doğrulanmış kaynak (Tur 33 sonunda 105'ti, Tur 34 ile #106-#107 eklendi).

**Önceki durum (Tur 32, 2026-09-23, ~03:15 UTC / 06:15 Türkiye saati başladı):** Kesme noktasının (12:00 UTC)
çok öncesinde başladı. Repo `master` branch'inde, `origin/master` ile birebir aynı commit'te bulundu
— bu turda "detached HEAD" sorunu görülmedi (Tur 30'daki tekil gözlemin ardından ikinci kez). Dosyanın
tamamı okunmadan önce mevcut 99 benzersiz kataloglanmış repo linki `grep` ile çıkarıldı, tekrarın
önüne geçmek için kullanıldı. Araştırma tek bir general-purpose alt-agent'a devredildi; alt-agent'a
99 mevcut kaynağın TAM listesi + önceki turlarda reddedilen adayların özeti + görev talimatındaki
hariç-tutma kategorileri + Tur 31'in pending bıraktığı niş boşluklar (CSS-in-JS tespiti, dark-mode/
tema tespiti, etik scraping/robots.txt uyumluluğu) verildi. Alt-agent 3 yeni aday buldu ve `WebFetch`
ile bağımsız doğruladı (#100-#102 — biri erişilebilirlik odaklı büyük/aktif bir skill koleksiyonu,
biri bu projenin tam yığınına (Next.js 16 + shadcn/ui) özel yazılmış bir skill koleksiyonu, biri de
CSS-in-JS/computed-style tespiti nişini kısmen dolduran bir MCP sunucusu — canlı tarayıcı CSS
cascade/computed-style'ı okuyor, tarayıcı eklentisi gerektirmiyor), ve ~11 aday reddetti (arşivlenmiş/
bakımsız, ücretli-bağımlılık, düşük-yıldız/kanıtsız benimseme, veya sadece ikincil kaynaklardan
doğrulanabilen sağlayıcılar — aşağıya bak). CSS-in-JS tespiti nişi artık kısmen dolduruldu
(`betson-g/browser-inspector-mcp` ile), dark-mode/tema tespiti ve etik scraping/robots.txt uyumluluğu
nişleri dördüncü turdur hâlâ dolmuyor (`tgambet/mcp-fetch-node` adayı bulundu ama GitHub'da
**arşivlenmiş/bakımsız** olduğu için eklenmedi). **Tur 32'de metodoloji notu:** yeni bir ücretsiz LLM
API sağlayıcısı adayı (NVIDIA NIM / build.nvidia.com) yine sadece ikincil kaynaklardan (blog
agregatörleri) doğrulanabildi, resmi sayfa `EGRESS_BLOCKED` idi ve GitHub-barındırılan birincil kaynak
bulunamadı — Tur 21'in kuralı gereği numaralı madde olarak eklenmedi, pending listesine not düşüldü.

**Toplam:** 102 doğrulanmış kaynak (bkz. güncel "Toplam" satırı aşağıda, Tur 32 ile 99'dan 102'ye
çıktı).

**Önceki durum (Tur 30, aynı gece, 2026-09-22, ~10:18 UTC / 13:18 Türkiye saati başladı):** Kesme noktasının
(12:00 UTC) öncesinde başladı — Tur 29'un bitişinden (~09:15 UTC) yaklaşık 1 saat sonra, aynı gece
içinde. Bu turda oturum başında **ilk kez** "detached HEAD" sorunu görülmedi — repo doğrudan
`master` branch'inde, `origin/master` ile birebir aynı commit'teydi (4e29490, Tur 29 commit'i);
önceki on iki turun aksine hiçbir düzeltme adımı gerekmedi (not: bu tek seferlik bir iyileşme mi
yoksa kalıcı bir düzelme mi, gelecek turlar gözlemlemeli). Araştırma bu turda alt-agent'a
devredilmeden doğrudan ana oturum tarafından yürütüldü; görev talimatındaki proje-özel niş boşluklar
(video/GIF asset indirme-optimize etme, WCAG/erişilebilirlik otomasyonu, CSS-in-JS tespiti, font
subsetting, dark-mode tespiti, Vercel deployment otomasyonu, RSC uyumluluk kontrolü, yeni ücretsiz
LLM API) sırayla `WebSearch` ile tarandı. 4 aday bulundu ve `WebFetch` ile GitHub sayfaları
üzerinden bağımsız doğrulandı (yıldız/lisans/commit tarihi/dosya yapısı kontrolü dahil), hepsi
kataloğa eklendi (#95-#98) — üçü tam olarak görev talimatının işaret ettiği boşlukları dolduruyor
(video düzenleme/optimize MCP, RSC sınır-görselleştirme aracı, Vercel deployment MCP), biri
(fonttools/pyftsubset) resmi ve çok yaygın bir kütüphanenin font-subsetting özelliği olarak font
optimizasyonu boşluğunu dolduruyor. 3 aday reddedildi (aşağıya bak: şüpheli yıldız/commit oranı,
paylaşımlı-kimlik-bilgisi-benzeri gateway mimarisi, 0-yıldız/karmaşık-kurulum). CSS-in-JS tespiti ve
dark-mode/tema tespiti nişleri için bu turda GitHub'da bağımsız, meşru, henüz kataloglanmamış bir
MCP sunucusu/araç bulunamadı (mevcut sonuçlar ya genel CSS analiz kütüphaneleriydi ya da zaten
kataloglanmış #x51xxx/coolors-mcp'ye çok yakındı) — bu iki niş "pending" olarak not düşüldü, gelecek
turlar tekrar bakabilir. **Tur 30'da metodoloji notu:** `nganiet/mcp-vercel` (#98) son commit'i
5 Ağustos 2025 tarihli (13+ ay güncellenmemiş) olmasına rağmen 0 açık issue, gerçek `src/` kod
yapısı ve Tur 25'te `lst97/claude-code-sub-agents` için kurulan "bakımsız ama sağlam görüntü kaydı"
emsaline uyduğu için açık düşük-güncellik uyarısıyla eklendi; alternatif adaylardan
`Quegenx/vercel-mcp-server` (63 yıldız/sadece 3 commit — şüpheli oran) ve `AStheTECH/mewcp-vercel`
(0 yıldız, kimlik bilgilerini bir "gateway" üzerinden enjekte eden mimari — paylaşımlı-anahtar
deseniyle örtüşme riski) bu yüzden tercih edilmedi.

**Önceki durum (Tur 29, aynı gece, 2026-09-22, ~09:15 UTC / 12:15 Türkiye saati başladı):** Kesme noktasının
(12:00 UTC) hemen öncesinde başladı — Tur 28'in bitişinden (~08:14 UTC) sadece ~1 saat sonra, aynı
gece içinde. Oturum başında yine "detached HEAD" durumu görüldü (artık onbirinci kez tekrarlayan aynı
desen); `git fetch` ile `origin/master`'ın (5cdd094, Tur 28 commit'i) HEAD ile birebir aynı commit'te
olduğu doğrulanıp `git checkout -B master origin/master` ile normale döndürüldü. Araştırma yine tek
bir general-purpose alt-agent'a devredildi; alt-agent'a mevcut 90 benzersiz kataloglanmış repo'nun
TAM listesi (dosyadan `grep` ile başlık+link olarak çıkarılmış) + önceki turlarda reddedilen başlıca
adayların özeti + görev talimatındaki hariç-tutma kategorileri verildi, proje-özel niş boşluklar
(OG/meta çıkarma, ikon-webfont üretimi, animasyon kütüphanesi/erişilebilirlik denetimi) öncelikli
arama alanı olarak işaretlendi. Alt-agent 6 aday buldu ve doğruladı; bunlardan biri
(`rafael-castelo/image-processing-mcp-server`) bu oturumda #46 ile doğrudan örtüştüğü tespit edilip
(Tur 27'nin "iki redundant WebP/AVIF dönüştürücü" reddiyle aynı gerekçe) eklenmedi, 4'ü kataloğa
eklendi (#91-#94 — ikisi animasyon iş akışının farklı adımlarını dolduruyor: #93 hazır animasyon/ikon
kütüphanesi, #94 erişilebilirlik denetimi/spec derleyici; #85'in animasyon TESPİT aracıyla tamamlayıcı,
çakışmıyor), 1 aday (OVHcloud AI Endpoints) sadece genel web-toplayıcı ikincil kaynaklardan
doğrulanabildiği için Tur 21'in birincil-kaynak-zorunlu kuralı gereği numaralı madde olarak
eklenmedi, ve ~7 aday reddedildi (çoklu-hesap mirror deseni, bakımsız/olgunlaşmamış, redundant
Tailwind sarmalayıcıları, kanıtsız pazarlama iddiaları, meta-dizin/awesome-list, ücretli Apify
sarmalayıcıları — aşağıya bak). **Tur 29'da metodoloji notu:** ana oturum, alt-agent'ın önerdiği
OVHcloud adayını numaralamadan önce `ovhcloud.com`'u bizzat `WebFetch` ile deneyip yine
`EGRESS_BLOCKED` aldı — alt-agent'ın ikincil-kaynak bulgusunu bağımsız olarak teyit etme adımı bu
turda ilk kez ana oturum tarafından (alt-agent'a devretmeden) yapıldı, gelecek turlar için önerilen
ek bir disiplin adımı.

**Önceki durum (Tur 28, aynı gece, 2026-09-22, ~08:14 UTC / 11:14 Türkiye saati başladı):** Bu turun
kendisi, önceki 27 turun (2026-09-16 ile 2026-09-19 arasındaki tek bir "gece" oturumu içindeydi)
bitişinden 3 gün sonra, ayrı bir oturumda başladı — kesme noktasının (12:00 UTC) çok öncesinde.
Oturum başında yine "detached HEAD" durumu görüldü (artık onuncu kez tekrarlayan aynı desen, bkz.
Tur 13/17/18/19/22/23/25/26/27 notları); `git fetch` ile `origin/master`'ın (32cd1d6) HEAD ile
birebir aynı commit'te olduğu doğrulanıp `git checkout -B master origin/master` ile normale
döndürüldü. Araştırma yine tek bir general-purpose alt-agent'a devredildi; alt-agent'a mevcut 88
benzersiz kataloglanmış repo'nun TAM listesi (dosyadan `grep` ile başlık+link olarak çıkarılmış) +
önceki turlarda reddedilen başlıca adayların özeti + görev talimatındaki hariç-tutma kategorileri
(paylaşımlı/havuzlanmış API key, ToS-bypass scraping, hesap-askıya-alınma riski, kanıtsız trading
araçları) verildi, proje-özel niş boşluklar (çok-sayfalı sitemap keşfi, estetik/tasarım-sistemi
skill'leri) öncelikli arama alanı olarak işaretlendi. Alt-agent 2 yeni aday buldu ve doğruladı
(#89-#90 — bir estetik/tasarım-token skill'i ve bir sitemap keşif MCP sunucusu), 1 aday (Qwen/
DashScope API) sadece ikincil kaynaklardan doğrulanabildiği için Tur 21'in birincil-kaynak-zorunlu
kuralı gereği numaralı madde olarak eklenmedi, ve ~9 aday reddetti — bunlardan biri
(`elliotxx/favicon-mcp-server`) Tur 23'te aynı redundancy gerekçesiyle zaten reddedilmiş bir
tekrar-adaydı (aşağıya bak, gelecek turlar bu ismi bir daha araştırmamalı). **Tur 28'de metodoloji
notu:** alt-agent yine `mcp__github__*` MCP araçlarının bu oturumda tek repoya
(`nusygako/ai-website-cloner-template`) scope'lu olduğunu doğru tespit edip düz `github.com`
sayfalarını `WebFetch` ile fetch etme yöntemini kullandı (Tur 17'den beri kurulan metodoloji,
onuncu kez doğrulandı).

**Önceki durum (Tur 27, aynı gece, 2026-09-19, ~10:04 UTC / 13:04 Türkiye saati başladı):** Kesme
noktasının (12:00 UTC) hemen sonrasında (ama başlangıçta öncesinde) çalıştı. Oturum başında yine
"detached HEAD" durumu görüldü (dokuzuncu kez tekrarlayan aynı desen); `git fetch` ile
`origin/master`'ın (07d7500, Tur 26 commit'i) HEAD ile birebir aynı commit'te olduğu doğrulanıp
`git checkout -B master origin/master` ile normale döndürüldü. Araştırma yine tek bir
general-purpose alt-agent'a devredildi; alt-agent'a mevcut 84 benzersiz kataloglanmış repo'nun
TAM listesi (`grep` ile başlık+link olarak çıkarılmış) + önceki turlarda reddedilen başlıca
adayların özeti verildi, proje-özel niş MCP boşlukları (animasyon tespiti, CSS analiz, SEO/meta
çıkarma, font/görsel format dönüştürme) öncelikli arama alanı olarak işaretlendi. Alt-agent 4 yeni
aday buldu ve doğruladı (#85-#88) — üçü niş MCP sunucusu, biri yeni bir ücretsiz LLM API sağlayıcısı
(NVIDIA NIM) — ve ~6 aday reddetti (redundant araçlar, platform-uyumsuz subagent koleksiyonları,
dar-kapsamlı/kanıtsız projeler — aşağıya bak). **Tur 27'de metodoloji notu:** alt-agent yine
`mcp__github__*` MCP araçlarının bu oturumda tek repoya (`nusygako/ai-website-cloner-template`)
scope'lu olduğunu ve dış repo araştırması için kullanılamayacağını doğru şekilde tespit edip
bunun yerine düz `github.com` sayfalarını `WebFetch` ile fetch etme yöntemini kullandı (Tur 17'den
beri kurulan metodoloji, dokuzuncu kez doğrulandı). NVIDIA NIM API'nin resmi sayfalarına
(`nvidia.com`, `docs.api.nvidia.com`) bu turda da doğrudan erişilemedi; bilgiler GitHub üzerinde
barınan bağımsız üç kaynakla (rate-limit YAML dosyası + iki bağımsız entegrasyon projesi) çapraz
doğrulandı ve "ikincil kaynaktan doğrulandı" etiketiyle eklendi (Tur 21'in kuralına uygun olarak
madde numarası verildi çünkü GitHub-barındırılan birincil-benzeri kaynaklar mevcuttu, sadece
sağlayıcının kendi resmi sayfası erişilemezdi — bu, salt ikincil-web-kaynağına dayanan Gemini/
Mistral/OpenRouter durumundan farklı bir güven seviyesi).

**Önceki durum (Tur 26, aynı gece, ~09:03 UTC / 12:03 Türkiye saati başladı):** Kesme noktasının
(12:00 UTC) hemen öncesinde başladı. Oturum başında yine "detached HEAD" durumu görüldü (artık
sekizinci kez tekrarlayan aynı desen); `git fetch` ile `origin/master`'ın (9a57999, Tur 25 commit'i)
HEAD ile birebir aynı commit'te olduğu doğrulanıp `git checkout -B master origin/master` ile normale
döndürüldü. Araştırma yine tek bir general-purpose alt-agent'a devredildi; alt-agent'a mevcut 81
benzersiz kataloglanmış repo'nun TAM listesi + tüm önceki turlarda reddedilen adayların listesi +
kategori-bazlı yasaklar verildi, kategori D (proje-özel MCP: design-token/component çıkarma,
erişilebilirlik denetimi, ikon eşleştirme) öncelikli arama alanı olarak işaretlendi. Alt-agent 4 aday
buldu; bunlardan biri (`shadcn-ui/ui` resmi skill'i) **zaten #37'de kayıtlı olduğu** bu oturumda
tespit edilip bilerek atlandı — 3'ü bu oturumun kendisi tarafından `WebFetch` ile bağımsız olarak
yeniden doğrulanıp kataloğa eklendi (#82-#84), 1'i (`noGarne/visual-regression-mcp`) 0 yıldız/tek
commit nedeniyle "gelecekte tekrar bak" notuyla eklenmedi. ~12 aday reddedildi (fork'lar, arşivlenmiş
proje, meta-agregatör, ücretsiz-katmanı-artık-kapanmış sağlayıcılar — aşağıya bak). **Tur 26'da
metodoloji notu:** Google Gemini API ücretsiz katmanı bu turda da `ai.google.dev`/`aistudio.google.com`
ve bir `web.archive.org` mirror'ı dahil hiçbir yolla doğrudan fetch edilemedi (üçüncü art arda tur);
alt-agent bu kez 4 bağımsız ikincil kaynağı (aifreeapi.com, tokenmix.ai, cloudzero.com,
pecollective.com) çapraz doğrulayıp önceki turlardan daha güncel/tutarlı rakamlara ulaştı (günde
~1.500 istek, sadece Flash modelleri — Pro modeller 1 Nisan 2026'dan beri ücretsiz katman dışında,
kredi kartı gerekmiyor) ama Tur 21'in "birincil kaynak zorunlu" kuralı yine korunarak **numaralı
katalog maddesi olarak eklenmedi** — pending listesindeki not bu güncel rakamlarla güncellendi.

**Önceki durum (Tur 25, aynı gece, ~08:03 UTC / 11:03 Türkiye saati başladı):** Kesme noktasının
(12:00 UTC) öncesinde başladı. Oturum başında yine "detached HEAD" durumu görüldü (artık yedinci kez
tekrarlayan aynı desen); `git fetch` ile `origin/master`'ın (64a9a5e, Tur 24 commit'i) HEAD ile
birebir aynı commit'te olduğu doğrulanıp `git checkout -B master origin/master` ile normale
döndürüldü. Araştırma yine tek bir general-purpose alt-agent'a devredildi; alt-agent'a mevcut 76
benzersiz kataloglanmış repo'nun TAM listesi + kategori-bazlı yasaklar (paylaşımlı/havuzlanmış API
key araçları, ToS-bypass scraping, hesap-askıya-alınma riski, kanıtsız trading araçları) verildi.
Alt-agent 4 yeni aday buldu ve doğruladı (#78-#81), 1 sınırda/zayıf-belgelenmiş aday (Mistral AI
ücretsiz katmanı) bilgi yetersizliği nedeniyle eklenmedi, ~9 aday reddedildi (ücretli-yalnızca,
0-1 yıldız/kanıtsız benimseme, veya redundant fork — aşağıya bak). **Tur 25'te metodoloji notu:**
Google Gemini API ücretsiz katmanı bu turda da `ai.google.dev`'e doğrudan `WebFetch` ile
`EGRESS_BLOCKED` aldı (Tur 24 ile aynı); alt-agent üç bağımsız ikincil kaynakla (tokenmix.ai,
aipromptshub.co, pecollective.com) çapraz doğrulama önerse de, Tur 21'de kurulan "birincil kaynak
zorunlu" kuralı korunarak **numaralı katalog maddesi olarak eklenmedi** — OpenRouter/Jina/Vercel AI
Gateway/Mistral ile aynı "birincil doğrulama bekliyor" listesine eklendi; ağ erişimi açılırsa
gelecek bir tur doğrudan `ai.google.dev`'i fetch edip kesin doğrulama yapmalı. Groq resmi MCP
sunucusu + ücretsiz API katmanı (#81) ise repo sayfası doğrudan `WebFetch` ile erişilebilir
olduğundan tam güvenle eklendi.

**Önceki durum (Tur 24, aynı gece, ~07:02 UTC / 10:02 Türkiye saati):** Kesme noktasının (12:00 UTC)
öncesinde başladı. 4 yeni MCP sunucusu/araç eklendi (#74-#77: `marvkr/better-design` tasarım-token
referansı, `samihalawa/visual-ui-debug-agent-mcp` görsel QA, `us/crw` self-hosted crawler, ve
`MohamedAbdallah-14/prompt-to-asset` çoklu-platform asset üretimi); ayrıntılar aşağıdaki "Tur 24"
bölümünde. Bu turda ilk kez ikinci bir bağımsız doğrulama alt-agent'ı `mcp__github__search_repositories`
+ `get_file_contents` ile çapraz kontrol için kullanıldı.

**Tur 23 notu (2026-09-19, ~06:03 UTC / 09:03 Türkiye saati başladı):** Kesme noktasının
(12:00 UTC) çok öncesinde başladı. Oturum başında yine "detached HEAD" durumu görüldü (artık altıncı
kez tekrarlayan aynı desen, bkz. Tur 13/17/18/19 notları); `git fetch` ile `origin/master`'ın
(1f2985c) HEAD ile birebir aynı commit'te olduğu doğrulanıp `git checkout -B master origin/master`
ile normale döndürüldü. Bu turda önce dosyanın tamamı `grep` ile taranıp mevcut 67 kaynağın başlıkları
çıkarıldı (tekrarın önüne geçmek için), ardından araştırmanın tamamı bir general-purpose alt-agent'a
devredildi (bağlam tasarrufu + tek odaklı arama turu) — alt-agent'a hem 67 mevcut kaynağın hem de
önceki turlarda reddedilen adayların tam listesi verildi. Alt-agent 8 aday buldu ve doğruladı, ~10
adayı reddetti (redundant, arşivlenmiş, artık mevcut değil, ya da 0-1 yıldız/kanıtsız); bu turda
6'sı kataloğa eklendi (#68-#73), 2'si (elliotxx/favicon-mcp-server, capraidev/shadcn-claude-skill)
sırasıyla redundancy ve olgunlaşmamışlık gerekçesiyle eklenmedi. **Tur 23'te yöntem notu:** alt-agent
GitHub API'sine (`curl`/`gh`) tek-repo scope kısıtlaması nedeniyle erişemedi, ama düz `github.com`
sayfalarını `WebFetch` ile fetch etmek yine sorunsuz çalıştı — Tur 17/21'in metodoloji notunu bir kez
daha doğruluyor.

**Önceki durum (Tur 22):** Kesme noktasının
(12:00 UTC) öncesinde başladı. Oturum başında yine "detached HEAD" durumu görüldü (bkz. aşağıdaki
git hijyeni notu, artık beşinci kez tekrarlayan aynı desen); `git fetch` + `origin/master` ile
birebir aynı commit'te olduğu doğrulanıp `git reset --hard origin/master` ile normale döndürüldü.
Bu turda önce dosyanın tamamı okunup mevcut 64 kaynağın başlıkları `grep` ile çıkarıldı, ardından
şablonun kendi niş ihtiyaçlarına (font self-hosting, tarayıcı otomasyonu) odaklı ~10 aday
`WebSearch`/`WebFetch` ile araştırıldı. **Tur 22'de kritik bulgu:** #21 (Cerebras Cloud API)
maddesindeki "kalıcı ücretsiz katman" bilgisi artık DOĞRU DEĞİL — Cerebras 17 Ağustos 2026'da
kalıcı ücretsiz katmanını kapatıp kredi kartı gerektiren $5'lık tek seferlik deneme kredisine
geçti; ilgili madde bu turda düzeltme notuyla güncellendi (aşağıya bak). Ayrıca "UI/UX Pro Max"
adlı bir Claude Code skill'inin (nextlevelbuilder/hylarucoder/WAAMEngineer hesaplarında aynı
pazarlama metniyle dolaşan mirror'ları) 128.9k yıldız/13.7k fork'a karşı sadece 39 açık issue
gösterdiği (oran ~3300:1) tespit edildi — dosyanın başındaki "şişirilmiş yıldız" deseniyle birebir
örtüşüyor, KESİNLİKLE eklenmedi (aşağıya bak). ~10 aday incelendi, 3'ü kataloğa eklendi, 1 mevcut
madde (#21) düzeltme notuyla güncellendi, ~6 aday reddedildi (0-yıldız/erken-aşama veya şişirilmiş-
yıldız gerekçesiyle, aşağıya bak).

**Önceki durum (Tur 21):** Kesme noktasının
(12:00 UTC) çok öncesinde başladı. Bu turda önceki 60 kaynağın tam listesi `grep` ile (başlık
numaraları + `github.com/...` linkleri) çıkarılarak tekrar aramanın önüne geçildi; araştırmanın
büyük kısmı bir general-purpose alt-agent'a devredildi (bağlam tasarrufu + tek odaklı arama turu),
alt-agent'ın bulduğu en güçlü adaylar bu oturumda `WebFetch` ile bağımsız olarak yeniden
doğrulandı. **Tur 21'de yöntem notu:** `api.github.com` JSON endpoint'i bu turda 403 döndürdü
(önceki turlarda çalışıyordu); düz `github.com/<owner>/<repo>` HTML sayfası fetch etmek hâlâ
güvenilir çalıştı, gelecek turlar bunu öncelikli yöntem olarak kullanmalı. Tur 17'nin metodoloji
düzeltmesi (genel `WebFetch`/`WebSearch` tek-repo GitHub kısıtlamasına tabi DEĞİL, sadece
`mcp__github__*` MCP araçları scope'lu) bu turda da doğrulandı ve kullanıldı; ticari sağlayıcı
domaini (`sambanova.ai`) bu turda da `EGRESS_BLOCKED` ile engellendi. ~9 aday incelendi, 3'ü
kataloğa eklendi, 1'i düşük-benimseme caveat'iyle eklendi (aşağıya bak), 5'i reddedildi (biri
ciddi bir font-korsanlığı-otomasyonu bulgusu — bkz. Tur 21).

**Önceki durum:** Bu geceden önce 20 tur (Tur 1–20) araştırma yapıldı. Tur 12, saat 12:00 UTC / 15:00
Türkiye kesme noktasına ulaşıldığı için sadece özet eklemişti; Tur 13, 14, 15, 16, 17, 18 ve 19
farklı oturumlarda (yedisi de kesme noktasından önce, sırasıyla 03:04, 04:04, 05:06, 06:10, 07:05,
08:05 ve 09:09 UTC'de) başladı ve normal araştırmaya devam etti. **Tur 14'te metodoloji notu (Tur
15 ve 16'da da doğrulandı, Tur 17'de DÜZELTİLDİ, Tur 18 ve 19'da tekrar teyit edildi):** önceki
turlar bu oturumun GitHub erişiminin tek repoya (`nusygako/ai-website-cloner-template`) kilitli
olduğunu ve bunun `WebSearch`/`WebFetch`'i de etkilediğini varsaymıştı — **Tur 17'de netleşti ki bu
kısıtlama sadece `mcp__github__*` MCP araçları için geçerli** (bu oturumun GitHub entegrasyonu tek
repoya scope'lu); genel `WebFetch` (github.com dahil) ve `WebSearch` araçları kısıtlanmamış
durumda. **Tur 18'de ek netlik:** ticari sağlayıcı domainleri (`openrouter.ai`, `jina.ai`) bu turda
da `WebFetch` ile denendi ve yine `EGRESS_BLOCKED` hatasıyla engellendi — bu, Tur 1/7-11/13-17'deki
"ticari domain kısıtlaması genel bir proxy politikası, GitHub'a özgü değil" tespitini bir kez daha
doğruluyor; sadece GitHub (ve bazı belgeleme/blog siteleri) serbest. **Tur 16'da ek yöntem notu:**
bir sağlayıcının resmi domaini engellenmişse, docs'u GitHub'da açık kaynaklıysa
`raw.githubusercontent.com` üzerinden birincil kaynağa hâlâ ulaşılabiliyor (Cloudflare örneği,
aşağıya bak). **Tur 19'da git hijyeni notu (Tur 13, 17 ve 18'deki ile birebir aynı, dördüncü kez
tekrarlayan sorun):** oturum başında repo yine `master`'dan ayrı, bağlı olmayan bir "detached HEAD"
durumundaydı; `git fetch` sonrası `origin/master`'ın (53178e6) HEAD ile birebir aynı commit'te
olduğu doğrulandı (çalışma kaybı YOK) — `git reset --hard origin/master` ile branch normale
döndürüldü. Bu artık dördüncü kez tekrarlayan bir desen (Tur 13, 17, 18, 19) — muhtemel neden: bu
görevi tetikleyen otomasyon her oturumda repoyu belirli bir commit'e `checkout` ediyor, branch'e
değil; gelecek turlar bunu oturum başında rutin bir kontrol olarak görmeli, sürpriz değil, ayrı bir
"sorun" olarak raporlamaya gerek yok. **Tur 19'da metodoloji doğrulaması:** 18 önceki turun kaynak
havuzunu ne kadar kapsamlı taradığı bu turda somut olarak görüldü — ~15 aday incelendi, sadece 2'si
gerçekten yeni ve niş-doldurucu bulundu (aşağıya bak); 2 tane meşru ama tekrarlayan "genel subagent
koleksiyonu" (`rshah515/claude-code-subagents`, `supatest-ai/awesome-claude-code-sub-agents`)
bilerek eklenmedi çünkü kataloğun zaten 6 benzer genel-amaçlı koleksiyonu var (#3, #4, #11, #20,
#43, #49) — "kalite/dürüstlük > miktar" ilkesi gereği redundant girdi eklenmedi.

**Toplam:** 102 doğrulanmış kaynak kataloglandı (Tur 31'de #99, Tur 32'de #100-#102 eklendi — skill koleksiyonları, agent/subagent koleksiyonları,
MCP sunucuları, ücretsiz API sağlayıcıları) + 1 kritik güvenlik uyarısı (kurulum-karşıtı) + Tur
13'te tespit edilen 1 ek "manipülatif hook" uyarısı (aşağıya bak) + Tur 16'da eklenen 1 "artık
mevcut değil" uyarısı (GitHub Models, 30 Temmuz 2026'da kapatıldı) + Tur 20'de eklenen 1 genel
güvenlik/ekosistem bulgusu (Snyk ToxicSkills denetimi) + Tur 21'de eklenen 1 font-korsanlığı-
otomasyonu uyarısı (`Microck/font-mcp` — bkz. Tur 21) + Tur 22'de eklenen 1 "artık geçersiz ücretsiz
katman" düzeltmesi (Cerebras, #21 — bkz. Tur 22) + Tur 22'de eklenen 1 şişirilmiş-yıldız uyarısı
("UI/UX Pro Max" skill mirror'ları — bkz. Tur 22) + Tur 23'te eklenen 1 "artık mevcut değil" uyarısı
(Meta Llama API resmi ücretsiz katmanı, Temmuz 2026'da kapatıldı — bkz. Tur 23) + onlarca "doğrulandı
ama eklenmedi" madde (şişirilmiş yıldız, geçersiz/tek-seferlik ya da anlamsız derecede küçük ücretsiz
katman, ToS-bypass riski, lisanssız font kazıma riski, meta-dizin/gerçek dosya içermeme, redundant
genel koleksiyon, arşivlenmiş/bakımsız proje, yakında ücretliye geçiş sinyali vb. gerekçelerle
elendi).

**En önemli bulgular:**

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
8. **[SarthakMishra/site-cloner](https://github.com/SarthakMishra/site-cloner)** — bu şablonun
   `/clone-website` iş akışının (fetch → asset çıkarma → indirme → site haritası) neredeyse birebir
   MCP karşılığı; küçük ama gerçek ve temiz bir araç, API key gerekmez. (Tur 19, #57)
9. **[w01fgang/mcp-design-comparison](https://github.com/w01fgang/mcp-design-comparison)** —
   `AGENTS.md`'nin "pixel-perfect emulation" ve "beauty-first" ilkelerine doğrudan ölçülebilir bir
   SSIM/pixelmatch tabanlı doğrulama katmanı ekliyor; klon ile orijinal hedef sitenin ekran
   görüntülerini karşılaştırıp sayısal uyum skoru üretiyor. API key gerekmez. (Tur 19, #58)
10. **[laguagu/claude-code-nextjs-skills](https://github.com/laguagu/claude-code-nextjs-skills)** —
    bu şablonun tam yığınına (Next.js 16 + shadcn/ui + Vercel AI SDK) özel yazılmış, gerçek
    `SKILL.md` dosyalarından oluşan bir koleksiyon; `AGENTS.md`'nin "bu training data'ndaki Next.js
    değil" uyarısını doğrudan tamamlıyor. API key gerekmez. (Tur 23, #68)

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
- **🚨 TUR 22 GÜNCELLEMESİ — ARTIK GEÇERSİZ:** Bu madde 2026-09-19 itibarıyla ESKİMİŞ. Birden fazla
  bağımsız kaynak (pricepertoken.com, agentdeals.dev, toolfreebie.com, benchlm.ai) Cerebras'ın kalıcı
  ücretsiz katmanını **17 Ağustos 2026'da** kapattığını doğruluyor — hesaplar artık kredi kartı
  gerektiren, 30 gün geçerli $5'lık tek seferlik deneme kredisine geçirildi; kart eklenene kadar API
  erişimi pasif. Aşağıdaki "günde 1 milyon token, kredi kartı gerekmez" bilgisi **artık DOĞRU DEĞİL**
  — kurulum öncesi cloud.cerebras.ai üzerinde güncel durumu teyit et, kalıcı ücretsiz katman
  beklemeden.
- **Ücretsiz katman (eski bilgi, artık geçersiz — yukarıya bak):** Günde **1 milyon token**, kredi
  kartı gerektirmeden, kalıcı (tek seferlik deneme kredisi değil). 30 istek/dk limit. Llama 4 Scout,
  Qwen3 32B, DeepSeek R1 Distill gibi modellere erişim. WSE-3 wafer-scale donanımında 2.600+ token/sn
  hız (bilinen en hızlı sağlayıcılardan biri).
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

---

## Tur 19 — 2026-09-18

Oturum saati kontrol edildi: 09:09 UTC / 12:09 Türkiye saati — kesme noktasının öncesinde, normal
araştırma turu yapıldı. Oturum başında repo yine Tur 13/17/18'deki gibi "detached HEAD"
durumundaydı; `git fetch` ile `origin/master`'ın (`53178e6`) HEAD ile birebir aynı commit olduğu
doğrulandı (çalışma kaybı yok) ve `git reset --hard origin/master` ile branch normale döndürüldü —
artık dördüncü kez tekrarlayan bu desen rutin bir kontrol maddesi olarak ele alındı. Doğrulama
`WebSearch` + `WebFetch` üzerinden yapıldı; `mcp__github__*` araçları bu oturumda da tek-repo
scope'una tabi olduğu için hiç kullanılmadı (yalnızca bu projenin kendi reposu için kullanıldı).
Bu turda ticari sağlayıcı domainlerine (openrouter.ai, jina.ai vb.) tekrar erişim denenmedi çünkü
yeni bir provider adayı bu turda bulunmadı (Alibaba Qwen ve Moonshot AI/Kimi araştırıldı, ikisi de
reddedildi — aşağıya bak). ~15 aday incelendi; kataloğun 18 tur boyunca ne kadar kapsamlı
tarandığı bu turda somut olarak görüldü (çoğu aday ya meta-dizin, ya zaten kataloglanmış bir
kaynağın forku, ya da artık kapanmış bir ücretsiz katmandı).

### A) MCP Sunucuları (proje-özel faydalı — `/clone-website` akışı ve "pixel-perfect emulation" ilkesi)

#### 57. [SarthakMishra/site-cloner](https://github.com/SarthakMishra/site-cloner)
- **Yıldız:** 6 · **Fork:** 4 · **Açık issue:** 0 · **Lisans:** MIT
- **Güncellik:** 20 commit ana dalda; küçük ama tutarlı geliştirme, şişirilmiş yıldız paterni DEĞİL
  (yıldız/fork oranı organik, düşük ama gerçek bir erken-aşama proje).
- **Ne işe yarar:** LLM'lerin web siteleri klonlamasını sağlayan 6 araçlı bir MCP sunucusu:
  `fetch_page` (HTML çekme), `extract_assets` (HTML'den asset linklerini çıkarma),
  `download_asset` (dosya indirme), `parse_css_for_assets` (CSS içinden kaynak URL'lerini çıkarma),
  `create_site_map` (site haritası çıkarma/tarama) ve `analyze_page_structure` (sayfa yapısı
  analizi) — indirilen dosyaları içerik-tipine göre alt klasörlere organize ediyor. **Bu şablonun
  `.claude/skills/clone-website/SKILL.md` akışının ve `scripts/` altındaki asset-indirme adımının
  yaptığı işin neredeyse birebir MCP karşılığı.**
- **Neden meşru:** MIT lisanslı, tam açık kod, standart Python paketleme (`pyproject.toml`,
  `pytest.ini`, `.pylintrc` — gerçek test/lint disiplini gösteriyor), Docker containerization,
  README'de telif hakkı/ToS uyarısı var ("bazı siteler otomatik istekleri engelleyebilir, telif
  hakkına dikkat edin"). Yazar (Sarthak Mishra, sarthakmishra.com) 30 gerçek public repo'su olan,
  doğrulanabilir kişisel/profesyonel çevrimiçi varlığı olan aktif bir geliştirici. Şüpheli
  hook/otomatik-çalıştırma kodu bulunamadı.
- **Kurulum:** `docker build -t site-cloner-mcp . && docker run -i --rm site-cloner-mcp` veya
  Cursor/Claude için proje-özel ya da global MCP config dosyasına ekleme. Yerel onay gerekir, API
  key gerekmez.

#### 58. [w01fgang/mcp-design-comparison](https://github.com/w01fgang/mcp-design-comparison)
- **Yıldız:** 0 · **Fork:** 0 · **Açık issue:** 0 · **Lisans:** MIT
- **Güncellik:** 34 commit ana dalda (`master`) — düşük yıldız sayısına rağmen (henüz keşfedilmemiş,
  şişirme paterni DEĞİL) olgun/aktif geliştirilmiş bir kod tabanı; aynı kategorideki alternatif
  `leky90/mcp-image-compare-server` (4★ ama sadece 3 commit) ile karşılaştırıldığında belirgin
  şekilde daha zengin özellik seti (aşağıdaki B bölümüne bak).
- **Ne işe yarar:** Tasarım mockup'larını implementasyon ekran görüntüleriyle piksel piksel
  karşılaştıran tek-araçlı (`compare_design`) bir MCP sunucusu — pixelmatch tabanlı fark tespiti,
  SSIM (0-1) algısal benzerlik skoru, PNG/JPEG/WebP/GIF/TIFF/**SVG** çoklu format desteği,
  çözünürlük uyuşmazlıklarında otomatik yeniden boyutlandırma, belirli bölgeleri karşılaştırmadan
  hariç tutma, fark kümelerinin lokalizasyonu ve CI/CD eşik-tabanlı regresyon kapısı (threshold
  assertion). **`AGENTS.md`'nin "Pixel-perfect emulation — match the target's spacing, colors,
  typography exactly" ve "Beauty-first — every pixel matters" ilkelerine doğrudan ölçülebilir bir
  doğrulama katmanı ekliyor** — klonlanan bir bölümün ekran görüntüsünü orijinal hedef sitenin
  ekran görüntüsüyle otomatik karşılaştırıp sayısal bir uyum skoru üretebiliyor (Tur 18'deki
  Lighthouse MCP genel performans/SEO ölçerken, bu doğrudan görsel/piksel uyumu ölçüyor —
  tamamlayıcı, çakışmıyor).
- **Neden meşru:** MIT lisanslı, npm üzerinden resmi dağıtılıyor (`mcp-design-comparison`), API key
  gerektirmiyor, TypeScript ile yazılmış. Yazar (Denis Sumin / w01fgang, Londra/Bali merkezli
  full-stack geliştirici) 95 public repo'su, 18 takipçisi, tutarlı açık kaynak katkı geçmişi ve
  sponsorluk aktivitesi olan doğrulanabilir gerçek bir geliştirici. Şüpheli hook/otomatik-çalıştırma
  kodu bulunamadı.
- **Kurulum:** `npm install -g mcp-design-comparison` veya `npx mcp-design-comparison` ile MCP
  config'e stdio server olarak ekleme. Yerel onay gerekir, API key gerekmez.

### B) Doğrulanan ama EKLENMEYEN Bulgular (Tur 19)

- **[GetBindu/awesome-claude-code-and-skills](https://github.com/GetBindu/awesome-claude-code-and-skills)**
  — doğrulandı (192★, 186 fork, Apache-2.0), ama gerçek `SKILL.md` içermiyor; 250+ skill'i başka
  repolara (çoğu zaten bu katalogda — `anthropics/claude-code`, `obra/superpowers` vb.) link veren
  bir keşif-dizini. **Eklenmedi** (meta-dizin kriteri).
- **[abubakarsiddik31/claude-skills-collection](https://github.com/abubakarsiddik31/claude-skills-collection)**
  — doğrulandı, yüksek yıldız sayısına rağmen (1.1k★, 192 fork) aynı gerekçeyle **eklenmedi**: her
  skill satırı "Source: github.com/..." formatında dış repoya link veriyor, kendi `SKILL.md`
  içeriği yok. Yüksek yıldız/fork oranı burada organik görünüyor (65 commit, düzenli bakım) ama yine
  de meta-dizin kriterine takılıyor.
- **[CloudEngineHub/agents](https://github.com/CloudEngineHub/agents)** — doğrulandı, GitHub'da
  açıkça `wshobson/agents`'ın (zaten kataloğun #4 maddesi) forku olarak işaretli. **Eklenmedi**
  (zaten kataloglanmış bir kaynağın forku, "aynı kaynağın mirror/forku" kriteri).
- **[rshah515/claude-code-subagents](https://github.com/rshah515/claude-code-subagents)** —
  detaylıca doğrulandı: 102★, 17 fork, MIT lisans (gerçek LICENSE dosyası var), 24 kategori altında
  165 gerçek `.md` agent dosyası (frontmatter + sistem promptu formatında, `core/code-reviewer.md`
  içeriği bizzat okunarak teyit edildi), yazar profili gerçek. `github-setup.sh` dosyası incelendi —
  tüm komutlar yorum satırı halinde, otomatik çalışan hiçbir şey yok, şüpheli değil. **Eklenmedi:**
  kataloğun zaten 6 tane genel-amaçlı "100+ subagent koleksiyonu" maddesi var (#3, #4, #11, #20,
  #43, #49); bu şablonun tech stack'ine veya kullanım senaryosuna özel bir farklılaşma sunmuyor —
  ek bir generic koleksiyon eklemek "kalite/dürüstlük > miktar" ilkesine aykırı olur.
- **[supatest-ai/awesome-claude-code-sub-agents](https://github.com/supatest-ai/awesome-claude-code-sub-agents)**
  (Alan AI / tryalan.ai şirketine ait) — doğrulandı: 171★, 28 fork, MIT, gerçek `.md` agent dosyaları
  (`languages/`, `frameworks/`, `architecture/` vb. altında). Şirket gerçek ve doğrulanabilir
  (tryalan.ai, e-posta, CLI aracı vb. ilişkili repolar). **Eklenmedi:** yukarıdaki rshah515 ile aynı
  gerekçe — zaten 6 benzer genel-amaçlı koleksiyon kataloglanmış, bu şablona özel bir katkısı yok;
  ayrıca kendi ürününü (Supatest AI) tanıtan bir şirket deposu olması nötr bir faktör değil, hafif
  bir dikkat notu.
- **`leky90/mcp-image-compare-server`** (4★, 2 fork, MIT, TypeScript, ama sadece 3 commit) —
  yukarıda #58 seçilirken karşılaştırma için incelendi; yazar gerçek/doğrulanabilir (LDKTech
  Solutions, Vietnam) ve kod meşru, ama `w01fgang/mcp-design-comparison` (34 commit, SSIM skoru,
  CI/CD eşik kapısı, SVG desteği, bölge hariç tutma) belirgin şekilde daha olgun/zengin bulundu —
  iki benzer aracı birden eklemek yerine daha güçlü olan tercih edildi.
- **Alibaba Qwen API ücretsiz katmanı** — araştırıldı, geliştirici API ücretsiz katmanı 15 Nisan
  2026'da kapatıldı (OAuth üzerinden sınırsız erişim sona erdi). Kalan seçenekler (Alibaba Cloud
  deneme kredisi — 90 gün sınırlı, ya da Groq üzerinden Qwen3-32B barındırma) kalıcı/doğrudan bir
  ücretsiz katman değil. **Eklenmedi.**
- **Moonshot AI (Kimi) API** — araştırıldı, kalıcı ücretsiz üretim katmanı hiç var olmamış; API
  kullanmak için minimum $1 yükleme gerekiyor (sadece küçük bir tek-seferlik deneme kredisi var).
  Web sohbet arayüzü ücretsiz ama API değil. **Eklenmedi** (tek-seferlik kredi kriteri).

---

*Son güncelleme: 2026-09-18 (Tur 19). Sonraki turlarda bu dosya okunup yeni kaynaklar üstüne
eklenecek, Tur 1–19'da listelenenler tekrarlanmayacak. Tur 6'da `OthmanAdi/planning-with-files`
(ve aynı adla dolaşan fork/mirror'ları), Tur 13'te `athola/claude-night-market`
(`auto-star-repo.sh` hook'u) şüpheli/manipülatif bulundu — kurmadan önce ilgili notları oku.
Tur 17'nin metodoloji düzeltmesi (genel `WebFetch`/`WebSearch` tek-repo GitHub kısıtlamasına tabi
DEĞİL, sadece `mcp__github__*` MCP araçları scope'lu) Tur 18 ve 19'da tekrar doğrulandı ve
kullanıldı. Tur 9'da OpenRouter, Tur 10'da Jina AI Reader, Tur 13'te Nebius AI Studio, Tur 14'te
Z.ai GLM Flash, Tur 15'te Vercel AI Gateway ücretsiz katmanlarının birincil kaynak doğrulaması
hâlâ bekliyor (ticari domain engeline takılıyorlar, GitHub kısıtlaması değil — Tur 19'da yeni
provider adayı bulunmadığı için bu beşi tekrar denenmedi). **Tur 19'da YENİ:** proje-özel
`/clone-website` iş akışı boşluğu `SarthakMishra/site-cloner` (#57) ile, "klon ile orijinali piksel
düzeyinde karşılaştır" boşluğu `w01fgang/mcp-design-comparison` (#58) ile dolduruldu. **Tur 19'da
doğrulanan tarama olgunluğu:** ~15 aday incelendi, sadece 2'si gerçekten yeni bulundu; 18 tur
sonra kataloğun kapsamlı olduğu ve gelecekteki turların giderek daha az yeni kaynak bulmasının
beklenen bir sonuç olduğu (kaynak havuzunun doğal olarak daralması) not edilmelidir. **Tur 19'da
git hijyeni notu:** detached HEAD durumu dördüncü kez (Tur 13, 17, 18, 19) tekrarladı — artık
rutin bir başlangıç kontrolü, ayrı bir "sorun" olarak raporlamaya gerek yok.*

---

## Tur 20 — 2026-09-19

Oturum saati kontrol edildi: 03:04 UTC / 06:04 Türkiye saati — kesme noktasının (12:00 UTC / 15:00
Türkiye) çok öncesinde, normal araştırma turu yapıldı. Bu, önceki gecenin (Tur 1–19, 2026-09-16 —
2026-09-18) 19 turdan sonra kapandığı bir yeni günün ilk turu. Oturum başında repo yine "detached
HEAD" durumundaydı; `git fetch` ile `origin/master`'ın (`705b7ca`) HEAD ile birebir aynı commit
olduğu doğrulandı (çalışma kaybı yok), `git checkout -B master origin/master` ile branch normale
döndürüldü. Doğrulama `WebSearch` + `WebFetch` üzerinden yapıldı; `mcp__github__*` araçları bu
oturumda da tek-repo (`nusygako/ai-website-cloner-template`) scope'una tabi olduğu için genel
araştırmada hiç kullanılmadı. ~10 aday incelendi (skill/MCP tarafında 5-6, ücretsiz API tarafında
birkaç zaten-bilinen sağlayıcı tekrar karşımıza çıktı — yeni bulunmadı); 2 gerçekten yeni ve
niş-doldurucu kaynak + 1 önemli genel güvenlik bulgusu eklendi.

### A) MCP Sunucusu / Skill (proje-özel faydalı — Design Tokens / Typography)

#### 59. [sliday/google-fonts-skill](https://github.com/sliday/google-fonts-skill)
- **Yıldız:** 14 · **Fork:** 2 · **Açık issue:** 0 · **Lisans:** MIT
- **Güncellik:** 18 commit, repo 21 Mart 2026'da oluşturulmuş, son push 7 Eylül 2026 — düşük ama
  organik yıldız sayısı (şişirilmiş yıldız paterni DEĞİL), aktif bakımlı.
- **Ne işe yarar:** Google Fonts'un 1.923 zenginleştirilmiş font veritabanını kullanan hem MCP
  sunucusu hem Claude Code skill'i — mood/personality/use-case etiketleriyle BM25 tabanlı font
  arama, 73 kanıtlanmış font eşleştirmesi (pairing), minor-second'dan golden-ratio'ya 8 modüler
  tipografi ölçeği; doğrudan CSS custom properties + Tailwind config + Google Fonts embed linki
  üretiyor. **`docs/research/INSPECTION_GUIDE.md` Phase 1'in "Typography — font family, sizes
  (h1-h6, body...), weights, line heights, letter spacing" maddesini ve `AGENTS.md`'nin Tailwind
  v4 + oklch design-token yaklaşımını doğrudan otomatikleştiriyor** — hedef sitenin fontuna en
  yakın/uyumlu Google Fonts eşleşmesini bulup Tailwind v4 config'ine hazır token üretebiliyor.
- **Neden meşru:** MIT lisanslı, gerçek kod (`src/google_fonts_mcp/server.py` — FastMCP
  implementasyonu, `core.py` — arama/üretim mantığı), `tests/` klasörü var (placeholder değil),
  PyPI üzerinden de resmi dağıtılıyor (`google-fonts-mcp` paketi). API key gerektirmiyor — font
  verisi yerel CSV'lerde (`data/fonts.csv`, `pairings.csv`, `scales.csv`) gömülü.
- **Kurulum:** `pip install google-fonts-mcp` veya repoyu klonlayıp `.claude-plugin/` üzerinden
  Claude Code plugin'i olarak ekleme, ya da `SKILL.md`'yi doğrudan `~/.claude/skills/` altına
  kopyalama. Yerel onay gerekir, API key gerekmez.

### B) Keşif/Dizin Kaynağı (kurulum değil, referans — ücretsiz LLM API karşılaştırması)

#### 60. [amardeeplakshkar/awesome-free-llm-apis](https://github.com/amardeeplakshkar/awesome-free-llm-apis) — DİKKAT: liste/referans deposu, ama önceki meta-dizinlerden FARKLI
- **Yıldız:** 168 · **Fork:** 31 · **Açık issue:** 1 · **Lisans:** CC0-1.0 (tam kamu malı)
- **Güncellik:** 12 commit, içerikte "son doğrulama: Mart 2026" notu var — Tur 2/3/4/17/22'deki
  (ComposioHQ, punkpeye, hesreallyhim, travisvn, rohitg00) meta-dizinlerden ayrılan önemli fark:
  dış repolara link VERMİYOR, her sağlayıcının rate limit/OpenAI SDK uyumluluğu/hız kademesi/
  ücretsiz model listesi bilgisini doğrudan kendi README'sinde gerçek markdown tabloları halinde
  barındırıyor (spot-check yapıldı: GitHub Models'ın kapandığı doğru şekilde not düşülmüş, güncel
  OpenRouter `:free` kademe bilgisi kataloğun #32 maddesiyle uyumlu).
- **Ne işe yarar:** Kalıcı ücretsiz LLM API'lerini (deneme kredisi veya süre sınırlı promosyon
  DEĞİL) karşılaştıran, düzenli güncellenen bir referans tablosu — Google Gemini, Mistral AI,
  Cohere, Zhipu AI gibi birinci-parti sağlayıcılar ile Groq, Cerebras, OpenRouter gibi çıkarım
  sağlayıcılarını, her biri için OpenAI SDK uyumlu kod örnekleriyle listeliyor. Kataloğun C
  bölümündeki (Tur 1, 2, 4, 5, 13, 14 vb.) tek tek doğrulanan sağlayıcı girişlerini çapraz kontrol
  etmek ve gelecek turlarda yeni aday taramak için verimli bir başlangıç noktası.
- **Neden meşru:** CC0 lisanslı (telif iddiası yok), gerçek içerik (link listesi değil, dolu
  tablolar), "Contributing Guidelines" ile açık topluluk katkı süreci var, yanlış/güncelliğini
  yitirmiş bilgiye rastlanmadı.
- **Kurulum:** Doğrudan kurulum yok — bir referans/karşılaştırma tablosu. İlgi çeken sağlayıcının
  resmi sayfasından (ör. console.groq.com, aistudio.google.com) kendi key'ini al. Kataloğun kendi
  doğrulama ilkesi gereği, buradan alınan her rakam kullanılmadan önce sağlayıcının resmi sayfasında
  ayrıca teyit edilmeli (bu repo ikincil/çapraz-doğrulama kaynağıdır, birincil kaynak değildir).

### C) 🚨 Genel Güvenlik Bulgusu (numaralı bir "kaynak" değil — tüm skill/agent kurulumları için geçerli bir uyarı)

**Snyk "ToxicSkills" denetimi (Şubat 2026)** —
[snyk.io/blog/toxicskills-malicious-ai-agent-skills-clawhub](https://snyk.io/blog/toxicskills-malicious-ai-agent-skills-clawhub/):
ClawHub ve skills.sh üzerindeki 3.984 AI agent skill'ini tarayan ilk kapsamlı güvenlik denetimi —
skill'lerin **%36'sında prompt-injection payload'u**, toplam **1.467 farklı zararlı payload**,
**%13.4'ünde kritik seviye güvenlik açığı** tespit edildi. ClawHub'a yeni bir skill yayınlamak için
tek gereken bir `SKILL.md` dosyası ve bir haftalık GitHub hesabı — kod imzalama, güvenlik
incelemesi veya varsayılan sandbox YOK. Aynı ay OpenSourceMalware.com araştırmacıları, ClawHub
üzerinden dağıtılan 30+ zararlı skill kullanan, Claude Code ve OpenClaw kullanıcılarını hedefleyen
koordineli bir malware kampanyası belgeledi.
- **Bu kataloğa etkisi:** Bu bulgu, görevin kendi dışlama kriterlerini (paylaşımlı key, ToS bypass,
  hesap askı riski) doğrudan destekliyor ve genişletiyor. Bu katalogdaki her madde 20 tur boyunca
  tek tek yıldız/lisans/commit/dosya-yapısı doğrulamasından geçirildi ve şüpheli hook/otomatik-
  çalıştırma kodu arandı (bkz. Tur 6'daki `OthmanAdi/planning-with-files` ve Tur 13'teki
  `athola/claude-night-market` bulguları) — ama kullanıcı ileride BAŞKA bir kaynaktan (ClawHub,
  skills.sh gibi bir pazaryerinden, ya da bu kataloğun kapsamadığı herhangi bir yerden) skill/agent
  kurarsa aynı titizliği kendisi uygulamalı: kurulum ÖNCESİ `SKILL.md`/agent dosyasının tam
  içeriğini oku, otomatik çalışan hook/shell-script ara, hesabın/reponun yaşına ve yıldız/issue
  oranına dikkat et (şişirilmiş yıldız + tek haneli issue = kırmızı bayrak, bkz. dosyanın başındaki
  "Ayrıca dikkat" notu).

### D) Doğrulanan ama EKLENMEYEN Bulgular (Tur 20)

- **[obviousworks/Claude-AI-skills-collection-2026](https://github.com/obviousworks/Claude-AI-skills-collection-2026)**
  — doğrulandı (55★, 19 fork, sadece 3 commit), gerçek `SKILL.md` içermiyor; 94 skill'i başka
  repolara (çoğu zaten bu katalogda) link veren bir keşif-dizini. Kataloğun zaten 5 benzer keşif-
  dizini var (#10, #17, #22, #42, #49); düşük commit sayısı ve mütevazı etkileşim de eklenmemesini
  destekliyor. **Eklenmedi** (meta-dizin + redundant kategori kriteri). Not: bu deponun README'si
  yukarıdaki Snyk ToxicSkills bulgusuna atıfta bulunuyordu — asıl değerli olan bu güvenlik
  bulgusuydu, kendisi değil (bu yüzden Snyk raporu C bölümünde ayrıca birincil kaynaktan
  doğrulanarak eklendi).
- **[GetBindu/awesome-claude-code-and-skills](https://github.com/GetBindu/awesome-claude-code-and-skills)**
  — Tur 19'da zaten doğrulanıp aynı gerekçeyle (meta-dizin) eklenmemişti, bu turda tekrar karşımıza
  çıktı, tekrar **eklenmedi**.
- **[nejib1/Free-LLM](https://github.com/nejib1/Free-LLM)** ve **[mnfst/awesome-free-llm-apis](https://github.com/mnfst/awesome-free-llm-apis)**
  — ikisi de doğrulandı, ikisi de gerçek/meşru içerik barındırıyor ama #60'ta seçilen
  `amardeeplakshkar/awesome-free-llm-apis` ile aynı işlevi görüyorlar (ücretsiz LLM API karşılaştırma
  tablosu). Üç benzer referans tablosu eklemek yerine en yüksek yıldız/en temiz lisansa (CC0) sahip
  olan tercih edildi. **Eklenmedi** (redundant kategori kriteri, Tur 19'daki "kalite > miktar"
  ilkesiyle tutarlı).
- **xyzs996/free-llm-api** — doğrulandı, benzer bir liste ama daha az yıldız/daha az yapılandırılmış
  içerik; yukarıdaki gerekçeyle **eklenmedi**.

---

## Tur 21 — 2026-09-19 (04:02 UTC / 07:02 Türkiye saati başladı)

Bu tur, dosyanın başındaki özet okunduktan ve önceden kataloglanmış 60 kaynağın tam listesi
(`grep` ile `#### N.` başlıkları ve `github.com/...` linkleri) çıkarılarak tekrar aramanın önüne
geçildikten sonra başladı. Araştırmanın ağırlıklı kısmı bir alt-agent'a (general-purpose) devredildi
— hem bağlam tasarrufu için hem de bu geç-tur aşamasında (60 kaynaktan sonra) azalan getiri
sorununu tek bir odaklı arama turunda toplamak için. Alt-agent'ın bulduğu en güçlü 2 aday
(`jezweb/claude-skills`, `awesome-skills/code-review-skill`) bu oturumda ayrıca bağımsız olarak
`WebFetch` ile GitHub repo sayfasından yıldız/fork/issue/lisans rakamları tekrar doğrulandı
(`api.github.com` JSON endpoint'i bu turda 403 döndürdü — Tur 1-20'de kullanılan yöntem artık
çalışmıyor olabilir, bunun yerine düz `github.com/<owner>/<repo>` HTML sayfası fetch edilerek
doğrulama yapıldı, sonuç: rakamlar alt-agent'ın raporuyla birebir eşleşti). SambaNova Cloud için
resmi domain (`sambanova.ai`, `cloud.sambanova.ai`) bu turda da `WebFetch` ile denendi ve
ticari-domain engeline takıldı (Tur 1/7-20'deki desenle tutarlı); bilgiler `WebSearch` sonuçlarından
çapraz doğrulandı ve kaynaklar arasında rate-limit rakamlarında küçük tutarsızlık bulundu (aşağıya
bak, dikkatli/hedge'li şekilde not edildi). ~9 aday incelendi (alt-agent + bu oturumun kendi
doğrulaması), 3'ü kataloğa eklendi, 1'i düşük-benimseme uyarısıyla eklendi, 5'i reddedildi (biri
ciddi bir lisans-ihlali/korsanlık bulgusu — aşağıya bak).

### A) Skill Koleksiyonları (proje-özel — Tailwind v4/shadcn ve kod incelemesi boşluğu)

#### 61. [jezweb/claude-skills](https://github.com/jezweb/claude-skills)
- **Yıldız:** 1.0k · **Fork:** 102 · **Açık issue:** 13 · **Lisans:** MIT
- **Güncellik:** 717 commit, 7 açık PR — sağlıklı yıldız:fork:issue oranı (kataloğun başındaki
  "binlerce yıldız + tek haneli issue" şişirilmiş-yıldız deseninin TAM TERSİ), aktif bakımlı.
- **Ne işe yarar:** Claude Code plugin marketplace'i, 11 plugin altında 63 gerçek `SKILL.md`
  dosyası (klonlanarak doğrulandı) barındırıyor: `frontend` plugin'i (`tailwind-theme-builder`,
  `shadcn-ui`, `landing-page`, `product-showcase`, `react-patterns`, `design-review`), `design-assets`
  plugin'i (`color-palette`, `favicon-gen`, `icon-set-generator`, `image-processing`,
  `ai-image-generator`), `web-design` (`seo-local-business`), ve `ux-compare`/`ux-extract`/
  `responsiveness-check`/`project-docs` skill'leri. **`tailwind-theme-builder` skill'i bu şablonun
  tam kullandığı yığınla (Tailwind v4 + shadcn/ui) birebir örtüşüyor** — 18 somut "gotcha"
  dokümante ediyor (ör. `:root`'un `@layer base` içinde theming'i bozması, çift `hsl()` sarmalama,
  `tailwindcss-animate`'in deprecated olması) — `AGENTS.md`'nin "bu senin bildiğin Next.js değil,
  breaking change'lere dikkat et" uyarısının Tailwind v4 karşılığı niteliğinde.
- **Neden meşru:** MIT lisanslı, gerçek dosya yapısı (placeholder/link listesi değil, klonlanarak
  63 `SKILL.md` doğrulandı), sağlıklı topluluk etkileşim oranı.
- **Kurulum:** `/plugin marketplace add jezweb/claude-skills` ardından
  `/plugin install frontend@jezweb-skills` (ve istenirse `design-assets@jezweb-skills`). Yerel
  onay gerekir (plugin kurulumu), API key gerekmez.

#### 62. [awesome-skills/code-review-skill](https://github.com/awesome-skills/code-review-skill)
- **Yıldız:** 2.0k · **Fork:** 205 (yıldızın ~%10'u — organik büyümeyle uyumlu bir oran) ·
  **Açık issue:** 1 · **Lisans:** MIT
- **Güncellik:** Git geçmişinde dış katkıcılardan (`xronocode`, `Momoyeyu`, `smf-h`) birleştirilmiş
  PR'lar var (Ruby/Rails, FastAPI, Swift, PHP, Zig rehberleri eklemişler) — tek-yazarlı ani
  yıldız patlaması DEĞİL, çok-katkıcılı organik büyüme sinyali. **Not:** 2k yıldıza karşı sadece
  1 açık issue biraz düşük taraf; ama fork oranı ve çok-yazarlı commit geçmişi şişirilmiş-yıldız
  şüphesini bu durumda gideriyor.
- **Ne işe yarar:** Tek bir gerçek `SKILL.md` (~220 satır, progressive-disclosure) + 20'den fazla
  dile özel `reference/*.md` inceleme rehberi (toplam 21.000+ satır); bunların arasında bu projenin
  yığınına birebir uyan ~870 satırlık bir **React 19 / Next.js / TanStack Query v5** rehberi ve
  ayrı bir TypeScript rehberi var.
- **Neden meşru:** Klonlanarak doğrulandı (gerçek `SKILL.md`, `reference/` klasörü,
  `CONTRIBUTING.md`), MIT lisanslı, çok-katkıcılı organik commit geçmişi.
- **Kurulum:** `npx skills add awesome-skills/code-review-skill` veya repoyu klonlayıp
  `.claude/skills/` altına kopyalama. Yerel onay gerekmez.

### B) MCP Sunucusu (düşük-benimseme, dikkatli/caveat'li giriş — Design Tokens boşluğu)

#### 63. [kenneives/design-token-bridge-mcp](https://github.com/kenneives/design-token-bridge-mcp) — ⚠️ DÜŞÜK BENİMSEME
- **Yıldız:** 5 · **Fork:** 1 · **Açık issue:** 1 · **Lisans:** MIT · Son commit: 2026-08-17 (yeni)
- **Ne işe yarar:** Tailwind config, ham CSS custom property, Figma Variables veya W3C DTCG JSON'dan
  design token çıkaran ve CSS variable/Tailwind config/Material3/SwiftUI tema üreten 9 araçlı bir
  MCP sunucusu; ayrıca bir `validate_contrast` (WCAG AA/AAA) aracı var.
- **Neden dikkatli eklendi (tam onay DEĞİL):** Sadece 5 yıldız/1 fork — topluluk doğrulaması çok
  az, bakımının süreceği garanti değil. Ama gerçek olduğu doğrulandı (91 unit test + 31 Playwright
  test, CI workflow'ları, temiz TypeScript kaynak kodu). `extract_tokens_from_css` ve
  `validate_contrast` araçları `INSPECTION_GUIDE.md`'nin "Design Tokens to Extract" bölümünü ve
  WCAG kontrast gereksinimini doğrudan otomatikleştiriyor — kataloğun mevcut Figma-token
  araçlarından (Figma'dan çıkarıyorlar) farklı olarak CANLI bir sitenin render edilmiş CSS'inden
  çıkarım yapıyor, bu net bir boşluk.
- **Kurulum:** MCP config'e ekleme (`npm install` + config, yerel onay gerekir). **Kurulum öncesi
  kendi gözlemini yap** — düşük yıldız sayısı nedeniyle bu kataloğun diğer maddelerinden daha az
  güvenle öneriliyor.

### C) Ücretsiz & Meşru API Sağlayıcısı

#### 64. SambaNova Cloud ücretsiz katmanı (resmi) — ⚠️ rakamlar ikincil kaynaktan, teyit gerekir
- **Domain engeli:** `sambanova.ai` ve `cloud.sambanova.ai` bu turda da `WebFetch` ile denendi,
  ticari-domain engeline takıldı (Tur 1/7-20'deki desenle tutarlı) — aşağıdaki rakamlar `WebSearch`
  sonuçlarından derlendi, birincil kaynakta DOĞRULANMADI.
- **Ücretsiz katman (kaynaklar arası tutarsızlık var — dikkat):** Resmi blog başlığı "SambaNova
  Cloud Developer Tier Is Live" kalıcı/süresiz bir katman olduğunu ima ediyor; ama tarama sonucu
  bulunan rakamlar çelişkili — bazı kaynaklar "günde 200.000 token, dakikada 20 istek", bazıları
  "günde SADECE 20 istek" diyor; ayrıca ayrı bir "$5 kredi, 3 ayda dolan" katmanından da bahsediliyor
  ki bu kalıcı değil, deneme kredisi. Model kataloğu da kaynaklar arasında tutarsız listeleniyor
  (Llama 3.3 70B/GPT-OSS 120B vs. DeepSeek-V3.1/V3.2/MiniMax-M2.7/Gemma). **Kurulum öncesi
  cloud.sambanova.ai/apis üzerinde güncel rakamları MUTLAKA teyit et** — bu giriş kesin bir rakam
  taahhüdü değil, sadece "araştırmaya değer, kişisel key alınan resmi bir sağlayıcı var" bilgisi.
- **Ne işe yarar:** Hızlı çıkarım donanımında açık modellere erişim — Claude Code'un yanında
  ikincil/hızlı model sağlayıcısı.
- **Neden meşru (rakamlar hariç):** Resmi SambaNova ürünü, paylaşımlı/havuzlanmış key DEĞİL, her
  kullanıcı kendi hesabı ve kendi key'ini alıyor.
- **Kurulum:** cloud.sambanova.ai/apis üzerinden ücretsiz kayıt (kredi kartı gerekmez) + key al,
  rakamları o sayfada teyit ettikten sonra ortam değişkeni olarak ekle. Yerel onay gerekir, bu
  oturumdan otomatik yapılamaz.

### D) Doğrulanan ama EKLENMEYEN Bulgular (Tur 21)

- **Microck/font-mcp** — "Font Hunter" özelliği açıkça "topluluk paylaşım hub'ları (VK, Telegram
  indeksleri)" ve "open directory dorking" kullanarak lisanslı/ücretli fontları izinsiz indirmeyi
  hedefliyor — yani telif/lisans ihlalini (korsanlık) doğrudan otomatikleştiriyor. Yıldız sayısından
  bağımsız olarak görevin "meşru" kriterini AÇIKÇA ihlal ediyor. **KESİNLİKLE EKLENMEDİ.**
- **aparajithn/agent-scraper-mcp** — sadece hosted (onrender.com) çalışıyor, repoda commit edilmiş
  bir `MONETIZATION_PLAN.md` var ve son commit'ler "ücretsiz katmanı daraltma/rate-limit sıkılaştırma"
  hakkında — yakında ücretliye geçeceğinin sinyali. Ayrıca zaten kataloglanmış crawl4ai/firecrawl/
  playwright/chrome-devtools-mcp scraping kapsamıyla redundant. **Eklenmedi.**
- **undirectlookable/svgo-mcp** — 0 yıldız, 0 fork, 0 issue; işlevsel olarak sorun yok (ince bir
  SVGO wrapper, MIT) ama sıfır benimseme sinyali, mevcut araçlara göre önerilecek kadar
  doğrulanabilir değil. **Eklenmedi.**
- **Together AI / Fireworks AI / Hyperbolic** — 2026 itibarıyla üçü de sadece deneme kredisi
  sunuyor (kalıcı ücretsiz katman DEĞİL). **Eklenmedi.**
- **Nebius AI Studio / Scaleway** — Nebius sadece ~1$'lık tek seferlik deneme kredisi sunuyor;
  Scaleway'in ücretsiz token'ları kredi kartı gerektiriyor ve yine kredi-bazlı (kalıcı günlük
  katman değil). Tur 13'te zaten "birincil kaynak doğrulaması bekliyor" olarak işaretlenmişti —
  bu turda doğrulandı ve kalıcı ücretsiz katman OLMADIĞI netleşti. **Eklenmedi**, dosyanın altındaki
  "bekleyen doğrulama" listesinden Nebius çıkarıldı.

---

## Tur 22 — 2026-09-19 (~05:02 UTC / 08:02 Türkiye saati başladı)

Bu tur, dosyanın tamamı okunup mevcut 64 kaynağın başlıkları `grep` ile çıkarıldıktan sonra
başladı. Odak, `AGENTS.md`'nin kendi niş ihtiyaçları (font self-hosting/asset indirme, tarayıcı
otomasyonu) oldu — önceki 21 turun zaten doldurduğu "genel skill koleksiyonu" ve "ücretsiz LLM API"
kategorilerinde azalan getiri net şekilde görüldü (çoğu aday ya redundant ya trial-kredi ya da
0-yıldız çıktı). ~10 aday incelendi: 3'ü kataloğa eklendi (#65-#67), 1 mevcut madde (#21, Cerebras)
"artık geçersiz" düzeltme notuyla güncellendi, geri kalanı reddedildi (biri şişirilmiş-yıldız
deseni, aşağıya bak).

### A) Asset İndirme / Font Self-Hosting (proje-özel — `public/` klasör boşluğu)

#### 65. [majodev/google-webfonts-helper](https://github.com/majodev/google-webfonts-helper)
- **Yıldız:** 13.1k · **Fork:** 437 · **Açık issue:** 60 · **Lisans:** MIT
- **Güncellik:** 190 commit, aktif bakımlı, canlı hosted servis (`gwfh.mranftl.com`) çalışıyor.
  Sağlıklı yıldız:issue oranı (~218:1), şişirilmiş-yıldız deseni DEĞİL.
- **Ne işe yarar:** Herhangi bir Google Fonts ailesini (Google'ın kendi Fonts API'sinden farklı
  olarak) eot/ttf/svg/woff/woff2 formatlarında indirip hazır CSS `@font-face` snippet'i üreten,
  self-hosting'e hazırlayan bir servis + açık JSON API (`/api/fonts`, `/api/fonts/[id]`). Canlı
  hosted instance'ı (`gwfh.mranftl.com`) API key gerektirmeden kullanılabiliyor.
- **Neden meşru:** Google Fonts tamamen OFL (Open Font License) lisanslı — self-hosting tamamen
  yasal ve Google'ın kendi dokümantasyonunda önerilen bir pratik; bu tam olarak Tur 21'de
  reddedilen `Microck/font-mcp`'nin (lisanslı/korsan font indirme) TERSİ bir kategori. `AGENTS.md`'nin
  "Real content — use actual text and assets from the target site" ilkesini tipografi için
  tamamlıyor; kataloğun mevcut #59 (`sliday/google-fonts-skill`, font ÖNERİSİ/eşleştirme) ile
  redundant DEĞİL — bu madde gerçek font DOSYALARINI indiriyor.
- **Kurulum:** `gwfh.mranftl.com` üzerinden doğrudan API çağrısı (kurulum gerekmez) veya repoyu
  klonlayıp Docker ile kendi instance'ını çalıştırma (kendi deploy'un için Google Fonts API key
  gerekir, ama hosted instance'ı kullanmak için gerekmez).

#### 66. [mmastrac/webfont-dl](https://github.com/mmastrac/webfont-dl) — ⚠️ ESKİ AMA FONKSİYONEL
- **Yıldız:** 333 · **Fork:** 17 · **Açık issue:** 5 · **Lisans:** MIT (paket.json'da doğrulandı)
- **Güncellik:** Son commit Mart 2023 — 3+ yıldır güncellenmiyor (aktif bakımlı DEĞİL). Ama basit,
  dar kapsamlı bir CSS-parse + indirme aracı olduğu için (Node.js, minimal bağımlılık) bu tür
  araçlarda eskimişlik daha az risk taşıyor; 333 yıldız/17 fork sağlıklı bir organik benimseme
  sinyali.
- **Ne işe yarar:** Herhangi bir CSS dosyasındaki `@font-face` kurallarını okuyup referans verilen
  font dosyalarını indiren, isteğe bağlı olarak base64 data-URI olarak CSS'e gömen bir CLI. Google
  Fonts'a özel DEĞİL — dokümantasyonu "`@font-face` kullanan herhangi bir hosted CSS'e karşı
  çalışmalı" diyor, yani #65'in aksine hedef sitenin KENDİ (Google-dışı, marka-özel self-hosted)
  fontlarını da indirebiliyor.
- **Neden meşru:** MIT lisanslı, kaynak kodu küçük ve incelenebilir (sadece CSS parse + HTTP GET —
  gizli davranış yok), hedef sitenin zaten tarayıcıya herkese açık şekilde sunduğu font dosyalarını
  indiriyor (görsel/video indirme script'lerinin bu şablonda zaten yaptığı işin font karşılığı).
- **Kurulum:** `npm install -g webfont-dl`, ardından `webfont-dl <css-url> -o public/fonts/font.css`
  gibi bir komutla çalıştırma. Yerel onay gerekir, API key gerekmez. **Dikkat:** proje 3+ yıldır
  bakımsız — kurulum öncesi hâlâ çalıştığını doğrula, ciddi bir sorunla karşılaşırsan #65'e veya
  manuel `curl` ile indirmeye geri dön.

### B) Tarayıcı Otomasyonu (RESMİ — Vercel Labs)

#### 67. [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) — RESMİ (Vercel)
- **Yıldız:** 42.9k · **Fork:** 2.9k · **Açık issue:** 387 · **Lisans:** Apache-2.0
- **Güncellik:** 682 commit, aktif bakımlı, resmi Vercel Labs organizasyonu altında. Sağlıklı
  yıldız:issue oranı (~111:1), şişirilmiş-yıldız deseni DEĞİL; kataloğun başındaki #30
  (`vercel/next-devtools-mcp`) ve #35 (Vercel MCP) ile aynı güvenilirlik seviyesinde resmi kaynak.
- **Ne işe yarar:** Yapay zekâ ajanları için native Rust'ta yazılmış bir tarayıcı otomasyon CLI'ı —
  Chrome DevTools Protocol üzerinden erişilebilirlik-ağacı snapshot'ları, kompakt element
  referansları (`@eN`), ekran görüntüsü, navigasyon ve etkileşim sağlıyor. Yerel Chrome/Chromium
  ile (bulut sağlayıcı gerekmeden) çalışıyor; kendi `SKILL.md`'sini de içeriyor
  (`agent-browser skills get <name>`).
- **Neden meşru:** Resmi Vercel Labs deposu, Apache-2.0, yerel çalışıyor (API key gerekmez, tarayıcı
  Chrome for Testing'i otomatik indiriyor). `INSPECTION_GUIDE.md` Phase 1 (çoklu breakpoint ekran
  görüntüsü) ve Phase 4 (teknik yığın analizi) için kataloğun mevcut Chrome DevTools MCP (#12) ve
  Playwright MCP (#19) araçlarına HIZLI, native bir alternatif/tamamlayıcı — Node.js/Puppeteer
  yükü olmadan CDP'ye erişim.
- **Kurulum:** `npm install -g agent-browser && agent-browser install` (Chrome for Testing'i
  otomatik indirir) veya Homebrew/Cargo. Yerel onay gerekir, API key gerekmez.

### C) Doğrulanan ama EKLENMEYEN Bulgular (Tur 22)

- **🚨 "UI/UX Pro Max" skill'i (`nextlevelbuilder/ui-ux-pro-max-skill` ve
  `hylarucoder/benchmark-skill-ui-ux-pro-max`, `WAAMEngineer/ui-ux-pro-max-skill` mirror'ları)** —
  128.9k yıldız / 13.7k fork'a karşı sadece 39 açık issue (oran ~3300:1), aynı pazarlama metniyle
  (aynı özellik listesi, aynı ifadeler) birden fazla hesapta dolaşıyor — dosyanın en başındaki
  "şişirilmiş yıldız (binlerce yıldız + tek haneli/çok düşük issue sayısı deseni)" uyarısıyla
  birebir örtüşüyor. Otomatik hook/shell çalıştırma gibi doğrudan tehlikeli bir davranış BU TURDA
  TESPİT EDİLMEDİ (yani Tur 6/13/21'deki gibi "kurma" seviyesinde bir güvenlik uyarısı DEĞİL), ama
  yıldız sayısı güvenilir bir benimseme sinyali OLARAK KULLANILAMAZ. **KESİNLİKLE EKLENMEDİ**,
  gelecek turlar bu deseni gördüğünde aynı şekilde reddetmeli.
- **`niyamvora/fontfetch`** — teknik olarak #65/#66'dan daha da iyi bir fit (hedef sitenin TÜM
  fontlarını tek komutla indirip Next.js/Tailwind config'i dahil proje-hazır bir klasöre koyuyor,
  kodu meşru — piracy hub'ı DEĞİL, sadece hedef sitenin kendi CSS'ini okuyor). Ama 0 yıldız/0 fork/
  0 issue — sıfır benimseme sinyali. **Eklenmedi**, ama gelecek turlar birkaç ay sonra yıldız
  kazanıp kazanmadığını kontrol edebilir (iyi bir aday adayı).
- **`cdmx-in/ui-review`** — `vercel-labs/agent-browser` (#67) üzerine kurulu, 4 breakpoint'te
  (360/768/1366/1920px) text overflow/tap-target/WCAG zoom-reflow taraması yapan gerçek bir
  `SKILL.md`; teknik olarak sağlam (MIT, gerçek kod) ama sadece 1 yıldız/0 fork — çok erken aşama.
  **Eklenmedi**, `INSPECTION_GUIDE.md` Phase 1/3'e iyi uyan bir aday adayı olarak not edildi.
- **`ogimg/ogimg`** (Open Graph görsel üretici, Next.js 16 + React 19 tabanlı) — 23 yıldız, Apache-2.0,
  ama repo kendi README'sinde editör arayüzünün "henüz implemente edilmediğini" belirtiyor —
  fonksiyonel olarak eksik/olgunlaşmamış. **Eklenmedi.**
- **`ogforge.dev`** — "ücretsiz, API key gerektirmez" OG görsel üretici olarak tanıtılıyor ama
  domain bu oturumda `EGRESS_BLOCKED` ile engellendi ve açık bir GitHub deposu bulunamadı (sadece
  glama.ai listesi) — açık kaynak/doğrulanabilirlik kriteri karşılanmıyor. **Eklenmedi.**
- **NVIDIA NIM ücretsiz katmanı** — kaynaklar arasında tutarsız (bazıları "~1.000 kredi" tek
  seferlik, bazıları "40 istek/dk kalıcı" diyor) ve telefon doğrulaması gerektiriyor (diğer
  kataloglanmış sağlayıcılarda olmayan bir sürtünme/gizlilik maliyeti) — kalıcı ücretsiz katman
  olduğu net değil. **Eklenmedi**, Together/Fireworks/Hyperbolic'in (Tur 21'de reddedilen)
  yanına benzer bir "belirsiz/kredi-bazlı" kategoride not edildi.
- **Hugging Face Inference Providers ücretsiz katmanı** — kart gerektirmiyor ama ayda sadece
  $0,10 kredi veriyor; kataloğun "anlamsız derecede küçük ücretsiz katman" dışlama kriterine
  giriyor. **Eklenmedi.**
- **`chipsxp/design-copier`, `hupeng9995/browser-mcp`, `ericshang98/Perfect-Web-Clone-IDE`** — üçü
  de "CSS/HTML çıkar, Tailwind'e çevir, siteyi klonla" işlevi sunan küçük MCP sunucuları, ama
  hepsi 3-5 yıldız/0-1 fork ve kataloğun zaten güçlü şekilde kapladığı bir kategoride (#25 crawl4ai,
  #31 design-extract, #57 site-cloner, #58 design-comparison) redundant. **Eklenmedi.**

---

## Tur 23 — 2026-09-19 (~06:03 UTC / 09:03 Türkiye saati başladı)

Bu tur, dosyanın tamamı `grep` ile taranıp mevcut 67 kaynağın başlıkları çıkarıldıktan sonra
başladı. Araştırmanın tamamı, hem 67 mevcut kaynağın hem de önceki turlarda reddedilen adayların
tam listesi verilerek bir general-purpose alt-agent'a devredildi (bağlam tasarrufu). Alt-agent
`WebFetch`/`WebSearch` ile 8 aday doğruladı, bunlardan 6'sı kataloğa eklendi (#68-#73), 2'si
(redundancy / olgunlaşmamışlık) eklenmedi, ~10 aday da araştırma aşamasında reddedildi (aşağıya
bak). Odak, önceki turlarda ("ücretsiz LLM API" ve "genel skill koleksiyonu" kategorilerinde
azalan getiri, bkz. Tur 22 notu) işaret edilen niş boşluklar oldu: Next.js 16/Tailwind v4'e özel
skill'ler, CSS→Tailwind dönüştürme, pixel-diff doğrulama, favicon/OG görsel üretimi ve hedef site
teknoloji tespiti (tech fingerprinting).

### A) Skill Koleksiyonları (Next.js 16 / Tailwind v4'e özel)

#### 68. [laguagu/claude-code-nextjs-skills](https://github.com/laguagu/claude-code-nextjs-skills)
- **Yıldız:** 64 · **Fork:** 18 · **Açık issue:** 0 · **Lisans:** MIT
- **Güncellik:** 196 commit, aktif. Sağlıklı yıldız:fork oranı (~3.5:1), şişirilmiş-yıldız deseni
  DEĞİL.
- **Ne işe yarar:** Bu şablonun tam yığınına (Next.js 16 + Vercel AI SDK + shadcn/ui + bun) özel
  yazılmış gerçek `skills/` klasörü (`skills/nextjs-shadcn/`, `skills/ai-app/` vb.) — RSC, async
  API'ler, routing, SEO, caching konularını kapsıyor; ayrıca iki gömülü MCP sunucusu ve agent
  tanımları içeriyor.
- **Neden meşru:** Gerçek, link-out değil gömülü `SKILL.md` dosyaları; MIT lisanslı; Claude Code,
  Cursor ve Copilot ile çapraz uyumlu.
- **Kurulum:** Reponun plugin/marketplace kaydı üzerinden ya da doğrudan `skills/nextjs-shadcn/`
  klasörünü `.claude/skills/` altına kopyalayarak. Yerel dosya kopyalama, onay gerekmez.
- **Not:** Son commit tarihi WebFetch ile net görülemedi — Next.js 16 API detayları hızlı
  değiştiğinden kurulum öncesi güncelliği tekrar gözden geçir.

#### 69. [secondsky/claude-skills](https://github.com/secondsky/claude-skills)
- **Yıldız:** 219 · **Fork:** 31 · **Açık issue:** 0 · **Lisans:** MIT
- **Güncellik:** v3.9.0, en son güncelleme 2026-09-09 (bu araştırmadan sadece günler önce) — çok
  aktif. Sağlıklı yıldız:fork oranı (~7:1).
- **Ne işe yarar:** Cloudflare, React, **Tailwind v4**, Nuxt ve AI entegrasyonlarını kapsayan büyük
  (145 skill) bir üretim-hazır koleksiyon; gerçek `plugins/<plugin>/skills/<skill>/SKILL.md` yapısı
  doğrulandı, aralarında bu şablonla doğrudan örtüşen bir `tailwind-v4-shadcn` skill'i var.
- **Neden meşru:** MIT lisanslı, gerçek dosya yapısı, çok yakın tarihli aktif bakım.
- **Kurulum:** `npx skills add secondsky/claude-skills` (bu oturumun Supabase MCP talimatlarında da
  aynı `npx skills` mekanizmasına referans veriliyor) veya plugin marketplace olarak ekleme.
- **Not:** Koleksiyon genel amaçlı (145 skill) — bu şablon için sadece `tailwind-v4-shadcn` ve
  ilgili React skill'lerini seçerek kur, tamamını körü körüne yükleme.

### B) MCP Sunucuları (proje-özel: CSS→Tailwind, pixel-diff, favicon/OG, tech-fingerprint)

#### 70. [CarbonoDev/tailwindcss-mcp-server](https://github.com/CarbonoDev/tailwindcss-mcp-server)
- **Yıldız:** 39 · **Fork:** 4 · **Açık issue:** 1 · **Lisans:** MIT
- **Güncellik:** 8 commit. Sağlıklı yıldız:fork:issue oranı (39:4:1), şişirilmiş-yıldız deseni
  DEĞİL.
- **Ne işe yarar:** Gerçek bir `convert_css_to_tailwind` aracı — ham/hedef siteden çıkarılan CSS'i
  Tailwind utility class'larına (classes/inline/`@apply` formatlarında) dönüştürüyor; ayrıca
  utility/renk/dokümantasyon araması ve React/Vue/Angular/Svelte/Laravel component şablonlama.
  `clone-website` akışının "hedef siteden CSS çıkarma → Tailwind'e çevirme" adımına birebir uyuyor.
- **Neden meşru:** MIT lisanslı, somut ve belgelenmiş tool şeması, sağlıklı benimseme oranı.
- **Kurulum:** MCP sunucusu olarak ekle; `INSPECTION_GUIDE.md` Phase 1'de ("Design Tokens'ı
  Çıkar") elde edilen hedef site CSS'ini bu araca ver.
- **Not:** **Tailwind v4 desteği bu repoda açıkça doğrulanmadı** (v3 odaklı olabilir). Topluluk
  fork'u `clarity-contrib/tailwindcss-mcp-server` (1 yıldız, 17 commit, MIT, orijinali kaynak
  gösteriyor) `version: "v3"|"v4"` parametresi eklediğini iddia ediyor ama çok yeni/kanıtlanmamış
  (1 yıldız) — önce CarbonoDev ile başla, v4 doğruluğu sorun olursa fork'u izle.

#### 71. [Houseofmvps/opentechalyzer](https://github.com/Houseofmvps/opentechalyzer)
- **Yıldız:** 4 · **Fork:** 2 · **Açık issue:** 0 · **Lisans:** MIT
- **Güncellik:** 11 commit. Küçük ama dürüst oran (4:2:0), şişirilmiş-yıldız deseni DEĞİL.
- **Ne işe yarar:** Ücretsiz, açık kaynak bir website teknoloji tespit aracı (Wappalyzer
  alternatifi) — CLI, TypeScript kütüphanesi ve MCP sunucusu olarak dağıtılıyor. 55 kategoride 588
  parmak izi (CMS, framework, analytics, ödeme, hosting/CDN) güven skoruyla tespit ediyor —
  `/clone-website` akışının EN BAŞINDA hedef sitenin ne ile inşa edildiğini anlamak için,
  `INSPECTION_GUIDE.md` Phase 4'ün ("Teknik Stack Analizi") otomasyonu.
- **Neden meşru:** README'de açıkça "API key yok, kredi yok, abonelik yok" deniyor; tek opsiyonel
  ücretli-yakın özellik (Google BigQuery'nin herkese açık HTTP Archive veri setiyle ters arama)
  isteğe bağlı ve kullanıcının KENDİ GCP ücretsiz kotasından faturalanıyor, paylaşımlı key değil.
- **Kurulum:** `npm install -g opentechalyzer` (CLI) veya MCP sunucusu olarak ekleyip klonlamadan
  önce hedef URL'ye karşı çalıştırma.
- **Not:** Küçük/yeni proje (4 yıldız) — araştırma aşamasında güvenmeden önce bilinen sitelerle
  parmak izi doğruluğunu test et.

#### 72. [Jellypod-Inc/satori-mcp-server](https://github.com/Jellypod-Inc/satori-mcp-server)
- **Yıldız:** 11 · **Fork:** 1 · **Açık issue:** 3 · **Lisans:** MPL-2.0
- **Güncellik:** 35 commit, aktif.
- **Ne işe yarar:** Vercel'in Satori kütüphanesini MCP üzerinden sarıp JSX/React component'lerinden
  PNG (OG görseli, sosyal kart, blog başlığı) üretiyor; Google Fonts entegrasyonu ve opsiyonel
  Vercel Blob çıktısı var. Bu şablonun `public/seo/` klasörünün beklediği OG görseli üretim adımına
  doğrudan uyuyor.
- **Neden meşru:** TypeScript + testler, gerçek commit geçmişi, şişirilmiş-yıldız deseni yok (11
  yıldız/1 fork küçük ama orantılı).
- **Kurulum:** MCP sunucusu olarak yapılandır; hazır sosyal-kart şablonuna klonlanan sitenin gerçek
  başlık/açıklamasını ver ya da kendi JSX şablonunu geç.
- **Not:** Küçük topluluk (açık issue sayısı fork sayısından fazla — düşük bakım kapasitesi
  sinyali olabilir); production pipeline'a bağlamadan önce açık issue'lara göz at.

#### 73. [leky90/mcp-image-compare-server](https://github.com/leky90/mcp-image-compare-server) — ⚠️ KÜÇÜK/KANITLANMAMIŞ
- **Yıldız:** 4 · **Fork:** 2 · **Açık issue:** 0 · **Lisans:** MIT
- **Ne işe yarar:** Pixelmatch (Mapbox) + Playwright (ekran görüntüsü) + Sharp (işleme) tabanlı bir
  pixel-perfect görsel karşılaştırma MCP sunucusu — `compare_images`, `compare_image_with_url`,
  `compare_urls` araçları. Klonlanan sayfa ile canlı hedef URL'yi doğrudan karşılaştırabiliyor;
  kataloğun mevcut #58 (`w01fgang/mcp-design-comparison`) ile aynı kategoride ama farklı/bağımsız
  bir implementasyon (SSIM yerine Pixelmatch, ek olarak canlı URL karşılaştırma aracı var).
- **Neden meşru:** Somut, çalışan bir araç — isimlendirilmiş tool şeması ve net bağımlılık yığını
  (stub değil), TypeScript.
- **Kurulum:** MCP sunucusu olarak npx/yerel kurulum; `compare_urls` ile klonlanan Next.js
  sayfasını orijinal hedef URL'ye karşı diff'le.
- **Not:** Çok küçük proje (4 yıldız), bağımsız inceleme/kullanıcı yorumu bulunamadı — CI'a
  bağlamadan önce elle bir smoke test yap. #58 zaten kataloglandığı için bu madde birincil değil,
  ikinci bir seçenek/yedek olarak değerlendirilmeli.

### C) Doğrulanan ama EKLENMEYEN Bulgular (Tur 23)

- **`elliotxx/favicon-mcp-server`** (4 yıldız, Go, MIT) — gerçek ve çalışan bir araç (SVG → ICO/PNG
  favicon seti), ama kataloğun mevcut #55 (`dh1011/auto-favicon-mcp`) ile fonksiyonel olarak
  örtüşüyor (tek fark: SVG-öncelikli girdi + Go implementasyonu). **Eklenmedi** (redundant) — sadece
  SVG-öncelikli girdi özellikle gerekirse ileride değerlendirilebilir.
- **`capraidev/shadcn-claude-skill`** (4 yıldız, 3 commit, MIT) — gerçek `SKILL.md` içeriyor
  (shadcn/ui + Radix + Tailwind referansı, form/tablo/grafik örnekleri) ama son derece erken
  aşamada (3 commit) — kanıtlanmamış. **Eklenmedi**, gelecek turlar benimseme kazanıp kazanmadığını
  kontrol edebilir.
- **`browserbase/mcp-server-browserbase`** (3.4k yıldız/369 fork, meşru ve yaygın kullanılan) —
  ama depo Temmuz 2026'da **arşivlendi** ve README'de "güncel production servisini yansıtmıyor"
  ibaresi var; ayrıca ücretli bulut tarayıcı servisi (Browserbase API key) gerektiriyor.
  **Eklenmedi** (bakımsız + ücretli bağımlılık).
- **🚨 Meta Llama API resmi ücretsiz katmanı (`llama.developer.meta.com`) — ARTIK MEVCUT DEĞİL.**
  Meta, resmi birinci-parti Llama API'sini 6 Temmuz 2026'da kapattı; geriye sadece üçüncü parti
  rehost'lar (Groq/DeepInfra/Together — zaten başka maddelerde kataloglanmış) kaldı. **Eklenmedi**
  (artık mevcut değil) — GitHub Models'ın (Tur 16, 30 Temmuz 2026'da kapandı) aynı kategorisi.
- **`undirectlookable/svgo-mcp`** — gerçek bir SVGO sarmalayıcı ama 0 yıldız/1 commit, test
  edilmemiş/yayınlanmamış seviyesinde. **Eklenmedi**, benimseme kazanırsa gelecekte tekrar bak.
- **`Monotype/fonts-mcp`** — resmi vendor MCP'si ama 1 yıldız/1 commit, lisans belirtilmemiş ve
  temel amacı ÜCRETLİ MyFonts tipografilerini önermek (şablonun ihtiyacı olan ücretsiz/self-hosted
  font kazanımıyla uyuşmuyor). **Eklenmedi.**
- **`priyankark/lighthouse-mcp`** (208 yıldız/20 fork, meşru, sağlıklı oran) — kataloğun mevcut
  #29/#56 (`danielsogl/lighthouse-mcp-server`, 13+ araç) ile fonksiyonel olarak redundant (bu
  alternatif sadece 2 araç sunuyor). **Eklenmedi** — `danielsogl` projesi bakımsız hale gelirse
  gelecek turlar bu notu hatırlamalı.
- **`vdalhambra/siteaudit-mcp`** (5 yıldız, MIT, meşru ama dar) — kataloğun mevcut #29/#56
  (Lighthouse) ve #33 (`JustasMonkev/mcp-accessibility-scanner`) ile örtüşüyor, ayrıca ücretli
  hosted katmanı olan bir ticari ürüne yaslanıyor. **Eklenmedi** (redundancy).
- **`RichardDillman/seo-audit-mcp`** — aynı doygun kategoride (SEO/erişilebilirlik denetimi),
  derinlemesine doğrulanmadı. **Eklenmedi**, kategori zaten dolu.
- **Apify barındırmalı Wappalyzer/tech-detector MCP sunucuları** (`rl1987`, `footage`, `clearfetch`,
  `nerolabs`, `wyle` hesapları) — hepsi Apify'ın ücretli actor/kredi sistemi üzerinden çalışıyor,
  gerçek bağımsız ücretsiz katman DEĞİL. **Eklenmedi**, yerine gerçekten ücretsiz olan
  `Houseofmvps/opentechalyzer` (#71) tercih edildi.

## Tur 24 — 2026-09-19 (~07:02 UTC / 10:02 Türkiye saati başladı)

Metodoloji: alt-agent'a 140+ önceki maddeden oluşan TAM hariç-tutma listesi verildi (Tur 1-23'te
eklenen VE reddedilen her şey); alt-agentın bulduğu 4 aday, ikinci bir bağımsız doğrulama
alt-agent'ıyla `mcp__github__search_repositories` + `get_file_contents` üzerinden yıldız/fork/issue/
lisans/son-commit ve gerçek dosya içeriği açısından çapraz kontrol edildi — hiçbir tutarsızlık
bulunmadı.

### A) MCP Sunucuları (Design Token / Görsel QA / Çoklu-Platform Asset Üretimi — proje-özel)

#### 74. [marvkr/better-design](https://github.com/marvkr/better-design)
- **Yıldız:** 237 · **Fork:** 11 · **Açık issue:** 1 · **Lisans:** MIT
- **Güncellik:** Son commit 2026-08-20, sağlıklı yıldız:fork:issue oranı, şişirilmiş-yıldız deseni
  DEĞİL.
- **Ne işe yarar:** 31 "marka kalitesinde" tasarım sistemi (Linear, Stripe, Vercel, Notion, Apple,
  Supabase, Figma vb.) için renk/tipografi token seti ve WCAG/UI-ilke inceleme kuralları sunan bir
  MCP sunucusu + shadcn-uyumlu component registry'si. `INSPECTION_GUIDE.md` Phase 1'de hedef
  sitenin tokenleri belirsiz kaldığında referans paleti olarak, Phase 2'de spacing/contrast
  sapmalarını yakalamak için `get-review-rules` aracıyla kullanılabilir. Kataloğun mevcut
  `Jpisnice/shadcn-ui-mcp-server`'ı ile örtüşmüyor (o component kaynak kodu servis ediyor, bu ise
  tasarım-token/tema verisi ve inceleme kuralları).
- **Neden meşru:** MIT lisanslı, somut/belgelenmiş tool şeması (`resolve-design-system`,
  `get-design-system-docs`, `get-ui-principle`, `resolve-icon-library`, `search-icons`), gerçek
  `skills/better-design/SKILL.md` ve 30+ tema dizini bağımsız doğrulamada teyit edildi.
- **Kurulum:** Tamamen yerel/hesapsız yol — `npx skills add marvkr/better-design --skill
  better-design` sonra `npx better-design`, kayıt gerektirmiyor. Opsiyonel "remote MCP" hosted modu
  better-design.com'dan ücretsiz API key istiyor — sıfır üçüncü-parti bağımlılık için bu modu
  atlayıp yerel-only kullan.

#### 75. [samihalawa/visual-ui-debug-agent-mcp](https://github.com/samihalawa/visual-ui-debug-agent-mcp)
- **Yıldız:** 83 · **Fork:** 8 · **Açık issue:** 0 · **Lisans:** ISC
- **Güncellik:** Son commit 2026-08-11, depo 2025-05-02'den beri 1 yılı aşkın sürekli aktif.
- **Ne işe yarar:** Playwright'ı saran 29 MCP aracı — ekran görüntüsü, konsol/performans yakalama,
  DOM inceleme, interaktif-eleman analizi, workflow doğrulama ve görsel diff. Şablonun eksik olan
  "screenshot diffing" adımını dolduruyor: klonlanan Next.js sayfasının ekran görüntüsünü hedef
  siteninkiyle piksel piksel karşılaştırma. Kataloğun mevcut `w01fgang/mcp-design-comparison` ve
  `leky90/mcp-image-compare-server` ile aynı kategoride ama çok daha geniş bir araç seti (29 araç vs.
  birkaç) sunuyor — üçüncü bağımsız seçenek olarak değerlendirilebilir.
- **Neden meşru:** README ve kod incelemesinde postinstall script/telemetri iddiası yok, varsayılan
  olarak yerel modda çalışıyor; kimlik bilgisi sadece opsiyonel bulut tarayıcı sağlayıcılarına
  (Browserbase/Anchor) geçilirse gerekiyor — yerel mod hiçbir hesap istemiyor.
- **Kurulum:** `npx -y visual-ui-debug-agent-mcp`, ardından MCP istemci konfigürasyonuna ekle;
  opsiyonel Docker desteği de var.

#### 76. [us/crw](https://github.com/us/crw) — "fastCRW", self-hosted Firecrawl alternatifi
- **Yıldız:** 1051 · **Fork:** 84 · **Açık issue:** 12 · **Lisans:** Motor + MCP sunucusu AGPL-3.0
  (repo-seviyesi SPDX bu şekilde tespit edildi), Python/TS SDK'ları README'ye göre MIT (ayrı LICENSE
  dosyasıyla bağımsız doğrulanamadı — geliştirici beyanına dayanıyor).
- **Güncellik:** Bugün (2026-09-19) dahil aktif commit geçmişi, 1043 commit, 11 açık PR.
- **Ne işe yarar:** URL'yi temiz markdown/yapılandırılmış JSON'a çeviren bir crawler/scraper —
  scrape/crawl/map/search/extract. `INSPECTION_GUIDE.md` Phase 1-2'nin ("hedef siteyi incele")
  hesaplı/ücretsiz gerçekleştirilmesi için uygun: tek ~6MB binary ile tamamen self-host edilebiliyor,
  yerel modda API key gerekmiyor, varsayılan olarak robots.txt'e uyuyor. Kataloğun mevcut
  `firecrawl/firecrawl-mcp-server` (hosted/ücretli) ve `sadiuysal/crawl4ai-mcp-server`'a göre daha
  hafif, tek-binary self-host alternatifi.
- **Neden meşru:** Çoklu paket-yöneticisi kurulumu (`npm install crw-sdk`, `npx -y crw-mcp@latest
  install`, `pip install crw`, `cargo install crw-server` — crates.io'da gerçek), çok-dilli SDK'lar,
  aktif issue/PR trafiği, kurulum betiği tek yol değil.
- **Kurulum:** `npx -y crw-mcp@latest install` (MCP sunucusu) veya `pip install crw` / `cargo install
  crw-server`; self-hosted yerel mod hesap gerektirmiyor.

#### 77. [MohamedAbdallah-14/prompt-to-asset](https://github.com/MohamedAbdallah-14/prompt-to-asset)
- **Yıldız:** 21 · **Fork:** 2 · **Açık issue:** 20 (bkz. Not) · **Lisans:** MIT
- **Güncellik:** Son commit bugün (2026-09-19), depo 2026-04-20'de oluşturuldu.
- **Ne işe yarar:** Tek bir master görsel/prompttan tam platform asset paketi üretiyor — favicon,
  app icon, OG görseli, splash screen (iOS/Android/PWA/Flutter/visionOS). 30+ ücretsiz-katman görsel
  sağlayıcısı arasında yönlendirme yapıyor (Cloudflare Workers AI, NVIDIA NIM, HuggingFace
  Inference, kayıt-gerektirmeyen Pollinations.ai HTTP) artı sıfır-API-çağrılı offline SVG üretim
  modu. Kataloğun mevcut favicon-odaklı maddelerinden (`dh1011/auto-favicon-mcp`,
  `elliotxx/favicon-mcp-server` — reddedildi) daha geniş: tek favicon değil, çok-platformlu tam asset
  fan-out'u ve `public/seo/` klasörünün ihtiyaç duyduğu OG görseli üretimini de kapsıyor.
- **Neden meşru:** "Sıfır-key" modu gerçek (offline SVG + ücretsiz-katman API yönlendirme + kayıtsız
  fallback), MIT lisanslı, postinstall script yok, açık "telemetri yok" beyanı, kullanılırsa key'ler
  sadece env değişkeninde kalıyor, SVG çıktısı XSS-sanitize ediliyor.
- **Kurulum:** Önce `npx prompt-to-asset doctor` ile test et, sonra `npm i -g prompt-to-asset` veya
  `npm i -D prompt-to-asset`; README'de Claude Desktop/Cursor/Windsurf için IDE entegrasyon adımları
  var.
- **Not:** 21 yıldıza karşı 20 açık issue oransal olarak yüksek görünüyor, ama incelemede bunların
  neredeyse tamamı gerçek bug raporu değil — istenmeyen bot-açtığı promosyon/marketplace-listing
  issue'ları ("plugin'ini talep et" registry botu, alakasız bir SaaS'ın entegrasyon teklifi,
  marketplace-icon hatırlatma botu). Destek için issue tracker'a güvenmeden önce bunu bil.

### B) Doğrulanan ama EKLENMEYEN Bulgular (Tur 24)

- **`priyankark/a11y-mcp`** — axe-core tabanlı erişilebilirlik MCP sarmalayıcısı; kataloğun mevcut
  `JustasMonkev/mcp-accessibility-scanner` ve (reddedilmiş) `priyankark/lighthouse-mcp` ile anlamlı
  bir farklılaşma olmadan örtüşüyor. **Eklenmedi** (redundant).
- **`aka-kika/hig-mcp`** — Apple Human Interface Guidelines / SwiftUI tasarım tokenleri; bu şablonun
  Next.js/Tailwind/shadcn hedef platformuyla uyuşmuyor. **Eklenmedi** (yanlış platform).
- **`SanggonBoy/PyreCrawl`** — self-hosted Firecrawl alternatifi ama sadece 16 yıldız ve inceleme
  anında 16 gün önce oluşturulmuş — henüz yeterli track record yok. **Eklenmedi**, `us/crw` (#76)
  tercih edildi; gelecek turlar benimseme kazanıp kazanmadığını izleyebilir.
- **`eugenelim/agent-ready-repo`** — skill/subagent/hook marketplace'i; kataloğun zaten kapsadığı
  çok sayıda subagent-koleksiyonu maddesiyle örtüşüyor, bu proje için ayırt edici değer yok.
  **Eklenmedi** (redundant).
- **Çeşitli "website klonla" Claude Code skill'leri** (`veyralabsgroup/webcloner`,
  `luukalleman/clone-study`, `fellyph/wp-clone-to-block-theme`, `bienhoang/design-clone`,
  `drshailesh88/ui-cloner-skill`, `wsprfme/clone-with-claude`, `ndpvt-web/copycapy`,
  `Varalix-Digitech-Solutions/clone-team`, `Desertbetweenalembic/website-downloader`) — hepsi bu
  şablonun kendi çekirdek `/clone-website` işlevini fonksiyonel olarak tekrarlıyor (ve zaten
  reddedilmiş `SarthakMishra/site-cloner` ile aynı kategoride). **Eklenmedi** (proje kendi
  işlevini zaten kapsıyor).
- **Google Gemini API ücretsiz katmanı** — `ai.google.dev` bu oturumun ağ çıkış proxy'si tarafından
  engellendi, resmi sayfaya karşı zorunlu birincil-kaynak doğrulaması TAMAMLANAMADI. İkincil
  kaynaklar Google AI Studio üzerinden bir ücretsiz katman olduğunu doğruluyor ama doğrulama şartı
  karşılanmadığı için **bu turda eklenmedi** — ağ erişimi açıkken gelecek bir turda tekrar denenmeli.
- **Mistral AI "La Plateforme" ücretsiz katmanı** — aynı sebeple (`mistral.ai` proxy tarafından
  engellendi) birincil-kaynak doğrulaması tamamlanamadı. **Bu turda eklenmedi**, gelecek tur takibi
  gerekiyor.

## Tur 25 — 2026-09-19 (~08:03 UTC / 11:03 Türkiye saati başladı)

Metodoloji: alt-agent'a 76 benzersiz kataloglanmış repo'nun TAM listesi (Tur 1-24'te eklenen VE
reddedilen her şey, malicious-flagged olanlar dahil) verildi. Alt-agent 4 yeni aday buldu ve
doğruladı, 1 sınırda aday (Mistral) yetersiz belgeleme nedeniyle bilerek reddedildi, ~9 aday
reddedildi (aşağıya bak).

### A) Tasarım Token / Subagent Koleksiyonu / Ücretsiz LLM API (proje-özel + genel)

#### 78. [arvindrk/extract-design-system](https://github.com/arvindrk/extract-design-system)
- **Yıldız:** 224 · **Fork:** 27 · **Açık issue:** 0 · **Lisans:** MIT
- **Güncellik:** Son commit 2026-06-19, 112 commit, dependabot + özellik aktivitesiyle organik bir
  commit geçmişi (şişirilmiş-yıldız deseni DEĞİL).
- **Ne işe yarar:** Herhangi bir genel-erişilebilir web sitesinden tasarım token setini (renk,
  tipografi, spacing, radius, gölge) çıkarıp JSON + CSS custom properties üretiyor. Üç arayüz
  sunuyor: bir Agent Skill (`skills.sh` üzerinden Claude/Cursor/Codex için kurulabilir), bağımsız
  bir CLI, ve bir MCP sunucusu (`extract-design-system-mcp`). `INSPECTION_GUIDE.md` Phase 1'in
  ("Design Tokens to Extract") neredeyse birebir otomasyonu — `DESIGN_TOKENS.md` üretimini kısmen
  otomatikleştirebilir.
- **Neden meşru:** Gerçek `skills/extract-design-system/SKILL.md`, gerçek CLI kaynak kodu (`src/`),
  gerçek test paketi bağımsız doğrulamada teyit edildi.
- **Kurulum:** `npx skills add arvindrk/extract-design-system` (skill), ya da CLI/MCP için repo'yu
  klonlayıp `npm install`. Node 20+ ve Playwright Chromium gerektiriyor.
- **Not:** ~4 aylık genç proje — gelecek turlar bakımın sürüp sürmediğini izlemeli.

#### 79. [ilikescience/design-tokens-skill](https://github.com/ilikescience/design-tokens-skill)
- **Yıldız:** 15 · **Fork:** 0 · **Açık issue:** 0 · **Lisans:** MIT
- **Güncellik:** Son commit 2026-06-17, 7 commit, tek geliştirici.
- **Ne işe yarar:** DTCG (Design Tokens Community Group) formatı hakkında uzman rehberlik veren bir
  Claude Skill — token referansları, resolver'lar, renk-uzayı yönetimi, Terrazzo/jq/JSONata/Figma
  token export entegrasyonu.
- **Neden meşru:** Gerçek `SKILL.md` doğrulandı, küçük ama gerçekten bakımı yapılan bireysel proje,
  MIT lisanslı, şişirilmiş yıldız yok.
- **Kurulum:** `npx skills add https://github.com/ilikescience/design-tokens-skill --skill
  design-tokens`, ya da klasörü `.claude/skills/design-tokens/` altına kopyala.
- **Not:** Çok niş (15 yıldız) — bu şablon token'ları DTCG formatına standartlaştırırsa faydalı,
  aksi halde atlanabilir.

#### 80. [lst97/claude-code-sub-agents](https://github.com/lst97/claude-code-sub-agents)
- **Yıldız:** 1.7k · **Fork:** 255 · **Açık issue:** 0 · **Lisans:** MIT
- **Güncellik:** Son commit 2025-08-15 (~13 aydır bakımsız — "dondurulmuş ama sağlam" bir görüntü
  kaydı olarak değerlendirilmeli).
- **Ne işe yarar:** Tam-yığın geliştirme için 33 özelleşmiş subagent, bu şablonla doğrudan örtüşen
  birkaçı dahil: `nextjs-pro`, `react-pro`, `frontend-developer`, `ui-designer`, `ux-designer`,
  `typescript-pro`, artı çoklu-ajan orkestrasyonu için bir `agent-organizer`. Kataloğun mevcut 6
  genel-amaçlı subagent koleksiyonundan (#3, #4, #11, #20, #43, #49) farkı, bu belirli
  Next.js/React/TypeScript-özel ajanların derinliği.
- **Neden meşru:** `agents/development/nextjs-pro.md` doğrudan raw içerik fetch edilerek
  doğrulandı — gerçek, ayrıntılı YAML-frontmatter ajan tanımı, somut bir "Core Development
  Philosophy" ve altı-fazlı SOP içeriyor (boilerplate değil). Commit geçmişi organik, çok-katkıcılı
  bir aktivite gösteriyor (patlama-üretilmiş değil). Yıldız:fork oranı (~6.7:1) sağlıklı, şişirilmiş
  değil.
- **Kurulum:** Repo'yu `~/.claude/agents/` altına klonla, ya da tek tek `.md` dosyalarını kopyala.
- **Not:** 13+ aydır güncellenmemiş — kabul etmeden önce ajan içeriğini güncel Claude Code subagent
  konvansiyonlarına karşı gözden geçir.

#### 81. [groq/groq-mcp-server](https://github.com/groq/groq-mcp-server) (resmi) + Groq API ücretsiz katmanı
- **Yıldız:** 47 · **Fork:** 24 · **Lisans:** MIT
- **Güncellik:** Son commit 2026-08-18, resmi Groq bot commit'leri + CI/workflow bakımı ile aktif.
- **Ne işe yarar:** Groq'un resmi olarak bakımını yaptığı MCP sunucusu — Groq-barındırmalı
  modelleri (görsel, TTS/STT, ultra-hızlı LLM inference, batch işleme) Claude Code'a ve diğer MCP
  istemcilerine açıyor.
- **Ücretsiz katman:** Kredi kartı gerekmiyor: küratörlü açık-model listesinde (Llama 3.1 8B,
  Llama 4 Scout, Qwen3 32B, DeepSeek R1 Distill) 30.000 TPM ve günde 14.400 istek. Bu şablonun
  klonlama işi sırasında prototipleme/tamamlayıcı içerik üretimi için kullanılabilir (ama
  `AGENTS.md`'nin "gerçek içerik, placeholder değil" ilkesi gereği yalnızca tamamlayıcı görevlerde,
  hedef siteden kazınan gerçek içeriğin yerine değil).
- **Neden meşru:** Resmi `groq/` GitHub org deposu, MIT lisanslı, Groq'un kendi bot/CI'sı
  tarafından aktif olarak bakımı yapılıyor.
- **Kurulum:** `uvx groq-mcp` ya da `pip install groq-mcp`; ücretsiz key console.groq.com'dan
  alınıyor; MCP istemci konfigürasyonuna ekle.
- **Not:** Katalog sadece açık-model sunuyor (GPT/Claude/Gemini yok).

### B) Doğrulanan ama EKLENMEYEN Bulgular (Tur 25)

- **`dequelabs/axe-mcp-server-public`** (Deque'nin resmi Axe MCP sunucusu) — resmi ve iyi
  inşa edilmiş, ama **ücretli** bir Axe DevTools for Web aboneliği gerektiriyor. **Eklenmedi**
  (ücretsiz değil).
- **`Duds/accessibility-mcp`** — axe-core/Lighthouse/WAVE MCP sunucusu, fonksiyonel olarak alakalı,
  ama sadece 1 yıldız/2 commit — meşruiyet/bakım doğrulaması için henüz yeterli değil. **Eklenmedi**.
- **`byzkhan/difflens`** — Claude Code hook'ları için görsel-regresyon/screenshot-diff MCP
  sunucusu, bu şablonun görsel QA ihtiyacına fonksiyonel olarak tam uyuyor; commit geçmişi organik
  görünüyor (Şub-Mar 2026, kademeli, insan+Claude ortak-yazarlı) ama sadece 1 yıldız/0 fork —
  benimseme sinyali henüz çok zayıf. **Eklenmedi**, gelecek bir tur benimseme kazanıp
  kazanmadığını izleyebilir.
- **`Kikk79/claude-code-subagents-collection`** — `spetro511/claude-code-subagents-collection`'ın
  0-yıldız/0-fork, bağımsız commit'i olmayan çıplak bir fork'u; zaten hariç-tutulan üst-akım
  koleksiyonlara göre ayırt edici değeri yok. **Eklenmedi** (redundant).
- **Çeşitli `Jpisnice/shadcn-ui-mcp-server` fork'ları** (`PrimeDX`, `MCPBro`, `mamba-mental`,
  `punkpeye`, `heilgar`, `anillahane` hesaplarındaki `shadcn-mcp`/`shadcn-ui-mcp-server` türevleri)
  — hepsi zaten hariç-tutulan üst-akım projenin küçük/türev fork'ları, bağımsız değer yok.
  **Eklenmedi**.
- **`PashaBoiko/playwright-axe-mcp`, `jbuchan/accessibility-mcp-server`,
  `bilhasry-deriv/mcp-web-a11y`** — aramada çıktı ama bağımsız doğrulanmadı; zaten reddedilen
  `Duds/accessibility-mcp` ve hariç-tutulan `JustasMonkev/mcp-accessibility-scanner` ile aynı
  axe-core-via-Playwright deseninin tekrarı, raporu doğrulanmamış tekrarlarla şişirmemek için
  öncelik verilmedi. **Eklenmedi**.

---

## Tur 26 — 2026-09-19

### A) MCP Sunucuları (proje-özel, kategori D odaklı)

#### 82. [priyankark/a11y-mcp](https://github.com/priyankark/a11y-mcp)
- **Yıldız:** 52 · **Fork:** 9 · **Lisans:** MPL-2.0 · **Güncellik:** 18 commit — sağlıklı,
  şişirilmemiş yıldız:fork oranı.
- **Ne işe yarar:** axe-core tabanlı bir erişilebilirlik denetim MCP sunucusu — `audit_webpage`
  (WCAG etiket filtresi ile detaylı denetim, opsiyonel HTML snippet) ve `get_summary` (özet
  rapor) araçları. SSRF-güvenli network proxy (private/reserved IP'leri engelliyor), 90 saniye
  tarayıcı zaman aşımı. `WebFetch` ile bu oturumda bağımsız doğrulandı (yıldız/fork/lisans
  birebir teyit edildi).
- **Neden meşru:** Kod tamamen açık (`/src`, `/test`, `/config`), harici/paylaşımlı servis
  çağrısı yok, güvenlik odaklı tasarım (SSRF koruması) ayrıca bir olgunluk işareti.
  `docs/research/INSPECTION_GUIDE.md`'nin Faz 4 "erişilebilirlik" boşluğuna, kataloğun mevcut
  `JustasMonkev/mcp-accessibility-scanner`'ından (Tur 3, #33) BAĞIMSIZ/farklı bir implementasyonla
  katkı sağlıyor — ikinci bir bağımsız doğrulama katmanı olarak faydalı.
- **Kurulum:** `npx a11y-mcp` (Node 22.12+) MCP config'ine stdio sunucusu olarak ekle. API key
  gerekmez, yerel onay gerekir (yeni MCP sunucusu ekleme).

#### 83. [freema/mcp-design-system-extractor](https://github.com/freema/mcp-design-system-extractor)
- **Yıldız:** 69 · **Fork:** 14 · **Lisans:** MIT · **Güncellik:** 35 commit, Docker desteği ve
  test dosyaları mevcut — organik/sağlıklı oran.
- **Ne işe yarar:** Çalışan bir Storybook örneğine (`/index.json` + `/iframe.html`) Puppeteer ile
  bağlanıp component listesi/arama, render edilmiş HTML+CSS çıkarma, bağımlılık grafiği ve
  **tema token'ları (renk, spacing, tipografi)** çıkarıyor; uzun işlemler için async job queue.
  `WebFetch` ile bu oturumda bağımsız doğrulandı.
- **Neden meşru:** Kod tamamen açık (`/src`, `/tests`, `vitest.config.ts`, `tsup.config.ts`),
  harici/paylaşımlı servis yok. Birçok hedef site tasarım sistemini genel-erişime-açık Storybook
  ile belgeliyor — bu durumda kataloğun mevcut çıkarma araçlarının (canlı sayfa kazıma) YAPAMADIĞI
  bir şeyi yapıyor: Storybook'un kendi render ettiği "ground truth" component markup'ını ve
  token'larını doğrudan çekiyor. `AGENTS.md`'nin "pixel-perfect emulation" ve
  `INSPECTION_GUIDE.md`'nin Faz 1 (Design Tokens) + Faz 2 (Component Inventory) fazlarına doğrudan
  hizmet ediyor.
- **Kurulum:** `npm install` + MCP config'e stdio sunucusu olarak ekle, hedef Storybook URL'ini
  parametre olarak ver. API key gerekmez, yerel onay gerekir.

#### 84. [awssat/mcp-universal-icons](https://github.com/awssat/mcp-universal-icons) — ⚠️ DÜŞÜK BENİMSEME
- **Yıldız:** 5 · **Fork:** 0 · **Lisans:** MIT · **Güncellik:** 9 commit — düşük topluluk
  doğrulaması, dürüstçe belirtiliyor. `WebFetch` ile dosya yapısı (`/src`, `package.json`,
  `tsconfig.json`) temiz/şüpheli-script-içermez şekilde doğrulandı.
- **Ne işe yarar:** `get_icon`, `search_icons`, `health_check` araçlarıyla 60.000+ SVG ikonuna
  (Lucide dahil — bu şablonun kendi ikon kütüphanesi — ayrıca Material Symbols, Heroicons, Tabler,
  Phosphor, Feather, Bootstrap, Remix, Iconoir, FontAwesome 6) erişim; fuzzy arama ve otomatik
  Tailwind class enjeksiyonu.
- **Neden meşru:** Kod temiz ve açık, gizli/paylaşımlı servis çağrısı yok; ama sadece 5 yıldız/9
  commit ile "battle-tested" değil, "denemeye değer" kategorisinde. `src/components/icons.tsx`
  akışına (hedef siteden çıkarılan ikonları Lucide/diğer kütüphanelere eşleme) doğrudan hizmet
  ediyor olması nedeniyle düşük yıldıza rağmen not edildi.
- **Kurulum:** `npx -y mcp-universal-icons` ile `claude mcp add` üzerinden ekle. API key gerekmez.

### B) Doğrulanan ama EKLENMEYEN Bulgular (Tur 26)

- **`shadcn-ui/ui` resmi skill'i** — alt-agent tarafından yeni aday olarak önerildi, ama bu
  oturumda kontrol edilince kataloğun **zaten #37'de** (`skills/shadcn/SKILL.md` dahil) kayıtlı
  olduğu görüldü — **bilerek atlandı** (duplicate, yeni madde AÇILMADI).
- **`noGarne/visual-regression-mcp`** — `package.json` doğrudan incelendi: temiz bağımlılıklar
  (`@modelcontextprotocol/sdk`, `playwright`, `pixelmatch`, `pngjs`, `zod`), postinstall/preinstall
  hook'u yok, MIT lisans. Görsel diffing (baseline yakalama, animasyon dondurma, dinamik bölge
  maskeleme, AI-hakemli yanlış-pozitif azaltma) mimarisi sağlam görünüyor ama **0 yıldız/tek
  commit** — topluluk doğrulaması yok. **Eklenmedi**, gelecek bir tur benimseme kazanıp
  kazanmadığını izleyebilir.
- **`899ms/design-extract`** — zaten kataloglanmış `Manavarya09/design-extract`'in 0 yıldız/0
  fork'lu bir fork'u, bağımsız değer yok. **Eklenmedi**.
- **`alexanderuk82/mcp-wcag-accessibility`** (0 yıldız/1 commit), **`Duds/accessibility-mcp`**
  (1 yıldız/2 commit, Tur 25'te de reddedilmişti, tekrar çıktı) — ikisi de topluluk doğrulaması
  için çok erken/ince. **Eklenmedi**.
- **`thereisnotime/skills-collection`** — `WebFetch` ile doğrulandı: kendi orijinal `SKILL.md`
  içeriği YOK, günlük otomatik senkronizasyonla 105 başka repoyu kendi içine klonlayıp istatistik/
  grafik üreten bir agregatör. Saf meta-dizin, kriterlere uymuyor. **Eklenmedi**.
- **`Monotype/fonts-mcp`** — resmi Monotype (meşru kuruluş) deposu ama sadece 1 yıldız, ince
  dokümantasyon, `recommend_fonts` aracı sadece ÜCRETLİ MyFonts listelerine link veriyor — ücretsiz
  font teslimatı yok, kataloğun mevcut ücretsiz font araçlarına (Tur 15/24 #59/#65/#66) anlamlı
  katkısı yok. **Eklenmedi**.
- **`devstroop/icons-mcp`** — 0 yıldız, aynı ikon setlerini kapsayan daha iyi doğrulanmış
  `awssat/mcp-universal-icons` (#84) ile redundant. **Eklenmedi**.
- **`chusri/claude-code-agents`** — zaten kataloglanmış `wshobson/agents`'ın bağımsız içerik
  taşımayan bir fork'u. **Eklenmedi**.
- **`iannuttall/claude-agents`** — 2.0k yıldız/273 fork ama **arşivlenmiş** (27 Mayıs 2026'da
  bakımı durduruldu) ve sadece 7 agent içeriyor — kataloğun zaten aktif/daha büyük 6 genel
  koleksiyonuna (#3, #4, #11, #20, #43, #49) göre ince ve bakımsız. **Eklenmedi**.
- **`SankofaForge/design-inspiration-mcp-server`** — 0 yıldız/0 fork; doğrudan site-token
  çıkarmak yerine çoğunlukla Serper API üzerinden Awwwards araması yapıyor, kataloğun mevcut daha
  iyi doğrulanmış çıkarma araçlarıyla ince örtüşme. **Eklenmedi**.
- **GitHub Models API** — birden fazla kaynakla 30 Temmuz 2026'da kapandığı teyit edildi (Tur
  16'daki bulguyla tutarlı, tekrar araştırılmasın). **Eklenmedi (artık mevcut değil)**.
- **Fireworks AI ücretsiz katmanı** — artık sadece $1'lık tek seferlik kredi (10 istek/dk), kredi
  bitince ödeme yöntemi eklenmeden hesap askıya alınıyor — "koşulsuz kalıcı ücretsiz katman"
  kriterine uymuyor. **Eklenmedi**.
- **Together AI ücretsiz katmanı** — artık ücretsiz deneme yerine $5'lık zorunlu satın alma
  gerektiriyor — ücretsiz katman kriterini artık karşılamıyor. **Eklenmedi**.

---

## Tur 27 — 2026-09-19

### A) MCP Sunucuları (proje-özel, kategori D odaklı)

#### 85. [Ak0096/mcp-animation-inspector](https://github.com/Ak0096/mcp-animation-inspector) — ⚠️ DÜŞÜK BENİMSEME
- **Yıldız:** 1 · **Fork:** 0 · **Açık issue:** 0 · **Lisans:** MIT · **Güncellik:** 26 commit,
  aktif (Playwright tabanlı)
- **Ne işe yarar:** Gerçek bir tarayıcı açıp bir sitedeki animasyon sistemlerini (GSAP
  timeline/ScrollTrigger, Framer Motion, CSS `@keyframes`/transition, Lottie, WebGL/Three.js,
  Lenis/Locomotive Scroll, View Transitions/Barba.js/Swup) otomatik tespit ediyor; scroll
  noktalarında frame yakalayıp kaynak kodu çıkarıyor ve rapor üretiyor. `navigate/discover/
  capture/extract/describe/report` olmak üzere 6 MCP aracı var.
- **Neden meşru:** MIT lisanslı, tek geliştirici ama gerçek/işlevsel commit geçmişi var; ToS
  ihlali veya paylaşılan anahtar yok — tamamen yerel/tarayıcı otomasyonu.
  `docs/research/INSPECTION_GUIDE.md`'nin Faz 4 "Animasyon kütüphanesi" ve Faz 2 "Animasyonlar"
  boşluğuna, kataloğun önceki hiçbir maddesinin doldurmadığı özel amaçlı bir cevap.
- **Kurulum:** `npx` ile MCP client'a eklenir, Playwright bağımlılığı otomatik kurulur. API key
  gerekmez, yerel onay gerekir.
- **Not:** Yıldız sayısı çok düşük (yeni/tek kişilik proje) — kullanmadan önce hızlı bir kod
  incelemesi önerilir.

#### 86. [stolinski/css-mcp](https://github.com/stolinski/css-mcp)
- **Yıldız:** 333 · **Fork:** 11 · **Açık issue:** 0 · **Lisans:** ISC (package.json'da) ·
  **Güncellik:** Ekim 2025'te açılmış, aktif dış katkılar (ör. tanınan bir Microsoft/.NET
  topluluk figürü olan jamesmontemagno'dan merge edilmiş PR) mevcut
- **Ne işe yarar:** (1) MDN API'sinden canlı CSS dokümantasyonu ve tarayıcı desteği verisi çeker,
  (2) proje genelinde CSS dosyalarını (500 dosyaya/50MB'a kadar) tarayıp 150+ metrikle analiz
  eder — seçici karmaşıklığı/özgüllüğü, renk paletleri, font boyutları, spacing kalıpları,
  gereksiz/aşırı karmaşık selector tespiti. SQLite tabanlı 7 günlük TTL cache kullanıyor,
  `node_modules` ve minify dosyalarını otomatik hariç tutuyor.
- **Neden meşru:** Sahibi Scott Tolinski (Syntax.fm podcast'inin tanınan kurucularından) — düşük
  commit sayısına (10 commit, hepsi tek günde) rağmen yüksek yıldız sayısı bununla açıklanıyor,
  forklar ve dış katkılar gerçek/organik. Paylaşılan/havuzlanmış anahtar yok, tamamen yerel
  çalışıyor. `INSPECTION_GUIDE.md`'nin Faz 1 (Design Tokens) ve Faz 4 (CSS yaklaşımı analizi)
  ihtiyaçlarına doğrudan hizmet ediyor.
- **Kurulum:** `claude mcp add css -- npx -y css-mcp` veya `npm install -g css-mcp`. API key
  gerekmez.

#### 87. [g-battaglia/mcp-seo](https://github.com/g-battaglia/mcp-seo) — ⚠️ ÇOK YENİ/DÜŞÜK BENİMSEME
- **Yıldız:** 1 · **Fork:** 2 · **Açık issue:** 0 · **Lisans:** AGPL-3.0 · **Güncellik:** 4
  commit, yeni ama tamamlanmış görünüyor
- **Ne işe yarar:** 21 CLI komutu + 18 MCP aracıyla title/description/Open Graph/Twitter card/
  canonical URL gibi meta etiketleri, JSON-LD/Microdata/RDFa yapılandırılmış verisini, başlık
  hiyerarşisini, iç/dış linkleri, sitemap ve robots.txt doğrulamasını, Core Web Vitals (TTFB/FCP/
  LCP) ve ARIA erişilebilirlik noktalarını Playwright ile render ederek çıkarıyor; sonuçları
  Pydantic modelleri + Markdown rapor olarak veriyor.
- **Neden meşru:** AGPL-3.0 açık kaynak, kendi barındırdığınız/yerel çalışan bir araç —
  paylaşılan anahtar veya ToS ihlali yok. `INSPECTION_GUIDE.md`'nin Faz 4 "Technical Stack
  Analysis" içindeki SEO/meta-tag çıkarma ihtiyacına doğrudan cevap veriyor (katalogda bu
  kategori daha önce yoktu).
- **Kurulum:** `pip install` ile CLI olarak veya MCP server modunda Claude Code'a eklenir.
- **Dikkat:** Çok yeni ve düşük yıldızlı bir proje; kuruluş öncesi kodu gözden geçirin. Aynı
  isimde başka `mcp-seo` repoları da var (sparrow84001, muningis) — karıştırmayın, bu madde
  özellikle `g-battaglia/mcp-seo`.

### B) Ücretsiz & Meşru API Sağlayıcıları

#### 88. NVIDIA NIM API ([build.nvidia.com](https://build.nvidia.com)) ücretsiz katmanı (resmi) — ⚠️ İKİNCİL KAYNAKTAN DOĞRULANDI
- **Erişim:** NVIDIA Developer Program'a ücretsiz kayıt (telefon doğrulama gerekiyor, kredi kartı
  gerekmiyor) → `build.nvidia.com/settings/api-keys` üzerinden kişisel `nvapi-...` anahtarı.
- **Limitler (bu sandbox'ta `nvidia.com`/`docs.api.nvidia.com`'a doğrudan erişim engelli olduğu
  için GitHub üzerinde barınan bağımsız `api-evangelist/nvidia-nim` reposundaki rate-limit
  verisi + birden fazla bağımsız açık kaynak entegrasyon projesiyle — xRyul/pi-nvidia-nim,
  sour4bh/proxy-ai-nvidia-nim, diyism/cc-nim — çapraz doğrulandı):** dakikada ~40 istek (chat/
  completions/embeddings/ranking uç noktaları), API anahtarı başına en fazla 5 eşzamanlı istek,
  kayıtta 1000 ücretsiz çıkarım kredisi, istek başına 4096 çıktı/128K girdi token sınırı, 100'ün
  üzerinde açık ağırlıklı model (DeepSeek, Nemotron, Kimi, MiniMax vb.) OpenAI-uyumlu tek bir
  uç noktadan.
- **Neden meşru:** Her kullanıcı kendi kişisel API anahtarını alıyor — havuzlanmış/paylaşılan
  anahtar değil; NVIDIA'nın resmi geliştirici programının parçası, "değerlendirme amaçlı" olduğu
  açıkça belirtiliyor (üretim trafiği için değil) — şeffaf bir kısıtlama, gizli bir tuzak değil.
- **Kullanıcı notu:** Kuruluş öncesi mutlaka `build.nvidia.com`'daki resmi sayfadan güncel
  limitleri teyit edin — bu bilgi ikincil kaynaklardan derlendi, birincil kaynağa bu ortamdan
  erişilemedi.

### C) Doğrulanan ama EKLENMEYEN Bulgular (Tur 27)

- **`rafael-castelo/image-processing-mcp-server`** ve **`TheRealChickenlegs/pictor-mcp`**
  (WebP/AVIF dönüştürme) — işlevsel/MIT lisanslı ama çok düşük benimseme (3 ve 0 yıldız) ve
  katalogda zaten Sharp tabanlı `piephai/mcp-image-optimizer` (#46) aynı ihtiyacı karşılıyor —
  redundant. **Eklenmedi**.
- **`RichardDillman/seo-audit-mcp`** — 0 yıldız, tek commit, iş ilanı siteleri (job board) için
  çok dar kapsamlı; genel amaçlı `g-battaglia/mcp-seo` (#87) daha uygun bulundu. **Eklenmedi**.
- **`VoltAgent/awesome-codex-subagents`** (6.2k yıldız) — gerçek/sağlıklı proje ama `.toml`
  formatında ve özellikle OpenAI Codex CLI'a özgü (model routing `gpt-5.6-*`), Claude Code
  subagent formatıyla uyumsuz. **Eklenmedi**.
- **`Cid-oe/awesome-agy-subagents`** — "AGY" platformuna özgü, binlerce dönüştürülmüş ajan iddiası
  doğrulanamadı, meta-toplama niteliğinde, düşük güven. **Eklenmedi**.
- Çeşitli yeni tasarım-token/erişilebilirlik/browser-mcp varyantları (`hupeng9995/browser-mcp`
  ve benzerleri) — kategori zaten katalogda yoğun kapsanmış (7+ giriş), net farklılaşma yok.
  **Eklenmedi**.
- **Bilgi notu (doğrulama gerektirir, madde değiştirilmedi):** İkincil kaynaklar Eylül 2026
  itibarıyla Cerebras'ın ücretsiz katmanının (zaten #21'de düzeltme notuyla işaretli) kapalı
  kaldığını ve GitHub Models'ın (zaten #16 civarı "artık mevcut değil" notuyla işaretli) kapalı
  olduğunu tekrar doğruluyor — yeni bir bilgi değil, sadece teyit.

---

## Tur 28 — 2026-09-22

### A) Skill Koleksiyonları (proje-özel)

#### 89. [Ilm-Alan/frontend-design](https://github.com/Ilm-Alan/frontend-design)
- **Yıldız:** 121 · **Fork:** 18 · **Açık issue:** 1 · **Lisans:** MIT
- **Güncellik:** 31 commit, Ocak–Mayıs 2026 arasına yayılmış organik aktivite (patlama/burst
  deseni yok — önceki turlarda şişirilmiş-yıldız tespiti için kullanılan kriter burada temiz çıktı)
- **Ne işe yarar:** Sekiz "estetik çapa" (aesthetic anchor) sunan bir `SKILL.md` — her biri tam
  bir palet+tipografi+doku token setini tek parça kilitliyor, böylece ajan bir brief için tutarlı
  TEK bir estetik seçiyor (genel "AI-frontend" varsayılanları yerine). Claude Code, Codex ve
  Gemini CLI ile uyumlu.
- **Neden meşru:** Gerçek, kök dizinde detaylı token spesifikasyonlarıyla dolu bir `SKILL.md`
  doğrulandı; 18 fork organik downstream kullanım sinyali (salt yıldız-biriktirme değil).
- **Kurulum:** `SKILL.md` dosyasını (ve varsa referans token dosyalarını) `~/.claude/skills/`
  ya da proje `.claude/skills/` altına kopyala. Yerel dosya kopyalama, onay gerekmez.
- **Proje uyumu:** `AGENTS.md`'nin "Design Principles" bölümündeki "No personal aesthetic changes
  during emulation phase — match 1:1 first, customize later" ilkesiyle birebir örtüşüyor —
  pixel-clone fazından çıkıp kendi estetiğini oturtma adımına yapılandırılmış bir geçiş sağlıyor.
- **Dikkat:** Yıldız:issue oranı (121:1) hafif yüksek ama çok-aylık organik commit yayılımı ve
  fork sayısı bunu hafifletiyor; büyük çoklu-skill koleksiyonu değil, 8 varyantlı tek bir skill.

### B) MCP Sunucuları (proje-özel)

#### 90. [mugoosse/sitemap-mcp-server](https://github.com/mugoosse/sitemap-mcp-server) — ⚠️ DÜŞÜK BENİMSEME
- **Yıldız:** 7 · **Lisans:** MIT
- **Güncellik:** 12 commit, gerçek Python kaynak kodu (`src/sitemap_mcp_server/`, testler,
  Dockerfile)
- **Ne işe yarar:** Bir sitenin `sitemap.xml`'ini çekip ayrıştırıyor, tam URL listesi çıkarıyor,
  hiyerarşi ağacı ve sitemap sağlık istatistikleri üretiyor.
- **Neden meşru:** MIT lisanslı, gerçek/incelenebilir Python kaynak kodu + test dosyaları + Docker
  desteği; paylaşımlı anahtar veya ToS ihlali yok.
- **Proje uyumu:** `/clone-website` komutunun çok-sayfalı klonlama akışında (`<url1> [<url2> ...]`)
  paralel builder agent'ları dağıtmadan önce tüm sayfaları önceden keşfetmeye yarıyor — kataloğun
  önceki hiçbir maddesi bu boşluğu doldurmuyordu.
- **Kurulum:** `pip install` veya Docker (README'ye göre). Yerel onay gerekir. API key gerekmez.
- **Dikkat:** Düşük benimseme (7 yıldız), tek geliştirici, uzun vadeli bakım garantisi yok —
  kurulum öncesi kod incelemesi önerilir.

### C) Doğrulandı ama numaralı madde olarak EKLENMEDİ (Tur 28)

- **Qwen / DashScope API (Alibaba Cloud Model Studio)** — resmi Alibaba Cloud API'si (OpenAI-SDK
  uyumlu), Singapur/uluslararası bölgede yeni hesaplara aktivasyondan sonra 90 gün geçerli 1M
  giriş + 1M çıkış token ücretsiz katman sunuyor (kişisel anahtar, paylaşımlı değil). **Birincil
  kaynağa** (`alibabacloud.com`, `dashscope.console.aliyun.com`) bu sandbox'tan erişilemedi; üç
  bağımsız ikincil kaynak (techjacksolutions.com, qwen3lm.com, inventivehq.com) rakamlarda
  birleşiyor. Tur 21'in "birincil kaynak zorunlu" kuralı gereği **numaralı madde olarak
  eklenmedi** — Gemini/Mistral ile aynı "birincil doğrulama bekliyor" listesine eklendi. Not: eski
  ücretsiz "Qwen OAuth" CLI katmanı 15 Nisan 2026'da tamamen kapatıldı, artık tek ücretsiz yol bu
  zaman-sınırlı (90 gün) Model Studio katmanı — kalıcı bir katman değil.

### D) Doğrulanan ama EKLENMEYEN Bulgular (Tur 28)

- **`elliotxx/favicon-mcp-server`** — zaten Tur 23'te aynı gerekçeyle (redundancy) incelenip
  reddedilmişti; katalogda favicon üretimi için `dh1011/auto-favicon-mcp` (#55) ve
  `MohamedAbdallah-14/prompt-to-asset` (#77) zaten var. **Tekrar eklenmedi**, gelecek turlar bu
  ismi bir daha araştırmamalı.
- **`freshtechbro/claudedesignskills`** (917 yıldız, "22 skill/27 plugin") — şişirilmiş-yıldız
  deseni: tüm eklemeler ~1 aylık patlama döneminde (25 Ekim–20 Kasım 2025) esasen 2 katkıcıdan
  geldi, buna karşın sadece 4 issue/1 PR var — oran gerçek benimsemeyle uyuşmuyor. **Eklenmedi**.
- **`rshah515/claude-code-subagents`** (102 yıldız, "165 agent" iddiası) — repoda issue açma
  devre dışı bırakılmış, sadece 6 commit'le 165 agent dosyası iddiası doğrulanamadı. **Eklenmedi**.
- **`hupeng9995/browser-mcp`** ("pixel-perfect HTML/CSS clone" aracı) — 3 yıldız, 1 commit,
  README kendi kendini "sadece öğrenme/referans amaçlı" olarak tanımlıyor — ToS/scraping riski
  açıkça işaret ediyor, görev talimatındaki "ToS bypass" hariç-tutma kategorisine giriyor.
  **Eklenmedi**.
- **`noGarne/visual-regression-mcp`** — hâlâ 0 yıldız/tek commit (Tur 26'da da aynı gerekçeyle
  atlanmıştı); kavram olarak ilgili (AI-destekli pixel-diff + yanlış-pozitif filtreleme) ama
  olgunlaşmamış, "gelecekte tekrar bak" notu korunuyor.
- **`Manavarya09/design-extract` fork'ları** (nepalisagun, ivangegovdve-sudo, timothybrush,
  899ms — hepsi aynı README/açıklama) — orijinal (#31) etrafında şüpheli çoklu-hesap
  fork-kopyalama deseni tespit edildi, hiçbiri eklenmedi; ileride bu isimlerle karşılaşan turlar
  bilsin.
- **`vola-trebla/tailwind-context-resolver-mcp`** — 0 yıldız, ve daha önemlisi bu şablonun asıl
  yığını olan Tailwind v4'ü açıkça DESTEKLEMİYOR ("v4 uses a CSS-based config format and is not
  supported"). **Eklenmedi**.
- **`reuvenaor/figma-mcp-to-tailwind`** — repo lisansı "Private (not licensed for public use)"
  olarak işaretli (herkese açık görünür olmasına rağmen) — ücretsiz/açık kaynak kriterini
  karşılamıyor, ayrıca 7 yıldızla daha çok bir demo projesi. **Eklenmedi**.
- **`Maxamed-Maxamed/google-fonts-mcp`, `qpd-v/mcp-image-downloader`,
  `Digital-Defiance/mcp-screenshot`** — işlevsel ama çok ince (0-17 yıldız, 1-9 commit) ve
  katalogda zaten karşılığı olan (#59, #65, Chrome DevTools MCP, Playwright MCP) araçlarla
  redundant. **Eklenmedi**.
- **DeepSeek API** — ücretsiz katman kalıcı değil, sadece kayıt sonrası 30 gün/5M token'lık tek
  seferlik deneme kredisi; kategori D'de zaten yeterli sayıda benzer deneme-kredili madde var,
  daha zayıf bir aday. **Eklenmedi**.

---

## Tur 29 — 2026-09-22

### A) MCP Sunucuları (proje-özel)

#### 91. [cmg8431/web-meta-scraper](https://github.com/cmg8431/web-meta-scraper)
- **Yıldız:** 10 · **Lisans:** MIT
- **Güncellik:** 76+ commit, son commit 23 Şubat 2026, aktif
- **Ne işe yarar:** ~5KB'lik TypeScript tabanlı, plugin mimarili metadata çıkarıcı — Open Graph,
  Twitter Card, JSON-LD yapılandırılmış veri, oEmbed, favicon, RSS/Atom feed, robots direktifleri,
  yayın tarihi, site logosu, dil tespiti, video/audio kaynakları. Tek bağımlılık (cheerio), native
  `fetch()`, öncelik-sıralı alan birleştirme. Bundled MCP sunucu entegrasyonu var.
- **Neden meşru:** Gerçek `/src` plugin mimarisi doğrulandı, paylaşımlı anahtar yok, sadece
  herkese açık HTML meta etiketlerini okuyor (ToS ihlali yok).
- **Proje uyumu:** #87 (`g-battaglia/mcp-seo`) ile tamamlayıcı — o kapsamlı bir SEO/Core-Web-Vitals
  denetleyicisiyken, bu daha hafif ve format-odaklı (RSS/oEmbed/favicon/dil tespiti gibi #87'de
  olmayan alanları kapsıyor); `INSPECTION_GUIDE.md` Faz 4'ün "SEO/meta çıkarma" ihtiyacına ikinci,
  daha sade bir seçenek sunuyor.
- **Kurulum:** `npm install web-meta-scraper` veya bundled MCP sunucusunu README'ye göre çalıştır.
  Yerel onay gerekir, API key gerekmez.

#### 92. [omy13/mcp-svg-to-fonts](https://github.com/omy13/mcp-svg-to-fonts)
- **Yıldız:** 5 · **Lisans:** ISC
- **Güncellik:** 20 commit, Haziran 2025'ten beri aktif, versiyonlanmış release'ler (1.2.0→1.3.2),
  son commit 25 Ağustos 2026
- **Ne işe yarar:** Bir SVG ikon klasörünü TTF/WOFF/WOFF2 ikon webfont'una dönüştüren MCP sunucusu;
  otomatik CSS + TypeScript tip dosyası üretiyor. Araçlar: `list-svgs`, `generate-font-from-svgs`,
  `extend-existing-font` (Unicode eşlemelerini koruyarak), `extend-font-advanced` (var olan
  TTF'lerden glyph çıkarma).
- **Neden meşru:** Gerçek `src/main.ts` implementasyonu, versiyonlanmış npm release geçmişi,
  paylaşımlı anahtar yok.
- **Proje uyumu:** Şablonun `components/icons.tsx` adımına (React SVG component) alternatif/
  tamamlayıcı bir iş akışı — hedef sitede ikon webfont kullanılıyorsa bu yaklaşım birebir eşleşme
  sağlıyor.
- **Kurulum:** `npx mcp-svg-to-fonts`, MCP config'e ekle. Yerel onay gerekir, API key gerekmez.

### B) Skill/Referans Kütüphaneleri (animasyon & ikon)

#### 93. [animotion-mcp/animotion-mcp.github.io](https://github.com/animotion-mcp/animotion-mcp.github.io)
- **Yıldız:** 14 · **Lisans:** MIT
- **Güncellik:** 34+ commit, son commit 12 Nisan 2026, aktif
- **Ne işe yarar:** MCP v2 sunucusu; 745+ elle hazırlanmış CSS3 animasyonu (20 kategori) + 9.000+
  gerçek SVG ikonu (Lucide 1.941 + Tabler 5.039 + Bootstrap 2.078 + Heroicons 324 + yerleşik 120 =
  9.502, bu turda kaynak veri dosyalarına karşı bağımsız doğrulandı) sunan bir kütüphane. Araçlar:
  `search_animations`, `get_animation`, `compose_animation`, `suggest_animation`,
  `get_animation_css`, `search_icons`, `get_icon`, `list_icon_providers`, `add_custom_icon`,
  `list_categories`.
- **Neden meşru:** İkon/animasyon sayıları pazarlama metnine güvenilmeden gerçek yerel veri
  dosyalarına (`js/data.js`, `js/icons.js`, `css/keyframes*.css`) karşı doğrudan doğrulandı —
  rakamlar tutuyor ve ikon setlerinin tamamı meşru açık kaynaklı kütüphanelerden (Lucide/Tabler/
  Bootstrap/Heroicons, MIT/izin verici lisanslar) geliyor. 14 yıldız, doğrulanabilir gerçek
  içerikle orantılı (şişirilmiş-yıldız deseni YOK).
- **Proje uyumu:** #85 (`Ak0096/mcp-animation-inspector`) ile tamamlayıcı — #85 hedef sitedeki
  MEVCUT animasyonları TESPİT ederken, bu madde klonu inşa ederken KULLANILACAK hazır bir
  animasyon+ikon kütüphanesi sunuyor (tespit → inşa akışının ikinci adımı); "Beauty-first — her
  piksel önemli" ilkesine somut bir kaynak sağlıyor.
- **Kurulum:** `npx animotion-mcp` veya klonlayıp `node mcp/server.js`. API key gerekmez.

#### 94. [MasterPlayspots/motionspec](https://github.com/MasterPlayspots/motionspec) — ⚠️ DÜŞÜK BENİMSEME
- **Yıldız:** 0 · **Lisans:** MIT (çekirdek)
- **Güncellik:** Temmuz–Eylül 2026 arasında yoğun/aktif commit geçmişi, son commit 11 Eylül 2026
- **Ne işe yarar:** Şema-doğrulamalı animasyon spesifikasyonu derleyicisi + WCAG 2.2.2/2.3.3
  erişilebilirlik denetleyicisi. CLI + MCP araçları: `motion_catalog`, `motion_validate`,
  `motion_compile` (spec → vanilla GSAP+CSS), `motion_audit` (canlı URL'de reduced-motion güvenliği
  taraması), `motion_stats`. Yerel/npx MCP sunucusu tamamen anahtarsız çalışıyor; sadece opsiyonel
  barındırılan endpoint/canlı-model entegrasyonu key istiyor (paylaşımlı/havuzlanmış anahtar şeması
  YOK, varsayılan mock yanıt kullanıyor).
- **Neden meşru:** Gerçek `src/`, `test/`, `schema/`, `primitives/` kaynak kodu; kişisel hesap ama
  görünür, süregelen commit aktivitesi (isim-only kabuk repo değil).
- **Proje uyumu:** #93 ile birlikte animasyon iş akışının üçüncü adımı — inşa edilen animasyonların
  `prefers-reduced-motion` uyumluluğunu ve erişilebilirlik kalitesini denetliyor.
- **Dikkat:** 0 yıldız, gerçekten erken aşama — "umut verici ama kanıtlanmamış" olarak işaretlendi,
  kurulum öncesi kod incelemesi şart.
- **Kurulum:** `npx motionspec` (anahtarsız yerel mod).

### C) Doğrulandı ama numaralı madde olarak EKLENMEDİ (Tur 29)

- **OVHcloud AI Endpoints ücretsiz katmanı** — resmi bir AB (Fransa) bulut sağlayıcısının anonim/
  anahtarsız API katmanı; 3+ bağımsız ikincil kaynak (freellm.net, ayautomate.com, itsfree.ai) IP
  başına dakikada 2 istek limitli, kayıtsız/anahtarsız bir katmanda hemfikir (kayıtlı ücretsiz
  proje ile 400 istek/dk'ya çıkıyor). Birincil kaynağa (`ovhcloud.com`) bu turda da doğrudan
  `WebFetch` ile erişilemedi (`EGRESS_BLOCKED`, ana oturum tarafından bağımsız olarak yeniden
  denendi). Tur 21'in "birincil kaynak zorunlu" kuralı gereği (sadece genel web-arama toplayıcıları
  var, GitHub-barındırılan birincil-benzeri kanıt yok — NVIDIA NIM/Tur 27 durumundan farklı)
  numaralı madde olarak eklenmedi; Gemini/Mistral/Qwen ile aynı "birincil doğrulama bekliyor"
  listesine eklendi.

### D) Doğrulanan ama EKLENMEYEN Bulgular (Tur 29)

- **`rafael-castelo/image-processing-mcp-server`** — resize/compress/format-dönüştürme (JPEG/PNG/
  WebP/AVIF/TIFF) işlevi #46 (`piephai/mcp-image-optimizer`) ile doğrudan örtüşüyor; Tur 27'de
  zaten "iki redundant WebP/AVIF dönüştürücü" reddedilmişti, aynı redundancy gerekçesiyle bu da
  **eklenmedi**.
- **`yanlingLabs/video-extract-mcp`** (ve aynı adla dolaşan `kabyleamazigh/`,
  `synovial-lionfish82/` mirror'ları) — birebir aynı pazarlama metniyle çoklu-hesap mirror deseni,
  hariç-tutma kategorisine giriyor. **Eklenmedi**.
- **`AndacGuven/site-crawler-mcp`** — 4 commit, son aktivite Temmuz 2025 (14+ ay bakımsız),
  olgunlaşmamış/muhtemelen terk edilmiş. **Eklenmedi**.
- **`devlimelabs/tailwind-designer-mcp`, `coppinaphil/tailwind-mcp-server`,
  `clarity-contrib/tailwindcss-mcp-server`, `Tai-DT/mcp-tailwind-gemini`** — #70
  (`CarbonoDev/tailwindcss-mcp-server`) ile redundant ince Tailwind-doküman sarmalayıcıları.
  **Eklenmedi**.
- **`Pdroinho/motion-design-mcp`** — kanıtsız/abartılı pazarlama iddiaları ("328 MotionSites
  Vault", "HD forensic inspector" vb.) şişirilmiş-yıldız desenine benziyor, detaylı incelemeye
  girilmeden atlandı. **Eklenmedi**.
- **`obviousworks/Claude-AI-skills-collection-2026`, `GetBindu/awesome-claude-code-and-skills`** —
  gerçek yerel `SKILL.md` içeriği yerine başka repolara link veren meta-dizin/"awesome list"
  görünümünde; hariç-tutma kategorisine giriyor. **Eklenmedi**.
- **Çeşitli Apify-barındırılan OG/meta scraping "MCP sunucuları"** — ücretli Apify Actor
  sarmalayıcıları, ücretsiz/bağımsız GitHub deposu kriterini karşılamıyor. **Eklenmedi**.

---

*Son güncelleme: 2026-09-22 (Tur 29). Tur 29'da animasyon iş akışının iki eksik adımı dolduruldu:
hazır animasyon/ikon kütüphanesi (`animotion-mcp/animotion-mcp.github.io`, #93 — sayılar kaynak
veri dosyalarına karşı bağımsız doğrulandı) ve erişilebilirlik-odaklı spec derleyici/denetleyici
(`MasterPlayspots/motionspec`, #94, düşük-yıldız uyarısıyla) — ikisi de #85'in animasyon TESPİT
aracıyla tamamlayıcı, çakışmıyor. OG/meta-etiket çıkarma boşluğuna ikinci, daha hafif bir seçenek
eklendi (`cmg8431/web-meta-scraper`, #91, #87 ile tamamlayıcı). İkon-webfont üretimi ilk kez
katalogda yer aldı (`omy13/mcp-svg-to-fonts`, #92). Bir aday
(`rafael-castelo/image-processing-mcp-server`) #46 ile doğrudan örtüştüğü için Tur 27'nin
redundancy gerekçesiyle eklenmedi. OVHcloud AI Endpoints'in resmi ücretsiz/anahtarsız katmanı üç
bağımsız ikincil kaynakla doğrulandı ama birincil kaynağa (bu turda ana oturum tarafından da
bağımsız olarak denendi) erişilemediği için Tur 21'in kuralı gereği numaralı madde olarak
eklenmedi. Sonraki turlarda bu dosya okunup yeni kaynaklar üstüne eklenecek, Tur 1–29'da
listelenenler tekrarlanmayacak.

Tur 28'de proje-özel iki boşluk dolduruldu: çok-sayfalı
site keşfi için `mugoosse/sitemap-mcp-server` (#90, düşük-yıldız uyarısıyla) ve pixel-clone
fazından kendi estetiğe geçiş için sekiz-varyantlı bir tasarım-token skill'i
(`Ilm-Alan/frontend-design`, #89). Qwen/DashScope API'nin resmi ücretsiz katmanı (90 gün/1M+1M
token, kişisel anahtar) üç bağımsız ikincil kaynakla doğrulandı ama birincil kaynağa bu
sandbox'tan erişilemediği için Tur 21'in kuralı gereği numaralı madde olarak eklenmedi. Önceki
turlardan tanıdık iki desen bu turda da doğrulandı: (1) şişirilmiş-yıldız/düşük-issue oranı
(`freshtechbro/claudedesignskills`, 917:4), (2) issue'ları kapatılmış/doğrulanamaz dosya
iddiaları (`rshah515/claude-code-subagents`). Bir aday (`elliotxx/favicon-mcp-server`) Tur 23'te
zaten reddedilmiş bir tekrar-adaydı — gelecek turlar için not düşüldü. Tur 26'da proje-özel MCP
boşluğu üç yeni araçla dolduruldu:
ikinci bağımsız erişilebilirlik denetim implementasyonu (`priyankark/a11y-mcp`, #82), Storybook
tabanlı "ground truth" design-token/component çıkarma (`freema/mcp-design-system-extractor`, #83)
ve düşük-benimsemeli ama proje-uyumlu ikon eşleştirme aracı (`awssat/mcp-universal-icons`, #84,
düşük yıldız uyarısıyla). Alt-agent'ın önerdiği bir aday (`shadcn-ui/ui` resmi skill'i) kataloğun
zaten #37'de kayıtlı olduğu bu oturumda tespit edilip duplicate olarak atlandı — gelecek turlar
alt-agent'a verilen "mevcut liste" özetinin madde madde değil, doğrudan dosyadan `grep` edilmiş
başlık+link listesi olmasının bu tür duplicate'leri azalttığını unutmamalı. Google Gemini ücretsiz
katmanının birincil-kaynak doğrulaması üçüncü art arda turda da başarısız oldu (`ai.google.dev`,
`aistudio.google.com`, web.archive.org mirror'ı hepsi engellendi/erişilemedi) — dört bağımsız
ikincil kaynak artık günde ~1.500 istek + sadece Flash modelleri (Pro modeller 1 Nisan 2026'dan beri
ücretsiz katman dışında) rakamlarında birleşiyor, ama Tur 21'in birincil-kaynak-zorunlu kuralı
gereği yine numaralı madde olarak EKLENMEDİ; ağ erişimi açılırsa gelecek bir tur önce
`generativelanguage.googleapis.com` dokümantasyonunu veya bir Google Developers blog mirror'ını
denemeli. Sonraki turlarda bu dosya okunup yeni kaynaklar üstüne eklenecek, Tur 1–26'da
listelenenler tekrarlanmayacak. Tur 6'da `OthmanAdi/planning-with-files` Sonraki turlarda bu dosya okunup yeni kaynaklar üstüne
eklenecek, Tur 1–25'te listelenenler tekrarlanmayacak. Tur 6'da `OthmanAdi/planning-with-files`
(ve aynı adla dolaşan fork/mirror'ları), Tur 13'te `athola/claude-night-market`
(`auto-star-repo.sh` hook'u), Tur 21'de `Microck/font-mcp` (font korsanlığı otomasyonu)
şüpheli/kötü niyetli bulundu; Tur 20'de Snyk'in ToxicSkills denetimi (ClawHub/skills.sh
ekosisteminde %36 prompt-injection oranı) genel bir güvenlik uyarısı olarak eklendi; Tur 22'de
"UI/UX Pro Max" skill mirror'ları (128.9k yıldız / sadece 39 issue) şişirilmiş-yıldız deseniyle
tespit edildi (tehlikeli hook YOK, ama güvenilmez benimseme sinyali — kurmadan önce ilgili notları
oku). Tur 17'nin metodoloji düzeltmesi (genel `WebFetch`/`WebSearch` tek-repo GitHub kısıtlamasına
tabi DEĞİL, sadece `mcp__github__*` MCP araçları scope'lu) Tur 18-25'te tekrar doğrulandı ve
kullanıldı. Tur 9'da OpenRouter, Tur 10'da Jina AI Reader, Tur 14'te Z.ai GLM Flash, Tur 15'te
Vercel AI Gateway, Tur 24-25'te Google Gemini ve Mistral AI ücretsiz katmanlarının birincil kaynak
doğrulaması hâlâ bekliyor (ticari domain engeline takılıyorlar, GitHub kısıtlaması değil) — Tur
25'te Gemini için üç bağımsız ikincil kaynak (tokenmix.ai, aipromptshub.co, pecollective.com)
katmanın var olduğunu doğruladı ama Tur 21'in "birincil kaynak zorunlu" kuralı gereği yine de
numaralı madde olarak eklenmedi. Tur 22'de KRİTİK DÜZELTME: Tur 5'te
eklenen #21 (Cerebras Cloud API) artık YANLIŞ bilgi içeriyor — Cerebras 17 Ağustos 2026'da kalıcı
ücretsiz katmanını kapattı; madde düzeltme notuyla güncellendi. Tur 23'te proje-özel Next.js
16/Tailwind v4 skill boşluğu `laguagu/claude-code-nextjs-skills` (#68) ve `secondsky/claude-skills`
(#69) ile dolduruldu; CSS→Tailwind dönüştürme (`CarbonoDev/tailwindcss-mcp-server`, #70), hedef
site teknoloji tespiti (`Houseofmvps/opentechalyzer`, #71), OG görsel üretimi
(`Jellypod-Inc/satori-mcp-server`, #72) ve ikincil bir pixel-diff aracı
(`leky90/mcp-image-compare-server`, #73) eklendi. Tur 23'te KRİTİK GÜNCELLEME: Meta'nın resmi
Llama API ücretsiz katmanı 6 Temmuz 2026'da kapandı (artık mevcut değil, sadece üçüncü parti
rehost'lar var) — bu, GitHub Models (Tur 16) ve Cerebras (Tur 22) ile aynı "sağlayıcı ücretsiz
katmanı kapattı" kategorisine giriyor. **Tur 24'te YENİ:** görsel/screenshot QA boşluğu üçüncü bir
bağımsız araçla (`samihalawa/visual-ui-debug-agent-mcp`, #75, 29 araç) güçlendirildi; tasarım-token/
tema referansı ve WCAG inceleme kuralları (`marvkr/better-design`, #74) eklendi; ücretsiz/self-hosted
tek-binary web crawler (`us/crw` "fastCRW", #76) hem ücretli `firecrawl-mcp-server` hem de
`crawl4ai-mcp-server`'a hafif bir alternatif olarak eklendi; çoklu-platform icon/favicon/OG-görseli
asset üretimi (`MohamedAbdallah-14/prompt-to-asset`, #77) mevcut tekli-favicon maddelerinin
ötesinde bir boşluğu doldurdu. Bu turda da alt-agent'a TAM hariç-tutma listesi (140+ madde) verme +
ikinci bağımsız doğrulama alt-agent'ı yöntemi (Tur 19/21/23'te de kullanılan) etkili bulundu —
duplikasyon ve doğrulanmamış istatistik sıfıra indi. **Tur 25'te YENİ:** proje-özel tasarım-token
çıkarma boşluğu iki araçla dolduruldu (`arvindrk/extract-design-system`, #78 — Skill+CLI+MCP üçlü
arayüz; `ilikescience/design-tokens-skill`, #79 — DTCG format uzmanlığı, niş); Next.js/React/
TypeScript-özel derinlikte bir subagent koleksiyonu eklendi (`lst97/claude-code-sub-agents`, #80 —
13+ aydır bakımsız ama sağlam bir görüntü kaydı olarak işaretlendi); resmi Groq MCP sunucusu +
kredi-kartsız ücretsiz açık-model API katmanı eklendi (`groq/groq-mcp-server`, #81). Tur 25'te
DİSİPLİN NOTU: alt-agent Google Gemini'yi üç ikincil kaynakla doğrulayıp eklemeyi önerse de, Tur
21'in birincil-kaynak-zorunlu kuralı korunarak numaralı madde olarak EKLENMEDİ — "kalite/dürüstlük >
miktar" ilkesi burada da uygulandı; ağ erişimi açılınca gelecek bir tur `ai.google.dev`'i doğrudan
doğrulamalı. **Tur 27'de YENİ:** proje-özel boşluk üç niş MCP aracıyla daha dolduruldu —
animasyon/hareket sistemi tespiti (`Ak0096/mcp-animation-inspector`, #85, düşük-yıldız uyarısıyla),
CSS analiz/MDN dokümantasyon aracı (`stolinski/css-mcp`, #86, tanınan bir geliştiriciden — Syntax.fm
kurucusu — organik yüksek yıldız), SEO/meta-etiket çıkarma (`g-battaglia/mcp-seo`, #87, çok-yeni
uyarısıyla) — ve ilk kez NVIDIA NIM API ücretsiz katmanı (#88, kişisel anahtar, ikincil kaynaktan
çapraz doğrulandı, birincil sayfa bu sandbox'tan erişilemedi) eklendi. Reddedilen adaylar: iki
redundant WebP/AVIF dönüştürücü, dar kapsamlı bir SEO aracı, platform-uyumsuz iki Codex/AGY subagent
koleksiyonu (bkz. yukarıdaki "Doğrulanan ama EKLENMEYEN" listesi).*

## Tur 30 — 2026-09-22

### A) MCP Sunucuları (proje-özel niş boşluklar)

#### 95. [KyaniteLabs/kinocut](https://github.com/KyaniteLabs/kinocut) (eski adıyla `mcp-video`)
- **Yıldız:** 162 · **Lisans:** Apache-2.0
- **Güncellik:** 1.513+ commit, en son yayınlanan sürüm 1.15.1 (31 Ağustos 2026), aktif ve
  süregelen geliştirme (Forgejo'da barınan kanonik kaynak, GitHub genel işbirliği aynası)
- **Ne işe yarar:** FFmpeg tabanlı, "guardrailed" (korkuluklu/denetimli) yerel video düzenleme MCP
  sunucusu + Python kütüphanesi + `kino` CLI'ı. 196 MCP aracı / 167 CLI komutu: kırpma, birleştirme,
  yeniden boyutlandırma, döndürme, format dönüştürme, altyazı, overlay, transkripsiyon, sahne
  tespiti, upscaling, platform-özel (Shorts/Reels/TikTok) yeniden paketleme, "Video Receipts" ile
  yayın-öncesi kalite kapısı.
- **Neden meşru:** Gerçek Python paketi (`kinocut/`, `kinocut_sound/`, `tests/`, `docs/`,
  `workflows/` klasörleri), PyPI'de yayınlı (`pip install kinocut`), açıkça "local-first, no
  Kinocut account or API key required for the core surface" diyor — paylaşımlı/havuzlanmış
  kimlik bilgisi YOK. `mcp-video`'dan `kinocut`'a yeniden adlandırma şeffaf şekilde belgelenmiş
  (eski PyPI/registry adları geriye dönük uyumluluk için korunuyor, gizli mirror değil).
- **Proje uyumu:** Görev talimatının açıkça işaret ettiği "video/GIF asset indirme ve optimize
  etme" boşluğunu dolduruyor — hedef siteden indirilen videoları `public/videos/`'a koymadan önce
  web için yeniden kodlamak/kırpmak/boyutlandırmak için kullanılabilir; kataloğun bugüne kadar hiçbir
  video-düzenleme/optimize MCP'si yoktu (sadece video-analiz ve GIF-arama araçları vardı).
- **Kurulum:** `pip install kinocut` veya `uvx --from kinocut kino`; MCP config'e ekle. Yerel
  FFmpeg gerekir, API key gerekmez.

#### 96. [foxted/rsc-boundary](https://github.com/foxted/rsc-boundary)
- **Yıldız:** 128 · **Lisans:** MIT
- **Güncellik:** 80 commit, en son commit 5 Eylül 2026, aktif (0 açık issue, 1 fork — organik/
  niş bir büyüme deseni, şişirilmiş-yıldız işareti YOK)
- **Ne işe yarar:** Next.js App Router (ve TanStack Start) uygulamalarında React Server Component
  ile Client Component sınırlarını tarayıcıda doğrudan görselleştiren devtool — kök layout'a tek bir
  provider eklenerek turuncu (client kök) / mavi (server bölgesi) anahat + etiket + panel sunuyor.
  Paketler: `@rsc-boundary/core` (framework-agnostic fiber walk), `@rsc-boundary/next`,
  `@rsc-boundary/start`.
- **Neden meşru:** Gerçek monorepo (`packages/`, `apps/web` demo/playground, `playgrounds/`
  adapter smoke-testleri, `config/`), npm'de yayınlı paketler, MIT lisans, tek geliştiricili ama
  aktif (Eylül 2026'da commit, dependabot güncellemeleri, CI).
- **Proje uyumu:** Görev talimatının açıkça işaret ettiği "React Server Component uyumluluk
  kontrolü" boşluğunu dolduruyor — Next.js 16 App Router tabanlı bu şablonda klonlanan
  bileşenlerin hangilerinin yanlışlıkla `"use client"` sınırını aştığını/kaçırdığını görsel olarak
  denetlemek için kullanılabilir; kataloğun bugüne kadar hiçbir RSC-sınır aracı yoktu.
- **Kurulum:** `npm install @rsc-boundary/next` (dev dependency), kök layout'a provider ekle. API
  key gerekmez, tamamen yerel/geliştirme-zamanı aracı.

### B) Kütüphane/Araç (font optimizasyonu — resmi ve yaygın)

#### 97. [fonttools/fonttools](https://github.com/fonttools/fonttools) (`pyftsubset`)
- **Yıldız:** 5.300+ · **Lisans:** MIT
- **Güncellik:** 13.300+ commit, en son sürüm 4.65.0 (10 Eylül 2026), çok aktif (65 açık PR, 331
  açık issue — büyük, olgun bir projede beklenen oranlar, şişirilmiş-yıldız deseni YOK)
- **Ne işe yarar:** Python ile yazılmış, fontları (TrueType/OpenType/AFM/kısmen Type 1) işlemek
  için resmi kütüphane; paketle birlikte gelen `pyftsubset` komut satırı aracı, bir font dosyasını
  yalnızca kullanılan karakter/glyph/OpenType özelliklerine indirgeyerek (subsetting) web için
  dosya boyutunu ciddi oranda küçültüyor.
- **Neden meşru:** `github.com/fonttools` resmi organizasyonu, 1999'dan beri süregelen telif hakkı/
  geliştirme, 60+ isimlendirilmiş katkıcı, PyPI'de (`pip install fonttools`) milyonlarca indirme,
  Google Fonts dahil endüstri standardı font araç zinciri olarak yaygın kullanım.
- **Proje uyumu:** Görev talimatının açıkça işaret ettiği "custom font subsetting" boşluğunu
  dolduruyor — hedef siteden indirilen/self-host edilecek webfont'ları (`google-webfonts-helper`,
  `webfont-dl` gibi zaten kataloglanmış araçlarla indirildikten SONRA) yalnızca gerçekten kullanılan
  glyph'lere indirgemek için tamamlayıcı bir adım; kataloğun bugüne kadar font-arama/eşleştirme
  araçları vardı (#Maxamed-Maxamed, #Monotype, #Microck) ama hiçbir subsetting/optimizasyon aracı
  yoktu.
- **Kurulum:** `pip install fonttools`, örnek kullanım:
  `pyftsubset font.ttf --unicodes="U+0000-00FF" --output-file=font-subset.woff2 --flavor=woff2`.
  API key gerekmez, tamamen yerel CLI.

### C) MCP Sunucusu (proje-özel — Vercel deployment otomasyonu, düşük-güncellik uyarısıyla)

#### 98. [nganiet/mcp-vercel](https://github.com/nganiet/mcp-vercel) — ⚠️ DÜŞÜK GÜNCELLİK
- **Yıldız:** 69 · **Lisans:** MIT
- **Güncellik:** 39 commit, son commit **5 Ağustos 2025** (13+ aydır güncellenmemiş), 0 açık issue,
  17 fork
- **Ne işe yarar:** Claude/Cursor gibi AI asistanları Vercel'in API'sine bağlayan MCP sunucusu;
  11+ araç — deployment listeleme/oluşturma, proje yönetimi (oluşturma/listeleme/ortam değişkeni
  yönetimi), domain bilgisi, ortam (environment) ve takım yönetimi.
- **Neden meşru:** Gerçek `src/` kod yapısı (`handlers.ts`, `schema.ts`, `types.ts`, araç
  alt-klasörleri), kullanıcının KENDİ Vercel API token'ını `VERCEL_API_TOKEN` ortam değişkeniyle
  yerel olarak sağlaması gerekiyor (paylaşımlı/havuzlanmış anahtar YOK), MIT lisans, 0 açık issue
  (bakımsız ama sorunlu değil).
- **Dikkat:** 13+ ay güncellenmemiş — Tur 25'te `lst97/claude-code-sub-agents` için kurulan
  "bakımsız ama sağlam bir görüntü kaydı" emsaliyle aynı gerekçeyle, açık düşük-güncellik uyarısıyla
  eklendi. Kurulum öncesi Vercel API'sinin bu tarihten sonra değişip değişmediği (breaking change)
  kontrol edilmeli. Alternatif adaylar (`Quegenx/vercel-mcp-server` — 63 yıldız/3 commit şüpheli
  oranı; `AStheTECH/mewcp-vercel` — 0 yıldız, kimlik-bilgisi-enjeksiyon gateway mimarisi) bu
  gerekçelerle tercih edilmedi (aşağıya bak).
- **Proje uyumu:** Görev talimatının açıkça işaret ettiği "Vercel deployment otomasyonu" boşluğunu
  dolduruyor — `AGENTS.md`'nin "Deployment: Vercel" hedefine doğrudan hizmet ediyor.
- **Kurulum:** `git clone` + `npm install` + `VERCEL_API_TOKEN` ortam değişkenini kullanıcının
  kendi Vercel hesap ayarlarından (`vercel.com/account/tokens`) aldığı token ile ayarla, MCP
  config'e ekle. Yerel onay + kişisel API token gerekir.

### D) Doğrulanan ama EKLENMEYEN Bulgular (Tur 30)

- **`Quegenx/vercel-mcp-server`** — 63 yıldız fakat sadece 3 commit görünüyor; yıldız/commit oranı
  şüpheli (dosyanın başındaki "şişirilmiş yıldız" deseniyle örtüşme riski). Detaylı adli inceleme
  yapılmadan, temkinli olarak **eklenmedi**.
- **`AStheTECH/mewcp-vercel`** — 0 yıldız; kimlik bilgilerini ("Vercel token'ınız") bir üçüncü
  parti "gateway"in `X-MCP-Cred-Fields` header'ı üzerinden enjekte ettiği bir mimari kullanıyor —
  bu, görev talimatının yasakladığı "paylaşımlı/havuzlanmış API key" deseniyle yeterince örtüşme
  riski taşıyor. **Eklenmedi**.
- **`azrdn/sunset`** — 0 yıldız font-subsetting web uygulaması (hb-subset sarmalayıcı); işlevsel
  gerçek kaynak koduna sahip ama kurulum karmaşık (Bun + hb-subset + woff2 + 7zz veya Docker) ve
  0 benimseme sinyali var. Aynı işlevi çok daha meşru/olgun bir şekilde sağlayan
  `fonttools/fonttools` (#97) tercih edildiği için **eklenmedi** (redundant + daha zayıf).
- **CSS-in-JS tespiti** ve **dark-mode/tema tespiti** nişleri için bu turda bağımsız, meşru,
  henüz kataloglanmamış bir GitHub projesi bulunamadı — sonuçlar ya genel-amaçlı CSS analiz
  kütüphaneleriydi (proje-özel MCP değil) ya da zaten kataloglanmış `x51xxx/coolors-mcp`'ye
  (tema/renk eşleştirme) çok yakındı. **Pending** — gelecek turlar tekrar bakabilir.

---

*Son güncelleme: 2026-09-22 (Tur 30). Tur 30'da görev talimatının açıkça işaret ettiği dört niş
boşluktan üçü dolduruldu: video/GIF asset optimize etme (`KyaniteLabs/kinocut`, #95 — eski adıyla
`mcp-video`, 162 yıldız, tamamen anahtarsız), React Server Component uyumluluk kontrolü
(`foxted/rsc-boundary`, #96, 128 yıldız, Eylül 2026'da aktif commit) ve Vercel deployment
otomasyonu (`nganiet/mcp-vercel`, #98, düşük-güncellik uyarısıyla — iki alternatif aday şüpheli
yıldız/commit oranı ve kimlik-bilgisi-gateway mimarisi nedeniyle reddedildi). Ayrıca resmi ve çok
yaygın `fonttools` kütüphanesinin `pyftsubset` aracı font-subsetting boşluğunu doldurdu (#97, 5.300+
yıldız, 10 Eylül 2026'da yeni sürüm). CSS-in-JS tespiti ve dark-mode/tema tespiti nişleri için
meşru/yeni bir aday bulunamadı, pending bırakıldı. Bu turda **ilk kez** oturum başında "detached
HEAD" sorunu görülmedi (repo doğrudan `master`'daydı) — önceki on iki turun aksine bir düzeltme
adımı gerekmedi. Sonraki turlarda bu dosya okunup yeni kaynaklar üstüne eklenecek, Tur 1–30'da
listelenenler tekrarlanmayacak.

## Tur 31 — 2026-09-22

**Tur 31 notu (~11:15 UTC / 14:15 Türkiye saati başladı):** Kesme noktasının (12:00 UTC) öncesinde
başladı. Oturum başında yine "detached HEAD" sorunu görüldü (repo `bc711f8`'de ayrık haldeydi,
yerel `master` dalı origin'in 31 commit gerisindeydi) — `git checkout master && git merge --ff-only
origin/master` ile düzeltildi; Tur 30'un "ilk kez düzeltme gerekmedi" gözlemi tekrarlanmadı, bu
adımın her turda rutin bir ön kontrol olarak kalması gerektiği doğrulandı. Dosyanın tamamı (3.375
satır) okunmadan önce mevcut 98 madde ve linkleri `grep` ile çıkarıldı, hariç-tutma listesi olarak
kullanıldı. `gh` CLI/doğrudan GitHub API erişimi bu oturumda mevcut değildi (sadece tek-repo'ya
scoped MCP GitHub araçları); doğrulama bunun yerine genel `WebSearch`/`WebFetch` ile yapıldı — bu
araçların tek-repo kısıtlamasına tabi olmadığı Tur 17'den beri bilinen bir husus.

Tur 30'un pending bıraktığı iki niş (CSS-in-JS tespiti, dark-mode/tema tespiti) bu turda da
arandı, yine meşru/bağımsız bir GitHub projesi bulunamadı — CSS-in-JS için bulunan tek somut aday
(`igorvieira/mcp-component-review`) 0 yıldız, sadece 3 commit, Figma token gerektiriyor ve zaten
kataloglanmış pixel-diff araçlarıyla (#w01fgang/mcp-design-comparison, #leky90/mcp-image-compare-server)
örtüşüyor — **eklenmedi**. Dark-mode tespiti için bulunan `designlang.app` markalı proje, GitHub'da
araştırılınca kataloğun zaten Tur 8'den beri #31 olarak kayıtlı `Manavarya09/design-extract`
projesinin kendi tanıtım sitesi olduğu tespit edildi — **duplicate, eklenmedi** (iyi bir
metodolojik kontrol örneği: isim farklı görünse de GitHub linkine inince aynı proje çıktı). Bir
subagent-koleksiyonu adayı (`tryalan-ai/awesome-claude-code-sub-agents`, 172★) doğrulanınca, Tur
25'te aynı ekip (Alan AI/tryalan.ai) tarafından `supatest-ai/awesome-claude-code-sub-agents` adıyla
zaten değerlendirilip "6 benzer genel-amaçlı koleksiyon zaten var" gerekçesiyle reddedilmiş projenin
birebir aynısı/yeniden-adlandırılmış hali olduğu görüldü (171★ vs 172★, aynı dosya yapısı, son
commit Eylül 2025 — 12+ ay bakımsız) — **tekrar eklenmedi**.

### A) Resmi API/MCP sunucusu (yeni sağlayıcı — Cloudflare Workers AI ücretsiz katmanı)

#### 99. [cloudflare/mcp](https://github.com/cloudflare/mcp)
- **Yıldız:** 876 · **Lisans:** Apache-2.0
- **Güncellik:** 114+ commit, resmi Cloudflare organizasyonu altında aktif geliştirme
- **Ne işe yarar:** Cloudflare'in TÜM API'sine (Workers, KV, R2, D1, Pages, DNS, **Workers AI**, AI
  Gateway, Vectorize, Access, Stream, Images, Firewall/Load Balancer dahil ~2.500 endpoint) token-
  verimli erişim sağlayan resmi MCP sunucusu — "Code Mode" deseniyle agent'ın büyük OpenAPI
  şemasını istemciye sızdırmadan JavaScript yazıp API'yi aramasını/çağırmasını sağlıyor (~1.100
  token ile 2.500 endpoint). Workers AI aracılığıyla LLM/embedding/görsel-sınıflandırma modellerine
  erişim de bu kapsamda.
- **Neden meşru:** `github.com/cloudflare` resmi organizasyonu (aynı org: `cloudflare/workers-mcp`,
  `cloudflare/workers-sdk` gibi tanınan projelerle birlikte), Apache-2.0, kimlik doğrulama OAuth
  veya kullanıcının KENDİ Cloudflare API token'ıyla yapılıyor (paylaşımlı/havuzlanmış anahtar YOK).
  Workers AI'ın ücretsiz katmanı (**günde 10.000 Neuron, kredi kartı gerektirmeden**, her gün
  00:00 UTC'de sıfırlanıyor) `developers.cloudflare.com` bu sandbox'tan doğrudan erişilemese de
  (`EGRESS_BLOCKED`), Cloudflare'in dokümantasyonunun kaynağı olan resmi `cloudflare/cloudflare-docs`
  reposundaki `pricing.mdx` dosyası doğrudan `raw.githubusercontent.com` üzerinden okunarak birincil
  kaynaktan doğrulandı ("Our free allocation allows anyone to use a total of 10,000 Neurons per day
  at no charge") — Tur 21'in "birincil kaynak zorunlu" kuralı, GitHub-barındırılan birincil-benzeri
  kanıt sayıldığı için karşılandı (Tur 27'deki NVIDIA NIM emsaliyle aynı mantık).
  10.000 Neuron/gün kabaca 100-200 LLM yanıtı veya 1.500-15.000 embedding'e denk geliyor (bazı
  premium modeller — Kimi K2.6/K2.7, GLM-5, DeepSeek V4 — ücretsiz katman dışında).
- **Proje uyumu:** Kataloğun bugüne kadar listelediği ücretsiz LLM API sağlayıcılarına (OpenRouter,
  Groq, NVIDIA NIM, Jina AI Reader, Z.ai GLM Flash, Vercel AI Gateway) yeni ve resmi bir alternatif
  ekliyor; ayrıca aynı MCP sunucusu üzerinden R2/Images/Stream gibi asset-barındırma özellikleri de
  `public/images/` ve `public/videos/` iş akışlarına potansiyel olarak hizmet edebilir.
- **Kurulum:** `npx mcp-remote https://mcp.cloudflare.com/... ` (resmi barındırılan uç nokta,
  OAuth ile) veya repoyu klonlayıp yerel çalıştırma; kullanıcının kendi Cloudflare hesabından API
  token'ı gerekir (`dash.cloudflare.com`). Yerel onay + kişisel hesap gerekir, paylaşımlı anahtar
  yok.

### B) Doğrulanan ama EKLENMEYEN Bulgular (Tur 31)

- **`igorvieira/mcp-component-review`** — 0 yıldız, sadece 3 commit, kaynak kodun büyük kısmı
  doğrulanamadı, Figma personal access token gerektiriyor, işlevi zaten kataloglanmış pixel-diff
  araçlarıyla örtüşüyor. **Eklenmedi.**
- **`designlang.app` (= `Manavarya09/design-extract`)** — kataloğun zaten #31 maddesi (Tur 8'den
  beri), sadece farklı bir pazarlama/tanıtım alan adı altında yeniden karşımıza çıktı. **Duplicate,
  eklenmedi.**
- **`tryalan-ai/awesome-claude-code-sub-agents`** — Tur 25'te `supatest-ai/awesome-claude-code-sub-agents`
  adıyla zaten değerlendirilip reddedilmiş aynı şirket/aynı projenin yeniden-adlandırılmış/fork'lanmış
  hali (172★, son commit Eylül 2025 — 12+ ay bakımsız). **Tekrar eklenmedi.**
- **`codewithkate` "Robots Compliance Scrape Workflow MCP Server"** — sadece Glama üzerinden
  listelenmiş, doğrulanabilir bağımsız bir GitHub deposu bulunamadı (Glama'nın kendisi de bu
  sandbox'tan `EGRESS_BLOCKED`); kaynak kodu doğrulanamadan eklenmedi. **Eklenmedi** (gelecek bir
  tur GitHub linkini bulursa tekrar değerlendirilebilir — proje-özel "etik scraping/robots.txt
  uyumluluğu" niş boşluğu hâlâ dolmadı).
- CSS-in-JS tespiti ve dark-mode/tema tespiti nişleri için üçüncü art arda turda da meşru, yeni,
  bağımsız bir GitHub projesi bulunamadı — **pending**, gelecek turlar tekrar bakabilir.

---

*Son güncelleme: 2026-09-22 (Tur 31). Tur 31'de resmi Cloudflare organizasyonunun `cloudflare/mcp`
sunucusu eklendi (#99) — Workers AI'ın ücretsiz katmanı (günde 10.000 Neuron, anahtarsız/kredi
kartsız) `cloudflare/cloudflare-docs` resmi reposundan birincil kaynak olarak doğrulandı
(`developers.cloudflare.com` bu sandbox'tan erişilemedi ama GitHub-barındırılan birincil-benzeri
kanıt Tur 21 kuralını karşıladı — Tur 27'deki NVIDIA NIM emsaliyle tutarlı). İki önemli duplicate/
tekrar-aday tespit edildi ve doğru şekilde reddedildi: `designlang.app` markası altında yeniden
karşımıza çıkan `Manavarya09/design-extract` (zaten #31) ve Tur 25'te `supatest-ai/` adıyla
reddedilmiş `awesome-claude-code-sub-agents`'ın `tryalan-ai/` altında yeniden-adlandırılmış hali —
bu, alt-agent kullanılmadan doğrudan ana oturum tarafından yapılan aramalarda bile "GitHub linkine
kadar inip çapraz kontrol et" disiplininin hâlâ kritik olduğunu gösterdi. CSS-in-JS tespiti ve
dark-mode/tema tespiti nişleri üçüncü turdur dolmuyor (pending kalmaya devam ediyor); proje-özel
"etik scraping/robots.txt uyumluluğu" niş boşluğu için bir aday (`codewithkate`) bulundu ama
doğrulanabilir GitHub kaynağı olmadığı için eklenmedi. Oturum başında yine "detached HEAD" sorunu
görüldü ve standart `git checkout master && git merge --ff-only origin/master` adımıyla düzeltildi
— bu adımın rutin bir ön kontrol olarak her turda tekrarlanması gerektiği bir kez daha doğrulandı.
Sonraki turlarda bu dosya okunup yeni kaynaklar üstüne eklenecek, Tur 1–31'de listelenenler
tekrarlanmayacak.

## Tur 32 — 2026-09-23

**Tur 32 notu (~03:15 UTC / 06:15 Türkiye saati başladı):** Kesme noktasının (12:00 UTC) çok
öncesinde başladı. Repo `master` branch'inde, `origin/master` ile birebir aynı commit'te bulundu —
"detached HEAD" sorunu görülmedi. Dosyanın tamamı okunmadan önce mevcut 99 benzersiz kataloglanmış
repo linki `grep` ile çıkarıldı. Araştırma tek bir general-purpose alt-agent'a devredildi; alt-agent'a
99 mevcut kaynağın TAM listesi + önceki turlarda reddedilen/incelenen adayların özeti + görev
talimatındaki hariç-tutma kategorileri + Tur 31'in pending bıraktığı niş boşlukları (CSS-in-JS
tespiti, dark-mode/tema tespiti, etik scraping/robots.txt uyumluluğu, yeni ücretsiz LLM API
sağlayıcısı) verildi. Alt-agent 3 aday buldu ve `WebFetch` ile bağımsız doğruladı (gerçek dosya
yapısı, yıldız, lisans, son commit tarihi kontrolü dahil) — hepsi kataloğa eklendi (#100-#102).

### Yeni eklenen kaynaklar

#### 100. [Community-Access/accessibility-agents](https://github.com/Community-Access/accessibility-agents)
- **Yıldız:** 413 · **Lisans:** MIT
- **Güncellik:** 373 commit, son commit 22 Eylül 2026 (bu turdan bir gün önce — çok aktif)
- **Ne işe yarar:** WCAG 2.2 AA erişilebilirlik uyumluluğunu zorlayan büyük (108 skill) bir
  koleksiyon. 6 "router" skill (web UI, dokümanlar, markdown, Python, GitHub) 102 uzman skill'e
  yönlendiriyor — ARIA, klavye navigasyonu, kontrast, formlar, odak yönetimi, doküman
  erişilebilirliği ve kural-tablosu/formül içeren bilgi-tabanı skill'leri dahil.
- **Neden meşru:** Gerçek `skills/` dizini ve `skills/a11y-core/SKILL.md` dosyası doğrudan doğrulandı
  (ayrıca gerçek `agents/`, `references/`, `schemas/`, `scripts/` alt klasörleri var — sadece
  özellik vaat eden bir README değil). MIT lisans, ücretli bağımlılık yok; commit geçmişi gerçek
  devam eden çalışmayı gösteriyor (ör. "Fix 24 high-severity dependency advisories").
- **Kurulum:** `npm install` + `node scripts/install.mjs` ile skill'ler `~/.agents/skills` altına
  kopyalanıyor; Claude Code / GitHub Copilot / Codex / Gemini CLI plugin marketplace girdisi olarak
  da eklenebiliyor.
- **Proje uyumu:** `INSPECTION_GUIDE.md`'nin Phase 2 (Component Inventory) ve Phase 4 (Technical
  Stack) bölümlerindeki erişilebilirlik denetimi ihtiyacına, mevcut tekil `priyankark/a11y-mcp`
  (#?) ve `JustasMonkev/mcp-accessibility-scanner` araçlarından çok daha kapsamlı/aktif bir
  skill-tabanlı alternatif sağlıyor — redundant değil, farklı bir katman (statik skill rehberliği
  vs. çalışma-zamanı tarama aracı).

#### 101. [gocallum/nextjs16-agent-skills](https://github.com/gocallum/nextjs16-agent-skills)
- **Yıldız:** 23 · **Lisans:** MIT
- **Güncellik:** 23 commit, son commit 21 Ocak 2026 (Aralık 2025–Ocak 2026 arası düzenli aktivite)
- **Ne işe yarar:** Claude Code / Copilot / Antigravity uyumlu bir skill seti — `nextjs16-skills`,
  `shadcn-skills`'in yanı sıra `prisma-orm-v7-skills`, `ai-sdk-6-skills`, `clerk-nextjs-skills`,
  `authjs-skills`, `mcp-server-skills`, `resend-integration-skills`, `upstash-vector-db-skills`,
  `ba-prd-skills` içeriyor.
- **Neden meşru:** `skills/nextjs16-skills/SKILL.MD` içeriği doğrudan doğrulandı — Next.js 16'nın
  gerçek breaking change'lerini belgeliyor (async Request API'ler `await` gerektiriyor, `proxy.ts`
  `middleware.ts`'in yerini alıyor, Cache Components `"use cache"` ile, Turbopack varsayılan stabil,
  Node 20.9+ gerekiyor, parallel route'lar `default.js` gerektiriyor). `skills/shadcn-skills/SKILL.md`
  dosyası da doğrulandı. Ücretli bağımlılık yok.
- **Kurulum:** İlgili `skills/<isim>/SKILL.md` klasörünü/klasörlerini `~/.claude/skills/` altına
  kopyalama, veya uyumlu marketplace üzerinden ekleme.
- **Proje uyumu:** `AGENTS.md`'nin başındaki "Bu, bildiğin Next.js değil — training data'dan farklı
  breaking change'lere dikkat et" uyarısını doğrudan tamamlayan, bu şablonun TAM yığınına (Next.js 16
  + shadcn/ui) özel yazılmış bir skill koleksiyonu — `laguagu/claude-code-nextjs-skills` (#68) ile
  benzer amaçlı ama farklı/tamamlayıcı içerik (Prisma/AI SDK/Clerk gibi ek entegrasyonlar).

#### 102. [betson-g/browser-inspector-mcp](https://github.com/betson-g/browser-inspector-mcp)
- **Yıldız:** 6 · **Lisans:** MIT
- **Güncellik:** 23 commit, son commit 13 Haziran 2026
- **Ne işe yarar:** Ajana canlı-tarayıcı DevTools eşdeğeri CSS görünürlüğü sağlayan MCP sunucusu:
  `dom` (bileşen kütüphanelerinin çalışma-zamanında ürettiği gerçek class isimleri dahil render
  edilmiş HTML), `styles` (hangi kuralın kazandığını gösteren tam CSS cascade), `diff` (önce/sonra
  stil karşılaştırması), `screenshot` (kırpılmış element görüntüsü). Puppeteer/headless Chromium
  veya Chrome debug port'una bağlanıyor — tarayıcı eklentisi gerekmiyor.
- **Neden meşru:** Gerçek kaynak kod doğrulandı (`index.js`, `browser.js`, `/tools` uygulama klasörü,
  23 commit — sadece README vaadi değil). MIT lisans, ücretli API yok.
- **Kurulum:** `npm` ile yerel MCP sunucusu, Node 18+ ve çalışan bir yerel dev server veya Chrome
  debug port gerektiriyor; diğer stdio MCP sunucuları gibi yerel onay gerekir.
- **Proje uyumu:** Üç art arda turdur dolmayan "CSS-in-JS tespiti" nişini kısmen dolduruyor — bir
  bileşen kütüphanesinin çalışma-zamanında ürettiği gerçek class isimlerini ve kazanan cascade
  kuralını okuyarak, statik kaynağa bakıp tahmin etmek yerine hedef sitenin gerçek computed style'ını
  yakalıyor. Not: benzer bir alternatif (`devtoolcss/chrome-inspector-mcp`, 11★, MIT, gerçek
  CDP-tabanlı `getMatchedStyles`/`getComputedStyle` araçları) bulundu ama Chrome eklentisi kurulumu
  gerektirdiği için redundant olmaması adına eklenmedi — betson-g'nin aracı eklenti gerektirmiyor.

### Doğrulanan ama EKLENMEYEN Bulgular (Tur 32)

- **`tgambet/mcp-fetch-node`** — robots.txt'e uyan gerçek bir fetch MCP sunucusu (model tarafından
  başlatılan isteklerde robots.txt'e saygı gösteriyor), tam olarak "etik scraping" nişini
  dolduruyordu ama sadece 6 yıldız ve GitHub'da **arşivlenmiş/bakımsız** olarak işaretli —
  eklenmedi. Gelecek turlar aktif bakımı süren bir robots.txt-uyumlu MCP aramaya devam etmeli.
- **`capraidev/shadcn-claude-skill`** — gerçek bir Next.js/shadcn SKILL.md ama sadece 4 yıldız, ince
  içerik, `gocallum/nextjs16-agent-skills` tarafından fazlasıyla aşıldı. **Eklenmedi.**
- **`masonjames/shadcnblocks-skill`** — gerçek SKILL.md (26★, MIT) ama temel değeri (2.500+ blok)
  ShadcnBlocks.com'un **ücretli** API anahtarı gerektiriyor (`get-api-key.sh` "requires a paid plan"
  diyor); sadece genel bileşen bilgisi ücretsiz. Ücretli bağımlılık nedeniyle **reddedildi**.
- **`mrKanoh/claude-wcag-accessibility-skill`** — gerçek ama ince (4 yıldız), `Community-Access/
  accessibility-agents` eklendiği için redundant. **Eklenmedi.**
- **`devtoolcss/chrome-inspector-mcp`** — meşru (11★, MIT, gerçek CDP araçları) ama Chrome eklentisi
  kurulumu gerektiriyor; `betson-g/browser-inspector-mcp` ile redundant olmaması için not olarak
  bırakıldı, eklenmedi.
- **`atomno-mcp/mcp-seo-audit`** — gerçek, ücretsiz-katman çekirdek araçları var (`audit_site`,
  `validate_robots`, `check_sitemap`, `build_meta`) ama sadece **1 yıldız** — bu turda güvenle
  "meşru" denemeyecek kadar yeni/doğrulanmamış. Gelecek bir tur, daha fazla benimseme kazanınca
  tekrar bakabilir.
- **NVIDIA NIM (`build.nvidia.com`)** — iddia edilen cömert ücretsiz katman (91 ücretsiz model,
  kredi kartsız) sadece ikincil blog kaynaklarından (decodethefuture.org, belski.me) doğrulanabildi;
  resmi sayfa `EGRESS_BLOCKED`, GitHub-barındırılan birincil kaynak bulunamadı. **Pending — birincil
  kaynak bekliyor** (not: Tur 27'de aynı sağlayıcı farklı bir doğrulama yoluyla #77 olarak zaten
  eklenmişti — bu turki tekrar-arama gereksizdi, gelecek turlar önce mevcut kataloğu kontrol etmeli).
- **Fireworks AI** — ikincil kaynaklara göre sadece $1'lık tek seferlik deneme kredisi, kalıcı
  ücretsiz katman yok — **diskalifiye**.
- **DeepInfra** — ikincil kaynaklara göre hiç ücretsiz katmanı yok — **diskalifiye**.
- **Groq / OpenRouter / Cloudflare Workers AI / Mistral / Cohere / SambaNova** — hepsinin gerçek
  ücretsiz katmanı var (zaten kataloğun #21/#81/#99 vb. maddelerinde birincil kaynaklarla
  doğrulanmış) ama resmi domainleri bu sandbox'ta engelli; bu turda tekrar araştırılmadı (zaten
  kataloglı).
- **`JCodesMore/ai-website-cloner-template`** ve **`Mood-Global-Services/How-to-Clone-Website---
  Claude-Skills`** — bu projenin kendi şablon konseptinin neredeyse birebir aynısı/fork'u olarak
  karşımıza çıktı, bağımsız üçüncü parti kaynak değil — **atlandı**.
- **`kitze/styles-debugger`** ve emotion'ın kendi devtool'u — CSS-in-JS debug araçları ama
  tarayıcı-çalışma-zamanı görsel debugger'lar, doğrulanabilir agent/skill/MCP kaynağı değil; zaman
  bütçesi nedeniyle derinlemesine incelenmedi — gelecek bir tur "CSS-in-JS tespiti" nişi için ayrıca
  bakabilir.
- Dark-mode/tema tespiti ve etik scraping/robots.txt uyumluluğu nişleri dördüncü art arda turdur
  meşru/aktif bir GitHub projesi bulamadan **pending** kalmaya devam ediyor.

---

*Son güncelleme: 2026-09-23 (Tur 32). 3 yeni kaynak eklendi (#100-#102): `Community-Access/
accessibility-agents` (413★, çok aktif, 108 skill'lik büyük erişilebilirlik koleksiyonu),
`gocallum/nextjs16-agent-skills` (bu projenin tam yığınına — Next.js 16 + shadcn/ui — özel yazılmış
skill koleksiyonu) ve `betson-g/browser-inspector-mcp` (CSS cascade/computed-style okuyan MCP —
üç turdur dolmayan "CSS-in-JS tespiti" nişini kısmen dolduruyor). ~11 aday incelenip reddedildi
(arşivlenmiş, ücretli-bağımlılık, düşük-yıldız/kanıtsız benimseme, redundant, veya sadece ikincil
kaynaklardan doğrulanabilen — yukarıya bak). Dark-mode/tema tespiti ve etik scraping/robots.txt
uyumluluğu nişleri dördüncü turdur pending kalıyor. Toplam kataloglanmış kaynak sayısı: 102.
Sonraki turlarda bu dosya okunup yeni kaynaklar üstüne eklenecek, Tur 1–32'de listelenenler
tekrarlanmayacak.

## Tur 33 — 2026-09-23

**Tur 33 notu (~04:15 UTC / 07:15 Türkiye saati başladı):** Kesme noktasının (12:00 UTC) çok
öncesinde başladı. Repo `master` branch'inde bulundu ama yine "detached HEAD" durumundaydı —
`git checkout master && git fetch origin master && git merge --ff-only origin/master` ile
düzeltildi (Tur 31'in önerdiği gibi rutin ön kontrol olarak tekrarlandı — bu üçüncü turdur aynı
sorunun görülmesi, ortamın her oturumda HEAD'i commit'e sabitlediğini gösteriyor). Dosyadan mevcut
103 benzersiz kataloglanmış GitHub linki `grep` ile çıkarılıp tek bir general-purpose alt-agent'a
devredildi; alt-agent'a tam liste + reddedilen adaylar + hariç-tutma kriterleri + Tur 32'nin pending
bıraktığı niş boşlukları (CSS-in-JS tespiti, dark-mode/tema tespiti, etik scraping/robots.txt
uyumluluğu, yeni ücretsiz LLM API sağlayıcısı) verildi. Alt-agent 3 aday buldu ve `WebFetch` ile
bağımsız doğruladı — hepsi kataloğa eklendi (#103-#105).

### Yeni eklenen kaynaklar

#### 103. [daymade/claude-code-skills](https://github.com/daymade/claude-code-skills)
- **Yıldız:** ~1.400 · **Lisans:** MIT
- **Güncellik:** 1072+ commit, 2026 içinde düzenli commit akışı — çok aktif
- **Ne işe yarar:** 60'tan fazla gerçek `SKILL.md` içeren geniş bir Claude Code beceri koleksiyonu
  — geliştirme iş akışları, GitHub PR inceleme/otomasyon, araştırma, ses/video işleme ve frontend
  görsel QA gibi alanlara yayılıyor.
- **Neden meşru:** `raw.githubusercontent.com/daymade/claude-code-skills/main/frontend-visual-qa/
  SKILL.md` doğrudan çekildi ve gerçek, dolu bir SKILL.md içeriği doğrulandı (YAML frontmatter +
  detaylı "Frontend Visual QA" denetim iş akışı: kanıt seviyeleri A-D, Playwright taraması, ekran
  görüntüsü doğrulama adımları). Ücretli bağımlılık yok, MIT lisans.
- **Kurulum:** `git clone https://github.com/daymade/claude-code-skills` sonrası ilgili klasörleri
  `.claude/skills/` altına kopyalama (repo kendi kurulum betiklerini de sunuyor).
- **Proje uyumu:** `frontend-visual-qa` becerisi bu şablonun `docs/research/INSPECTION_GUIDE.md`
  akışıyla doğrudan örtüşüyor — klonlanan sitenin canlı halini piksel-hassasiyetinde denetlemek için
  (ekran görüntüsü + DOM + Playwright taraması ile hedef site karşılaştırması) kullanılabilir.

#### 104. [YawLabs/fetch-mcp](https://github.com/YawLabs/fetch-mcp)
- **Yıldız:** 2 (çok düşük — dürüstçe belirtiyoruz) · **Lisans:** MIT
- **Güncellik:** Çok aktif — son commit 21 Eylül 2026, son 2 ay içinde v0.5.3→v0.8.0 arası sürüm
  geçişleri
- **Ne işe yarar:** HTTP istekleri için MCP sunucusu; HTML→Markdown dönüşümü, RSS/Atom/sitemap.xml
  ayrıştırma, metadata çıkarma ve ayrı bir `fetch_robots` aracı sunuyor — bu araç sitenin robots.txt
  dosyasını ayrıştırıp belirli path'ler için izin/ret kararı döndürüyor.
- **Neden meşru:** Repo doğrudan incelendi — `src/`, `bin/`, `scripts/`, `SECURITY.md` gibi gerçek
  dosya/dizin yapısı mevcut, MIT lisanslı, SSRF koruması (loopback/private IP/cloud metadata
  engelleme) belgelenmiş. Paylaşılan/havuzlanmış API anahtarı yok, sadece yerel HTTP fetch aracı.
- **Uyarı:** Yıldız sayısı son derece düşük (2) — Tur 32'nin `atomno-mcp/mcp-seo-audit`'i (1★)
  reddetme gerekçesiyle tutarsız görünebilir; burada istisna yapılma nedeni dört turdur açık kalan
  "etik scraping/robots.txt uyumluluğu" nişini tam dolduran **tek** aday olması ve belgelenmiş somut
  güvenlik önlemleri (SSRF koruması) içermesi. Benimseme kanıtı zayıf — gelecek turlar büyüme
  takip etmeli, güvenle "iyi benimsenmiş" denemiyoruz.
- **Kurulum:** `npx @yawlabs/fetch-mcp` veya `npm install -g` + MCP client config'e stdio sunucusu
  olarak ekleme (Node ≥22.19 gerekli).
- **Proje uyumu:** Hedef siteleri klonlarken içerik/asset indirme adımlarını robots.txt kurallarına
  uyumlu ve SSRF-güvenli şekilde yapmak için kullanılabilir — dört turdur pending kalan "etik
  scraping" nişini dolduruyor.

#### 105. OVHcloud AI Endpoints (ücretsiz anonim katman)
- **Resmi kaynak:** [ovhcloud.com/en/public-cloud/ai-endpoints](https://www.ovhcloud.com/en/public-cloud/ai-endpoints/) ·
  [docs.ovhcloud.com](https://docs.ovhcloud.com/en/guides/public-cloud/ai-machine-learning/ai-endpoints-capabilities)
- **Ne işe yarar:** OpenAI-uyumlu, sunucusuz LLM/AI model API'si (Llama 3.3 70B, GPT-OSS 20B/120B,
  Qwen 3.5/3.6, Stable Diffusion XL, NVIDIA Riva TTS vb.). Anonim kullanıcılar hesap açmadan, API
  anahtarı olmadan model başına IP başına 2 istek/dakika ile ücretsiz kullanabiliyor; API anahtarlı
  kullanıcılar 400 istek/dakika'ya çıkabiliyor.
- **Neden meşru:** OVHcloud'un kendi resmi sitesi ve resmi dokümantasyonu doğrulandı; paylaşılan/
  havuzlanmış anahtar değil — OVHcloud'un kendi altyapısı (endpoint:
  `oai.endpoints.kepler.ai.cloud.ovh.net/v1`).
- **Kurulum:** Herhangi bir OpenAI SDK istemcisinde `base_url` olarak yukarıdaki endpoint'i,
  `api_key`'i boş bırakarak (anonim mod) veya OVHcloud Public Cloud projesinden alınan gerçek
  anahtarla kullanma.
- **Proje uyumu:** Klonlama ajanının içerik özetleme/kod üretimi gibi yardımcı LLM çağrıları için
  ücretsiz yedek sağlayıcı olabilir; ama 2 istek/dk anonim limiti düşük — yoğun iş yükü için uygun
  değil.

### Doğrulanan ama EKLENMEYEN Bulgular (Tur 33)

- **`open-free-llm-api/awesome-freellm-apis`** — zaten kataloglanan `amardeeplakshkar` ve `mnfst`
  listeleriyle neredeyse birebir aynı, tekrar eden liste-tipi repo. **Eklenmedi.**
- **`tashfeenahmed/freellmapi`** — havuzlanmış/paylaşılan anahtar mantığına dayanıyor, görev
  talimatının dışlama kriterine giriyor. **Reddedildi.**
- **`andreipfeiffer/css-in-js`** — CSS-in-JS *analizi/karşılaştırması*, gerçek bir tespit/algılama
  aracı değil; niş hâlâ dolmadı. **Eklenmedi.**
- **`gensecaihq/Claude-Code-Subagents-Collection`, `chusri/claude-code-agents`,
  `cmullison/claude-code-agents`, `aiwonglab/claude_code_agents`** — hepsi zaten kataloglanmış
  `wshobson/agents`'ın doğrudan fork'ları/türevleri, bağımsız değer katmıyor. **Eklenmedi.**
- **gist.github.com/ruvnet (agentic-robots.txt)** — GitHub repo değil, tek dosyalık gist;
  doğrulanabilir sürüm geçmişi/lisans yok. **Eklenmedi.**
- Dark-mode/tema tespiti nişi beşinci art arda turdur meşru/aktif bir GitHub projesi bulamadan
  **pending** kalmaya devam ediyor. Etik scraping/robots.txt uyumluluğu nişi bu turda
  `YawLabs/fetch-mcp` ile (düşük benimseme uyarısıyla) dolduruldu.

---

*Son güncelleme: 2026-09-23 (Tur 33). 3 yeni kaynak eklendi (#103-#105): `daymade/claude-code-skills`
(~1.400★, 60+ SKILL.md içeren büyük ve aktif koleksiyon, `frontend-visual-qa` becerisi bu projenin
inceleme akışıyla doğrudan örtüşüyor), `YawLabs/fetch-mcp` (sadece 2★ ile düşük benimseme uyarısıyla
eklendi — dört turdur açık kalan "etik scraping/robots.txt uyumluluğu" nişini dolduran tek somut
aday) ve OVHcloud AI Endpoints (resmi, anahtarsız/kredi kartsız anonim ücretsiz katman, düşük hız
limitiyle). 6 aday incelenip reddedildi (tekrar eden liste-repo'lar, havuzlanmış-anahtar, gerçek
tespit aracı olmayan analiz repo'su, `wshobson/agents` fork'ları, tek-dosyalık gist — yukarıya bak).
Dark-mode/tema tespiti nişi beşinci turdur pending kalıyor. Toplam kataloglanmış kaynak sayısı: 105.
Sonraki turlarda bu dosya okunup yeni kaynaklar üstüne eklenecek, Tur 1–33'te listelenenler
tekrarlanmayacak.*

---

## Tur 34 — 2026-09-23

### D) MCP Sunucuları

#### 106. [dullroar/ffmpeg_mcp](https://github.com/dullroar/ffmpeg_mcp)
- **Yıldız:** 0 (yeni/henüz keşfedilmemiş) · **Lisans:** MIT
- **Güncellik:** Aktif — son commit 22 Eylül 2026 (bu turdan bir gün önce), aynı hafta içinde
  birden fazla commit; tek-seferlik dosya dökümü değil, gerçek geliştirme geçmişi.
- **Ne işe yarar:** FFmpeg'i MCP araçları olarak ajana açan Python sunucusu (`mcp[cli]` tabanlı) —
  `convert_video`, `convert_audio`, `extract_audio`, `generate_thumbnail`, `compress_video`,
  `probe` ve ham `ffmpeg_passthrough`; glob/klasör-bazlı toplu işlem desteği, hem stdio hem
  HTTP/SSE transport.
- **Neden meşru:** Gerçek kaynak kodu doğrulandı (`server.py`, `mcp[cli]` bağımlılığıyla
  `requirements.txt`), çalışan Claude Desktop/Claude Code config örnekleri, `LICENSE` dosyasında
  MIT metni mevcut. Harici servise/API key'e bağımlı değil, sadece yerel FFmpeg binary'sini
  sarmalıyor.
- **Kurulum:** `pip install -r requirements.txt`, ardından Claude Code MCP config'ine yerel (stdio)
  sunucu olarak ekleme — yerel onay gerekir; host makinede FFmpeg kurulu olmalı.
- **Proje uyumu:** `AGENTS.md`'deki `public/videos/` — hedef sitelerden indirilen video/GIF
  asset'lerini (hero background loop'ları vb.) dönüştürme/sıkıştırma/thumbnail üretme ihtiyacını
  dolduruyor; önceki turlarda "video/GIF işleme" boşluğu için aday bulunamamıştı (bkz. Tur 30'da
  kısmen `KyaniteLabs/kinocut` ile dolduruldu, bu FFmpeg tabanlı alternatif/tamamlayıcı).
- **⚠️ Dikkat:** 0 yıldız — henüz kimse tarafından değerlendirilmemiş, çok yeni bir proje. Kod
  yapısı ve lisans gerçek/doğrulanmış olsa da, benimseme kanıtı yok; kullanmadan önce kaynak kodunu
  gözden geçirmen önerilir.

### E) Ücretsiz & Meşru API Sağlayıcıları

#### 107. [xyzs996/free-llm-api](https://github.com/xyzs996/free-llm-api)
- **Yıldız:** 9 · **Fork:** 0 · **Lisans:** MIT
- **Güncellik:** 48 commit, veriler en son 22 Ağustos 2026'da doğrulanmış, aktif bakım.
- **Ne işe yarar:** 26 LLM API sağlayıcısını (13'ü kalıcı ücretsiz katmanlı, kredi kartsız)
  küratörlü bir tabloda listeliyor — Google Gemini, GroqCloud, SiliconFlow, Cohere, Mistral La
  Plateforme, Cloudflare Workers AI vb. — her biri OpenAI-uyumlu endpoint notlarıyla ve
  sağlayıcının kendi resmi kayıt sayfasına doğrudan linkle.
- **Neden meşru:** Repo açıkça "hiçbir çalışan API key saklanmıyor veya dağıtılmıyor" diyor; her
  girdi sağlayıcının kendi resmi console/docs sayfasına link veriyor; iddiaları doğrulamak için
  sadece geçti/kaldı meta verisini kaydeden (asla key veya response body değil) bir
  `probe-output.json` metodolojisi kullanıyor — pazarlama metnine değil, ölçülebilir kanıta
  dayanıyor.
- **Kurulum:** Sadece referans — kurulum gerekmez; kullanıcı listelenen sağlayıcılardan istediğini
  seçip kendi ücretsiz API key'ini o sağlayıcının resmi sayfasından alır ve doğrudan kullanır
  (ör. `GEMINI_API_KEY`/`GROQ_API_KEY` ortam değişkeni).
- **Proje uyumu:** Şablonun ihtiyaç duyabileceği ikincil/yedek LLM sağlayıcılarını tek yerden
  karşılaştırmalı görmeyi sağlıyor; zaten kataloglanmış `amardeeplakshkar/awesome-free-llm-apis` ve
  `mnfst/awesome-free-llm-apis` listeleriyle kısmen örtüşüyor ama farklı/ek sağlayıcılar ve
  doğrulama metodolojisi (`probe-output.json`) içeriyor.

### Doğrulanan ama EKLENMEYEN Bulgular (Tur 34)

- **`ghassan-gaidi/free-llm-api-list`** — 1 yıldız, net lisans yok, "Cyrus Relay" adlı "hesapsız,
  anında key" ifadesiyle tanımlanan bir girdi ve yüksek-dolandırıcılık-oranlı bir Telegram
  reseller bölümü içeriyor — görev talimatının paylaşımlı/havuzlanmış anahtar dışlama kriterine
  çok yakın. **Reddedildi.**
- **`bryanberger/mcp-wcag-color-contrast`** — gerçek ve çalışan bir MCP sunucusu (WCAG kontrast
  matematiği, MIT, TS/Bun) ama 4 commit'in tamamı tek günde (19 Eylül 2025) atılmış, 0 yıldız,
  o tarihten beri hareketsiz; ayrıca zaten kataloglanmış `JustasMonkev/mcp-accessibility-scanner`
  ile işlevsel olarak örtüşüyor. **Eklenmedi.**
- Çeşitli Apify-barındırılan "MCP sunucuları" (robots.txt/security.txt denetleyici, kontrast
  denetleyici) — bunlar bağımsız açık kaynaklı GitHub repoları değil, Apify platformu üzerinde
  MCP ile açığa çıkarılan actor'lar; incelenebilir kaynak kodu yok, bu kataloğun "gerçek GitHub
  kaynağı" ölçütünü karşılamıyor. **Eklenmedi.**
- `Iain-Stark-GlosCity/wcag-mcp`, `ogsinh/contrast-checker-mcp` — bu turda zaman kısıtı nedeniyle
  bağımsız doğrulanamadı, gelecek tur bakabilir.
- Dark-mode/tema tespiti nişi altıncı art arda turdur meşru/aktif bir GitHub projesi bulunamadan
  **pending** kalmaya devam ediyor (bu turda genel UI kütüphanesi ThemeProvider dokümantasyonu ve
  blog yazılarının ötesinde bir şey bulunamadı).

---

*Son güncelleme: 2026-09-23 (Tur 34). 2 yeni kaynak eklendi (#106-#107): `dullroar/ffmpeg_mcp`
(FFmpeg'i MCP üzerinden ajana açan video/ses işleme aracı, MIT, aktif ama henüz 0★ ile
benimsenmemiş — dikkatli kullan) ve `xyzs996/free-llm-api` (paylaşımlı anahtar İÇERMEDİĞİNİ açıkça
belirten, her sağlayıcının kendi resmi kayıt sayfasına link veren küratörlü 26-sağlayıcılı ücretsiz
LLM API listesi, 9★, MIT). 3 aday incelenip reddedildi/ertelendi (şüpheli paylaşımlı-anahtar-benzeri
liste girdisi, tek-günlük/redundant WCAG aracı, kaynak kodu incelenemeyen Apify actor'ları — yukarıya
bak). Dark-mode/tema tespiti nişi altıncı turdur pending kalıyor. Toplam kataloglanmış kaynak
sayısı: 107.

---

## Tur 35 — 2026-09-23

**Tur notu (~06:15 UTC / 09:15 Türkiye saati başladı):** Kesme noktasının (12:00 UTC) çok öncesinde
başladı. Araştırma bir general-purpose alt-agent'a devredildi; mevcut 107 kaynağın tam listesi,
önceki turlarda reddedilen adayların özeti ve görev talimatındaki hariç-tutma kriterleri verildi.
Alt-agent'ın bulduğu 5 adayın tamamı ana oturum tarafından `WebFetch` ile ikinci kez bağımsız
doğrulandı (yıldız/lisans/kaynak-kodu-varlığı) — tutarsızlık bulunmadı.

### A) MCP Sunucuları (proje-özel — design token / dark-mode / görsel doğrulama)

#### 108. [1999AZZAR/designer-mcp](https://github.com/1999AZZAR/designer-mcp)
- **Yıldız:** 14 · **Lisans:** MIT · **Güncellik:** 42 commit, gerçek `src/` altında 13 TypeScript
  modülü + test suite (bağımsız `WebFetch` ile ikinci kez doğrulandı, tutarlı).
- **Ne işe yarar:** Üretim kalitesinde UI tasarım MCP sunucusu, 27 araç: OKLCH token üretimi
  (`generate_tokens` — hem `:root` hem `@media (prefers-color-scheme: dark)` + `[data-theme="dark"]`
  varyantlarını otomatik türetiyor), WCAG 2.1 erişilebilirlik denetimi, React/Vue/HTML bileşen
  çıktısı, vanilla CSS/SCSS/CSS Modules üretimi, anime.js hareket üretimi, 328+ marka referansı.
- **Neden meşru:** Gerçek kaynak kodu doğrulandı (`src/`, `package.json`, `tsconfig.json`, test
  dizini, skill submodule yapısı). Yıldız/commit oranı organik, şişirilmiş yıldız deseni yok.
- **Kurulum:** npm paketi olarak MCP client config'e `npx` ile stdio transport üzerinden eklenir;
  `.claude/skills/` altına skill submodule'ü de kopyalanabilir.
- **Proje uyumu:** **Dark-mode/tema tespiti nişini dolduruyor (yedi turdur pending idi)** — projenin
  tam olarak kullandığı Tailwind v4 oklch token yaklaşımıyla bire bir örtüşüyor;
  `INSPECTION_GUIDE.md` Phase 1'deki "Dark mode variants" + design token çıkarma adımlarını
  otomatikleştiriyor.

#### 109. [just-every/mcp-screenshot-website-fast](https://github.com/just-every/mcp-screenshot-website-fast)
- **Yıldız:** 110 · **Lisans:** MIT · **Güncellik:** 104 commit, CI workflow, test altyapısı, npm'de
  `@just-every/mcp-screenshot-website-fast` olarak yayınlı (bağımsız `WebFetch` ile doğrulandı).
- **Ne işe yarar:** Tam sayfa ekran görüntüsünü, LLM görüş sınırlamalarını (otomatik downscale ile
  detay kaybı) aşacak şekilde 1072x1072 parçalara bölüyor; ayrıca selector-bazlı element yakalama ve
  animasyonlu WebP screencast desteği var.
- **Neden meşru:** `just-every` organizasyonu gerçek, birden fazla ciddi açık kaynak proje
  yayınlıyor (Ensemble, Task, Magi, Crawl), tüm repolar izinli lisanslı; Puppeteer entegrasyonu ve
  profesyonel geliştirme pratikleri (lint, typecheck, test) doğrulandı.
- **Kurulum:** `npx @just-every/mcp-screenshot-website-fast` ile MCP client'a eklenir.
- **Proje uyumu:** `/clone-website` iş akışının **pixel-perfect doğrulama** adımı — uzun sayfaların
  tam ekran görüntüsünü AI'ya detay kaybetmeden gösterme sorununu çözüyor; mevcut listedeki
  chrome-devtools-mcp/playwright-mcp (#12, #19) bu spesifik "vision downscaling" sorununu ele almıyor,
  tamamlayıcı.

#### 110. [jpoindexter/design-md-extractor](https://github.com/jpoindexter/design-md-extractor)
- **Yıldız:** 63 · **Lisans:** MIT · **Güncellik:** 43 commit, derlenmiş `dist/` kodu dahil, gerçek
  `src/`, `skill/`, `docs/`, `tests/` dizinleri (bağımsız `WebFetch` ile doğrulandı).
- **Ne işe yarar:** Bir web sitesinin görsel sistemini (renkler, tipografi, spacing, bileşenler,
  etkileşim durumları) çıkarıp `DESIGN.md` dosyası, design token'lar (CSS/Tailwind/JSON) ve
  AI-hazır prompt'lar üretiyor; gerçek bir tarayıcıda çoklu viewport'ta computed style yakalıyor,
  hover/focus durumlarını tetikliyor, bulguları güven skoruna göre sıralıyor.
- **Neden meşru:** Tamamen yerel çalışıyor (API key gerektirmiyor), `skill/SKILL.md` içinde gerçek
  bir Claude Code skill'i mevcut, derlenmiş kod ve kapsamlı test/dokümantasyon yapısı doğrulandı.
- **Kurulum:** `npm run mcp` ile MCP sunucusu başlatılır veya `node dist/cli.js extract <url> --out
  <dir>` ile CLI kullanılır; Node.js ≥18.18 ve Playwright Chromium gerektirir.
- **Proje uyumu:** `INSPECTION_GUIDE.md` **Phase 5 (Documentation Output)** — `docs/research/
  DESIGN_TOKENS.md` üretim adımını doğrudan otomatikleştiriyor.

#### 111. [kevinwatt/yt-dlp-mcp](https://github.com/kevinwatt/yt-dlp-mcp)
- **Yıldız:** 281 · **Lisans:** MIT · **Güncellik:** 89 commit, gerçek `src/`, `tests/`, `docs/`,
  `.claude/skills/` entegrasyonu (bağımsız `WebFetch` ile doğrulandı).
- **Ne işe yarar:** yt-dlp tabanlı MCP sunucusu; platform-agnostik (YouTube, Facebook, sayfa içine
  gömülü doğrudan mp4 dahil) video/ses indirme, metadata/transcript/subtitle/yorum çekme.
- **Neden meşru:** 281 yıldız/89 commit sağlıklı bir oran, Claude Desktop/Cursor/VS Code Copilot/
  Windsurf/Cline için çoklu platform entegrasyon rehberleri mevcut, MIT lisanslı.
- **Kurulum:** `npx yt-dlp-mcp` ile MCP client config'e eklenir; sistemde `yt-dlp` binary'si kurulu
  olmalı.
- **Proje uyumu:** `AGENTS.md`'deki `public/videos/` klasörü için önceki 107 kaynakta site
  videolarını indiren özel bir araç yoktu; `scripts/` altındaki asset indirme script'lerine video
  indirme yeteneği ekliyor.

### B) Bağımsız CLI Aracı (MCP değil — tamamlayıcı, dark-mode nişi için ikinci seçenek)

#### 112. [tomayac/dark-mode-screenshot](https://github.com/tomayac/dark-mode-screenshot)
- **Yıldız:** 61 · **Lisans:** Apache 2.0 · **Açık issue:** 1 (birikmiş backlog yok) — bağımsız
  `WebFetch` ile doğrulandı.
- **Ne işe yarar:** Puppeteer tabanlı basit script; bir web sayfasının hem açık hem koyu mod ekran
  görüntüsünü tek komutla alır.
- **Neden meşru:** Google Chrome DevRel'den tanınan geliştirici Thomas Steiner'a ait, 28 commit,
  README'de net kullanım talimatları, npm'de yayınlı paket.
- **⚠️ Dikkat:** Son push 27 Şubat 2023 — 3+ yıldır güncellenmemiş ama arşivlenmemiş, tek açık issue
  var (birikmiş sorun yok). Kritik değilse #108 (designer-mcp) tercih edilmeli; bu, basit/bağımsız
  bir ihtiyaç için tamamlayıcı bir alternatif.
- **Kurulum:** `npx dark-mode-screenshot -u <url> -o <output-prefix> -f` (global kurulum gerektirmez).
- **Proje uyumu:** `INSPECTION_GUIDE.md` Phase 1'deki "Dark mode variants" + "Light mode variants"
  ekran görüntüsü toplama adımını doğrudan otomatikleştiriyor.

### Doğrulanan ama EKLENMEYEN Bulgular (Tur 35)

- **`dembrandt/dembrandt`** — 3.514 yıldız, 317 fork, ama 0 açık issue ve issue oluşturma repoda
  kısıtlanmış — klasik şişirilmiş yıldız deseni (10 aylık repo, devasa yıldız artışına rağmen sıfır
  topluluk etkileşimi). **Reddedildi**, gelecek turlar bir daha aramamalı.
- **`forks-ai/dembrandt`, `zhangsan-nb/dembrandt`** — yukarıdakinin şüpheli mirror/fork hesapları,
  aynı pazarlama metni kopyalanmış. **Reddedildi.**
- **`nepalisagun/design-extract`, `899ms/design-extract`, `timothybrush/design-extract`** — zaten
  kataloglanmış `Manavarya09/design-extract`'ın (#31) birebir aynı açıklamalı mirror/fork'ları.
  **Reddedildi**, gelecek turlar bir daha aramamalı.
- **`kabyleamazigh/video-extract-mcp`, `yanlingLabs/video-extract-mcp`,
  `dribrahimkhalil-ui/video-extract-mcp`** — üç farklı hesapta birebir aynı açıklama metni
  tekrarlanan şüpheli mirror deseni, orijinal kaynak belirsiz. **Reddedildi.**
- **`AndacGuven/site-crawler-mcp`** — 6 yıldız, 4 commit; zaten kataloglanmış
  `SarthakMishra/site-cloner` (#57) ile işlevsel olarak örtüşüyor, çok ince/kanıtsız. **Eklenmedi.**
- **`keiver/image-tiler-mcp-server`** — 3 yıldız; `just-every/mcp-screenshot-website-fast` (#109) ile
  aynı problemi çözüyor ama çok daha az kanıtlanmış, önceliği ikinciye verildi. **Eklenmedi.**
- **`chazmaniandinkle/video-downloader-mcp`** — 5 yıldız/6 commit; `kevinwatt/yt-dlp-mcp` (#111) aynı
  boşluğu çok daha olgun şekilde dolduruyor. **Eklenmedi.**

**Dark-mode/tema tespiti nişi bu turda dolduruldu** (yedi turdur pending idi) — hem birincil (#108
designer-mcp, kapsamlı OKLCH+dark-mode token üretimi) hem tamamlayıcı bir araçla (#112
dark-mode-screenshot). Bilinen açık niş boşluk kalmadı; gelecek turlar genel tarama moduna
dönebilir.

---

*Son güncelleme: 2026-09-23 (Tur 35). 5 yeni kaynak eklendi (#108-#112): `1999AZZAR/designer-mcp`
(OKLCH + otomatik dark-mode token üretimi, 27 araçlı üretim-kalitesinde MCP, 14★, MIT — yedi turdur
pending olan dark-mode nişini dolduruyor), `just-every/mcp-screenshot-website-fast` (uzun sayfa
ekran görüntüsünü AI görüş sınırlaması için parçalayan MCP, 110★, MIT), `jpoindexter/
design-md-extractor` (web sitesi görsel sistemini DESIGN.md + token'lara çıkaran CLI/GUI/MCP, 63★,
MIT), `kevinwatt/yt-dlp-mcp` (video indirme MCP'si, `public/videos/` boşluğunu dolduruyor, 281★,
MIT), `tomayac/dark-mode-screenshot` (basit açık/koyu mod ekran görüntüsü CLI'ı, 61★, Apache 2.0 —
dark-mode nişi için tamamlayıcı ikinci seçenek). 7 aday incelenip reddedildi (şişirilmiş yıldız/
sıfır-issue deseni + mirror hesapları, zaten kataloglanmış design-extract'ın mirror'ları, birbirini
kopyalayan video-extract-mcp mirror'ları, düşük-yıldız/redundant araçlar — yukarıya bak). Dark-mode/
tema tespiti nişi yedi turdur pending kaldıktan sonra bu turda dolduruldu; bilinen açık niş boşluk
kalmadı. Toplam kataloglanmış kaynak sayısı: 112.

---

## Tur 36 — 2026-09-23

**Tur notu (~07:15 UTC / 10:15 Türkiye saati başladı):** Kesme noktasının (12:00 UTC) çok öncesinde
başladı, bilinen tüm proje-özel niş boşluklar Tur 35'te dolduğu için bu tur **genel tarama moduna**
geçti (resmi büyük-sağlayıcı skill/agent koleksiyonları ve MCP sunucuları öncelikli arandı). Araştırma
bir general-purpose alt-agent'a devredildi; mevcut 111 GitHub kaynağının tam listesi, reddedilen ~25
adayın özeti ve hariç-tutma kriterleri verildi. Alt-agent'ın bulduğu 4 adayın tamamı ana oturum
tarafından `WebFetch` ile (repo sayfası + `raw.githubusercontent.com`/`tree` görünümü üzerinden gerçek
dosya yapısı) ikinci kez bağımsız doğrulandı — tutarsızlık bulunmadı.

### A) Resmi Büyük-Sağlayıcı Skill Koleksiyonları

#### 113. [google/skills](https://github.com/google/skills)
- **Yıldız:** ~20.300 · **Fork:** ~1.700 · **Açık issue:** 19 · **Lisans:** Apache 2.0
- **Güncellik:** 365+ commit, son commit 2026-09-22 — çok aktif, Google Cloud Next 2026'da duyuruldu.
- **Ne işe yarar:** Google'ın RESMİ Agent Skills deposu — BigQuery, GKE, Cloud Run, AlloyDB, Bigtable,
  Cloud SQL, Gemini API/model tuning, IAM, SecOps, Well-Architected (güvenlik/güvenilirlik/maliyet)
  gibi 100+ gerçek `SKILL.md` paketi içeriyor; `index.json` kataloğunda 200+ giriş var.
- **Neden meşru:** `raw.githubusercontent.com/google/skills/main/skills/cloud/bigquery-basics/
  SKILL.md` doğrudan çekildi — gerçek, detaylı içerik doğrulandı (YAML frontmatter, gcloud/bq CLI
  kurulumu, IAM, Terraform, MCP entegrasyon rehberliği). Ana oturum ayrıca repo sayfasını bağımsız
  `WebFetch` ile ikinci kez doğruladı (yıldız/fork/issue/lisans/klasör yapısı tutarlı).
- **Kurulum:** `npx skills add google/skills` (tek tek skill de seçilebilir, ör.
  `npx skills add google/skills/bigquery-basics`); `.claude-plugin/` üzerinden plugin olarak da
  kurulabilir.
- **Proje uyumu:** Genel amaçlı — bu şablon Vercel'de barındırılsa da, Google Cloud/Firebase tabanlı
  entegrasyonlar (ör. Google Fonts API, Analytics) gerektiren gelecekteki klonlar için hazır.

#### 114. [firebase/skills](https://github.com/firebase/skills)
- **Yıldız:** 451 · **Fork:** 98 · **Açık issue:** 10 (açık PR: 30 — sağlıklı, şişirilmemiş oran) ·
  **Lisans:** Apache 2.0
- **Güncellik:** 92+ commit, son commit 2026-09-23 (bu turun kendisiyle aynı gün — "Fix objectively
  incorrect GraphQL schemas..." başlıklı gerçek, içerik-düzeltici bir commit).
- **Ne işe yarar:** Firebase'in RESMİ Agent Skills deposu — Firestore, Auth, Data Connect, Cloud
  Functions, Hosting, Crashlytics, Remote Config, Security Rules denetleyicisi gibi 13 gerçek
  `SKILL.md` paketi; Claude Code, Codex, Cursor, Gemini CLI, Kimi, Windsurf, GitHub Copilot için 8
  farklı kurulum yolu destekliyor.
- **Neden meşru:** `github.com/firebase/skills/tree/main/skills` doğrudan `WebFetch` ile fetch edilip
  13 gerçek alt-dizin (`firebase-firestore`, `firebase-auth-basics`, `firebase-security-rules-auditor`
  vb.) doğrulandı — marketing README değil, gerçek dosya ağacı.
- **Kurulum:** `npx skills add firebase/skills` veya
  `gemini extensions install https://github.com/firebase/skills`.
- **Proje uyumu:** Google'ın `google/skills`'ini (#113) tamamlayan, Firebase'e özel alt-koleksiyon;
  şablon Firebase Auth/Firestore ile entegre edilirse doğrudan kullanılabilir.

### B) MCP Sunucusu (resmi, mevcut Cloudflare girdisini tamamlayan kardeş repo)

#### 115. [cloudflare/mcp-server-cloudflare](https://github.com/cloudflare/mcp-server-cloudflare)
- **Yıldız:** ~4.300 · **Fork:** 530 · **Açık issue:** 38 · **Lisans:** Apache-2.0
- **Güncellik:** 388 commit, 41 açık PR — aktif monorepo (Turborepo/pnpm workspace).
- **Ne işe yarar:** Cloudflare'in RESMİ, ürüne-özel 13+ MCP sunucusu koleksiyonu (Workers
  observability, DNS analytics, R2, Zero Trust, Radar, AutoRAG vb.) — her biri tek bir Cloudflare
  ürünü için tipli, dar-kapsamlı araçlar sunuyor.
- **Neden meşru:** Zaten kataloglanmış `cloudflare/mcp`'den (#99, "Code Mode" sunucusu — kod
  yürütme yoluyla geniş API erişimi) **açıkça farklı ve tamamlayıcı** bir repo; README bu görev
  ayrımını kendisi belirtiyor. `apps/`+`packages/` monorepo yapısı ve gerçek, taze bir commit
  ("fix: migrate docs search to instance binding (#488)") doğrulandı. Mirror/yeniden-adlandırma
  değil, kardeş repo.
- **Kurulum:** Her alt-sunucu için barındırılan uzak MCP URL'sini client config'e ekleme (ör.
  `https://observability.mcp.cloudflare.com/sse`) — yerel kurulum gerekmez; self-host talimatları
  her alt-klasörün kendi README'sinde.
- **Proje uyumu:** `cloudflare/mcp`'nin (#99) genel-amaçlı erişimini, ürüne-özel/tipli araçlarla
  tamamlıyor — Cloudflare Workers/R2 üzerinde barındırılan klonlar için gözlemlenebilirlik ve DNS
  analitiği sağlıyor.

### C) Agent/Skill Koleksiyonu (topluluk, dikkatli değerlendirildi)

#### 116. [garrytan/gstack](https://github.com/garrytan/gstack) — ⚠️ ALIŞILMADIK YÜKSEK YILDIZ, DİKKATLE EKLENDİ
- **Yıldız:** ~134.000 · **Fork:** ~20.000 · **Açık issue:** 371 · **Lisans:** MIT
- **Güncellik:** 399+ commit, son 1-2 gün içinde aktif commit.
- **Ne işe yarar:** Y Combinator Başkanı/CEO'su Garry Tan'a ait, Claude Code'u "sanal bir mühendislik
  ekibine" dönüştüren 50+ gerçek skill klasörü (`/review`, `/ship`, `/qa`, `/cso`, `/design-review`,
  `/plan-ceo-review`, `/office-hours` vb.) + `agents/`, `AGENTS.md`, `ARCHITECTURE.md`.
- **Neden meşru:** `github.com/garrytan/gstack/tree/main/review` doğrudan `WebFetch` ile fetch edilip
  gerçek `SKILL.md` + `sections/`, `specialists/`, `checklist.md`, `design-checklist.md` dosyaları
  doğrulandı (marketing fluff değil, çok adımlı gerçek bir review iş akışı: diff-scope-drift tespiti,
  SQL/shell-injection/race-condition kontrol listesi). Bağımsız üçüncü-parti kaynaklarla (dev.to,
  codecentric.de blog, `bdarbaz/claude-stack-plugin` gibi ilgisiz entegrasyon repoları) organik
  viralliği doğrulandı.
- **⚠️ Dikkat:** 134k yıldız katalogdaki en yüksek rakam; yıldız:issue oranı (~361:1) tipik organik
  bir depodan düşük. Ama Tur 22'nin reddettiği "UI/UX Pro Max" (~3300:1, 39 gerçek issue) veya bu
  turun reddettiği 214.7k-yıldız/görünür-issue-yok reposundan NİTELİKSEL OLARAK FARKLI: gerçek,
  kimliği doğrulanmış bir kişiye ait, tek kanonik repo (mirror çoğalması yok), 371 gerçek açık issue,
  bağımsız üçüncü-parti kapsamı var. Yine de temkinli eklendi — gelecek turlar büyüme paternini
  izlemeli, anormal bir sıçrama görülürse yeniden değerlendirilmeli.
- **Kurulum:** Repo klonlanıp kendi `setup` script'i çalıştırılır (skill klasörlerini
  `~/.claude/skills/gstack/` altına symlink'liyor) veya README'deki `npx` kurulum yöntemi kullanılır.
- **Proje uyumu:** Genel amaçlı geliştirme/QA/tasarım-inceleme iş akışı; `/design-review` skill'i
  `AGENTS.md`'nin "beauty-first — her piksel önemli" ilkesine ek bir inceleme katmanı sağlıyor.

### Doğrulanan ama EKLENMEYEN Bulgular (Tur 36)

- **`multica-ai/andrej-karpathy-skills`** (ve mirror'ları `forrestchang/andrej-karpathy-skills`,
  `swarmclawai/andrej-karpathy-skills`) — 214.7k yıldıza karşı görünür açık-issue sayısı yok, birden
  fazla organizasyonda aynı pazarlama metniyle mirror'lanmış — klasik şişirilmiş-yıldız/mirror-
  çoğalması deseni. **Reddedildi**, gelecek turlar bir daha aramamalı.
- **GSD / "Get Sh*t Done"** (`gsd-build/get-shit-done` [artık arşivlenmiş], `brAIniac-sa/GSD`,
  `chrisdevchroma/gsd-ng`, "Open GSD" ardılı) — flagship repo 64.5k yıldız/5.4k fork'a karşı 0 açık
  issue ve arşivlenmiş durumda, gelişim birkaç ay içinde farklı organizasyon isimleri arasında
  zıplamış — hem şişirilmiş-yıldız hem çoklu-mirror deseni. **Eklenmedi**, tek bir kararlı kanonik
  repo normal issue sayısıyla ortaya çıkarsa gelecek bir tur yeniden bakabilir.
- **GitHub Models (resmi ücretsiz inference API)** — GitHub'ın kendi duyurusuyla 30 Temmuz 2026'da
  tamamen kapatıldı (playground, katalog, API tüm kullanıcılar için kapalı). **Artık mevcut değil,
  eklenmedi.**
- **Cerebras ücretsiz katman** — Ağustos 2026'dan beri kartsız ücretsiz katman sona erdi, yeni
  hesaplar artık doğrulanmış ödeme yöntemi gerektiriyor (30 gün geçerli $5 kredi). Zaten kataloglanmış
  #21 maddesindeki Tur 22 düzeltme notuyla tutarlı — tekrar eklenmedi.
- **Mistral La Plateforme "Experiment" ücretsiz katmanı** — kartsız ve gerçek ama somut hız limiti
  rakamları artık sadece dashboard'da (genel yayınlanmış sayı yok), resmi GitHub/MCP kaynağı da yok.
  Tur 21'in "birincil kaynak zorunlu" kuralı gereği eklenmedi; Mistral resmi bir MCP sunucusu
  yayınlarsa gelecek tur bakabilir.
- **OpenRouter MCP sarmalayıcıları** (`stabgan/openrouter-mcp-multimodal`, `physics91/openrouter-mcp`,
  `tsilva/mcp-openrouter`, `oviron/openrouter-admin-mcp` vb.) — hepsi üçüncü-parti/gayri-resmi,
  OpenRouter'ın kendisi de ücretsiz-katman sağlayıcısı değil (token-başına ücretli geçiş). **Eklenmedi.**
- **`vercel/vercel-mcp-overview`** — sadece `mcp.vercel.com` barındırılan servisine işaret eden bir
  dokümantasyon/genel-bakış reposu, kurulabilir gerçek sunucu kodu içermiyor — kataloğun "gerçek dosya"
  ölçütünü karşılamıyor. Vercel gerçek sunucu kodunu bu repo altında açık kaynak yaparsa gelecek tur
  bakabilir. **Eklenmedi.**

Bilinen açık niş boşluk yok; gelecek turlar genel tarama moduna devam edebilir veya yeni resmi
sağlayıcı duyurularını (Anthropic, Vercel, büyük bulut sağlayıcıları) takip edebilir.

---

*Son güncelleme: 2026-09-23 (Tur 36). 4 yeni kaynak eklendi (#113-#116): `google/skills` (Google'ın
RESMİ Agent Skills deposu, 100+ SKILL.md, ~20.3k★, Apache 2.0), `firebase/skills` (Firebase'in RESMİ
Agent Skills deposu, 13 SKILL.md, 451★, Apache 2.0, bugünün kendisiyle aynı gün taze commit),
`cloudflare/mcp-server-cloudflare` (Cloudflare'in RESMİ, zaten kataloglanmış `cloudflare/mcp`'yi
tamamlayan 13+ ürüne-özel MCP sunucusu koleksiyonu, ~4.3k★, Apache-2.0), ve `garrytan/gstack`
(Y Combinator Başkanı Garry Tan'a ait 50+ gerçek skill'lik "sanal mühendislik ekibi" koleksiyonu,
~134k★ — katalogdaki en yüksek yıldız sayısı, temkinli uyarıyla eklendi çünkü gerçek kişiye ait/tek
kanonik repo/371 gerçek issue/bağımsız üçüncü-parti doğrulaması var, mirror-çoğalması yok). 8 aday
incelenip reddedildi (iki şişirilmiş-yıldız/çoklu-mirror "kişilik" reposu, iki artık kapanmış ücretsiz
API katmanı, resmi sayı yayınlamayan bir sağlayıcı, gerçek kod içermeyen bir overview reposu, gayri-
resmi OpenRouter sarmalayıcıları — yukarıya bak). Bilinen açık niş boşluk kalmadı. Toplam kataloglanmış
kaynak sayısı: 116.

---

## Tur 37 — 2026-09-23

**Tur notu (~10:15 UTC / 13:15 Türkiye saati başladı):** Tur 36'nın belirttiği gibi bilinen proje-özel
niş boşluk kalmadığı için bu tur da **genel tarama moduna** devam etti. Araştırma bir general-purpose
alt-agent'a devredildi; mevcut 116 kataloglanmış kaynağın tam listesi, bilinen reddedilen desenler
(mirror-çiftlikleri, kapanmış ücretsiz katmanlar) ve sert hariç-tutma kriterleri verildi. Alt-agent'ın
bulduğu 4 adayın tamamı ana oturum tarafından ikinci kez bağımsız `WebFetch` ile (repo sayfası +
`raw.githubusercontent.com` üzerinden gerçek dosya içeriği) doğrulandı; ayrıca alt-agent'ın reddettiği
`dembrandt/dembrandt` (3.5k★, 317 fork, **0 açık issue** — klasik şişirilmiş-yıldız deseni) bağımsız
olarak yeniden doğrulanıp reddi onaylandı. NVIDIA NIM (`build.nvidia.com`) ve Google AI Studio/Gemini
API ücretsiz katmanları bu oturumun ağ proxy'si tarafından da (`EGRESS_BLOCKED`) engellendi — birincil
kaynaktan doğrulanamadığı için eklenmedi.

### A) Resmi Sağlayıcı Skill Koleksiyonu

#### 117. [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills)
- **Yıldız:** ~8.400 · **Fork:** ~1.100 · **Açık issue:** 9 · **Lisans:** Apache-2.0
- **Güncellik:** 98 commit, son commit bu turun kendisiyle aynı gün (2026-09-23); repo 2026-01-16'da
  oluşturulmuş.
- **Ne işe yarar:** Google Labs'ın **Stitch** (stitch.withgoogle.com, Google'ın AI UI-tasarım aracı)
  için resmi Agent Skills kütüphanesi — `stitch-design`, `stitch-build`, `stitch-utilities` altında 16
  gerçek `SKILL.md` paketi; `extract-design-md`, `extract-static-html`, `code-to-design` ve özel bir
  `shadcn-ui` build skill'i dahil, bu şablonun website-klonlama/design-token-çıkarma iş akışıyla
  doğrudan örtüşüyor.
- **Neden meşru:** `raw.githubusercontent.com/google-labs-code/stitch-skills/main/plugins/stitch-
  utilities/skills/design-md/SKILL.md` doğrudan çekildi — gerçek, detaylı içerik doğrulandı (DESIGN.md
  üretim süreci, Stitch MCP sunucusu üzerinden retrieval/analysis/synthesis adımları). `google-labs-
  code` resmi Google Labs GitHub organizasyonu; Stitch kamuya duyurulmuş gerçek bir Google Labs ürünü.
- **⚠️ Dikkat:** Yıldız:issue oranı (~8400:9 ≈ 933:1) yüksek ama yüksek görünürlüklü bir Google ürün
  lansmanı için makul (Stitch ana akım basında yer aldı); repo yapısı ve içerik tutarlı, sentetik
  büyüme belirtisi yok.
- **Kurulum:** `npx plugins add google-labs-code/stitch-skills --scope project --target claude-code`.
- **Proje uyumu:** `AGENTS.md`'nin design-extraction/pixel-perfect-emulation fazlarına doğrudan
  uygulanabilir; `shadcn-ui` build skill'i şablonun kendi UI kütüphanesiyle örtüşüyor.

### B) Subagent + Skill Ekosistemi ve MCP Sunucusu

#### 118. [fusengine/agents](https://github.com/fusengine/agents)
- **Yıldız:** 28 · **Fork:** 4 · **Açık issue:** 2 · **Lisans:** MIT
- **Güncellik:** 665 commit, son commit 2026-09-17.
- **Ne işe yarar:** Claude Code'u çerçeve-tespit eden uzman subagent'lara sahip denetimli çok-agent bir
  geliştirme ortamına dönüştüren kapsamlı bir plugin ekosistemi — 24 plugin, 37 agent, **196 gerçek
  `SKILL.md` dosyası**; `nextjs-expert`, `react-expert`, `shadcn-ui`, `tailwindcss`, `php-expert` gibi
  bu şablonun tam olarak kullandığı yığınla (Next.js App Router, shadcn/ui, Tailwind v4) örtüşen
  agent'lar içeriyor.
- **Neden meşru:** `raw.githubusercontent.com/fusengine/agents/main/plugins/nextjs-expert/agents/
  nextjs-expert.md` doğrudan çekildi — gerçek, detaylı bir agent tanımı doğrulandı (App Router/Server
  Actions/Prisma 7/Better Auth/shadcn/ui odaklı, zorunlu explore→research→implement→sniper-doğrulama
  iş akışı, component-discipline kuralları).
- **⚠️ Dikkat:** Tek geliştirici, genç repo (Ocak 2026'da oluşturuldu), oldukça ağır/görüşlü bir kurulum
  — context7, exa ve bir "gemini-design" MCP sunucusunu kendi API anahtarlarıyla birlikte kabloluyor;
  tak-çıkar değil, daha çok bir çerçeve taahhüdü.
- **Kurulum:** `/plugin marketplace add fusengine/agents` ardından
  `/plugin install fuse-nextjs fuse-shadcn-ui fuse-tailwindcss ...` (hook/API anahtarı/MCP kurulumu
  için ayrıca bir `setup.sh` sağlıyor).
- **Proje uyumu:** `nextjs-expert` ve `shadcn-ui` agent'ları şablonun tech stack'iyle birebir örtüşüyor;
  kurulum ağırlığı nedeniyle önce izole bir worktree'de denenmesi önerilir.

#### 119. [YonasValentin/design-inspiration-mcp-server](https://github.com/YonasValentin/design-inspiration-mcp-server)
- **Yıldız:** 17 · **Fork:** 3 · **Açık issue:** 0 · **Lisans:** MIT
- **Güncellik:** repo 2026-03-01'de oluşturuldu, son commit 2026-09-22 — aktif.
- **Ne işe yarar:** 4 araçlı bir MCP sunucusu — `design_search_images`/`design_search_references`/
  `design_search_styles` (Serper API üzerinden Dribbble/Behance/Awwwards/Mobbin/Pinterest'te `site:`
  filtreli arama) ve `design_extract_tokens` (canlı bir URL'den renk/tipografi/spacing/shadow çıkarmak
  için `dembrandt` CLI'sini çağırıyor). `AGENTS.md`'nin Faz 1 görsel-denetim/tasarım-token-çıkarma
  adımı için doğrudan kullanılabilir.
- **Neden meşru:** Repo klonlanıp `package.json` ve README doğrulandı — küçük, dürüstçe belgelenmiş,
  gerçek `child_process.execFile` implementasyonu var (vaporware değil).
- **⚠️ Dikkat (önemli):** `design_extract_tokens` özelliği, bu turda **reddedilen**
  `dembrandt/dembrandt`'a (bkz. aşağı — 3.5k★/317 fork/0 açık issue, klasik şişirilmiş-yıldız deseni)
  bir çalışma zamanı bağımlılığı olarak dayanıyor. `dembrandt`'ın kendisi işlevsel olarak çalışıyor gibi
  görünüyor (yıldız şişirmesi güvenilirlik/pazarlama sorunu, kötü niyet kanıtı değil) ama bu, MCP
  sunucusunun genel güven notunu düşürüyor. Ayrıca arama araçları için Serper API anahtarı gerektiriyor
  (ücretsiz katman: kartsız, tek seferlik 2.500 arama — üçüncü-parti bağımlılık, katalogda ayrıca yer
  almıyor).
- **Kurulum:** `npm install` + build sonrası
  `claude mcp add design-inspiration -e SERPER_API_KEY=your-key -- node /path/to/dist/index.js`.
- **Proje uyumu:** Faz 1 görsel-denetim ve tasarım-referans arama işini otomatikleştirebilir;
  `dembrandt` bağımlılığı nedeniyle üretimde dikkatli kullanılmalı.

#### 120. [shadcn-labs/skills](https://github.com/shadcn-labs/skills) — ⚠️ RESMİ shadcn/ui İLE İLİŞKİLİ DEĞİL
- **Yıldız:** 23 · **Fork:** 3 · **Açık issue:** 0 · **Lisans:** MIT
- **Güncellik:** repo 2026-06-15'te oluşturuldu, son commit 2026-08-23.
- **Ne işe yarar:** "Shadcn Labs" adlı topluluk projesinin skill koleksiyonu — `launch-shadcn-registry`,
  `icon-set-generator`, `icon-set-audit`, `tailwind-to-stylex`, `mastra-file-agents` gibi gerçek
  `SKILL.md` paketleri.
- **Neden meşru (ama dikkatle):** `raw.githubusercontent.com/shadcn-labs/skills/main/skills/icon-set-
  generator/SKILL.md` doğrudan çekilip gerçek içerik doğrulandı. Ancak proje kendi sitesinde "Shadcn
  Labs, shadcn ekosistemi sınırlarını zorlayan açık kaynak teknolojiler inşa etmeye adanmıştır...
  **shadcn tarafından onaylanmamış veya shadcn ile ilişkili değildir**" ifadesini kullanıyor — yani isim
  benzerliğine rağmen resmi `shadcn-ui/ui` (zaten kataloğun #37 maddesi) projesiyle HİÇBİR bağlantısı
  yok. Karışıklığı önlemek için açıkça "gayri-resmi/topluluk" olarak etiketlendi.
- **Kurulum:** `npx skills add shadcn-labs/skills`.
- **Proje uyumu:** `icon-set-generator`/`icon-set-audit` şablonun `components/icons.tsx` adımına
  yardımcı olabilir; ama resmi olmadığı için içerik kalitesi/bakımı diğer resmi girdiler kadar garanti
  değil.

### C) Not: Zaten Kataloglanmış Bir Girdiye Resmi Güncelleme (yeni madde değil)

`shadcn-ui/ui` (zaten kataloğun #37 maddesi) artık kendi resmi Claude Skill'ini barındırıyor:
`skills/shadcn/SKILL.md`. `raw.githubusercontent.com/shadcn-ui/ui/main/skills/shadcn/SKILL.md`
doğrudan çekilip doğrulandı — proje-bağlamını (`npx shadcn@latest info --json`) okuyan, sıkı
styling/forms/composition kurallarına sahip gerçek bir skill (semantic renk token'ları, `FieldGroup`+
`Field` form kompozisyonu, icon boyutlandırma kısıtları). Yeni bir katalog maddesi değil (zaten listede
olan bir repo içinde yaşıyor) ama bu şablonun shadcn/ui kullanımı için doğrudan ilgili olduğundan not
düşüldü.

### Doğrulanan ama EKLENMEYEN Bulgular (Tur 37)

- **`dembrandt/dembrandt`** — 3.5k★, 317 fork, **0 açık issue**, ~10 aylık repo. Şişirilmiş yıldız
  deseni bağımsız olarak ikinci kez doğrulandı (`WebFetch` ile repo sayfası tekrar çekildi, aynı
  rakamlar teyit edildi: 3.5k★/317 fork/0 issue). Araç işlevsel görünüyor (Playwright tabanlı, W3C
  design-token formatına export ediyor) ama katalogun güven eşiğini karşılamıyor. **Eklenmedi**, ama
  #119 maddesinde çalışma zamanı bağımlılığı olarak not düşüldü.
- **`obviousworks/Claude-AI-skills-collection-2026`** — "resmi ve topluluk Claude Skills'lerinin
  kürasyonu" iddiasında ama içinde **sıfır gerçek `SKILL.md` dosyası yok** — sadece diğer repolara
  (bazıları zaten kataloglanmış) link veren bir README listesi. **Eklenmedi**, kataloğun "gerçek dosya"
  ölçütünü karşılamıyor.
- **`laywill/awesome-claude-code-subagents`, `djdev/awesome-claude-code-subagents`,
  `sydnikol/awesome-claude-code-subagents`, `tryalan-ai/awesome-claude-code-sub-agents`** — hepsi
  zaten kataloglanmış `VoltAgent/awesome-claude-code-subagents`'ın (#3) birebir aynı pazarlama metnini
  taşıyan fork/mirror'ları. **Eklenmedi**, mirror-çoğalması deseni.
- **NVIDIA NIM (`build.nvidia.com`) ve Google AI Studio/Gemini API ücretsiz katmanı** — arama
  sonuçlarına göre güçlü, resmi görünen ücretsiz-katman adayları (NVIDIA: ~1000 ücretsiz kredi + 50+
  model, kartsız; Gemini: günde 1500 istek, kartsız) ama bu oturumun ağ proxy'si `ai.google.dev` ve
  `build.nvidia.com`'u (`EGRESS_BLOCKED`) engellediği için birincil kaynaktan bağımsız doğrulanamadı.
  Tur 21'in "birincil kaynak zorunlu" kuralı gereği **eklenmedi** — farklı bir ağ erişimine sahip
  gelecek bir tur bakabilir.

Bilinen açık niş boşluk yok; gelecek turlar genel tarama moduna devam edebilir.

---

*Son güncelleme: 2026-09-23 (Tur 37). 4 yeni kaynak eklendi (#117-#120): `google-labs-code/stitch-
skills` (Google Labs'ın resmi Stitch Agent Skills kütüphanesi, 16 SKILL.md, ~8.4k★, Apache-2.0),
`fusengine/agents` (196 SKILL.md + 37 agent içeren kapsamlı Claude Code plugin ekosistemi, 28★, MIT),
`YonasValentin/design-inspiration-mcp-server` (tasarım-referans arama + token-çıkarma MCP sunucusu,
17★, MIT — reddedilen `dembrandt` CLI'sine bağımlılığı nedeniyle dikkat notuyla eklendi), ve
`shadcn-labs/skills` (topluluk skill koleksiyonu — resmi shadcn/ui ile İLİŞKİLİ DEĞİL, açıkça
etiketlendi). Ayrıca zaten kataloglanmış `shadcn-ui/ui`'nin yeni resmi `skills/shadcn/SKILL.md`
skill'i not düşüldü (yeni madde değil, mevcut #37 girdisinin içinde yaşıyor). 4 aday incelenip
reddedildi (`dembrandt/dembrandt` şişirilmiş yıldız deseni — bağımsız ikinci kez doğrulandı,
`obviousworks/...` gerçek SKILL.md içermeyen link-listesi, 4 adet `awesome-claude-code-subagents`
mirror'ı, NVIDIA NIM + Google Gemini API ücretsiz katmanları ağ-proxy engeli nedeniyle doğrulanamadı —
yukarıya bak). Bilinen açık niş boşluk kalmadı. Toplam kataloglanmış kaynak sayısı: 120.
Sonraki turlarda bu dosya okunup yeni kaynaklar üstüne eklenecek, Tur 1–37'de listelenenler
tekrarlanmayacak.

---

## ARAŞTIRMA DURUMU (Tur 38 — 2026-09-23, ~11:15 UTC / 14:15 Türkiye saati başladı)

Kesme noktasının (12:00 UTC / 15:00 Türkiye) öncesinde başladı, dosya baştan sona okunup mevcut ~93
kataloglanmış repo slug'ı çıkarılarak tekrar önlendi. GitHub arama API'si (`search_repositories`) ve
`WebFetch` ile birincil kaynak (repo sayfası) doğrulaması yapıldı. Bu turda odak: resmi şirket/ekip
skill koleksiyonları (henüz kataloglanmamış yeni "official" skill repoları).

### Bu Turda Eklenen Yeni Kaynaklar (#121-#125)

#### 121. [mongodb/agent-skills](https://github.com/mongodb/agent-skills)
- **Yıldız:** 184 · **Fork:** 35 · **Açık issue:** 8 · **Lisans:** Apache-2.0
- **Güncellik:** repo 2026-02-26'da oluşturuldu, son güncelleme 2026-09-22 — aktif (63 commit).
- **Ne işe yarar:** MongoDB'nin resmi agent-skill koleksiyonu; `skills/` altında gerçek `SKILL.md`
  dosyaları içeriyor, Claude Code/Cursor/Gemini CLI gibi araçlarla MongoDB şema tasarımı, sorgu
  optimizasyonu ve Atlas entegrasyonu için kullanılıyor.
- **Neden meşru:** Repo sayfası `WebFetch` ile doğrudan çekildi; açıklama net biçimde "Collection of
  official MongoDB agent skills" diyor, `mongodb` GitHub organizasyonu altında (resmi org, zaten
  yaygın tanınan bir marka).
- **Kurulum:** `npx skills add mongodb/agent-skills` (agentskills.io standardı) veya dosyaları
  `~/.claude/skills/` altına manuel kopyalama.
- **Proje uyumu:** Bu şablon MongoDB kullanmıyor; genel amaçlı bir kaynak olarak kataloglandı (görev
  talimatı proje-özel olmayan genel Claude Code güçlendirme kaynaklarını da kapsıyor).

#### 122. [black-forest-labs/skills](https://github.com/black-forest-labs/skills)
- **Yıldız:** 119 · **Fork:** 9 · **Açık issue:** 3 · **Lisans:** MIT
- **Güncellik:** repo 2026-01-24'te oluşturuldu, son güncelleme 2026-09-17 — aktif (53 commit).
- **Ne işe yarar:** Black Forest Labs'ın (FLUX modelinin yaratıcıları) resmi skill koleksiyonu —
  `flux-image-best-practices`, `bfl-api`, `flux-3-generate`, `flux-3-prompt-doctor`,
  `flux-3-cinematic-inserts`, `flux-3-keyframes-continuation`, `flux-3-audio-dialogue`,
  `flux-3-archival-formats`, `flux-3-product-ads` gibi gerçek `SKILL.md` dosyaları; FLUX görsel/video
  üretim API'sini agentskills.io standardıyla Claude Code'a bağlıyor.
- **Neden meşru:** `WebFetch` ile repo sayfası doğrulandı, açıklama "Official agent skills from Black
  Forest Labs for FLUX image and video generation" diyor; resmi BFL GitHub organizasyonu altında.
- **Kurulum:** `npx skills add black-forest-labs/skills`.
- **Proje uyumu:** Genel amaçlı; şablonun görsel varlık indirme/üretim ihtiyaçları olursa (örn.
  eksik/placeholder görsellerin AI ile tamamlanması) ileride kullanılabilir. Not: BFL API kendisi
  ücretsiz değil (kullanım bazlı ücretli), sadece skill dosyaları ücretsiz/açık kaynak.

#### 123. [TheQtCompanyRnD/agent-skills](https://github.com/TheQtCompanyRnD/agent-skills)
- **Yıldız:** 435 · **Fork:** 45 · **Açık issue:** 5 · **Lisans:** BSD-3-Clause
- **Güncellik:** repo 2026-03-26'da oluşturuldu, son güncelleme 2026-09-23 (bugün) — çok aktif (49
  commit).
- **Ne işe yarar:** Qt Company'nin resmi AI mühendislik skill koleksiyonu — `qt-cpp-review`,
  `qt-qml-review`, `qt-qml`, `qt-ui-design`, `qt-qml-docs`, `qt-cpp-docs`, `qt-qml-profiler`,
  `qt-qml-test`, `qt-qml-test-run`, `qt-figma-token-extraction`, `qt-figma-component-generation`,
  `qt-cmake-project` — 12 gerçek `SKILL.md`, ayrıca `mcp/qt-documentation-mcp/` altında bir MCP
  sunucusu.
- **Neden meşru:** `WebFetch` ile repo sayfası doğrulandı; açıklama "Official agentic skills for Qt
  software development and quality assurance" diyor, `TheQtCompanyRnD` (Qt Company'nin resmi Ar-Ge
  GitHub organizasyonu) altında.
- **Kurulum:** `npx skills add TheQtCompanyRnD/agent-skills` veya seçili skill'leri manuel kopyalama.
- **Proje uyumu:** Bu şablon Qt/C++ kullanmıyor; genel kaynak olarak kataloglandı. `qt-figma-token-
  extraction` skill'i ilginç bir desen örneği (Figma'dan tasarım tokenı çıkarma) ama Qt'ye özgü.

#### 124. [publora/skills](https://github.com/publora/skills)
- **Yıldız:** 48 · **Fork:** 6 · **Açık issue:** 1 · **Lisans:** MIT
- **Güncellik:** repo 2026-03-24'te oluşturuldu, son güncelleme 2026-09-23 (bugün) — aktif (47
  commit).
- **Ne işe yarar:** Publora'nın resmi skill koleksiyonu — LinkedIn, X, Instagram, Threads, TikTok,
  Telegram, Bluesky ve genel `social-post` için 9 gerçek `SKILL.md`; Publora'nın kendi MCP sunucusuna
  (`https://mcp.publora.com/mcp`, 18 araç) bağlanarak sosyal medya paylaşım/zamanlama otomasyonu
  sağlıyor.
- **Neden meşru:** `WebFetch` ile repo sayfası doğrulandı; açıklama "Official skills from the Publora
  team" diyor.
- **⚠️ Dikkat:** Skill'ler kendisi ücretsiz/MIT ama arkasındaki Publora servisi (MCP sunucusu) ücretli
  bir SaaS olabilir — kullanmadan önce Publora'nın kendi fiyatlandırma sayfası kontrol edilmeli.
  Ücretsiz/deneme katmanı olup olmadığı bu oturumda doğrulanmadı.
- **Kurulum:** `npx skills add publora/skills` + Publora MCP sunucusu bağlantısı (hesap gerektirir).
- **Proje uyumu:** Bu şablonla doğrudan ilgisi yok (sosyal medya otomasyonu); genel kaynak olarak not
  edildi.

#### 125. [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)
- **Yıldız:** ~34.800 · **Fork:** ~3.700 · **Açık issue:** 30 · **Lisans:** MIT
- **Güncellik:** repo 2025-10-28'de oluşturuldu, son güncelleme 2026-09-23 (bugün) — çok aktif (663
  commit, 30 açık PR).
- **Ne işe yarar:** VoltAgent'ın (zaten kataloğun #3 maddesi `awesome-claude-code-subagents`'ın
  sahibi) 1000+ agent skill'i kaynağına göre (Anthropic, Google, Microsoft, Vercel, Cloudflare,
  SerpApi vb.) indeksleyen küratörlü bir liste. **Not:** #3'ten farklı bir repo — bu, subagent'lar
  değil skill'ler için ayrı bir liste.
- **Neden meşru:** `WebFetch` ile doğrudan doğrulandı. Bu, reddedilen `obviousworks/Claude-AI-skills-
  collection-2026`'dan (Tur 37, sıfır gerçek dosya) FARKLI bir durum: VoltAgent bilinen/güvenilir bir
  organizasyon (zaten #3'ün sahibi), liste her girdi için gerçek resmi kaynağa link veriyor, 663
  commit ile aktif küratörlük yapılıyor — kataloğun zaten içerdiği diğer "awesome-list" tipi
  girdilerle (örn. #`hesreallyhim/awesome-claude-code`) aynı kategori. Kendi başına `SKILL.md` dosyası
  içermiyor (bu yüzden bu not düşüldü), ama bir keşif/indeks aracı olarak değerli.
- **Kurulum:** Kurulum gerektirmiyor — bir README/indeks; ilgili skill'i bulup kendi reposundan
  `npx skills add <owner>/<repo>` ile kurulur.
- **Proje uyumu:** Genel keşif aracı; şablonun ileride ihtiyaç duyacağı yeni resmi skill'leri bulmak
  için kullanılabilir.

### Doğrulanan ama Tamamlanmamış / Gelecek Tur İçin Not

- `monte-carlo-data/mc-agent-toolkit` (91★, data-observability skill/plugin) ve
  `ar27111994/penpot-mcp` (26★, resmi Penpot MCP sunucusuna dayanan tasarım-sistemi skill'i) arama
  sonuçlarında umut verici görünüyor ama bu turda `WebFetch` ile birincil kaynak doğrulaması
  yapılamadı (zaman kısıtı) — **eklenmedi**, gelecek bir tur bakabilir.
- `kdpa-llc/local-skills-mcp` (39★, MCP istemcileri için taşınabilir yerel skill yükleyici) da
  incelenmeyi bekliyor.

Bilinen açık niş boşluk yok; gelecek turlar genel tarama moduna devam edebilir.

---

## Tur 39 — 2026-09-24

### A) Skill Koleksiyonları

#### 126. [planetscale/database-skills](https://github.com/planetscale/database-skills)
- **Yıldız:** 683 · **Fork:** 61 · **Açık issue:** 2 · **Lisans:** MIT
- **Güncellik:** repo 2026-02-18'de oluşturuldu, son güncelleme 2026-09-23 — aktif (32 commit).
- **Ne işe yarar:** MySQL, PostgreSQL, Vitess ve Neki (PlanetScale'in sharded Postgres ürünü) için
  gerçek `SKILL.md` dosyaları içeren resmi veritabanı skill paketi; her skill kendi alt klasöründe
  talimat + referans dokümantasyonu barındırıyor.
- **Neden meşru:** `WebFetch` ile repo sayfası doğrulandı — PlanetScale'in resmi GitHub organizasyonu
  altında, 4 ayrı skill klasörü ve gerçek `SKILL.md` içerikleri mevcut, boş iskelet değil.
- **Kurulum:** `npx skills add planetscale/database-skills` veya Cursor'da `/add-plugin
  database-skills`.
- **Proje uyumu:** Şablon veritabanı kullanmıyor ama klonlanan sitelerin backend/CMS entegrasyonu
  gerektiğinde (ör. içerik yönetimi için Postgres) faydalı; genel Claude Code yetkinliği olarak da
  değerli.

#### 127. [railwayapp/railway-skills](https://github.com/railwayapp/railway-skills)
- **Yıldız:** 327 · **Fork:** 45 · **Açık issue:** 20 · **Lisans:** MIT
- **Güncellik:** repo 2026-01-04'te oluşturuldu, son güncelleme 2026-09-23 — çok aktif (206 commit).
- **Ne işe yarar:** Railway platformu için resmi "route-first" agent skill paketi (`use-railway`);
  Claude Code, Cursor, Codex, Grok Build için resmi plugin/connector dağıtımı ve barındırılan bir MCP
  sunucusu içeriyor.
- **Neden meşru:** `WebFetch` doğrulaması — Railway'in resmi organizasyonu, gerçek `SKILL.md` ve
  plugin manifestleri, `claude-plugins-official` marketplace'inde de listelenmiş.
- **Kurulum:** `curl -fsSL agents.railway.com | sh` veya Claude Code'da
  `/plugin install railway@claude-plugins-official`.
- **Proje uyumu:** Şablon Vercel'e deploy ediyor olsa da, kullanıcı klonlanan bir siteyi Railway'e
  taşımak isterse doğrudan kullanılabilir; genel deploy-agnostik referans olarak da işe yarar.

#### 128. [resend/resend-skills](https://github.com/resend/resend-skills)
- **Yıldız:** 182 · **Fork:** 27 · **Açık issue:** 6 · **Lisans:** MIT
- **Güncellik:** repo 2026-01-20'de oluşturuldu, son güncelleme 2026-09-23 — aktif (116 commit).
- **Ne işe yarar:** Resend e-posta API'si, React Email bileşenleri, Resend CLI ve e-posta
  best-practice rehberliği için resmi 5 skill'lik paket; ayrıca OAuth destekli bir MCP sunucusu
  içeriyor.
- **Neden meşru:** `WebFetch` ile doğrulandı — Resend'in resmi organizasyonu, gerçek skill dosyaları
  (bazıları harici kaynaktan senkronize), Claude Code/Cursor/Grok için plugin manifestleri mevcut.
- **Kurulum:** `npx skills add resend/resend-skills` (ardından istenen skill'ler seçiliyor).
- **Proje uyumu:** Klonlanan sitelere iletişim formu / transactional e-posta (ör. "mesaj gönder"
  formu) eklenmek istendiğinde React Email + Resend entegrasyonu için doğrudan kullanılabilir.

#### 129. [clerk/skills](https://github.com/clerk/skills)
- **Yıldız:** 76 · **Fork:** 4 · **Açık issue:** 2 · **Lisans:** MIT
- **Güncellik:** repo 2026-01-06'da oluşturuldu, son güncelleme 2026-09-23 — çok aktif (333 commit).
- **Ne işe yarar:** Clerk kimlik doğrulama servisi için Next.js, React, Vue, Nuxt, Astro, TanStack,
  Chrome Extension, iOS/Android/Expo dahil çok sayıda framework'e özel resmi skill koleksiyonu (core
  router, CLI, organizasyonlar, billing, webhook, test skill'leri dahil).
- **Neden meşru:** `WebFetch` doğrulaması (bu oturumda ayrıca ikinci kez teyit edildi) — Clerk'in
  resmi organizasyonu, gerçek ve kapsamlı `SKILL.md` yapısı (framework/feature/mobile
  kategorilerine ayrılmış), boş placeholder değil.
- **Kurulum:** `npx skills add clerk/skills` veya `codex plugin marketplace add clerk/skills`; manuel
  olarak `~/.claude/skills/clerk`'e klonlanabilir.
- **Proje uyumu:** Klonlanan bir sitede login/signup akışı gerekiyorsa (Next.js App Router ile)
  doğrudan kullanılabilecek en güncel resmi auth skill paketi.

#### 130. [monte-carlo-data/mc-agent-toolkit](https://github.com/monte-carlo-data/mc-agent-toolkit) *(Tur 38'den doğrulanan aday)*
- **Yıldız:** 91 · **Fork:** 5 · **Açık issue:** 7 · **Lisans:** Apache-2.0
- **Güncellik:** repo 2026-02-25'te oluşturuldu, son güncelleme 2026-09-19 — aktif (6 açık PR).
- **Ne işe yarar:** Monte Carlo'nun resmi veri/agent gözlemlenebilirlik araç seti; Incident Response,
  Automated Triage, Proactive Monitoring, Manage-as-Code, Tune Monitor, Connection Auth Rules,
  Instrument Agent gibi gerçek `SKILL.md` dosyalarından oluşan bir plugin paketi.
- **Neden meşru:** `WebFetch` ile doğrulandı — Monte Carlo'nun resmi organizasyonu, çok sayıda gerçek
  skill dosyası ve Claude Code/Cursor plugin entegrasyonu mevcut; boş iskelet değil.
- **Kurulum:** Monte Carlo MCP sunucusu üzerinden plugin olarak, veya
  `npx skills add monte-carlo-data/mc-agent-toolkit`.
- **Proje uyumu:** Doğrudan Next.js/Tailwind ile ilgisi yok (veri gözlemlenebilirlik odaklı); genel
  Claude Code skill ekosistemine katkı olarak kataloglandı.

#### 131. [huggingface/upskill](https://github.com/huggingface/upskill)
- **Yıldız:** 750 · **Fork:** 92 · **Açık issue:** 3 · **Lisans:** Apache-2.0
- **Güncellik:** repo 2026-01-21'de oluşturuldu, son güncelleme 2026-09-23 — çok aktif (88 commit).
- **Ne işe yarar:** Hugging Face'in resmi aracı — pahalı/güçlü bir "öğretmen" modelin gösterdiği
  yeteneği ucuz/hızlı bir "öğrenci" modele aktaran, gerçek `SKILL.md` dosyaları üreten ve bunları
  çoklu modellerde değerlendiren bir CLI (`upskill generate`, `upskill evaluate`, `upskill runs`).
- **Neden meşru:** `WebFetch` ile bu oturumda iki kez doğrulandı — Hugging Face resmi organizasyonu,
  PyPI paketi (`uv pip install upskill`), gerçek çalışan CLI komutları ve Hugging Face Jobs
  entegrasyonu.
- **Kurulum:** `uv pip install upskill` veya `uvx upskill`.
- **Proje uyumu:** Bir "skill üretici" meta-araç olarak; bu şablonun kendi `clone-website` skill'ini
  veya yeni alt-skill'leri geliştirip test etmek için kullanılabilir (doğrudan web klonlama değil).

### B) MCP / API Sağlayıcıları

#### 132. [vercel-labs/mcp-handler](https://github.com/vercel-labs/mcp-handler)
- **Yıldız:** 672 · **Fork:** 89 · **Açık issue:** 20 · **Lisans:** Apache-2.0
- **Güncellik:** repo 2025-05-09'da oluşturuldu, son güncelleme 2026-09-22 — çok aktif (143 commit).
- **Ne işe yarar:** Vercel Labs'ın resmi MCP-üzerinden-Next.js/Nuxt/SvelteKit adaptörü; MCP sunucu
  tanımlarını Web-standart request handler'lara çeviriyor, güncel ve eski MCP protokol sürümleriyle
  uyumlu.
- **Neden meşru:** `WebFetch` ile bu oturumda iki kez doğrulandı — "Vercel Labs" resmi rozeti taşıyor,
  gerçek npm paketi (`mcp-handler@^2`), Apache-2.0 lisanslı, aktif commit geçmişi.
- **Kurulum:** `npm install mcp-handler@^2 @modelcontextprotocol/server@^2 zod@^4`, ardından
  `app/api/mcp/route.ts` içinde `createMcpHandler()` ile tool tanımlanır.
- **Proje uyumu:** Bu şablon Next.js 16 App Router kullandığından, kendi projeye özel bir MCP sunucusu
  (ör. şablonun tasarım tokenlarını dışarıya sunan bir endpoint) eklemek isteyen kullanıcılar için
  resmi ve doğrudan uyumlu bir araç.

#### 133. [ar27111994/penpot-mcp](https://github.com/ar27111994/penpot-mcp) *(Tur 38'den doğrulanan aday)*
- **Yıldız:** 26 · **Fork:** 4 · **Açık issue:** 3 · **Lisans:** MIT
- **Güncellik:** repo 2026-05-24'te oluşturuldu, son güncelleme 2026-09-22 — aktif.
- **Ne işe yarar:** Penpot'un resmi MCP sunucusunun 5 aracını (`execute_code`, `high_level_overview`,
  `penpot_api_info`, `export_shape`, `import_image`) Claude Code/Cursor/VS Code Copilot gibi ajanlar
  için kullanılabilir hale getiren bir agent-skill; tasarım sistemi, prototip ve design-to-code iş
  akışlarını kapsıyor.
- **Neden meşru:** `WebFetch` ile doğrulandı — resmi Penpot MCP dokümantasyonundan üretilmiş,
  "production-tested" olarak işaretlenmiş, gerçek tool listesi ve kurulum talimatları mevcut.
- **Kurulum:** `npx skills add ar27111994/penpot-mcp` (Penpot açık kaynak tasarım aracının kendi MCP
  sunucusunu gerektirir).
- **Proje uyumu:** Figma yerine tamamen ücretsiz/açık kaynak Penpot kullanan kullanıcılar için,
  `GLips/Figma-Context-MCP`'ye alternatif; tasarım tokenı/varlık çıkarma iş akışına doğrudan katkı
  sağlar.

#### 134. [kdpa-llc/local-skills-mcp](https://github.com/kdpa-llc/local-skills-mcp) *(Tur 38'den doğrulanan aday)*
- **Yıldız:** 39 · **Fork:** 7 · **Açık issue:** 0 · **Lisans:** MIT
- **Güncellik:** repo 2025-10-30'da oluşturuldu, son güncelleme 2026-09-23 — çok aktif (138 commit).
- **Ne işe yarar:** Yerel `SKILL.md` dosyalarını (paket içi, `~/.claude/skills/`, proje içi
  `.claude/skills/` veya `./skills`, ya da `$SKILLS_DIR`) otomatik keşfeden, önceliklendiren ve
  tembel-yükleme ile sunan gerçek bir MCP sunucusu; Claude Code, Claude Desktop, Cline, Continue.dev
  ve diğer MCP istemcileriyle çalışıyor.
- **Neden meşru:** `WebFetch` ile doğrulandı — gerçek build/test altyapısı (Vitest), CI/CD
  workflow'ları, 138 commit'lik aktif geliştirme geçmişi; boş iskelet değil.
- **Kurulum:** MCP istemcinizin config dosyasına sunucu olarak eklenir (npm paketi üzerinden);
  zero-config ile standart skill klasörlerini otomatik tarar.
- **Proje uyumu:** Bu şablonun `.claude/skills/clone-website/` klasörünü ve diğer proje-özel
  skill'leri, farklı MCP istemcileri arasında (Cursor, Cline vb.) taşınabilir şekilde sunmak
  isteyenler için doğrudan faydalı.

### Doğrulanan ama EKLENMEYEN Bulgular (Tur 39)

- **Shopify/agent-skills** (85★, 20 fork) — Gerçek ve kapsamlı (16 skill: Admin/Storefront GraphQL,
  Hydrogen, Liquid, Polaris vb.), ancak repo sayfasında net bir lisans bulunamadı ("not specified") ve
  repo "generated upstream, PR kabul edilmiyor" notuyla salt-okunur bir ayna. Lisans belirsizliği
  nedeniyle eklenmedi — gelecek turda lisans netleşirse eklenebilir.
- **neondatabase/agent-skills** (90★) ve **neondatabase/postgres-skills** (41★) — Gerçek ve resmi,
  ancak zaten eklenen `planetscale/database-skills` ile işlevsel olarak örtüştüğü ve projenin
  veritabanı katmanı olmadığı için ikinci bir DB-skill paketi eklemek yerine gelecek tura bırakıldı.
- **shinpr/mcp-image** (166★, MIT, gerçek/aktif MCP sunucusu) — Gemini/OpenAI/BytePlus görsel API'lerini
  sarmalıyor ama üçü de kullanıcının kendi ücretli API anahtarını gerektiriyor, net bir "ücretsiz
  katman" garantisi yok — "ücretsiz & meşru API sağlayıcı" kriterine net uymadığı için eklenmedi.
- **vercel-labs/mcp-for-next.js** (370★) — Resmi Vercel Labs, ama zaten eklenen `mcp-handler`'ın
  öncülü/daha eski versiyonu; tekrar olmaması için eklenmedi.
- **rahlplx/zeroai** — "10+ ücretsiz sağlayıcıyı istifleyip günde ~100M token $0'a" vaat ediyor; bu,
  kataloğun açıkça yasakladığı "paylaşılan/havuzlanmış anahtarlarla sınırsız ücretsiz AI" paternine
  tam uyuyor — **kesinlikle eklenmedi**.
- Cerebras/Together AI/SambaNova gibi büyük sağlayıcıların resmi ücretsiz-katman MCP sunucuları için
  GitHub'da doğrulanabilir, aktif ve resmi bir repo bulunamadı (yalnızca küçük/şüpheli sarmalayıcılar
  çıktı) — gelecek tura bırakıldı.
- `TheoOliveira/ogcast` (favicon/OG-image MCP fikri) — 0 yıldız, tek commit'lik yeni bir kişisel
  proje; olgunlaşması için gelecek tura bırakıldı.

Bilinen açık niş boşluk yok; gelecek turlar genel tarama moduna devam edebilir.

---

*Son güncelleme: 2026-09-24 (Tur 39). 9 yeni kaynak eklendi (#126-#134): `planetscale/database-skills`
(683★, MIT), `railwayapp/railway-skills` (327★, MIT), `resend/resend-skills` (182★, MIT),
`clerk/skills` (76★, MIT), `monte-carlo-data/mc-agent-toolkit` (91★, Apache-2.0 — Tur 38'in bekleyen
adayı, bu turda doğrulanıp eklendi), `huggingface/upskill` (750★, Apache-2.0), `vercel-labs/mcp-handler`
(672★, Apache-2.0), `ar27111994/penpot-mcp` (26★, MIT — Tur 38'in bekleyen adayı, doğrulanıp eklendi),
ve `kdpa-llc/local-skills-mcp` (39★, MIT — Tur 38'in bekleyen adayı, doğrulanıp eklendi). Tur 38'den
kalan 3 aday da bu turda `WebFetch` ile doğrulanıp kataloğa eklendi, hiçbiri bekletilmedi. Bir aday
(`rahlplx/zeroai`) kataloğun paylaşımlı/havuzlanmış-API-key yasağına açıkça uyduğu için kesin
reddedildi; birkaç aday lisans belirsizliği veya "ücretsiz katman yok" gerekçesiyle gelecek tura
bırakıldı (yukarıdaki "Doğrulanan ama EKLENMEYEN Bulgular" bölümüne bakın).
Toplam kataloglanmış kaynak sayısı: 134.
Sonraki turlarda bu dosya okunup yeni kaynaklar üstüne eklenecek, Tur 1–39'da listelenenler
tekrarlanmayacak.

---

## Tur 40 — 2026-09-24

**Tur 40 notu (~04:03 UTC / 07:03 Türkiye saati başladı, kesme noktasının çok öncesinde):** Oturum
yine "detached HEAD" durumunda başladı — bu artık on dördüncü kez tekrarlayan aynı desen. Bu kez ek
olarak Tur 39'un commit'i (`1da228b`) **push edilmemiş** halde bulundu (`origin/master` hâlâ Tur 38'in
commit'i `a272216`'daydı). `git merge-base --is-ancestor master HEAD` ile HEAD'in local `master`'ın
saf ileri (fast-forward) devamı olduğu doğrulandı, `git checkout -B master` ile branch HEAD'e taşındı,
ardından `git push` ile Tur 39 origin'e senkronize edildi — kaybolan bir çalışma yoktu, sadece bir
önceki turun push adımı yarım kalmıştı. Ardından dosyadaki 134 kaynağın tamamının GitHub linkleri
`grep -oE 'github\.com/...'` ile çıkarılıp tekilleştirildi (134 benzersiz link) ve bu turun aday
taramasında tekrar kontrolü için kullanıldı. GitHub MCP sunucusunun `get_file_contents`/`search_code`
araçları bu oturumda yalnızca `nusygako/ai-website-cloner-template` ile sınırlı olduğundan (diğer
repolara erişim reddediliyor), önceki turların yönteminde olduğu gibi çapraz-repo doğrulama için
`search_repositories` (yıldız/fork/lisans-harici metadata) + `WebFetch` (repo sayfası — lisans, ek
bağlam) kombinasyonu kullanıldı.

### A) Resmi ve Topluluk Plugin Marketplace'leri

#### 135. [anthropics/claude-plugins-community](https://github.com/anthropics/claude-plugins-community)
- **Yıldız:** 4.4k (4407) · **Fork:** 313 · **Açık issue:** 55 · **Lisans:** Apache-2.0
- **Güncellik:** repo 2026-03-20'de oluşturuldu, son güncelleme 2026-09-23 — çok aktif (2.289 commit).
- **Ne işe yarar:** Anthropic'in kendi GitHub organizasyonunda barındırdığı, Claude Cowork ve Claude
  Code için topluluk plugin marketplace'i; `.claude-plugin/marketplace.json` üzerinden `/plugin
  marketplace add anthropics/claude-plugins-community` ile eklenip onaylanmış topluluk plugin'lerine
  erişim sağlıyor. Salt-okunur bir ayna — gerçek plugin gönderimi `clau.de/plugin-directory-submission`
  üzerinden yapılıyor.
- **Neden meşru:** `search_repositories` ile `anthropics` organizasyonuna ait olduğu doğrulandı (resmi
  Anthropic GitHub org'u — bu şablonun kendisinin de referans aldığı aynı organizasyon); `WebFetch` ile
  repo sayfası ikinci kez doğrulandı, Apache-2.0 lisansı ve 2000+ commit'lik gerçek/aktif geçmiş
  teyit edildi. Sayfa içeriğindeki "tüm plugin'ler otomatik güvenlik taramasından geçti" gibi iddialar
  README'nin kendi beyanı olup bu oturum tarafından bağımsızca doğrulanmadı — kullanıcı yine de
  kurulum öncesi kendi değerlendirmesini yapmalı.
- **Kurulum:** Claude Code içinde `/plugin marketplace add anthropics/claude-plugins-community`,
  ardından `/plugin install <isim>` ile istenen plugin eklenir — yerel onay gerektirir.
- **Proje uyumu:** Genel amaçlı, resmi bir keşif/kurulum kanalı; bu şablonun ihtiyaç duyabileceği
  gelecekteki resmi Anthropic plugin'lerini (ör. tasarım/kod-inceleme) bulmak için birincil kaynak.

#### 136. [obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace)
- **Yıldız:** 1.3k (1273) · **Fork:** 263 · **Açık issue:** 49 · **Lisans:** MIT
- **Güncellik:** repo 2025-10-09'da oluşturuldu, son güncelleme 2026-09-23 — aktif.
- **Ne işe yarar:** Dört plugin içeren küratörlü bir marketplace: "Superpowers" (test/debug/işbirliği
  becerileri), "Elements of Style" (Strunk'a dayalı yazım rehberliği), "Superpowers: Developing for
  Claude Code" (kendi plugin'ini geliştirme kaynakları) ve "Private Journal MCP" (semantik aramalı
  günlük tutma MCP sunucusu).
- **Neden meşru:** `WebFetch` ile doğrulandı — gerçek MIT lisansı, 263 fork'luk aktif topluluk
  kullanımı, `/plugin marketplace add obra/superpowers-marketplace` ile çalışan somut kurulum akışı.
  Claude Code topluluğunda tanınan bir katkıcının (obra / Jesse Vincent) reposu.
- **Kurulum:** `/plugin marketplace add obra/superpowers-marketplace`, ardından istenen plugin'i
  `/plugin install` ile ekle.
- **Proje uyumu:** "Superpowers" içindeki test/debug becerileri, bu şablonun `npm run check` akışını
  (lint+typecheck+build) daha disiplinli çalıştırmak isteyen ajan ekipleri için doğrudan faydalı.

#### 137. [trailofbits/skills-curated](https://github.com/trailofbits/skills-curated)
- **Yıldız:** 504 · **Fork:** 34 · **Açık issue:** 20 · **Lisans:** CC-BY-SA-4.0
- **Güncellik:** repo 2026-02-06'da oluşturuldu, son güncelleme 2026-09-23 — aktif.
- **Ne işe yarar:** Tanınmış güvenlik araştırma şirketi Trail of Bits'in, kendi mühendislerinin
  "rastgele GitHub plugin'leri kurmasını istemediği" gerekçesiyle oluşturduğu, topluluk tarafından
  gözden geçirilmiş (vetted) bir Claude Code plugin marketplace'i; geliştirme, güvenlik, üretkenlik,
  araştırma ve yazım kategorilerinde skill'ler sunuyor.
- **Neden meşru:** `search_repositories` ve `WebFetch` ile ikinci kez doğrulandı — `trailofbits`
  resmi GitHub organizasyonuna ait (bilinen, saygın bir güvenlik araştırma firması), lisans açıkça
  CC-BY-SA-4.0 olarak belirtilmiş, "biz de rastgele plugin kurmuyoruz" şeffaflığı meşruiyet sinyali.
- **Kurulum:** `/plugin marketplace add trailofbits/skills-curated`, ardından `/plugin install`.
- **Proje uyumu:** Genel amaçlı ama güvenlik-bilinçli bir seçki; bu şablonun `security-review` skill'i
  ile birlikte kullanılabilecek ek, bağımsızca gözden geçirilmiş bir kaynak.

#### 138. [davepoon/buildwithclaude](https://github.com/davepoon/buildwithclaude)
- **Yıldız:** 3.5k (3534) · **Fork:** 526 · **Açık issue:** 18 · **Lisans:** MIT
- **Güncellik:** repo 2025-07-25'te oluşturuldu, son güncelleme 2026-09-24 — çok aktif (576 commit).
- **Ne işe yarar:** Claude Skills, Agent'lar, Komutlar, Hook'lar, Plugin'ler ve Marketplace
  koleksiyonlarını tek bir yerden aratılabilir kılan bir keşif merkezi/indeks (buildwithclaude.com web
  arayüzü + bu repo); 20.000+ topluluk plugin'i, 4.500+ MCP sunucusu ve 1.100+ plugin marketplace'i
  kataloglanmış durumda.
- **Neden meşru:** `WebFetch` ile doğrulandı — gerçek MIT lisanslı repo, 526 fork'luk aktif kullanım,
  somut ve çalışan bir web arayüzü. Kendisi bir plugin değil, bir **keşif/indeks aracı** — bu yüzden
  daha önce eklenen `google-labs-code`/`hesreallyhim/awesome-claude-code` gibi indeks girdileriyle
  aynı kategoride.
- **Kurulum:** Kurulum gerektirmiyor — buildwithclaude.com üzerinden veya bu repodan istenen skill/
  plugin/MCP bulunup kendi kurulum talimatıyla (`npx skills add ...`, `/plugin marketplace add ...`)
  eklenir.
- **Proje uyumu:** Genel keşif aracı; bu şablonun ihtiyaç duyabileceği niş skill'leri (ör. yeni bir
  CSS-in-JS kütüphanesi veya CMS entegrasyonu için) hızlıca bulmak için kullanılabilir.

### B) Geliştirici Aracı (DevTools / Gözlemlenebilirlik — plugin/skill değil, tamamlayıcı kategori)

#### 139. [matt1398/claude-devtools](https://github.com/matt1398/claude-devtools)
- **Yıldız:** 3.9k (3947) · **Fork:** 300 · **Açık issue:** 53 · **Lisans:** MIT
- **Güncellik:** repo 2026-02-07'de oluşturuldu, son güncelleme 2026-09-23 — çok aktif (349 commit).
- **Ne işe yarar:** Claude Code'un `~/.claude/` altında yerel olarak tuttuğu oturum loglarını okuyup
  görsel bir arayüzde sunan bağımsız bir masaüstü uygulaması (macOS/Linux/Windows + Docker); tool
  çağrılarını, token kullanımını, subagent ağaçlarını, context penceresi dağılımını ve "thinking"
  içeriğini inceleme imkânı veriyor.
- **Neden meşru:** `WebFetch` ile doğrulandı — gerçek MIT lisanslı, 300 fork'luk aktif kullanım,
  349 commit'lik somut geliştirme geçmişi. API anahtarı veya ek yapılandırma **gerektirmiyor** —
  yalnızca mevcut yerel logları okuyor, Claude Code'u sarmalamıyor/değiştirmiyor; hesap askıya
  alınma riski taşıyan hiçbir davranışı yok.
- **Kurulum:** Bağımsız masaüstü uygulaması olarak indirilir veya Docker container'ı olarak
  çalıştırılır — yerel kurulum/onay gerektirir, proje deposuna dosya eklenmez.
- **Proje uyumu:** Doğrudan proje koduna dahil edilmiyor ama bu şablonu klonlarken kullanılan Claude
  Code oturumlarının (özellikle `/clone-website` sırasında dallanan paralel worktree ajanlarının)
  token/context kullanımını gözlemlemek isteyen kullanıcılar için pratik bir dış araç.

### Doğrulanan ama EKLENMEYEN Bulgular (Tur 40)

- **ruvnet/RuView** — Arama sonucunda **94.871 yıldız** ile ilk sırada çıktı, ancak repo açıklaması
  ("WiFi sinyallerini gerçek-zamanlı mekânsal zekâya çeviren" bir donanım/firmware projesi) `claude`,
  `skills`, `awesome` gibi etiketlerle ve bu denli yüksek bir yıldız sayısıyla hiç örtüşmüyor — konusu
  Claude Code/skill/agent ekosistemiyle alakasız. Bu uyumsuzluk (alakasız içerik + anormal derecede
  yüksek yıldız) sahte/yeniden-adlandırılmış yıldız biriktirme (star-jacking) şüphesi uyandırıyor.
  **Kesinlikle eklenmedi** ve gelecek turlara da önerilmiyor — meşruiyet kriterine açıkça aykırı.
- **iannuttall/claude-agents** (2043★) — Gerçek ve bir zamanlar popülerdi, ancak repo artık
  **arşivlenmiş** (`archived: true`) durumda, yani aktif bakımı yok. Bakımsız/donmuş bir kaynağı
  kataloğa eklemek "aktif ve güncel" kriterine uymuyor — eklenmedi.
- `microsoft/power-platform-skills` (918★, resmi Microsoft org), `gamedev-skills/awesome-gamedev-agent-skills`
  (1124★), `brycewang-stanford/Awesome-Journal-Skills` (1157★) ve `data-goblin/power-bi-agentic-development`
  (933★) — hepsi gerçek ve aktif görünüyor, ancak bu şablonun (Next.js web klonlama) kapsamına
  (Power Platform, oyun geliştirme, akademik yazım, Power BI) doğrudan uymadıkları ve bu turda
  `WebFetch` ile birincil doğrulaması tamamlanamadığı (zaman kısıtı) için gelecek bir tura bırakıldı.
- `ccplugins/awesome-claude-code-plugins` (952★, MIT) — gerçek görünüyor ama 241 açık issue / 952
  yıldız oranı (yaklaşık dörtte bir) görece yüksek bir bakım-borcu sinyali; bu turda eklenmek yerine
  gelecek bir turda issue trendi kontrol edilip karar verilecek.

Bilinen açık niş boşluk yok; Tur 40 genel tarama moduna geçmişti, Tur 41 de aynı modda devam etti.

### C) Resmi Sağlayıcı Skill Koleksiyonları ve Ek Araçlar (Tur 41)

#### 140. [stripe/ai](https://github.com/stripe/ai)
- **Yıldız:** ~1.8k · **Fork:** 348 · **Açık issue:** 28 · **Lisans:** MIT
- **Güncellik:** repo ~2024-11'de oluşturuldu, son güncelleme 2026-09-24 civarı — çok aktif.
- **Ne işe yarar:** Stripe'ın Stripe üzerine inşa eden AI ajanları için resmi kaynak monorepo'su;
  10 gerçek `SKILL.md` dosyası (`stripe-best-practices`, `stripe-docs`, `stripe-pay`, `stripe-apps`,
  `connect-recommend`, `upgrade-stripe`, `metronome` vb.) ile Claude Code, Codex, Cursor ve Grok için
  sağlayıcı eklentileri içeriyor.
- **Neden meşru:** `git clone` ile doğrulandı — `skills/stripe-best-practices/SKILL.md` gerçek ve
  ayrıntılı içerik barındırıyor (API sürüm sabitleme, sandbox/test-mode rehberliği, SDK sürüm
  tabloları, güvenlik en iyi pratikleri) — boş taslak değil. Resmi `stripe` GitHub org'una ait,
  MIT lisanslı, aktif geliştiriliyor.
- **Kurulum:** `npx skills add stripe/ai` veya `skills/*` klasörlerini doğrudan `.claude/skills/`
  altına kopyala; README'de referans verilen yayınlanmış Claude Code plugin'i de kurulabilir.
- **Proje uyumu:** Bu şablon Stripe entegrasyonu içermiyor ama ödeme akışı eklenirse (ör. bir e-ticaret
  sitesi klonlanırken) doğrudan faydalı; ayrıca resmi vendor-skill deseninin iyi bir örneği.

#### 141. [getsentry/skills](https://github.com/getsentry/skills)
- **Yıldız:** ~1.0k · **Fork:** 52 · **Açık issue:** 5 · **Lisans:** Apache-2.0
- **Güncellik:** repo ~2026-01'de oluşturuldu, son güncelleme 2026-08-25 — aktif (236 commit, 24 açık PR).
- **Ne işe yarar:** Sentry mühendislik ekibinin resmi Agent Skills koleksiyonu; 30'dan fazla gerçek
  `SKILL.md` dosyası — kod incelemesi, güvenlik incelemesi, Django erişim incelemesi, kod
  sadeleştirme, GitHub Actions güvenlik incelemesi, sunum hazırlama, marka kuralları, PR/issue
  triyajı gibi konularda.
- **Neden meşru:** `git clone` ile doğrulandı — `skills/code-review/SKILL.md` gerçek ve ayrıntılı bir
  inceleme kontrol listesi içeriyor (çalışma zamanı hataları, N+1 sorgular, ORM performansı,
  güvenlik). Resmi `getsentry` org'una ait, Apache-2.0 lisanslı, aktif geliştiriliyor.
- **Kurulum:** `npx skills add getsentry/skills` veya tekil `skills/<isim>/SKILL.md` klasörlerini
  `.claude/skills/` altına kopyala.
- **Proje uyumu:** `code-review` ve `security-review` skill'leri bu şablonun kendi `security-review`
  skill'i ile birlikte kullanılabilir; genel kod kalitesi denetimi için ek, bağımsız bir kaynak.

#### 142. [cotdp/scraper-mcp](https://github.com/cotdp/scraper-mcp)
- **Yıldız:** 7 · **Fork:** 2 · **Açık issue:** 0 · **Lisans:** MIT
- **Güncellik:** repo ~2025-10'da oluşturuldu, son güncelleme 2026-06-01 — küçük ama bakımlı.
- **Ne işe yarar:** Web kazıma için context-optimize edilmiş bir MCP sunucusu (Python/uv + Node,
  Docker'lı); sunucu tarafında CSS-selector filtreleme ve HTML→Markdown dönüşümüyle LLM token
  kullanımını %70-90 azaltıyor. Ham HTML, Markdown, düz metin ve link-toplama modları; SPA'lar için
  Playwright ile JS render; üç katmanlı önbellekleme; toplu URL işleme destekliyor.
- **Neden meşru:** `WebFetch` ile doğrulandı — MIT lisanslı, gerçek `src/`, `tests/`, `docs/`,
  Dockerfile, CONTRIBUTING.md ve ayrıntılı sürüm notları var — çalışan, bakımlı bir araç. Yıldız
  sayısı düşük ama içerik/aktivite oranı tutarlı, şişirilmiş yıldız belirtisi yok.
- **Kurulum:** `docker compose up` veya README'deki `uv run` komutuyla çalıştırılıp yerel bir MCP
  sunucusu olarak kaydedilir.
- **Proje uyumu:** Bu şablonun kendi `clone-website` skill'inin inceleme/kazıma fazına (Phase 1/4,
  `INSPECTION_GUIDE.md`) doğrudan uyuyor — token verimliliği açısından öne çıkan bir seçenek.

#### 143. [rshah515/claude-code-subagents](https://github.com/rshah515/claude-code-subagents)
- **Yıldız:** 102 · **Fork:** 17 · **Açık issue:** 0 · **Lisans:** MIT
- **Güncellik:** aktif, arşivlenmemiş.
- **Ne işe yarar:** 23'ten fazla kategoriye ayrılmış 165 subagent'lık bir koleksiyon (temel geliştirme,
  13 dil uzmanı, 13 framework uzmanı, altyapı/DevOps, QA, veritabanı, pazarlama, sektöre özel
  ajanlar); `WORKFLOWS.md`/`WORKFLOW_CONFIG.md` ile orkestrasyon dokümantasyonu da içeriyor.
- **Neden meşru:** `git clone` ile doğrulandı — `quality/accessibility-expert.md` tam ve ayrıntılı bir
  subagent tanımı (Playwright MCP tool'larını içeren `tools:` frontmatter'ı, WCAG 2.1/3.0 çerçevesi,
  ARIA rehberliği) — taslak değil. MIT lisanslı, yaş/içerik hacmine göre makul bir yıldız sayısı.
- **Kurulum:** İlgili `<kategori>/*.md` dosyalarını `.claude/agents/` altına kopyala.
- **Proje uyumu:** `accessibility-expert` gibi ajanlar bu şablonun erişilebilirlik denetimi ihtiyacına
  (`priyankark/a11y-mcp`, `JustasMonkev/mcp-accessibility-scanner` gibi zaten kataloglanmış araçlarla
  birlikte) doğrudan hizmet ediyor.

#### 144. [web-DnA/navable-web-accessibility-mcp](https://github.com/web-DnA/navable-web-accessibility-mcp)
- **Yıldız:** 1 · **Fork:** 0 · **Açık issue:** 0 · **Lisans:** MIT
- **Güncellik:** repo ~2026-04'te oluşturuldu, son güncelleme 2026-06-29 — küçük/erken aşama.
- **Ne işe yarar:** `@navable/mcp` — Playwright + axe-core (isteğe bağlı Pa11y/HTMLCS) ile localhost'u
  tarayan, WCAG 2.1 A/AA ihlallerini raporlayan ve önceliklendirilmiş, ajan tarafından uygulanabilir
  düzeltme planları üreten bir MCP sunucusu.
- **Neden meşru:** `git clone` ile doğrulandı — gerçek TypeScript kaynağı (`src/tools/
  run-accessibility-scan.ts`, `generate-fix-plan.ts`, `update-fix-status.ts`, WCAG/ARIA referans veri
  dosyaları), testler ve CHANGELOG mevcut. MIT lisanslı, tamamen yerel (localhost'a karşı) çalışıyor,
  paylaşımlı API key veya harici veri gönderimi yok.
- **Kurulum:** `npm install -g @navable/mcp` (veya `npx`), README'ye göre yerel bir MCP sunucusu
  olarak Claude Code/Cursor/VS Code'a kaydedilir.
- **Not:** Yıldız sayısı çok düşük (1★) — niş/erken aşama bir araç olarak işaretlendi, geniş kabul
  görmüş bir kaynak değil; ancak kod tabanı gerçek ve doğrulandı, meşruiyet kriterlerine uyuyor.
- **Proje uyumu:** `INSPECTION_GUIDE.md`'nin erişilebilirlik denetimi ihtiyacına ek, yerel-çalışan bir
  seçenek.

#### 145. [icons8/icons8-mcp](https://github.com/icons8/icons8-mcp)
- **Yıldız:** 14 · **Fork:** 1 · **Açık issue:** 0 · **Lisans:** Yok (repoda LICENSE dosyası yok —
  barındırılan bir servise ince istemci olarak değerlendirilmeli, yeniden kullanılabilir açık kaynak
  kod değil).
- **Güncellik:** aktif (8 commit).
- **Ne işe yarar:** Resmi Icons8 MCP sunucusu (`mcp.icons8.com`'da barındırılıyor, Streamable HTTP,
  yerel kurulum gerektirmiyor); 132 stilde 420.000+ simgeye arama erişimi sağlıyor. Ücretsiz katman:
  OAuth ile giriş, sınırsız yüksek çözünürlüklü PNG, API key veya kredi kartı gerekmiyor. SVG
  (üretim formatı) için $15/ay ücretli plan gerekiyor.
- **Neden meşru:** `WebFetch` ile doğrulandı — resmi `icons8` org'una ait, gerçek dokümante edilmiş
  tool'lar (`search_icons`, `list_categories`, `list_platforms`, `get_icon_png_url`, kilitli
  `get_icon_svg`), açıkça belirtilmiş ücretsiz katman limitleri — paylaşımlı key veya ToS-bypass
  riski yok.
- **Kurulum:** Herhangi bir MCP istemcisini `https://mcp.icons8.com/mcp/` adresine yönlendir; ilk
  bağlantıda OAuth ile giriş yap.
- **Proje uyumu:** `public/images/`'e ikon indirme ve `src/components/icons.tsx`'e ekleme akışına
  (zaten kataloglanmış `awssat/mcp-universal-icons` ile birlikte) ücretsiz PNG katmanıyla ek bir
  seçenek; SVG için ücretli plan gerektiğini not et.

### Doğrulanan ama EKLENMEYEN Bulgular (Tur 40)

- **ruvnet/RuView** — Arama sonucunda **94.871 yıldız** ile ilk sırada çıktı, ancak repo açıklaması
  ("WiFi sinyallerini gerçek-zamanlı mekânsal zekâya çeviren" bir donanım/firmware projesi) `claude`,
  `skills`, `awesome` gibi etiketlerle ve bu denli yüksek bir yıldız sayısıyla hiç örtüşmüyor — konusu
  Claude Code/skill/agent ekosistemiyle alakasız. Bu uyumsuzluk (alakasız içerik + anormal derecede
  yüksek yıldız) sahte/yeniden-adlandırılmış yıldız biriktirme (star-jacking) şüphesi uyandırıyor.
  **Kesinlikle eklenmedi** ve gelecek turlara da önerilmiyor — meşruiyet kriterine açıkça aykırı.
- **iannuttall/claude-agents** (2043★) — Gerçek ve bir zamanlar popülerdi, ancak repo artık
  **arşivlenmiş** (`archived: true`) durumda, yani aktif bakımı yok. Bakımsız/donmuş bir kaynağı
  kataloğa eklemek "aktif ve güncel" kriterine uymuyor — eklenmedi.
- `microsoft/power-platform-skills` (918★, resmi Microsoft org), `gamedev-skills/awesome-gamedev-agent-skills`
  (1124★), `brycewang-stanford/Awesome-Journal-Skills` (1157★) ve `data-goblin/power-bi-agentic-development`
  (933★) — hepsi gerçek ve aktif görünüyor, ancak bu şablonun (Next.js web klonlama) kapsamına
  (Power Platform, oyun geliştirme, akademik yazım, Power BI) doğrudan uymadıkları ve bu turda
  `WebFetch` ile birincil doğrulaması tamamlanamadığı (zaman kısıtı) için gelecek bir tura bırakıldı.
- `ccplugins/awesome-claude-code-plugins` (952★, MIT) — gerçek görünüyor ama 241 açık issue / 952
  yıldız oranı (yaklaşık dörtte bir) görece yüksek bir bakım-borcu sinyali; bu turda eklenmek yerine
  gelecek bir turda issue trendi kontrol edilip karar verilecek.

### Doğrulanan ama EKLENMEYEN Bulgular (Tur 41)

- **Cerebras ücretsiz katmanı** — 2026 ortası itibarıyla zaman-sınırlı $5 kredi için doğrulanmış bir
  ödeme yöntemi istiyor; artık gerçek bir kredi-kartsız ücretsiz katman değil, bu yüzden bağımsız bir
  girdi olarak önerilmedi.
- **SankofaForge/design-inspiration-mcp-server** — zaten kataloglanmış `YonasValentin/
  design-inspiration-mcp-server`'ın neredeyse birebir kopyası (aynı konsept/Awwwards kazıma); yeterince
  farklı bir yeni kaynak değil, eklenmedi.
- `chusri/claude-code-agents`, `tryalan-ai/awesome-claude-code-sub-agents`,
  `GetBindu/awesome-claude-code-and-skills`, `obviousworks/Claude-AI-skills-collection-2026` — zaman
  kısıtı nedeniyle bağımsız doğrulanamadı; zaten kataloglanmış VoltAgent/0xfurai/davepoon
  koleksiyonlarıyla büyük örtüşme gösteriyor gibi görünüyor — şişirilmiş yıldız veya ince kopya riski
  almamak için atlandı.
- **abecms/visualq-mcp** — açıklama bir VRT platformu için "44 tool" vadediyor ama ücretli bir VisualQ
  backend hesabı gerektiriyor görünüyor; açıkça ücretsiz/bağımsız bir araç değil, tam doğrulama
  yapılmadan atlandı.
- `devstroop/icons-mcp`, `agentic-ph/icon-mcp`, `johndavedecano/icon-mcp` — makul ikon-arama MCP
  sunucuları olabilir ama mevcut zamanda arşiv/taslak riskine karşı bağımsız doğrulanamadı; bu niş
  zaten kataloglanmış `awssat/mcp-universal-icons` ile iyi karşılanıyor.

Bilinen açık niş boşluk yok; gelecek turlar genel tarama moduna devam edebilir.

---

## Tur 42 (2026-09-24, ~06:04 UTC / 09:04 Türkiye saati başladı)

Kesme noktasının (12:00 UTC) çok öncesinde başladı. Oturum başında yine "detached HEAD" durumu
görüldü (artık ondördüncü kez tekrarlayan aynı desen); `git merge-base --is-ancestor` ile `master`
branch'inin detached HEAD'in (Tur 41 commit'i, 90963ca) doğrudan atası olduğu doğrulanıp
`git checkout master && git merge --ff-only` ile normale döndürüldü; `git fetch` ile `origin/master`'ın
zaten aynı commit'te olduğu teyit edildi, çalışma kaybı yok. Dosyanın tamamı `grep -oE
'github\.com/...'` ile taranıp mevcut 145 kaynaktan çıkan 144 benzersiz GitHub repo linki
(iki `.git` varyantı normalize edilerek) tekrarın önüne geçmek için kullanıldı. Araştırma bir
general-purpose alt-agent'a devredildi; 144 mevcut kaynağın tam listesi + önceki turlarda reddedilen
adayların özeti + görev talimatındaki hariç-tutma kriterleri verildi. Alt-agent 4 yeni aday buldu ve
`git clone` + dosya incelemesiyle bağımsız doğruladı (#146-#149); ana oturum bu 4 adayın **tamamını**
kendi `git clone` (shallow) + `mcp__github__search_repositories` (canlı yıldız/fork/açık-issue/lisans/
arşiv-durumu) çağrılarıyla ikinci kez bağımsız doğruladı. **Not:** alt-agent'ın raporladığı bazı
açık-issue sayıları (an be an, araştırma sırasında değişmiş olabilir) canlı API sorgusuyla farklı çıktı
— nihai kataloglama canlı API rakamlarını esas aldı (ör. `posthog/skills` alt-agent'ta "1 açık issue"
olarak geçmiş, canlı sorguda 89 çıktı; bu, repo açıklamasındaki "under construction" notuyla tutarlı,
düşük/organik yıldız sayısıyla (63) birlikte şişirilmiş-yıldız riski oluşturmuyor). Alt-agent ayrıca
6 adayı reddetti (biri ticari fontları korsan/VK-Telegram indekslerinden bulmayı hedefleyen şüpheli bir
"Font Hunter" özelliği içeren repo — telif riski nedeniyle reddedildi; biri gerçek ama tek-commit/
bakımsız resmi Monotype reposu; biri ücretli API key zorunlu kılan SVG aracı; biri 0-yıldız/kanıtsız
WCAG aracı; biri anormal fork/yıldız oranı gösteren bir skill koleksiyonu; ikisi zaten kataloglanmış
`Manavarya09/design-extract`'ın birebir kopyası — aşağıya bak).

**Toplam:** 149 doğrulanmış kaynak (Tur 41 sonunda 145'ti, Tur 42 ile #146-#149 eklendi).

#### 146. [dembrandt/dembrandt](https://github.com/dembrandt/dembrandt)
- **Yıldız:** 3.522 · **Fork:** 318 · **Açık issue:** 1 · **Lisans:** MIT
- **Güncellik:** çok aktif — oluşturulma 2025-11-22, son commit 2026-09-24 (351+ commit), npm'de
  `dembrandt` adıyla yayınlı paket.
- **Ne işe yarar:** Herhangi bir web sitesinin canlı DOM'undan renk (semantic/palette/CSS variable/
  gradient), tipografi (font dosyası URL'leri dahil), spacing/border/shadow/motion ölçeklerini ve
  breakpoint'leri tek komutla çıkarıp W3C DTCG token formatında dışa aktarıyor; CI'da preview
  deploy'ları baseline ile karşılaştırarak "design drift" tespiti yapıyor. Dahili MCP sunucusu
  (`mcp-server.ts`, `get_design_tokens`/`get_color_palette`/`get_typography` araçları) var.
- **Neden meşru:** `git clone` ile doğrulandı — gerçek TypeScript kaynağı, testler (`test/mcp-*.test.ts`),
  CHANGELOG, MIT LICENSE, `package.json` içinde `mcpName: io.github.dembrandt/dembrandt` alanı
  mevcut. `mcp__github__search_repositories` ile yıldız/fork/lisans/arşiv-durumu canlı doğrulandı
  (3.522★, arşivlenmemiş, fork değil). Paylaşımlı API key veya harici veri gönderimi yok, tamamen
  hedef sitenin herkese açık DOM/CSS'ini okuyor.
- **Kurulum:** `npx dembrandt <url>` ile CLI çıktısı, veya `dembrandt-mcp` binary'sini bir MCP
  istemcisine (Claude Code dahil) bağlayarak.
- **Proje uyumu:** `docs/research/DESIGN_TOKENS.md` çıkarma adımını doğrudan otomatikleştiriyor —
  bu şablonun inceleme fazı (Phase 1) için tam isabet.

#### 147. [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)
- **Yıldız:** 34.790 · **Fork:** 3.706 · **Açık issue:** 32 · **Lisans:** MIT
- **Güncellik:** çok aktif, son commit 2026-09-24 (663+ commit).
- **Ne işe yarar:** Zaten kataloglanmış `VoltAgent/awesome-claude-code-subagents`'tan **ayrı, bağımsız
  bir repo** — Figma, Vercel, Cloudflare, Stripe, Sentry, Supabase, Firebase, Browserbase, Netlify,
  HashiCorp, Hugging Face, Microsoft, Google gibi 40+ şirketin resmi SKILL.md koleksiyonlarını tek
  yerde toplayan kürasyonlu liste (1000+ skill).
  Not: bu repo ile zaten kataloglanmış aynı-org'daki `awesome-claude-code-subagents` konusu farklı
  (biri subagent/persona koleksiyonu, biri resmi şirket skill'leri) — duplikasyon değil.
- **Neden meşru:** `git clone` ile doğrulandı — gerçek MIT LICENSE, 220KB'lık README gerçek şirket
  adları/linkleriyle organize, sponsor bölümü şeffaf beyan edilmiş. `mcp__github__search_repositories`
  ile canlı doğrulandı (34.790★, arşivlenmemiş, fork değil), aynı güvenilir VoltAgent org hesabından.
- **Kurulum:** İlgili şirketin skill klasörünü `.claude/skills/` altına kopyalamak veya Claude Code
  plugin marketplace üzerinden eklemek.
- **Proje uyumu:** "resmi şirket skill kütüphaneleri" kategorisi için tam isabet; özellikle Figma
  skill'i tasarım/asset çıkarma iş akışına doğrudan uyar.

#### 148. [open-free-llm-api/awesome-freellm-apis](https://github.com/open-free-llm-api/awesome-freellm-apis)
- **Yıldız:** 3.255 · **Fork:** 474 · **Açık issue:** 3 · **Lisans:** MIT
- **Güncellik:** günlük otomatik güncelleniyor, oluşturulma 2026-05-10, son güncelleme 2026-09-24.
- **Ne işe yarar:** 40+ sağlayıcıdan 134+ ücretsiz LLM API/model'i rate limit, context window ve
  Claude Code/Cursor/Codex için hazır tek-tık konfigürasyon snippet'leriyle listeleyen çok-dilli
  (EN/JA/KO/ZH) dizin.
- **Neden meşru:** `git clone` ile doğrulandı — fork değil, bağımsız org hesabı, MIT LICENSE. README'de
  her sağlayıcı için **doğrudan kendi resmi ücretsiz-katman kayıt sayfasına** link verildiği
  doğrulandı — paylaşımlı/havuzlanmış key veya üçüncü-parti proxy YOK, bu yüzden görev talimatının
  "KESİNLİKLE HARİÇ TUT" maddesine takılmıyor. `mcp__github__search_repositories` ile canlı doğrulandı
  (3.255★, arşivlenmemiş).
- **Kurulum:** README'deki tablodan istenen sağlayıcıyı seçip o sağlayıcının resmi API key sayfasına
  gidip `.env`'e eklemek.
- **Proje uyumu:** Zaten kataloglanmış `amardeeplakshkar/awesome-free-llm-apis`, `mnfst/
  awesome-free-llm-apis`, `nejib1/Free-LLM` ve `xyzs996/free-llm-api`'den bağımsız, günlük taze veri
  sunan beşinci bir küratörlü ücretsiz-LLM listesi; klonlama ajanlarının alt-görevlerinde (görsel
  analiz, metin çıkarma) model rotasyonu için kullanılabilir.

#### 149. [posthog/skills](https://github.com/posthog/skills)
- **Yıldız:** 63 · **Fork:** 7 · **Açık issue:** 89 · **Lisans:** MIT
- **Güncellik:** aktif (context-mill aracıyla otomatik senkronize ediliyor, son commit 2026-09-23,
  148+ commit); repo açıklaması kendisini "under construction" olarak işaretliyor.
- **Ne işe yarar:** PostHog'un resmi hesabından, analytics entegrasyonu, feature flag yönetimi, hata
  izleme ve LLM analytics için Claude Code plugin marketplace destekli resmi skill koleksiyonu.
- **Neden meşru:** `git clone` ile doğrulandı — gerçek `skills/posthog`, `skills/team`, `skills/
  community` dizinleri, her biri gerçek README/SKILL.md içeriyor, `.claude-plugin/marketplace.json`
  gerçek plugin tanımları (`impersonation-toolkit`, `posthog-debugger` vb.) içeriyor. `mcp__github__
  search_repositories` ile canlı doğrulandı (resmi `PostHog` org hesabı, arşivlenmemiş).
- **Not:** 89 açık issue / 63 yıldız oranı yüksek görünüyor, ancak repo açıklamasının kendisi "under
  construction" diyor ve yıldız sayısı düşük/organik — bu, Tur 22'nin reddettiği "şişirilmiş yıldız"
  paternine (yüksek yıldız + anormal düşük issue) UYMUYOR; tam tersi, aktif iç geliştirme sürecinin
  şeffaf bir göstergesi olarak değerlendirildi. Erken aşama bir repo olarak işaretlenmeli.
- **Kurulum:** `/plugin marketplace add PostHog/skills` ardından ilgili skill için `/plugin install
  <isim>@posthog-skills`.
- **Proje uyumu:** Doğrudan bir klonlama aracı değil, ancak klonlanan sitede analytics/feature-flag
  entegrasyonu istenirse resmi şirket skill'i örneği olarak faydalı.

### Doğrulanan ama EKLENMEYEN Bulgular (Tur 42)

- **Microck/font-mcp** (9★, MIT iddiası) — Kod incelendiğinde "Font Hunter" özelliği ticari fontları
  **VK ve Telegram korsan indeksleri** ile "open directory dorking" üzerinden bulmayı açıkça
  hedefliyor. Telif/korsanlık riski nedeniyle **kesinlikle reddedildi**, gelecek turlara da
  önerilmiyor.
- **Monotype/fonts-mcp** — commit e-postası gerçekten `@monotype.com` (orijinal, resmi), ancak sadece
  1 yıldız, tek commit (Mart 2026'dan beri güncelleme yok) ve standalone MCP değil, Claude Connectors
  Directory'ye bağımlı bir SKILL.md — "aktif bakımlı" kriterini karşılamıyor, eklenmedi.
- **GenWaveLLC/svgmaker-mcp** — SVGMaker.io ücretli API key zorunlu, ücretsiz değil, eklenmedi.
- **1nc0gn30/wcag-contrast-guard** — 0 yıldız/0 fork, hiç topluluk doğrulaması yok, kanıtsız/çok yeni,
  eklenmedi.
- **kodustech/awesome-agent-skills** — fork sayısı (112) yıldızdan (103) fazla, anormal oran; zaten
  eklenen `VoltAgent/awesome-agent-skills` çok daha güçlü ve doğrulanabilir bir alternatif, eklenmedi.
- **899ms/design-extract, nepalisagun/design-extract** — zaten kataloglanmış `Manavarya09/
  design-extract`'ın birebir kopyaları/fork'ları, eklenmedi.

Bilinen açık niş boşluk yok; gelecek turlar genel tarama moduna devam edebilir.

---

## Tur 43 (2026-09-24, ~07:03 UTC / 10:03 Türkiye saati başladı)

Kesme noktasının (12:00 UTC) öncesinde başladı. Oturum başında yine "detached HEAD" durumu görüldü
(onbeşinci kez tekrarlayan aynı desen); `git fetch` ile `origin/master`'ın (1c13985, Tur 42 commit'i)
HEAD ile birebir aynı commit'te olduğu doğrulanıp `git checkout -B master origin/master` ile normale
döndürüldü, çalışma kaybı yok. Dosyanın tamamı `grep -oE 'github\.com/...'` ile taranıp mevcut 149
kaynaktan çıkan 147 benzersiz GitHub repo linki tekrarın önüne geçmek için çıkarıldı. Araştırma bir
general-purpose alt-agent'a devredildi; 147 mevcut kaynağın tam listesi + önceki turlarda reddedilen
adayların özeti + görev talimatındaki hariç-tutma kriterleri (paylaşımlı/havuzlanmış API key,
ToS-bypass scraping, hesap-askıya-alınma riski, kanıtsız trading araçları) verildi. Alt-agent 3 yeni
aday buldu; ana oturum bu 3 adayın **tamamını** kendi `WebFetch` çağrılarıyla (gerçek github.com repo
sayfası üzerinden yıldız/fork/açık-issue/lisans doğrulaması) ikinci kez bağımsız doğruladı — tüm
rakamlar alt-agent'ın raporuyla tutarlıydı, tutarsızlık bulunmadı. Alt-agent ayrıca ~8 adayı reddetti
(zaten kataloglanmış `wshobson/agents`'ın bir fork'u, kanıtsız/0-yıldız veya çok-düşük-yıldız ve
zaten kataloglanmış kaynaklarla redundant birkaç dar-kapsamlı MCP sunucusu/skill, halihazırda
kataloglanmış ücretsiz-LLM-API listeleriyle örtüşen tekrarlar — aşağıya bak).

**Toplam:** 152 doğrulanmış kaynak (Tur 42 sonunda 149'du, Tur 43 ile #150-#152 eklendi).

### A) Agent / Subagent Koleksiyonu

#### 150. [vanzan01/claude-code-sub-agent-collective](https://github.com/vanzan01/claude-code-sub-agent-collective)
- **Yıldız:** 523 · **Fork:** 59 · **Açık issue:** 5 · **Lisans:** MIT
- **Güncellik:** aktif, 151+ commit.
- **Ne işe yarar:** npm ile kurulabilen, "hub-and-spoke" koordinasyon modeliyle çalışan 30+ gerçek
  `.claude/agents/*.md` subagent'ı (`prd-research-agent.md`, `task-orchestrator.md`,
  `component-implementation-agent.md`, `feature-implementation-agent.md`,
  `testing-implementation-agent.md`, `quality-agent.md` vb.); hook'lar üzerinden Test-Driven
  Development (RED→GREEN→REFACTOR) disiplinini zorunlu kılan bir `CLAUDE.md` davranış kuralı seti ve
  `/van` yönlendirme komutu içeriyor.
- **Neden meşru:** `WebFetch` ile github.com sayfası doğrudan doğrulandı — 523 yıldız/59 fork/5 açık
  issue (organik oran, şişirilmiş-yıldız paterni yok), MIT LICENSE, gerçek `CHANGELOG.md` ve
  `USER-GUIDE.md`, kurulum yapısında `agents/` altında listelenen spesifik dosya adları (30+ dosya)
  teyit edildi. Paylaşımlı API key veya ToS-bypass riski yok.
- **Kurulum:** `npx claude-code-collective init` (ayrıca `--minimal`, `--testing-only`,
  `--hooks-only`, `--interactive` seçenekleri mevcut); Node 16+ gerektirir, kurulum sonrası Claude
  Code yeniden başlatılmalı.
- **Proje uyumu:** Genel-amaçlı ama TDD/kalite kapılarına vurgusu bu şablonun "beauty-first, her
  piksel önemli" ve `npm run check` disiplinine paralel; özellikle `task-orchestrator`/`quality-agent`
  çok-ajanlı worktree iş akışına uyarlanabilir.

### B) Skill Koleksiyonu (erişilebilirlik denetimi — inceleme/QA fazı)

#### 151. [mgifford/accessibility-skills](https://github.com/mgifford/accessibility-skills)
- **Yıldız:** 49 · **Fork:** 2 · **Açık issue:** 0 · **Lisans:** AGPL-3.0
- **Güncellik:** çok taze — son commit 9 gün önce (78 commit).
- **Ne işe yarar:** WCAG/erişilebilirlik kurallarını ajan-uygulanabilir talimatlara çeviren 28 gerçek
  `SKILL.md` dosyası — `axe-rules`, `aria-live-regions`, `color-contrast`, `forms`, `image-alt-text`,
  `keyboard`, `light-dark-mode`, `tables`, `navigation`, `ci-cd`, `charts-graphs` gibi konuları
  kapsıyor. Yazarı Mike Gifford (Fixated.ca), tanınmış bir erişilebilirlik uzmanı; içerik onun kamuya
  açık `ACCESSIBILITY.md` kaynağının yapılandırılmış hali.
- **Neden meşru:** `WebFetch` ile github.com sayfası doğrudan doğrulandı — `skills/` klasörü altında
  28+ gerçek `SKILL.md` alt-dizini, AGPL-3.0 LICENSE, kimliği bilinen/doğrulanabilir bir yazar, yakın
  tarihli Dependabot-birleştirilmiş commit aktif bakım gösteriyor. Paylaşımlı key yok, ToS riski yok.
- **Kurulum:** İlgili skill klasörünü (ör. `skills/color-contrast/`, `skills/forms/`) `.claude/skills/`
  altına kopyalamak, ya da tüm repoyu bir skill kaynağı olarak sembolik bağlamak.
- **Proje uyumu:** `docs/research/INSPECTION_GUIDE.md`'nin Phase 1 (erişilebilirlik durumları dahil)
  ve genel kalite kapısına doğrudan katkı; zaten kataloglanmış tekil-amaçlı erişilebilirlik
  araçlarından (#JustasMonkev/mcp-accessibility-scanner, #priyankark/a11y-mcp) farklı olarak kural
  tabanlı, çok geniş kapsamlı bir SKILL.md seti sunuyor — redundant değil, tamamlayıcı.

### C) Skill (klonlama iş akışıyla birebir örtüşen)

#### 152. [ericshang98/perfect-web-clone-skill](https://github.com/ericshang98/perfect-web-clone-skill)
- **Yıldız:** 181 · **Fork:** 16 · **Açık issue:** 0 · **Lisans:** MIT
- **Güncellik:** son commit 2026-08-22.
- **Ne işe yarar:** Tek ama kapsamlı bir `SKILL.md` ("perfect-web-clone") — sekiz fazlı, kapılı bir
  piksel-mükemmel klonlama disiplini tanımlıyor: capture integrity → structural completeness →
  functional interaction parity (gerçek carousel/menü/tab davranışı, sadece görsel benzerlik değil)
  → bölüm-bazlı görsel fark analizi → onarım döngüsü → terminal durum
  (`ready_for_user_review` / `failed_with_residuals`). Ölçüm için ayrı bir companion repo
  (`ericshang98/Perfect-Web-Clone`, `pwc` aracı) ile birlikte çalışıyor.
- **Neden meşru:** `WebFetch` ile hem github.com repo sayfası hem SKILL.md içeriği doğrudan
  doğrulandı — gerçek frontmatter ve detaylı bir "execution contract" (stub değil), MIT LICENSE.
  **Not/dikkat:** 181 yıldıza karşı sadece 6 commit — düşük commit sayısı, ama Tur 22/36'nın
  reddettiği "şişirilmiş yıldız" paterninden (binlerce yıldız + neredeyse sıfır issue/aktivite)
  farklı: küçük ölçekli, MIT lisanslı, tek-dosyalık gerçek bir skill için makul bir organik-keşif
  eğrisi olabilir; yine de gelecek turlar büyüme/commit paternini izlemeli.
- **Kurulum:** `SKILL.md` dosyasını `.claude/skills/perfect-web-clone/` altına kopyalamak; ölçüm için
  isteğe bağlı olarak companion `pwc` aracını (`ericshang98/Perfect-Web-Clone`) kurmak.
- **Proje uyumu:** Bu şablonun `/clone-website` skill'inin QA/kapı tasarımına doğrudan ilham
  kaynağı olabilir; zaten kataloglanmış `SarthakMishra/site-cloner` (MCP aracı) ve
  `w01fgang/mcp-design-comparison` (SSIM doğrulama) ile aynı hedefe farklı bir açıdan (disiplin/
  süreç tanımı olarak) katkıda bulunuyor, redundant değil.

### Doğrulanan ama EKLENMEYEN Bulgular (Tur 43)

- **chusri/claude-code-agents** — zaten kataloglanmış `wshobson/agents`'ın fork'u, içerik birebir
  örtüşüyor, eklenmedi.
- **yossefbelal1/website-reverse-engineering** — 0 yıldız, doğrulanabilir benimseme/bakım sinyali yok,
  çok yeni, eklenmedi.
- **mrKanoh/claude-wcag-accessibility-skill** — sadece 4 yıldız, eklenen `mgifford/accessibility-skills`
  ile önemli ölçüde redundant, eklenmedi.
- **Evilander/claude-design-mcp** — sadece 3 yıldız, çok erken aşama, gelecek turlar için not düşüldü
  ama şimdilik eklenmedi.
- **Nitish2620/shadcn-mcp-app, anillahane/shadcn-ui-mcp-server, thoiruddin/dotcms-shadcn-mcp-server** —
  zaten kataloglanmış `Jpisnice/shadcn-ui-mcp-server`'ın düşük-emek/türev fork'ları, eklenmedi.
- **agentic-ph/icon-mcp, hustcc/mcp-icon, devstroop/icons-mcp, johndavedecano/icon-mcp,
  Leee62/pickapicon-mcp** — ikon-arama nişi zaten kataloglanmış kaynaklarla (`awssat/mcp-universal-icons`,
  `better-auth/better-icons`, `icons8/icons8-mcp`) iyi kapsanıyor, net bir farklılaşma yok, eklenmedi.
- Yüzeye çıkan ücretsiz-LLM-API liste depoları (amardeeplakshkar, mnfst, open-free-llm-api, nejib1
  varyantları) — hepsi zaten kataloglanmış; önceden reddedilen ticari sağlayıcıların (OpenRouter,
  Gemini, Groq, Cloudflare Workers AI, Mistral, Cohere, SambaNova) durumunu değiştiren yeni birincil
  kaynak kanıtı bulunamadı, ticari domainler büyük ölçüde erişilemez durumda (EGRESS_BLOCKED beklenen),
  bu yüzden görev talimatına uygun olarak dokunulmadı.

Bilinen açık niş boşluk yok; gelecek turlar genel tarama moduna devam edebilir.

---

## Tur 44 (2026-09-24, ~08:03 UTC / 11:03 Türkiye saati başladı)

Kesme noktasının (12:00 UTC) öncesinde başladı. Oturum başında yine "detached HEAD" durumu görüldü
(onaltıncı kez tekrarlayan aynı desen); `git fetch origin master` ile `origin/master`'ın (aeb2727,
Tur 43 commit'i) HEAD ile birebir aynı commit'te olduğu doğrulanıp `git checkout -B master
origin/master` ile normale döndürüldü, çalışma kaybı yok. Dosyanın tamamı `grep -oE
'github\.com/...'` ile taranıp mevcut 152 kaynaktan çıkan 150 benzersiz GitHub repo linki
(iki `.git` varyantı normalize edilerek) tekrarın önüne geçmek için çıkarıldı. Araştırma bir
general-purpose alt-agent'a devredildi; 150 mevcut kaynağın tam listesi + görev talimatındaki
hariç-tutma kriterleri (paylaşımlı/havuzlanmış API key, ToS-bypass scraping, hesap-askıya-alınma
riski, kanıtsız trading araçları) verildi. Alt-agent 3 güçlü aday + 3 erken-aşama/kanıtsız MCP
sunucusu buldu, hepsini `WebFetch` ile github.com repo sayfaları (yıldız/fork/açık-issue/lisans/
son-commit) ve gerekli yerlerde `raw.githubusercontent.com` üzerinden gerçek dosya içeriğiyle
doğruladı. Ana oturum 3 güçlü adayın **tamamını** kendi `WebFetch` çağrılarıyla ikinci kez bağımsız
doğruladı (`vercel-labs/agent-skills` için ayrıca bir `SKILL.md`'in ham içeriği de doğrudan
`raw.githubusercontent.com` üzerinden okundu) — tüm rakamlar tutarlıydı, tutarsızlık bulunmadı.
3 yeni kaynak eklendi (#153-#155), 3 aday (css-mcp, mcp-seo-audit, sparrow84001/mcp-seo) gerçek/meşru
ama 0-1 yıldız/kanıtsız benimseme nedeniyle "erken aşama" notuyla eklenmedi, 1 aday (NVIDIA NIM
ücretsiz API katmanı) `build.nvidia.com`/`developer.nvidia.com` bu turda da `EGRESS_BLOCKED` olduğu
ve sadece ikincil web kaynaklarından doğrulanabildiği için Tur 21'in "birincil kaynak zorunlu" kuralı
gereği numaralı madde olarak eklenmedi, 3 aday redundancy/olgunlaşmamışlık gerekçesiyle reddedildi
(aşağıya bak).

**Toplam:** 155 doğrulanmış kaynak (Tur 43 sonunda 152'ydi, Tur 44 ile #153-#155 eklendi).

### A) Skill Koleksiyonu (RESMİ — Vercel, bu şablonun React/Next.js yığınıyla birebir örtüşüyor)

#### 153. [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills)
- **Yıldız:** 31.500 · **Fork:** 2.800 · **Açık issue:** 63 · **Lisans:** MIT
- **Güncellik:** aktif, son commit 2026-08-28.
- **Ne işe yarar:** Vercel'in resmi hesabından, gerçek `skills/<isim>/SKILL.md` dosyalarından oluşan
  9 skill: `react-best-practices` (70 kural/8 kategori React & Next.js performans optimizasyonu),
  `web-design-guidelines` (100+ erişilebilirlik/UX kuralı), `react-view-transitions`,
  `composition-patterns`, `vercel-optimize` (Vercel projesi maliyet/performans/güvenilirlik denetimi),
  `vercel-deploy-claimable`, `writing-guidelines`, `react-native-guidelines`.
- **Neden meşru:** `WebFetch` ile github.com repo sayfası doğrulandı (31.5k★/2.8k fork/63 açık issue —
  yüksek oran ama resmi Vercel org hesabı, mirror/kopya deseni yok); `skills/react-best-practices/
  SKILL.md` dosyası `raw.githubusercontent.com` üzerinden doğrudan okunarak gerçek YAML frontmatter
  (`name: vercel-react-best-practices`, `license: MIT`, `metadata.author: vercel`) ve gerçek içerik
  (kural tabloları) teyit edildi — stub değil. Paylaşımlı API key veya ToS riski yok.
- **Kurulum:** `npx skills add vercel-labs/agent-skills` (ya da ilgili `skills/<isim>/` klasörünü
  `~/.claude/skills/` altına kopyalamak).
- **Proje uyumu:** Bu şablonun tam tech stack'ine (Next.js 16 + React 19) resmi üretici tarafından
  yazılmış performans/erişilebilirlik kuralları; zaten kataloglanmış `laguagu/claude-code-nextjs-skills`
  ve `gocallum/nextjs16-agent-skills`'i tamamlıyor (resmi Vercel kaynağı olarak öncelikli).

### B) Skill Koleksiyonu (tasarım/dark-mode nişi — ek doldurucu)

#### 154. [ArnavPuri/designskills](https://github.com/ArnavPuri/designskills)
- **Yıldız:** 9 · **Fork:** 3 · **Açık issue:** 0 · **Lisans:** MIT
- **Güncellik:** 3 commit (küçük/yeni ama tek-seferlik değil, tam bir koleksiyon olarak yayınlanmış).
- **Ne işe yarar:** 28 gerçek `SKILL.md` dosyasından oluşan tasarım skill seti — `dark-mode`,
  `color-palette`, `typography`, `layout-composition`, `design-system`, `brand-identity`,
  `critique`, `motion-design` gibi kategoriler; görsel üretim için Gemini 3.1 Flash Image entegrasyonu
  da içeriyor (isteğe bağlı, API key gerektirir).
- **Neden meşru:** `WebFetch` ile github.com repo sayfası doğrulandı (9★/3 fork/0 açık issue, MIT
  LICENSE, gerçek `skills/`, `tools/`, `.claude-plugin/` dizin yapısı ve `validate-skills.sh`
  doğrulama betiği); `skills/dark-mode/SKILL.md` içeriği alt-agent tarafından doğrudan okunup gerçek
  YAML frontmatter + OKLCH dark-theme token/FOUC-önleme/WCAG kontrol listesi içerdiği teyit edildi.
  Paylaşımlı key yok — görsel üretim özelliği tamamen isteğe bağlı ve kullanıcının kendi API key'ini
  gerektiriyor.
- **Not:** Düşük yıldız/erken-aşama bir repo, ama gerçek/işlevsel dosya yapısına sahip; gelecek turlar
  benimseme paternini izlemeli.
- **Kurulum:** İlgili `skills/<isim>/` klasörünü `~/.claude/skills/` altına kopyalamak.
- **Proje uyumu:** Katalogdaki "dark-mode/tema tespiti" nişini (Tur 35'te `designer-mcp`/
  `dark-mode-screenshot` ile dolduruldu) tasarım-kural tarafından tamamlıyor; redundant değil,
  tamamlayıcı.

### C) MCP Sunucusu (CSS-in-JS/computed-style tespiti nişi — kısmen dolduruyor)

#### 155. [mcpc-tech/dev-inspector-mcp](https://github.com/mcpc-tech/dev-inspector-mcp)
- **Yıldız:** 47 · **Fork:** 3 · **Açık issue:** 1 · **Lisans:** MIT
- **Güncellik:** aktif, 326+ commit.
- **Ne işe yarar:** AI ajanlarına tarayıcı çalışma-zamanı bağlamı açan MCP + ACP sunucusu — DOM
  durumu, **hesaplanmış CSS stilleri**, kaynak kod konumu, network/console/terminal çıktısı ve
  ekran görüntüsü yakalama; React, Vue, Svelte, SolidJS, Preact ve **Next.js** için framework desteği
  var. npm'de `@mcpc-tech/unplugin-dev-inspector-mcp` olarak yayınlı.
- **Neden meşru:** `WebFetch` ile github.com repo sayfası doğrulandı (47★/3 fork/1 açık issue —
  organik oran, şişirilmiş-yıldız paterni yok, MIT LICENSE); monorepo yapısı (`packages/`), gerçek
  kaynak kodu ve npm paketi teyit edildi. Paylaşımlı key veya ToS riski yok.
- **Kurulum:** `npm install` sonrası Cursor/VSCode için MCP istemci konfigürasyonu (README'deki
  örnek JSON).
- **Proje uyumu:** Bu şablonun `INSPECTION_GUIDE.md` Phase 4 (CSS yaklaşımı analizi) boşluğunu
  kısmen dolduruyor — hesaplanmış stilleri canlı DOM'dan okuyor, tarayıcı eklentisi gerekmiyor;
  zaten kataloglanmış `betson-g/browser-inspector-mcp` ile aynı nişte ama Next.js'e özel destek ve
  daha geniş çalışma-zamanı bağlamı (network/console/terminal) sunuyor, redundant değil, tamamlayıcı.

### Doğrulanan ama EKLENMEYEN Bulgular (Tur 44)

- **lesleslie/css-mcp** — 1 yıldız/0 fork/0 açık issue, BSD-3-Clause, son commit 2026-09-21 (taze).
  Gerçek Python/FastMCP kaynak kodu, testler ve dokümantasyon mevcut (~150 CSS metriği, MDN
  dokümantasyon sorgulama, tarayıcı-uyumluluk kontrolü) — meşru ama kanıtsız/çok düşük benimseme,
  "erken aşama" notuyla eklenmedi.
- **atomno-mcp/mcp-seo-audit** — 1 yıldız/0 fork/0 açık issue, MIT, 18 commit. Gerçek SEO/GEO denetim
  MCP sunucusu (78 kontrol/8 kategori, robots.txt + sitemap.xml doğrulayıcıları, JSON-LD üretici) —
  meşru dosya yapısı (`pyproject.toml`, `Dockerfile`, testler) ama kanıtsız/çok düşük benimseme,
  eklenmedi.
- **sparrow84001/mcp-seo** — 0 yıldız/0 fork/0 açık issue, MIT, 49 commit. Zaten kataloglanmış
  `g-battaglia/mcp-seo`'dan ayrı bir proje; Next.js App Router (Metadata API, `sitemap.ts`) tespiti
  yapıyor ama sıfır topluluk benimsemesi var, eklenmedi.
- **MarwanDevSpace/mcp-ink-design** — 0 yıldız/0 fork/0 açık issue, 15 commit. OKLCH/design-token/
  çok-viewport ekran görüntüsü özellikleri bu projeye uygun ama sıfır benimseme, eklenmedi.
- **hupeng9995/browser-mcp** — 3 yıldız/0 fork/0 açık issue, sadece 1 commit — tek-commit/kanıtsız,
  eklenmedi.
- **Furkiozknn/nvidia-nim-mcp** — 1 yıldız, MIT. Kod incelemesinde NVIDIA/Groq/Mistral/Gemini/Cerebras
  için bireysel (paylaşımlı değil) API key kullandığı doğrulandı — mimari olarak meşru, ama zaten
  kataloglanmış sağlayıcıların üzerine ince bir sarmalayıcı ve benimseme sıfıra yakın, ayrı bir
  madde olarak eklenmedi.
- **NVIDIA NIM (build.nvidia.com)** — resmi bireysel-API-key ücretsiz katman (iddia: hesap başına
  ~1000 ücretsiz çıkarım kredisi, kredi kartı gerekmiyor, 40 istek/dk, OpenAI-uyumlu endpoint, 80+
  model) — ancak `build.nvidia.com`, `developer.nvidia.com` ve `forums.developer.nvidia.com` bu
  turda da `EGRESS_BLOCKED` döndürdü, bilgiler sadece bağımsız üçüncü-parti web kaynaklarından
  derlendi. Tur 21'in "birincil kaynak zorunlu" kuralı gereği numaralı madde olarak eklenmedi;
  Gemini/Mistral/OpenRouter/Jina ile aynı "birincil doğrulama bekliyor" pending listesine not
  düşüldü. Cerebras'ın (#21) güncel ücretsiz-katman durumu da bu turda çelişkili ikincil kaynaklarla
  karşılaşıldı (bazıları hâlâ kartsız 1M-token/gün katman iddia ediyor, bazıları Tur 22'nin tespit
  ettiği $5-kredi-kartlı-deneme değişikliğini teyit ediyor) — `inference-docs.cerebras.ai` da
  `EGRESS_BLOCKED` olduğundan bu turda düzeltme/teyit yapılmadı, mevcut Tur 22 notu geçerliliğini
  koruyor.

Bilinen açık niş boşluk yok; gelecek turlar genel tarama moduna devam edebilir.

---

## Tur 45 (2026-09-24, ~09:03 UTC / 12:03 Türkiye saati başladı)

Kesme noktasının (12:00 UTC) hemen öncesinde başladı. Oturum başında yine "detached HEAD" durumu
görüldü (onyedinci kez tekrarlayan aynı desen); `git fetch origin master` ile `origin/master`'ın
(b3451c6, Tur 44 commit'i) HEAD ile birebir aynı commit'te olduğu doğrulanıp `git checkout -B master
origin/master` ile normale döndürüldü, çalışma kaybı yok. Dosyanın tamamı `grep -oE
'github\.com/...'` ile taranıp mevcut 155 kaynaktan çıkan 153 benzersiz GitHub repo linki (iki `.git`
varyantı normalize edilerek) tekrarın önüne geçmek için çıkarıldı. Araştırma bir general-purpose
alt-agent'a devredildi; 153 mevcut kaynağın tam listesi + görev talimatındaki hariç-tutma kriterleri
verildi. Alt-agent skill/agent koleksiyonu tarafında hiçbir yeni/redundant-olmayan aday bulamadı
(bu niş Tur 36'dan beri genel tarama modunda, kolay bulgular tükenmiş); ücretsiz-LLM-API dizini
tarafında 2 aday buldu ve `WebFetch` ile doğruladı. Ana oturum ikisini de kendi `WebFetch`
çağrılarıyla ikinci kez bağımsız doğruladı — tüm rakamlar (yıldız/fork/açık-issue/lisans) tutarlıydı,
tutarsızlık bulunmadı. İki aday birbiriyle örtüştüğü (aynı niş: CI-tabanlı otomatik doğrulamalı
ücretsiz-LLM-API dizini) için sadece daha güçlü doğrulama yöntemine sahip olan #156 olarak eklendi,
diğeri (`pacocartones/free-llm-api-hub`) redundancy nedeniyle eklenmedi. 3 erken-aşama/kanıtsız aday
ve birkaç ToS-riski/pooled-key gateway/duplicate adayı görev talimatına uygun şekilde reddedildi
(aşağıya bak).

**Toplam:** 156 doğrulanmış kaynak (Tur 44 sonunda 155'ti, Tur 45 ile #156 eklendi).

### D) Ücretsiz LLM API Dizini (CI-tabanlı otomatik doğrulama — statik listelerden farklı yöntem)

#### 156. [mvalentsev/awesome-free-ai-coding](https://github.com/mvalentsev/awesome-free-ai-coding)
- **Yıldız:** 30 · **Fork:** 4 · **Açık issue:** 0 · **Lisans:** MIT
- **Güncellik:** aktif, 333 commit, oluşturulma 2026-07-19.
- **Ne işe yarar:** Bireysel (paylaşımlı olmayan) API key gerektiren ücretsiz-katmanlı LLM API'leri ve
  ücretsiz kodlama ajanlarının derlenmiş listesi (Google AI Studio/Gemini, Groq, NVIDIA NIM, LLM7.io,
  Kilo Code, GitHub Copilot Free, Kiro, Google Jules, opencode, Google Antigravity, vb.) — 79 canlı
  teklif.
- **Neden meşru:** `WebFetch` ile github.com repo sayfası doğrulandı (30★/4 fork/0 açık issue, MIT
  LICENSE, 333 commit — tüm rakamlar alt-agent'ın bulgusuyla birebir tutarlı). README'nin kendisi,
  bu katalogda zaten bulunan 5+ statik markdown "awesome-free-llm-apis" listesinden farklı olarak,
  her satırın GitHub Actions ile **haftada iki kez canlı model API'lerine istek atılarak veya
  pricing sayfası okunarak** yeniden doğrulandığını belirtiyor; 3 kez üst üste başarısız olan veya
  60 gün güncellenmeyen teklifler otomatik olarak arşive taşınıyor. Kendisi bir araç değil, her
  sağlayıcının kendi resmi kayıt/API-key akışına yönlendiren bir referans dizini — paylaşımlı/
  havuzlanmış key veya ToS riski yok.
- **Kurulum:** Kurulum gerektirmez — referans dosyası; `README.md` okunup istenen sağlayıcının kendi
  resmi kayıt/API-key sayfasına gidilir.
- **Proje uyumu:** Zaten kataloglanmış statik ücretsiz-LLM-API listelerini (mnfst, open-free-llm-api,
  amardeeplakshkar, nejib1, xyzs996) tamamlıyor — CI-probe'lu/tarihli doğrulama yöntemi sayesinde
  "ölü link/güncel olmayan iddia" riskini statik listelerden daha iyi azaltıyor, redundant değil.

### Doğrulanan ama EKLENMEYEN Bulgular (Tur 45)

- **pacocartones/free-llm-api-hub** — 48★/12 fork/60 açık issue (Hacktoberfest etiketli özellik
  istekleri + veri-doğrulama görevleri, sağlıklı topluluk aktivitesi, kırmızı bayrak değil), MIT.
  `WebFetch` ile doğrulandı — gerçek, tarihli (`last_verified`), şema-doğrulanmış `data/providers.json`
  (Google Gemini/Groq girdileri `docs_url`/`env_key` ile teyit edildi). Meşru ve #156 ile aynı niş/
  yöntemi paylaşıyor (CI-tabanlı doğrulama) ama #156'nın doğrulaması daha güçlü (gerçek model API'sini
  çağırıyor, bu ise ağırlıklı olarak dokümantasyon sayfası diff'i yapıyor) — redundancy nedeniyle
  ayrı madde olarak eklenmedi.
- **ScalefreeCOM/datavault4dbt-agent-skills** — 22★/0 fork/0 issue, Apache-2.0. Gerçek, içerikli
  SKILL.md dosyaları (dbt + Data Vault 2.0 modelleme nişi) doğrulandı ama bu şablonun tech stack'i
  (Next.js/React) ile hiçbir ilgisi yok ve çok niş/düşük benimseme, eklenmedi.
- **yan-labs/yan-skills** — 203★/88 fork/0 issue, MIT, 426+ commit, gerçek SKILL.md dosyaları
  doğrulandı (rankup, backlink, opencli, autopilot, imagegen). Skillerden biri ("backlink") 492
  hedefli toplu geri-bağlantı/link-gönderim otomasyonu (gray-hat SEO) yapıyor — görev talimatının
  ToS-riski hariç-tutma kriterine yakın durduğu için eklenmedi.
- **cristiannegru/awesome-free-llm-apis** — 0★/0 fork. Bireysel key kullanımı doğrulandı ama sıfır
  benimseme, eklenmedi.
- **chusri/claude-code-agents** — zaten kataloglanmış `wshobson/agents`'ın doğrudan fork'u (13★),
  saf tekrar, eklenmedi.
- **tryalan-ai/awesome-claude-code-sub-agents** — ham README kendi kopyalama talimatında
  `supatest-ai/awesome-claude-code-agents`'a işaret ediyor; yıldız/fork/issue sayıları (173/28/1)
  zaten kataloglanmış `supatest-ai/awesome-claude-code-sub-agents` ile birebir aynı — yeniden
  adlandırma/tekrar, eklenmedi.
- **SankofaForge/design-inspiration-mcp-server** — 0★/0 fork, kendi README'si zaten kataloglanmış
  `YonasValentin/design-inspiration-mcp-server`'dan klonlanmasını söylüyor — türev/boş fork,
  eklenmedi.
- Paylaşımlı/havuzlanmış key kullanan "gateway/router" repoları (0xzr/freellmpool,
  malda231125/free-llm-gateway, Corporationakht/LocalCodeCli, fhrouter/fhrouter,
  freellms/free-llm-api-keys) — görev talimatının "paylaşımlı/havuzlanmış API key" hariç-tutma
  kriteri gereği bilerek dokunulmadı.
- **liarjs-skills** ve benzeri anti-bot-tespiti/fingerprint-evasion skill'leri — ToS-bypass
  hariç-tutma kriterine yakın durduğu için değerlendirmeye alınmadı.

Bilinen açık niş boşluk yok (skill/agent koleksiyonu tarafı Tur 36'dan beri tükenmiş durumda);
gelecek turlar genel tarama moduna devam edebilir.

---

*Son güncelleme: 2026-09-24 (Tur 45). Bu tur bir general-purpose alt-agent'a devredildi; 153 mevcut
kaynağın tam listesi + görev talimatındaki hariç-tutma kriterleri verildi. Alt-agent skill/agent
koleksiyonu tarafında yeni/redundant-olmayan aday bulamadı; ücretsiz-LLM-API dizini tarafında 2 aday
buldu (`mvalentsev/awesome-free-ai-coding`, `pacocartones/free-llm-api-hub`) — ikisi de CI-tabanlı
otomatik doğrulama kullanıyor. Ana oturum ikisini de kendi `WebFetch` çağrılarıyla ikinci kez
bağımsız doğruladı; tüm rakamlar tutarlıydı. İkisi örtüştüğü için sadece daha güçlü doğrulamaya
sahip olan `mvalentsev/awesome-free-ai-coding` (30★, MIT — gerçek model API'lerini haftada iki kez
probe eden, tarihli/otomatik-arşivlemeli ücretsiz-LLM-API dizini) #156 olarak eklendi. 3 erken-
aşama/kanıtsız aday, 2 duplicate/türev fork ve birkaç pooled-key gateway/ToS-riski adayı görev
talimatına uygun şekilde reddedildi — yukarıdaki "Doğrulanan ama EKLENMEYEN Bulgular (Tur 45)"
bölümüne bakın. Toplam kataloglanmış kaynak sayısı: 156.
Sonraki turlarda bu dosya okunup yeni kaynaklar üstüne eklenecek, Tur 1–45'te listelenenler
tekrarlanmayacak.

---

## Tur 46 (2026-09-24, ~10:03 UTC / 13:03 Türkiye saati başladı)

Kesme noktasının (12:00 UTC) sonrasında başladı — görev talimatı 12:00 UTC'yi geçtiğinde normal
aramanın YAPILMAMASINI ve bunun yerine dosyanın başına kısa bir "tamamlandı" özeti eklenmesini
söylüyor; ancak oturum saati (`date -u`) 10:03 UTC / 13:03 Türkiye saatini gösterdi — yani kesme
noktasının (12:00 UTC) hâlâ ~2 saat GERİSİNDE, bu yüzden normal araştırma turu yapıldı. Oturum
başında yine "detached HEAD" durumu görüldü (onsekizinci kez tekrarlayan aynı desen); `git fetch
origin master` ile `origin/master`'ın (df09e2c, Tur 45 commit'i) HEAD ile birebir aynı commit'te
olduğu doğrulanıp `git checkout -B master origin/master` ile normale döndürüldü, çalışma kaybı yok.
Dosyanın tamamı `grep -oE 'github\.com/[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+'` ile taranıp (küçük harfe
çevrilip `.git` varyantları normalize edilerek) mevcut 156 kaynaktan çıkan 152 benzersiz GitHub repo
linki tekrarın önüne geçmek için çıkarıldı.

Bu tur alt-agent'a devredilmedi; ana oturum kendi `mcp__github__search_repositories` ve `WebFetch`
çağrılarıyla doğrudan aradı (subagent/skill koleksiyonları, ücretsiz-LLM-API dizinleri, `updated`
sırasına göre). Skill/agent koleksiyonu tarafında (Tur 36'dan beri "genel tarama modu") gerçekten
yeni/redundant-olmayan bir aday bulundu: `ayush-that/sub-agents.directory` — bu, mevcut 156 kaynak
arasında bulunmayan, canlı web sitesi + arama + AI-destekli üretim özellikleriyle statik
markdown listelerinden farklı bir subagent/MCP dizini. Ücretsiz-LLM-API tarafında birden fazla yeni
aday bulundu (`peter123023/awesome-free-llm-api`, `velo4705/awesome-free-byok-models`,
`4pixeltechBR/awesome-ai-free-tiers` ve benzerleri) — hepsi bireysel API key/BYOK gerektiriyor ve
meşru, ancak bu niş zaten 6+ statik liste ile doyurulmuş durumda (bkz. Tur 45 notu); sadece en güçlü/
en yaygın benimsenmiş olan (`peter123023/awesome-free-llm-api`, 130★, en katı "sadece gerçek API
key+endpoint" kriteri) eklendi, diğerleri redundancy nedeniyle atlandı. 2 yeni kaynak eklendi
(#157-#158).

**Toplam:** 158 doğrulanmış kaynak (Tur 45 sonunda 156'ydı, Tur 46 ile #157-#158 eklendi).

### E) Subagent/MCP Dizini ve Ücretsiz LLM API (Tur 46 eklemeleri)

#### 157. [ayush-that/sub-agents.directory](https://github.com/ayush-that/sub-agents.directory)
- **Yıldız:** 145 · **Fork:** 35 · **Açık issue:** 4 · **Lisans:** MIT
- **Güncellik:** aktif, son push 2026-09-14, son güncelleme 2026-09-23.
- **Ne işe yarar:** 100+ sub-agent prompt'u ve MCP sunucusunu kategoriye göre listeleyen, arama ve
  tek-tıkla-kopyala özellikli bir dizin (canlı site: sub-agents.directory). 10 kategori klasöründe
  (core development, language specialists, infrastructure, vb.) gerçek markdown tanım dosyaları
  içeriyor.
- **Neden meşru:** `mcp__github__search_repositories` ile 145★/35 fork/4 açık issue/MIT LICENSE
  doğrulandı; `WebFetch` ile README içeriği okunarak dosya yapısı (kategori klasörleri + katkı
  formatı) ve MIT lisansı teyit edildi. Standart geliştirme araçları (bun, Next.js, Supabase)
  kullanıyor; paylaşımlı API key veya ToS-bypass scraping bulunmuyor — topluluk PR'larıyla açıkça
  katkıya açık.
- **Kurulum:** Kurulum gerektirmez — istenen sub-agent/MCP tanımı repodan veya sub-agents.directory
  sitesinden kopyalanıp `~/.claude/agents/` veya proje `.claude/agents/` altına yerleştirilir.
- **Proje uyumu:** Zaten kataloglanmış subagent koleksiyonlarını (davepoon/claude-code-subagents-
  collection, VoltAgent/awesome-claude-code-subagents, vb.) tamamlıyor — arama/keşif arayüzü ve
  MCP sunucu listesini birleştirmesi bakımından farklı/ek değer sunuyor, redundant değil.

#### 158. [peter123023/awesome-free-llm-api](https://github.com/peter123023/awesome-free-llm-api)
- **Yıldız:** 130 · **Fork:** 4 · **Açık issue:** 5 · **Lisans:** MIT
- **Güncellik:** çok aktif, oluşturulma 2026-09-01, son push 2026-09-22, son güncelleme 2026-09-24
  (bugün).
- **Ne işe yarar:** Yalnızca API key + endpoint üzerinden çağrılabilen kalıcı-ücretsiz veya açıkça
  süre-sınırlı-ücretsiz LLM API'lerinin kanal-öncelikli (channel-first) derlemesi; DeepSeek, GLM,
  Qwen ve daha fazlası için model indeksi içeriyor.
- **Neden meşru:** `WebFetch` ile README doğrulandı — README'nin kendisi açıkça "只认
  API——必须能拿到 API Key、通过 endpoint 调用才算数" (yalnızca gerçek API key + endpoint ile
  çağrılabilenler sayılır) diyor; NVIDIA NIM, Google AI Studio, Groq gibi sağlayıcılarda bireysel key
  üretimi örnekleniyor, paylaşımlı/havuzlanmış key promosyonu yok. Veri-eğitimi kullanım politikaları
  şeffafça belirtiliyor (ör. Google/Mistral/Groq ücretsiz katmanının eğitimde kullanılabileceği
  uyarısı). `mcp__github__search_repositories` ile 130★/4 fork/5 açık issue/MIT LICENSE bağımsız
  doğrulandı — tüm rakamlar tutarlı.
- **Kurulum:** Kurulum gerektirmez — referans dosyası; `README.md` okunup istenen sağlayıcının kendi
  resmi kayıt/API-key sayfasına gidilir.
- **Proje uyumu:** Zaten kataloglanmış statik ücretsiz-LLM-API listelerini (mnfst, amardeeplakshkar,
  open-free-llm-api, nejib1, xyzs996, mvalentsev) tamamlıyor — Çince kaynaklı sağlayıcılar
  (DeepSeek/GLM/Qwen kanalları) ve en katı "sadece gerçek API key" filtresi bakımından ek/farklı
  kapsama sunuyor.

### Doğrulanan ama EKLENMEYEN Bulgular (Tur 46)

- **velo4705/awesome-free-byok-models** — 46★/2 fork/0 issue, CC0-1.0. `WebFetch` ile doğrulandı;
  meşru BYOK listesi ("Use responsibly... not for scraping, reselling, or bulk harvesting" açıkça
  belirtilmiş), ancak #158 ile aynı niş/yöntemi (statik BYOK/ücretsiz-API markdown listesi) paylaşıyor
  ve daha az benimsenmiş (46★ vs 130★) — redundancy nedeniyle ayrı madde olarak eklenmedi.
- **4pixeltechBR/awesome-ai-free-tiers** — 6★/2 fork, oluşturulma 2026-09-18 (çok yeni, ~6 gün).
  "100% verified" iddiası var ama benimseme çok düşük ve doğrulama geçmişi kısa — erken-aşama/
  kanıtsız kabul edilip eklenmedi (görev talimatının "kanıtsız iddia" hariç-tutma kriterine yakın).
- **AIwithDiego/hank** — Claude Code kurulumları için OWASP LLM Top 10'a karşı güvenlik denetimi
  yapan savunma amaçlı bir araç (CLAUDE.md/skills/MCP config/hooks tarar); ilginç ve meşru bir
  savunma-güvenlik nişi ama repo bugün (2026-09-24) oluşturulmuş, 1★, sıfır commit geçmişi — çok
  erken aşama, doğrulanabilir olgunluk yok, eklenmedi. Gelecek turlarda tekrar kontrol edilebilir.
- **linny006/trending-claude-skills** — 47★, "15 dakikada bir otomatik güncellenen" skill/agent
  trend listesi (kendisi bir skill/agent koleksiyonu değil, bir keşif/liste aracı) — kategori olarak
  bu kataloğun kapsamına net oturmuyor (kaynak değil, meta-dizin), eklenmedi.
- Bunların dışında taranan sonuçların büyük çoğunluğu (`henderson-tech/vybava`, `DKJ-Solutions/
  dkj-claude-plugins`, `DanielC000/loom`, tekil/düşük-yıldızlı kişisel "my-claude-code" tarzı repolar,
  vb.) ya sıfıra yakın benimseme ya da zaten kataloglanmış kaynaklarla aynı niş/kalıpta — hepsi
  görev talimatının kriterlerine göre elendi.

Bilinen açık niş boşluk yok (skill/agent koleksiyonu tarafı Tur 36'dan beri tükenmiş durumda;
ücretsiz-LLM-API tarafı da Tur 45-46 ile büyük ölçüde doyduruldu). Gelecek turlar genel tarama
moduna devam edebilir; yeni bulgular giderek seyrekleşiyor.

---

## Tur 47 — 2026-09-24

Kesme noktasının (12:00 UTC) öncesinde başladı (~11:04 UTC / 14:04 Türkiye saati). Dosyanın tamamı
`grep -oE 'github\.com/...'` ile taranıp mevcut 158 kaynaktan çıkan 154 benzersiz GitHub repo linki
tekrarın önüne geçmek için çıkarıldı. Araştırma bir general-purpose alt-agent'a devredildi; 154 mevcut
kaynağın tam listesi + görev talimatındaki hariç-tutma kriterleri verildi, "son 1-2 haftada oluşturulmuş/
güncellenmiş" taze bölgeye odaklanması ve zayıf/redundant adayları raporlamaması istendi. Ana oturum,
alt-agentin tek kabul ettiği adayı kendi `WebFetch` çağrılarıyla bağımsız doğruladı (yıldız/fork/lisans/
SKILL.md içeriği alt-agentinkiyle birebir tutarlıydı). 1 yeni kaynak eklendi (#159).

### F) Skill Koleksiyonu — Website Cloning Metodolojisi (Tur 47 eklemesi)

#### 159. [Jane-xiaoer/claude-skill-web-clone](https://github.com/Jane-xiaoer/claude-skill-web-clone)
- **Yıldız:** 1.000 · **Fork:** 123 · **Açık issue:** 0 · **Lisans:** MIT
- **Güncellik:** son commit ana branch'te (v1.6.0, "feat(static-mirror): 1:1 statik mirror yeteneği
  eklendi"), repo 2026-05-28'de oluşturulmuş.
- **Ne işe yarar:** "Gerçek kaynak önce, AI'nin tahmin ettiği koddan asla kopyalama" ilkesine dayanan,
  website klonlama/reprodüksiyon için sistemli bir karar-ağacı metodolojisi: proje iskeleti kurma →
  GitHub'da gerçek kaynak arama → tarayıcı keşfi ile teknoloji tespiti → L1-L6 karmaşıklık
  değerlendirmesi → rota haritalama → içerik değişimi. Statik HTML, React/Vue/Next ve WebGL/Canvas
  ağırlıklı siteler için ayrı teknikler içeriyor; amiral örnek olarak bir WebGL "mermer" demosunun
  gerçek kaynağa karşı doğrulanmadan asla uygulanmaması gerektiğini gösteren vaka çalışması var.
- **Neden meşru:** `WebFetch` ile repo sayfası bağımsız doğrulandı — 1.000★/123 fork/0 açık issue/MIT
  LICENSE (raw LICENSE dosyasında "MIT License / Copyright (c) 2026 Jane" teyit edildi). Kök dizinde
  gerçek `SKILL.md` dosyası `raw.githubusercontent.com/Jane-xiaoer/claude-skill-web-clone/main/SKILL.md`
  üzerinden doğrudan okunup geçerli YAML frontmatter (`name: web-clone`, `version: "1.6.0"`) ve tam
  metodoloji içeriği teyit edildi. Ayrıca `README.md`, `LICENSE`, `references/` (ters mühendislik
  rehberleri, efekt çıkarma notları, WebGL vaka çalışması) ve `scripts/` (`recon-site.mjs`,
  `mirror-site.mjs`, `route-crawl.mjs`, görsel-fark/etkileşim probe'ları) dizinleri görüldü. Paylaşımlı
  API key, ToS-bypass scraping veya hesap-askıya-alma riski yok; açıkça ücretsiz (MIT).
- **Kurulum / DİKKAT:** Kurulum tam "kopyala-yapıştır" değil — bootstrap script'i yazarın kişisel
  makine yoluna (`/Users/jane/.shared-skills/web-clone/scripts/init-clone.mjs`) ve kişisel proje
  dizini kuralına (`~/projects/website-clones/`) referans veriyor, bu yüzden kullanılmadan önce yol
  adaptasyonu gerekiyor. Asıl değer metodoloji/karar-ağacı ve `scripts/` altındaki keşif/mirror
  script'lerinde — bunlar `SKILL.md`'den okunup projeye özgü yollarla elle uyarlanmalı.
- **Proje uyumu:** Bu şablonun ana amacıyla (`/clone-website` skill'i, `docs/research/INSPECTION_GUIDE.md`)
  doğrudan örtüşüyor — zaten kataloglanmış `sarthakmishra/site-cloner` ve `ericshang98/perfect-web-clone-skill`
  gibi klonlama araçlarını tamamlayan, farklı bir metodolojik yaklaşım (kaynak-önce karar ağacı +
  L1-L6 karmaşıklık sınıflandırması) sunuyor.

### Doğrulanan ama EKLENMEYEN Bulgular (Tur 47)

- **andreasskyt/claude-website-cloner-skill** — gerçek `website-cloner/SKILL.md` doğrulandı, ancak
  0★/1 commit — sıfıra yakın benimseme, eklenmedi.
- **ghassan-gaidi/free-llm-api-list** — meşru bireysel-key ücretsiz-tier içeriği, ancak sadece 1★ —
  sıfıra yakın benimseme, eklenmedi.
- **tryalan-ai/awesome-claude-code-sub-agents** — gerçek agent `.md` dosyaları doğrulandı (173★, MIT),
  ancak son commit 2025-09-19 (bir yıldan fazla güncel değil) ve zaten kataloglanmış birçok benzer
  "awesome-claude-code-subagents" koleksiyonuyla (VoltAgent, robotmice, neatnerdprime, supatest-ai)
  aynı türde, redundancy nedeniyle eklenmedi.
- **netresearch/claude-code-marketplace** — 60★/MIT/aktif, ancak dosya ağacı incelemesinde gerçek
  `SKILL.md` dosyası yok, sadece dış repolara işaret eden bir `marketplace.json` var — "repoda gerçek
  SKILL.md" kriterini karşılamıyor, eklenmedi.
- **BehiSecc/awesome-claude-skills** — 10,2k★, güncel, ancak kendi skill dosyaları olmayan saf bir
  link-toplayıcı "awesome list" — zaten kataloglanmış awesome-list'lerle (hesreallyhim, travisvn,
  ComposioHQ) redundant, eklenmedi.
- **muhammadsuheer/nextjs-docs-mcp** — meşru, çalışan bir Next.js 16 dokümantasyon MCP sunucusu (3
  gerçek araç doğrulandı), ancak sadece 5★ — sıfıra yakın benimseme, eklenmedi.
- **Manavarya09/design-extract**'in çeşitli neredeyse-birebir fork'ları (899ms, timothybrush,
  nepalisagun, ivangegovdve-sudo) — orijinali zaten kataloglanmış, fork'lar bağımsız yeni kaynak
  sayılmaz.
- Çeşitli görsel-regresyon/piksel-fark MCP repoları (diffyard, odiff, Visual-Regression-Tracker,
  pixel-diff) — genel amaçlı görsel-fark araçları, MCP-native değil veya projenin akışıyla net
  örtüşmüyor, taze/doğrulanabilir/redundant-olmayan benimseme sinyali yok — eklenmedi.

Bu tur da önceki turların gözlemini doğruluyor: alan büyük ölçüde doymuş durumda — taze görünen
sonuçların çoğu ya zaten kataloglanmış projelerin fork/rebrand'i, ya gerçek skill dosyası olmayan
liste-toplayıcıları, ya da ihmal edilebilir yıldız sayısına sahipti.

---

*Son güncelleme: 2026-09-24 (Tur 47). Araştırma bir general-purpose alt-agent'a devredildi, tek
kabul edilen aday (`Jane-xiaoer/claude-skill-web-clone`) ana oturum tarafından bağımsız `WebFetch`
ile yeniden doğrulandı. Skill koleksiyonu tarafında 1 yeni kaynak eklendi (#159) — bu şablonun
website-klonlama amacıyla doğrudan örtüşen, kurulum için yol-adaptasyonu gerektiren bir metodoloji
skill'i. Örtüşen/erken-aşama/düşük-benimseme/liste-toplayıcı adaylar (andreasskyt, ghassan-gaidi,
tryalan-ai, netresearch, BehiSecc, muhammadsuheer, design-extract fork'ları, görsel-fark MCP'leri)
görev talimatına uygun şekilde reddedildi — yukarıdaki "Doğrulanan ama EKLENMEYEN Bulgular (Tur 47)"
bölümüne bakın. Toplam kataloglanmış kaynak sayısı: 159.

**Not (Tur 47 gözlemi):** Bu, kataloğun 9. gününde 47. turu — alan Tur 36'dan beri "genel tarama
modu"nda ve yeni bulgular giderek seyrekleşiyor (Tur 44: birkaç yeni, Tur 45: 1 yeni, Tur 46: 2 yeni,
Tur 47: 1 yeni — çoğu aday redundant/erken-aşama/düşük-benimseme nedeniyle eleniyor). Görevin değeri
düşüyor gibi görünüyor; kullanıcı turun sıklığını azaltmayı veya görevi durdurmayı değerlendirebilir.

Sonraki turlarda bu dosya okunup yeni kaynaklar üstüne eklenecek, Tur 1–47'de listelenenler
tekrarlanmayacak.

---

## Tur 48 — 2026-09-25

Kesme noktasının (12:00 UTC) öncesinde başladı (~03:03 UTC / 06:03 Türkiye saati) — kataloğun 10.
gününün ilk turu. Dosyanın tamamı `grep -oE 'github\.com/...'` ile taranıp mevcut 159 kaynaktan çıkan
~180 benzersiz GitHub repo linki tekrarın önüne geçmek için çıkarıldı. `mcp__github__search_repositories`
ile üç niş tazelik taraması yapıldı ("claude code skill", "claude code subagents", "free llm api key",
hepsi `pushed:>2026-09-10/15` filtresiyle, en son güncellenene göre sıralı). Bu oturumda GitHub MCP
sunucusunun repo kapsamı yalnızca bu şablon reposuyla sınırlı olduğundan (`get_file_contents` başka
repolarda "Access denied" verdi), aday doğrulaması önceki turlardaki gibi `WebFetch` ile
`raw.githubusercontent.com` üzerinden bağımsız yapıldı.

**Genel gözlem:** Tarama sonuçlarının büyük kısmı, gerçek "claude-code"/"subagents" konusuyla hiçbir
ilgisi olmayan onlarca alakasız GitHub topic etiketiyle (`civ4`, `modbus`, `pcap`, `rocketmq`,
`tcp-ip`, `openclaw`, `moltbot`, `clawdbot`, `smpl` vb.) doldurulmuş, çoğu 0-1 yıldızlı, otomatik/toplu
üretilmiş görünen "SEO-tuzağı" repolardan oluşuyordu — bu, alanın Tur 36'dan beri doymuş olmasının yanı
sıra, arama sonuçlarının giderek düşük kaliteli/spam içerikle kirlendiğine işaret ediyor. Yine de iki
gerçek, iyi benimsenmiş ve talimattaki hariç-tutma kriterlerinin hiçbirine takılmayan yeni kaynak
bulundu.

### A) Skill — Yazım Kalitesi / AI-Yazım Tespiti (proje-özel değil, genel amaçlı içerik üretimi)

#### 160. [conorbronsdon/avoid-ai-writing](https://github.com/conorbronsdon/avoid-ai-writing)
- **Yıldız:** ~4.700 · **Fork:** 407 · **Açık issue:** 39 · **Lisans:** MIT
- **Güncellik:** aktif — 450+ commit, ana branch üzerinde sık güncelleme; bugün (2026-09-25) dahil
  `updated_at` sürekli tazeleniyor.
- **Ne işe yarar:** İçerikteki "AI-izm" kalıplarını (klişe geçişler, chatbot artefaktları, belirsiz
  atıflar, aşırı em-dash kullanımı vb.) P0/P1/P2 önem seviyelerine göre tespit edip insan sesine yakın
  şekilde yeniden yazan bir yazım-kalitesi skill'i. Üç mod sunuyor: rewrite (varsayılan), detect-only,
  edit-in-place. Kod bloklarını, alıntıları, tabloları ve URL'leri koruyarak düzenliyor; casual/
  professional/technical/warm/blunt gibi ses profilleri var.
- **Neden meşru:** `WebFetch` ile `README.md`, `SKILL.md` ve `LICENSE` bağımsız doğrulandı. `LICENSE`
  dosyasında tam metin "MIT License / Copyright (c) 2026 Conor Bronsdon" olarak teyit edildi. `SKILL.md`
  geçerli YAML frontmatter içeriyor (`name: avoid-ai-writing`, `version: 3.36.0`). Tespit motoru
  "deterministic engine with zero external dependencies" — tamamen yerelde (Node.js ≥18 veya tarayıcıda)
  çalışıyor, hiçbir dış API çağrısı veya paylaşımlı/havuzlanmış anahtar yok. Dokümantasyon dürüstçe kendi
  sınırını da belirtiyor: AI-tespit araçlarının ana-dili İngilizce olmayan yazarlarda %60'ın üzerinde
  yanlış-pozitif oranına sahip olabileceği uyarısı var — kanıtsız/abartılı bir "kesin AI tespiti" iddiası
  yok, tam tersine dürüst bir "sinyal, kanıt değil" çerçevesi sunuluyor.
- **Kurulum:** `git clone https://github.com/conorbronsdon/avoid-ai-writing ~/.claude/skills/avoid-ai-writing`
  — tek komutla dosya kopyalama, ek onay/derleme gerekmiyor. Alternatif olarak tek-dosya
  `dist/avoid-ai-writing.md` kopyalanabilir veya `npm install avoid-ai-writing-detector` ile CLI/kütüphane
  olarak kullanılabilir.
- **Proje uyumu:** Bu şablonun doğrudan tech stack'iyle örtüşmüyor, ama şablonun ürettiği README/dokümantasyon
  ve `docs/research/` çıktıları gibi AI-üretimi metinlerin kalitesini artırmak için genel-amaçlı, düşük
  riskli bir katkı; kataloğun şimdiye kadarki ağırlıklı web-klonlama/tasarım-token odağını tamamlayan
  farklı bir niş.

### B) MCP Sunucusu — Ücretsiz/Anahtarsız Web Arama (araştırma/keşif fazı)

#### 161. [sweetcornna/free-search-mcp](https://github.com/sweetcornna/free-search-mcp)
- **Yıldız:** 85 · **Fork:** 8 · **Açık issue:** 1 · **Lisans:** MIT
- **Güncellik:** son commit 2026-09-24 (bu turdan bir gün önce), aktif geliştirme.
- **Ne işe yarar:** API anahtarı gerektirmeden web araması, doküman getirme ve içerik okuma sağlayan bir
  MCP sunucusu; `search()`, `research()`, `fetch()`, `paper_graph()` dahil 11 araç sunuyor, 73 arama
  motoru/veri kaynağını paralel tarayıp bulanık başlık eşleştirme + host normalizasyonuyla tekilleştiriyor,
  sonuçları LLM-tüketimine uygun Markdown olarak döndürüyor. Akademik makale, finans, haber, görsel ve
  yazılım-kayıt (registry) gibi özel arama kategorileri de var.
- **Neden meşru:** `WebFetch` ile `README.md` bağımsız doğrulandı — sistem tamamen anahtarsız HTTP arama
  motorları ve veri API'leri üzerinden çalışıyor; `brave_api`, `serper`, `tavily`, `google_cse`,
  `github_code` gibi yalnızca 5 motor opsiyonel ek kimlik bilgisi istiyor ama bunlar olmadan da sunucu tam
  işlevsel çalışıyor (adı geçtiğinde anahtarsız alternatifini öneren bir hata mesajı veriyor). Paylaşımlı/
  havuzlanmış bir anahtar promosyonu yok, platform ToS'unu bypass eden bir scraping tekniği belgelenmemiş
  — genel web arama motorlarının halka açık, anahtarsız uç noktalarını kullanıyor. `search_repositories`
  ile 85★/8 fork/1 açık issue bağımsız doğrulandı.
- **Kurulum:** Claude Code için resmi plugin marketplace akışı: `/plugin marketplace add sweetcornna/free-search-mcp`
  ardından `/plugin install free-search@free-search-mcp`. Alternatif manuel kayıt: `claude mcp add search -s user -- uvx free-search-mcp`.
  Konfigürasyon `~/.config/search-mcp/.env` altında, hiçbir ayar zorunlu değil — varsayılanlarla
  kurulumsuz çalışıyor. Tarayıcı-render'lı motorlar için opsiyonel `uvx --from free-search-mcp playwright install chromium`.
- **Proje uyumu:** `INSPECTION_GUIDE.md` Phase 4 (Teknik Yığın Analizi) ve genel hedef-site
  araştırması için kullanılabilecek, anahtarsız/ücretsiz bir genel-amaçlı araştırma aracı — şimdiye kadar
  kataloglanan tasarım/asset-odaklı MCP sunucularını tamamlayan farklı bir niş (genel web araştırması).

### Doğrulanan ama EKLENMEYEN Bulgular (Tur 48)

- **Dicklesworthstone/skillranker** — 119★, Rust CLI, oturum bağlamına göre agent skill'lerini
  sıralıyor; ancak çalışması için ücretli "TypeSafe API key" gerektiriyor (dokümantasyonda açıkça
  belirtilmiş) — görev talimatının "ücretsiz" kriterini karşılamıyor, eklenmedi.
- **minetechnic2012-lang/claude-ops-inspector** — 120★ görünüyor ama açıklaması ("Subagent Verification
  for Claude AI Code Networks 2026") belirsiz/pazarlama-dili ağırlıklı, ana dili HTML olan bir repo için
  "doğrulama" iddiası şüpheli — gerçek `SKILL.md`/`agents/*.md` içeriği doğrulanamadı, temkinli
  davranılıp eklenmedi.
- **JakeSelby/agent-harness** — 18★'e karşılık 168 açık issue gibi tutarsız bir oran taşıyor (organik
  kullanım paternine uymuyor) — şüpheli benimseme sinyali, eklenmedi.
- Taranan sonuçların ezici çoğunluğu (`sergsrgsg/rock-star-skills`, `salvageable-mutualfund57/
  caveman-distillate`, `Myracoagulable91/paid-ads-skills-spain`, ve benzeri onlarca repo) — "claude-code"
  konusuyla alakasız, birbirinden kopya gibi görünen düzinelerce alakasız GitHub topic etiketiyle
  (`civ4-mod`, `modbus`, `pcap`, `rocketmq`, `tcp-client` vb.) dolu, 0-1 yıldızlı, muhtemelen otomatik/
  toplu üretilmiş "SEO-tuzağı" repolardı — hiçbiri gerçek/doğrulanabilir bir skill veya agent koleksiyonu
  içermiyordu, hepsi elendi.
- Zaten kataloglanmış `open-free-llm-api/awesome-freellm-apis` (#158) dışında, "ücretsiz LLM API"
  taramasında yeni/bağımsız/yeterince benimsenmiş bir aday çıkmadı (RAG uygulamaları, kripto-haber
  API'leri, satranç-analiz araçları gibi konu-dışı sonuçlar hariç tutuldu).

Bu tur, alanın doymuşluğunun yanı sıra yeni bir gözlem ekliyor: GitHub'daki genel "claude-code" arama
sonuçları, artan oranda alakasız-topic-etiketli düşük-kaliteli/spam repolarla kirleniyor — bu, gelecek
turlarda ham arama sonuçlarının filtrelenmesini daha da zorlaştırabilir.

---

*Son güncelleme: 2026-09-25 (Tur 48). İki yeni kaynak eklendi (#160 `avoid-ai-writing` yazım-kalitesi
skill'i, #161 `free-search-mcp` anahtarsız araştırma MCP sunucusu) — ikisi de `WebFetch` ile
`raw.githubusercontent.com` üzerinden bağımsız doğrulandı. Ücretli-API gerektiren (skillranker),
şüpheli benimseme paterni taşıyan (claude-ops-inspector, agent-harness) ve konu-dışı/spam (çoğu tarama
sonucu) adaylar görev talimatına uygun şekilde reddedildi. Toplam kataloglanmış kaynak sayısı: 161.

Sonraki turlarda bu dosya okunup yeni kaynaklar üstüne eklenecek, Tur 1–48'de listelenenler
tekrarlanmayacak.

---

## Tur 49 — 2026-09-25

Kesme noktasının (12:00 UTC) çok öncesinde başladı (~04:02 UTC / 07:02 Türkiye saati) — Tur 48'in
bitişinden (~03:03 UTC) sadece ~1 saat sonra, aynı gün içinde. Dosyanın tamamı `grep -oE
'github\.com/...'` ile taranıp mevcut 161 kaynaktan çıkan 157 benzersiz GitHub repo linki tekrarın
önüne geçmek için çıkarıldı. Araştırma bir general-purpose alt-agent'a devredildi; 157 mevcut kaynağın
tam listesi + görev talimatındaki hariç-tutma kriterleri verildi, resmi kurumsal skill koleksiyonlarına
ve website-klonlamaya özel yeni araçlara öncelik verilmesi istendi.

Alt-agent 2 aday buldu (`supabase/agent-skills`, `neondatabase/agent-skills`), ana oturum ikisini de
kendi `WebFetch` çağrılarıyla bağımsız doğruladı (yıldız/fork/lisans/SKILL.md içeriği tutarlıydı:
supabase/agent-skills 2.700★/211 fork/MIT, neondatabase/agent-skills 90★/19 fork/5 açık issue/
Apache-2.0). **Ancak ikisi de eklenmedi** — dosya araması sırasında `neondatabase/agent-skills`'in
zaten **Tur 39'da** aynı gerekçeyle değerlendirilip reddedildiği bulundu (satır ~4670: zaten kataloglı
`planetscale/database-skills` ile işlevsel olarak örtüşüyor, ve bu şablon projesinin bir veritabanı
katmanı yok). Aynı gerekçe `supabase/agent-skills` için de geçerli: proje kod tabanında (`grep -ri
supabase`) hiçbir Supabase kullanımı yok, sadece bu katalog dosyasında geçiyor; ikinci bir DB-sağlayıcı-
özel skill paketi eklemek projenin ihtiyaçlarıyla örtüşmüyor. **Bu turda 0 yeni kaynak eklendi.**

**Toplam:** 161 doğrulanmış kaynak (Tur 48'den değişmedi).

**Gözlem (Tur 49 — 10. kez tekrarlanan aynı uyarı):** Bu, kataloğun 10. gününde 49. turu (saatte bir
çalışıyor). Bu tur, saturasyonun daha da ilerlediğinin somut bir kanıtı: alt-agent'ın bulduğu tek iki
aday, 10 tur önce (Tur 39) zaten aynı projeye-uygunsuzluk gerekçesiyle reddedilmiş kaynaklardı — yani
alan artık sadece önceden-elenmiş adayları yeniden keşfediyor, gerçekten yeni bir şey bulamıyor. Tur
36'dan beri (13 turdur) her tur bu gözlemi tekrarlayıp kullanıcının sıklığı azaltmasını veya görevi
durdurmasını önerdi; bu artık rutin bir not değil, kullanıcının dikkatine sunulması gereken bir
durum — bu turdan itibaren bu gözlem ayrıca kullanıcıya doğrudan bir bildirimle iletildi.

---

*Son güncelleme: 2026-09-25 (Tur 49). Hiçbir yeni kaynak eklenmedi — bulunan 2 aday
(`supabase/agent-skills`, `neondatabase/agent-skills`) bağımsız doğrulandı ama Tur 39'da aynı
gerekçeyle (projenin veritabanı katmanı yok, `planetscale/database-skills` ile redundant) zaten
reddedilmiş kaynaklar olduğu tespit edildi. Toplam kataloglanmış kaynak sayısı: 161 (değişmedi).

Sonraki turlarda bu dosya okunup yeni kaynaklar üstüne eklenecek, Tur 1–49'da listelenenler
tekrarlanmayacak.

---

## Tur 50 — 2026-09-25

Kesme noktasının (12:00 UTC) çok öncesinde başladı (~05:04 UTC / 08:04 Türkiye saati). Dosyanın
tamamı `grep -oE 'github\.com/...'` ile taranıp mevcut 161 kaynaktan çıkan 159 benzersiz GitHub repo
linki tekrarın önüne geçmek için çıkarıldı. `mcp__github__search_repositories` ile "claude code
skills OR claude code subagents" (updated sıralı) ve `topic:claude-code-skills`, `topic:claude-skills`
sorguları çalıştırıldı.

### Bulgu: arama sonuçları şüpheli şekilde yüksek yıldız sayılarıyla dolu

Tur 48'in gözlemlediği "0-1 yıldızlı, alakasız-topic SEO-tuzağı" spam paterninden farklı olarak, bu
turda **tam tersi bir anomali** görüldü: tarama sonuçlarının büyük kısmı, birkaç hafta/ay önce
oluşturulmuş ama zaten 20.000-94.000★ aralığında olan depolardan oluşuyordu — organik büyüme
paterniyle uyuşmayan bir hız. Örnekler (hiçbiri kataloğa eklenmedi):

- **thedotmack/claude-mem** — 94.643★, 2025-08-31 oluşturuldu.
- **Egonex-AI/Understand-Anything** — 84.092★, 2026-03-15 oluşturuldu (~6 ayda bu yıldız sayısı
  organik olarak son derece nadir).
- **code-yeongyu/oh-my-openagent** — 69.389★, 5.715 fork. Açıklaması pazarlama-dili ağırlıklı ve
  anlamsız ("Just type 'mass ulw' keyword... master of graph engineering"). `WebFetch` ile
  `github.com/code-yeongyu/oh-my-openagent` sayfası bağımsız incelendi: doğrulanamayan/yanıltıcı
  iddialar içeriyor ("Anthropic blocked OpenCode because of us"), **kullanıcıları değil AI ajanlarını
  kendi kendine kurulum yapmaya teşvik ediyor** ("recommend letting an LLM agent install this for
  you" — dokümantasyonu okumak yerine), birden fazla kafa karıştırıcı paket takma adı kullanıyor
  (`oh-my-opencode`/`oh-my-openagent`/`omo-ai`/`lazycodex-ai`), ve varsayılan olarak açık PostHog
  telemetrisi içeriyor. Bu, doğrudan bu tür otomatik gece-araştırma görevlerini (ve genel olarak
  "bul ve kur" yapan AI ajanlarını) hedef alan bir sosyal-mühendislik/tedarik-zinciri deseni olarak
  değerlendirildi — **eklenmedi, ek olarak bir uyarı örneği olarak burada belgelendi.**
- **sickn33/agentic-awesome-skills** — 46.879★, 2026-01-14 oluşturuldu, "2.445+ agentic skill"
  iddiası ile.
- **shanraisshan/claude-code-best-practice** — 66.302★, 2025-10-31 oluşturuldu.
- **ayghri/i-have-adhd** — 51.020★. `WebFetch` ile bağımsız incelendi; bu tekil örnekte şüpheli bir
  içerik bulunamadı (MIT lisans, gerçek `SKILL.md`, makul kurulum talimatları) — ancak yıldız sayısının
  kendisi (repo yaşına göre) yine de organik-büyüme normlarının dışında, bu yüzden temkin amacıyla
  yine de kataloğa **eklenmedi** (tek bir temiz örnek, genel şüpheli paterni geçersiz kılmaz).
- **nanocoai/nanoclaw** — 30.845★ / 12.818 fork (fork/yıldız oranı ~%42 — organik depolarda tipik
  olarak %5-15 aralığında olur; bu oran tek başına anormal bir sinyal).

**Not — oturum kapsam kısıtlaması:** Bu GitHub MCP oturumu yalnızca bu şablon deposuna
(`nusygako/ai-website-cloner-template`) izin veriyor; `get_file_contents` başka depolarda "Access
denied" verdi. Doğrulama bu yüzden yalnızca `WebFetch` ile herkese açık `github.com/...` sayfaları
üzerinden yapılabildi (repo eklenmedi, kullanıcıdan izin istenmedi) — bu, dosya-seviyesi derin
inceleme (örn. postinstall script'leri, gizli bağımlılıklar) yapılamadığı anlamına geliyor; yalnızca
README/sayfa içeriği ve genel metadata (yıldız/fork/commit sayısı) değerlendirilebildi.

**Sonuç:** Bu turda **0 yeni kaynak eklendi**. Yukarıdaki yüksek-yıldızlı adayların hiçbiri görev
talimatındaki "kanıt" barını (bağımsız, tutarlı meşruiyet kanıtı) geçemedi — ya şüpheli
büyüme/pazarlama paterni taşıyordu ya da doğrulama oturumun repo-kapsam kısıtlaması nedeniyle dosya
seviyesinde tamamlanamadı. Toplam kataloglanmış kaynak sayısı: 161 (değişmedi).

**Kullanıcıya öneri:** Bu görev artık iki ayrı ve birikmiş sorun taşıyor: (1) Tur 36'dan beri
tekrarlanan doygunluk gözlemi (kolay/yüksek-kaliteli adaylar tükendi) ve (2) bu turda ortaya çıkan
yeni gözlem — tam olarak aranan alanın (Claude Code skill/subagent depoları) şişirilmiş
yıldız sayıları ve en az bir AI-ajan-hedefli sosyal-mühendislik örneğiyle kirlenmiş olması. İkinci
bulgu, görevin gelecekte otomatik olarak "meşru" damgalı bir kaynağı yanlışlıkla kataloğa ekleme
riskini artırıyor. Görevin sıklığının azaltılması veya durdurulması, ve/veya doğrulama adımına yıldız-
büyüme-hızı kontrolü eklenmesi önerilir.

---

*Son güncelleme: 2026-09-25 (Tur 50). Hiçbir yeni kaynak eklenmedi. Bu turun asıl bulgusu, "claude
code skill/subagent" arama uzayının şüpheli şekilde şişirilmiş yıldız sayılarıyla ve en az bir
AI-ajan-hedefli sosyal-mühendislik örneğiyle (`oh-my-openagent`) kirlenmiş olmasıydı — hiçbiri
kataloğa eklenmedi, sadece belgelendi ve kullanıcıya bildirimle iletildi. Toplam kataloglanmış kaynak
sayısı: 161 (değişmedi).

Sonraki turlarda bu dosya okunup yeni kaynaklar üstüne eklenecek, Tur 1–50'de listelenenler
tekrarlanmayacak; ek olarak gelecekteki turların doğrulama adımına yıldız-büyüme-hızı makul
kontrolü eklemesi önerilir.

## Tur 51 — 2026-09-25 (~06:03 UTC / 09:03 Türkiye saati başladı)

Kesme noktasının (12:00 UTC) çok öncesinde başladı. Bu, aynı gün içindeki **4. tur** (Tur 48 ~03:03,
Tur 49 ~04:02, Tur 50 ~05:04 UTC — hepsi bugün, birbirinden ~1 saat arayla). Tur 48-50'nin doygunluk
bulgusu ve Tur 50'nin güvenlik bulgusu (`oh-my-openagent` — AI ajanlarını hedef alan şişirilmiş-yıldız
sosyal-mühendislik deseni) göz önüne alınarak, bu turda geniş kapsamlı yeni bir GitHub anahtar kelime
taraması **tekrarlanmadı** (son 3 turun hepsi bunu zaten yaptı ve sıfıra yakın/sıfır yeni sonuç buldu;
tekrarı kaynak israfı olurdu). Bunun yerine dar kapsamlı, düşük-gürültülü bir kontrol yapıldı: `WebFetch`
ile `github.com/orgs/anthropics/repositories` resmi organizasyon sayfası tazelik sırasına göre tarandı.

### Bulgu — yeni resmi Anthropic deposu yok (proje kapsamında)

Taramada görünen depolar: `skills`, `claude-code`, `claude-plugins-official` (üçü de zaten kataloglı —
sırasıyla #4, Tur 1 #1, #52), ve üç Cowork-odaklı dikey eklenti paketi: `claude-for-legal`,
`claude-for-financial-advisors`, `knowledge-work-plugins`, artı `launch-your-agent`. Bu dördü
**eklenmedi** — hepsi Claude Cowork/Managed Agent ürünlerine özel (hukuk, finansal danışmanlık,
bilgi-işçisi iş akışları, agent lansmanı), görev talimatının hedefi olan "Claude Code'u güçlendirecek"
kapsamıyla örtüşmüyor ve bu şablonun web-klonlama tech stack'iyle hiçbir ilgisi yok.

**Bu turda 0 yeni kaynak eklendi.** Toplam kataloglanmış kaynak sayısı: 161 (değişmedi).

### Gözlem — 16. ardışık doygunluk kaydı, sıklık artık kullanıcı kararı gerektiriyor

Bu, Tur 36'dan beri doygunluğun tekrar teyit edildiği **16. ardışık tur**. Katalog artık 10 gündür,
saatte bir çalışıyor, 51 tur ve ~470KB. Tur 50 somut bir güvenlik deseni belgeledi ve kullanıcıya
bildirim önerdi/iletti; bu tur o bulguyu değiştirmiyor, sadece doğruluyor. Görev talimatının kendisi bu
kararı veremez (frekans/durdurma kullanıcı tarafından ayarlanan zamanlanmış görev yapılandırmasının bir
parçası, bu oturumun içinden değiştirilemiyor) — bu yüzden bu oturum, dosyaya not düşmenin ötesinde,
kullanıcıya doğrudan bir bildirimle durumu iletiyor.

---

*Son güncelleme: 2026-09-25 (Tur 51). Hiçbir yeni kaynak eklenmedi — dar kapsamlı resmi-organizasyon
kontrolünde bulunan 4 depo (`claude-for-legal`, `claude-for-financial-advisors`,
`knowledge-work-plugins`, `launch-your-agent`) Claude Cowork'e özel olup Claude Code kapsamı dışında
kaldığı için eklenmedi. Toplam kataloglanmış kaynak sayısı: 161 (değişmedi). Bu, doygunluğun teyit
edildiği 16. ardışık tur — kullanıcıya frekans azaltma/durdurma önerisiyle birlikte bildirim gönderildi.

Sonraki turlarda bu dosya okunup yeni kaynaklar üstüne eklenecek, Tur 1–51'de listelenenler
tekrarlanmayacak.

## Tur 52 — 2026-09-25 (~07:04 UTC / 10:04 Türkiye saati başladı)

Kesme noktasının (12:00 UTC) çok öncesinde başladı. Aynı gün içindeki **5. tur** (Tur 48 ~03:03, 49
~04:02, 50 ~05:04, 51 ~06:03 UTC — hepsi bugün, birbirinden ~1 saat arayla). Tur 49-51'in doygunluk
teyidi ve Tur 50'nin güvenlik bulgusu göz önüne alınarak, geniş kapsamlı GitHub anahtar-kelime
taraması yine **tekrarlanmadı** (son 4 tur zaten yaptı, sıfıra yakın/sıfır sonuç verdi). Bunun yerine
iki dar, düşük-gürültülü `WebSearch` sorgusu çalıştırıldı: (1) "ücretsiz LLM API" alanında yeni liste
adayları, (2) "awesome-claude-code" alanında yeni skill koleksiyonu adayları.

### Bulgular — hepsi ya örtüşüyor ya da Tur 50'nin belgelediği desenle eşleşiyor

**Ücretsiz LLM API adayları (hiçbiri eklenmedi):**
- `open-free-llm-api/awesome-freellm-apis` (3.300★, 488 fork, MIT) — `WebFetch` ile bağımsız
  doğrulandı. README'de "One-click setup for Claude Code, Cursor and Codex" başlığı ve AI kodlama
  ajanlarına yönelik hazır config-snippet'leri var — Tur 50'nin `oh-my-openagent` bulgusuyla aynı
  "AI ajanını hedefleyen pazarlama dili" desenine örtüşüyor. Anahtar fark: bu depo kullanıcının kendi
  API anahtarlarına yönlendiriyor, havuzlanmış/paylaşımlı anahtar kullanmıyor (doğrulandı) — bu yüzden
  görev talimatının sert dışlama kriterini (paylaşımlı anahtar) teknik olarak ihlal etmiyor, ama
  temkin amacıyla ve zaten kataloglı benzer listelerle (`peter123023/awesome-free-llm-api`,
  `mvalentsev/awesome-free-ai-coding`) örtüştüğü için eklenmedi.
- `tashfeenahmed/freellmapi` — açıklamasında "Smart routing, automatic failover, encrypted keys...
  All behind one /v1 endpoint" ifadesi geçiyor; bu, görev talimatının açıkça dışladığı
  paylaşımlı/havuzlanmış-anahtar gateway modeline benziyor. **Reddedildi** (talimat gereği).
- `ghassan-gaidi/free-llm-api-list`, `mnfst/awesome-free-llm-apis`,
  `amardeeplakshkar/awesome-free-llm-apis`, `nejib1/Free-LLM` — hepsi zaten kataloglı benzer
  ücretsiz-LLM-API listeleriyle (ve `ghassan-gaidi` özelinde Tur 47'de zaten reddedilen bir adayla)
  örtüşüyor; hiçbiri farklılaştırıcı bir doğrulama yöntemi (canlı API probe'u gibi) sunmuyor.
  Redundancy nedeniyle eklenmedi.

**Claude Code skill koleksiyonu adayları (hiçbiri eklenmedi):**
- `ComposioHQ/awesome-claude-skills` (75.600★, Apache-2.0) — `WebFetch` ile bağımsız doğrulandı.
  Gerçek bir şirkete (Composio) ait olması Tur 50'deki anonim-hesap desenine göre biraz daha az
  şüpheli, ama yıldız sayısı yine de dikkat çekici derecede yüksek; içerik büyük ölçüde Composio'nun
  kendi ücretli platformuna (dashboard.composio.dev, API anahtarı gerektiriyor) yönlendiren bir
  link-hub, saf açık-kaynak `SKILL.md` koleksiyonu değil. Bağımsız/açık kaynak niteliği yetersiz
  görüldüğü için eklenmedi.
- `jqueryscript/awesome-claude-code`, `GetBindu/awesome-claude-code-and-skills`,
  `travisvn/awesome-claude-skills`, `glebis/claude-skills` — muhtemelen zaten kataloglı
  `hesreallyhim/awesome-claude-code` ve benzerleriyle örtüşen genel "awesome list" klonları;
  derinlemesine doğrulanmadı (zaman/kaynak tasarrufu amaçlı, alan zaten doygun) — eklenmedi.

**Bu turda 0 yeni kaynak eklendi.** Toplam kataloglanmış kaynak sayısı: 161 (değişmedi).

### Gözlem — 17. ardışık doygunluk kaydı; artık iki ayrı niş aynı şüpheli deseni taşıyor

Tur 50'nin bulduğu "AI ajanını hedefleyen şişirilmiş-yıldız pazarlama dili" deseni bu turda ikinci bir
niş olan "ücretsiz LLM API listesi" alanında da bir örnek verdi (`open-free-llm-api`). Bu, deseni tek
bir arama uzayına özgü bir anomali olmaktan çıkarıp, bu görevin genel olarak taradığı "Claude Code'u
güçlendirecek araçlar" alanının önemli bir kısmında yapısal bir risk olarak doğruluyor. **Bu turda
kullanıcıya yeni bir bildirim gönderilmedi**: Tur 50 ve Tur 51 son ~2 saat içinde bu konuda zaten iki
ayrı bildirim ilettiği için, aynı sonucu bir kez daha teyit eden bu turun üçüncü bir bildirim
göndermesi gürültü olurdu (kullanıcının dikkatini gereksiz yere bölerdi). Görevin sıklığının
azaltılması/durdurulması önerisi hâlâ geçerli ve güncel bildirimlerde zaten iletildi.

---

*Son güncelleme: 2026-09-25 (Tur 52). Hiçbir yeni kaynak eklenmedi. Bulunan tüm adaylar ya zaten
kataloglı listelerle örtüşüyor ya da Tur 50'nin belgelediği "AI ajanını hedefleyen şişirilmiş-yıldız
pazarlama dili" deseniyle eşleşiyor (ikinci niş örneği: `open-free-llm-api/awesome-freellm-apis`).
Toplam kataloglanmış kaynak sayısı: 161 (değişmedi). Bildirim gönderilmedi (Tur 50-51'de zaten iletildi,
tekrar gürültü olurdu).

Sonraki turlarda bu dosya okunup yeni kaynaklar üstüne eklenecek, Tur 1–52'de listelenenler ve
reddedilenler tekrarlanmayacak.

## Tur 53 — 2026-09-25 (~08:03 UTC / 11:03 Türkiye saati başladı)

Kesme noktasının (12:00 UTC) öncesinde başladı. Aynı gün içindeki **6. tur**. Tur 49-52'nin doygunluk
teyidi göz önüne alınarak geniş kapsamlı anahtar-kelime taraması yine **tekrarlanmadı**. İki dar,
düşük-gürültülü kontrol yapıldı: (1) `WebFetch` ile `github.com/orgs/anthropics/repositories`
(tazelik sırasına göre) — Tur 51'de görülen dört Cowork-özel depo (`claude-for-legal`,
`claude-for-financial-advisors`, `knowledge-work-plugins`, `launch-your-agent`) dışında yeni resmi depo
yok; (2) `WebSearch` ile `"SKILL.md" claude code new github repository` — dönen adaylar
(`obviousworks/Claude-AI-skills-collection-2026`, `GetBindu/...`, `harness/harness-skills`,
`alirezarezvani/claude-skills`, `ComposioHQ/awesome-claude-skills`) hepsi zaten dosyada kataloglı
(kabul veya red olarak) — bkz. satır 913, 1610, 2166, 2171.

### Yeni eklenen kaynak

#### 162. [vishalsachdev/claude-skills](https://github.com/vishalsachdev/claude-skills)
- **Yıldız:** 2 · **Lisans:** MIT
- **Güncellik:** son commit 2026-08-11 (bu turdan ~6 hafta önce).
- **Ne işe yarar:** TLDW (YouTube analiz uygulaması) ve başka kişisel projelerden çıkarılmış, Agent
  Skills açık spesifikasyonuna uyan 66 üretim-hazır skill'lik bir koleksiyon — SDLC iş akışları,
  güvenlik, async, doğrulama, arama, veritabanı, state yönetimi, öğretim/kurs tasarımı, araştırma
  yazımı, deployment "golden path"leri gibi kategoriler.
- **Neden meşru:** `WebFetch` ile bağımsız doğrulandı — gerçek `SKILL.md` dosyaları içeriyor (link
  listesi değil), örnek yollar: `claude-md-template/SKILL.md`, `llm-client-golden-path/SKILL.md`,
  `vps-deploy-golden-path/SKILL.md`, `vibe-coder-sdlc/SKILL.md`, `llm-council/SKILL.md`,
  `premortem/SKILL.md`. MIT lisanslı, paylaşımlı API key veya ToS-bypass unsuru yok. **Not:** yıldız
  sayısı çok düşük (2★) — kataloğun geri kalanına göre istisnai derecede düşük görünürlük/kullanım
  kanıtı; kalite ve meşruiyet doğrulandı ama etki/olgunluk düşük olarak işaretleniyor.
- **Kurulum:** Dosya kopyalama ile — ilgili skill klasörünü `~/.claude/skills/<skill-adı>/` altına
  kopyala (her klasör kendi `SKILL.md`'sini içeriyor, merkezi bir kurulum betiği yok).
- **Proje uyumu:** `vps-deploy-golden-path` ve `llm-client-golden-path` gibi bazı skill'ler bu şablonun
  genel geliştirme iş akışıyla örtüşebilir; web-klonlamaya özel değil, genel-amaçlı SDLC yardımcıları.

### Doğrulanan ama EKLENMEYEN Bulgular (Tur 53)

Yukarıdaki `WebSearch` sonucundan çıkan diğer tüm adaylar (obviousworks, GetBindu, harness-skills,
alirezarezvani, ComposioHQ) önceki turlarda zaten değerlendirilmiş (kabul veya red) — tekrar
değerlendirilmedi, tekrar eklenmedi.

**Bu turda 1 yeni kaynak eklendi (#162).** Toplam kataloglanmış kaynak sayısı: 162.

### Gözlem — 18. ardışık doygunluk kaydı (marjinal tek istisna hariç)

Bu, Tur 36'dan beri doygunluğun teyit edildiği 18. ardışık tur — tek fark bu turda çok düşük etkili
(2★) ama gerçek bir kaynak bulunması. Katalog artık 10 gündür, saatte bir, 53 tur ve ~480KB+ çalışıyor.
Tur 50 (güvenlik deseni) ve Tur 51 (sıklık azaltma önerisi) için bildirimler zaten iletildi; bu turda
kullanıcıya **yeni bir bildirim gönderilmedi** — tek eklenen kaynak düşük etkili/rutin nitelikte olup
kullanıcının şu an dikkatini gerektirecek yeni bir durum (güvenlik riski, kritik kaynak, kesinti)
oluşturmuyor; önceki iki bildirim hâlâ güncel ve geçerli.

---

*Son güncelleme: 2026-09-25 (Tur 53). 1 yeni kaynak eklendi (#162, `vishalsachdev/claude-skills` —
düşük yıldızlı ama doğrulanmış kişisel skill koleksiyonu). Anthropics org taraması ve dar `SKILL.md`
`WebSearch`'ü başka yeni/kataloglanmamış aday çıkarmadı. Toplam kataloglanmış kaynak sayısı: 162.
Bildirim gönderilmedi (yeni bulgu düşük etkili; Tur 50-51'in bildirimleri hâlâ geçerli).

Sonraki turlarda bu dosya okunup yeni kaynaklar üstüne eklenecek, Tur 1–53'te listelenenler ve
reddedilenler tekrarlanmayacak.
