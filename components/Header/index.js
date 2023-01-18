import { Container } from './styles';
import Navbar from '../Navbar';

export function Header(props) {
  return (
    <Container>
      <Navbar toggleTheme={props.toggleTheme} theme={props.theme} />
    </Container>
  );
}
