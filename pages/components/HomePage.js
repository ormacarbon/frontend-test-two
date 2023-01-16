
// import Image from 'next/image';
// import { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import MovieCard from './MovieCard';

// const moviesURL = process.env.NEXT_PUBLIC_API;
// const apiKey = process.env.NEXT_PUBLIC_API_KEY;

// const imageUrl = process.env.NEXT_PUBLIC_IMG

// export default function HomePage() {
//   const imagePath = 'https://image.tmdb.org/t/p/w500';
//   const [topMovies, setTopMoveis] = useState([]);

//   const getTopRatedMoveis = async (url) => {
//     const res = await fetch(url);
//     const data = await res.json();
//     setTopMoveis(data.results);
//     console.log(data)
//   };

//   useEffect(() => {
//     const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
//     getTopRatedMoveis(topRatedUrl);
//   }, []);
//   return <div>
//     <h2>Best movies:</h2>
//    <div>
//     {topMovies.length === 0 && <p>Carregando...</p>}
//    {topMovies.length > 0 && topMovies.map((movie) => 
//     <div key={movie.id}>
//     <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={400} height={400} alt={movie.title}/>
//     <p>{movie.title}</p>
//     <p>{movie.overview}</p>
    
//    </div> 
//   )}
//    </div>
//   </div>;
// }