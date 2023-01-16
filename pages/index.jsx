import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { Main } from '../components/Main';


export default function Home({ animes }) {

  return (
    <>
      <Main justifyContent='center'>
        {animes.map((anime) => {
          return (
            <>
              <Link style={{ textDecoration: 'none', color: 'inherit' }} href={`/animes/${encodeURIComponent(anime.id)}`}>
                <ContainerAnime key={anime.title + anime.mal_id}>
                  <Image loader={() => anime.image} unoptimized={true} src={anime.image} alt={anime.title} width={200} height={200} />
                  <h1>{anime.title}</h1>
                  <h2>Rating: {anime.rating}</h2>
                  <h2>Duration: {anime.duration}</h2>
                  <h2>Score: {anime.score}</h2>
                </ContainerAnime>
              </Link>
            </>
          )
        })}
      </Main>
    </>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch(`https://api.jikan.moe/v4/anime`);
  const { data } = await response.json();
  const animes = data.map((item) => {
    const obj = {
      image: item.images.jpg.image_url,
      title: item.title,
      duration: item.duration,
      score: item.score,
      rating: item.rating,
      id: item.mal_id
    }
    return obj;
  });

  return {
    props: {
      animes: animes
    }
  }
}

const ContainerAnime = styled.div`
  width: 200px;
  box-sizing: content-box;
  margin-bottom: 20px;
  padding: 10px;
  cursor: pointer;
  img {
    margin-bottom: 10px;
    width: 200px;
    height: 200px;
  }

  &:hover {
    top:-4px;
    box-shadow:1px 1px 4px 4px #999;
    transition: all .2s ease-in-out;
  }

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
