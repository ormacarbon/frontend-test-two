import Cover from "../../components/Cover/Cover";
import Main from "../../components/Main/Main";

const Games = (props) => {
  return (
    <>
      <Cover titleText="Games" />
      <Main
        category="games"
        title="Enjoy a game"
        items={props.games}
        error={props.notFound}
      />
    </>
  );
};

export const getStaticProps = async () => {
  try {
    const games = await fetch(
      "https://zelda.fanapis.com/api/games?limit=50&page=0"
    )
      .then((res) => res.json())
      .then((res) => res.data);
    return {
      props: {
        games: games,
      },
      revalidate: 86400,
    };
  } catch (err) {
    return {
      props: {
        notFound: true,
      },
    };
  }
};

export default Games;
