import type { Metadata, Viewport } from "next";
import { Poppins, Archivo } from "next/font/google";
import { SiteChrome } from "@/components/sites/toptan16ayakkabidunyasi-com-1d902824/shared/SiteChrome";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Showroom Ayakkabı",
    template: "%s | Showroom Ayakkabı",
  },
  description:
    "Showroom Ayakkabı — spor, terlik, topuklu ve babet ayakkabı modelleri.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Showroom Ayakkabı",
  },
};

export const viewport: Viewport = {
  themeColor: "#14b8a6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${poppins.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
