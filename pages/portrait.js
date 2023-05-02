import Head from 'next/head'

import Gallery from 'components/Gallery'

const IMAGES = Array.from(Array(16).keys()).map(v => '/test.jpg')

export default function Portrait() {
  return (
    <>
      <Head>
        <title>Chansy Hu Photography | Portrait</title>
      </Head>
      <Gallery 
        title="portrait"
        images={IMAGES}
      />
    </>
  )
}