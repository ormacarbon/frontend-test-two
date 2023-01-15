import React from 'react'
import { PrimaryNav, MenuLink, Menu } from '../styles/NavBarStyles'
export default function NavBar() {

  return (
    <>
      <PrimaryNav>
        {/* <Hamburger /> */}
        <Menu>
          <MenuLink href="/" activeStyle>
            Home
          </MenuLink>
          <MenuLink href="/dog" activeStyle>
            Dog
          </MenuLink>
          <MenuLink href="/cat" activeStyle>
            Cat
          </MenuLink>
        </Menu>
      </PrimaryNav>
    </>
  );
}