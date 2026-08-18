import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProductGallery } from "@/components/sites/toptan16ayakkabidunyasi-com-1d902824/product/ProductGallery";
import { ProductBuyBox } from "@/components/sites/toptan16ayakkabidunyasi-com-1d902824/product/ProductBuyBox";
import { ProductReviews } from "@/components/sites/toptan16ayakkabidunyasi-com-1d902824/product/ProductReviews";
import {
  products,
  getProduct,
  getColorSiblings,
} from "@/lib/sites/toptan16ayakkabidunyasi-com-1d902824/data";

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

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-8 md:px-8">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[45%_1fr] lg:gap-16">
        <ProductGallery images={product.images} title={product.title} />
        <ProductBuyBox product={product} colorOptions={colorOptions} />
      </div>

      <div className="mt-16 border-t border-[rgba(18,18,18,0.1)] pt-12">
        <ProductReviews productTitle={product.title} />
      </div>
    </div>
  );
}
