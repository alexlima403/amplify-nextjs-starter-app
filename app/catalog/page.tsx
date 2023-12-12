import Link from 'next/link';
import styles from '../page.module.css'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Catalog',
}

export default function Catalog() {
  return (
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
          <Link href="/">
            Back to home
          </Link>
          </p>
        </div>
        <div className={styles.bigblock}></div>
        <div><p>PROMO 1 </p></div>
        <div className={styles.bigblock}></div>
        <div><p>PROMO 2</p></div>
      </main>
  )
}
