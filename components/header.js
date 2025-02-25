import { useState } from 'react';
import Link from 'next/link';
import { Fragment } from 'react';

const NAV_CONFIG = [
  {
    path: '/',
    label: 'home',
  },
  {
    path: '/portfolio',
    label: 'portfolio',
  },
  // {
  //   path: '/documentary',
  //   label: 'documentary',
  // },
  {
    path: '/contact',
    label: 'contact',
  },
];

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="flex fixed top-0 z-50 h-20 md:h-32 bg-[#f7f7f7] w-full justify-center">
      <div className="flex justify-between w-full md:w-[75rem] items-center h-full">
        <Link href="/" className="pl-6">
          <h1 className="text-2xl tracking-widest uppercase">Chansy Hu</h1>
        </Link>

        {/* pc nav */}
        <nav className="flex uppercase max-md:hidden">
          {NAV_CONFIG.map((v, i) => (
            <Fragment key={v.path}>
              <Link className="px-6 tracking-widest hover:underline" href={v.path}>
                {v.label}
              </Link>
              {i != NAV_CONFIG.length - 1 ? <span>|</span> : null}
            </Fragment>
          ))}
        </nav>

        {/* mobile nav */}
        {!showNav ? (
          <span class="material-symbols-outlined pr-6 md:hidden cursor-pointer" onClick={() => setShowNav(true)}>
            menu
          </span>
        ) : (
          <span className="material-symbols-outlined pr-6 md:hidden cursor-pointer" onClick={() => setShowNav(false)}>
            close
          </span>
        )}
        {showNav && (
          <nav className="absolute bg-[#f7f7f7] top-20 w-full flex flex-col items-center h-[calc(100vh-5rem)] pt-10 uppercase">
            {NAV_CONFIG.map((v, i) => (
              <Link
                key={v.path}
                className="py-6 text-2xl tracking-widest hover:underline"
                href={v.path}
                onClick={() => setShowNav(false)}
              >
                {v.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
}
