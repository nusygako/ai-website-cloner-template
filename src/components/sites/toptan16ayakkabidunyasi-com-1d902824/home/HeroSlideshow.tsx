"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const VIDEO_SRC = "/videos/hero-showroom.mp4";
const POSTER_SRC = "/videos/hero-showroom-poster.jpg";

export function HeroSlideshow() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // Some browsers (esp. desktop Chrome/Edge) ignore the `muted` prop when
    // it isn't present as a literal HTML attribute in the server-rendered
    // markup, and refuse to autoplay unmuted video. Forcing it imperatively
    // guarantees autoplay works consistently across desktop and mobile.
    video.muted = true;
    video.play().catch(() => {
      // Autoplay can still be blocked (e.g. low-power mode) — poster stays visible.
    });
  }, []);

  return (
    <section className="relative w-full">
      <Link
        href="/collections/tum-ayakkabilar"
        className="relative block aspect-[3/2] min-h-[280px] w-full overflow-hidden md:min-h-[500px]"
        aria-label="Tüm ayakkabılara göz atın"
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={VIDEO_SRC}
          poster={POSTER_SRC}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(18,18,18,0.55) 0%, rgba(18,18,18,0.05) 45%, rgba(18,18,18,0) 65%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-4 px-6 pb-10 text-center sm:pb-14">
          <h1 className="font-heading text-2xl font-bold text-white drop-shadow-md sm:text-4xl">
            Showroom Ayakkabı&apos;ya Hoş Geldiniz
          </h1>
          <p className="max-w-md text-sm text-white/90 drop-shadow-md sm:text-base">
            En yeni sezon modelleri, uygun fiyatlarla kapınıza kadar.
          </p>
          <span className="pointer-events-auto rounded-full bg-white px-8 py-3 text-sm font-bold text-[#121212] transition-transform duration-200 hover:scale-105">
            Koleksiyonu Keşfet
          </span>
        </div>
      </Link>
    </section>
  );
}
