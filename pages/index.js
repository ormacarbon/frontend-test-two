import { GlobalHomePage } from '../styles/PagesStyles'
import { Card } from '../components/Card'

import { useContext } from 'react'
import { Globalcontext } from '../context/GlobalContext'

import Head from 'next/head'

export default function Home() {

  const context = useContext(Globalcontext)
  const { movies, searchMovies, darkMode } = context

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>


      <GlobalHomePage darkMode={darkMode} >
        {movies.filter((movie) => {
          return movie.title.toLowerCase().includes(searchMovies)
        })
          .map((movie) => {
            return <Card
              key={movie.id}
              content={movie}
            />
          })}
      </GlobalHomePage>
    </>
  )
}
