import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(p) => p.theme.colors.bg};
  min-height: calc(100vh - 60px);
  padding-top: 60px;
`;

export const Content = styled.div`
  width: calc(100% - 40px);
  max-width: 600px;
  margin: auto;
  padding: 40px 0;
`;

export const ActionsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 24px;
  margin-bottom: 10px;
`;

export const PaginationButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  button {
    color: ${(p) => p.theme.colors.button.text};
    font-size: 12px;
    background-color: transparent;
    height: 24px;
    padding: 0 10px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 6px;

    :hover {
      background-color: ${(p) => p.theme.colors.button.bg};
    }
    :active {
      background-color: transparent;
    }
  }
`;

export const IssuesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  min-height: 70vh;
`;

export const Empty = styled.div`
  width: 100%;
  height: calc(100vh - 180px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  img {
    opacity: 0.5;
    width: 80px;
    height: 80px;

    @media screen and (max-width: 480px) {
      width: 60px;
      height: 60px;
    }
  }

  span {
    opacity: 0.5;
    font-size: 1.8rem;
    text-align: center;
    color: ${(p) => p.theme.colors.secundary};

    @media screen and (max-width: 320px) {
      font-size: 1.6rem;
    }
  }
`;
