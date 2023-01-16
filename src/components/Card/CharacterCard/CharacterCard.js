import { useRouter } from "next/router";
import React from "react";
import { status } from "../../../functions/status";
import {
  ButtonDetails,
  ContainerCard,
  ContainerInfo,
  ImgCh,
  NameCh,
} from "./characterStyle";

const CharacterCard = (props) => {
  const { character } = props;
  const router = useRouter();

  return (
    <ContainerCard>
      <ContainerInfo>
        <NameCh>{character.name}</NameCh>
        <p>{status(character.status)}</p>
        <ButtonDetails onClick={() => router.push(`/character-details/${character.id}`)}>
          Details
        </ButtonDetails>
      </ContainerInfo>
      <ImgCh src={character.image} alt="character image"/>
    </ContainerCard>
  );
};

export default CharacterCard;
