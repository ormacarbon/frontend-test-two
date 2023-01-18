import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import APIService from '../../services/APIService';
import { Section, ContainerLogoLeague, ContainerSeasons } from '../../assets/styles/LeagueStyled';

export default function LeagueDetails({ detailsLeagueSelected, seasonsLeague }) {
  const { currentTheme, theme } = useContext(ThemeContext);
  const { asPath } = useRouter();
  const logoDark = detailsLeagueSelected.logos.dark.replace(/["]/g, '');
  const logoLight = detailsLeagueSelected.logos.light;

  const setLogo = (
    theme === 'dark'
      ? logoDark
      : logoLight);

  return (
    <Section theme={currentTheme}>
      <ContainerLogoLeague>
        <img
          src={setLogo}
          alt={detailsLeagueSelected.name}
        />
        <h2>{detailsLeagueSelected.name}</h2>
      </ContainerLogoLeague>
      <ContainerSeasons theme={currentTheme}>
        <strong>Seasons</strong>
        <ul>
          {seasonsLeague.map((season) => (
            <Link key={season.year} href={`${asPath}/${season.year}`}>
              <li>{season.year}</li>
            </Link>
          ))}
        </ul>
      </ContainerSeasons>
    </Section>
  );
}

LeagueDetails.propTypes = {
  detailsLeagueSelected: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logos: PropTypes.shape({
      light: PropTypes.string.isRequired,
      dark: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  seasonsLeague: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export async function getServerSideProps(context) {
  const detailsLeague = await APIService.listDetailsLeagueSelected(
    context.params.leagueId,
  );

  const seasonsLeague = await APIService.listSeasonsLeagueSelected(
    context.params.leagueId,
  );

  return {
    props: {
      detailsLeagueSelected: detailsLeague.data,
      seasonsLeague: seasonsLeague.data.seasons || {},
      leagueId: context.params.leagueId,
    },
  };
}
