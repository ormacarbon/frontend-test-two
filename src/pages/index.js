/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import { useContext } from 'react';
import Link from 'next/link';
import Carousel from 'react-elastic-carousel';
import { ThemeContext } from '../contexts/ThemeContext';
import APIService from '../services/APIService';
import { Main, Container } from '../assets/styles/HomeStyled';
import WellCome from '../components/Wellcome';
import useWidth from '../hooks/useWidth';

export default function Home({ leagues }) {
  const { currentTheme, theme } = useContext(ThemeContext);
  const width = useWidth();
  const calcToShow = () => {
    if (width > 1900) return 4.5;
    if (width > 1100) return 3.5;
    if (width > 500) return 2.5;
    return 1.5;
  };
  const itemsToShow = calcToShow();

  return (
    <Main theme={currentTheme}>
      <WellCome />
      <Container theme={currentTheme}>
        <Carousel
          isRTL
          itemsToScroll={2}
          itemsToShow={itemsToShow}
        >
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
