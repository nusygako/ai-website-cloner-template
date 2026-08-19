"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "../shared/ProductCard";
import type { Product } from "@/types/toptan16";

function nextSundayMidnight(): number {
  const now = new Date();
  const daysUntilSunday = (7 - now.getDay()) % 7 || 7;
  const target = new Date(now);
  target.setDate(now.getDate() + daysUntilSunday);
  target.setHours(23, 59, 59, 0);
  return target.getTime();
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(target: number): TimeLeft {
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#121212] font-heading text-xl font-bold text-white sm:h-16 sm:w-16 sm:text-2xl">
        {pad(value)}
      </div>
      <span className="mt-1.5 text-[11px] font-medium text-[rgba(18,18,18,0.6)]">
        {label}
      </span>
    </div>
  );
}

export function DealsCountdown({ deals }: { deals: Product[] }) {
  const [target] = useState(nextSundayMidnight);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Date.now() differs between server render and client mount; deferring to an effect avoids a hydration mismatch
    setTimeLeft(getTimeLeft(target));
    const interval = window.setInterval(() => {
      setTimeLeft(getTimeLeft(target));
    }, 1000);
    return () => window.clearInterval(interval);
  }, [target]);

  if (deals.length === 0) return null;

  return (
    <section className="bg-[#FDF3EC] py-12">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <h2 className="font-heading text-[28px] font-semibold text-[#121212] md:text-[32px]">
            🔥 Haftanın Fırsatları
          </h2>
          {timeLeft && (
            <div className="flex items-center gap-2 sm:gap-3">
              <CountdownUnit value={timeLeft.days} label="Gün" />
              <span className="pb-5 text-xl font-bold text-[#121212]">:</span>
              <CountdownUnit value={timeLeft.hours} label="Saat" />
              <span className="pb-5 text-xl font-bold text-[#121212]">:</span>
              <CountdownUnit value={timeLeft.minutes} label="Dakika" />
              <span className="pb-5 text-xl font-bold text-[#121212]">:</span>
              <CountdownUnit value={timeLeft.seconds} label="Saniye" />
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {deals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
