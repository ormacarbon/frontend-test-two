import styled, {css} from "styled-components";

export const Card = styled.div`
  ${({theme}) => css`
    border: 2px solid ${theme.colors.secundary};
    border-radius: ${theme.box.radius};
    height: auto;
    overflow: hidden;
    padding: ${theme.spacings.medium};
  `}
`;

export const Image = styled.div`
  width: 100%;
  height: 150px;
  text-align: center;
  border: none;
  margin-bottom: ${({theme}) => theme.spacings.medium};
`;

export const Content = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: ${({theme}) => theme.font.sizes.medium};
  }

  p {
    font-size: ${({theme}) => theme.font.sizes.small};
  }

  button {
    width: 100%;
  }
`;
