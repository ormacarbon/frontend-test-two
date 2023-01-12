import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import PokemonList from "../components/PokemonList";
import PokemonGrid from "../components/PokemonGrid";
import Image from "next/image";
import { BsListUl, BsGrid3X3 } from "react-icons/bs";

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

  const [grid, setGrid] = useState(true);

  return (
    <div className="bg-gray-200 w-screen min-h-screen -mb-6">
      <div className="flex justify-around pt-2">
        <div></div>
        {grid ? (
          <button
            onClick={() => setGrid(!grid)}
            className="bg-gray-500 hover:bg-gray-600 active:bg-gray-700 py-3 px-5 text-white font-semibold rounded-lg transition-all duration-250 ease-in"
          >
            <BsListUl />
          </button>
        ) : (
          <button
            onClick={() => setGrid(!grid)}
            className="bg-gray-500 hover:bg-gray-600 active:bg-gray-700 py-3 px-5 text-white font-semibold rounded-lg transition-all duration-250 ease-in"
          >
            <BsGrid3X3 />
          </button>
        )}
      </div>
      {grid ? (
        <div className="mt-3">
          {isFetching ? (
            <Image
              src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
              alt="loading pokémon list"
              width={100}
              height={100}
              className="flex mx-auto my-[25vh]"
            />
          ) : (
            <div className="flex">
              <div className="mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:px-[10vw] xl:px-0 max-w-screen-xl">
                {data?.results?.map((pokemon: PokemonListType) => {
                  return (
                    <PokemonGrid key={pokemon.name} pokemonData={pokemon} />
                  );
                })}
              </div>
            </div>
          )}
        </div>
      ) : (
        <ul className="mt-1">
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
