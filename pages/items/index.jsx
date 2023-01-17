import Cover from "../../components/Cover/Cover";
import Main from "../../components/Main/Main";

const Items = (props) => {
  return (
    <>
      <Cover titleText="Items" />
      <Main
        category="items"
        title="Claim your item"
        items={props.items}
        error={props.notFound}
      />
    </>
  );
};

export const getStaticProps = async () => {
  try {
    const items = await fetch(
      "https://zelda.fanapis.com/api/items?limit=50&page=0"
    )
      .then((res) => res.json())
      .then((res) => res.data);
    return {
      props: {
        items: items,
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

export default Items;
