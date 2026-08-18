import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-center px-4 py-32 text-center">
      <h1 className="font-heading text-[64px] font-bold text-[#121212] md:text-[96px]">
        404
      </h1>
      <p className="mt-4 text-lg text-[rgba(18,18,18,0.7)]">
        Sayfa bulunamadı
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-[#121212] px-8 py-4 text-sm font-bold text-white"
      >
        Alışverişe devam et
      </Link>
    </div>
  );
}
