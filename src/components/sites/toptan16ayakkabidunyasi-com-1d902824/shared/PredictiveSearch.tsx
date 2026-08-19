"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Flame, Search, TrendingUp, X } from "lucide-react";
import {
  products,
  collections,
  formatPrice,
} from "@/lib/sites/toptan16ayakkabidunyasi-com-1d902824/data";

const POPULAR_SEARCHES = [
  "Adidas Samba",
  "Nike Airmax",
  "Topuklu Ayakkabı",
  "Terlik",
  "Erkek Spor Ayakkabı",
];

const SUGGESTED_PRODUCTS = (() => {
  const onSale = products.filter((p) => p.compareAtPrice != null);
  return (onSale.length > 0 ? onSale : products).slice(0, 4);
})();

const RESULT_LIMIT = 6;

interface PredictiveSearchProps {
  open: boolean;
  onClose: () => void;
}

export function PredictiveSearch({ open, onClose }: PredictiveSearchProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setDebouncedQuery(query), 150);
    return () => window.clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- resets the panel's local state when it closes, not a render-time derivation
      setQuery("");
      setDebouncedQuery("");
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  const q = debouncedQuery.trim().toLocaleLowerCase("tr");

  const productResults = useMemo(() => {
    if (!q) return [];
    return products
      .filter((p) => p.title.toLocaleLowerCase("tr").includes(q))
      .slice(0, RESULT_LIMIT);
  }, [q]);

  const collectionResults = useMemo(() => {
    if (!q) return [];
    return collections
      .filter((c) => c.title.toLocaleLowerCase("tr").includes(q))
      .slice(0, 4);
  }, [q]);

  function goToFullResults() {
    const trimmed = query.trim();
    onClose();
    router.push(trimmed ? `/search?q=${encodeURIComponent(trimmed)}` : "/search");
  }

  if (!open) return null;

  const hasQuery = q.length > 0;
  const hasResults = productResults.length > 0 || collectionResults.length > 0;

  return (
    <div className="fixed inset-0 z-[110]">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Ürün ara"
        className="absolute inset-x-0 top-0 max-h-[85vh] overflow-y-auto rounded-b-2xl bg-white shadow-[0_16px_40px_rgba(0,0,0,0.2)]"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            goToFullResults();
          }}
          className="mx-auto flex max-w-2xl items-center gap-3 px-4 py-5"
        >
          <Search className="h-5 w-5 shrink-0 text-[rgba(18,18,18,0.5)]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ürün, kategori veya marka arayın..."
            className="w-full bg-transparent text-base text-[#121212] outline-none placeholder:text-[rgba(18,18,18,0.4)]"
          />
          <button type="button" aria-label="Aramayı kapat" onClick={onClose}>
            <X className="h-5 w-5 text-[rgba(18,18,18,0.5)]" />
          </button>
        </form>

        <div className="mx-auto max-w-2xl px-4 pb-8">
          {!hasQuery && (
            <div className="flex flex-col gap-6">
              <div>
                <p className="mb-3 flex items-center gap-1.5 text-sm font-bold text-[#121212]">
                  <TrendingUp className="h-4 w-4" /> Popüler Aramalar
                </p>
                <div className="flex flex-wrap gap-2">
                  {POPULAR_SEARCHES.map((term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => setQuery(term)}
                      className="rounded-full bg-[rgba(18,18,18,0.06)] px-3 py-1.5 text-sm text-[#121212] hover:bg-[rgba(18,18,18,0.1)]"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 flex items-center gap-1.5 text-sm font-bold text-[#121212]">
                  <Flame className="h-4 w-4" /> Önerilen Ürünler
                </p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {SUGGESTED_PRODUCTS.map((product) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.handle}`}
                      onClick={onClose}
                      className="group"
                    >
                      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                        {product.images[0] && (
                          <Image
                            src={product.images[0].src}
                            alt={product.images[0].alt || product.title}
                            fill
                            sizes="150px"
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        )}
                      </div>
                      <p className="mt-1.5 truncate text-xs text-[#121212]">
                        {product.title}
                      </p>
                      <p className="text-xs font-bold text-[#121212]">
                        {formatPrice(product.price)}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {hasQuery && !hasResults && (
            <p className="py-10 text-center text-sm text-[rgba(18,18,18,0.5)]">
              &quot;{query}&quot; için sonuç bulunamadı.
            </p>
          )}

          {hasQuery && hasResults && (
            <div className="flex flex-col gap-6">
              {collectionResults.length > 0 && (
                <div>
                  <p className="mb-2 text-sm font-bold text-[#121212]">Kategoriler</p>
                  <div className="flex flex-wrap gap-2">
                    {collectionResults.map((collection) => (
                      <Link
                        key={collection.handle}
                        href={`/collections/${collection.handle}`}
                        onClick={onClose}
                        className="rounded-full border border-[rgba(18,18,18,0.15)] px-3 py-1.5 text-sm text-[#121212] hover:bg-[rgba(18,18,18,0.06)]"
                      >
                        {collection.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {productResults.length > 0 && (
                <div>
                  <p className="mb-2 text-sm font-bold text-[#121212]">Ürünler</p>
                  <div className="flex flex-col divide-y divide-[rgba(18,18,18,0.06)]">
                    {productResults.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.handle}`}
                        onClick={onClose}
                        className="flex items-center gap-3 py-2.5 hover:bg-[rgba(18,18,18,0.03)]"
                      >
                        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md bg-gray-100">
                          {product.images[0] && (
                            <Image
                              src={product.images[0].src}
                              alt={product.images[0].alt || product.title}
                              fill
                              sizes="56px"
                              className="object-cover"
                            />
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm text-[#121212]">
                            {product.title}
                          </p>
                          <p className="text-sm font-bold text-[#121212]">
                            {formatPrice(product.price)}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={goToFullResults}
                    className="mt-3 text-sm font-bold text-[#121212] underline"
                  >
                    Tüm sonuçları gör
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
