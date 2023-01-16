import React from 'react'
import { Container } from './styles'
import NavBar from '../NavBar'
import MobileMenu from '../MobileMenu';

function Layout({ children }) {

  return(
    <Container>
      <MobileMenu />
      <NavBar />
      <main>{children}</main>
    </Container>
  )
}
export default Layout;