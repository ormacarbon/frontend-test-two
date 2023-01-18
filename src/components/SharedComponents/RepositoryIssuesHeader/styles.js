import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: grid;
  place-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  max-width: 100vw;
  background-color: ${(p) => p.theme.colors.bg};
  border-bottom: 1px solid ${(p) => p.theme.colors.header.border};
  margin-bottom: -1px;
  z-index: 999999;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 40px);
  max-width: 1000px;
  height: 100%;
`;

export const PageInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 20px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(p) => p.theme.colors.imgBackground};

    @media (max-width: 420px) {
      display: none;
    }
  }

  div {
    display: flex;
    align-items: end;
    flex-wrap: wrap;

    p {
      color: ${(p) => p.theme.colors.primary};
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 1;
      margin-right: 10px;
    }
    span {
      font-size: 0.8rem;
      font-weight: 200;
      color: ${(p) => p.theme.colors.secundary};
    }
  }
`;

export const AppName = styled.a`
  color: ${(p) => p.theme.colors.header.title};
  font-weight: 800;
  font-size: 1.2rem;

  @media only screen and (max-width: 320px) {
    span {
      display: none;
    }
  }
`;

export const FavoritesTitle = styled.div`
  color: ${(p) => p.theme.colors.header.title};
  font-weight: 800;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;

  svg {
    display: none;
    width: 24px;
    height: 24px;
    fill: ${(p) => p.theme.colors.red};

    @media only screen and (max-width: 320px) {
      display: none !important;
    }
  }
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 20px;
  margin-left: auto;
`;
