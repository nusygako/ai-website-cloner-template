"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { ArrowLeft, Home } from "lucide-react";

export function PageNavBar() {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <div
      className="sticky top-0 z-30 flex items-center gap-4 bg-white px-4 py-2 text-sm font-medium text-[#121212] sm:px-6"
      style={{ borderBottom: "1px solid rgba(18,18,18,0.08)" }}
    >
      <button
        type="button"
        onClick={() => router.back()}
        className="flex items-center gap-1.5 hover:opacity-70"
      >
        <ArrowLeft className="h-4 w-4" />
        Geri Dön
      </button>
      <span aria-hidden style={{ color: "rgba(18,18,18,0.2)" }}>
        |
      </span>
      <Link href="/" className="flex items-center gap-1.5 hover:opacity-70">
        <Home className="h-4 w-4" />
        Ana Sayfa
      </Link>
    </div>
  );
}
