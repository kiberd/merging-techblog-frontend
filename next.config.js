/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
    async rewrites() {
        if (process.env.NODE_ENV !== 'production') {
            return [
                {
                    destination: process.env.DESTINATION_URL,
                    source: process.env.SOURCE_PATH,
                },
            ];
        }
    },
};

module.exports = nextConfig;
