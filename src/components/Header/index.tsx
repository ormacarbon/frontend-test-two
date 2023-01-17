import { StyledHeader, Nav } from "./styles";

import { AiOutlineSearch } from "react-icons/ai";

import { StyledLink } from "../../styles/global";

import { FormEvent, useState } from "react";

interface SearchProps {
  showSearch: boolean;
  onSearchItem?: (search: string) => void;
}

export default function Header({ showSearch, onSearchItem }: SearchProps) {
  const [search, setSearch] = useState("");

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
          <input
            type="text"
            placeholder="What do you want to watch?"
            value={search}
            onChange={(e) => {
              onSearchItem(e.target.value);
              setSearch(e.target.value);
            }}
          />
        </form>
      ) : (
        <br></br>
      )}

      <Nav>
        <StyledLink href={"/content/movie"}>Movies</StyledLink>
        <StyledLink href={"/content/tv"}>Series</StyledLink>
      </Nav>
    </StyledHeader>
  );
}
