import Image from "next/image";
import Link from "next/link";
import { getCollectionProducts } from "@/lib/sites/toptan16ayakkabidunyasi-com-1d902824/data";

interface Tile {
  title: string;
  href: string;
  collectionHandle: string;
  span: "large" | "small";
}

const TILES: Tile[] = [
  { title: "Erkek Spor Ayakkabı", href: "/collections/erkek-spor-ayakkabi", collectionHandle: "erkek-spor-ayakkabi", span: "large" },
  { title: "Kadın Spor Ayakkabı", href: "/collections/kadin-spor-ayakkabi", collectionHandle: "kadin-spor-ayakkabi", span: "small" },
  { title: "Topuklu Ayakkabı", href: "/collections/topuklu-ayakkabi", collectionHandle: "topuklu-ayakkabi", span: "small" },
  { title: "Terlik", href: "/collections/terlik", collectionHandle: "terlik", span: "small" },
];

function tileImage(handle: string) {
  return getCollectionProducts(handle)[0]?.images[0] ?? null;
}

export function BentoShowcase() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-12 md:px-8">
      <h2 className="mb-8 font-heading text-[28px] font-semibold text-[#121212] md:text-[32px]">
        Kategorilere Göz At
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {TILES.map((tile) => {
          const image = tileImage(tile.collectionHandle);
          return (
            <Link
              key={tile.href}
              href={tile.href}
              className={
                tile.span === "large"
                  ? "group relative col-span-2 row-span-2 aspect-[4/3] overflow-hidden rounded-xl md:col-span-1 md:aspect-square"
                  : "group relative aspect-square overflow-hidden rounded-xl"
              }
            >
              <div className="absolute inset-0 bg-[rgba(18,18,18,0.08)]">
                {image && (
                  <Image
                    src={image.src}
                    alt={image.alt || tile.title}
                    fill
                    sizes={tile.span === "large" ? "(min-width: 768px) 33vw, 100vw" : "(min-width: 768px) 33vw, 50vw"}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(18,18,18,0) 50%, rgba(18,18,18,0.55) 100%)",
                }}
              />
              <span
                className={
                  tile.span === "large"
                    ? "absolute bottom-5 left-5 font-heading text-2xl font-bold text-white"
                    : "absolute bottom-3 left-3 font-heading text-base font-bold text-white"
                }
              >
                {tile.title}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
