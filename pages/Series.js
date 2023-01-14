import Head from 'next/head'
import { useContext } from 'react'
import { Globalcontext } from '../context/GlobalContext'
import { Card } from '../components/Card'
import { GlobalSeriesPage } from '../styles/PagesStyles'


export default function Series() {

    const context = useContext(Globalcontext)
    const { series, searchSeries } = context


    return (
        <>
            <Head>
                <title>Series</title>
            </Head>

            <GlobalSeriesPage>
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