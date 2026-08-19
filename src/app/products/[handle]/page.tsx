import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProductGallery } from "@/components/sites/toptan16ayakkabidunyasi-com-1d902824/product/ProductGallery";
import { ProductBuyBox } from "@/components/sites/toptan16ayakkabidunyasi-com-1d902824/product/ProductBuyBox";
import { ProductReviews } from "@/components/sites/toptan16ayakkabidunyasi-com-1d902824/product/ProductReviews";
import {
  products,
  getProduct,
  getColorSiblings,
  formatPrice,
} from "@/lib/sites/toptan16ayakkabidunyasi-com-1d902824/data";
import { getBaselineRating } from "@/lib/sites/toptan16ayakkabidunyasi-com-1d902824/ratings";

const SITE_URL = "https://showroomayakkabi.com";

export function generateStaticParams() {
  return products.map((product) => ({ handle: product.handle }));
}

type PageProps = { params: Promise<{ handle: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { handle } = await params;
  const product = getProduct(handle);
  if (!product) return {};
  return {
    title: product.title,
    description:
      product.description || `${product.title} — uygun fiyatlarla şimdi satın alın.`,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { handle } = await params;
  const product = getProduct(handle);
  if (!product) notFound();

  const colorOptions = getColorSiblings(handle);
  const rating = getBaselineRating(handle);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description || product.title,
    image: product.images.map((img) => `${SITE_URL}${img.src}`),
    sku: String(product.id),
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/products/${product.handle}`,
      priceCurrency: "TRY",
      price: product.price ?? undefined,
      availability: product.variants.some((v) => v.available)
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating.average,
      reviewCount: rating.count,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tüm Ayakkabılar",
        item: `${SITE_URL}/collections/tum-ayakkabilar`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.title,
        item: `${SITE_URL}/products/${product.handle}`,
      },
    ],
  };

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-8 md:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[45%_1fr] lg:gap-16">
        <ProductGallery
          images={product.images}
          title={product.title}
          handle={product.handle}
          price={formatPrice(product.price)}
        />
        <ProductBuyBox product={product} colorOptions={colorOptions} />
      </div>

      <div className="mt-16 border-t border-[rgba(18,18,18,0.1)] pt-12">
        <ProductReviews productHandle={product.handle} productTitle={product.title} />
      </div>
    </div>
  );
}
