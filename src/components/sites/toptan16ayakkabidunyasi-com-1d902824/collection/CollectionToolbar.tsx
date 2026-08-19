"use client";

import { useState } from "react";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StockFilter {
  inStock: boolean;
  outOfStock: boolean;
}

export interface PriceFilter {
  min: string;
  max: string;
}

export interface AppliedChip {
  key: string;
  label: string;
  onRemove: () => void;
}

interface CollectionToolbarProps {
  productCount: number;
  sortValue: string;
  onSortChange: (value: string) => void;
  stockFilter: StockFilter;
  onStockFilterChange: (filter: StockFilter) => void;
  priceFilter: PriceFilter;
  onPriceFilterChange: (filter: PriceFilter) => void;
  availableSizes: string[];
  sizeFilter: string[];
  onSizeFilterChange: (sizes: string[]) => void;
  appliedChips: AppliedChip[];
  onClearAll: () => void;
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

type FilterKey = "stock" | "price" | "size";

function toggleSize(sizes: string[], size: string): string[] {
  return sizes.includes(size) ? sizes.filter((s) => s !== size) : [...sizes, size];
}

function FilterControls({
  stockFilter,
  onStockFilterChange,
  priceFilter,
  onPriceFilterChange,
  availableSizes,
  sizeFilter,
  onSizeFilterChange,
  openFilter,
  toggleFilter,
}: Pick<
  CollectionToolbarProps,
  | "stockFilter"
  | "onStockFilterChange"
  | "priceFilter"
  | "onPriceFilterChange"
  | "availableSizes"
  | "sizeFilter"
  | "onSizeFilterChange"
> & {
  openFilter: FilterKey | null;
  toggleFilter: (key: FilterKey) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="relative">
        <button
          type="button"
          onClick={() => toggleFilter("size")}
          aria-expanded={openFilter === "size"}
          className="flex items-center gap-1.5 rounded-full border border-[rgba(18,18,18,0.2)] px-4 py-2"
        >
          Beden
          <ChevronDown
            size={16}
            className={cn(
              "transition-transform duration-200",
              openFilter === "size" && "rotate-180",
            )}
          />
        </button>
        {openFilter === "size" && (
          <div className="absolute left-0 top-full z-10 mt-2 w-56 rounded-md border border-[rgba(18,18,18,0.15)] bg-white p-3 shadow-md">
            <div className="grid grid-cols-4 gap-2">
              {availableSizes.map((size) => {
                const active = sizeFilter.includes(size);
                return (
                  <button
                    key={size}
                    type="button"
                    onClick={() => onSizeFilterChange(toggleSize(sizeFilter, size))}
                    className={cn(
                      "rounded-md border px-2 py-1.5 text-sm transition-colors",
                      active
                        ? "border-[#121212] bg-[#121212] text-white"
                        : "border-[rgba(18,18,18,0.2)] text-[#121212]",
                    )}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

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
              openFilter === "stock" && "rotate-180",
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
              openFilter === "price" && "rotate-180",
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
  );
}

export function CollectionToolbar(props: CollectionToolbarProps) {
  const {
    productCount,
    sortValue,
    onSortChange,
    appliedChips,
    onClearAll,
  } = props;
  const [openFilter, setOpenFilter] = useState<FilterKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  function toggleFilter(key: FilterKey) {
    setOpenFilter((prev) => (prev === key ? null : key));
  }

  return (
    <div className="border-b border-[rgba(18,18,18,0.1)] py-4 font-sans text-[15px] text-[#121212]">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="hidden items-center gap-3 md:flex">
          <span className="font-semibold">Filtre:</span>
          <FilterControls {...props} openFilter={openFilter} toggleFilter={toggleFilter} />
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="flex items-center justify-center gap-2 rounded-full border border-[rgba(18,18,18,0.2)] px-4 py-2 md:hidden"
        >
          <SlidersHorizontal size={16} />
          Filtrele
          {appliedChips.length > 0 && (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#121212] text-[11px] font-bold text-white">
              {appliedChips.length}
            </span>
          )}
        </button>

        <div className="flex items-center gap-4">
          <span className="hidden font-semibold sm:inline">Sıralama ölçütü:</span>

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

      {appliedChips.length > 0 && (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {appliedChips.map((chip) => (
            <button
              key={chip.key}
              type="button"
              onClick={chip.onRemove}
              className="flex items-center gap-1.5 rounded-full bg-[rgba(18,18,18,0.06)] px-3 py-1.5 text-sm text-[#121212]"
            >
              {chip.label}
              <X size={14} />
            </button>
          ))}
          <button
            type="button"
            onClick={onClearAll}
            className="text-sm font-bold text-[#121212] underline"
          >
            Tümünü Temizle
          </button>
        </div>
      )}

      {/* Mobile filter drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[150] md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Filtrele ve sırala"
            className="absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-t-2xl bg-white p-5"
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-heading text-lg font-semibold text-[#121212]">
                Filtrele & Sırala
              </h2>
              <button
                type="button"
                aria-label="Kapat"
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-5 w-5 text-[#121212]" />
              </button>
            </div>

            <div className="flex flex-col gap-5">
              <div>
                <p className="mb-2 font-semibold">Beden</p>
                <div className="grid grid-cols-4 gap-2">
                  {props.availableSizes.map((size) => {
                    const active = props.sizeFilter.includes(size);
                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() =>
                          props.onSizeFilterChange(toggleSize(props.sizeFilter, size))
                        }
                        className={cn(
                          "rounded-md border px-2 py-2 text-sm transition-colors",
                          active
                            ? "border-[#121212] bg-[#121212] text-white"
                            : "border-[rgba(18,18,18,0.2)] text-[#121212]",
                        )}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <p className="mb-2 font-semibold">Stok durumu</p>
                <label className="flex items-center gap-2 py-1">
                  <input
                    type="checkbox"
                    className="h-4 w-4"
                    checked={props.stockFilter.inStock}
                    onChange={(e) =>
                      props.onStockFilterChange({
                        ...props.stockFilter,
                        inStock: e.target.checked,
                      })
                    }
                  />
                  Stokta var
                </label>
                <label className="flex items-center gap-2 py-1">
                  <input
                    type="checkbox"
                    className="h-4 w-4"
                    checked={props.stockFilter.outOfStock}
                    onChange={(e) =>
                      props.onStockFilterChange({
                        ...props.stockFilter,
                        outOfStock: e.target.checked,
                      })
                    }
                  />
                  Stokta yok
                </label>
              </div>

              <div>
                <p className="mb-2 font-semibold">Fiyat</p>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="En düşük"
                    value={props.priceFilter.min}
                    onChange={(e) =>
                      props.onPriceFilterChange({
                        ...props.priceFilter,
                        min: e.target.value,
                      })
                    }
                    className="w-full rounded border border-[rgba(18,18,18,0.2)] px-3 py-2 text-sm"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    placeholder="En yüksek"
                    value={props.priceFilter.max}
                    onChange={(e) =>
                      props.onPriceFilterChange({
                        ...props.priceFilter,
                        max: e.target.value,
                      })
                    }
                    className="w-full rounded border border-[rgba(18,18,18,0.2)] px-3 py-2 text-sm"
                  />
                </div>
              </div>

              <div>
                <p className="mb-2 font-semibold">Sıralama ölçütü</p>
                <select
                  value={sortValue}
                  onChange={(e) => onSortChange(e.target.value)}
                  className="w-full rounded-md border border-[rgba(18,18,18,0.2)] bg-white px-3 py-2 text-[15px]"
                >
                  {SORT_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              {appliedChips.length > 0 && (
                <button
                  type="button"
                  onClick={onClearAll}
                  className="flex-1 rounded-full border border-[rgba(18,18,18,0.2)] px-6 py-3 text-sm font-bold text-[#121212]"
                >
                  Temizle
                </button>
              )}
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="flex-1 rounded-full bg-[#121212] px-6 py-3 text-sm font-bold text-white"
              >
                {productCount} Ürünü Göster
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
