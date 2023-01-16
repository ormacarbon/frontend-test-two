import Image from "next/image";
import { api } from "../api/api";

export const getStaticPaths = async () => {
  const allPokemons = await api.get("/pokemon?limit=50&offset=0");

  const paths = allPokemons.data.results.map((pokemon) => {
    return {
      params: {
        pokemonName: pokemon.name,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const name = context.params.pokemonName;

  const res = await api.get(`/pokemon/${name}`);

  return {
    props: {
      pokemon: res.data,
    },
  };
};

export default function Pokemon({ pokemon }) {
  return (
    <div>
      <Image
        src={pokemon.sprites.front_default}
        width="150"
        height="150"
        alt={pokemon.name}
      />
      <h3>Name: {pokemon.name}</h3>
      <br></br>
      <h3>Type: {pokemon.types[0].type.name}</h3>
      <br></br>
      <h3>Ability: {pokemon.abilities[0].ability.name}</h3>
    </div>
  );
}
