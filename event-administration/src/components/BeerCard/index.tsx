import { BeerCard, BackGroundImage } from "./style";

interface BerrCardComponentProps {
  image: string | null;
  name: string;
  tagline: string;
  abv: number;
  ibu: number;
}

export const BeerCardComponent = ({
  image,
  name,
  tagline,
  abv,
  ibu,
}: BerrCardComponentProps) => {
  return (
    <BeerCard>
      <BackGroundImage image={image} />
      <p>Nome: {name}</p>
      <p>Slogan: {tagline}</p>
      <p>ABV: {abv}%</p>
      <p>IBU: {ibu}</p>
      <button>Adicionar</button>
    </BeerCard>
  );
};
