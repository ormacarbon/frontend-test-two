import React from "react";
import Link from "next/link";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { useTheme } from "../hooks/useTheme";

export default function Header() {
  const [theme, setTheme] = useTheme();

  console.log(theme);

  return (
    <nav className="bg-blue-800 text-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-4 h-16">
          <div className="text-lg font-bold">
            <Link href="/">Pokémon Search</Link>
          </div>
          <div className="flex space-x-4">
            {theme === "light" ? (
              <BsFillMoonFill
                onClick={() => setTheme("dark")}
                className="font-medium text-xl ease-in transition-all duration-75"
              />
            ) : (
              <BsSunFill
                onClick={() => setTheme("light")}
                size={25}
                className="font-medium text-xl ease-in transition-all duration-75"
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
