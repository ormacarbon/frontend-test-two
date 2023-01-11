import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import logo from '../../assets/logo.svg';
import { Cart } from '../Cart';
import { HeaderContainer } from './styles';

export function Header(){
  const { pathname } = useRouter();
  const showCartButton = pathname != '/sucess';
    return(
      <HeaderContainer>
        <Link href="/">
          <Image src={logo} alt="" />
        </Link>
        {showCartButton && <Cart />}
      </HeaderContainer>
    )
}