import MoviesList from '../components/movies-list';
import Head from 'next/head'

export default function InTheater() {

  return (
    <>
      <Head>
        <title>Now playing</title>
      </Head>
      <MoviesList pageTitle={'Now playing'} urlPrefix={'now_playing'} />
    </>
  )
}