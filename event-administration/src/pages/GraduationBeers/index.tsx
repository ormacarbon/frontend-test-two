import { Container, BeersCard, Title } from "./style";
import { BeerEventCardComponent } from "../../components/BeerEventCard";
import { HeaderComponent } from "../../components/Header";

import { useContext } from "react";
import { EventsContext } from "../../providers/eventscenter";

export const GraduationBeersPageComponent = () => {
  const { graduationBeers } = useContext(EventsContext);

  return (
    <>
      <HeaderComponent />
      <Title>
        <h2>Cervejas selecionadas para formatura</h2>
      </Title>
      <Container>
        <BeersCard>
          {graduationBeers.map((element) => {
            return (
              <BeerEventCardComponent
                key={element.id}
                image={element.image_url}
                name={element.name}
                tagline={element.tagline}
                abv={element.abv}
                ibu={element.ibu}
                beer={element}
                event={"graduation"}
              />
            );
          })}
        </BeersCard>
      </Container>
    </>
  );
};
