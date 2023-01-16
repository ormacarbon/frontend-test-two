import React from 'react';
import { NavContainer, NavLinks, NavLogo, ThemeButton } from './styles';

const Navbar = () => {
  return (
    <>
      <main>
        <NavContainer>
          <NavLogo>
            <h1>
              Next News 24/7
            </h1>
          </NavLogo>
          <div>
            <NavLinks>
              <li>About us</li>
              <li>Contact</li>
              <li>Search</li>
            </NavLinks>
          </div>
          <div>
            <ThemeButton type='button'>
              🌞 Light Theme
            </ThemeButton>
          </div>
        </NavContainer>
      </main>
    </>
  )
}

export default Navbar;
