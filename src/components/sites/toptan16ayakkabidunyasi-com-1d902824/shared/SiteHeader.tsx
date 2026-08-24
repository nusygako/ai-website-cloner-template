"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Heart,
  User,
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "./CartContext";
import { useWishlist } from "./WishlistContext";
import { PredictiveSearch } from "./PredictiveSearch";
import { getCollectionProducts } from "@/lib/sites/toptan16ayakkabidunyasi-com-1d902824/data";

interface NavLink {
  label: string;
  href: string;
  collectionHandle: string;
}

interface NavItem {
  label: string;
  href?: string;
  children?: NavLink[];
}

const NAV_ITEMS: NavItem[] = [
  { label: "Erkek Spor Ayakkabı", href: "/collections/erkek-spor-ayakkabi" },
  { label: "Kadın Spor Ayakkabı", href: "/collections/kadin-spor-ayakkabi" },
  {
    label: "Adidas",
    children: [
      { label: "Adizero", href: "/collections/adizero", collectionHandle: "adizero" },
      { label: "Samba", href: "/collections/samba", collectionHandle: "samba" },
      { label: "Spezial", href: "/collections/spezial", collectionHandle: "spezial" },
      { label: "Süperstar", href: "/collections/superstar", collectionHandle: "superstar" },
    ],
  },
  {
    label: "Nike",
    children: [
      { label: "530", href: "/collections/530", collectionHandle: "530" },
      { label: "Airforce Premium", href: "/collections/airforce-premium", collectionHandle: "airforce-premium" },
      { label: "Airmax TN", href: "/collections/airmax-tn", collectionHandle: "airmax-tn" },
      { label: "Dunk", href: "/collections/dunk", collectionHandle: "dunk" },
      { label: "Monarch", href: "/collections/monarch", collectionHandle: "monarch" },
      { label: "Zoomx", href: "/collections/zoomx", collectionHandle: "zoomx" },
    ],
  },
  { label: "Vans", href: "/collections/vans" },
  { label: "Terlik", href: "/collections/terlik" },
  { label: "Topuklu Ayakkabı", href: "/collections/topuklu-ayakkabi" },
  { label: "Tüm Ayakkabılar", href: "/collections/tum-ayakkabilar" },
];

function megaMenuBanner(children: NavLink[]): { src: string; alt: string } | null {
  for (const child of children) {
    const [firstProduct] = getCollectionProducts(child.collectionHandle);
    const image = firstProduct?.images[0];
    if (image) return { src: image.src, alt: firstProduct.title };
  }
  return null;
}

const TICKER_ITEMS = [
  "🚚 TÜM TÜRKİYE'YE ŞEFFAF KARGO",
  "TÜM SİPARİŞLERDE ÜCRETSİZ KARGO",
];

const LOGO_COMBINED_SRC =
  "/sites/toptan16ayakkabidunyasi-com-1d902824/shared/global/logo-combined.webp";


function TickerContent() {
  return (
    <div className="flex shrink-0 items-center">
      {Array.from({ length: 8 }).map((_, i) => (
        <span
          key={i}
          className="mx-8 whitespace-nowrap text-sm font-medium text-white"
        >
          {TICKER_ITEMS[i % TICKER_ITEMS.length]}
        </span>
      ))}
    </div>
  );
}

