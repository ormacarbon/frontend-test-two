import Head from 'next/head';
import MoviesList from '../components/movies-list';

export default function InTheater() {

  return (
    <>
      <Head>
        <title>Coming soon</title>
      </Head>
      <MoviesList pageTitle={'Coming soon'} urlPrefix={'upcoming'} />
    </>
  )
}