import type { MetadataRoute } from "next";
import {
  products,
  collections,
} from "@/lib/sites/toptan16ayakkabidunyasi-com-1d902824/data";

export const dynamic = "force-static";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.showroomayakkabi.com";

const LEGAL_SLUGS = [
  "teslimat-kosullari",
  "uyelik-sozlesmesi",
  "satis-sozlesmesi",
  "kvkk",
  "garanti-ve-iade-kosullari",
  "gizlilik-ve-guvenlik",
  "etk",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, priority: 1 },
    { url: `${SITE_URL}/search`, priority: 0.3 },
    { url: `${SITE_URL}/cart`, priority: 0.2 },
  ];

  const collectionRoutes: MetadataRoute.Sitemap = collections.map((c) => ({
    url: `${SITE_URL}/collections/${c.handle}`,
    priority: 0.8,
  }));

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${SITE_URL}/products/${p.handle}`,
    priority: 0.7,
  }));

  const legalRoutes: MetadataRoute.Sitemap = LEGAL_SLUGS.map((slug) => ({
    url: `${SITE_URL}/pages/${slug}`,
    priority: 0.2,
  }));

  return [...staticRoutes, ...collectionRoutes, ...productRoutes, ...legalRoutes];
}
