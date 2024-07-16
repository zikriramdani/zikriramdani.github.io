/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/",
  output: 'standalone', // "export",
  images: {
    loader: 'akamai',
    path: '/assets/images'
  }
};

module.exports = nextConfig;
