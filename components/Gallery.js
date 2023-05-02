import Image from 'next/image'

export default function Gallery(props) {
  const { title, images } = props;
  
  return (
    <>
      <header className="flex flex-col items-center">
        <h1 className="text-4xl mt-8 mb-10">{title.toUpperCase()}</h1>
      </header>
      <main className="flex-grow flex w-[872px] flex-wrap mb-10">
        {images.map((src, index) => (
          <Image
            className="mx-4 mb-8" 
            key={index}
            width={400} 
            height={600} 
            src={src} 
            alt="gallery image"
          />
        ))}
      </main>
    </>
  )
}