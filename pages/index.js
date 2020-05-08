import Head from 'next/head'

import HomeComponent from '../components/Home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Surendra Galwa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='page-container'>
        <main>
          <HomeComponent />
        </main>
      </div>
    </>
  )
}
