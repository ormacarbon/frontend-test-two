import Link from "next/link";
import { useContext } from "react";
import { NameContext } from "../../../components/Context";
import { Pokemon } from "../styles";

export default function PokemonCard({ pokemons }) {
  const { user } = useContext(NameContext);

  return (
    <>
      {user ? (
        <h1>{user}, here you can check some pokemons</h1>
      ) : (
        <h1>Here you can check some pokemons</h1>
      )}
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
