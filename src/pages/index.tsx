import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Pokemon from "../components/Pokemon";

type PokemonList = {
  name: string;
  url: string;
};

export default function Home() {
  // It's better to use React Query than UseEffect for API calls
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
          data?.results?.map((pokemon: PokemonList) => {
            return <Pokemon key={pokemon.name} pokemonData={pokemon} />;
          })
        )}
      </ul>
    </>
  );
}
