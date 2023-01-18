import styled from 'styled-components';

export const PhotoContainer = styled.div`
  color: ${(props) => props.theme.colors.text};
`;

export const DropdownContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 1rem;

  @media (min-width: 1100px) {
    padding: 0 1.4rem;
  }

  @media (min-width: 1800px) {
    padding: 0 2.9rem;
  }
`;

export const MainContent = styled.div`
  display: grid;
  grid-template-columns: 45% 45%;
  justify-content: center;

  gap: 0.6rem;

  @media (min-width: 1100px) {
    grid-template-columns: 23% 23% 23% 23%;
  }
`;
