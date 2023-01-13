import {GlobalCard, MovieInfoArea, MovieName, TypeArea, NoteArea, YearArea, Year, PosterArea} from '../styles/CardStyles'
import {getMovies} from '../utils/PosterMovies'
import {getSeries} from '../utils/PosterSeries'
import {getPersons} from '../utils/PosterPersons'
import Image from 'next/image'

export function Card (props) {


    return (
        <>
        <GlobalCard>
            <MovieInfoArea>
            <MovieName>{props.content.title || props.content.original_name || props.content.name}</MovieName>
            <TypeArea>
                {props.content.place_of_birth || 
                props.content.genres.map((genre)=> {
                    return <p>{genre.name}</p>
                })}
            </TypeArea>
            <NoteArea> {location.pathname === '/Persons' ? <p>Popularity: {props.content.popularity}</p> :
            <p>Note: {props.content.vote_average}</p>} </NoteArea>
            <YearArea>
            <Year>{props.content.tagline || props.content.birthday}</Year>
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