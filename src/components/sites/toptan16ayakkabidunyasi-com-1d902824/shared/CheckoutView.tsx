"use client";

import { useEffect, useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Lock, ShieldCheck, ShoppingBag, Truck } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart, formatSubtotal, parsePriceNumber } from "./CartContext";
import { useAccount } from "./AccountContext";
import { trackEvent } from "@/lib/sites/toptan16ayakkabidunyasi-com-1d902824/analytics";

const WHATSAPP_NUMBER = "905521254911";
const FREE_SHIPPING_THRESHOLD = 2500;

function buildOrderMessage(params: {
  items: ReturnType<typeof useCart>["items"];
  subtotalLabel: string;
  name: string;
  phone: string;
  city: string;
  district: string;
  addressLine: string;
}): string {
  const lines = params.items.map(
    (line) =>
      `• ${line.title}${line.size ? ` (Beden: ${line.size})` : ""} x${line.quantity} — ${line.price}`,
  );
  return [
    "Merhaba, aşağıdaki siparişi vermek istiyorum:",
    "",
    ...lines,
    "",
    `Ara Toplam: ${params.subtotalLabel}`,
    "",
    `Ad Soyad: ${params.name}`,
    `Telefon: ${params.phone}`,
    `Adres: ${params.addressLine}, ${params.district}/${params.city}`,
    "Ödeme: Kapıda Ödeme",
  ].join("\n");
}

