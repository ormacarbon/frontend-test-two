import Head from 'next/head'
import React from 'react'

export default function SEO({name,desc}) {
  return (
    <Head>
        <title>{name}</title>
        <meta name="description" content={`${desc}`} />
    </Head>
  )
}
