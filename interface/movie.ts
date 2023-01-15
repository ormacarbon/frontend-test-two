export interface IMovie {
  id?: number;
  adult?: boolean;
  name?: string;
  budget?: number;
  imdb_id?: string;
  genres?: IMovieGenre[];
  title?: string;
  backdrop_path?: string;
  original_title?: string;
  release_date?: string;
  runtime?: number;
  poster_path?: string;
  vote_average?: number;
  overview?: string;
  tagline?: string;
}

interface IMovieGenre {
  id?: number;
  name?: string;
}

