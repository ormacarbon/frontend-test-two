import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Image from "next/image";
import Link from "next/link";
import {
  ListComponentImage,
  ListComponentName,
  ListComponentWrapper,
  ListComponentWrapperInner,
  ListComponentWrapperInnerInner,
  ListComponentXP,
} from "./styles";

export default function PokemonList({ pokemonData }) {
  // It's better to use React Query than useEffect and useState for API calls
  const { data } = useQuery(`pokémon data ${pokemonData.name}`, async () => {
    const response = await axios.get(pokemonData.url);

    return response.data;
  });

  return (
    data && (
      <ListComponentWrapper href={"pokemon/" + data.id}>
        <ListComponentWrapperInner>
          <ListComponentWrapperInnerInner>
            <ListComponentImage
              src={data.sprites.front_default}
              width={40}
              height={40}
              alt={data.name + "icon"}
            />
            <ListComponentName>
              {data.name}
              <ListComponentXP>{data.base_experience}XP</ListComponentXP>
            </ListComponentName>
          </ListComponentWrapperInnerInner>
        </ListComponentWrapperInner>
      </ListComponentWrapper>
    )
  );
}
