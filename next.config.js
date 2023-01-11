/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images-assets.nasa.gov',
				port: '',
				pathname: '/image/**',
			},
		],

	},
};

module.exports = nextConfig;
