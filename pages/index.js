import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const SLIDES = Array.from(Array(15).keys()).map(v => '/test.jpg')
const BLOCKS = [{
  img: '/test.jpg',
  link: 'wedding',
  label: 'Wedding',
}, {
  img: '/test.jpg',
  link: 'portrait',
  label: 'Portrait',
}, {
  img: '/test.jpg',
  link: 'family',
  label: 'Family',
}, {
  img: '/test.jpg',
  link: 'documentary',
  label: 'Documentary',
}]

import EmblaCarousel from 'components/EmblaCarousel'

export default function Home() {
  return (
    <>
      <Head>
        <title>Chansy Hu Photography</title>
      </Head>
      <header className="flex flex-col items-center">
        <h1 className="text-4xl mt-8 mb-2">CHANSY HU</h1>
        <h2 className="text-xl mb-6">Photography</h2>
      </header>
      <main className="flex-grow flex flex-col w-full items-center">
        <EmblaCarousel slides={SLIDES} />
        <section className="bg-gray-400 text-white py-6 px-10 flex justify-center w-[720px] mb-8">
          <p className="max-w-full">
            introduction, introduction, introduction, introduction, introduction, introduction, introduction, introduction, introduction, introduction, introduction, introduction, introduction, introduction, introduction.
          </p>
        </section>
        <section className="flex mb-10 divide-x-[12px]">
          {BLOCKS.map((item, index) => (
            <Link className="relative" href={item.link} key={index}>
              <Image 
                className="absolute -z-10" 
                width={240} 
                height={360} 
                src={item.img} 
                alt={item.label} 
              />
              <div className="w-[240px] h-[360px] text-white flex justify-center items-center text-2xl bg-black bg-opacity-30">{item.label}</div>
            </Link>
          ))}
        </section>
      </main>
    </>
  )
}
