import { useState } from 'react'
import Image from 'next/image'
import classNames from 'classnames';

export default function GalleryImage({src, square, imgList, index}) {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Image
        className="cursor-pointer hover:opacity-80 transition"
        onClick={() => setVisible(true)}
        width={square ? 300 : 320} 
        height={square ? 300 : 480} 
        src={src} 
        alt="gallery image"
      />
      <div className={classNames({
        "fixed top-0 left-0 w-full h-full bg-white z-50": true,
        "hidden": !visible
      })}>
        <Image
          src={src}
          fill
          style={{
            objectFit: 'contain',
          }}
          alt="gallery image"
        />
        <span class="material-symbols-outlined cursor-pointer absolute right-[10px] top-[10px] text-[32px]" onClick={() => setVisible(false)}>
          close
        </span>
      </div>
    </div>
  )
}