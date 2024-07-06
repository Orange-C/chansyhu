import Head from 'next/head'

import Gallery from '@/components/Gallery'

const IMAGES = Array.from(Array(16).keys()).map(v => '/test.jpg')

export default function Family() {
  return (
    <>
      <Head>
        <title>Chansy Hu Photography | Family</title>
      </Head>
      <Gallery 
        title="family"
        images={IMAGES}
      />
    </>
  )
}