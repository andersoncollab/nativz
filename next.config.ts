import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.brandfetch.io",
      },
    ],
  },
  // Redirects are not supported with static export.
  // They will be handled at the hosting/CDN level when deployed to production.
};

export default nextConfig;
