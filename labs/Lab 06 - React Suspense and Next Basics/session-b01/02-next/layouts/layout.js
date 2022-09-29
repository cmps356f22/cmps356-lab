import Head from "next/head";
// import Image from "next/image";
import Link from "next/link";
import styles from "styles/Layout.module.css";

export default function Layout({ home, title, children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="country facts by CMPS 356" />
      </Head>

      <main className={styles.main}>
        <h1>{title}</h1>
        {children}
      </main>

      <footer>{!home && <Link href="/">Go home!</Link>}</footer>
    </div>
  );
}
