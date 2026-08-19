"use client";

import { useMemo, useState } from "react";
import {
  CollectionToolbar,
  type StockFilter,
  type PriceFilter,
  type AppliedChip,
} from "./CollectionToolbar";
import { ProductCard } from "../shared/ProductCard";
import type { Product } from "@/types/toptan16";

function sortProducts(products: Product[], sortValue: string): Product[] {
  const list = [...products];
  switch (sortValue) {
    case "alpha-asc":
      return list.sort((a, b) => a.title.localeCompare(b.title, "tr"));
    case "alpha-desc":
      return list.sort((a, b) => b.title.localeCompare(a.title, "tr"));
    case "price-asc":
      return list.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
    case "price-desc":
      return list.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
    case "date-old":
      return list.sort((a, b) => a.id - b.id);
    case "date-new":
      return list.sort((a, b) => b.id - a.id);
    default:
      return list;
  }
}

function filterProducts(
  products: Product[],
  stockFilter: StockFilter,
  priceFilter: PriceFilter,
  sizeFilter: string[],
): Product[] {
  const min = priceFilter.min ? Number(priceFilter.min) : null;
  const max = priceFilter.max ? Number(priceFilter.max) : null;
  const stockActive = stockFilter.inStock || stockFilter.outOfStock;

  return products.filter((product) => {
    if (stockActive) {
      const inStock = product.variants.some((v) => v.available);
      const matchesStock =
        (stockFilter.inStock && inStock) || (stockFilter.outOfStock && !inStock);
      if (!matchesStock) return false;
    }
    if (min !== null && (product.price ?? 0) < min) return false;
    if (max !== null && (product.price ?? 0) > max) return false;
    if (sizeFilter.length > 0) {
      const hasSize = product.variants.some(
        (v) => v.size && sizeFilter.includes(v.size),
      );
      if (!hasSize) return false;
    }
    return true;
  });
}

function collator(a: string, b: string) {
  const na = Number(a);
  const nb = Number(b);
  if (!Number.isNaN(na) && !Number.isNaN(nb)) return na - nb;
  return a.localeCompare(b, "tr");
}

export function CollectionView({ products }: { products: Product[] }) {
  const [sortValue, setSortValue] = useState("featured");
  const [stockFilter, setStockFilter] = useState<StockFilter>({
    inStock: false,
    outOfStock: false,
  });
  const [priceFilter, setPriceFilter] = useState<PriceFilter>({ min: "", max: "" });
  const [sizeFilter, setSizeFilter] = useState<string[]>([]);

  const availableSizes = useMemo(() => {
    const sizes = new Set<string>();
    for (const product of products) {
      for (const variant of product.variants) {
        if (variant.size) sizes.add(variant.size);
      }
    }
    return Array.from(sizes).sort(collator);
  }, [products]);

  const filtered = useMemo(
    () => filterProducts(products, stockFilter, priceFilter, sizeFilter),
    [products, stockFilter, priceFilter, sizeFilter],
  );
  const sorted = useMemo(
    () => sortProducts(filtered, sortValue),
    [filtered, sortValue],
  );

  function clearAll() {
    setStockFilter({ inStock: false, outOfStock: false });
    setPriceFilter({ min: "", max: "" });
    setSizeFilter([]);
  }

  const appliedChips: AppliedChip[] = [
    ...sizeFilter.map((size) => ({
      key: `size-${size}`,
      label: `Numara: ${size}`,
      onRemove: () => setSizeFilter((cur) => cur.filter((s) => s !== size)),
    })),
    ...(stockFilter.inStock
      ? [
          {
            key: "stock-in",
            label: "Stokta var",
            onRemove: () => setStockFilter((f) => ({ ...f, inStock: false })),
          },
        ]
      : []),
    ...(stockFilter.outOfStock
      ? [
          {
            key: "stock-out",
            label: "Stokta yok",
            onRemove: () => setStockFilter((f) => ({ ...f, outOfStock: false })),
          },
        ]
      : []),
    ...(priceFilter.min
      ? [
          {
            key: "price-min",
            label: `Min: ${priceFilter.min}TL`,
            onRemove: () => setPriceFilter((f) => ({ ...f, min: "" })),
          },
        ]
      : []),
    ...(priceFilter.max
      ? [
          {
            key: "price-max",
            label: `Maks: ${priceFilter.max}TL`,
            onRemove: () => setPriceFilter((f) => ({ ...f, max: "" })),
          },
        ]
      : []),
  ];

  return (
    <div>
      <CollectionToolbar
        productCount={sorted.length}
        sortValue={sortValue}
        onSortChange={setSortValue}
        stockFilter={stockFilter}
        onStockFilterChange={setStockFilter}
        priceFilter={priceFilter}
        onPriceFilterChange={setPriceFilter}
        availableSizes={availableSizes}
        sizeFilter={sizeFilter}
        onSizeFilterChange={setSizeFilter}
        appliedChips={appliedChips}
        onClearAll={clearAll}
      />

      {sorted.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-20 text-center">
          <p className="text-base text-[#121212]">
            {products.length === 0
              ? "Bu koleksiyonda henüz ürün bulunmuyor."
              : "Seçtiğiniz filtrelere uygun ürün bulunamadı."}
          </p>
          {appliedChips.length > 0 && (
            <button
              type="button"
              onClick={clearAll}
              className="rounded-full bg-[#121212] px-6 py-3 text-sm font-bold text-white"
            >
              Filtreleri Temizle
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 py-8 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {sorted.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
