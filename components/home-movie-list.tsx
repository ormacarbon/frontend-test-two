import Link from 'next/link';
import MovieCard from '../components/movie-card';
import { HomeMovieListContainer, HomeMovieListDetail, HomeMovieListTitle } from '../styles/home';
import { MovieList } from '../styles/popular';

export default function HomeMovieList(props) {

  const { movieList, title, route } = props;

  return (
    <HomeMovieListContainer>
      <HomeMovieListTitle>{title}</HomeMovieListTitle>
      <MovieList>
        {movieList.slice(0, 5).map((movie, index) => (
          <MovieCard key={index} movieProps={movie} />
        ))}
      </MovieList>
      <Link href={route} >
        <HomeMovieListDetail >See more ➡️</HomeMovieListDetail>
      </Link>
    </HomeMovieListContainer>
  )
}
