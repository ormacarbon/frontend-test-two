import styled from 'styled-components';

export const HomeContainer = styled.div`
  color: ${(props) => props.theme.colors.text};
`;

export const MainContent = styled.div`
  display: grid;
  grid-template-columns: 45% 45%;
  justify-content: center;

  gap: 0.6rem;
`;
