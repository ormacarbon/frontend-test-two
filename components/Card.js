import {GlobalCard, MovieInfoArea, MovieName, TypeArea, NoteArea, YearArea, Year, PosterArea} from '../styles/CardStyles'
import {getMovies} from '../utils/PosterMovies'
import {getSeries} from '../utils/PosterSeries'
import {getPersons} from '../utils/PosterPersons'

import {useContext} from 'react'
import {Globalcontext} from '../context/GlobalContext'

import Image from 'next/image'

export function Card (props) {

    const context = useContext(Globalcontext)
    const {darkMode} = context

    return (
        <>
        <GlobalCard darkMode={darkMode} >
            <MovieInfoArea>
            <MovieName darkMode={darkMode} >{props.content.title || props.content.original_name || props.content.name}</MovieName>
            <TypeArea darkMode={darkMode} >
                {props.content.place_of_birth || 
                props.content.genres.map((genre)=> {
                    return <p key={genre.name} >{genre.name}</p>
                })}
            </TypeArea>
            <NoteArea darkMode={darkMode} > {location.pathname === '/Persons' ? <p>Popularity: {props.content.popularity}</p> :
            <p>Note: {props.content.vote_average}</p>} </NoteArea>
            <YearArea darkMode={darkMode} >
            <Year darkMode={darkMode} >{props.content.tagline || props.content.birthday}</Year>
            </YearArea>
            </MovieInfoArea>

        <PosterArea>
            {location.pathname === "/" ? 
            <Image src={getMovies(props.content.id)} width='160' height='190' alt='card-poster'/> : <p></p>}

            {location.pathname === '/Series' ?
            <Image src={getSeries(props.content.id)} width='160' height='190'alt='card-poster' /> : <p></p>}

            {location.pathname === '/Persons' ? 
            <Image src={getPersons(props.content.id)} width='160' height='190'alt='card-poster' /> : <p></p>}
        </PosterArea>
        </GlobalCard>
        </>
    ) 
}