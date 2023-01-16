import { CardBorn, CardCulture, CardName, CardTitles, CardContainer } from "./styles"

interface GotCardProps {
  name: string;
  born: string;
  titles: string[];
  culture: string;
}

export function GotCard({ name, born, titles, culture, }: GotCardProps) {
  return (
      <CardContainer>
        <div>
          <CardName>{name === '' ? 'Unknown Character' : name}</CardName>
          <CardTitles>{titles[0] === '' ? 'No titles' : titles[0]}</CardTitles>
        </div>
        <div>
          <CardBorn>Born at: {born === '' ? 'Unknown' : born}</CardBorn>
          <CardCulture>Culture: {culture === '' ? 'Unknown' : culture}</CardCulture>
        </div>
      </CardContainer>  
  )
}