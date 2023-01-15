/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["image.tmdb.org"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
