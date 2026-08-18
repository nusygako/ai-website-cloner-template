export interface ProductImage {
  src: string;
  alt: string;
  width: number | null;
  height: number | null;
}

export interface ProductOption {
  name: string;
  values: string[];
}

export interface ProductVariant {
  id: number;
  title: string;
  size: string | null;
  price: string;
  compareAtPrice: string | null;
  available: boolean;
}

export interface Product {
  id: number;
  handle: string;
  title: string;
  description: string;
  vendor: string | null;
  price: number | null;
  compareAtPrice: number | null;
  images: ProductImage[];
  options: ProductOption[];
  variants: ProductVariant[];
  tags: string[];
}

export interface Collection {
  id: number;
  handle: string;
  title: string;
  description: string;
  image: string | null;
  productsCount: number;
  productHandles: string[];
}

export interface GlobalAssets {
  logo: string;
  hero: string[];
  comparison: string[];
}
