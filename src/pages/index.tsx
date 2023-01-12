import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Pokemon from "../components/Pokemon";
import Image from "next/image";

type PokemonList = {
  name: string;
  url: string;
};

export default function Home() {
  // It's better to use React Query than useEffect and useState for API calls
  const { data, isFetching } = useQuery("pokémon list", async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");

    return response.data;
  });

  return (
    <>
      <ul className="mt-3">
        {isFetching ? (
          <Image
            src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
            alt="loading pokémon list"
            width={100}
            height={100}
            className="flex mx-auto my-[25vh]"
          />
        ) : (
          data?.results?.map((pokemon: PokemonList) => {
            return <Pokemon key={pokemon.name} pokemonData={pokemon} />;
          })
        )}
      </ul>
    </>
  );
}
