import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link href="/">Home</Link>
      <Link href="/pokemon">Pokemons</Link>
      <Link href="/search">Search Pokemon</Link>
    </div>
  );
}
