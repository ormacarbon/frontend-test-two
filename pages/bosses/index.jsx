import Cover from "../../components/Cover/Cover";
import Main from "../../components/Main/Main";

const Bosses = (props) => {
  return (
    <>
      <Cover titleText="Bosses" />
      <Main
        category="bosses"
        title="Battle bosses"
        items={props.bosses}
        error={props.notFound}
      />
    </>
  );
};

export const getStaticProps = async () => {
  try {
    const bosses = await fetch(
      "https://zelda.fanapis.com/api/bosses?limit=50&page=0"
    )
      .then((res) => res.json())
      .then((res) => res.data);
    return {
      props: {
        bosses: bosses,
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

export default Bosses;
