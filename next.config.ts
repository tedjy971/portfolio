import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Désactiver le rechargement à chaud en production
  reactStrictMode: true,
  // Optimisations supplémentaires
  // swcMinify: true,
};

export default nextConfig;
