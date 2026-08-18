import Link from "next/link";
import { Heart } from "lucide-react";

export const metadata = {
  title: "Favorilerim",
};

export default function WishlistPage() {
  return (
    <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="font-heading text-[28px] font-semibold text-[#121212] md:text-[36px]">
        Favorilerim
      </h1>
      <div className="mt-10 flex flex-col items-center gap-4">
        <Heart className="h-16 w-16 text-[rgba(18,18,18,0.2)]" />
        <p className="text-base text-[rgba(18,18,18,0.7)]">
          Favori listeniz boş
        </p>
        <Link
          href="/collections/tum-ayakkabilar"
          className="mt-2 rounded-full bg-[#121212] px-8 py-4 text-sm font-bold text-white"
        >
          Alışverişe devam et
        </Link>
      </div>
    </div>
  );
}
