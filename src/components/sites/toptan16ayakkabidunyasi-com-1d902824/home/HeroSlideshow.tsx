"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    src: "/sites/toptan16ayakkabidunyasi-com-1d902824/shared/global/hero-1.webp",
    alt: "Kampanya banner 1",
  },
  {
    src: "/sites/toptan16ayakkabidunyasi-com-1d902824/shared/global/hero-3.webp",
    alt: "Kampanya banner 2",
  },
];

const AUTO_ADVANCE_MS = 5000;

export function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, AUTO_ADVANCE_MS);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const goTo = useCallback(
    (index: number) => {
      setCurrent(index);
      startTimer();
    },
    [startTimer]
  );

  const goPrev = useCallback(() => {
    goTo((current - 1 + SLIDES.length) % SLIDES.length);
  }, [current, goTo]);

  const goNext = useCallback(() => {
    goTo((current + 1) % SLIDES.length);
  }, [current, goTo]);

  return (
    <section className="group relative w-full">
      <div className="relative aspect-[3/2] min-h-[280px] w-full overflow-hidden md:min-h-[500px]">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.src}
            className={cn(
              "absolute inset-0 transition-opacity duration-500 ease-in-out",
              index === current ? "z-10 opacity-100" : "z-0 opacity-0"
            )}
          >
            <Link href="/collections/tum-ayakkabilar" className="block h-full w-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </Link>
          </div>
        ))}

        <button
          type="button"
          onClick={goPrev}
          aria-label="Önceki slayt"
          className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/60 p-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100 md:flex"
        >
          <ChevronLeft className="h-5 w-5 text-[#121212]" />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Sonraki slayt"
          className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/60 p-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100 md:flex"
        >
          <ChevronRight className="h-5 w-5 text-[#121212]" />
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 pt-4">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`${index + 1}. slayta git`}
            onClick={() => goTo(index)}
            className={cn(
              "h-2.5 w-2.5 rounded-full border transition-colors",
              index === current
                ? "border-[#121212] bg-[#121212]"
                : "border-[rgba(18,18,18,0.3)] bg-transparent"
            )}
          />
        ))}
      </div>
    </section>
  );
}
