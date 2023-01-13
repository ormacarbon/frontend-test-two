import Image from "next/image";
import Link from "next/link";
import { DivCard, ImageDiv, CharacterInfo, Info } from "../../styles/singeCharacter.style";

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
  console.log(character);

  return (
    <>
        <Link href={`/characters`}>voltar</Link>
      <DivCard>
        <ImageDiv>
          <h1>{character.name}</h1>
          <Image
            src={character.image}
            width={200}
            height={200}
            alt={character.name}
          />
        </ImageDiv>
        <CharacterInfo>
          <Info>
            <h4>Character Status: <span>{character.status}</span></h4>
          </Info>
          <Info>
            <h4>Character Location: <span>{character?.location?.name}</span></h4>
          </Info>
          <Info>
            <h4>Character Gender: <span>{character.gender}</span></h4>
          </Info>
          <Info>
            <h4>Character Origin: <span>{character?.origin?.name}</span></h4>
          </Info>
          <Info>
            <h4>Character Specie: <span>{character.species}</span></h4>
          </Info>
        </CharacterInfo>
      </DivCard>
    </>
  );
}
