import { Card } from '../components/Card'
import { GlobalSeriesPage } from '../styles/PagesStyles'

import { Globalcontext } from '../context/GlobalContext'
import { useContext } from 'react'

import Head from 'next/head'


export default function Series() {

    const context = useContext(Globalcontext)
    const { series, searchSeries, darkMode } = context

    return (
        <>
            <Head>
                <title>Series</title>
            </Head>

            <GlobalSeriesPage darkMode={darkMode} >
                {series.filter((serie) => {
                    return serie.original_name.toLowerCase().includes(searchSeries)
                })
                    .map((serie) => {
                        return <Card
                            key={serie.id}
                            content={serie}
                        />
                    })}
            </GlobalSeriesPage>
        </>
    )
}