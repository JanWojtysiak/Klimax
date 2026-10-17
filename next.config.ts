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
  experimental: {
    serverActions: { bodySizeLimit: "50mb" },
  },
};

export default nextConfig;
