import Link from 'next/link';
import { Container, DesktopNavBar, MobileNavBar } from './styles';
import Navbar from '../Navbar';

export function Header(props) {
  return (
    <Container>
      <DesktopNavBar>
        <Link href={'/'}>Home</Link>
        <Link href={'/photos'}>Photos</Link>
        <Link href={'/search'}>Search</Link>
      </DesktopNavBar>
      <MobileNavBar>
        <Navbar toggleTheme={props.toggleTheme} theme={props.theme} />
      </MobileNavBar>
    </Container>
  );
}
