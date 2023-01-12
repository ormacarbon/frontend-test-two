/* eslint-disable @next/next/no-img-element */
import TMDB from '../../../services/tmdb';

export const getServerSideProps = async (context) => {
  const { query } = context;
  console.log(query);

  const movieInformations = await TMDB.getMovieInfo(query.id, query.slug);

  return {
    props: {
      movieInformations
    }
  };
};

const TrendingsFilmId = ({ movieInformations }) => {
  console.log(movieInformations);

  return (
    <div
      style={{
        backgroundImage: `url(${TMDB.getImage(movieInformations.backdrop_path)})`,
        backgroundSize: 'cover',
        height: '100vh'
      }}
    >
      <div style={{ paddingTop: '5rem', color: 'black' }}>
        <span>Generos</span>
        {movieInformations.genres.map((genre, index) => (
          <span key={index}>{genre.name}</span>
        ))}
      </div>

      <div style={{ color: 'black' }}>
        <span>Descrição</span>
        <span>{movieInformations.overview}</span>
      </div>

      <div style={{ color: 'black' }}>
        <span>Produzido por</span>
        {movieInformations.production_companies.map((company, index) => (
          <>
            <span key={index}>{company.name}</span>
            <img
              src={TMDB.getImage(company.logo_path)}
              alt={company.name}
              style={{ width: '100%', maxWidth: '10rem', height: 'auto' }}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default TrendingsFilmId;
