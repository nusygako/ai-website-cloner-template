"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Pencil, Trash2, User } from "lucide-react";
import { useAccount, type Address } from "./AccountContext";

const EMPTY_ADDRESS: Omit<Address, "id"> = {
  title: "",
  fullName: "",
  phone: "",
  city: "",
  district: "",
  addressLine: "",
};

function AddressForm({
  initial,
  onSave,
  onCancel,
}: {
  initial: Omit<Address, "id">;
  onSave: (address: Omit<Address, "id">) => void;
  onCancel: () => void;
}) {
  const [form, setForm] = useState(initial);

  function set<K extends keyof Omit<Address, "id">>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(form);
      }}
      className="flex flex-col gap-3 rounded-lg border border-[rgba(18,18,18,0.12)] p-4 text-left"
    >
      <input
        required
        placeholder="Adres Başlığı (Ev, İş, ...)"
        value={form.title}
        onChange={(e) => set("title", e.target.value)}
        className="rounded-md border px-3 py-2 text-sm"
        style={{ borderColor: "rgba(18,18,18,0.2)" }}
      />
      <input
        required
        placeholder="Ad Soyad"
        value={form.fullName}
        onChange={(e) => set("fullName", e.target.value)}
        className="rounded-md border px-3 py-2 text-sm"
        style={{ borderColor: "rgba(18,18,18,0.2)" }}
      />
      <input
        required
        placeholder="Telefon"
        value={form.phone}
        onChange={(e) => set("phone", e.target.value)}
        className="rounded-md border px-3 py-2 text-sm"
        style={{ borderColor: "rgba(18,18,18,0.2)" }}
      />
      <div className="flex gap-3">
        <input
          required
          placeholder="İl"
          value={form.city}
          onChange={(e) => set("city", e.target.value)}
          className="w-1/2 rounded-md border px-3 py-2 text-sm"
          style={{ borderColor: "rgba(18,18,18,0.2)" }}
        />
        <input
          required
          placeholder="İlçe"
          value={form.district}
          onChange={(e) => set("district", e.target.value)}
          className="w-1/2 rounded-md border px-3 py-2 text-sm"
          style={{ borderColor: "rgba(18,18,18,0.2)" }}
        />
      </div>
      <textarea
        required
        placeholder="Açık Adres"
        value={form.addressLine}
        onChange={(e) => set("addressLine", e.target.value)}
        rows={3}
        className="rounded-md border px-3 py-2 text-sm"
        style={{ borderColor: "rgba(18,18,18,0.2)" }}
      />
      <div className="flex gap-3">
        <button
          type="submit"
          className="flex-1 rounded-full bg-[#121212] px-4 py-2.5 text-sm font-bold text-white"
        >
          Kaydet
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 rounded-full border border-[rgba(18,18,18,0.2)] px-4 py-2.5 text-sm font-bold text-[#121212]"
        >
          Vazgeç
        </button>
      </div>
    </form>
  );
}

