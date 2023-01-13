import {GlobalCard, MovieInfoArea, MovieName, TypeArea, NoteArea, ButtonArea, AddListButton, PosterArea} from '../styles/CardStyles'
import {getMovies} from '../utils/PosterMovies'
import Image from 'next/image'

export function Card (props) {

    return (
        <>
        <GlobalCard>
            <MovieInfoArea>
            <MovieName>{props.movie.title}</MovieName>
            <TypeArea>
                {props.movie.genres.map((genre)=> {
                    return <p>{genre.name}</p>
                })}
            </TypeArea>
            <NoteArea> <p>Note: {props.movie.vote_average}</p> </NoteArea>
            <ButtonArea>
            <AddListButton>Add to list!</AddListButton>
            </ButtonArea>
            </MovieInfoArea>

        <PosterArea>
            <Image src={getMovies(props.movie.id)} 
            width='160' 
            height='190'
            alt='card-poster' />
        </PosterArea>
        </GlobalCard>
        </>
    )
}