export function SiteHeader() {
  const { items, openCart } = useCart();
  const cartCount = items.reduce((sum, line) => sum + line.quantity, 0);
  const { items: wishlistItems } = useWishlist();
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen || searchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, searchOpen]);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-toptan-accent px-4 py-3 text-center text-sm font-bold text-white">
        🔥 1 Alana 1 Bedava Fırsatı Başladı!
      </div>

      {/* Shipping ticker */}
      <div className="overflow-hidden bg-toptan-dark py-2.5">
        <div className="marquee-track flex w-max">
          <TickerContent />
          <TickerContent />
        </div>
      </div>

      {/* Sticky header + nav */}
      <div
        className={cn(
          "sticky top-0 z-50 bg-white transition-shadow duration-300",
          scrolled && "shadow-[0_4px_20px_rgba(18,18,18,0.08)]",
        )}
      >
        {/* Header row */}
        <div className="flex items-center justify-between px-4 py-4 md:py-6">
          <div className="flex items-center gap-2 md:min-w-[120px]">
            <button
              type="button"
              aria-label="Menüyü aç"
              className="flex items-center justify-center md:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5 text-toptan-dark" />
            </button>
            <button
              type="button"
              aria-label="Arama"
              className="hidden items-center justify-center md:flex"
              onClick={() => setSearchOpen((v) => !v)}
            >
              <Search className="h-5 w-5 text-toptan-dark" />
            </button>
          </div>

          <Link href="/" className="flex items-center justify-center">
            <Image
              src={LOGO_COMBINED_SRC}
              alt="Showroom Ayakkabı"
              width={2027}
              height={834}
              className="h-14 w-auto object-contain md:h-20"
              priority
            />
          </Link>

          <div className="flex items-center gap-4 md:min-w-[120px] md:justify-end md:gap-6">
            <button
              type="button"
              aria-label="Arama"
              className="flex items-center justify-center md:hidden"
              onClick={() => setSearchOpen((v) => !v)}
            >
              <Search className="h-5 w-5 text-toptan-dark" />
            </button>
            <Link
              href="/apps/page/wishlist"
              aria-label="Favoriler"
              className="relative hidden items-center justify-center sm:flex"
            >
              <Heart className="h-5 w-5 text-toptan-dark" />
              {wishlistItems.length > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-toptan-dark text-[10px] font-semibold text-white">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            <Link
              href="/account"
              aria-label="Hesabım"
              className="hidden items-center justify-center sm:flex"
            >
              <User className="h-5 w-5 text-toptan-dark" />
            </Link>
            <button
              type="button"
              aria-label="Sepetim"
              onClick={openCart}
              className="relative flex items-center justify-center"
            >
              <ShoppingBag className="h-5 w-5 text-toptan-dark" />
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-toptan-dark text-[10px] font-semibold text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Nav row (desktop) */}
        <nav className="hidden border-t border-toptan-dark/10 md:block">
          <ul className="flex items-center justify-center gap-8 py-3 lg:gap-8 md:gap-4">
            {NAV_ITEMS.map((item) => {
              const banner = item.children ? megaMenuBanner(item.children) : null;
              return (
                <li key={item.label} className="group relative">
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        className="flex items-center gap-1 font-sans text-[18px] text-toptan-dark"
                      >
                        {item.label}
                        <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                      </button>
                      <div className="pointer-events-none absolute left-1/2 top-full z-50 flex w-[420px] -translate-x-1/2 translate-y-2 overflow-hidden rounded-lg bg-white opacity-0 shadow-[0_16px_40px_rgba(0,0,0,0.15)] transition-all duration-200 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                        <div className="flex-1 p-4">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block whitespace-nowrap rounded px-3 py-2.5 text-sm text-toptan-dark transition-colors hover:bg-toptan-surface-muted"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                        {banner && (
                          <Link
                            href={item.children[0]?.href ?? "#"}
                            className="relative block w-[160px] shrink-0 self-stretch"
                          >
                            <Image
                              src={banner.src}
                              alt={banner.alt}
                              fill
                              sizes="160px"
                              className="object-cover"
                            />
                            <div
                              className="absolute inset-0"
                              style={{
                                background:
                                  "linear-gradient(180deg, rgba(18,18,18,0) 40%, rgba(18,18,18,0.5) 100%)",
                              }}
                            />
                            <span className="absolute bottom-2 left-2 right-2 text-xs font-bold text-white">
                              {item.label} Koleksiyonu
                            </span>
                          </Link>
                        )}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href ?? "#"}
                      className="font-sans text-[18px] text-toptan-dark"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <PredictiveSearch open={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Site menüsü"
            className="absolute left-0 top-0 h-full w-[85vw] max-w-sm overflow-y-auto bg-white shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-toptan-dark/10 px-4 py-4">
              <span className="font-heading text-lg font-semibold text-toptan-dark">
                Menü
              </span>
              <button
                type="button"
                aria-label="Menüyü kapat"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-5 w-5 text-toptan-dark" />
              </button>
            </div>
            <ul className="flex flex-col px-2 py-2">
              {NAV_ITEMS.map((item) => (
                <li
                  key={item.label}
                  className="border-b border-toptan-dark/5"
                >
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between px-3 py-3 text-left font-sans text-base text-toptan-dark"
                        onClick={() =>
                          setMobileExpanded((cur) =>
                            cur === item.label ? null : item.label,
                          )
                        }
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform duration-150",
                            mobileExpanded === item.label && "rotate-180",
                          )}
                        />
                      </button>
                      {mobileExpanded === item.label && (
                        <div className="flex flex-col pb-2 pl-6">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="py-2 text-sm text-toptan-dark/80"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href ?? "#"}
                      className="block px-3 py-3 font-sans text-base text-toptan-dark"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
