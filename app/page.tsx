import styles from './page.module.css'
import Script from "next/script";

const GA_MEASUREMENT_ID = "G-63CVBFK02T";

export default function Home() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script id="google-analytics">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}');
    `}
      </Script>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Startseite
          </p>
          <p>
            Katalog
          </p>
        </div>
      </main></>
  )
}
