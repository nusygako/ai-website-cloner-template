"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Tag } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/sites/toptan16ayakkabidunyasi-com-1d902824/data";
import type { Product } from "@/types/toptan16";

interface ProductCardProps {
  product: Product;
  showPromoBadge?: boolean;
}

export function ProductCard({ product, showPromoBadge = true }: ProductCardProps) {
  const [wishlisted, setWishlisted] = useState(false);
  const image = product.images[0];
  const href = `/products/${product.handle}`;

  return (
    <div className="rounded-lg border-[1.6px] border-[rgba(18,18,18,0.2)] bg-white">
      <div className="relative aspect-square overflow-hidden rounded-t-md bg-white">
        <Link href={href} className="block h-full w-full" tabIndex={-1}>
          {image ? (
            <Image
              src={image.src}
              alt={image.alt || product.title}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          ) : (
            <div className="h-full w-full bg-gray-200" />
          )}
        </Link>

        <button
          type="button"
          aria-label={wishlisted ? "Favorilerden çıkar" : "Favorilere ekle"}
          aria-pressed={wishlisted}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setWishlisted((prev) => !prev);
          }}
          className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(18,18,18,0.15)] bg-white"
        >
          <Heart
            size={18}
            className={cn(
              "text-[#121212]",
              wishlisted && "fill-[#121212]"
            )}
          />
        </button>

        {showPromoBadge && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-[#14B8A6] px-3 py-1.5 text-[13px] text-white">
            <Tag size={13} />
            <span>1 Alana 1 Bedava</span>
          </div>
        )}
      </div>

      <div className="rounded-b-md p-4 text-center">
        <Link href={href} className="block">
          <h3 className="mb-2 truncate font-heading text-[18px] text-[#121212] md:text-[22px]">
            {product.title}
          </h3>
        </Link>

        <div className="flex items-center justify-center gap-2">
          <span className="text-[16px] font-bold text-[#121212] md:text-[18px]">
            {formatPrice(product.price)}
          </span>
          {product.compareAtPrice !== null && (
            <span className="text-[14px] text-[rgba(18,18,18,0.5)] line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>

        <Link
          href={href}
          className="mt-3 block w-full rounded-full border-[1.6px] border-[#14B8A6] px-4 py-2.5 text-[15px] text-[#14B8A6] transition-colors duration-200 hover:bg-[#14B8A6] hover:text-white"
        >
          Hızlı Satın Al
        </Link>
      </div>
    </div>
  );
}
