"use client";

import Image from "next/image";
import Link from "next/link";
import { Footprints, ShoppingBag, Sparkles, Trash2, Truck, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart, formatSubtotal, parsePriceNumber } from "./CartContext";

const FREE_SHIPPING_THRESHOLD = 2500;

interface CrossSellItem {
  id: string;
  title: string;
  price: string;
  icon: typeof Sparkles;
}

const CROSS_SELL_ITEMS: CrossSellItem[] = [
  { id: "cross-sell-temizlik-kiti", title: "Ayakkabı Temizleme Kiti", price: "149,00TL", icon: Sparkles },
  { id: "cross-sell-corap", title: "Spor Çorap (3'lü)", price: "89,00TL", icon: Footprints },
];

function FreeShippingProgress({ subtotal }: { subtotal: number }) {
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const qualified = remaining === 0;

  return (
    <div className="border-b border-toptan-dark/10 px-5 py-4">
      <p className="flex items-center gap-1.5 text-sm font-medium text-toptan-dark">
        <Truck className="h-4 w-4 shrink-0" />
        {qualified ? (
          <span>Ücretsiz kargo hakkını kazandınız! 🎉</span>
        ) : (
          <span>
            Kargo bedavaya{" "}
            <strong className="font-bold">
              {remaining.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}TL
            </strong>{" "}
            kaldı
          </span>
        )}
      </p>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-toptan-dark/10">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-500 ease-out",
            qualified ? "bg-[#0F9D8C]" : "bg-toptan-dark",
          )}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

function CrossSell() {
  const { addItem } = useCart();

  return (
    <div className="border-t border-toptan-dark/10 px-5 py-4">
      <p className="mb-3 text-sm font-bold text-toptan-dark">
        Bunu alanlar bunları da aldı
      </p>
      <div className="flex gap-3 overflow-x-auto">
        {CROSS_SELL_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="flex w-[140px] shrink-0 flex-col gap-2 rounded-lg border border-toptan-dark/10 p-3"
            >
              <div className="flex h-16 w-full items-center justify-center rounded-md bg-toptan-surface-muted">
                <Icon className="h-6 w-6 text-toptan-dark/50" />
              </div>
              <p className="text-[12px] font-medium leading-tight text-toptan-dark">
                {item.title}
              </p>
              <p className="text-[12px] font-bold text-toptan-dark">{item.price}</p>
              <button
                type="button"
                onClick={() =>
                  addItem({
                    id: item.id,
                    title: item.title,
                    image: "",
                    size: null,
                    price: item.price,
                  })
                }
                className="rounded-full border border-toptan-dark px-2 py-1.5 text-[11px] font-bold text-toptan-dark"
              >
                Sepete Ekle
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem } = useCart();

  const subtotalLabel = formatSubtotal(items);
  const subtotalValue = items.reduce(
    (sum, line) => sum + parsePriceNumber(line.price) * line.quantity,
    0,
  );

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
            <FreeShippingProgress subtotal={subtotalValue} />

            {/* Item list */}
            <div className="flex flex-1 flex-col overflow-y-auto">
              <div className="flex flex-col gap-4 px-4 py-4">
                {items.map((line) => (
                  <div key={line.id} className="relative flex gap-3">
                    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-toptan-dark/10 bg-toptan-surface-muted">
                      {line.image && (
                        <Image
                          src={line.image}
                          alt={line.title}
                          width={80}
                          height={80}
                          className="h-full w-full object-cover"
                        />
                      )}
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

              <CrossSell />
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
                className="block w-full rounded-full bg-toptan-dark px-6 py-4 text-center text-sm font-medium text-white transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98]"
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
