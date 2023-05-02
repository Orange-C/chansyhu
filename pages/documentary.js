import Head from 'next/head'

import Gallery from 'components/Gallery'

const IMAGES = Array.from(Array(16).keys()).map(v => '/test.jpg')

export default function Documentary() {
  return (
    <>
      <Head>
        <title>Chansy Hu Photography | Documentary</title>
      </Head>
      <Gallery 
        title="documentary"
        images={IMAGES}
      />
    </>
  )
}