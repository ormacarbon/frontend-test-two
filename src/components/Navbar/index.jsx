import React, { useContext, useState } from 'react';
import * as Styles from './styles';
import { ThemeContext } from '../Context';
import { MdBrightnessHigh, MdNightlightRound } from 'react-icons/md';
import { useRouter } from 'next/router';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrFormClose } from 'react-icons/gr';

// Navbar component which contains routes that can be navigated to
const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const router = useRouter();
  const [navbarMobile, setNavbarMobile] = useState(false);

  // Toggling of the themes into dark or light
  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
  };

  return (
    <>
      <Styles.NavContainer>
        <Styles.NavLogo>
          <p onClick={() => router.push('/')}>
            Next UserDB
          </p>
        </Styles.NavLogo>
        <div>
          <Styles.NavLinks>
            <li>
              <button
                type='button'
                onClick={() => router.push('/about')}
              >
                About us
              </button>
            </li>
            <li>
              <button
                type='button'
                onClick={() => router.push('/contact')}
              >
                Contact
              </button>
            </li>
          </Styles.NavLinks>
        </div>
        <Styles.NavEndSection>
          <Styles.ThemeButton
            type='button'
            onClick={handleThemeChange}
          >
            {theme === 'light'
              ? <p><MdNightlightRound /> Dark</p>
              : <p><MdBrightnessHigh /> Light</p>
            }
          </Styles.ThemeButton>
          <div>
            <Styles.MobileToggleButton onClick={() => setNavbarMobile((current) => !current)}>
              {navbarMobile ? <GrFormClose /> : <GiHamburgerMenu />}
            </Styles.MobileToggleButton>
          </div>
        </Styles.NavEndSection>
      </Styles.NavContainer>
    </>
  )
}

export default Navbar;
