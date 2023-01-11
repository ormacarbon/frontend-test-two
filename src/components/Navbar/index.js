import { useState } from "react";
import { StyledNavbar } from "./styles";

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  return (
    <StyledNavbar>
      <button className="button-home">Home</button>
      <button className="button-pokedex">Pokédex</button>
      <div className="search-container">
        <button
          className="button-search"
          onClick={() => setExpanded(!expanded)}
        ><img src={"/images/search.svg"}/></button>
        {expanded && (
          <input type="text" placeholder="Search Pokemon..." className="search-input" />
        )}
        
      </div>
    </StyledNavbar>
  );
}
