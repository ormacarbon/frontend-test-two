import { Header } from '../Header';

import { Container } from './styles';

export function MainContainer(props) {
  return (
    <Container>
      <Header toggleTheme={props.toggleTheme} theme={props.theme} />
      <div>{props.children}</div>
    </Container>
  );
}
