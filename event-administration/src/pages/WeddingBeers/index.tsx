import { BeersCard, Title } from "./style";
import { HeaderComponent } from "../../components/Header";
import { BeerEventCardComponent } from "../../components/BeerEventCard";

import { useContext } from "react";
import { EventsContext } from "../../providers/eventscenter";

export const WeddingBeersPageComponent = () => {
  const { weddingBeers } = useContext(EventsContext);

  return (
    <>
      <HeaderComponent />
      <Title>
        <h2>Cervejas selecionadas para casamento</h2>
      </Title>
      <BeersCard>
        {weddingBeers.map((element) => {
          return (
            <BeerEventCardComponent
              key={element.id}
              image={element.image_url}
              name={element.name}
              tagline={element.tagline}
              abv={element.abv}
              ibu={element.ibu}
              beer={element}
              event={"wedding"}
            />
          );
        })}
      </BeersCard>
    </>
  );
};
