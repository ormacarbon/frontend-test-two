import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Switch from "react-switch";
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
        {/* <Switch onChange={() => {}} checked height={20} width={40} checkedIcon={false} uncheckedIcon={false} handleDiameter={20} offColor={'#fff'} onColor={'#232323'} /> */}
      </HeaderContainer>
    )
}