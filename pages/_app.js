import '@/styles/globals.css';

import Head from 'next/head';

import Header from '@/components/header';
import Footer from '@/components/footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col items-center min-h-screen font-[Cormorant] pt-20 md:pt-32 text-[#1C1C1C]">
        <Header />

        <main className="flex-grow flex flex-col w-full items-center bg-white">
          <Component {...pageProps} />
        </main>

        <Footer />
      </div>
    </>
  );
}
