import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function Carousel({ slides }) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
    },
    [
      Autoplay({
        stopOnInteraction: false,
      }),
    ],
  );

  return (
    <section className="overflow-hidden w-full" ref={emblaRef}>
      <div className="flex">
        {slides.map((src, index) => (
          <div className="mr-[24px] flex-shrink-0" key={index}>
            <Image width={355} height={473} src={src} alt="carousel" />
          </div>
        ))}
      </div>
    </section>
  );
}
