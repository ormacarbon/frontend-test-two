import { BeerCard, BackGroundImage } from "./style";

import { useState } from "react";

import { EventChoiceModal } from "../Modal";

interface BerrCardComponentProps {
  image: string | null;
  name: string;
  tagline: string;
  abv: number;
  ibu: number;
  beer: Beers;
}

interface Beers {
  id: number;
  name: string;
  tagline: string;
  image_url: string | null;
  abv: number;
  ibu: number;
}

export const BeerCardComponent = ({
  image,
  name,
  tagline,
  abv,
  ibu,
  beer,
}: BerrCardComponentProps) => {
  const [modalChoice, setModalChoice] = useState(false);

  return (
    <BeerCard>
      <BackGroundImage image={image} />
      <p>Nome: {name}</p>
      <p>Slogan: {tagline}</p>
      <p>ABV: {abv}%</p>
      <p>IBU: {ibu}</p>
      <button onClick={() => setModalChoice(true)}>Adicionar</button>
      {modalChoice ? (
        <EventChoiceModal setModalChoice={setModalChoice} beer={beer} />
      ) : null}
    </BeerCard>
  );
};
