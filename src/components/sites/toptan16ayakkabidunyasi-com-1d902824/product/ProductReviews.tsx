"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductReviewsProps {
  productHandle: string;
  productTitle: string;
}

interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
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
type SortOrder = "newest" | "oldest";

function reviewsStorageKey(handle: string) {
  return `showroom-ayakkabi-reviews-${handle}`;
}

function StarRow({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className="h-[18px] w-[18px]"
          fill={index < rating ? "#0F9D8C" : "none"}
          stroke="#0F9D8C"
        />
      ))}
    </div>
  );
}

export function ProductReviews({ productHandle, productTitle }: ProductReviewsProps) {
  const [activeTab, setActiveTab] = useState<Tab>("product");
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(reviewsStorageKey(productHandle));
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration from localStorage, unavailable during SSR
      if (raw) setReviews(JSON.parse(raw) as Review[]);
    } catch {
      // Ignore corrupt/unavailable storage.
    }
  }, [productHandle]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newReview: Review = {
      id: crypto.randomUUID(),
      name: name.trim() || "Anonim",
      rating,
      text: text.trim(),
      date: new Date().toLocaleDateString("tr-TR"),
    };
    const updated = [newReview, ...reviews];
    setReviews(updated);
    window.localStorage.setItem(
      reviewsStorageKey(productHandle),
      JSON.stringify(updated),
    );
    setShowForm(false);
    setName("");
    setRating(5);
    setText("");
  }

  const sortedReviews = [...reviews].sort((a, b) =>
    sortOrder === "newest"
      ? b.id.localeCompare(a.id)
      : a.id.localeCompare(b.id),
  );

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
            Ürün değerlendirmeleri ({reviews.length})
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
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as SortOrder)}
        >
          <option value="newest">En yeni</option>
          <option value="oldest">En eski</option>
        </select>
      </div>

      {activeTab === "product" && (
        <div className="py-8">
          {sortedReviews.length === 0 && !showForm && (
            <div className="flex flex-col items-center gap-4 py-4 text-center">
              <p className="text-base text-[#121212]">
                İlk değerlendirmeyi yapan siz olun
              </p>
            </div>
          )}

          {sortedReviews.map((review) => (
            <div key={review.id} className="border-b border-[rgba(18,18,18,0.08)] py-4">
              <StarRow rating={review.rating} />
              <p className="mt-2 font-bold text-[#121212]">{review.name}</p>
              <p className="mt-0.5 text-[13px] text-gray-500">{review.date}</p>
              {review.text && (
                <p className="mt-2 text-[15px] text-[#121212]">{review.text}</p>
              )}
            </div>
          ))}

          {showForm ? (
            <form
              onSubmit={handleSubmit}
              className="mt-4 flex flex-col gap-3 rounded-lg border border-[rgba(18,18,18,0.12)] p-4 text-left"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`${index + 1} yıldız`}
                    onClick={() => setRating(index + 1)}
                  >
                    <Star
                      className="h-6 w-6"
                      fill={index < rating ? "#0F9D8C" : "none"}
                      stroke="#0F9D8C"
                    />
                  </button>
                ))}
              </div>
              <input
                placeholder="Adınız"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-md border px-3 py-2 text-sm"
                style={{ borderColor: "rgba(18,18,18,0.2)" }}
              />
              <textarea
                required
                placeholder={`${productTitle} hakkında ne düşünüyorsunuz?`}
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={3}
                className="rounded-md border px-3 py-2 text-sm"
                style={{ borderColor: "rgba(18,18,18,0.2)" }}
              />
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 rounded-[6px] bg-[#0F9D8C] px-5 py-2.5 text-sm font-semibold text-white"
                >
                  Gönder
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 rounded-[6px] border border-[rgba(18,18,18,0.2)] px-5 py-2.5 text-sm font-semibold text-[#121212]"
                >
                  Vazgeç
                </button>
              </div>
            </form>
          ) : (
            <div className="mt-4 flex justify-center">
              <button
                type="button"
                aria-label={`${productTitle} için değerlendirme yazın`}
                onClick={() => setShowForm(true)}
                className="rounded-[6px] bg-[#0F9D8C] px-5 py-2.5 text-sm font-semibold text-white"
              >
                Değerlendirme yazın
              </button>
            </div>
          )}
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
