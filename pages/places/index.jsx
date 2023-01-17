import Cover from "../../components/Cover/Cover";
import Main from "../../components/Main/Main";

const Places = (props) => {
  return (
    <>
      <Cover titleText="Places" />
      <Main
        category="places"
        title="Select a place"
        items={props.places}
        error={props.notFound}
      />
    </>
  );
};

export const getStaticProps = async () => {
  try {
    const places = await fetch(
      "https://zelda.fanapis.com/api/places?limit=50&page=0"
    )
      .then((res) => res.json())
      .then((res) => res.data);
    return {
      props: {
        places: places,
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

export default Places;
