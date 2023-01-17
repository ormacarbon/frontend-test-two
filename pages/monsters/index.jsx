import Cover from "../../components/Cover/Cover";
import Main from "../../components/Main/Main";

const Monsters = (props) => {
  return (
    <>
      <Cover titleText="Monsters" />
      <Main
        category="monsters"
        title="Choose a monster"
        items={props.monsters}
        error={props.notFound}
      />
    </>
  );
};

export const getStaticProps = async () => {
  try {
    const monsters = await fetch(
      "https://zelda.fanapis.com/api/monsters?limit=50&page=0"
    )
      .then((res) => res.json())
      .then((res) => res.data);
    return {
      props: {
        monsters: monsters,
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

export default Monsters;
