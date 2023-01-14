import Head from 'next/head'
import {useContext} from 'react'
import {Globalcontext} from '../context/GlobalContext'
import {Card} from '../components/Card'
import {GlobalSeriesPage} from '../styles/PagesStyles'


export default function Series() {

    const context = useContext(Globalcontext)
    const {series} = context


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