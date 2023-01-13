import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 1rem;
  gap: 1rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.background2};

  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.background3};
`;
