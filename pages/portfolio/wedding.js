import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import PortfolioNav from '@/components/portfolio-nav'
import ProjectLink from '@/components/project-link'

export default function Wedding() {
  return (
    <>
      <Head>
        <title>Chansy Hu Photography | Portfolio | Wedding</title>
      </Head>
      <div className="w-full h-[536px] bg-[url(/index-carousel-1.jpg)] absolute -z-10 bg-no-repeat bg-cover bg-center grayscale opacity-60" />
      <div className="py-[60px]">
        <PortfolioNav />
      </div>
      <div className="bg-white w-[960px] p-[48px] mb-[64px]">
        <div className="flex w-full justify-between mb-[40px]">
          <ProjectLink value="harper" imgSrc="/index-carousel-1.jpg"/>
          <ProjectLink value="harper" imgSrc="/index-carousel-2.jpg"/>
          <ProjectLink value="harper" imgSrc="/index-carousel-3.jpg"/>
        </div>
        <div className="flex w-full justify-between">
          <ProjectLink value="harper" imgSrc="/index-carousel-1.jpg"/>
          <ProjectLink value="harper" imgSrc="/index-carousel-2.jpg"/>
          <ProjectLink value="harper" imgSrc="/index-carousel-3.jpg"/>
        </div>
      </div>
    </>
  )
}