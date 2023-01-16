import styled from "styled-components";

export const MainBg = styled.main`
  background: var(--color-12);
  box-shadow: inset 0 -120px var(--color-2);
`;

export const DivIntroducao = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0px 40px;
  box-sizing: border-box;
  max-width: 1200px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  h1 {
    padding-top: 40px;
    margin-bottom: 32px;
  }

  h1 span {
    color: #ffbb00;
  }

  p {
    margin-bottom: 20px;
  }

  img {
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 48px;
    }
    p {
      font-size: 18px;
    }
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 32px;
    h1 {
      margin-bottom: 16px;
    }
    img {
      height: 300px;
      width: 100%;
    }
  }
`;

export const DivIntroducaoConteudo = styled.div`
  align-self: end;
  padding-bottom: 200px;
  @media (max-width: 800px) {
    padding-bottom: 0px;
  }
`;

export const ArticleBreweries = styled.article``;
