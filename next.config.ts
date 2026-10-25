import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	allowedDevOrigins: ['tourde.app', '*.tourde.app'],
	reactCompiler: true,
	images: {
		remotePatterns: [new URL('https://images.unsplash.com/**')],
	},
	rewrites: async () => {
		return [
			{
				source: '/stops/:id',
				destination: '/stops',
			},
		];
	},
};

export default nextConfig;
