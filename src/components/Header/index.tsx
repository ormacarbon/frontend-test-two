import Image from "next/image";
import Link from "next/link";
import logo from '../../assets/logo.png';
import { SearchMovie } from "../SearchMovie";
import { HeaderContainer, HeaderContent } from "./styles";


export function Header(){
  return(
    <HeaderContainer>
      <HeaderContent>
        <Link href="/">
          <Image src={logo} alt="" />
        </Link>
        <Link href="/favorites">
          <span>Favorites</span>
        </Link>
        <SearchMovie />
      </HeaderContent>
    </HeaderContainer>
  )
}