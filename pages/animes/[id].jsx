import Image from 'next/image';

export default function Anime({ anime }) {
    return (
        <div>
            <Image loader={() => anime.image} unoptimized={true} src={anime.image} alt={anime.title} width={500} height={500} />
            <h1>{anime.title}</h1>
            {/* <h2>{anime.genres}</h2> */}
            <h2>{anime.synopsis}</h2>
            <h2>{anime.status}</h2>
            {/* <h2>{anime.studios}</h2> */}
            <h2>{anime.duration}</h2>
            <h2>{anime.episodes}</h2>
            <h2>{anime.source}</h2>
            <h2>{anime.rating}</h2>
            <h2>{anime.title_japanese}</h2>
        </div>
    )
}

export const getStaticPaths = async () => {
    const response = await fetch(`https://api.jikan.moe/v4/anime`);
    const { data } = await response.json();
    const paths = data.map(anime => {
        return { params: { id: anime.mal_id.toString() } }
    });



    return {
        paths,
        fallback: false,
    }

}

export const getStaticProps = async (context) => {
    const { id } = context.params;
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
    const { data } = await response.json();
    console.log(data);

    // const arrayGenres = data.genres.map((genre) => {
    //     return genre.name;
    // });
    // const arrayStudios = data.studios.map(studio => {
    //     return studio.name;
    // });
    // const studios = arrayStudios.join(",");
    // const genres = arrayGenres.join(",");


    const anime = {
        image: data.images.jpg.image_url,
        title: data.title,
        duration: data.duration,
        score: data.score,
        rating: data.rating,
        trailer: data.trailer.url,
        image_trailer: data.trailer.images.image_url,
        title_japanese: data.title_japanese,
        // genres: genres,
        // studios: studios,
        status: data.status,
        episodes: data.episodes,
        source: data.source,
        synopsis: data.synopsis
    };

    return {
        props: {
            anime
        }
    }
}