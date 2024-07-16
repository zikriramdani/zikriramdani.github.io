/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // "export",
  images: {
    loader: 'akamai',
    path: ''
  }
};

module.exports = nextConfig;
