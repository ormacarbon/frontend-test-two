import styled from 'styled-components';

type MainProps = {
  hasItemInCartList: boolean;
};

type TableHeadProps = {
  isDarkTheme: boolean;
}

export const Container = styled.main<MainProps>`
  display: ${({ hasItemInCartList }) => (hasItemInCartList ? 'block' : 'none')};
  max-width: 1280px;
  margin: 0 auto;
  margin-bottom: 4rem;
  margin-top: 1rem;

  background: ${({ theme }) => theme.colors.white[100]};

  @media (max-width: 1366px) {
    width: 95%;
  }
`;

export const Table = styled.table`
  width: 100%;

  padding: ${({ theme }) => theme.spacings['1.6']};
`;

export const TableHead = styled.thead<TableHeadProps>`
  tr {
    th {
      :nth-child(1) {
        border-bottom: none;
      }
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray[250]};
    }
  }
  color: ${({ theme }) => theme.colors.gray[250]};

  @media (max-width: 540px) {
    tr {
      th:first-child {
        display: none;
      }
    }
  }
`;

export const TableBody = styled.tbody`
  color: ${({ theme }) => theme.colors.gray[800]};
  font-weight: 600;

  img {
    max-width: 150px;
  }

  td:nth-child(2) {
    padding-right: 1rem;
  }

  @media (max-width: 768px) {
    img {
      max-width: 100px;
    }
  }

  @media (max-width: 540px) {
    tr {
      td:first-child {
        display: none;
      }

      td:nth-child(2) {
        span {
          display: none;
        }
      }

      td:nth-child(3){
        svg {
          width: 50px;
        }
      }
    }
  }
`;

export const TableRow = styled.tr`
  th {
    text-align: start;
  }

  @media (max-width: 768px) {
    td:nth-child(2) {
      font-size: 0.9rem;
    }

    td:last-child {
      font-size: 1.3rem;
    }
  }
`;

export const TableData = styled.td`
  min-width: 10rem;

  p {
    text-align: justify;
    margin: 1rem 0;
  }

  img {
    @media (max-width: 1024px) {
      max-width: 140px;
    }

    @media (max-width: 768px) {
      max-width: 130px;
    }
  }
`;

export const TableFooter = styled.tfoot`
  color: ${({ theme }) => theme.colors.gray[800]};
  font-weight: 600;

  td:last-child {
    font-size: 1.7rem;

    span {
      font-size: 1.1rem;
      color: ${({ theme }) => theme.colors.gray[250]};
    }
  }

  @media (max-width: 768px) {
    td:last-child {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 540px) {
    tr {
      td:nth-child(3) {
        display: none;
      }
    }
  }
`;

export const Button = styled.button`
  color: white;
  font-weight: 400;

  border: none;
  border-radius: 2px;
  padding: 0.15rem 0.75rem;

  background: ${({ theme }) => theme.colors.pink[300]};

  :hover {
    transition: 250ms all ease-in-out;
    background: ${({ theme }) => theme.colors.pink[250]};
  }

  font-weight: 600;
  padding-top: 0.35rem;
  padding-bottom: 0.35rem;

  :hover {
    background: ${({ theme }) => theme.colors.pink[300]};
  }
`;

export const SectionUpdateProductQuantity = styled.section`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  span {
    width: 3rem;
    height: 1.7rem;

    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.gray[400]};

    padding-top: 0.06rem;
    padding-left: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.gray[250]};
    border-radius: 2px;
  }

  svg {
    cursor: pointer;

    @media (max-width: 768px) {
      width: 20px;
    }
  }
`;

export const SectionSubtotal = styled.section`
  width: 77%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;

  svg {
    width: 55px;
    cursor: pointer;

    @media (max-width: 1024px) {
      width: 30px;
    }

    @media (max-width: 768px) {
      width: 60px;
    }
  }
`;
