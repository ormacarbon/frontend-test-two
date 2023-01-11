import { useState } from "react";
import { StyledNavbar } from "./styles";
import Link from 'next/link';


export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  return (
    <StyledNavbar>
      <Link href='/'>
      <button className="button-home">Home</button>
      </Link>
      <Link href='/pokedex'>
      <button className="button-pokedex">Pokédex</button>
      </Link>
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
