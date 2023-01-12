import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { ButtonTheme } from "./ButtonTheme";

export function Navbar() {
  return (
    <NavMenu>
      <div>
        <ImageS
          href="https://github.com/jeffwillian"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/images/github-mark-white.png"
            width="30"
            height="30"
            alt="PokeNuts"
          />
        </ImageS>
        <h1><Link href="/">WeGotList</Link></h1>
      </div>
      <ul>
        <Link href="/">Home</Link>
        <Link href="/About">About</Link>
      </ul>
      <ButtonTheme />
    </NavMenu>
  );
}

const NavMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.2em;
  background: #160f29;
  color: white;
  background-color: #160f29;

  @media (max-width: 360px) {
    padding: 0px;
    margin-left: 0px;
    
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #160f29;
    
    div,
    h1, a {
      margin-left: .2em;
      background-color: #160f29;
      color: white;
      text-decoration: none;
    }
  }

  ul {
    display: flex;
    list-style: none;
    background-color: #160f29;

    a {
      margin-right: 1em;
      text-decoration: none;
      color: white;
      transition: 0.4s;
      border-bottom: 2px solid transparent;
      background-color: #160f29;
      &:hover {
        border-color: #fff;
      }
    }
  }
`;

const ImageS = styled.a`
  background: #160f29;

  img {
    background: #160f29;
  }
`;
