import styled, { css } from "styled-components";

export const Container = styled.main`
  background-color: ${(p) => p.theme.colors.bg};
  padding-top: 60px;
  width: 100%;
  min-height: calc(100vh - 60px);
  color: ${(p) => p.theme.colors.primary};
`;

export const Content = styled.div`
  width: calc(100% - 40px);
  max-width: 600px;
  margin: auto;
  padding: 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding-top: 100px;

  ${(_p) =>
    _p.emptyHistory &&
    css`
      padding-top: 140px;
    `}
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

export const HistoryContainer = styled.div`
  width: 100%;

  div {
    button {
      transition: all 0.3s ease;
      background-color: transparent;
      color: ${(p) => p.theme.colors.secundary};

      :hover {
        color: ${(p) => p.theme.colors.button.text};
      }
    }
  }

  .header {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 20px;

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      color: ${(p) => p.theme.colors.primary};
      font-weight: 600;
      font-size: 1.1rem;
    }
  }

  .content {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-direction: column;
  }
`;
