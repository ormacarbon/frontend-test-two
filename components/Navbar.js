import Link from "next/link";
import { NavbarMenu, Menu } from "../styles/navbar";

export default function Navbar() {
  return (
    <NavbarMenu>
      <Menu>
        <Link href="/">Home</Link>
        <Link href="/pokemon">Pokemons</Link>
      </Menu>
    </NavbarMenu>
  );
}
