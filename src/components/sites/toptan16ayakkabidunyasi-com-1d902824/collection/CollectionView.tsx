"use client";

import { useMemo, useState } from "react";
import { CollectionToolbar } from "./CollectionToolbar";
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

export function CollectionView({ products }: { products: Product[] }) {
  const [sortValue, setSortValue] = useState("featured");
  const sorted = useMemo(
    () => sortProducts(products, sortValue),
    [products, sortValue],
  );

  return (
    <div>
      <CollectionToolbar
        productCount={products.length}
        sortValue={sortValue}
        onSortChange={setSortValue}
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
