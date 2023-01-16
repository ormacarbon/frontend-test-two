import { BeerEventCard, BackGroundImageEvent } from "./style";

import { useContext } from "react";
import { EventsContext } from "../../providers/eventscenter";

interface BerrCardComponentProps {
  image: string | null;
  name: string;
  tagline: string;
  abv: number;
  ibu: number;
  beer: Beers;
  event: string;
}

interface Beers {
  id: number;
  name: string;
  tagline: string;
  image_url: string | null;
  abv: number;
  ibu: number;
}

export const BeerEventCardComponent = ({
  image,
  name,
  tagline,
  abv,
  ibu,
  beer,
  event,
}: BerrCardComponentProps) => {
  const { removeBeer } = useContext(EventsContext);

  return (
    <BeerEventCard>
      <BackGroundImageEvent image={image} />
      <p className="slogan">Nome: {name}</p>
      <p className="slogan">Slogan: {tagline}</p>
      <p>ABV: {abv}%</p>
      <p>IBU: {ibu}</p>
      <button onClick={() => removeBeer(event, beer)}>Remover</button>
    </BeerEventCard>
  );
};
