import Head from 'next/head'
import Filter from '../components/Filter'
import {Card} from '../components/Card'

import {useContext} from 'react'
import {Globalcontext} from '../context/GlobalContext'

import styled from 'styled-components'

export default function Home() {

  const context = useContext(Globalcontext)
  const {movies} = context

const GlobalHomePage = styled.section `
  display: flex;
  flex-wrap: wrap;
  gap:0.5rem;
  min-height: 80vh;
`

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>


      <GlobalHomePage>
        {movies.map((movie)=> {
          return <Card 
          key={movie.id}
          movie={movie}
          />
        })}
      </GlobalHomePage>
    </>
  )
}
