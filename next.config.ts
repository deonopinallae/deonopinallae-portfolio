import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactCompiler: true,
	output: 'export',
	// GitHub Pages repo path
	basePath: '/deonopinallae-portfolio',
	assetPrefix: '/deonopinallae-portfolio',
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
}

export default nextConfig
