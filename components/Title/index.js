import { H1, Hr, TitleStyle } from "./styles";

export default function Title(props) {
  return (
    <TitleStyle className="flex flex-col justify-center">
      <H1>{props.children}</H1>
    </TitleStyle>
  );
}
