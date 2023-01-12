import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-blue-800 text-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-4 h-16">
          <div className="text-lg font-bold">
            <Link href="/">Pokémon List</Link>
          </div>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="px-2 py-1 text-white hover:bg-blue-900 rounded-md"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
