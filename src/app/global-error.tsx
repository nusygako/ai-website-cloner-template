"use client";

import { useEffect } from "react";

export default function GlobalError({
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
    <html lang="tr">
      <body>
        <div
          style={{
            display: "flex",
            minHeight: "100vh",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "24px",
            fontFamily: "sans-serif",
          }}
        >
          <h1 style={{ fontSize: "24px", fontWeight: 600, color: "#121212" }}>
            Bir şeyler ters gitti
          </h1>
          <p style={{ marginTop: "8px", color: "rgba(18,18,18,0.6)" }}>
            Sayfa yüklenirken beklenmeyen bir hata oluştu.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: "24px",
              borderRadius: "999px",
              backgroundColor: "#121212",
              color: "white",
              padding: "12px 24px",
              fontSize: "14px",
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
            }}
          >
            Tekrar Dene
          </button>
        </div>
      </body>
    </html>
  );
}
