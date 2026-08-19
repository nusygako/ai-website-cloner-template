"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Loader2, Lock, RefreshCw, ShieldCheck, Star, Tag, Truck } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/toptan16";
import { formatPrice } from "@/lib/sites/toptan16ayakkabidunyasi-com-1d902824/data";
import { getBaselineRating } from "@/lib/sites/toptan16ayakkabidunyasi-com-1d902824/ratings";
import { trackEvent } from "@/lib/sites/toptan16ayakkabidunyasi-com-1d902824/analytics";
import { SizeChart } from "../shared/SizeChart";
import { useCart } from "../shared/CartContext";

type AddState = "idle" | "loading" | "added";

// Deterministic (not random-per-render) low-stock nudge, seeded by
// product+size so it stays stable across re-renders and page visits.
function lowStockCountFor(handle: string, size: string): number | null {
  let hash = 0;
  const key = `${handle}::${size}`;
  for (let i = 0; i < key.length; i++) {
    hash = (hash * 31 + key.charCodeAt(i)) >>> 0;
  }
  const bucket = hash % 5;
  if (bucket === 4) return 1;
  if (bucket === 3) return 2;
  if (bucket === 2) return 3;
  return null;
}

interface ColorOption {
  handle: string;
  image: string;
  label: string;
}

interface ProductBuyBoxProps {
  product: Product;
  colorOptions?: ColorOption[];
  viewingCount?: number;
  addedToCartCount?: number;
}

interface SizeEntry {
  size: string;
  available: boolean;
}

function getSizeEntries(product: Product): SizeEntry[] {
  const sizeOrder: string[] = [];
  const availabilityBySize = new Map<string, boolean>();

  for (const variant of product.variants) {
    if (!variant.size) continue;
    if (!availabilityBySize.has(variant.size)) {
      sizeOrder.push(variant.size);
      availabilityBySize.set(variant.size, false);
    }
    if (variant.available) {
      availabilityBySize.set(variant.size, true);
    }
  }

  return sizeOrder.map((size) => ({
    size,
    available: availabilityBySize.get(size) ?? false,
  }));
}

