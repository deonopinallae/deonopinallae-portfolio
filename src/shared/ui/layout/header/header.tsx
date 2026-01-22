import Link from 'next/link';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.name}>Alisa</span>
        </Link>
        
        <nav className={styles.nav}>
          <Link href="/#about" className={styles.navLink}>About</Link>
          <Link href="/#work" className={styles.navLink}>Work</Link>
          <Link href="/#contact" className={styles.navLink}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};
