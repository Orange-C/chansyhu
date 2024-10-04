import Link from 'next/link';

export default function PortfolioNav() {
  return (
    <div className="flex flex-col items-center">
      <Link className="tracking-[.2rem] uppercase hover:underline font-[Cantarell]" href="/portfolio">
        portfolio
      </Link>
      <nav className="flex mt-[32px] tracking-[.1rem] italic">
        <Link className="px-[32px] hover:underline" href="/portfolio/wedding">
          wedding
        </Link>
        <Link className="px-[32px] hover:underline" href="/portfolio/elopement">
          elopement
        </Link>
        <Link className="px-[32px] hover:underline" href="/portfolio/engagement">
          engagement
        </Link>
        <Link className="px-[32px] hover:underline" href="/portfolio/portrait">
          portrait
        </Link>
        <Link className="px-[32px] hover:underline" href="/portfolio/family">
          family
        </Link>
        <Link className="px-[32px] hover:underline" href="/portfolio/event">
          event
        </Link>
      </nav>
    </div>
  );
}
