import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

// import PortfolioNav from '@/components/portfolio-nav';

function CategoryLink({ imgSrc, value }) {
  return (
    <Link href={`/portfolio/${value}`} className="relative">
      <Image width={373} height={560} src={imgSrc} alt="portfolio category" />
      <div className="w-full h-full absolute top-0 left-0 font-['Bodoni Moda SC'] flex items-center justify-center text-[32px] text-white uppercase tracking-[.2rem] bg-black/20 hover:bg-black/40 transition duration-200 category-card">
        <div className="flex flex-col justify-center transition duration-200 category-title">
          <span>{value}</span>
          <span className="material-symbols-outlined mt-[8px] text-center">arrow_forward</span>
        </div>
      </div>
    </Link>
  );
}

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Chansy Hu Photography | Portfolio</title>
      </Head>
      <div className="w-full h-[380px] bg-[#f7f7f7] absolute -z-10" />
      {/* <div className="py-[60px]"><PortfolioNav /></div> */}
      <div className="flex gap-[24px] mb-[24px] mt-[60px]">
        <CategoryLink value="wedding" imgSrc="/index-carousel-1.jpg" />
        <CategoryLink value="elopement" imgSrc="/index-carousel-2.jpg" />
        <CategoryLink value="engagement" imgSrc="/index-carousel-3.jpg" />
      </div>
      {/* <div className="flex gap-[24px] mb-[100px]">
        <CategoryLink value="portrait" imgSrc="/index-carousel-4.jpg" />
        <CategoryLink value="family" imgSrc="/index-carousel-5.jpg" />
        <CategoryLink value="event" imgSrc="/index-carousel-6.jpg" />
      </div> */}
    </>
  );
}
