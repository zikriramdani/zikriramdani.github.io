/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/",
  output: "export", //'standalone', // 
  images: {
    loader: 'akamai',
    path: '/assets/images'
  }
};

module.exports = nextConfig;
