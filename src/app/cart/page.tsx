import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export const metadata = {
  title: "Sepetim",
};

export default function CartPage() {
  return (
    <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="font-heading text-[28px] font-semibold text-[#121212] md:text-[36px]">
        Sepetiniz
      </h1>
      <div className="mt-10 flex flex-col items-center gap-4">
        <ShoppingBag className="h-16 w-16 text-[rgba(18,18,18,0.2)]" />
        <p className="text-base text-[rgba(18,18,18,0.7)]">Sepetiniz boş</p>
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
