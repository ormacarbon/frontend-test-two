import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Image from "next/image";
import Link from "next/link";

export default function Pokemon({ pokemonData }) {
  // It's better to use React Query than useEffect and useState for API calls
  const { data } = useQuery(`pokémon data ${pokemonData.name}`, async () => {
    const response = await axios.get(pokemonData.url);

    return response.data;
  });

  return (
    data && (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image
          src={data.sprites.front_default}
          style={{ marginRight: 20 }}
          width={40}
          height={40}
          alt={data.name + "icon"}
        />
        <Link href={"pokemon/" + data.id}>
          <b>{data.name}</b> - EXP {data.base_experience}
        </Link>
      </div>
    )
  );
}
