import { useContext } from "react";
import { DataContext, DataProps } from "../../pages/content/[type]";

import Card from "../Card";

import { MainAnotherEntertainment, Cards } from "./styles";

export default function AnotherEntertainment() {
  const { data, type } = useContext(DataContext);

  return (
    <MainAnotherEntertainment>
      <Cards>
        {data.length > 0 ? (
          data.map((item) => {
            // This condition is for identify if the API is 'serie' or movie'. Because the key changes
            let titleOrName = "";

            if (type === "tv") {
              const { name } = item;
              titleOrName = name;
            } else if (type === "movie") {
              const { title } = item;
              titleOrName = title;
            }

            return (
              <Card
                key={item.id}
                poster={item.poster_path}
                title={titleOrName}
                vote={item.vote_average}
              />
            );
          })
        ) : (
          <p>carregando</p>
        )}
      </Cards>
    </MainAnotherEntertainment>
  );
}
