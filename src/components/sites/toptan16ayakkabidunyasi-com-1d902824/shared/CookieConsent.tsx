"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ConsentPrefs {
  analytics: boolean;
  marketing: boolean;
}

const STORAGE_KEY = "showroom-ayakkabi-cookie-consent";

function readConsent(): ConsentPrefs | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ConsentPrefs) : null;
  } catch {
    return null;
  }
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time check against localStorage, unavailable during SSR
    if (!readConsent()) setVisible(true);
  }, []);

  function save(prefs: ConsentPrefs) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    setVisible(false);
    setShowPrefs(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[200] p-4 sm:p-6">
      <div className="mx-auto max-w-3xl rounded-xl border border-[rgba(18,18,18,0.1)] bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.15)] sm:p-6">
        {showPrefs ? (
          <>
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-lg font-semibold text-[#121212]">
                Çerez Tercihleri
              </h2>
              <button
                type="button"
                aria-label="Kapat"
                onClick={() => setShowPrefs(false)}
                className="text-[#121212]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 flex flex-col gap-4">
              <div className="flex items-center justify-between gap-4 rounded-lg bg-[rgba(18,18,18,0.04)] p-3">
                <div>
                  <p className="text-sm font-bold text-[#121212]">Zorunlu Çerezler</p>
                  <p className="mt-0.5 text-xs text-[rgba(18,18,18,0.6)]">
                    Site işlevleri (sepet, oturum) için gereklidir, kapatılamaz.
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-[#121212] px-3 py-1 text-xs font-bold text-white">
                  Her zaman aktif
                </span>
              </div>

              <label className="flex items-center justify-between gap-4 rounded-lg bg-[rgba(18,18,18,0.04)] p-3">
                <div>
                  <p className="text-sm font-bold text-[#121212]">Analitik Çerezler</p>
                  <p className="mt-0.5 text-xs text-[rgba(18,18,18,0.6)]">
                    Site kullanımını anlamamıza ve iyileştirmemize yardımcı olur.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="h-5 w-5 shrink-0"
                />
              </label>

              <label className="flex items-center justify-between gap-4 rounded-lg bg-[rgba(18,18,18,0.04)] p-3">
                <div>
                  <p className="text-sm font-bold text-[#121212]">Pazarlama Çerezleri</p>
                  <p className="mt-0.5 text-xs text-[rgba(18,18,18,0.6)]">
                    İlgi alanlarınıza yönelik kampanya ve reklam gösterimi sağlar.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="h-5 w-5 shrink-0"
                />
              </label>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => save({ analytics, marketing })}
                className="flex-1 rounded-full bg-[#121212] px-6 py-3 text-sm font-bold text-white"
              >
                Tercihleri Kaydet
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="font-heading text-lg font-semibold text-[#121212]">
              Çerezleri kullanıyoruz
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[rgba(18,18,18,0.7)]">
              Çerezler kullanarak daha güvenilir ve gelişmiş bir alışveriş deneyimi
              sunmayı amaçlıyoruz. Eğer &quot;Reddet&quot; seçeneğine tıklarsanız, ne
              yazık ki tercihlerinize ve ilgi alanlarınıza yönelik özel bir deneyim
              sağlayamayız. &quot;Tercihler&quot; bölümüne tıklayarak çerez
              tercihlerinizi değiştirebilirsiniz. Çerezler aracılığıyla topladığımız
              kişisel veriler ve bu verilerin nasıl kullanıldığı hakkında bilgi
              metnimize{" "}
              <Link
                href="/pages/gizlilik-ve-guvenlik"
                className="font-bold underline"
              >
                buradan
              </Link>{" "}
              ulaşabilirsiniz.
            </p>
            <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setShowPrefs(true)}
                className={cn(
                  "rounded-full border border-[#121212] px-6 py-3 text-sm font-bold text-[#121212]",
                )}
              >
                Tercihler
              </button>
              <button
                type="button"
                onClick={() => save({ analytics: false, marketing: false })}
                className="rounded-full border border-[rgba(18,18,18,0.25)] px-6 py-3 text-sm font-bold text-[#121212]"
              >
                Reddet
              </button>
              <button
                type="button"
                onClick={() => save({ analytics: true, marketing: true })}
                className="rounded-full bg-[#121212] px-6 py-3 text-sm font-bold text-white"
              >
                Tamamdır
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
