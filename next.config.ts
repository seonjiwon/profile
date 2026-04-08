import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // VM 또는 다른 호스트에서 접속 허용
  allowedDevOrigins: ['172.21.26.129', '*'],
  // 정적 빌드 설정
  output: 'standalone',
};

export default nextConfig;
