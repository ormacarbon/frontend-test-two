import Link from "next/link";
import { PokemonFound } from "../styles";

export default function PokemonResult({ pokemonSearched }) {
  return (
    <PokemonFound>
      <h3>{pokemonSearched.name}</h3>
      <Link href={`search/${pokemonSearched.name}`}>More Details</Link>
    </PokemonFound>
  );
}
