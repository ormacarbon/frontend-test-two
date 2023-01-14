import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Image from "next/image";
import Link from "next/link";
import {
  GridComponentImage,
  GridComponentName,
  GridComponentWrapper,
  GridComponentWrapperInner,
  GridComponentXP,
} from "./styles";

export default function PokemonGrid({ pokemonData }) {
  // It's better to use React Query than useEffect and useState for API calls
  const { data } = useQuery(`pokémon data ${pokemonData.name}`, async () => {
    const response = await axios.get(pokemonData.url);

    return response.data;
  });

  return (
    data && (
      <GridComponentWrapper href={"pokemon/" + data.id}>
        <GridComponentWrapperInner>
          <GridComponentImage
            src={data.sprites.front_default}
            width={200}
            height={200}
            alt={data.name + "icon"}
          />
          <span>
            <GridComponentName>
              {data.name}
              <GridComponentXP>{data.base_experience}XP</GridComponentXP>
            </GridComponentName>
          </span>
        </GridComponentWrapperInner>
      </GridComponentWrapper>
    )
  );
}
