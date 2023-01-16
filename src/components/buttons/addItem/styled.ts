import styled from 'styled-components';

export const Container = styled.button`
  text-align: center;
  color: white;
  height: 2rem;

  border: none;
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${({ theme }) => theme.colors.pink[300]};

  svg {
    padding: 0.1rem;
  }

  span {
    display: flex;
    align-items: center;
    font-size: 0.7rem;
    height: 2rem;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    padding: 0.5rem;
    background: ${({ theme }) => theme.colors.pink[400]};
  }

  :hover {
    filter: brightness(0.9);
    transition: 250ms all ease-in-out;
  }

  @media (max-width: 1024px) {
    gap: 0.8rem;
    font-size: 0.7rem;
  }

  @media (max-width: 540px) {
    gap: 2rem;
  }
`;
