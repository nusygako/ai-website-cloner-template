"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { ProductCard } from "@/components/sites/toptan16ayakkabidunyasi-com-1d902824/shared/ProductCard";
import type { Product } from "@/types/toptan16";

export function SearchClient({ products }: { products: Product[] }) {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(initialQuery);
  const [prevSearchParams, setPrevSearchParams] = useState(searchParams);

  // Prefill from ?q= when arriving from the header search box. Synced during
  // render (not via useEffect) so this stays compatible with static export,
  // where query strings never reach the server, and avoids the
  // set-state-in-effect anti-pattern.
  if (searchParams !== prevSearchParams) {
    setPrevSearchParams(searchParams);
    if (initialQuery) setQuery(initialQuery);
  }

  const results = useMemo(() => {
    const q = query.trim().toLocaleLowerCase("tr");
    if (!q) return [];
    return products.filter((product) =>
      product.title.toLocaleLowerCase("tr").includes(q),
    );
  }, [products, query]);

  return (
    <div>
      <div className="mx-auto flex max-w-2xl items-center gap-2 rounded-full border border-[rgba(18,18,18,0.2)] px-4 py-3">
        <Search className="h-5 w-5 shrink-0 text-[rgba(18,18,18,0.5)]" />
        <input
          type="text"
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ne aramıştınız?"
          className="w-full bg-transparent text-base text-[#121212] outline-none placeholder:text-[rgba(18,18,18,0.4)]"
        />
      </div>

      {query.trim() === "" ? (
        <p className="mt-10 text-center text-sm text-[rgba(18,18,18,0.5)]">
          Aramaya başlamak için bir ürün adı yazın.
        </p>
      ) : results.length === 0 ? (
        <p className="mt-10 text-center text-sm text-[rgba(18,18,18,0.5)]">
          &quot;{query}&quot; için sonuç bulunamadı.
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-4">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
