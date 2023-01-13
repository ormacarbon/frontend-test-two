import Link from "next/link";
import { NavbarMenu, Menu } from "./styles.js";

export default function Navbar() {
  return (
    <NavbarMenu>
      <Link href="/">Home</Link>
      <Link href="/pokemon">Pokemons</Link>
    </NavbarMenu>
  );
}
