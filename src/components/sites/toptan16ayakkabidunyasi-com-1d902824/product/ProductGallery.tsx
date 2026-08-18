"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProductImage } from "@/types/toptan16";
import { useWishlist } from "../shared/WishlistContext";

interface ProductGalleryProps {
  images: ProductImage[];
  title: string;
  handle: string;
  price: string;
}

export function ProductGallery({ images, title, handle, price }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { isWishlisted, toggle } = useWishlist();
  const wishlisted = isWishlisted(handle);

  if (!images || images.length === 0) {
    return (
      <div className="w-full">
        <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-200" />
      </div>
    );
  }

  const activeImage = images[activeIndex] ?? images[0];

  return (
    <div className="w-full">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={activeImage.src}
          alt={activeImage.alt || title}
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover"
          priority
        />
        <button
          type="button"
          onClick={() =>
            toggle({ handle, title, image: activeImage.src, price })
          }
          aria-label={wishlisted ? "Favorilerden çıkar" : "Favorilere ekle"}
          aria-pressed={wishlisted}
          className="absolute left-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white"
          style={{ border: "1px solid rgba(18,18,18,0.15)" }}
        >
          <Heart
            className="h-5 w-5"
            fill={wishlisted ? "#14B8A6" : "none"}
            stroke={wishlisted ? "#14B8A6" : "#121212"}
          />
        </button>
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto">
          {images.map((image, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={`${image.src}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`${title} görsel ${index + 1}`}
                aria-current={isActive}
                className={cn(
                  "relative h-[72px] w-[72px] shrink-0 cursor-pointer overflow-hidden rounded-md",
                  isActive ? "border-2 border-[#121212]" : "border"
                )}
                style={isActive ? undefined : { borderColor: "rgba(18,18,18,0.15)" }}
              >
                <Image
                  src={image.src}
                  alt={image.alt || title}
                  fill
                  sizes="72px"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
