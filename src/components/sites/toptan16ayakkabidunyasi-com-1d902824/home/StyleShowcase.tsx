"use client";

import {
  useCallback,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type TouchEvent as ReactTouchEvent,
} from "react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const BEFORE_IMAGE =
  "/sites/toptan16ayakkabidunyasi-com-1d902824/shared/global/comparison-1.webp";
const AFTER_IMAGE =
  "/sites/toptan16ayakkabidunyasi-com-1d902824/shared/global/comparison-2.webp";

const TESTIMONIALS = [
  {
    quote: "İkinci siparişimi verdim, gönül rahatlığıyla öneririm.",
    name: "Ayşe K.",
  },
  {
    quote: "Kargolama çok hızlıydı. Günlük kullanımda inanılmaz rahat.",
    name: "Elif T.",
  },
  {
    quote: "Fotoğraftakinden daha güzel geldi. Kombinlemesi çok kolay.",
    name: "Buse Ç.",
  },
];

function ComparisonSlider() {
  const [percent, setPercent] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPercent(Math.min(100, Math.max(0, ratio)));
  }, []);

  const handleMouseDown = useCallback(
    (e: ReactMouseEvent) => {
      draggingRef.current = true;
      updateFromClientX(e.clientX);
    },
    [updateFromClientX]
  );

  const handleMouseMove = useCallback(
    (e: ReactMouseEvent) => {
      if (!draggingRef.current) return;
      updateFromClientX(e.clientX);
    },
    [updateFromClientX]
  );

  const stopDragging = useCallback(() => {
    draggingRef.current = false;
  }, []);

  const handleTouchStart = useCallback(
    (e: ReactTouchEvent) => {
      draggingRef.current = true;
      updateFromClientX(e.touches[0].clientX);
    },
    [updateFromClientX]
  );

  const handleTouchMove = useCallback(
    (e: ReactTouchEvent) => {
      if (!draggingRef.current) return;
      updateFromClientX(e.touches[0].clientX);
    },
    [updateFromClientX]
  );

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={stopDragging}
      onMouseLeave={stopDragging}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={stopDragging}
      className="relative mx-auto aspect-square w-full max-w-[460px] cursor-ew-resize touch-none select-none overflow-hidden rounded-xl"
    >
      <Image
        src={BEFORE_IMAGE}
        alt="Before"
        fill
        sizes="(min-width: 768px) 460px, 100vw"
        className="pointer-events-none object-cover"
        draggable={false}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ clipPath: `inset(0 0 0 ${percent}%)` }}
      >
        <Image
          src={AFTER_IMAGE}
          alt="After"
          fill
          sizes="(min-width: 768px) 460px, 100vw"
          className="object-cover"
          draggable={false}
        />
      </div>

      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-[#121212] px-3 py-1 text-xs text-white">
        Before
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-[#121212] px-3 py-1 text-xs text-white">
        After
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-white"
        style={{ left: `${percent}%` }}
      />
      <div
        className="pointer-events-none absolute top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md"
        style={{ left: `${percent}%` }}
      >
        <div className="flex gap-0.5">
          <span className="h-3 w-0.5 rounded-full bg-[rgba(18,18,18,0.4)]" />
          <span className="h-3 w-0.5 rounded-full bg-[rgba(18,18,18,0.4)]" />
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({
  quote,
  name,
}: {
  quote: string;
  name: string;
}) {
  return (
    <div className="rounded-xl bg-[#EFF2F6] p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-[#FFD700] text-[#FFD700]"
            />
          ))}
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#14B8A6]">
          <Quote className="h-4 w-4 fill-white text-white" />
        </div>
      </div>
      <p className="mt-4 text-[15px] leading-relaxed text-[#121212]">
        {quote}
      </p>
      <p className="mt-3 text-sm text-[rgba(18,18,18,0.6)]">{name}</p>
    </div>
  );
}

export function StyleShowcase() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[40%_60%] md:gap-12">
          <div>
            <h2 className="font-heading text-[32px] font-semibold leading-tight text-[#121212] md:text-[39px]">
              Tarzını Yansıt Her Adımda Fark Oluştur!
            </h2>
            <p className="mt-4 text-base text-[rgba(18,18,18,0.7)]">
              Spor, terlik, topuklu, babet yüzlerce ürün seni bekliyor.
            </p>
          </div>
          <div>
            <ComparisonSlider />
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-center font-heading text-[28px] font-semibold text-[#121212] md:text-[32px]">
            Müşteri Memnuniyeti
          </h2>
          <div
            className={cn(
              "mt-8 grid grid-cols-1 gap-6 md:grid-cols-3"
            )}
          >
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} quote={t.quote} name={t.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
