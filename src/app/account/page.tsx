import { User } from "lucide-react";

export const metadata = {
  title: "Hesabım",
};

export default function AccountPage() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-4 py-24 text-center">
      <User className="h-12 w-12 text-[#121212]" />
      <h1 className="mt-4 font-heading text-2xl font-semibold text-[#121212]">
        Hesabım
      </h1>
      <p className="mt-2 text-sm text-[rgba(18,18,18,0.6)]">
        Giriş yapmak veya yeni hesap oluşturmak için bilgilerinizi girin.
      </p>
      <form className="mt-8 flex w-full flex-col gap-3 text-left">
        <label className="flex flex-col gap-1 text-sm text-[#121212]">
          E-posta
          <input
            type="email"
            placeholder="ornek@eposta.com"
            className="rounded-md border px-3 py-2 text-sm"
            style={{ borderColor: "rgba(18,18,18,0.2)" }}
          />
        </label>
        <label className="flex flex-col gap-1 text-sm text-[#121212]">
          Şifre
          <input
            type="password"
            placeholder="••••••••"
            className="rounded-md border px-3 py-2 text-sm"
            style={{ borderColor: "rgba(18,18,18,0.2)" }}
          />
        </label>
        <button
          type="button"
          className="mt-2 rounded-full bg-[#121212] px-6 py-3 text-sm font-bold text-white"
        >
          Giriş Yap
        </button>
      </form>
    </div>
  );
}
