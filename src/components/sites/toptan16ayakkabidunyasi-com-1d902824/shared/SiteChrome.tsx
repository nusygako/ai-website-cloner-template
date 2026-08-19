"use client";

import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { CartDrawer } from "./CartDrawer";
import { WhatsAppButton } from "./WhatsAppButton";
import { CartProvider } from "./CartContext";
import { AccountProvider } from "./AccountContext";
import { WishlistProvider } from "./WishlistContext";
import { PageNavBar } from "./PageNavBar";
import { CookieConsent } from "./CookieConsent";
import { PageTransition } from "./PageTransition";
import { ServiceWorkerRegister } from "./ServiceWorkerRegister";

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <AccountProvider>
      <WishlistProvider>
        <CartProvider>
          <SiteHeader />
          <PageNavBar />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <SiteFooter />
          <CartDrawer />
          <WhatsAppButton />
          <CookieConsent />
          <ServiceWorkerRegister />
        </CartProvider>
      </WishlistProvider>
    </AccountProvider>
  );
}
