import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin-top: 32px;
  }
`;

export const Container = styled.div`
  width: 90%;

  a {
    background-color: ${({ theme }) => theme.primaryColor};
    border-radius: 4px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid;
    padding: 15px;

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.secondaryColor};
      color: ${({ theme }) => theme.primaryColor};
      transform: scale(0.9);
    }

    :active {
      transform: rotate(1deg);
    }

    img {
      width: 300px;
      margin-right: 16px;
    }

  }
`;
