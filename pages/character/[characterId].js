//? Components
import SingleCharacter from "../../components/SingleCharacter/SingleCharacter";
//? NEXT
import Head from "next/head";

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
      <Head>
        <title>Rick and Morty Universe - Character</title>
      </Head>
      {!character ? (
        <h3>Sorry mate, Try again Later</h3>
      ) : (
        <SingleCharacter character={character} />
      )}
    </>
  );
}
