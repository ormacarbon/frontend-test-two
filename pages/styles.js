import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  align-items: center;
`;
export const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  align-items: center;
  flex-direction: column;
`;

export const InputText = styled.input`
  align-items: center; 
  border-radius: 0.9rem;
  height: 2rem;
  padding: 12px 20px;
  font-size: 1rem;

  &:focus {
  border: 3px solid #555;
  padding: 15px 20px;
} 
`

export const Button = styled.button`
  color: ${(({ theme }) => theme.colors.background.beau_blue)};
  background-color: ${(({ theme }) => theme.colors.background.darkbg)};
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 2.1999999999999993rem;
  width: 5rem;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
    height: 2rem;
    transition: 50ms;
  }

`;