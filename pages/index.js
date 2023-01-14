import Head from 'next/head'
import {Card} from '../components/Card'

import {useContext} from 'react'
import {Globalcontext} from '../context/GlobalContext'

import {GlobalHomePage} from '../styles/PagesStyles'

export default function Home() {

  const context = useContext(Globalcontext)
  const {movies} = context



  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>


      <GlobalHomePage>
        {movies.map((movie)=> {
          return <Card 
          key={movie.id}
          content={movie}
          />
        })}
      </GlobalHomePage>
    </>
  )
}
