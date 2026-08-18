"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
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

interface NavLink {
  label: string;
  href: string;
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
      { label: "Adizero", href: "/collections/adizero" },
      { label: "Samba", href: "/collections/samba" },
      { label: "Spezial", href: "/collections/spezial" },
      { label: "Süperstar", href: "/collections/superstar" },
    ],
  },
  {
    label: "Nike",
    children: [
      { label: "530", href: "/collections/530" },
      { label: "Airforce Premium", href: "/collections/airforce-premium" },
      { label: "Airmax TN", href: "/collections/airmax-tn" },
      { label: "Dunk", href: "/collections/dunk" },
      { label: "Monarch", href: "/collections/monarch" },
      { label: "Zoomx", href: "/collections/zoomx" },
    ],
  },
  { label: "Vans", href: "/collections/vans" },
  { label: "Terlik", href: "/collections/terlik" },
  { label: "Topuklu Ayakkabı", href: "/collections/topuklu-ayakkabi" },
  { label: "Tüm Ayakkabılar", href: "/collections/tum-ayakkabilar" },
];

const TICKER_ITEMS = [
  "🚚 TÜM TÜRKİYE'YE ŞEFFAF KARGO",
  "2500₺ ÜSTÜ ÜCRETSİZ KARGO",
];

const LOGO_SRC =
  "/sites/toptan16ayakkabidunyasi-com-1d902824/shared/global/showroom-logo.png";


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
  const router = useRouter();
  const { items, openCart } = useCart();
  const cartCount = items.reduce((sum, line) => sum + line.quantity, 0);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  function submitSearch() {
    const q = searchQuery.trim();
    setSearchOpen(false);
    router.push(q ? `/search?q=${encodeURIComponent(q)}` : "/search");
  }

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
          "sticky top-0 z-50 bg-white transition-shadow duration-200",
          scrolled && "shadow-sm",
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
              src={LOGO_SRC}
              alt="Showroom Ayakkabı"
              width={1690}
              height={507}
              className="h-12 w-auto object-contain md:h-16"
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
            <button
              type="button"
              aria-label="Favoriler"
              className="hidden items-center justify-center sm:flex"
            >
              <Heart className="h-5 w-5 text-toptan-dark" />
            </button>
            <button
              type="button"
              aria-label="Hesabım"
              className="hidden items-center justify-center sm:flex"
            >
              <User className="h-5 w-5 text-toptan-dark" />
            </button>
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

        {/* Search overlay */}
        {searchOpen && (
          <div className="border-t border-toptan-dark/10 bg-white px-4 py-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submitSearch();
              }}
              className="mx-auto flex max-w-2xl items-center gap-2 rounded-full border border-toptan-dark/15 px-4 py-2"
            >
              <Search className="h-4 w-4 shrink-0 text-toptan-dark/50" />
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ne aramıştınız?"
                className="w-full bg-transparent text-sm text-toptan-dark outline-none placeholder:text-toptan-dark/40"
              />
              <button
                type="button"
                aria-label="Aramayı kapat"
                onClick={() => setSearchOpen(false)}
              >
                <X className="h-4 w-4 text-toptan-dark/50" />
              </button>
            </form>
          </div>
        )}

        {/* Nav row (desktop) */}
        <nav className="hidden border-t border-toptan-dark/10 md:block">
          <ul className="flex items-center justify-center gap-8 py-3 lg:gap-8 md:gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className="group relative">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      className="flex items-center gap-1 font-sans text-[18px] text-toptan-dark"
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    <div className="invisible absolute left-1/2 top-full z-50 min-w-[200px] -translate-x-1/2 translate-y-1 rounded-md bg-white p-2 opacity-0 shadow-lg transition-all duration-150 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block whitespace-nowrap rounded px-3 py-2 text-sm text-toptan-dark hover:bg-toptan-surface-muted"
                        >
                          {child.label}
                        </Link>
                      ))}
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
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-[85vw] max-w-sm overflow-y-auto bg-white shadow-xl">
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
