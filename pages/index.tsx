import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ProjectLinks, SocialLinks } from '../components/SocialLinks'
import { CURRENT_ROLE } from '../constants'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Amidou Kante // Senior Engineer </title>
        <link rel="preload" href="/metro-sans-medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="keywords" content="portfolio, front-end web developer, web designer, Amidou, Kante, KanteLabs, freelancer" />
        <meta name="description" content="Amidou Kante is a creative technologist working on the bleeding edge of technology" />
        <meta name="author" content="Amidou Kante" />
        <link rel="icon" href="/favicon.png" />
        <meta name="theme-color" content="#000000" />
      </Head>

      <main className={styles.main}>
        {CURRENT_ROLE}
        <SocialLinks />

        <br />
        <br />
        <br />

        <h4>Selected Work</h4>
        <ProjectLinks />
      </main>
    </div>
  )
}
