import styled from "styled-components";

export const Container = styled.div``;

export const MoviesList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  grid-gap: 1rem;
  grid-row-gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }

  img {
    object-fit: cover;
    min-height: 100%;
    min-width: 100%;
    width: 100%;
    height: 100%;
  }

  h1 {
    margin-top: 0.5rem;
    font-size: 1rem;
  }

  a {
    display: inline-block;
    background-color: #313131;
    padding: 10px 15px;
    color: #ffffff;
    border-radius: 4px;
    margin-top: 2rem;
    font-size: 0.9rem;

    @media (max-width: 992px) {
      margin-top: 1rem;
      width: 100%;
      text-align: center;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.textColor};
      color: ${({ theme }) => theme.colors.backgroundColor};
    }
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
`;
