import PropTypes from 'prop-types';
import { useContext } from 'react';
import Link from 'next/link';
import Carousel from 'react-elastic-carousel';
import { ThemeContext } from '../contexts/ThemeContext';
import APIService from '../services/APIService';
import { Main, Container } from '../components/HomeStyled';

export default function Home({ leagues }) {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <Main theme={currentTheme}>
      <h1>Ligas Profissionais</h1>

      <Container theme={currentTheme}>
        <Carousel itemsToScroll={2} itemsToShow={4}>
          {leagues.data.map((league) => (
            <Link
              href={`/${league.id}`}
              theme={currentTheme}
              key={league.id}
            >
              <img
                src={league.logos.light}
                alt="logo-league"
              />
              {league.name}
            </Link>
          ))}
        </Carousel>
      </Container>
    </Main>
  );
}

Home.propTypes = {
  leagues: PropTypes.shape().isRequired,
};

export async function getStaticProps() {
  const json = await APIService.listLeagues();

  return {
    props: {
      leagues: json,
    },
  };
}
