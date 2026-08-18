"use client";

import { useMemo, useState } from "react";
import {
  CollectionToolbar,
  type StockFilter,
  type PriceFilter,
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
    return true;
  });
}

export function CollectionView({ products }: { products: Product[] }) {
  const [sortValue, setSortValue] = useState("featured");
  const [stockFilter, setStockFilter] = useState<StockFilter>({
    inStock: false,
    outOfStock: false,
  });
  const [priceFilter, setPriceFilter] = useState<PriceFilter>({ min: "", max: "" });

  const filtered = useMemo(
    () => filterProducts(products, stockFilter, priceFilter),
    [products, stockFilter, priceFilter],
  );
  const sorted = useMemo(
    () => sortProducts(filtered, sortValue),
    [filtered, sortValue],
  );

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
      />

      {sorted.length === 0 ? (
        <div className="flex flex-col items-center gap-2 py-20 text-center">
          <p className="text-base text-[#121212]">
            Bu koleksiyonda henüz ürün bulunmuyor.
          </p>
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
