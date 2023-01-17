import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 0 3rem;
  width: 90%;
  max-width: 1300px;
  height: calc(90vh - 1rem);
  margin: 0 auto;
  padding: 1rem;
  background-color: ${({ theme }) => theme.bgColor};

  @media (max-width: 1200px) {
    gap: 0;
  }

  @media (max-width: 992px) {
    row-gap: 0.5rem;
    height: 100%;
  }
`;

export const UserCard = styled.div`
  width: 11rem;
  height: 11rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  background-color: ${({ theme }) => theme.userCardColor};
  border: 2px solid ${({ theme }) => theme.userCardBorderColor};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.1s ease-in;

  &:hover {
    transform: scale(1.05);
    border: 2px solid ${({ theme }) => theme.userCardBorderColorHover};
  }
`;

export const Pagination = styled(ReactPaginate).attrs({})`
  list-style-type: none;
  width: 30%;
  margin-inline: auto;
  margin-top: -3rem;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  li a {
    color: ${({ theme }) => theme.userCardBorderColor};
    background-color: ${({ theme }) => theme.bgColor};
    padding: 0.75rem 1rem;
    border: 2px solid ${({ theme }) => theme.userCardBorderColor};
    border-radius: 8px;
    transition: 0.1s ease-in;

    &:hover {
      color: ${({ theme }) => theme.userCardBorderColorHover};
      border: 2px solid ${({ theme }) => theme.userCardBorderColorHover};
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 5rem;
  }
`;

