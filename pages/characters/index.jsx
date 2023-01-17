import Cover from "../../components/Cover/Cover";
import Main from "../../components/Main/Main";

const Characters = (props) => {
  return (
    <>
      <Cover titleText="Characters" />
      <Main
        category="characters"
        title="Pick a character"
        items={props.characters}
        error={props.notFound}
      />
    </>
  );
};

export const getStaticProps = async () => {
  try {
    const characters = await fetch(
      "https://zelda.fanapis.com/api/characters?limit=50&page=0"
    )
      .then((res) => res.json())
      .then((res) => res.data);
    return {
      props: {
        characters: characters,
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

export default Characters;
