import Link from 'next/link';
import { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from '../../contexts/ThemeContext';
import { StyledHeader, ListNavMenu, ContainerLogo } from './styles';

export default function Header() {
  const { handleToggleTheme, theme, currentTheme } = useContext(ThemeContext);

  return (
    <StyledHeader theme={currentTheme}>
      <ContainerLogo theme={currentTheme}>
        <Link href="/"><h1>LOGO</h1></Link>
        <Switch
          onChange={handleToggleTheme}
          checked={theme === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={25}
          width={50}
          handleDiameter={25}
          onColor="#ccc"
          offColor="#444"
        />
      </ContainerLogo>

      <nav>
        <ListNavMenu theme={currentTheme}>
          <li><Link href="/"> Home</Link></li>
          <li><Link href="/test"> Seasons</Link></li>
          <li><Link href="/test2"> Results</Link></li>
        </ListNavMenu>
      </nav>
    </StyledHeader>
  );
}
