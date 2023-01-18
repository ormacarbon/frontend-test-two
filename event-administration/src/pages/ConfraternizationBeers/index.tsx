import { Container, BeersCard, Title } from "./style";
import { HeaderComponent } from "../../components/Header";

import { BeerEventCardComponent } from "../../components/BeerEventCard";

import { useContext } from "react";
import { EventsContext } from "../../providers/eventscenter";

export const ConfraterzinationBeersPageComponent = () => {
  const { confraternizationBeers } = useContext(EventsContext);

  return (
    <>
      <HeaderComponent />
      <Container>
        <Title>
          <h2>Cervejas selecionadas para confraternização</h2>
        </Title>
        <BeersCard>
          {confraternizationBeers.map((element) => {
            return (
              <BeerEventCardComponent
                key={element.id}
                image={element.image_url}
                name={element.name}
                tagline={element.tagline}
                abv={element.abv}
                ibu={element.ibu}
                beer={element}
                event={"confraternization"}
              />
            );
          })}
        </BeersCard>
      </Container>
    </>
  );
};
