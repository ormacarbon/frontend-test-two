import MoviesList from '../components/movies-list';

export default function InTheater() {

  return (
    <MoviesList pageTitle={'Now playing'} urlPrefix={'now_playing'} />
  )
}