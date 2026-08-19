"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { trackEvent } from "@/lib/sites/toptan16ayakkabidunyasi-com-1d902824/analytics";

export interface CartLine {
  id: string;
  title: string;
  image: string;
  size?: string | null;
  price: string;
  quantity: number;
}

interface CartContextValue {
  items: CartLine[];
  isOpen: boolean;
  addItem: (line: Omit<CartLine, "quantity">, quantity?: number) => void;
  updateQuantity: (id: string, delta: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

const STORAGE_KEY = "showroom-ayakkabi-cart";

export function parsePriceNumber(price: string): number {
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

export function formatSubtotal(items: CartLine[]): string {
  const subtotal = items.reduce(
    (sum, line) => sum + parsePriceNumber(line.price) * line.quantity,
    0,
  );
  return `${subtotal.toLocaleString("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} ₺`;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration from localStorage, unavailable during SSR
      if (raw) setItems(JSON.parse(raw) as CartLine[]);
    } catch {
      // Ignore corrupt/unavailable storage; start with an empty cart.
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  function addItem(line: Omit<CartLine, "quantity">, quantity = 1) {
    setItems((current) => {
      const existing = current.find((l) => l.id === line.id);
      if (existing) {
        return current.map((l) =>
          l.id === line.id ? { ...l, quantity: l.quantity + quantity } : l,
        );
      }
      return [...current, { ...line, quantity }];
    });
    setIsOpen(true);
  }

  function updateQuantity(id: string, delta: number) {
    setItems((current) =>
      current
        .map((line) =>
          line.id === id
            ? { ...line, quantity: Math.max(1, line.quantity + delta) }
            : line,
        )
        .filter((line) => line.quantity > 0),
    );
  }

  function removeItem(id: string) {
    setItems((current) => {
      const removed = current.find((line) => line.id === id);
      if (removed) {
        trackEvent("remove_from_cart", {
          currency: "TRY",
          items: [
            {
              item_id: removed.id,
              item_name: removed.title,
              price: parsePriceNumber(removed.price),
              quantity: removed.quantity,
            },
          ],
        });
      }
      return current.filter((line) => line.id !== id);
    });
  }

  function clearCart() {
    setItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
