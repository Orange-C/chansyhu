import Link from 'next/link'
import Image from 'next/image'

export default function ProjectLink({ imgSrc, value }) {
    return (
      <div>
        <Link href={`/portfolio/wedding-c-and-c`} className="hover:opacity-80 transition">
          <Image
            width={247} 
            height={370}
            src={imgSrc}
            alt="portfolio category" 
          />
        </Link>
        <div className="uppercase text-center font-[Cantarell] tracking-[.2em] mt-[16px]">{value}</div>
      </div>
    );
  }
  