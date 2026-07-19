import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xueshimarketing.wordpress.com",
        pathname: "/wp-content/uploads/2026/07/**",
      },
    ],
  },
};

export default nextConfig;
