import Head from 'next/head'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import Contatos from '../src/components/Contatos'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bidu Lanches</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header pageActive='contato'/>

      <main className={styles.main}>

        <div className={styles.content}>

          <Contatos/>

        </div>
        
      </main>

      <Footer/>
      
    </div>
  )
}