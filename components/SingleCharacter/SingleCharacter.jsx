//? Next Dependences
import Image from "next/image";
import Link from "next/link";
//? Styled Components
import {
  DivCard,
  NameDiv,
  CharacterInfo,
  InfoContainer,
  Info,
  Title,
  StatusBadge,
  InfoResult,
} from "./singeCharacter";

export default function SingleCharacter({ character }) {


  return (
    <DivCard>
      <NameDiv>
        <h1>{character.name}</h1>
      </NameDiv>
      <CharacterInfo>
        <Image
          src={character.image}
          width={250}
          height={250}
          alt='Character name'
        />
        <InfoContainer>
          <Info>
            <Title>
              Character Name: <InfoResult>{character.name}</InfoResult>
            </Title>
          </Info>

          <Info>
            <Title>
              Character Status:{" "}
              <StatusBadge status={character.status}>
                {character.status}
              </StatusBadge>
            </Title>
          </Info>
          <Info>
            <Title>
              Character Location:{" "}
              <InfoResult>{character?.location?.name}</InfoResult>
            </Title>
          </Info>
          <Info>
            <Title>
              Character Gender: <InfoResult>{character.gender}</InfoResult>
            </Title>
          </Info>
          <Info>
            <Title>
              Character Origin:{" "}
              <InfoResult>{character?.origin?.name}</InfoResult>
            </Title>
          </Info>
          <Info>
            <Title>
              Character Specie: <InfoResult>{character.species}</InfoResult>
            </Title>
          </Info>
        </InfoContainer>
      </CharacterInfo>
      <Link href={`/characters`}>Return</Link> 
    </DivCard>
  );
}
