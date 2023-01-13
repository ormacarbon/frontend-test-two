import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import APIService from '../../services/APIService';
import { Section } from './styles';

export default function LeagueDetails({ detailsLeagueSelected, seasonsLeague }) {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <Section theme={currentTheme}>
      <div className="c-1">
        <img
          src={detailsLeagueSelected.logos.light}
          alt={detailsLeagueSelected.name}
          width={150}
        />
        <h3>{detailsLeagueSelected.name}</h3>
      </div>
      <div className="c-2">
        <ul>
          {seasonsLeague.map((season) => (
            <li>{season.year}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

LeagueDetails.propTypes = {
  detailsLeagueSelected: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logos: PropTypes.shape().isRequired,
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
      seasonsLeague: seasonsLeague.data.seasons,
    },
  };
}
