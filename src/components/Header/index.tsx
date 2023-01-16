import { StyledHeader, Nav } from "./styles";

import { AiOutlineSearch } from "react-icons/ai";

import { StyledLink } from "../../styles/global";

interface SearchProps {
  showSearch: boolean;
}

export default function Header({ showSearch }: SearchProps) {
  return (
    <StyledHeader>
      <StyledLink href="/">
        <h1>
          <span>Cine</span>
          phile
        </h1>
      </StyledLink>

      {showSearch ? (
        <form>
          <AiOutlineSearch size={24} />
          <input type="text" placeholder="What do you want to watch?" />
        </form>
      ) : (
        <br></br>
      )}

      <Nav>
        <StyledLink href={"/movies"}>Movies</StyledLink>
        <StyledLink href={"/series"}>Series</StyledLink>
        <StyledLink href={"/tvshows"}>TV Shows</StyledLink>
      </Nav>
    </StyledHeader>
  );
}
