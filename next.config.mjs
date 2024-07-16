/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  webpack: (config) => {
    // Optimize and reduce bundle size
    config.optimization.splitChunks = {
      chunks: 'all',
    };

    // Customize Webpack configuration if needed
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
    NEXT_PUBLIC_DOMAIN_API: process.env.NEXT_PUBLIC_DOMAIN_API,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID
  },
};

export default nextConfig;
