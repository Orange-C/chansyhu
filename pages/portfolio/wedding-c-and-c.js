import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import PortfolioNav from '@/components/portfolio-nav';
import GalleryImage from '@/components/gallery-image';

const IMAGES = Array.from(Array(14).keys()).map(v => `/index-carousel-${v + 1}.jpg`);

export default function WeddingCAndC() {
  return (
    <>
      <Head>
        <title>Chansy Hu Photography | Portfolio | Wedding | C and C</title>
      </Head>
      <div className="py-[60px]">
        <PortfolioNav />
      </div>
      <div className="flex flex-wrap gap-[20px] w-[1000px] mb-[120px]">
        {IMAGES.map((v, index) => (
          <GalleryImage key={index} src={v} />
        ))}
      </div>
    </>
  );
}
