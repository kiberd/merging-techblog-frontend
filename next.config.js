/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint:{
    ignoreDuringBuilds: true
  },
  async rewrites() {
    return [
      {
          destination: "http://218.39.177.111:8002/:path*",
          source: "/:path*",
      },
  ];
},
}

module.exports = nextConfig
