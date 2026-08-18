import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Static export for Hostinger Shared Hosting (no Node.js server available there).
  // NOTE: this replaces the "standalone" Docker/Vercel server build target — if you
  // later want to deploy via Docker or Vercel again, switch this back to "standalone".
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
