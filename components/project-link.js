import Link from 'next/link';
import Image from 'next/image';

export default function ProjectLink({ imgSrc, value, path, category }) {
  return (
    <div>
      <Link href={`/portfolio/${category}/${path}`} className="hover:opacity-80 transition">
        <Image width={247} height={370} src={imgSrc} alt="portfolio category" />
      </Link>
      <div className="uppercase text-center font-[Cantarell] tracking-[.2rem] mt-[16px]">{value}</div>
    </div>
  );
}
