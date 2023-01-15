/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
      unoptimized: true,
      domains: ['www.themoviedb.com', "s3-alpha-sig.figma.com"],
    },
}

module.exports = nextConfig
