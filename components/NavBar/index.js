import { Container, NavLink } from "./styles"

function NavBar() {
  return (
    <Container>
      <img
        src="https://logodownload.org/wp-content/uploads/2017/05/marvel-logo-4.png"
        alt="Logo Marvel"
      />
      <NavLink href="/">Characters</NavLink>
      <NavLink href="/comics">Comics</NavLink>
      <NavLink href="/events">Events</NavLink>
    </Container>
  )
}

export default NavBar
