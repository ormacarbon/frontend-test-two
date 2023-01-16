import Link from "next/link";
import { Pokemon } from "../styles";

export default function PokemonCard({ pokemons }) {
  return (
    <>
      {pokemons.map((pokemon) => {
        return (
          <Pokemon key={pokemon.name}>
            <h3>{pokemon.name}</h3>
            <Link href={`pokemon/${pokemon.name}`}>More Details</Link>
          </Pokemon>
        );
      })}
    </>
  );
}
