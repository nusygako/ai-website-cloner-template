"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductReviewsProps {
  productTitle: string;
}

interface OtherProductReview {
  id: number;
  name: string;
  date: string;
  emoji: string | null;
  text: string | null;
  productName: string;
}

const OTHER_PRODUCT_REVIEWS: OtherProductReview[] = [
  {
    id: 1,
    name: "Sezai Yılmaz",
    date: "07/31/2026",
    emoji: "👍🙌",
    text: null,
    productName: "AIRMAX TN Beyaz Mavi",
  },
  {
    id: 2,
    name: "Sezai Yılmaz",
    date: "07/31/2026",
    emoji: null,
    text: "İlgilerinden dolayı teşekkür ederim görseldeki ürünün aynısı geldi",
    productName: "AIRMAX TN Beyaz Siyah",
  },
  {
    id: 3,
    name: "Anonim",
    date: "07/24/2026",
    emoji: null,
    text: "Güzel çok beğendim",
    productName: "Airforce Premium Full Beyaz",
  },
];

type Tab = "product" | "store";

function StarRow() {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className="h-[18px] w-[18px]"
          fill="#0F9D8C"
          stroke="#0F9D8C"
        />
      ))}
    </div>
  );
}

export function ProductReviews({ productTitle }: ProductReviewsProps) {
  const [activeTab, setActiveTab] = useState<Tab>("product");

  return (
    <div className="mx-auto w-full max-w-[900px] px-4">
      <div
        className="flex flex-wrap items-center justify-between gap-4"
        style={{ borderBottom: "1px solid rgba(18,18,18,0.1)" }}
      >
        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={() => setActiveTab("product")}
            className={cn(
              "-mb-px pb-3 text-sm sm:text-base",
              activeTab === "product"
                ? "border-b-2 border-[#121212] font-bold text-[#121212]"
                : "border-b-2 border-transparent"
            )}
            style={activeTab === "product" ? undefined : { color: "rgba(18,18,18,0.5)" }}
          >
            Ürün değerlendirmeleri (0)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("store")}
            className={cn(
              "-mb-px pb-3 text-sm sm:text-base",
              activeTab === "store"
                ? "border-b-2 border-[#121212] font-bold text-[#121212]"
                : "border-b-2 border-transparent"
            )}
            style={activeTab === "store" ? undefined : { color: "rgba(18,18,18,0.5)" }}
          >
            Mağaza değerlendirmeleri (2)
          </button>
        </div>
        <select
          aria-label="Sırala"
          className="rounded px-2 py-1 text-sm text-[#121212]"
          style={{ border: "1px solid rgba(18,18,18,0.25)" }}
          defaultValue="newest"
        >
          <option value="newest">En yeni</option>
          <option value="oldest">En eski</option>
        </select>
      </div>

      {activeTab === "product" && (
        <div className="flex flex-col items-center gap-4 py-12 text-center">
          <p className="text-base text-[#121212]">
            İlk değerlendirmeyi yapan siz olun
          </p>
          <button
            type="button"
            aria-label={`${productTitle} için değerlendirme yazın`}
            className="rounded-[6px] bg-[#0F9D8C] px-5 py-2.5 text-sm font-semibold text-white"
          >
            Değerlendirme yazın
          </button>
        </div>
      )}

      <h2 className="mt-8 text-xl font-bold text-[#121212]">
        Diğer Ürünler İçin Değerlendirmeler ({OTHER_PRODUCT_REVIEWS.length})
      </h2>

      <div className="mt-4">
        {OTHER_PRODUCT_REVIEWS.map((review, index) => (
          <div key={review.id}>
            <div className="py-2">
              <StarRow />
              <div className="mt-2 flex items-center gap-2">
                <span className="font-bold text-[#121212]">{review.name}</span>
                <span className="rounded-full bg-[#E3F5F1] px-2 py-0.5 text-[11px] font-medium text-[#0F9D8C]">
                  Doğrulanmış
                </span>
              </div>
              <p className="mt-1 text-[13px] text-gray-500">{review.date}</p>
              {review.emoji && <p className="mt-2 text-base">{review.emoji}</p>}
              {review.text && (
                <p className="mt-2 text-[15px] text-[#121212]">{review.text}</p>
              )}
              <div className="mt-3 flex items-center gap-3 rounded-lg bg-[#EBF3F0] p-3">
                <div className="h-9 w-9 shrink-0 rounded-md bg-[#CFE3DC] sm:h-12 sm:w-12" />
                <p className="text-sm text-[#121212]">
                  Değerlendirme for{" "}
                  <span className="font-bold underline">{review.productName}</span>
                </p>
              </div>
            </div>
            {index < OTHER_PRODUCT_REVIEWS.length - 1 && (
              <div
                className="my-6"
                style={{ borderTop: "1px solid rgba(18,18,18,0.1)" }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
