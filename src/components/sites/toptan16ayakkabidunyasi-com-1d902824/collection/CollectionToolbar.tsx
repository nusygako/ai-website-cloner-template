"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StockFilter {
  inStock: boolean;
  outOfStock: boolean;
}

export interface PriceFilter {
  min: string;
  max: string;
}

interface CollectionToolbarProps {
  productCount: number;
  sortValue: string;
  onSortChange: (value: string) => void;
  stockFilter: StockFilter;
  onStockFilterChange: (filter: StockFilter) => void;
  priceFilter: PriceFilter;
  onPriceFilterChange: (filter: PriceFilter) => void;
}

const SORT_OPTIONS = [
  { value: "featured", label: "Öne çıkan" },
  { value: "relevant", label: "En alakalı" },
  { value: "best-selling", label: "En çok satan" },
  { value: "alpha-asc", label: "Alfabetik olarak A-Z" },
  { value: "alpha-desc", label: "Alfabetik olarak Z-A" },
  { value: "price-asc", label: "Fiyat düşükten yükseğe" },
  { value: "price-desc", label: "Fiyat yüksekten düşüğe" },
  { value: "date-old", label: "Tarih eskiden yeniye" },
  { value: "date-new", label: "Tarih yeniden eskiye" },
];

type FilterKey = "stock" | "price";

export function CollectionToolbar({
  productCount,
  sortValue,
  onSortChange,
  stockFilter,
  onStockFilterChange,
  priceFilter,
  onPriceFilterChange,
}: CollectionToolbarProps) {
  const [openFilter, setOpenFilter] = useState<FilterKey | null>(null);

  function toggleFilter(key: FilterKey) {
    setOpenFilter((prev) => (prev === key ? null : key));
  }

  return (
    <div className="flex flex-col gap-4 border-b border-[rgba(18,18,18,0.1)] py-4 font-sans text-[15px] text-[#121212] md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-4">
        <span className="font-semibold">Filtre:</span>

        <div className="relative">
          <button
            type="button"
            onClick={() => toggleFilter("stock")}
            aria-expanded={openFilter === "stock"}
            className="flex items-center gap-1.5 rounded-full border border-[rgba(18,18,18,0.2)] px-4 py-2"
          >
            Stok durumu
            <ChevronDown
              size={16}
              className={cn(
                "transition-transform duration-200",
                openFilter === "stock" && "rotate-180"
              )}
            />
          </button>

          {openFilter === "stock" && (
            <div className="absolute left-0 top-full z-10 mt-2 w-48 rounded-md border border-[rgba(18,18,18,0.15)] bg-white p-3 shadow-md">
              <label className="flex items-center gap-2 py-1">
                <input
                  type="checkbox"
                  className="h-4 w-4"
                  checked={stockFilter.inStock}
                  onChange={(e) =>
                    onStockFilterChange({ ...stockFilter, inStock: e.target.checked })
                  }
                />
                Stokta var
              </label>
              <label className="flex items-center gap-2 py-1">
                <input
                  type="checkbox"
                  className="h-4 w-4"
                  checked={stockFilter.outOfStock}
                  onChange={(e) =>
                    onStockFilterChange({ ...stockFilter, outOfStock: e.target.checked })
                  }
                />
                Stokta yok
              </label>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => toggleFilter("price")}
            aria-expanded={openFilter === "price"}
            className="flex items-center gap-1.5 rounded-full border border-[rgba(18,18,18,0.2)] px-4 py-2"
          >
            Fiyat
            <ChevronDown
              size={16}
              className={cn(
                "transition-transform duration-200",
                openFilter === "price" && "rotate-180"
              )}
            />
          </button>

          {openFilter === "price" && (
            <div className="absolute left-0 top-full z-10 mt-2 w-56 rounded-md border border-[rgba(18,18,18,0.15)] bg-white p-3 shadow-md">
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="En düşük"
                  value={priceFilter.min}
                  onChange={(e) =>
                    onPriceFilterChange({ ...priceFilter, min: e.target.value })
                  }
                  className="w-full rounded border border-[rgba(18,18,18,0.2)] px-2 py-1 text-sm"
                />
                <span>-</span>
                <input
                  type="number"
                  placeholder="En yüksek"
                  value={priceFilter.max}
                  onChange={(e) =>
                    onPriceFilterChange({ ...priceFilter, max: e.target.value })
                  }
                  className="w-full rounded border border-[rgba(18,18,18,0.2)] px-2 py-1 text-sm"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="font-semibold">Sıralama ölçütü:</span>

        <select
          value={sortValue}
          onChange={(e) => onSortChange(e.target.value)}
          className="rounded-full border border-[rgba(18,18,18,0.2)] bg-white px-4 py-2 text-[15px]"
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <span>{productCount} ürün</span>
      </div>
    </div>
  );
}
