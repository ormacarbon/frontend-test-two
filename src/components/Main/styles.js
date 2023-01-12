import styled from 'styled-components';

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 h1 {
  margin-top: 32px;
 }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(4, auto);
  gap: 16px;
  padding: 15px;
  margin-top: 32px;

  a {
    background-color: ${({ theme }) => theme.backgroundHeader};
    border-radius: 4px;
    padding: 10px;
    display: flex;
    align-items: center;
    border: 1px solid;

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.secondaryColor};
      color: ${({ theme }) => theme.primaryColor};
      transform: scale(1.1);
    }

    :active {
      transform: rotate(1deg);
    }

    img {
      width: 20px;
      margin-right: 16px;
    }

  }
`;
