import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import { CATEGORY } from '@/const/config';

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

      <div className="flex gap-8 my-12 max-md:flex-col">
        {CATEGORY.map(c => (
          <CategoryLink key={c.name} value={c.name} imgSrc={c.imgSrc} />
        ))}
      </div>
    </>
  );
}
