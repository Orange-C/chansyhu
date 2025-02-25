import Head from 'next/head';
import Image from 'next/image';

import GalleryImage from '@/components/gallery-image';

const IMAGES = Array.from(Array(14).keys()).map(v => `/square-img.jpg`);

export default function Documentary() {
  return (
    <>
      <Head>
        <title>Chansy Hu Photography | Documentary</title>
      </Head>
      <div className="w-full h-[380px] bg-[#f7f7f7] absolute -z-10" />
      <div className="w-[1200px] flex mt-[60px] justify-between">
        <div className="p-[16px] bg-white">
          <Image width={400} height={400} src="/square-img.jpg" alt="Documentary" />
        </div>
        <div className="flex flex-col justify-center w-[500px] text-center pt-[96px]">
          <p className="uppercase my-[32px] font-[Cantarell] tracking-[.2rem]">Documentary</p>
          <p className="italic tracking-[.2rem] mb-[64px]">
            CALIFORNIA . ULTA . Arizona . Oregon . HONGKONG . SINGGPORE . KOREA . THAILAND
          </p>
          <p className="tracking-[.1rem]">
            In life, I always use a camera to record the beautiful moments happening in the world.
          </p>
        </div>
      </div>
      <div className="w-[1200px] grid grid-cols-3 my-[120px] gap-[32px]">
        {IMAGES.map((v, index) => (
          <div className="flex justify-center items-center" key={index}>
            <GalleryImage src={v} />
          </div>
        ))}
      </div>
    </>
  );
}
