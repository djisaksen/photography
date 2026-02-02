import Link from 'next/link';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          djisaksen
        </Link>
        <div className={styles.links}>
          <Link href="/" className={styles.link}>
            Gallery
          </Link>
          <Link href="/about" className={styles.link}>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
