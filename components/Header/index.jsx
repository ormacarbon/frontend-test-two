import Image from "next/image";
import logoLight from "../../assets/logoLight.svg";
import { Container } from "./style";
import Link from "next/link";

export function Header() {
  return (
    <Container>
      <div>
        <Image
          src={logoLight}
          alt="logo"
          width={100}
          height={100}
          priority={true}
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
          <li>
            <Link href="">Theme</Link>
          </li>
        </ul>
      </div>
    </Container>
  );
}
