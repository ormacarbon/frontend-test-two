import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Image from "next/image";
import Link from "next/link";

export default function PokemonGrid({ pokemonData }) {
  // It's better to use React Query than useEffect and useState for API calls
  const { data } = useQuery(`pokémon data ${pokemonData.name}`, async () => {
    const response = await axios.get(pokemonData.url);

    return response.data;
  });

  return (
    data && (
      <Link
        href={"pokemon/" + data.id}
        className="flex px-10 bg-white dark:bg-gray-700 dark:hover:bg-gray-600 shadow-lg rounded-xl transition-all duration-250 ease-in"
      >
        <div className="mx-auto rounded-md w-full md:w-96 my-2">
          <Image
            src={data.sprites.front_default}
            width={200}
            height={200}
            alt={data.name + "icon"}
            className="w-[200px] h-[200px] object-contain"
          />
          <div className="flex">
            <p className="mx-auto capitalize dark:text-gray-200">
              {data.name}
              <span className="font-bold ml-1">{data.base_experience}XP</span>
            </p>
          </div>
        </div>
      </Link>
    )
  );
}
