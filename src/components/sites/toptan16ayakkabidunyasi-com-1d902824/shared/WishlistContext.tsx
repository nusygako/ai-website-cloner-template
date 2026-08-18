"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export interface WishlistItem {
  handle: string;
  title: string;
  image: string;
  price: string;
}

interface WishlistContextValue {
  items: WishlistItem[];
  isWishlisted: (handle: string) => boolean;
  toggle: (item: WishlistItem) => void;
  remove: (handle: string) => void;
}

const STORAGE_KEY = "showroom-ayakkabi-wishlist";

const WishlistContext = createContext<WishlistContextValue | null>(null);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration from localStorage, unavailable during SSR
      if (raw) setItems(JSON.parse(raw) as WishlistItem[]);
    } catch {
      // Ignore corrupt/unavailable storage; start with an empty wishlist.
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  function isWishlisted(handle: string) {
    return items.some((item) => item.handle === handle);
  }

  function toggle(item: WishlistItem) {
    setItems((current) =>
      current.some((line) => line.handle === item.handle)
        ? current.filter((line) => line.handle !== item.handle)
        : [...current, item],
    );
  }

  function remove(handle: string) {
    setItems((current) => current.filter((line) => line.handle !== handle));
  }

  return (
    <WishlistContext.Provider value={{ items, isWishlisted, toggle, remove }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within a WishlistProvider");
  return ctx;
}
