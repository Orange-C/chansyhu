import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// const SLIDES = Array.from(Array(14).keys()).map(v => `/index-carousel-${v + 1}.jpg`);

import Carousel from '@/components/carousel';

export default function Home() {
  return (
    <>
      <Head>
        <title>Chansy Hu Photography</title>
      </Head>

      {/* <div className="w-[1200px] py-[130px]">
        <Carousel slides={SLIDES} />
      </div> */}

      <Image className="pt-6 md:pt-16 pb-16" width={355} height={473} src="/index-carousel-1.jpg" alt="index" />

      <section className="flex flex-col items-center md:w-[40rem] pb-24 md:pb-32">
        <p className="font-[Cantarell] tracking-[.2rem] text-base mb-6 px-6">
          ARTISTICALLY CRAFTED PORTRAITS FOR THE DARLING
        </p>
        <p className="italic tracking-[.1rem] text-lg mb-6">wedding • engagement • elopement</p>
        <p className="tracking-[.1rem] text-base mb-16 text-center px-6">
          Creature brought darkness given itself there. And spirit fifth greater good forth have them all. Yielding have
          also
        </p>
        <Link
          className="w-60 h-16 bg-[#77817E] flex justify-center items-center text-white italic text-lg tracking-[.1rem]"
          href="/contact"
        >
          Contact
        </Link>
      </section>
    </>
  );
}
