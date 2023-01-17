/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,

  images: {
    domains: ['cloudflare-ipfs.com'],
  },

  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
