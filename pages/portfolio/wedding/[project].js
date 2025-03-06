import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import GalleryImage from '@/components/gallery-image';

const IMAGES = Array.from(Array(14).keys()).map(v => `/index-carousel-${v + 1}.jpg`);

export default function WeddingCAndC() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [fullImgSrc, setFullImgSrc] = useState('');

  const showFullScreenImage = src => {
    document.body.style.overflow = 'hidden';
    setFullImgSrc(src);
    setVisible(true);
  };

  const hideFullScreenImage = () => {
    setVisible(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <Head>
        <title>Chansy Hu Photography | Portfolio | Wedding</title>
      </Head>

      <div className="flex max-md:flex-col flex-wrap gap-4 md:gap-4 md:w-[62rem] my-16 md:mt-16 md:mb-32">
        {IMAGES.map((v, index) => (
          <GalleryImage key={index} src={v} showFullScreenImage={showFullScreenImage} />
        ))}
        <div
          className={classNames({
            'fixed top-0 left-0 w-full h-full bg-white z-50': true,
            hidden: !visible,
          })}
        >
          <Image
            src={fullImgSrc}
            fill
            style={{
              objectFit: 'contain',
            }}
            alt="gallery image"
          />
          <span
            className="material-symbols-outlined cursor-pointer absolute right-[10px] top-[10px] text-[32px]"
            onClick={hideFullScreenImage}
          >
            close
          </span>
        </div>
      </div>
    </>
  );
}
