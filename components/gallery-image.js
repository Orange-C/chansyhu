import Image from 'next/image';

export default function GalleryImage({ src, showFullScreenImage }) {
  return (
    <Image
      className="cursor-pointer hover:opacity-80 transition"
      onClick={() => showFullScreenImage(src)}
      width={320}
      height={480}
      src={src}
      alt="gallery image"
    />
  );
}
