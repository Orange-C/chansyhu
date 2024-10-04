import Link from 'next/link';

const NAV_CONFIG = [
  {
    path: '/',
    label: 'home',
  },
  {
    path: '/portfolio',
    label: 'portfolio',
  },
  {
    path: '/documentary',
    label: 'documentary',
  },
  {
    path: '/contact',
    label: 'contact',
  },
];

export default function header() {
  return (
    <div className="flex fixed top-0 z-50 h-32 bg-[#f7f7f7] w-full justify-center">
      <div className="flex justify-between pl-6 w-[75rem] items-center h-full">
        <Link href="/">
          <h1 className="text-xl tracking-widest uppercase">Chansy Hu</h1>
        </Link>
        <nav className="flex uppercase">
          {NAV_CONFIG.map((v, i) => (
            <>
              <Link key={v.path} className="px-6 tracking-widest hover:underline" href={v.path}>
                {v.label}
              </Link>
              {i != NAV_CONFIG.length - 1 ? <span>|</span> : null}
            </>
          ))}
        </nav>
      </div>
    </div>
  );
}
