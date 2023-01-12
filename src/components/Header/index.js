import Link from 'next/link';
import { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from '../../contexts/ThemeContext';
import { StyledHeader } from './styles';

export default function Header() {
  const { handleToggleTheme, theme, currentTheme } = useContext(ThemeContext);

  return (
    <StyledHeader theme={currentTheme}>
      <Switch
        onChange={handleToggleTheme}
        checked={theme === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={12}
        width={30}
        handleDiameter={20}
        offColor="#523465"
        onColor="#863"
      />
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '25px' }}>
          <li>
            <button type="button">
              <Link href="/"> Home</Link>
            </button>
          </li>
          <li>Seasons</li>
          <li>Classificação</li>
        </ul>
      </nav>
    </StyledHeader>
  );
}

Header.propTypes = {
};
