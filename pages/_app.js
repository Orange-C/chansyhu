import '@/styles/globals.css'

import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import InstagramIcon from '@/public/instagram.svg'

export default function App({ Component, pageProps }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
       <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col items-center min-h-screen font-[Cormorant] text-[#1C1C1C] pt-[138px]">
        <div className="flex fixed top-0 z-50 h-[138px] bg-[#f7f7f7] w-full justify-center">
          <div className="flex justify-between pl-[24px] w-[1200px] items-center h-full">
            <Link href="/"><h1 className="text-[20px] tracking-[.1em] uppercase">Chansy Hu</h1></Link>
            <nav className="flex uppercase">
              <Link className="px-[24px] tracking-[.2em] hover:underline" href="/">home</Link>
              <span>|</span>
              <Link className="px-[24px] tracking-[.2em] hover:underline" href="/portfolio">portfolio</Link>
              <span>|</span>
              <Link className="px-[24px] tracking-[.2em] hover:underline" href="/documentary">documentary</Link>
              <span>|</span>
              <Link className="px-[24px] tracking-[.2em] hover:underline" href="/contact">contact</Link>
            </nav>
          </div>
        </div>

        <main className="flex-grow flex flex-col w-full items-center">
          <Component {...pageProps} />
        </main>

        <footer className="flex w-full h-[136px] bg-[#f7f7f7] justify-center">
          <div className="h-full bg-[#f7f7f7] px-[24px] w-[1200px] flex items-center justify-between text-[#77817E]">
            <div className="tracking-[.1em]">@{new Date().getFullYear()} Chansy Hu Photography</div>
            <div className="flex items-center">
              <a className="material-symbols-outlined cursor-pointer mr-[16px]" href="mailto:chansyhuhu@gmail.com">mail</a>
              <a className="cursor-pointer mr-[14px]" target="_blank" href="https://www.instagram.com/chansyhu/">
                <Image
                  src={InstagramIcon}
                  width={18}
                  alt="instagram"
                />
              </a>
              <span className="material-symbols-outlined cursor-pointer" onClick={scrollToTop}>arrow_upward</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  )  
}
