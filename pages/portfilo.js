import Head from 'next/head'

import Gallery from '@/components/Gallery'

const IMAGES = Array.from(Array(16).keys()).map(v => '/test.jpg')

export default function Portfilo() {
  return (
    <>
      <Head>
        <title>Chansy Hu Photography | Portfilo</title>
      </Head>
      <Gallery 
        title="Portfilo"
        images={IMAGES}
      />
    </>
  )
}