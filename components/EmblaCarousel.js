import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const EmblaCarousel = (props) => {
  const { slides } = props
  const [emblaRef] = useEmblaCarousel({ 
    loop: true,
    watchDrag: false,
  }, [Autoplay()])

  return (
    <section className="overflow-hidden w-full mb-6" ref={emblaRef}>
      <div className="flex">
        {slides.map((src, index) => (
          <div className="mr-4 flex-shrink-0" key={index}>
            <Image 
              width={380} 
              height={570}
              src={src}
              alt="test" 
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default EmblaCarousel
