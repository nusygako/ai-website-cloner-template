import Link from "next/link";
import { ProductCard } from "@/components/sites/toptan16ayakkabidunyasi-com-1d902824/shared/ProductCard";
import { getCollectionProducts } from "@/lib/sites/toptan16ayakkabidunyasi-com-1d902824/data";

export default function NotFound() {
  const recovery = getCollectionProducts("cok-satanlar").slice(0, 4);

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-20 text-center md:px-8">
      <h1 className="font-heading text-[64px] font-bold text-[#121212] md:text-[96px]">
        404
      </h1>
      <p className="mt-2 text-2xl">👟💨</p>
      <p className="mt-4 text-lg text-[rgba(18,18,18,0.7)]">
        Aradığınız sayfa koşarak kaçmış, bulamadık.
      </p>
      <p className="mt-1 text-sm text-[rgba(18,18,18,0.5)]">
        Ama merak etmeyin, size uyacak başka bir çift kesin vardır.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-[#121212] px-8 py-4 text-sm font-bold text-white"
      >
        Ana Sayfaya Dön
      </Link>

      {recovery.length > 0 && (
        <div className="mt-16 text-left">
          <h2 className="mb-6 text-center font-heading text-2xl font-semibold text-[#121212]">
            Bunun yerine bu ürünlere göz atın
          </h2>
          <div className="grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-4">
            {recovery.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
