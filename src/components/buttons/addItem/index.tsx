import * as Styled from './styled';

export type ButtonProps = {
  textButton: string;
  actionOnClick?: () => void;
};

export function Button({
  textButton,
  actionOnClick,
}: ButtonProps): JSX.Element {

  return (
    <Styled.Container onClick={actionOnClick}>
      {textButton}
    </Styled.Container>
  );
}
