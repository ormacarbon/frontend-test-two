import styled, { keyframes } from "styled-components";

const fade = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const EpisodeListWrapper = styled.div`
  width: 100%;
  height: 100%;

  .title-search {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    input {
      margin-top: 0.4em;
      padding: 0.3em;
      border-radius: 5px;
      border: 1px solid #1e90ff;
      font-size: 1rem;
      font-weight: 600;
      color: #1e90ff;

      &:focus {
        outline: none;
      }
    }

    .search-btns {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1em;
      margin-top: 0.4em;
    }
  }

  .main-box {
    width: 100%;
    height: 90%;
    padding: 0 2em;

    .error-box {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-top: 3em;

      button {
        margin-top: 1em;
      }
    }
  }

  .table {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .table-btns {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1em;
      margin: 2em 0;
    }
  }
`;

export const Table = styled.table`
  width: 70%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  margin-top: 3em;

  @media (max-width: 1020px) {
    width: 95%;
  }
`;

export const TableHead = styled.thead`
  @media (max-width: 600px) {
    font-size: 0.6rem;
  }
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
  }
`;

export const TableHeading = styled.th`
  padding: 12px;
  border: 1px solid #ddd;
  text-align: left;
  font-weight: bold;
`;

export const TableData = styled.td`
  padding: 0.8em;
  border: 1px solid #ddd;
  text-align: left;
  font-size: 1.2rem;
  width: 160px;

  @media (max-width: 1020px) {
    padding: 0.2em;
    font-size: 0.7rem;
    text-align: center;
    height: 70px;
  }

  @media (max-width: 600px) {
    padding: 0em;
    font-size: 0.6rem;
    text-align: center;
  }

  .picture {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      animation: ${fade} 0.5s ease-in-out;

      @media (max-width: 1020px) {
        width: 50px;
        height: 50px;
      }

      @media (max-width: 600px) {
        width: 35px;
        height: 35px;
      }
    }
  }
  button {
    background: #1e90ff;
    border: 1px solid #fff;
    padding: 1em;
    border-radius: 5px;
    color: #ffffff;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    width: 100%;

    @media (max-width: 1020px) {
      width: 100%;
      height: 100%;
      font-size: 0.8rem;
      padding: 0;
      border: none;
      border-radius: 0;
    }

    @media (max-width: 600px) {
      font-size: 0.6rem;
    }

    &:hover {
      background: #fff;
      color: #1e90ff;
    }
  }
`;
