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
  flex-direction: row;
  gap: 20px;

  @media screen and (min-width: 520px) {
    margin: 0 60px;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: 10px;
    align-items: center;
    text-align: center;
  }

  .logo {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: ${(p) => p.theme.colors.imgBackground};
    outline: 1px solid ${(p) => p.theme.colors.button.bg};

    @media screen and (max-width: 640px) {
      width: 100px;
      height: 100px;
    }
  }

  .name {
    font-size: 2rem;
    font-weight: 800;
    color: ${(p) => p.theme.colors.primary};
    margin-bottom: 10px;
  }

  .description {
    display: inline-block;
    font-size: 1.1rem;
    color: ${(p) => p.theme.colors.secundary};
    margin-bottom: 10px;

    @media screen and (max-width: 500px) {
      max-width: 320px;
    }
  }

  .stats {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 20px;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      gap: 4px;
      font-size: 0.8rem;
      color: ${(p) => p.theme.colors.secundary};
    }

    @media screen and (max-width: 500px) {
      gap: 10px;
      justify-content: center;
      text-align: center;
    }
  }
`;

export const ActionButtons = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;

  @media screen and (max-width: 500px) {
    justify-content: center;
  }
`;

export const LikeButton = styled.button`
  background: transparent;
  height: 32px;
  width: 32px;
  border-radius: 50%;

  svg {
    transition: all 0.3s ease;
    width: 22px;
    height: 22px;
    color: ${(p) => p.theme.colors.secundary};
  }

  :hover {
    svg {
      fill: ${(p) => p.theme.colors.red};
    }
  }
`;
