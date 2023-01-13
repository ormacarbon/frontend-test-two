import React from 'react'
import { Container } from './styles'
import NavBar from '../NavBar'

function Layout({ children }) {

  return(
    <Container>
      <NavBar />
      <main>{children}</main>
    </Container>
  )
}
export default Layout;