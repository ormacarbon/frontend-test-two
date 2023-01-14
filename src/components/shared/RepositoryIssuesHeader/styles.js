import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: grid;
  place-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
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
  }

  span {
    color: ${(p) => p.theme.colors.primary};
    font-weight: 600;
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
