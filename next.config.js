/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "zikriramdani",
    path: "",
  },
  basePath: "/",
  assetPrefix: "/",
}

module.exports = nextConfig