export function CheckoutView() {
  const { items, clearCart } = useCart();
  const { user, addAddress } = useAccount();
  const savedAddresses = user?.addresses ?? [];

  const [selectedAddressId, setSelectedAddressId] = useState<string | null>(
    savedAddresses[0]?.id ?? null,
  );
  const [useNewAddress, setUseNewAddress] = useState(savedAddresses.length === 0);
  const [name, setName] = useState(user?.name ?? "");
  const [phone, setPhone] = useState(user?.phone ?? "");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [addressLine, setAddressLine] = useState("");
  const [saveAddress, setSaveAddress] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const subtotalLabel = formatSubtotal(items);
  const subtotalValue = items.reduce(
    (sum, line) => sum + parsePriceNumber(line.price) * line.quantity,
    0,
  );
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotalValue);
  const progress = Math.min(100, (subtotalValue / FREE_SHIPPING_THRESHOLD) * 100);

  useEffect(() => {
    if (items.length === 0) return;
    trackEvent("begin_checkout", {
      currency: "TRY",
      value: subtotalValue,
      items: items.map((line) => ({
        item_id: line.id,
        item_name: line.title,
        price: parsePriceNumber(line.price),
        quantity: line.quantity,
      })),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps -- fire once when checkout is entered with items present
  }, []);

  if (items.length === 0 && !submitted) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center px-4 py-24 text-center">
        <ShoppingBag className="h-16 w-16 text-[rgba(18,18,18,0.2)]" />
        <p className="mt-4 text-base text-[rgba(18,18,18,0.7)]">
          Sepetiniz boş, ödeme adımına geçemezsiniz.
        </p>
        <Link
          href="/collections/tum-ayakkabilar"
          className="mt-6 rounded-full bg-[#121212] px-8 py-4 text-sm font-bold text-white"
        >
          Alışverişe Başla
        </Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center px-4 py-24 text-center">
        <CheckCircle className="h-16 w-16 text-[#0F9D8C]" />
        <h1 className="mt-4 font-heading text-2xl font-semibold text-[#121212]">
          Siparişiniz Alındı!
        </h1>
        <p className="mt-2 text-sm text-[rgba(18,18,18,0.6)]">
          WhatsApp üzerinden sipariş detaylarınızı ilettik. Ekibimiz en kısa
          sürede sizinle iletişime geçecek.
        </p>
        <Link
          href="/"
          className="mt-8 rounded-full bg-[#121212] px-8 py-4 text-sm font-bold text-white"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let finalName = name;
    let finalPhone = phone;
    let finalCity = city;
    let finalDistrict = district;
    let finalAddressLine = addressLine;

    if (!useNewAddress && selectedAddressId) {
      const address = savedAddresses.find((a) => a.id === selectedAddressId);
      if (address) {
        finalName = address.fullName;
        finalPhone = address.phone;
        finalCity = address.city;
        finalDistrict = address.district;
        finalAddressLine = address.addressLine;
      }
    } else if (useNewAddress && saveAddress && user) {
      addAddress({
        title: "Yeni Adres",
        fullName: finalName,
        phone: finalPhone,
        city: finalCity,
        district: finalDistrict,
        addressLine: finalAddressLine,
      });
    }

    trackEvent("purchase", {
      currency: "TRY",
      value: subtotalValue,
      items: items.map((line) => ({
        item_id: line.id,
        item_name: line.title,
        price: parsePriceNumber(line.price),
        quantity: line.quantity,
      })),
    });

    const message = buildOrderMessage({
      items,
      subtotalLabel,
      name: finalName,
      phone: finalPhone,
      city: finalCity,
      district: finalDistrict,
      addressLine: finalAddressLine,
    });

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );

    clearCart();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-[1100px] px-4 py-8 pb-32 md:px-8 md:pb-8">
      <h1 className="font-heading text-[28px] font-semibold text-[#121212] md:text-[32px]">
        Ödeme
      </h1>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_380px]">
        {/* Left: form */}
        <div className="flex flex-col gap-8">
          <section>
            <h2 className="mb-3 font-heading text-lg font-semibold text-[#121212]">
              1. İletişim Bilgileri
            </h2>
            <div className="flex flex-col gap-3">
              <input
                required
                placeholder="Ad Soyad"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-md border px-3 py-2.5 text-sm"
                style={{ borderColor: "rgba(18,18,18,0.2)" }}
              />
              <input
                required
                placeholder="Telefon"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="rounded-md border px-3 py-2.5 text-sm"
                style={{ borderColor: "rgba(18,18,18,0.2)" }}
              />
            </div>
          </section>

          <section>
            <h2 className="mb-3 font-heading text-lg font-semibold text-[#121212]">
              2. Teslimat Adresi
            </h2>

            {savedAddresses.length > 0 && (
              <div className="mb-3 flex flex-col gap-2">
                {savedAddresses.map((address) => (
                  <label
                    key={address.id}
                    className={cn(
                      "flex cursor-pointer items-start gap-3 rounded-lg border p-3 text-sm",
                      !useNewAddress && selectedAddressId === address.id
                        ? "border-[#121212]"
                        : "border-[rgba(18,18,18,0.15)]",
                    )}
                  >
                    <input
                      type="radio"
                      name="address"
                      checked={!useNewAddress && selectedAddressId === address.id}
                      onChange={() => {
                        setSelectedAddressId(address.id);
                        setUseNewAddress(false);
                      }}
                      className="mt-1"
                    />
                    <div>
                      <p className="font-bold text-[#121212]">{address.title}</p>
                      <p className="text-[rgba(18,18,18,0.6)]">
                        {address.fullName} — {address.phone}
                      </p>
                      <p className="text-[rgba(18,18,18,0.6)]">
                        {address.addressLine}, {address.district}/{address.city}
                      </p>
                    </div>
                  </label>
                ))}
                <button
                  type="button"
                  onClick={() => setUseNewAddress(true)}
                  className={cn(
                    "rounded-lg border p-3 text-left text-sm font-bold",
                    useNewAddress ? "border-[#121212] text-[#121212]" : "border-[rgba(18,18,18,0.15)] text-[rgba(18,18,18,0.6)]",
                  )}
                >
                  + Yeni Adres Kullan
                </button>
              </div>
            )}

            {useNewAddress && (
              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  <input
                    required
                    placeholder="İl"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-1/2 rounded-md border px-3 py-2.5 text-sm"
                    style={{ borderColor: "rgba(18,18,18,0.2)" }}
                  />
                  <input
                    required
                    placeholder="İlçe"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-1/2 rounded-md border px-3 py-2.5 text-sm"
                    style={{ borderColor: "rgba(18,18,18,0.2)" }}
                  />
                </div>
                <textarea
                  required
                  placeholder="Açık Adres"
                  value={addressLine}
                  onChange={(e) => setAddressLine(e.target.value)}
                  rows={3}
                  className="rounded-md border px-3 py-2.5 text-sm"
                  style={{ borderColor: "rgba(18,18,18,0.2)" }}
                />
                {user && (
                  <label className="flex items-center gap-2 text-sm text-[rgba(18,18,18,0.7)]">
                    <input
                      type="checkbox"
                      checked={saveAddress}
                      onChange={(e) => setSaveAddress(e.target.checked)}
                    />
                    Bu adresi hesabıma kaydet
                  </label>
                )}
              </div>
            )}
          </section>

          <section>
            <h2 className="mb-3 font-heading text-lg font-semibold text-[#121212]">
              3. Ödeme Yöntemi
            </h2>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-3 rounded-lg border border-[#121212] p-3 text-sm">
                <input type="radio" name="payment" checked readOnly />
                <span className="font-bold text-[#121212]">Kapıda Ödeme</span>
              </label>
              <label className="flex items-center gap-3 rounded-lg border border-[rgba(18,18,18,0.1)] p-3 text-sm text-[rgba(18,18,18,0.4)]">
                <input type="radio" name="payment" disabled />
                Kredi Kartı (Yakında)
              </label>
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs text-[rgba(18,18,18,0.5)]">
              <Lock className="h-3.5 w-3.5" />
              Bilgileriniz SSL ile şifrelenerek iletilir.
            </div>
          </section>
        </div>

        {/* Right: sticky order summary (desktop) */}
        <div className="hidden lg:block">
          <div className="sticky top-24 flex flex-col gap-4 rounded-xl border border-[rgba(18,18,18,0.1)] p-5">
            <h2 className="font-heading text-lg font-semibold text-[#121212]">
              Sipariş Özeti
            </h2>

            <div>
              <p className="flex items-center gap-1.5 text-xs font-medium text-[#121212]">
                <Truck className="h-3.5 w-3.5" />
                {remaining === 0
                  ? "Ücretsiz kargo hakkı kazandınız!"
                  : `Kargo bedavaya ${remaining.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}TL kaldı`}
              </p>
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[rgba(18,18,18,0.1)]">
                <div
                  className={cn("h-full rounded-full", remaining === 0 ? "bg-[#0F9D8C]" : "bg-[#121212]")}
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {items.map((line) => (
                <div key={line.id} className="flex items-center gap-3">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md bg-[rgba(18,18,18,0.04)]">
                    {line.image && (
                      <Image src={line.image} alt={line.title} fill sizes="56px" className="object-cover" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm text-[#121212]">{line.title}</p>
                    {line.size && (
                      <p className="text-xs text-[rgba(18,18,18,0.5)]">Beden: {line.size}</p>
                    )}
                    <p className="text-xs text-[rgba(18,18,18,0.5)]">Adet: {line.quantity}</p>
                  </div>
                  <p className="shrink-0 text-sm font-bold text-[#121212]">{line.price}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-[rgba(18,18,18,0.1)] pt-3">
              <span className="text-sm text-[rgba(18,18,18,0.7)]">Ara Toplam</span>
              <span className="font-heading text-xl font-semibold text-[#121212]">
                {subtotalLabel}
              </span>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#121212] py-4 text-sm font-bold text-white transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98]"
            >
              Siparişi Tamamla
            </button>
            <p className="flex items-center justify-center gap-1.5 text-xs text-[rgba(18,18,18,0.5)]">
              <ShieldCheck className="h-3.5 w-3.5" /> Güvenli ödeme altyapısı
            </p>
          </div>
        </div>
      </div>

      {/* Mobile sticky summary bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-4 border-t border-[rgba(18,18,18,0.1)] bg-white px-4 py-3 lg:hidden">
        <div className="min-w-0 flex-1">
          <p className="text-xs text-[rgba(18,18,18,0.6)]">Ara Toplam</p>
          <p className="truncate font-heading text-lg font-semibold text-[#121212]">
            {subtotalLabel}
          </p>
        </div>
        <button
          type="submit"
          className="shrink-0 rounded-full bg-[#121212] px-6 py-3 text-sm font-bold text-white"
        >
          Siparişi Tamamla
        </button>
      </div>
    </form>
  );
}
