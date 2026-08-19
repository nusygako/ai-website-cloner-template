"use client";

import { useEffect, useState } from "react";
import { Ruler, X } from "lucide-react";

interface SizeRow {
  size: string;
  length: string;
  width: string;
}

const STANDARD_SIZES: SizeRow[] = [
  { size: "36", length: "22 cm", width: "7 cm" },
  { size: "37", length: "22,5 cm", width: "7,5 cm" },
  { size: "38", length: "23 cm", width: "8 cm" },
  { size: "39", length: "23,5 cm", width: "8,5 cm" },
  { size: "40", length: "24 cm", width: "9 cm" },
];

export function SizeChart({ rows = STANDARD_SIZES }: { rows?: SizeRow[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-toptan-accent underline underline-offset-4"
      >
        <Ruler className="h-4 w-4" />
        Beden Tablosu
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Beden tablosu"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-xl font-semibold text-toptan-dark">
                Beden Tablosu
              </h3>
              <button type="button" onClick={() => setOpen(false)} aria-label="Kapat">
                <X className="h-5 w-5 text-toptan-dark" />
              </button>
            </div>

            <table className="mt-5 w-full text-left text-sm">
              <thead>
                <tr className="border-b border-toptan-dark/10 text-toptan-dark/50">
                  <th className="py-2 pr-2 font-medium">Numara</th>
                  <th className="py-2 pr-2 font-medium">Uzunluk (boy)</th>
                  <th className="py-2 font-medium">Genişlik (en)</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.size} className="border-b border-toptan-dark/5">
                    <td className="py-2.5 pr-2 font-heading font-semibold text-toptan-accent">
                      {r.size}
                    </td>
                    <td className="py-2.5 pr-2 text-toptan-dark">{r.length}</td>
                    <td className="py-2.5 text-toptan-dark">{r.width}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="mt-4 text-xs leading-relaxed text-toptan-dark/50">
              İç taban ölçüsüdür. Kalıplar farklılık gösterebilmektedir. Beden
              tablosundan destek almanızı öneririz.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
