import type { NextConfig } from 'next';
const config: NextConfig = {
  output: 'export',
  basePath: '/FIFTEEEN',
  env: { NEXT_PUBLIC_BASE_PATH: '/FIFTEEEN' },
  distDir: 'out',
  turbopack: { root: process.cwd() },
  images: { unoptimized: true },
  poweredByHeader: false
};
export default config;
