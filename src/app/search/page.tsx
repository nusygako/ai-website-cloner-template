import { Suspense } from "react";
import { SearchClient } from "./SearchClient";
import { products } from "@/lib/sites/toptan16ayakkabidunyasi-com-1d902824/data";

export const metadata = {
  title: "Arama",
};

export default function SearchPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 py-12 md:px-8">
      <h1 className="mb-8 text-center font-heading text-[28px] font-semibold text-[#121212] md:text-[32px]">
        Ürün Ara
      </h1>
      <Suspense fallback={null}>
        <SearchClient products={products} />
      </Suspense>
    </div>
  );
}
