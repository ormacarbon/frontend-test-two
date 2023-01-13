import styled from "styled-components";

export const MovieDetail = styled.div`
  display: flex;
  justify-content: center;

  .movie-details {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    align-items: flex-start;
    margin-bottom: 4rem;

    @media (max-width: 992px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    img {
      width: 300px;
    }

    span {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      @media (max-width: 992px) {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      h1 {
        font-size: 4rem;
        @media (max-width: 992px) {
          font-size: 1rem;
        }
      }
      p {
        max-width: 80ch;

        @media (max-width: 992px) {
          margin: 0 2rem;
        }
      }

      h2 {
        @media (max-width: 992px) {
          font-size: 1rem;
        }
      }
    }

    .anchor {
      border: none;
      padding: 10px 20px;
      color: #ffffff;
      background-color: #292929;
      border-radius: 4px;
      font-size: 1rem;
      width: 40%;
      cursor: pointer;
      text-align: center;

      @media (max-width: 992px) {
        width: 80%;
      }

      &:hover {
        background-color: #fff;
        color: #000;
      }
    }
  }
`;
