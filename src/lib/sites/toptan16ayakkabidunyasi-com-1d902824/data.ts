import type { Collection, GlobalAssets, Product } from "@/types/toptan16";
import productsJson from "./products.json";
import collectionsJson from "./collections.json";
import globalAssetsJson from "./global-assets.json";
import campaignJson from "./campaign.json";

export const products = productsJson as Product[];
export const collections = collectionsJson as Collection[];
export const globalAssets = globalAssetsJson as GlobalAssets;

export interface CampaignItem {
  handle: string;
  title: string;
  price: number | null;
  compareAtPrice: number | null;
  image: string;
}

export const campaignItems = campaignJson as CampaignItem[];

const productsByHandle = new Map(products.map((p) => [p.handle, p]));
const collectionsByHandle = new Map(collections.map((c) => [c.handle, c]));

export function getProduct(handle: string): Product | undefined {
  return productsByHandle.get(handle);
}

export function getCollection(handle: string): Collection | undefined {
  return collectionsByHandle.get(handle);
}

export function getCollectionProducts(handle: string): Product[] {
  const collection = getCollection(handle);
  if (!collection) return [];
  return collection.productHandles
    .map((h) => productsByHandle.get(h))
    .filter((p): p is Product => Boolean(p));
}

const BROAD_COLLECTION_HANDLES = new Set([
  "frontpage",
  "tum-ayakkabilar",
  "cok-satanlar",
  "kampanyali-urunler",
  "nike-ayakkabi",
  "nike",
  "adidas-ayakkabi",
  "erkek-spor-ayakkabi",
  "kadin-spor-ayakkabi",
  "toptan-serili-satis-koleksiyon",
]);

/**
 * Finds sibling color variants of a product by picking the narrowest
 * (smallest, non-broad) collection that contains it — these products are
 * modeled as separate Shopify products rather than true variants.
 */
export function getColorSiblings(
  handle: string
): { handle: string; image: string; label: string }[] {
  let best: Collection | null = null;
  for (const collection of collections) {
    if (BROAD_COLLECTION_HANDLES.has(collection.handle)) continue;
    if (!collection.productHandles.includes(handle)) continue;
    if (collection.productHandles.length < 2) continue;
    if (!best || collection.productHandles.length < best.productHandles.length) {
      best = collection;
    }
  }
  if (!best) return [];
  return best.productHandles
    .map((h) => productsByHandle.get(h))
    .filter((p): p is Product => Boolean(p))
    .map((p) => ({
      handle: p.handle,
      image: p.images[0]?.src ?? "",
      label: p.title,
    }));
}

export function formatPrice(value: number | string | null): string {
  if (value === null) return "";
  const n = typeof value === "string" ? parseFloat(value) : value;
  return `${n.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}TL`;
}

export const NAV_COLLECTIONS = {
  simple: ["erkek-spor-ayakkabi", "kadin-spor-ayakkabi"],
  adidas: { label: "Adidas", handles: ["adizero", "samba", "spezial", "superstar"] },
  nike: { label: "Nike", handles: ["530", "airforce-premium", "airmax-tn", "dunk", "monarch", "zoomx"] },
  trailing: ["vans", "terlik", "topuklu-ayakkabi", "tum-ayakkabilar"],
};
