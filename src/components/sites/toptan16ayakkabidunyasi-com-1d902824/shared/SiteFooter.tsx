import type { ReactNode } from "react";
import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

const CORPORATE_LINKS: FooterLink[] = [
  { label: "Teslimat Koşulları", href: "/pages/teslimat-kosullari" },
  { label: "Üyelik Sözleşmesi", href: "/pages/uyelik-sozlesmesi" },
  { label: "Satış Sözleşmesi", href: "/pages/satis-sozlesmesi" },
  { label: "KVKK", href: "/pages/kvkk" },
  {
    label: "Garanti ve İade Koşulları",
    href: "/pages/garanti-ve-iade-kosullari",
  },
  { label: "Gizlilik ve Güvenlik", href: "/pages/gizlilik-ve-guvenlik" },
  { label: "ETK", href: "/pages/etk" },
];

const CATEGORY_LINKS: FooterLink[] = [
  { label: "Erkek Spor Ayakkabı", href: "/collections/erkek-spor-ayakkabi" },
  { label: "Kadın Spor Ayakkabı", href: "/collections/kadin-spor-ayakkabi" },
  { label: "Adidas", href: "/collections/adidas-ayakkabi" },
  { label: "Nike", href: "/collections/nike" },
  { label: "Vans", href: "/collections/vans" },
  { label: "Terlik", href: "/collections/terlik" },
  { label: "Topuklu Ayakkabı", href: "/collections/topuklu-ayakkabi" },
  { label: "Tüm Ayakkabılar", href: "/collections/tum-ayakkabilar" },
];

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-5 font-heading text-xl font-semibold text-white">
      {children}
    </h3>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-toptan-dark px-4 pb-6 pt-16 font-sans text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-12">
        {/* Column 1 */}
        <div>
          <FooterHeading>KURUMSAL</FooterHeading>
          <ul className="flex flex-col gap-2">
            {CORPORATE_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[15px] text-white/85 transition-colors hover:text-white hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <FooterHeading>Showroom Ayakkabı</FooterHeading>
          <div className="flex flex-col gap-4 text-[15px] leading-relaxed text-white/85">
            <div>
              <p className="font-semibold text-white">Adres</p>
              <p>Bilecik-Merkez Dominos Pizza Altı</p>
            </div>
            <div>
              <p className="font-semibold text-white">Telefon</p>
              <p>0552 125 49 11</p>
            </div>
            <div>
              <p className="font-semibold text-white">E-posta</p>
              <p>info@showroomayakkabi.com</p>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div>
          <FooterHeading>Kategorilerimiz</FooterHeading>
          <ul className="flex flex-col gap-2">
            {CATEGORY_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[15px] text-white/85 transition-colors hover:text-white hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center gap-2 border-t border-white/10 pt-6 text-center text-[13px] text-white/60">
        <span>© 2026, Showroom Ayakkabı</span>
        <a
          href="https://www.instagram.com/cekenbiradam"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 transition-colors hover:text-white hover:underline"
        >
          CekenBirADAM
        </a>
      </div>
    </footer>
  );
}
