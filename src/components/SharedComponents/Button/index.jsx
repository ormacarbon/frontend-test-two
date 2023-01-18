import { Container } from "./styles";

export default function Button(props) {
  return (
    <Container
      onClick={props.onClick}
      type={props.type}
      primary={props.primary}
    >
      {props.children}
    </Container>
  );
}
