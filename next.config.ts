import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/payments",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
