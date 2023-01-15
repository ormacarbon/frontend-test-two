import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaStar } from "react-icons/fa";
import { MovieBlock, MovieConteiner, MovieContent, MovieSkeletonContainer, SkeletonItem } from '../../styles/pages/movie';
import { IMovie } from '../../context/ContextAplicattion';
import { ComponentProps } from "react";

interface MovieProps {
  movie: IMovie,
  props: ComponentProps<typeof MovieSkeletonContainer>
}



export default function Product({ movie, props }: MovieProps) {
  // Link that must be passed to be able to visualize the image coming from the api
  const link= 'https://image.tmdb.org/t/p/w500/';

  // Next Function so that while the api is note loaded, something appears on the screen
  const { isFallback } = useRouter();
  if (isFallback) {
    return (
      <MovieSkeletonContainer {...props}>
        <SkeletonItem />
        <div>
          <SkeletonItem />
        </div>
    </MovieSkeletonContainer>
    )
  }

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return(
    <>
    <Head>
      <title>Next+</title>
    </Head>
    <MovieConteiner>
            <Image src={ link + movie.backdrop_path} width={200} height={150} alt={movie.title} />
            <MovieContent>
              <h1>{movie.title}</h1>
              <p>{movie.tagline}</p>
              {movie.overview ? <p>{movie.overview}</p> : <p>Não contém descrição :(</p>}
              {movie.release_date ? <MovieBlock>
                <strong>Data de Lançamento:</strong>
                <span>{movie.release_date}</span>
              </MovieBlock> : 
              <></>}
              <MovieBlock>
                <FaStar size={24} />
                <span>{movie.vote_average}</span>
              </MovieBlock>
              {movie.revenue ? 
              <MovieBlock>
                <strong>Faturamento:</strong>
                <span>{formatCurrency(movie.revenue)}</span>
              </MovieBlock>
              : <></>}
              {movie.homepage ? <a href={movie.homepage}>Visitar Página</a> : <></>}
            </MovieContent>
    </MovieConteiner>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: '389' } }
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({ params }) => {
  const movieId = params.id;
  if(!movieId){
    return {
      redirect: {
        destination: "/",
        permanent: false,
      }
    }
  }
  const response = await fetch(`${process.env.BASE_URL}${movieId}?${process.env.API_KEY}`);
  const movie = await response.json();
  return {
    props: {
      movie
    },
    revalidate: 60 * 60 * 1
  };
};

