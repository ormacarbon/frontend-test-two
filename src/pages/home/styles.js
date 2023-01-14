import styled from "styled-components";

export const Container = styled.main`
  background-color: ${(p) => p.theme.colors.bg};
  padding-top: 60px;
  width: 100%;
  height: 150vh;
  color: ${(p) => p.theme.colors.primary};
`;

export const Content = styled.div`
  width: calc(100% - 40px);
  max-width: 600px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const Description = styled.h1`
  color: ${(p) => p.theme.colors.primary};
  font-size: 2.4rem;
  text-align: center;

  span {
    color: ${(p) => p.theme.colors.blue[200]};
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  gap: 20px;
  position: relative;

  input {
    width: 100%;
    height: 70px;
    color: ${(p) => p.theme.colors.input.text};
    background-color: ${(p) => p.theme.colors.input.bg};
    padding-left: 20px;
    padding-right: 64px;
    border: none;
    border-radius: 100px;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    outline: 2px solid transparent;

    @media only screen and (max-width: 480px) {
      height: 60px;
    }

    :focus {
      outline-color: ${(p) => p.theme.colors.blue[200]};
    }

    ::placeholder {
      color: ${(p) => p.theme.colors.input.placeholder};
    }
  }

  button {
    position: absolute;
    right: 20px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: ${(p) => p.theme.colors.blue[200]};

    svg {
      color: #ffffff;
      width: 24px;
      height: 24px;
    }

    :hover {
      background-color: ${(p) => p.theme.colors.blue[300]};
    }

    @media only screen and (max-width: 480px) {
      width: 32px;
      height: 32px;

      svg {
        width: 18px;
        height: 18px;
      }
    }
  }
`;
