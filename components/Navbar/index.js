import { useState, useRef, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Link from 'next/link';
import Switch from 'react-switch';

import {
  Button,
  Nav,
  Container,
  StyledNavLink,
  NavHeader,
  NavContent,
  NavFooter,
  ThemeSwitcherContainer,
} from './styles';

import { MenuIcon, CloseIcon, MoonIcon, SunIcon } from '../Icons/index';

export default function Navbar(props) {
  const [isActive, setIsActive] = useState(false);

  const { colors, title } = useContext(ThemeContext);

  const dropDownRef = useRef(null);

  const onClick = () => setIsActive(!isActive);

  return (
    <Container>
      <Button onClick={onClick}>
        <MenuIcon />
      </Button>

      {isActive && <StyledNavLink />}
      <Nav
        ref={dropDownRef}
        style={
          isActive
            ? { left: 0, transition: '450ms' }
            : { left: '-100%', transition: '450ms' }
        }
      >
        <NavHeader>
          <Button onClick={onClick}>
            <CloseIcon />
          </Button>
        </NavHeader>

        <NavContent>
          <Link href={'/'} onClick={onClick}>
            Home
          </Link>
          <Link href={'/photos'} onClick={onClick}>
            Photos
          </Link>
          <Link href={'/search'} onClick={onClick}>
            Search
          </Link>
        </NavContent>

        <NavFooter>
          <ThemeSwitcherContainer>
            {props.theme.title === 'light' ? <SunIcon /> : <MoonIcon />}
            <Switch
              onChange={props.toggleTheme}
              checked={title === 'dark'}
              checkedIcon={false}
              uncheckedIcon={false}
              height={4}
              width={30}
              handleDiameter={15}
              offColor={colors.text_overlay}
              onColor={colors.text_overlay}
              offHandleColor={colors.text}
            />
          </ThemeSwitcherContainer>
        </NavFooter>
      </Nav>
    </Container>
  );
}
