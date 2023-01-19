import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  flex-direction: column;

  height: 95vh;
  padding: 0 1rem;
  gap: 0.5rem;

  position: relative;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;

  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.font_size.lg};
  font-weight: ${(props) => props.theme.font_weight.black};

  @media (min-width: 1100px) {
    font-size: ${(props) => props.theme.font_size.xlg};
  }
`;
export const Description = styled.span`
  font-size: ${(props) => props.theme.font_size.sm};
  color: ${(props) => props.theme.colors.caption_400};
  margin-top: 1rem;
  font-weight: ${(props) => props.theme.font_weight.bold};

  @media (min-width: 1100px) {
    font-size: ${(props) => props.theme.font_size.md};
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 1rem;
`;

export const Button = styled.button`
  padding: 0.8rem 2.5rem;

  text-decoration: none;
  background-color: ${(props) => props.theme.colors.text};
  border: 1px solid ${(props) => props.theme.colors.text};

  box-shadow: 0px 2px 2px 0px hsla(0, 0%, 0%, 0.14),
    0px 3px 1px -2px hsla(0, 0%, 0%, 0.12), 0px 1px 5px 0px hsla(0, 0%, 0%, 0.2);

  border-radius: 10px;
  outline: none;

  color: ${(props) => props.theme.colors.background};
  font-size: ${(props) => props.theme.font_size.md};
  cursor: pointer;

  transition: 0.3s;

  &:hover,
  &:active,
  &:focus {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }

  @media (min-width: 1100px) {
    padding: 1rem 3rem;
  }
`;
