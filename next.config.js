/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", //'standalone'
  images: {
    path: '/_next/image' // ''
  }

  // reactStrictMode: true,
  // swcMinify: true,
  // images: {
  //   loader: 'akamai',
  //   path: ''
  // },
  // assetPrefix: './'
};

module.exports = nextConfig;
