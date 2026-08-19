"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Trash2 } from "lucide-react";
import { useCart, formatSubtotal } from "./CartContext";

export function CartPageView() {
  const { items, updateQuantity, removeItem } = useCart();

  if (items.length === 0) {
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

  const subtotalLabel = formatSubtotal(items);

  return (
    <div className="mx-auto max-w-[900px] px-4 py-10 md:py-16">
      <h1 className="font-heading text-[28px] font-semibold text-[#121212] md:text-[36px]">
        Sepetiniz
      </h1>

      <div className="mt-8 flex flex-col divide-y divide-[rgba(18,18,18,0.08)] border-y border-[rgba(18,18,18,0.08)]">
        {items.map((line) => (
          <div key={line.id} className="relative flex gap-4 py-5">
            <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg border border-[rgba(18,18,18,0.1)] bg-[rgba(18,18,18,0.04)]">
              {line.image && (
                <Image
                  src={line.image}
                  alt={line.title}
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
            <div className="flex flex-1 flex-col gap-1 pr-8">
              <p className="text-base font-bold text-[#121212]">
                {line.title}
              </p>
              {line.size && (
                <p className="text-sm text-[rgba(18,18,18,0.5)]">
                  Beden: {line.size}
                </p>
              )}
              <p className="text-sm text-[#121212]">{line.price}</p>
              <div className="mt-2 flex w-fit items-center gap-4 rounded-full border border-[rgba(18,18,18,0.15)] px-4 py-1.5">
                <button
                  type="button"
                  aria-label="Azalt"
                  onClick={() => updateQuantity(line.id, -1)}
                  className="text-[#121212]"
                >
                  −
                </button>
                <span className="min-w-[1ch] text-center text-sm text-[#121212]">
                  {line.quantity}
                </span>
                <button
                  type="button"
                  aria-label="Arttır"
                  onClick={() => updateQuantity(line.id, 1)}
                  className="text-[#121212]"
                >
                  +
                </button>
              </div>
            </div>
            <button
              type="button"
              aria-label="Ürünü kaldır"
              onClick={() => removeItem(line.id)}
              className="absolute right-0 top-5 text-[rgba(18,18,18,0.4)] hover:text-[#121212]"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-end gap-4">
        <div className="flex items-center gap-3 text-lg">
          <span className="text-[rgba(18,18,18,0.7)]">Ara Toplam</span>
          <span className="font-heading text-2xl font-semibold text-[#121212]">
            {subtotalLabel}
          </span>
        </div>
        <Link
          href="/checkout"
          className="w-full rounded-full bg-[#121212] px-6 py-4 text-center text-base font-bold text-white transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98] sm:w-auto sm:px-10"
        >
          Ödemeye Geç
        </Link>
      </div>
    </div>
  );
}
