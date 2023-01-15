import styled, {css} from "styled-components";

export const Container = styled.main`
  ${({theme}) => css`
    max-width: ${theme.content.size.large};
    min-height: 85vh;
    margin: 0 auto;
    padding: 0 ${theme.spacings.medium};
  `}
`;
