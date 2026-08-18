"use client";

import Link from "next/link";

const VIDEO_SRC = "/videos/hero-showroom.mp4";
const POSTER_SRC = "/videos/hero-showroom-poster.jpg";

export function HeroSlideshow() {
  return (
    <section className="relative w-full">
      <Link
        href="/collections/tum-ayakkabilar"
        className="relative block aspect-[3/2] min-h-[280px] w-full overflow-hidden md:min-h-[500px]"
        aria-label="Tüm ayakkabılara göz atın"
      >
        <video
          className="h-full w-full object-cover"
          src={VIDEO_SRC}
          poster={POSTER_SRC}
          autoPlay
          loop
          muted
          playsInline
        />
      </Link>
    </section>
  );
}
