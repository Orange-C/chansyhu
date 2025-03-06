import { useState } from 'react';
import Link from 'next/link';
import { Fragment } from 'react';

import { NAV_CONFIG } from '@/const/config';
import classNames from 'classnames';

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
          <span class="material-symbols-outlined pr-6 md:!hidden select-none" onClick={() => setShowNav(true)}>
            menu
          </span>
        ) : (
          <span className="material-symbols-outlined pr-6 md:!hidden select-none" onClick={() => setShowNav(false)}>
            close
          </span>
        )}
        {showNav && (
          <nav className="absolute bg-[#f7f7f7] top-20 w-full flex flex-col items-center h-[calc(100vh-5rem)] pt-10 uppercase">
            {NAV_CONFIG.map(v => (
              <>
                <Link
                  key={v.path}
                  className={classNames(
                    'text-2xl tracking-widest hover:underline',
                    Boolean(v.children) ? 'pt-10 pb-4' : 'py-10',
                  )}
                  href={v.path}
                  onClick={() => setShowNav(false)}
                >
                  {v.label}
                </Link>
                {v.children?.map(vc => (
                  <Link
                    key={vc.path}
                    className="pb-4 text-lg tracking-widest hover:underline"
                    href={`/${v.path}/${vc.path}`}
                    onClick={() => setShowNav(false)}
                  >
                    {vc.label}
                  </Link>
                ))}
              </>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
}
