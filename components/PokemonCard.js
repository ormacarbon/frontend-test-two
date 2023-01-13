import Link from "next/link";
import { Pokemon } from "../styles/pokemonCard";

export default function PokemonCard({ pokemon }) {
  return (
    <Pokemon>
      <h3>{pokemon.name}</h3>
      <Link href={`pokemon/${pokemon.name}`}>More Details</Link>
    </Pokemon>
  );
}
