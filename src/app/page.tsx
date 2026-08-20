import Link from "next/link";
import { HeroSlideshow } from "@/components/sites/toptan16ayakkabidunyasi-com-1d902824/home/HeroSlideshow";
import { CampaignSection } from "@/components/sites/toptan16ayakkabidunyasi-com-1d902824/home/CampaignSection";
import { StyleShowcase } from "@/components/sites/toptan16ayakkabidunyasi-com-1d902824/home/StyleShowcase";
import { FeaturesSection } from "@/components/sites/toptan16ayakkabidunyasi-com-1d902824/home/FeaturesSection";
import { BentoShowcase } from "@/components/sites/toptan16ayakkabidunyasi-com-1d902824/home/BentoShowcase";
import { BrandMarquee } from "@/components/sites/toptan16ayakkabidunyasi-com-1d902824/home/BrandMarquee";
import { DealsCountdown } from "@/components/sites/toptan16ayakkabidunyasi-com-1d902824/home/DealsCountdown";
import { ProductCard } from "@/components/sites/toptan16ayakkabidunyasi-com-1d902824/shared/ProductCard";
import { products, getCollectionProducts } from "@/lib/sites/toptan16ayakkabidunyasi-com-1d902824/data";
import type { Product } from "@/types/toptan16";

function ProductGridSection({
  title,
  href,
  items,
}: {
  title: string;
  href: string;
  items: Product[];
}) {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-12 md:px-8">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="font-heading text-[28px] font-semibold text-[#121212] md:text-[32px]">
          {title}
        </h2>
        <Link
          href={href}
          className="text-sm font-medium text-[#121212] underline underline-offset-4 hover:text-[#14B8A6]"
        >
          Tümünü görüntüle
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const bestSellers = getCollectionProducts("cok-satanlar").slice(0, 6);
  const bestSellerHandles = new Set(bestSellers.map((p) => p.handle));
  const popular = products
    .filter((p) => !bestSellerHandles.has(p.handle))
    .slice(0, 6);
  const deals = products.filter((p) => p.compareAtPrice != null).slice(0, 4);

  return (
    <>
      <HeroSlideshow />
      <CampaignSection />
      <BentoShowcase />
      <DealsCountdown deals={deals} />
      <BrandMarquee />
      <ProductGridSection
        title="En Çok Satanlar"
        href="/collections/cok-satanlar"
        items={bestSellers}
      />
      <ProductGridSection
        title="Popüler Ürünler"
        href="/collections/tum-ayakkabilar"
        items={popular}
      />
      <StyleShowcase />
      <FeaturesSection />
    </>
  );
}
