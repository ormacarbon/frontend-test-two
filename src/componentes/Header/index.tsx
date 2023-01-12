import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Sun, Moon } from 'phosphor-react';
import { useContext } from 'react';
import logo from '../../assets/logo.png';
import { ThemeContext } from '../../pages/_app';
import { Cart } from '../Cart';
import { HeaderContainer, ToggleTheme } from './styles';

export function Header(){
  const { pathname } = useRouter();
  const showCartButton = pathname != '/sucess';
  const { toggleTheme, currentTheme } = useContext(ThemeContext)

  function handleToggleTheme() {
    toggleTheme();
  }
    return(
      <HeaderContainer>
        <Link href="/">
          <Image src={logo} alt="" />
        </Link>
        {currentTheme === 'dark' ? (
          <ToggleTheme onClick={handleToggleTheme}>
            <Sun size={24} />
          </ToggleTheme>
        ) : (
          <ToggleTheme onClick={handleToggleTheme}>
            <Moon size={24} />
          </ToggleTheme>
        )}
        {showCartButton && <Cart />}
      </HeaderContainer>
    )
}