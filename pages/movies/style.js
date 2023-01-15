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

export const SearchContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: start;
  gap: 1rem;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem;
  }
`;

export const Button = styled.button`
  border: none;
  padding: 10px 20px;
  color: #ffffff;
  background-color: #292929;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;

  @media (max-width: 992px) {
    width: 100%;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.textColor};
    color: ${({ theme }) => theme.colors.backgroundColor};
  }
`;
