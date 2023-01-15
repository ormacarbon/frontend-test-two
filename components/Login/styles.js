import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 92.9vh;
  width: 100%;

  div {
    margin-bottom: 5em;
  }

  .login-area {
    height: 100%;
    width: 65%;
    padding: 1.3em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 559px) {
      text-align: center;
    }

    .login-choice-btn {
      display: flex;
      justify-content: center;
      margin-top: 1.5em;
      gap: 1em;

      button {
        background: #1e90ff;
        border: 1px solid #fff;
        padding: 1em;
        border-radius: 5px;
        color: #ffffff;
        font-weight: 600;
        font-size: 1rem;
        cursor: pointer;

        &:hover {
          background: #fff;
          color: #1e90ff;
        }
      }
    }
  }

  .video-area {
    height: 100%;
    width: 100%;
    padding: 1.3em;
    background: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8929ac19-120e-4d6a-8b86-c23fbd654d92/das2gen-d2698547-a948-47e1-9a24-98247a9631e1.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg5MjlhYzE5LTEyMGUtNGQ2YS04Yjg2LWMyM2ZiZDY1NGQ5MlwvZGFzMmdlbi1kMjY5ODU0Ny1hOTQ4LTQ3ZTEtOWEyNC05ODI0N2E5NjMxZTEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NPIOSM6ZjLXSMJAQha-Q4Jz3bu6i6EowqYc-gSYvG0s");
    background-size: cover;

    @media (max-width: 559px) {
      display: none;
    }
  }
`;

export const FormsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3em;

  div {
    display: flex;
    flex-direction: column;
    margin-top: 2em;

    input {
      margin: 0.3em 0;
      padding: 1em;
      border-radius: 5px;
      border: 1px solid #1e90ff;
      font-size: 1rem;
      font-weight: 600;
      color: #1e90ff;

      &:focus {
        outline: none;
    }
    }

    button {
      margin-top: 1em;
      background: #1e90ff;
      border: 1px solid #fff;
      padding: 1em;
      border-radius: 5px;
      color: #ffffff;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;

      &:hover {
        background: #fff;
        color: #1e90ff;
      }
    }

    .return-btn {
      background: #E97777;
    }
  }
`;
