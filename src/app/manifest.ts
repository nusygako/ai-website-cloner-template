import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Showroom Ayakkabı",
    short_name: "Showroom",
    description:
      "Showroom Ayakkabı — spor, terlik, topuklu ve babet ayakkabı modelleri.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#14b8a6",
    icons: [
      {
        src: "/seo/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/seo/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
