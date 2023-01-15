import { MoviesContainer, SearchContainer, SkeletonContainer } from "../styles/pages/search";
import { MovieCard } from "../components/MovieCard";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { IMovie } from "../context/ContextAplicattion";
import { ProductSkeleton } from "../components/MovieSkeleton";
import { useState, useEffect } from "react";

interface MovieProps {
  movies: IMovie[];
}

export default function Search({ movies }: MovieProps){
  //Loading int the page skeleton effect
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() =>  setIsLoading(false),  2000);
    return () => clearTimeout(timeOut);
  }, [])
  
  return (
    <>
    <Head>
      <title>Next+</title>
    </Head>
    <SearchContainer>
    {isloading ? (
             <>
              <SkeletonContainer>
                <ProductSkeleton />
                <ProductSkeleton />
                <ProductSkeleton />
              </SkeletonContainer>
             </>
            ) : (
              <>
                <h1>Resultados da Pesquisa</h1>
                <MoviesContainer>
                  {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))}
                </MoviesContainer>
                </>
            )}
    </SearchContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const query = req.url.replace('/', '');
  const response = await fetch(`${process.env.SEARCH_URL}?${process.env.API_KEY}&${query}`);
  const data = await response.json();
  const movies = data.results.map((movie) => {
    return {
     id: movie.id,
     title: movie.title,
     votes: movie.vote_average,
     imageUrl: movie.poster_path,
    }
   });
  return {
    props: {
      movies
    }
  };
};