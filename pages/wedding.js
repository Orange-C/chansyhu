import Head from 'next/head'

import Gallery from 'components/Gallery'

const IMAGES = Array.from(Array(16).keys()).map(v => '/test.jpg')

export default function Wedding() {
  return (
    <>
      <Head>
        <title>Chansy Hu Photography | Wedding</title>
      </Head>
      <Gallery 
        title="wedding"
        images={IMAGES}
      />
    </>
  )
}