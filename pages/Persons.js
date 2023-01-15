import { Card } from '../components/Card'
import { GlobalPersonsPage } from '../styles/PagesStyles'

import { useContext } from 'react'
import { Globalcontext } from '../context/GlobalContext'

import Head from 'next/head'

export default function Persons() {

    const context = useContext(Globalcontext)
    const { persons, searchPersons, darkMode } = context

    return (
        <>
            <Head>
                <title>Actors</title>
            </Head>


            <GlobalPersonsPage darkMode={darkMode} >
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