function AccountDashboard() {
  const { user, logout, updateProfile, addAddress, updateAddress, deleteAddress } =
    useAccount();
  const [editingProfile, setEditingProfile] = useState(false);
  const [name, setName] = useState(user?.name ?? "");
  const [phone, setPhone] = useState(user?.phone ?? "");
  const [addingAddress, setAddingAddress] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState<string | null>(null);

  if (!user) return null;

  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <div className="flex flex-col items-center text-center">
        <User className="h-12 w-12 text-[#121212]" />
        <h1 className="mt-4 font-heading text-2xl font-semibold text-[#121212]">
          Merhaba, {user.name}
        </h1>
        <p className="mt-1 text-sm text-[rgba(18,18,18,0.6)]">{user.email}</p>
      </div>

      <div className="mt-8 flex justify-center gap-3">
        <Link
          href="/apps/page/wishlist"
          className="rounded-full border border-[#121212] px-5 py-2.5 text-sm font-bold text-[#121212]"
        >
          Favorilerim
        </Link>
        <Link
          href="/cart"
          className="rounded-full border border-[#121212] px-5 py-2.5 text-sm font-bold text-[#121212]"
        >
          Sepetim
        </Link>
        <button
          type="button"
          onClick={logout}
          className="rounded-full bg-[#121212] px-5 py-2.5 text-sm font-bold text-white"
        >
          Çıkış Yap
        </button>
      </div>

      {/* Personal info */}
      <section className="mt-10">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-heading text-lg font-semibold text-[#121212]">
            Kişisel Bilgiler
          </h2>
          {!editingProfile && (
            <button
              type="button"
              onClick={() => {
                setName(user.name);
                setPhone(user.phone);
                setEditingProfile(true);
              }}
              aria-label="Bilgileri düzenle"
              className="text-[#121212]"
            >
              <Pencil className="h-4 w-4" />
            </button>
          )}
        </div>

        {editingProfile ? (
          <form
            onSubmit={(e: FormEvent) => {
              e.preventDefault();
              updateProfile(name, phone);
              setEditingProfile(false);
            }}
            className="flex flex-col gap-3 rounded-lg border border-[rgba(18,18,18,0.12)] p-4 text-left"
          >
            <input
              required
              placeholder="Ad Soyad"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-md border px-3 py-2 text-sm"
              style={{ borderColor: "rgba(18,18,18,0.2)" }}
            />
            <input
              placeholder="Telefon"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="rounded-md border px-3 py-2 text-sm"
              style={{ borderColor: "rgba(18,18,18,0.2)" }}
            />
            <div className="flex gap-3">
              <button
                type="submit"
                className="flex-1 rounded-full bg-[#121212] px-4 py-2.5 text-sm font-bold text-white"
              >
                Kaydet
              </button>
              <button
                type="button"
                onClick={() => setEditingProfile(false)}
                className="flex-1 rounded-full border border-[rgba(18,18,18,0.2)] px-4 py-2.5 text-sm font-bold text-[#121212]"
              >
                Vazgeç
              </button>
            </div>
          </form>
        ) : (
          <div className="rounded-lg border border-[rgba(18,18,18,0.12)] p-4 text-left text-sm text-[#121212]">
            <p>Ad Soyad: {user.name}</p>
            <p className="mt-1">Telefon: {user.phone || "—"}</p>
          </div>
        )}
      </section>

      {/* Addresses */}
      <section className="mt-8">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-heading text-lg font-semibold text-[#121212]">
            Adreslerim
          </h2>
          {!addingAddress && (
            <button
              type="button"
              onClick={() => setAddingAddress(true)}
              className="text-sm font-bold text-[#121212] underline"
            >
              + Yeni Adres
            </button>
          )}
        </div>

        <div className="flex flex-col gap-3">
          {user.addresses.map((address) =>
            editingAddressId === address.id ? (
              <AddressForm
                key={address.id}
                initial={address}
                onSave={(form) => {
                  updateAddress(address.id, form);
                  setEditingAddressId(null);
                }}
                onCancel={() => setEditingAddressId(null)}
              />
            ) : (
              <div
                key={address.id}
                className="flex items-start justify-between gap-3 rounded-lg border border-[rgba(18,18,18,0.12)] p-4 text-left text-sm text-[#121212]"
              >
                <div>
                  <p className="font-bold">{address.title}</p>
                  <p className="mt-1">
                    {address.fullName} — {address.phone}
                  </p>
                  <p className="mt-1 text-[rgba(18,18,18,0.7)]">
                    {address.addressLine}, {address.district}/{address.city}
                  </p>
                </div>
                <div className="flex shrink-0 gap-2">
                  <button
                    type="button"
                    aria-label="Adresi düzenle"
                    onClick={() => setEditingAddressId(address.id)}
                  >
                    <Pencil className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Adresi sil"
                    onClick={() => deleteAddress(address.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ),
          )}

          {addingAddress && (
            <AddressForm
              initial={EMPTY_ADDRESS}
              onSave={(form) => {
                addAddress(form);
                setAddingAddress(false);
              }}
              onCancel={() => setAddingAddress(false)}
            />
          )}

          {user.addresses.length === 0 && !addingAddress && (
            <p className="text-sm text-[rgba(18,18,18,0.6)]">
              Henüz kayıtlı adresiniz yok.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

export function AccountPageView() {
  const { user, register, login } = useAccount();
  const [tab, setTab] = useState<"login" | "register">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  if (user) return <AccountDashboard />;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    const result =
      tab === "register" ? register(name, email, password) : login(email, password);
    if (!result.ok) setError(result.error);
  }

  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-4 py-24 text-center">
      <User className="h-12 w-12 text-[#121212]" />
      <h1 className="mt-4 font-heading text-2xl font-semibold text-[#121212]">
        Hesabım
      </h1>
      <p className="mt-2 text-sm text-[rgba(18,18,18,0.6)]">
        Giriş yapmak veya yeni hesap oluşturmak için bilgilerinizi girin.
      </p>

      <div className="mt-6 flex w-full rounded-full bg-[rgba(18,18,18,0.06)] p-1">
        <button
          type="button"
          onClick={() => {
            setTab("login");
            setError(null);
          }}
          className={cn(
            "flex-1 rounded-full py-2 text-sm font-bold transition-colors",
            tab === "login" ? "bg-[#121212] text-white" : "text-[#121212]",
          )}
        >
          Giriş Yap
        </button>
        <button
          type="button"
          onClick={() => {
            setTab("register");
            setError(null);
          }}
          className={cn(
            "flex-1 rounded-full py-2 text-sm font-bold transition-colors",
            tab === "register" ? "bg-[#121212] text-white" : "text-[#121212]",
          )}
        >
          Kayıt Ol
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-8 flex w-full flex-col gap-3 text-left"
      >
        {tab === "register" && (
          <label className="flex flex-col gap-1 text-sm text-[#121212]">
            Ad Soyad
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Adınız Soyadınız"
              className="rounded-md border px-3 py-2 text-sm"
              style={{ borderColor: "rgba(18,18,18,0.2)" }}
            />
          </label>
        )}
        <label className="flex flex-col gap-1 text-sm text-[#121212]">
          E-posta
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ornek@eposta.com"
            className="rounded-md border px-3 py-2 text-sm"
            style={{ borderColor: "rgba(18,18,18,0.2)" }}
          />
        </label>
        <label className="flex flex-col gap-1 text-sm text-[#121212]">
          Şifre
          <input
            type="password"
            required
            minLength={4}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="rounded-md border px-3 py-2 text-sm"
            style={{ borderColor: "rgba(18,18,18,0.2)" }}
          />
        </label>
        {error && <p className="text-sm font-medium text-red-600">{error}</p>}
        <button
          type="submit"
          className="mt-2 rounded-full bg-[#121212] px-6 py-3 text-sm font-bold text-white"
        >
          {tab === "register" ? "Hesap Oluştur" : "Giriş Yap"}
        </button>
      </form>
    </div>
  );
}
