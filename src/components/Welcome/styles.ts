import styled from "styled-components";

export const WelcomeMain = styled.main`
  width: fit-content;
  height: 50vh;
  padding: 2rem;
  border-radius: 10px;
  margin: 20vh auto;

  text-align: center;

  box-shadow: 0px 0px 8px 8px rgba(24, 41, 128, 1);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  span {
    color: ${(props) => props.theme.colors["indigo-800"]};
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;

    &:hover {
      font-size: 1.1rem;
      transition: 0.1s;
    }
  }

  @media (max-width: 648px) {
    width: 60%;
  }
  @media (max-width: 400px) {
    height: fit-content;
  }
`;
