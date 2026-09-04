import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async rewrites() {
    return [
      {
        source:
          "/case-studies/member-first-credit-union-green-car-loan/original-page.webp",
        destination:
          "/case-studies/member-first-credit-union-green-car-loan/original-page.png",
      },
    ];
  },
};

export default nextConfig;
