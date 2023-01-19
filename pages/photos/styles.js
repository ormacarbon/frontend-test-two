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

export const PageSelector = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  padding: 1rem 2rem 2rem;

  @media (min-width: 1100px) {
    padding: 1rem 15rem 2rem;
  }
`;

export const PageCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  font-size: ${(props) => props.theme.font_size.sm};
  font-weight: ${(props) => props.theme.font_weight.regular};
`;

export const SelectPage = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  box-shadow: 0px 2px 2px 0px hsla(0, 0%, 0%, 0.14),
    0px 3px 1px -2px hsla(0, 0%, 0%, 0.12), 0px 1px 5px 0px hsla(0, 0%, 0%, 0.2);
  font-weight: ${(props) => props.theme.font_weight.bold};
  font-size: ${(props) => props.theme.font_size.sm};

  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
`;
