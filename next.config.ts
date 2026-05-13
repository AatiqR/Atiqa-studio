import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [60, 70, 75, 80, 85, 90, 100],

    // ✅ allow YouTube thumbnails
    domains: ["img.youtube.com", "i.ytimg.com"],
  },
};

export default nextConfig;

