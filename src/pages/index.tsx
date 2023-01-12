import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import PokemonList from "../components/PokemonList";
import Image from "next/image";

type PokemonListType = {
  name: string;
  url: string;
};

export default function Home() {
  // It's better to use React Query than useEffect and useState for API calls
  const { data, isFetching } = useQuery("pokémon list", async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");

    return response.data;
  });

  const [grid, setGrid] = useState(false);

  return (
    <div>
      <button onClick={() => setGrid(!grid)}>Toggle View</button>
      {grid ? (
        <div>Hello World</div>
      ) : (
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
            data?.results?.map((pokemon: PokemonListType) => {
              return <PokemonList key={pokemon.name} pokemonData={pokemon} />;
            })
          )}
        </ul>
      )}
    </div>
  );
}
