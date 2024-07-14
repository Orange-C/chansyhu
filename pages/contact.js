import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Chansy Hu Photography | Contact</title>
      </Head>
      <div className="w-full h-[536px] bg-[url(/index-carousel-1.jpg)] bg-no-repeat bg-cover bg-center" />
      <p className="uppercase my-[48px] font-[Cantarell] tracking-[.2em]">Let&apos;s work together</p>
      <p className="w-[960px] tracking-[.1em] text-center">Divide meat called moving behold together spirit us man blessed can&apos;t great greater, without gathering earth, fruit own rule saw all fowl seed gathering subdue rule his won&apos;t above light fourth. Saying female.</p>
      <div className="flex justify-between w-[600px] mt-[64px] text-center tracking-[.1em] mb-[100px]">
        <div className="flex flex-col justify-center">
          <a href="mailto:chansyhuhu@gmail.com" className="w-[245px] h-[60px] bg-[#77817E] flex justify-center items-center text-white italic text-[18px]">
            Email
          </a>
          <span className="text-[14px] mt-[16px]">Email: chansyhuhu@gmail.com</span>
          <span className="text-[14px]">WeChat: chansyhu</span>
        </div>
        <div className="flex flex-col justify-center">
          <a href="https://www.instagram.com/chansyhu/" target="_blank" className="w-[245px] h-[60px] bg-[#77817E] flex justify-center items-center text-white italic text-[18px]">
            Instagram
          </a>
          <span className="text-[14px] mt-[16px]">Instagram: chansyhu</span>
          <span className="text-[14px]">TikTok: chansyhu</span>
        </div>
      </div>
    </>
  )
}