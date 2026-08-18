import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CollectionView } from "@/components/sites/toptan16ayakkabidunyasi-com-1d902824/collection/CollectionView";
import {
  collections,
  getCollection,
  getCollectionProducts,
} from "@/lib/sites/toptan16ayakkabidunyasi-com-1d902824/data";

export function generateStaticParams() {
  return collections.map((collection) => ({ handle: collection.handle }));
}

type PageProps = { params: Promise<{ handle: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { handle } = await params;
  const collection = getCollection(handle);
  if (!collection) return {};
  return {
    title: collection.title,
    description:
      collection.description ||
      `${collection.title} kategorisindeki tüm ürünleri inceleyin.`,
  };
}

export default async function CollectionPage({ params }: PageProps) {
  const { handle } = await params;
  const collection = getCollection(handle);
  if (!collection) notFound();

  const collectionProducts = getCollectionProducts(handle);

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-8 md:px-8">
      <h1 className="font-heading text-[28px] font-semibold text-[#121212] md:text-[36px]">
        {collection.title}
      </h1>
      <CollectionView products={collectionProducts} />
    </div>
  );
}
