"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-4 py-24 text-center">
      <h1 className="font-heading text-2xl font-semibold text-[#121212]">
        Bir şeyler ters gitti
      </h1>
      <p className="mt-2 text-sm text-[rgba(18,18,18,0.6)]">
        Bu sayfa yüklenirken beklenmeyen bir hata oluştu.
      </p>
      <div className="mt-8 flex gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-full bg-[#121212] px-6 py-3 text-sm font-bold text-white"
        >
          Tekrar Dene
        </button>
        <Link
          href="/"
          className="rounded-full border border-[#121212] px-6 py-3 text-sm font-bold text-[#121212]"
        >
          Ana Sayfa
        </Link>
      </div>
    </div>
  );
}
