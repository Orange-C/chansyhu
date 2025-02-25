import Image from 'next/image';
import InstagramIcon from '@/public/instagram.svg';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="flex w-full md:h-32 max-md:py-8 justify-center">
      <div className="h-full w-full md:w-[75rem] px-6 flex max-md:flex-col max-md:gap-6 items-center md:justify-between text-[#77817E]">
        <div className="tracking-widest">@{new Date().getFullYear()} Chansy Hu Photography</div>
        <div className="flex items-center max-md:flex-col max-md:gap-6">
          {/* <a className="material-symbols-outlined cursor-pointer mr-4" href="mailto:chansyhuhu@gmail.com">
            mail
          </a> */}
          <a className="cursor-pointer md:mr-3" target="_blank" href="https://www.instagram.com/chansyhu/">
            <Image src={InstagramIcon} width={18} alt="instagram" />
          </a>
          <span className="material-symbols-outlined cursor-pointer" onClick={scrollToTop}>
            arrow_upward
          </span>
        </div>
      </div>
    </footer>
  );
}
