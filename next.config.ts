import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['172.21.26.129', '*'],
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8080/api/:path*',
      },
    ];
  },
};

export default nextConfig;