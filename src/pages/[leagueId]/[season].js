import PropTypes from 'prop-types';
import APIService from '../../services/APIService';
import { Section } from '../../assets/styles/LeagueStyled';
import { TableStyled } from '../../assets/styles/SeasonsStyled';

export default function SeasonStading({ standings }) {
  return (
    <Section style={{ flexDirection: 'column' }}>
      <TableStyled>
        <tr className="statistics">
          <td>Classificação</td>
          <td>Pontos</td>
          <td>Jogos</td>
          <td>Vitorias</td>
          <td>Empates</td>
          <td>Derrotas</td>
        </tr>
        {standings.standings.map((team) => (
          <tr className="teams">
            <td>{team.team.displayName}</td>
            <td>{team.stats[2].value}</td>
            <td>{team.stats[0].value}</td>
            <td>{team.stats[6].value}</td>
            <td>{team.stats[5].value}</td>
            <td>{team.stats[1].value}</td>
          </tr>
        ))}
      </TableStyled>
    </Section>
  );
}

SeasonStading.propTypes = {
  standings: PropTypes.shape().isRequired,
};

export async function getServerSideProps(context) {
  const standing = await APIService.listStadingsOfSeason(
    context.params.leagueId,
    context.params.season,
  );

  return {
    props: {
      standings: standing.data,
    },
  };
}
