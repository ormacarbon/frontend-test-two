import { StyledNavbar } from "./styles";

export default function Navbar() {
  return (
    <StyledNavbar>
      <img src={"/images/pokemon.svg"} alt="pokemon" />
      <button className="button-pokedex">Pokédex</button>

      <button className="button-homepage">{"< Todos Pokémons"}</button>
    </StyledNavbar>
  );
}
