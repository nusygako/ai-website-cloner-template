import Link from "next/link";

export const metadata = { title: "Bağlantı Yok" };

// Deliberately styled with inline styles, not Tailwind classes: this page
// must still look right when the service worker serves it from cache while
// truly offline, i.e. before the global stylesheet has necessarily loaded.
export default function OfflinePage() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "32px 24px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ fontSize: "48px" }}>📡👟</div>
      <h1 style={{ marginTop: "16px", fontSize: "24px", fontWeight: 700, color: "#121212" }}>
        Bağlantınız koptu
      </h1>
      <p style={{ marginTop: "8px", maxWidth: "360px", color: "rgba(18,18,18,0.65)", fontSize: "15px" }}>
        İnternet bağlantınızı kontrol edin. Daha önce ziyaret ettiğiniz
        sayfalar ve ürünler, bağlantınız geri gelene kadar burada.
      </p>
      <Link
        href="/"
        style={{
          marginTop: "24px",
          borderRadius: "999px",
          backgroundColor: "#121212",
          color: "white",
          padding: "12px 28px",
          fontSize: "14px",
          fontWeight: 700,
          textDecoration: "none",
        }}
      >
        Tekrar Dene
      </Link>
    </div>
  );
}
