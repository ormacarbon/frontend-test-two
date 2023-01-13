import Head from 'next/head'

import { Card } from '../components/Card'

import { useContext } from 'react'
import { Globalcontext } from '../context/GlobalContext'

import styled from 'styled-components'

export default function Persons() {

    const context = useContext(Globalcontext)
    const { persons } = context

    const GlobalPersonsPage = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    gap:0.5rem;
    min-height: 80vh;
`

    return (
        <>
            <Head>
                <title>Actors</title>
            </Head>


            <GlobalPersonsPage>
                {persons.map((person)=> {
                    return <Card 
                    key={person.id}
                    content={person}
                    />
                })}
            </GlobalPersonsPage>
        </>
    )
}