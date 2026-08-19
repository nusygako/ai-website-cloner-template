"use client";

import { useRef, useState, type MouseEvent } from "react";
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

function WishlistButton({
  wishlisted,
  onToggle,
}: {
  wishlisted: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
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
  );
}

export function ProductGallery({ images, title, handle, price }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zooming, setZooming] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const carouselRef = useRef<HTMLDivElement>(null);
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

  function handleWishlistToggle() {
    toggle({ handle, title, image: activeImage.src, price });
  }

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    setZoomPos({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  }

  function handleCarouselScroll() {
    const el = carouselRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    setActiveIndex((current) => (current === index ? current : index));
  }

  function scrollToIndex(index: number) {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  }

  return (
    <div className="w-full">
      {/* Desktop: zoom-on-hover + thumbnail strip */}
      <div className="hidden md:block">
        <div
          className="relative aspect-square w-full cursor-zoom-in overflow-hidden rounded-lg bg-gray-100"
          onMouseEnter={() => setZooming(true)}
          onMouseLeave={() => setZooming(false)}
          onMouseMove={handleMouseMove}
        >
          <Image
            src={activeImage.src}
            alt={activeImage.alt || title}
            fill
            sizes="45vw"
            className="object-cover"
            style={{
              transform: zooming ? "scale(2)" : "scale(1)",
              transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
              transition: zooming ? "none" : "transform 200ms ease-out",
            }}
            priority
          />
          <WishlistButton wishlisted={wishlisted} onToggle={handleWishlistToggle} />
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
                    isActive ? "border-2 border-[#121212]" : "border",
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

      {/* Mobile: swipeable carousel + pagination dots */}
      <div className="md:hidden">
        <div className="relative">
          <div
            ref={carouselRef}
            onScroll={handleCarouselScroll}
            className="no-scrollbar flex w-full snap-x snap-mandatory overflow-x-auto scroll-smooth"
            style={{ scrollbarWidth: "none" }}
          >
            {images.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className="relative aspect-square w-full shrink-0 snap-center overflow-hidden bg-gray-100"
              >
                <Image
                  src={image.src}
                  alt={image.alt || title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
          <WishlistButton wishlisted={wishlisted} onToggle={handleWishlistToggle} />
        </div>

        {images.length > 1 && (
          <div className="mt-3 flex items-center justify-center gap-2">
            {images.map((image, index) => (
              <button
                key={`${image.src}-dot-${index}`}
                type="button"
                aria-label={`${index + 1}. görsele git`}
                aria-current={index === activeIndex}
                onClick={() => scrollToIndex(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-200",
                  index === activeIndex
                    ? "w-5 bg-[#121212]"
                    : "w-2 bg-[rgba(18,18,18,0.25)]",
                )}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
