import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // `images.domains` was removed in Next 16 — remotePatterns is the replacement.
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "image.thum.io" },
    ],
    // Next 16 requires every non-default `quality` prop to be declared here.
    qualities: [75, 95, 100],
  },
};

export default nextConfig;
