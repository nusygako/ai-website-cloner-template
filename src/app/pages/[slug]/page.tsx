import { notFound } from "next/navigation";
import type { Metadata } from "next";

const LEGAL_PAGES: Record<string, { title: string; body: string[] }> = {
  "teslimat-kosullari": {
    title: "Teslimat Koşulları",
    body: [
      "Siparişleriniz, ödeme onayının ardından en kısa sürede hazırlanarak anlaşmalı kargo firmalarımıza teslim edilir.",
      "Teslimat süresi, siparişin verildiği bölgeye göre değişmekle birlikte ortalama 2-5 iş günü arasındadır.",
      "2500₺ ve üzeri siparişlerde kargo ücreti tarafımızca karşılanır.",
      "Kargonuz size ulaştığında paketi teslim almadan önce hasar kontrolü yapmanızı öneririz.",
    ],
  },
  "uyelik-sozlesmesi": {
    title: "Üyelik Sözleşmesi",
    body: [
      "İşbu üyelik sözleşmesi, sitemize üye olan kullanıcıların hak ve yükümlülüklerini düzenler.",
      "Üyelik işlemleri sırasında verdiğiniz bilgilerin doğru ve güncel olmasından siz sorumlusunuz.",
      "Üyelik hesabınızın güvenliğinden ve hesabınız üzerinden gerçekleştirilen işlemlerden siz sorumlusunuz.",
    ],
  },
  "satis-sozlesmesi": {
    title: "Satış Sözleşmesi",
    body: [
      "Bu sözleşme, sitemiz üzerinden gerçekleştirdiğiniz alışverişlere ilişkin satıcı ve alıcı arasındaki hak ve yükümlülükleri kapsar.",
      "Sipariş onayı ile birlikte alıcı, sözleşme koşullarını kabul etmiş sayılır.",
      "Ürün bedelleri ve varsa kargo ücretleri sipariş sırasında açıkça belirtilir.",
    ],
  },
  kvkk: {
    title: "KVKK Aydınlatma Metni",
    body: [
      "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel verileriniz, yalnızca sipariş ve üyelik süreçlerinin yürütülmesi amacıyla işlenmektedir.",
      "Kişisel verileriniz, yasal zorunluluklar dışında üçüncü taraflarla paylaşılmaz.",
      "KVKK kapsamındaki haklarınızı kullanmak için bizimle info@showroomayakkabi.com adresinden iletişime geçebilirsiniz.",
    ],
  },
  "garanti-ve-iade-kosullari": {
    title: "Garanti ve İade Koşulları",
    body: [
      "Ürünlerimizi teslim aldığınız tarihten itibaren 14 gün içinde, kullanılmamış ve orijinal ambalajında olması koşuluyla iade edebilirsiniz.",
      "İade talepleriniz için müşteri hizmetlerimizle iletişime geçmeniz yeterlidir.",
      "Değişim talep etmeniz halinde, uygun beden/renk stok durumuna göre değişim işleminiz gerçekleştirilir.",
    ],
  },
  "gizlilik-ve-guvenlik": {
    title: "Gizlilik ve Güvenlik",
    body: [
      "Sitemizde yapılan tüm ödeme işlemleri 256-bit SSL sertifikası ile şifrelenerek güvenli altyapı üzerinden gerçekleştirilir.",
      "Kişisel bilgileriniz üçüncü şahıslarla izniniz olmadan paylaşılmaz.",
      "Sitemizi kullanarak bu gizlilik politikasını kabul etmiş sayılırsınız.",
    ],
  },
  etk: {
    title: "Elektronik Ticaret Kanunu (ETK) Bilgilendirmesi",
    body: [
      "6563 sayılı Elektronik Ticaretin Düzenlenmesi Hakkında Kanun kapsamında, sitemiz üzerinden yapılan tüm satışlarda tüketici hakları korunmaktadır.",
      "Ticari elektronik iletiler, yalnızca onayınız doğrultusunda tarafınıza gönderilir.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(LEGAL_PAGES).map((slug) => ({ slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = LEGAL_PAGES[slug];
  if (!page) return {};
  return { title: page.title };
}

export default async function LegalPage({ params }: PageProps) {
  const { slug } = await params;
  const page = LEGAL_PAGES[slug];
  if (!page) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-heading text-[28px] font-semibold text-[#121212] md:text-[36px]">
        {page.title}
      </h1>
      <div className="mt-6 flex flex-col gap-4">
        {page.body.map((paragraph, index) => (
          <p
            key={index}
            className="text-[15px] leading-relaxed text-[rgba(18,18,18,0.75)]"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
