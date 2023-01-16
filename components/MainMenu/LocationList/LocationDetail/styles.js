import styled from "styled-components";

export const DetailWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  .return-btn {
    display: flex;
    justify-content: flex-start;
    width: 100%;

    button {
      background-color: #f5f5f5;
      border: none;
      border-radius: 0.5em;
      padding: 0.5em;
      font-size: 1rem;
      font-weight: bold;
      color: #000;

      &:hover {
        cursor: pointer;
        background: #000;
        color: #fff;
      }
    }
  }

  .before-content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90%;
    font-size: 2rem;
  }

  .character-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1em;

    h1 {
      font-size: 2rem;
      margin-bottom: 0.5em;
    }

    .character-description {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 1em;
      gap: 0.7em;

      p {
        span {
          font-weight: bold;
        }
      }
    }

    .episodes {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 2em;

      .residents-list-box {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.8em;
        margin-top: 2em;
        width: 50%;

        img {
          border-radius: 50%;
          width: 100px;
          transition: 0.3s;
          cursor: pointer;

          &:hover {
            scale: 1.3;
          }
        }

        p {
          font-size: 1.5rem;
          text-align: center;
        }
      }
    }
  }
`;
