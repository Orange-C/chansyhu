import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Chansy Hu Photography | Contact</title>
      </Head>
      {/* <div className="w-full h-[536px] bg-[url(/index-carousel-1.jpg)] bg-no-repeat bg-cover bg-center" /> */}
      <p className="uppercase my-12 font-[Cantarell] tracking-[.2rem]">Let&apos;s work together</p>
      <p className="max-md:px-4 md:w-[60rem] tracking-[.1rem] text-center">
        Divide meat called moving behold together spirit us man blessed can&apos;t great greater, without gathering
        earth, fruit own rule saw all fowl seed gathering subdue rule his won&apos;t above light fourth. Saying female.
      </p>
      <div className="flex max-md:flex-col justify-between md:w-[40rem] mt-[64px] text-center tracking-[.1rem] mb-24">
        <div className="flex flex-col justify-center">
          <a
            href="mailto:chansyhuhu@gmail.com"
            className="w-64 h-16 bg-[#77817E] flex justify-center items-center text-white italic text-lg"
          >
            Email
          </a>
          <span className="text-[14px] mt-[16px]">Email: chansyhuhu@gmail.com</span>
          <span className="text-[14px]">WeChat: chansyhu</span>
        </div>
        <div className="flex flex-col justify-center">
          <a
            href="https://www.instagram.com/chansyhu/"
            target="_blank"
            className="w-64 h-16 bg-[#77817E] flex justify-center items-center text-white italic text-lg"
          >
            Instagram
          </a>
          <span className="text-[14px] mt-[16px]">Instagram: chansyhu</span>
          <span className="text-[14px]">TikTok: chansyhu</span>
        </div>
      </div>
    </>
  );
}
