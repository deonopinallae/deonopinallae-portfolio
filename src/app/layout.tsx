import type { Metadata } from 'next'
import '@/styles/vars.scss'
import '@/styles/globals.scss'
import '@/styles/styles.scss'

export const metadata: Metadata = {
	title: 'Tishchenko Alisa - Frontend Developer',
	description: 'Frontend Developer | React | Next.js | TypeScript | Minimalist Portfolio',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className="antialiased">
				{children}
			</body>
		</html>
	)
}
