import Image from "next/image";
import { api } from "../api/api";

export const getStaticPaths = async () => {
  const allPokemons = await api.get("/pokemon");

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
  console.log("estamos pegando a api", pokemon);
  console.log("habilidade", pokemon.abilities[1].ability.url);

  return (
    <div>
      <Image
        src={pokemon.sprites.front_default}
        width="150"
        height="150"
        alt={pokemon.name}
      />
      <p>{pokemon.name}</p>
    </div>
  );
}
