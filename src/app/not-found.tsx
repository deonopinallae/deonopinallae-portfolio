import Link from 'next/link'
import styles from './not-found.module.scss'

export default function NotFound() {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.code}>404</h1>
				<h2 className={styles.title}>Page Not Found</h2>
				<p className={styles.description}>
					The page you're looking for doesn't exist or has been moved.
				</p>
				<Link href="/" className={styles.button}>
					Back to Home
				</Link>
			</div>
		</div>
	)
}
