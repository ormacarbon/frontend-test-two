
import Head from 'next/head'
import styled from 'styled-components'
const Paragraf = styled.div`
  background: red;
  font-size: 1.2rem;
  cursor: pointer;
`
export default function Joke(){
  return (
      <>
        <Head>
          <title>Piada</title>
          <meta name="description" content="Aba sobre piada"></meta>
        </Head>
        <h1>Nesse link possui uma piada sobre clima quente: </h1>
        <Paragraf>https://www.youtube.com/watch?v=-0G2mIYcRlE</Paragraf>
      </>
  )
}