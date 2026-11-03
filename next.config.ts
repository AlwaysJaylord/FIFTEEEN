import type { NextConfig } from 'next';
const config: NextConfig = {
  output: 'export',
  basePath: '/FIFTEEEN',
  env: { NEXT_PUBLIC_BASE_PATH: '/FIFTEEEN' },
  experimental: { outputFileTracingRoot: process.cwd() },
  turbopack: { root: process.cwd() },
  images: { unoptimized: true },
  poweredByHeader: false
};
export default config;
