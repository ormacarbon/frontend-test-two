import { H1, Hr, TituloStyle } from "./styles";

export default function Titulo(props) {
  return (
    <TituloStyle className="flex flex-col justify-center">
      <H1>{props.children}</H1>
    </TituloStyle>
  );
}
