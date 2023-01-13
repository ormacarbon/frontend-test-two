import Head from 'next/head'
import {useContext} from 'react'
import {Globalcontext} from '../context/GlobalContext'
import {Card} from '../components/Card'

import styled from 'styled-components'

export default function Series() {

    const context = useContext(Globalcontext)
    const {series} = context

    const GlobalSeriesPage = styled.section `
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    gap:0.5rem;
    min-height: 80vh;
`

    return (
        <>
            <Head>
                <title>Series</title>
            </Head>


            <GlobalSeriesPage>
                {series.map((serie)=> {
                    return <Card 
                    key={serie.id}
                    content={serie}
                    />
                })}
            </GlobalSeriesPage>
        </>
    )
}