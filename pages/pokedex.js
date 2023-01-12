import { useRouter } from "next/router";
import { useContext } from "react";
import { GlobalContext } from "../contexts/state";
import Navbar from "../src/components/Navbar";
import PokemonCard from "../src/components/PokemonCard";
import { StyledPokedex } from "./pokedex.styles";

export default function pokedex() {
  const { pokedex } = useContext(GlobalContext);

  const router = useRouter();
  const pathname = router.pathname;

  return (
    <>
      <Navbar />
      <StyledPokedex>
        <section className="container-pokemons">
          {pokedex.length === 0 && <>Pokedex is empty</>}
          {pokedex.map((pokemon) => {
            return <PokemonCard pokemon={pokemon} key={pokemon.url} pathname={pathname}/>;
          })}
        </section>
      </StyledPokedex>
    </>
  );
}
