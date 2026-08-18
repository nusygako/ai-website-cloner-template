import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import {
  campaignItems,
  formatPrice,
} from "@/lib/sites/toptan16ayakkabidunyasi-com-1d902824/data";

export function CampaignSection() {
  return (
    <section className="bg-gradient-to-b from-toptan-accent/10 via-toptan-accent/5 to-white py-16">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-toptan-accent px-4 py-1.5 text-xs font-bold tracking-wide text-white">
            <Sparkles className="h-3.5 w-3.5" />
            YENİ STÜDYO ÇEKİMLERİ
          </span>
          <h2 className="mt-4 font-heading text-[28px] font-semibold text-[#121212] md:text-[36px]">
            Vitrin Koleksiyonu
          </h2>
          <p className="mt-3 text-base text-[rgba(18,18,18,0.65)]">
            Seçili modellerimizi yeni stüdyo çekimlerimizle senin için bir
            araya getirdik.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-5">
          {campaignItems.map((item) => (
            <Link
              key={item.handle}
              href={`/products/${item.handle}`}
              className="group overflow-hidden rounded-2xl border border-toptan-accent/20 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-square overflow-hidden bg-[#F5F5F3]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-3 text-center">
                <p className="truncate font-heading text-sm font-medium text-[#121212] md:text-base">
                  {item.title}
                </p>
                <div className="mt-1 flex items-center justify-center gap-2">
                  <span className="text-sm font-bold text-toptan-accent">
                    {formatPrice(item.price)}
                  </span>
                  {item.compareAtPrice !== null && (
                    <span className="text-xs text-[rgba(18,18,18,0.4)] line-through">
                      {formatPrice(item.compareAtPrice)}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
