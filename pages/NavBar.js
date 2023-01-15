import Link from 'next/link'
import styled from  'styled-components'
import ThemeToggler from './ThemeToggler'


const NavContainer = styled.ul`
  display: flex;
  justify-content:space-around;
  align-items: center;
  padding: 17px;
  background-color: black;
  border-radius: 25px;
`

const NavItem = styled.li`
  list-style: none;
  color: white;
  padding: 10px;
  a {
    padding: 15px;
    color: white;
    text-decoration: none;
  }
  `

export default function NavBar() {
  return (
    <NavContainer>
      <NavItem>
        <Link href="/">Home</Link>
      </NavItem>
      <NavItem><ThemeToggler /></NavItem>
    </NavContainer>
  )
}