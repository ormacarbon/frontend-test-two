import Link from "next/link";
import { Pokemon, DetailButton } from "../styles/pokemonCard";

export default function PokemonCard({ pokemon }) {
  return (
    <Pokemon>
      <h3>{pokemon.name}</h3>
      <DetailButton>
        <Link href={`pokemon/${pokemon.name}`}>More Details</Link>
      </DetailButton>
    </Pokemon>
  );
}
