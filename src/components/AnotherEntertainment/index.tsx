import Link from "next/link";
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

            // eslint-disable-next-line camelcase
            const { poster_path, vote_average, overview } = item;

            // eslint-disable-next-line camelcase
            const newItem = { poster_path, vote_average, overview };

            return (
              <Link
                key={item.id}
                href={`/info/${
                  item.id
                }/${type}/${titleOrName}?data=${JSON.stringify(newItem)}`}
              >
                <Card
                  poster={item.poster_path}
                  title={titleOrName}
                  vote={item.vote_average}
                />
              </Link>
            );
          })
        ) : (
          <p>loading...</p>
        )}
      </Cards>
    </MainAnotherEntertainment>
  );
}