export function ProductBuyBox({
  product,
  colorOptions,
  viewingCount = 167,
  addedToCartCount = 189,
}: ProductBuyBoxProps) {
  const sizes = getSizeEntries(product);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [showSticky, setShowSticky] = useState(false);
  const [sizeError, setSizeError] = useState(false);
  const [addState, setAddState] = useState<AddState>("idle");
  const addToCartRef = useRef<HTMLButtonElement>(null);
  const { addItem } = useCart();
  const mainImage = product.images[0];

  const lowStockCount = selectedSize
    ? lowStockCountFor(product.handle, selectedSize)
    : null;
  const rating = getBaselineRating(product.handle);

  function handleAddToCart() {
    if (sizes.length > 0 && !selectedSize) {
      setSizeError(true);
      return;
    }
    setSizeError(false);
    if (addState !== "idle") return;
    setAddState("loading");
    window.setTimeout(() => {
      addItem({
        id: `${product.handle}${selectedSize ? `-${selectedSize}` : ""}`,
        title: product.title,
        image: mainImage?.src ?? "",
        size: selectedSize,
        price: formatPrice(product.price),
      });
      trackEvent("add_to_cart", {
        currency: "TRY",
        value: product.price ?? 0,
        items: [
          {
            item_id: product.handle,
            item_name: product.title,
            price: product.price ?? 0,
            quantity: 1,
          },
        ],
      });
      setAddState("added");
      window.setTimeout(() => setAddState("idle"), 1400);
    }, 500);
  }

  useEffect(() => {
    trackEvent("view_item", {
      currency: "TRY",
      value: product.price ?? 0,
      items: [
        {
          item_id: product.handle,
          item_name: product.title,
          price: product.price ?? 0,
        },
      ],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps -- fire once per mounted product page
  }, [product.handle]);

  useEffect(() => {
    const target = addToCartRef.current;
    if (typeof window === "undefined" || !target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const scrolledPastAbove =
          !entry.isIntersecting && entry.boundingClientRect.top < 0;
        setShowSticky(scrolledPastAbove);
      },
      { threshold: 0 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full">
      <h1 className="font-heading text-[32px] font-semibold text-[#121212]">
        {product.title}
      </h1>

      <div className="mt-2 flex items-center gap-1.5">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4"
              fill={i < Math.round(rating.average) ? "#0F9D8C" : "none"}
              stroke="#0F9D8C"
            />
          ))}
        </div>
        <span className="text-sm font-bold text-[#121212]">{rating.average}</span>
        <span className="text-sm text-[rgba(18,18,18,0.5)]">
          ({rating.count} değerlendirme)
        </span>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-3">
        <span className="text-2xl font-bold text-[#121212]">
          {formatPrice(product.price)}
        </span>
        {product.compareAtPrice != null && (
          <span
            className="text-lg line-through"
            style={{ color: "rgba(18,18,18,0.5)" }}
          >
            {formatPrice(product.compareAtPrice)}
          </span>
        )}
        <span className="inline-flex items-center gap-1 rounded-full bg-[#14B8A6] px-3 py-1 text-xs font-bold text-white">
          <Tag className="h-3.5 w-3.5" />
          1 Alana 1 Bedava
        </span>
      </div>

      {colorOptions && colorOptions.length > 0 && (
        <div className="mt-6">
          <p className="mb-3 font-heading text-base font-semibold text-[#121212]">
            Renk Seçenekleri
          </p>
          <div className="flex flex-wrap gap-2">
            {colorOptions.map((option) => {
              const isActive = option.handle === product.handle;
              return (
                <Link
                  key={option.handle}
                  href={`/products/${option.handle}`}
                  aria-label={option.label}
                  aria-current={isActive}
                  className={cn(
                    "relative h-16 w-16 shrink-0 overflow-hidden rounded-md",
                    isActive ? "border-2 border-[#121212]" : "border"
                  )}
                  style={isActive ? undefined : { borderColor: "rgba(18,18,18,0.15)" }}
                >
                  <Image
                    src={option.image}
                    alt={option.label}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      )}

      <div className="mt-6 rounded-lg bg-[#EAF3FC] p-4">
        <p className="text-sm text-[#121212]">
          👀 <strong className="font-bold">{viewingCount}</strong> kişi bu ürünü
          inceliyor!
        </p>
        <p className="mt-1 text-sm text-[#121212]">
          🔥 <strong className="font-bold">{addedToCartCount}</strong> kişi
          sepetine ekledi.
        </p>
      </div>

      <p className="mt-3 text-sm text-[#666666]">
        Ürünlerimiz yüksek kaliteli replikadır.
      </p>

      <div className="mt-6">
        <div className="mb-3 flex items-center justify-between">
          <p className="font-heading text-base font-semibold text-[#121212]">
            Ayakkabı Numarası
          </p>
          <SizeChart />
        </div>
        <div className="flex flex-wrap gap-[10px]">
          {sizes.map(({ size, available }) => {
            const isSelected = selectedSize === size;
            return (
              <button
                key={size}
                type="button"
                disabled={!available}
                onClick={() => available && setSelectedSize(size)}
                className={cn(
                  "flex h-12 min-w-[48px] items-center justify-center rounded-full px-3 text-sm font-medium",
                  isSelected
                    ? "bg-[#121212] text-white"
                    : available
                      ? "cursor-pointer bg-white text-[#121212]"
                      : "cursor-not-allowed bg-white text-[rgba(18,18,18,0.35)]"
                )}
                style={{ border: "1.6px solid rgba(18,18,18,0.25)" }}
              >
                {size}
              </button>
            );
          })}
        </div>
        {sizeError && (
          <p className="mt-2 text-sm font-medium text-red-600">
            Lütfen bir numara seçin.
          </p>
        )}
        {lowStockCount !== null && (
          <p className="mt-2 flex items-center gap-1.5 text-sm font-bold text-[#E05A2B]">
            🔥 Bu numarada son {lowStockCount} ürün kaldı!
          </p>
        )}
      </div>

      <button
        ref={addToCartRef}
        type="button"
        onClick={handleAddToCart}
        disabled={addState !== "idle"}
        aria-live="polite"
        className={cn(
          "mt-6 flex w-full items-center justify-center gap-2 rounded-full py-4 text-base font-bold text-white transition-all duration-150",
          addState === "added"
            ? "bg-[#0F9D8C]"
            : "bg-[#121212] hover:scale-[1.02] active:scale-[0.98]",
        )}
      >
        {addState === "loading" && <Loader2 className="h-5 w-5 animate-spin" />}
        {addState === "added" && <CheckCircle className="h-5 w-5" />}
        {addState === "idle" && "SEPETE EKLE"}
        {addState === "loading" && "EKLENİYOR..."}
        {addState === "added" && "EKLENDİ"}
      </button>
      <button
        type="button"
        onClick={handleAddToCart}
        className="mt-3 w-full rounded-full bg-transparent py-4 text-base font-bold text-[#14B8A6] transition-colors duration-150 hover:bg-[#14B8A6] hover:text-white"
        style={{ border: "1.6px solid #14B8A6" }}
      >
        HEMEN SATIN ALIN
      </button>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <span
          className="flex items-center gap-1 rounded-md border px-2 py-1 text-[11px] font-bold"
          style={{ borderColor: "rgba(18,18,18,0.15)", color: "rgba(18,18,18,0.6)" }}
        >
          <Lock className="h-3 w-3" /> SSL Güvenli Ödeme
        </span>
        <span
          className="flex items-center gap-1 rounded-md border px-2 py-1 text-[11px] font-bold"
          style={{ borderColor: "rgba(18,18,18,0.15)", color: "rgba(18,18,18,0.6)" }}
        >
          <ShieldCheck className="h-3 w-3" /> 256-bit Şifreleme
        </span>
        <span
          className="rounded-md border px-2 py-1 text-[11px] font-bold"
          style={{ borderColor: "rgba(18,18,18,0.15)", color: "rgba(18,18,18,0.6)" }}
        >
          VISA
        </span>
        <span
          className="rounded-md border px-2 py-1 text-[11px] font-bold"
          style={{ borderColor: "rgba(18,18,18,0.15)", color: "rgba(18,18,18,0.6)" }}
        >
          Mastercard
        </span>
      </div>

      <div
        className="mt-6 flex flex-wrap items-center justify-between gap-3 text-[13px]"
        style={{ color: "rgba(18,18,18,0.7)" }}
      >
        <span className="flex items-center gap-1.5">
          <CheckCircle className="h-4 w-4" /> Kapıda Ödeme
        </span>
        <span className="flex items-center gap-1.5">
          <RefreshCw className="h-4 w-4" /> Kolay İade
        </span>
        <span className="flex items-center gap-1.5">
          <Truck className="h-4 w-4" /> Hızlı Kargo
        </span>
      </div>

      {showSticky && (
        <div
          className="fixed bottom-0 left-0 right-0 z-40 flex items-center gap-4 bg-white px-6 py-3"
          style={{ borderTop: "1px solid rgba(18,18,18,0.1)" }}
        >
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md bg-gray-100">
            {mainImage && (
              <Image
                src={mainImage.src}
                alt={mainImage.alt || product.title}
                fill
                sizes="48px"
                className="object-cover"
              />
            )}
          </div>
          <div className="hidden min-w-0 flex-1 sm:block">
            <p className="truncate text-sm font-medium text-[#121212]">
              {product.title}
            </p>
            <p className="text-sm font-bold text-[#121212]">
              {formatPrice(product.price)}
            </p>
          </div>
          <select
            aria-label="Ayakkabı Numarası"
            className="rounded px-2 py-2 text-sm text-[#121212]"
            style={{ border: "1px solid rgba(18,18,18,0.25)" }}
            value={selectedSize ?? ""}
            onChange={(event) => setSelectedSize(event.target.value)}
          >
            <option value="" disabled>
              Numara
            </option>
            {sizes.map(({ size, available }) => (
              <option key={size} value={size} disabled={!available}>
                {size}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={handleAddToCart}
            disabled={addState !== "idle"}
            className={cn(
              "flex shrink-0 items-center justify-center gap-1.5 rounded-full px-6 py-2.5 text-sm font-bold text-white transition-colors duration-150",
              addState === "added" ? "bg-[#0F9D8C]" : "bg-[#121212]",
            )}
          >
            {addState === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
            {addState === "added" && <CheckCircle className="h-4 w-4" />}
            {addState === "idle" && "SEPETE EKLE"}
            {addState === "loading" && "EKLENİYOR"}
            {addState === "added" && "EKLENDİ"}
          </button>
        </div>
      )}
    </div>
  );
}
