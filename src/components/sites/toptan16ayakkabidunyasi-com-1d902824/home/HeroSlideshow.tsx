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
      </Link>
    </section>
  );
}
