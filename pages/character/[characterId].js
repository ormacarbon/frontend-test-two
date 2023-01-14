//? Components
import SingleCharacter from "../../components/SingleCharacter/SingleCharacter";

export const getStaticPaths = async () => {
  const api = "https://rickandmortyapi.com/api/character/";

  const res = await fetch(`${api}`);
  const data = await res.json();

  // params
  const paths = data.results.map((character, index) => {
    return {
      params: { characterId: character.id.toString() },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.characterId;

  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

  const data = await res.json();

  return {
    props: { character: data },
  };
};

export default function Character({ character }) {

  return (
    <>
      <SingleCharacter character={character} />
      
    </>
  );
}
