"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { User } from "lucide-react";
import { useAccount } from "./AccountContext";

export function AccountPageView() {
  const { user, register, login, logout } = useAccount();
  const [tab, setTab] = useState<"login" | "register">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  if (user) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center px-4 py-24 text-center">
        <User className="h-12 w-12 text-[#121212]" />
        <h1 className="mt-4 font-heading text-2xl font-semibold text-[#121212]">
          Merhaba, {user.name}
        </h1>
        <p className="mt-2 text-sm text-[rgba(18,18,18,0.6)]">{user.email}</p>
        <div className="mt-8 flex w-full flex-col gap-3">
          <Link
            href="/apps/page/wishlist"
            className="rounded-full border border-[#121212] px-6 py-3 text-sm font-bold text-[#121212]"
          >
            Favorilerim
          </Link>
          <Link
            href="/cart"
            className="rounded-full border border-[#121212] px-6 py-3 text-sm font-bold text-[#121212]"
          >
            Sepetim
          </Link>
          <button
            type="button"
            onClick={logout}
            className="rounded-full bg-[#121212] px-6 py-3 text-sm font-bold text-white"
          >
            Çıkış Yap
          </button>
        </div>
      </div>
    );
  }

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
