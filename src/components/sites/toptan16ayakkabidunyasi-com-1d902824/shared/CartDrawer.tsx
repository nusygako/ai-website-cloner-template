"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Trash2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "./CartContext";

function parsePriceNumber(price: string): number {
  // Turkish price formatting uses "." as a thousands separator and "," as
  // the decimal separator (e.g. "1.250,00 ₺").
  const numeric = parseFloat(
    price
      .replace(/[^0-9.,]/g, "")
      .replace(/\./g, "")
      .replace(",", "."),
  );
  return Number.isFinite(numeric) ? numeric : 0;
}

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem } = useCart();

  const subtotal = items.reduce(
    (sum, line) => sum + parsePriceNumber(line.price) * line.quantity,
    0,
  );

  const subtotalLabel = `${subtotal.toLocaleString("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} ₺`;

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden={!isOpen}
        onClick={closeCart}
        className={cn(
          "fixed inset-0 z-[100] bg-black/40 transition-opacity duration-300 ease-in-out",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Sepetiniz"
        className={cn(
          "fixed right-0 top-0 z-[101] flex h-dvh w-full max-w-[420px] flex-col bg-white shadow-[-8px_0_24px_rgba(0,0,0,0.12)] transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-toptan-dark/10 px-5 py-5">
          <h2 className="font-heading text-xl font-semibold text-toptan-dark">
            Sepetiniz
          </h2>
          <button type="button" aria-label="Sepeti kapat" onClick={closeCart}>
            <X className="h-5 w-5 text-toptan-dark" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag className="h-16 w-16 text-toptan-dark/20" />
            <p className="font-sans text-base text-toptan-dark/70">
              Sepetiniz boş
            </p>
            <button
              type="button"
              onClick={closeCart}
              className="rounded-full bg-toptan-dark px-6 py-3 text-sm font-medium text-white"
            >
              Alışverişe devam et
            </button>
          </div>
        ) : (
          <>
            {/* Item list */}
            <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-4">
              {items.map((line) => (
                <div key={line.id} className="relative flex gap-3">
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-toptan-dark/10">
                    <Image
                      src={line.image}
                      alt={line.title}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-1 pr-6">
                    <p className="font-sans text-[15px] font-bold text-toptan-dark">
                      {line.title}
                    </p>
                    {line.size && (
                      <p className="text-[13px] text-toptan-dark/50">
                        Beden: {line.size}
                      </p>
                    )}
                    <p className="text-[14px] text-toptan-dark">
                      {line.price}
                    </p>
                    <div className="mt-1 flex w-fit items-center gap-3 rounded-full border border-toptan-dark/15 px-3 py-1">
                      <button
                        type="button"
                        aria-label="Azalt"
                        onClick={() => updateQuantity(line.id, -1)}
                        className="text-toptan-dark"
                      >
                        −
                      </button>
                      <span className="min-w-[1ch] text-center text-sm text-toptan-dark">
                        {line.quantity}
                      </span>
                      <button
                        type="button"
                        aria-label="Arttır"
                        onClick={() => updateQuantity(line.id, 1)}
                        className="text-toptan-dark"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    aria-label="Ürünü kaldır"
                    onClick={() => removeItem(line.id)}
                    className="absolute right-0 top-0 text-toptan-dark/40 hover:text-toptan-dark"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-toptan-dark/10 px-5 py-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm text-toptan-dark/70">
                  Ara Toplam
                </span>
                <span className="font-heading text-lg font-semibold text-toptan-dark">
                  {subtotalLabel}
                </span>
              </div>
              <Link
                href="/cart"
                onClick={closeCart}
                className="block w-full rounded-full bg-toptan-dark px-6 py-4 text-center text-sm font-medium text-white"
              >
                Ödemeye Geç
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
