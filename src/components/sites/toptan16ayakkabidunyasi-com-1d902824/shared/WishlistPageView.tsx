"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Trash2 } from "lucide-react";
import { useWishlist } from "./WishlistContext";

export function WishlistPageView() {
  const { items, remove } = useWishlist();

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-center px-4 py-24 text-center">
        <h1 className="font-heading text-[28px] font-semibold text-[#121212] md:text-[36px]">
          Favorilerim
        </h1>
        <div className="mt-10 flex flex-col items-center gap-4">
          <Heart className="h-16 w-16 text-[rgba(18,18,18,0.2)]" />
          <p className="text-base text-[rgba(18,18,18,0.7)]">
            Favori listeniz boş
          </p>
          <Link
            href="/collections/tum-ayakkabilar"
            className="mt-2 rounded-full bg-[#121212] px-8 py-4 text-sm font-bold text-white"
          >
            Alışverişe devam et
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-10 md:py-16">
      <h1 className="font-heading text-[28px] font-semibold text-[#121212] md:text-[36px]">
        Favorilerim
      </h1>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.handle}
            className="relative rounded-lg border-[1.6px] border-[rgba(18,18,18,0.2)] bg-white"
          >
            <button
              type="button"
              aria-label="Favorilerden çıkar"
              onClick={() => remove(item.handle)}
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(18,18,18,0.15)] bg-white"
            >
              <Trash2 className="h-4 w-4 text-[#121212]" />
            </button>
            <Link href={`/products/${item.handle}`} className="block">
              <div className="relative aspect-square overflow-hidden rounded-t-md bg-white">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="mb-2 truncate font-heading text-[16px] text-[#121212]">
                  {item.title}
                </h3>
                <span className="text-[15px] font-bold text-[#121212]">
                  {item.price}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
