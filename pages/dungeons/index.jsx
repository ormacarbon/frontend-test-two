import Cover from "../../components/Cover/Cover";
import Main from "../../components/Main/Main";

const Dungeons = (props) => {
  return (
    <>
      <Cover titleText="Dungeons" />
      <Main
        category="dungeons"
        title="Explore a dungeon"
        items={props.dungeons}
        error={props.notFound}
      />
    </>
  );
};

export const getStaticProps = async () => {
  try {
    const dungeons = await fetch(
      "https://zelda.fanapis.com/api/dungeons?limit=50&page=0"
    )
      .then((res) => res.json())
      .then((res) => res.data);
    return {
      props: {
        dungeons: dungeons,
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

export default Dungeons;
