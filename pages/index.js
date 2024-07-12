import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const SLIDES = Array.from(Array(14).keys()).map(v => `/index-carousel-${v+1}.jpg`)

import EmblaCarousel from '@/components/EmblaCarousel'

export default function Home() {
  return (
    <>
      <Head>
        <title>Chansy Hu Photography</title>
      </Head>
      <main className="flex-grow flex flex-col w-full items-center pb-[130px]">
        <div className="w-[1200px] py-[130px]">
          <EmblaCarousel slides={SLIDES} />
        </div>

        <section className="flex flex-col items-center w-[600px]">
          <p className="font-[Cantarell] tracking-[.2em] text-[16px] mb-[24px]">ARTISTICALLY CRAFTED PORTRAITS FOR THE DARLING</p>
          <p className="italic tracking-[.1em] text-[18px] mb-[24px]">wedding • engagement • elopement</p>
          <p className="tracking-[.1em] text-[16px] mb-[64px] text-center">Creature brought darkness given itself there. And spirit fifth greater good forth have them all. Yielding have also</p>
          <Link className="w-[245px] h-[60px] bg-[#77817E] flex justify-center items-center text-white italic text-[18px] tracking-[.1em]" href="/contact">
            Contact
          </Link>
        </section>
      </main>
    </>
  )
}
