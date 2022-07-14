/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
    async rewrites() {
        return [
            {
                destination: process.env.DESTINATION_VIEW_URL,
                source: process.env.SOURCE_VIEW_PATH,
            },
            {
                destination: process.env.DESTINATION_POST_URL,
                source: process.env.SOURCE_POST_PATH,
            },
        ];
    },
};

module.exports = nextConfig;
