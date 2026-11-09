import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "klimax.co.pl" }],
        destination: "https://www.klimax.co.pl/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/brand/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000" }],
      },
    ];
  },
  experimental: {
    serverActions: { bodySizeLimit: "50mb" },
  },
};

export default nextConfig;
