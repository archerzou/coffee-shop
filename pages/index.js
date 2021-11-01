import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Banner from '../components/banner';

const handleOnBannerBtnClick = () => {
  console.log('Hi, banner button');
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText={"View stores nearby"}
          handleOnClick={handleOnBannerBtnClick}
        />
        <div className={styles.heroImage}>
          <Image
              src="/static/hero-image.png"
              width={700}
              height={400}
              alt="hero image"
          />
      </div>
      </main>
    </div>
  )
}
