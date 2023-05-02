import '@/styles/globals.css'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function App({ Component, pageProps }) {
  const [showModal, setShowModal] = useState(false)
  
  return (
    <div className="flex flex-col items-center pt-16 min-h-screen font-serif">
      <div className="flex fixed w-full justify-center items-center h-16 border-b-[1px] border-gray-200 top-0 bg-white z-50">
        <nav className="flex justify-between h-8 item-center divide-x items-center text-slate-600">
          <Link className="px-8" href="/">Home</Link>
          <Link className="px-8" href="/wedding">Wedding</Link>
          <Link className="px-8" href="/portrait">Portrait</Link>
          <Link className="px-8" href="/family">Family</Link>
          <Link className="px-8" href="/documentary">Documentary</Link>
          <Link className="px-8" href="/contact">Contact</Link>
        </nav>
        <div className="absolute right-0 h-full flex items-center pl-6 pr-4 bg-gray-400">
          <Link target="_blank" href="mailto:chansyhuhu@gmail.com">
            <Image width="16" height="16" src="/email.png" alt="email"/>
          </Link>
          <div 
            className="pl-2 cursor-pointer relative"
            onMouseOver={() => setShowModal(true)}
            onMouseLeave={() => setShowModal(false)}
          >
            <Image width="20" height="20" src="/wechat.png" alt="wechat"/>
            {showModal && (
              <div className="absolute bg-white -left-[185px] w-[220px] h-[220px] shadow-xl">
                <Image 
                  fill={true}
                  src="/test.jpg"
                  alt="wechat QR code"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <Component {...pageProps} />

      <footer className="h-20 w-full bg-gray-400 text-white text-center pt-4">
        Chansy Hu Photography
      </footer>
    </div>
  )  
}
