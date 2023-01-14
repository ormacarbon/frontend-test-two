import Head from 'next/head'
import { Card } from '../components/Card'
import { useContext } from 'react'
import { Globalcontext } from '../context/GlobalContext'
import { GlobalPersonsPage } from '../styles/PagesStyles'

export default function Persons() {

    const context = useContext(Globalcontext)
    const { persons, searchPersons } = context


    return (
        <>
            <Head>
                <title>Actors</title>
            </Head>


            <GlobalPersonsPage>
                {persons.filter((person) => {
                    return person.name.toLowerCase().includes(searchPersons)
                })
                    .map((person) => {
                        return <Card
                            key={person.id}
                            content={person}
                        />
                    })}
            </GlobalPersonsPage>
        </>
    )
}