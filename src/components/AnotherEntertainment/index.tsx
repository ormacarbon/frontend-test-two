import { DataProps } from "../../pages/movies";

import Card from "../Card";

import { MainAnotherEntertainment, Cards } from "./styles";

interface EntertainmentProps {
  data: DataProps[];
  movieOrSerie: string;
}

export default function AnotherEntertainment({
  data,
  movieOrSerie,
}: EntertainmentProps) {
  const dataSliced = data.slice(0, 12);

  return (
    <MainAnotherEntertainment>
      <Cards>
        {dataSliced.length > 0 ? (
          dataSliced.map((item) => {
            // This condition is for identify if the API is 'serie' or movie'. Because the key changes
            let titleOrName = "";

            if (movieOrSerie === "serie") {
              const { name } = item;
              titleOrName = name;
            } else if (movieOrSerie === "movie") {
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
