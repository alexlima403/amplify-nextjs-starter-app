import Link from 'next/link';
import styles from './page.module.css'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Start Page',
}

export default function Home() {
  return (
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
          <Link href="/catalog">
            Katalog
          </Link>
          </p>
        </div>
      </main>
  )
}
