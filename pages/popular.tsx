import MoviesList from '../components/movies-list';
import Head from 'next/head'

export default function InTheater() {

  return (
    <>
      <Head>
        <title>Popular</title>
      </Head>
      <MoviesList pageTitle={'Popular'} urlPrefix={'popular'} />
    </>
  )
}