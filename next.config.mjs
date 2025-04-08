/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Mengabaikan error ESLint saat proses build
  },

  env: {
    // Variabel lingkungan yang digunakan di sisi client (browser)
    NEXT_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
    NEXT_PUBLIC_DOMAIN_API: process.env.NEXT_PUBLIC_DOMAIN_API,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID
  },
};

export default nextConfig;
