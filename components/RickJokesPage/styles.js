import styled from "styled-components";

export const RickJokesPageContainer = styled.div`
  width: 30%;
  height: 92.9vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;

  .rick-reactions-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .rick-message-baloon-box {
      position: relative;
      background-color: #fff;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      color: black;
      padding: 1.5em;

      ::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -10px;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid #fff;
      }
    }

    img {
      width: 350px;
      height: 350px;
      border-radius: 50%;
    }
  }
  button {
    width: 300px;
    height: 50px;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    margin-top: 1em;
    opacity: ${({ isLoading }) => (isLoading ? "0.5" : "1")};
    pointer-events: ${({ isLoading }) => (isLoading ? "none" : "auto")};

    :hover {
      background-color: #000;
      color: #fff;
    }
  }
`;
