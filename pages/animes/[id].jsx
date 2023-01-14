import Image from 'next/image';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import useMediaQuery from '../../utils/useMediaQuery';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


export default function Anime({ anime }) {
    const [hasWindow, setHasWindow] = useState(false);
    const { isFallback } = useRouter();
    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true);
        }
    }, []);
    const matcheSmall = useMediaQuery(800);
    if (isFallback) {
        return <p>Carregando</p>;
    }
    return (
        <>
            {matcheSmall ? <>
                <Main>
                    <Image loader={() => anime.image} unoptimized={true} src={anime.image} alt={anime.title} width={400} height={350} />
                    <div>
                        <h1>Title: {anime.title}</h1>
                        <h2>Genres: {anime.genres}</h2>
                        <h2>Status: {anime.status}</h2>
                        <h2>Studios: {anime.studios}</h2>
                        <h2>Duration: {anime.duration}</h2>
                        <h2>Episodes: {anime.episodes}</h2>
                        <h2>Source: {anime.source}</h2>
                        <h2>Rating: {anime.rating}</h2>
                        <h2>Japanese Title: {anime.title_japanese}</h2>
                        <h2>Synopsis: {anime.synopsis}</h2>
                    </div>

                    <ReactPlayer url={anime.trailer} width="400px" height="400px" />
                </Main>

            </> :
                <>
                    <Info>
                        <div>
                            <Image loader={() => anime.image} unoptimized={true} src={anime.image} alt={anime.title} width={500} height={500} />
                        </div>
                        <div>
                            <h1>Title: {anime.title}</h1>
                            <h2>Genres: {anime.genres}</h2>
                            <h2>Status: {anime.status}</h2>
                            <h2>Studios: {anime.studios}</h2>
                            <h2>Duration: {anime.duration}</h2>
                            <h2>Episodes: {anime.episodes}</h2>
                            <h2>Source: {anime.source}</h2>
                            <h2>Rating: {anime.rating}</h2>
                            <h2>Japanese Title: {anime.title_japanese}</h2>
                            <h2>Synopsis: {anime.synopsis}</h2>
                        </div>
                    </Info>
                    <Video>
                        {
                            hasWindow && <ReactPlayer url={anime.trailer} width="900px" height="600px" />
                        }
                    </Video>
                </>}

        </>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: '1', id: '5', id: '6' } }
        ],
        fallback: true,
    }

}

export async function getStaticProps(context) {
    const { id } = context.params;
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
    const { data } = await response.json();

    const arrayGenres = data.genres.map((genre) => {
        return genre?.name ?? '';
    });
    const arrayStudios = data.studios.map(studio => {
        return studio?.name ?? '';
    });
    const studios = arrayStudios.join(",");
    const genres = arrayGenres.join(",");


    const anime = {
        image: data?.images.jpg.image_url,
        title: data?.title,
        duration: data?.duration,
        score: data?.score,
        rating: data?.rating,
        trailer: data?.trailer.url,
        image_trailer: data?.trailer.images.image_url,
        title_japanese: data?.title_japanese,
        genres: genres,
        studios: studios,
        status: data?.status,
        episodes: data?.episodes,
        source: data?.source,
        synopsis: data?.synopsis
    };

    return {
        props: {
            anime
        },
        revalidate: 5
    }
}

const Video = styled.div`
    margin-top: 30px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
`

const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 10px;

    div {
        width: 400px;
    }

    .image {
        box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
    }

    h1 {
        font-family: 'Jacques Francois', serif;
        font-size: 20px;
        margin-top: 20px;
    }

    h2 {
        font-family: 'Jacques Francois', serif;
        font-size: 16px;
        margin-top: 4px;
    }
`


const Info = styled.div`
    padding: 20px 0 10px 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    div {
        margin: 10px;
        width: 600px;
        @media(max-width: 1240px) {
            width: 500px;
        }
    }

    /* .image {
        box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
    } */

    h1 {
        font-family: 'Jacques Francois', serif;
        font-size: 20px;
    }

    h2 {
        font-family: 'Jacques Francois', serif;
        font-size: 16px;
        margin-top: 4px;
    }
    
`