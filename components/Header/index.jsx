import Image from "next/image";
import logoLight from "../../assets/logoLight.svg";
import logoDark from "../../assets/logoDark.svg";
import { Container } from "./style";
import Link from "next/link";
import { GlobalStateContext } from "../../contexts/GlobalStateContext";
import { useContext } from "react";

export function Header() {
  const { theme, setTheme } = useContext(GlobalStateContext);

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Container>
      <div>
        <Image
          src={theme === "light" ? logoLight : logoDark}
          alt="logo"
          width={100}
          height={100}
          priority
          loading="eager"
        />
      </div>
      <div className="links">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/movies">Movies</Link>
          </li>
          <button onClick={handleTheme}>Theme</button>
        </ul>
      </div>
    </Container>
  );
}
