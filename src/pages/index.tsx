import axios from "axios";
import { useQuery } from "react-query";

export default function Home() {
  const { data, isFetching } = useQuery("pokémon list", async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");

    return response.data;
  });

  return (
    <>
      <ul>
        {isFetching ? (
          <p>Loading...</p>
        ) : (
          data?.results?.map((pokemon) => {
            return (
              <li key={pokemon.name}>
                <strong>{pokemon.name}</strong>
              </li>
            );
          })
        )}
      </ul>
    </>
  );
}
