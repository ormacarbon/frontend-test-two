import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Image from "next/image";

export default function Pokemon({ pokemonData }) {
  const { data, isFetching } = useQuery(
    `pokémon data ${pokemonData.name}`,
    async () => {
      const response = await axios.get(pokemonData.url);

      return response.data;
    }
  );

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
        <span>
          <b>{data.name}</b> - EXP {data.base_experience}
        </span>
      </div>
    )
  );
}
