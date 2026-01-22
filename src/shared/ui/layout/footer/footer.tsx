import styles from './styles.module.scss'

export const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.content}>
					<p className={styles.text}>
						© {currentYear} Tishchenko Alisa. All rights reserved.
					</p>
					<div className={styles.links}>
						<a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
							GitHub
						</a>
						<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
							LinkedIn
						</a>
						<a href="mailto:alisa@example.com" className={styles.link}>
							Email
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

