import Head from 'next/head';
import styles from '@/styles/index.module.css';
import Link from 'next/link';

export default function Index() {
  return (
    <>
      <Head>
        <title>Currículo - Gabriel Henrique da Silva</title>
      </Head>
      <main>
        <div className={styles.presentation} id="presentation">
          <div className={styles.info} id="info">
            <Link target="_blank" href="https://site-gabriel.vercel.app/">
              <i className="bi bi-globe2" />
              <span>https://site-gabriel.vercel.app</span>
            </Link>
            <Link href="mailto:gabriel04gh1.gh@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-envelope-at" />
              <span>gabriel04gh1.gh@gmail.com</span>
            </Link>
            <Link href="mailto:odev.gabriel@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-envelope-at" />
              <span>odev.gabriel@gmail.com</span>
            </Link>
            <Link href="#">
              <i className="bi bi-whatsapp" />
              <span>{'(87) 9 9649-4152'}</span>
            </Link>
          </div>
          <div id="title">
            <h1 className={styles.h1}>Gabriel Silva</h1>
            <small>Gabriel Henrique da Silva</small>
            <h2>Gestor de TI & Desenvolvedor FullStack</h2>
          </div>
        </div>
        <div id="profile"></div>
        <div id="employment"></div>
      </main>
    </>
  );
}
