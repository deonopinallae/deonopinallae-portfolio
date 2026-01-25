import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactCompiler: true,
	output: 'export',
	basePath: '/deonopinallae-portfolio',
	images: {
		unoptimized: true,
	},
}

export default nextConfig
