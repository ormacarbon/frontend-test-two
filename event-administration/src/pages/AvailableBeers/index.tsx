import { HeaderComponent } from "../../components/Header";
import { BeerCardComponent } from "../../components/BeerCard";

import { BeersCard, Title, Pagination } from "./style";

import { useContext } from "react";

import { BeersContext } from "../../providers/beers";

export const AvailableBeersPageComponent = () => {
  const { beersPage, getBeers, page } = useContext(BeersContext);

  return (
    <>
      <HeaderComponent />
      <Title>
        <h2>Bebidas disponíveis</h2>
      </Title>
      <BeersCard>
        {beersPage.map((element) => {
          return (
            <BeerCardComponent
              key={element.id}
              image={element.image_url}
              name={element.name}
              tagline={element.tagline}
              abv={element.abv}
              ibu={element.ibu}
              beer={element}
            />
          );
        })}
      </BeersCard>
      <Pagination>
        <div>
          <button
            onClick={() => {
              getBeers(page - 1);
            }}
          >
            &lt;
          </button>
          <p>página atual</p>
          <button
            onClick={() => {
              getBeers(page + 1);
            }}
          >
            &gt;
          </button>
        </div>
      </Pagination>
    </>
  );
};
