import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from '../../assets/logo.png';
import { SearchMovie } from "../SearchMovie";
import { HeaderContainer, HeaderContent } from "./styles";


export function Header(){
  const { pathname } = useRouter();
  
  // Property that reads which route it is on and if the riute the user is on is not viewing the information of a movie, it does not allow the user to search for another movie
  const showSearch = pathname != '/movie/[id]';
  return(
    <HeaderContainer>
      <HeaderContent>
        <Link href="/">
          <Image src={logo} alt="" />
        </Link>
        <Link href="/favorites">
          <span>Favorites</span>
        </Link>
        {showSearch && <SearchMovie />}
      </HeaderContent>
    </HeaderContainer>
  )
}