/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // "export",
  images: {
    loader: 'akamai',
    path: '/assets/images'
  }
};

module.exports = nextConfig;
