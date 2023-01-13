import { StyledHeader, Nav, StyledLink } from "./styles";

import Link from "next/link";

import { AiOutlineSearch } from "react-icons/ai";

export default function Header() {
  return (
    <StyledHeader>
      <h1>
        <span>Cine</span>
        phile
      </h1>

      <form>
        <AiOutlineSearch size={24} />
        <input type="text" placeholder="What do you want to watch?" />
      </form>

      <Nav>
        <StyledLink href={"/movies"}>Movies</StyledLink>
        <StyledLink href={"/series"}>Series</StyledLink>
        <StyledLink href={"/tvshows"}>TV Shows</StyledLink>
      </Nav>
    </StyledHeader>
  );
}
