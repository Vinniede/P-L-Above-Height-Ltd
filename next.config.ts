import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // JFIF assets are served directly because the hosted image optimizer rejects them.
  images: {
    unoptimized: true,
  },
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
