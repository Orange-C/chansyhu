import '@/styles/globals.css';

import Image from 'next/image';
import Head from 'next/head';
import InstagramIcon from '@/public/instagram.svg';

import Header from '@/components/header';

export default function App({ Component, pageProps }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col items-center min-h-screen font-[Cormorant] pt-32 text-[#1C1C1C]">
        <Header />

        <main className="flex-grow flex flex-col w-full items-center bg-white">
          <Component {...pageProps} />
        </main>

        <footer className="flex w-full h-32 justify-center">
          <div className="h-full w-[75rem] px-6 flex items-center justify-between text-[#77817E]">
            <div className="tracking-widest">@{new Date().getFullYear()} Chansy Hu Photography</div>
            <div className="flex items-center">
              <a className="material-symbols-outlined cursor-pointer mr-4" href="mailto:chansyhuhu@gmail.com">
                mail
              </a>
              <a className="cursor-pointer mr-[0.875rem]" target="_blank" href="https://www.instagram.com/chansyhu/">
                <Image src={InstagramIcon} width={18} alt="instagram" />
              </a>
              <span className="material-symbols-outlined cursor-pointer" onClick={scrollToTop}>
                arrow_upward
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
