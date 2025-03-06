import Head from 'next/head';
// import Image from 'next/image';

import ProjectLink from '@/components/project-link';

import { WEDDING_PROJECT } from '@/const/config';

export default function Wedding() {
  return (
    <>
      <Head>
        <title>Chansy Hu Photography | Portfolio | Wedding</title>
      </Head>
      {/* <div className="w-full h-[536px] bg-[url(/index-carousel-1.jpg)] absolute -z-10 bg-no-repeat bg-cover bg-center grayscale opacity-60" /> */}
      <div className="flex max-md:flex-col gap-8 my-12">
        {WEDDING_PROJECT.map(p => (
          <ProjectLink key={p.name} category="wedding" value={p.name} path={p.path} imgSrc={p.imgSrc} />
        ))}
      </div>
    </>
  );
}
