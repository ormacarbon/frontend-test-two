/* eslint-disable max-len */
import PropTypes from 'prop-types';
import { useContext } from 'react';
import Link from 'next/link';
import Carousel from 'react-elastic-carousel';
import { ThemeContext } from '../contexts/ThemeContext';
import APIService from '../services/APIService';
import { Main, Container } from '../components/HomeStyled';
import WellCome from '../components/Wellcome';

export default function Home({ leagues }) {
  const { currentTheme, theme } = useContext(ThemeContext);

  return (
    <Main theme={currentTheme}>
      <WellCome />
      <Container theme={currentTheme}>
        <Carousel itemsToScroll={2} itemsToShow={3.5}>
          {leagues.data.map((league) => {
            const logoDark = league.logos.dark.replace(/["]/g, '');
            const logoLight = league.logos.light;
            const setLogoLeague = theme === 'dark' ? logoDark : logoLight;

            return (
              <Link href={`/${league.id}`} key={league.id}>
                <img src={setLogoLeague} alt="logo-league" />
                <p>{league.name}</p>
              </Link>
            );
          })}
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
