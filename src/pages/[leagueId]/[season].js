import PropTypes from 'prop-types';
import APIService from '../../services/APIService';

export default function Test({ standing }) {
  console.log(standing);
  return (

    <>
      <h1>
        {standing.name}
      </h1>
      <div>
        {standing.standings.map((item) => <p>{item.team.displayName}</p>)}
      </div>
    </>

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
