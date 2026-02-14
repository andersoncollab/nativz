import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const basePath = isGitHubPages ? "/nativz" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: isGitHubPages ? "/nativz/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
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
