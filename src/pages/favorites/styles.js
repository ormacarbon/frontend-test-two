import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(p) => p.theme.colors.bg};
  padding-top: 60px;
  color: ${(p) => p.theme.colors.primary};
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 60px);
`;

export const Content = styled.div`
  width: calc(100% - 40px);
  max-width: 600px;
  margin: auto;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  h1 {
    color: ${(p) => p.theme.colors.primary};
    font-size: 1.4rem;
  }
`;

export const FavoritesContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
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
