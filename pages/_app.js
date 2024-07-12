import '@/styles/globals.css'

import { useState } from 'react'
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
            <h1 className="text-[20px] tracking-[.1em]">CHANSY HU</h1>
            <nav className="flex">
              <Link className="px-[24px] tracking-[.2em] text-base" href="/">HOME</Link>
              <span>|</span>
              <Link className="px-[24px] tracking-[.2em] text-base" href="/portfilo">PORTFLIO</Link>
              <span>|</span>
              <Link className="px-[24px] tracking-[.2em] text-base" href="/documentary">DOCUMENTARY</Link>
              <span>|</span>
              <Link className="px-[24px] tracking-[.2em] text-base" href="/contact">CONTACT</Link>
            </nav>
          </div>
        </div>

        <Component {...pageProps} />

        <footer className="flex w-full h-[136px] bg-[#f7f7f7] justify-center">
          <div className="h-full bg-[#f7f7f7] px-[24px] w-[1200px] flex items-center justify-between text-[#77817E]">
            <div className="tracking-[.1em]">@2024 Chansy Hu Photography</div>
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
