import PropTypes from 'prop-types';
import APIService from '../../services/APIService';

export default function Test({ standing }) {
  return (
    <table>
      <tr>
        <td>Posição</td>
        <td>Pontos</td>
        <td>Jogos</td>
        <td>Vitorias</td>
        <td>Empates</td>
        <td>Derrotas</td>
      </tr>
      {standing.standings.map((team) => (
        <tr>
          <td>{team.team.displayName}</td>
          <td>{team.stats[2].value}</td>
          <td>{team.stats[0].value}</td>
          <td>{team.stats[6].value}</td>
          <td>{team.stats[5].value}</td>
          <td>{team.stats[1].value}</td>
        </tr>
      ))}
    </table>

  );
}

Test.propTypes = {
  standing: PropTypes.shape().isRequired,
};

export async function getServerSideProps(context) {
  const standing = await APIService.listStadingsOfSeason(
    context.params.leagueId,
    context.params.season,
  );

  return {
    props: {
      standing: standing.data,
    },
  };
}
