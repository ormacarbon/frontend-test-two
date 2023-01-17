import styled from "styled-components";

export const MainBg = styled.main`
  background: var(--color-12);
  box-shadow: inset 0 -120px var(--color-2);
`;

export const DivIntroducao = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0px 40px;

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
    width: 100%;
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

export const ArticleBreweries = styled.article`
  padding-top: 60px;
  padding-bottom: 120px;
  a {
    display: block;
  }

  h2 {
    margin-bottom: 40px;
  }

  ul {
    display: flex;
    gap: 40px;
    padding: 0 20px 20px 20px;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    overflow-x: auto;
  }

  li {
    flex: 1;
    min-width: 280px;
  }

  img {
    margin-bottom: 16px;
    height: 100%;
    object-fit: cover;
  }

  h3 {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
  }

  h3::before {
    content: "";
    display: inline-block;
    background-color: var(--color-p1);
    height: 8px;
    margin-right: 8px;
    width: 12px;
    transition: width 0.2s;
  }

  a:hover h3::before {
    width: 24px;
  }

  li span {
    padding-left: 20px;
  }

  @media (max-width: 800px) {
    padding-bottom: 60px;
    ul {
      gap: 20px;
    }
  }
`;

export const ArticleBreweriesInfo = styled.article`
  background-color: var(--color-11);
  box-shadow: inset 0 80px var(--color-2), inset 0 -80px var(--color-2);
  @media (max-width: 800px) {
    box-shadow: initial;
  }
`;

export const DivBreweriesBg = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  .cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    .cover img {
      display: none;
    }
    a {
      margin-bottom: 60px;
    }
  }
`;
export const DivBreweriesContent = styled.div`
  padding-top: 160px;
  padding-bottom: 160px;

  > span {
    display: block;
    margin-bottom: 20px;
  }

  h2 {
    margin-bottom: 32px;
  }

  > p {
    margin-bottom: 20px;
  }

  a {
    margin-bottom: 80px;
  }

  .advantages {
    display: flex;
    gap: 40px;
  }

  .advantages h3 {
    margin-bottom: 8px;
    width: max-content;
  }

  .advantages img {
    width: 24px;
    margin-bottom: 8px;
  }

  @media (max-width: 800px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  @media (max-width: 600px) {
    .advantages {
      flex-direction: column;
    }
  }
`;

export const SectionBreweries = styled.section`
  padding-top: 60px;
  padding-bottom: 120px;
  h2 {
    margin-bottom: 60px;
  }

  ul {
    padding: 0 20px;
    max-width: 1400px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 0 auto;
  }

  li {
    display: flex;
    padding: 32px;
    border-left: 2px solid var(--color-3);
  }

  li:first-child,
  li:nth-child(5) {
    border-left: none;
  }

  li:nth-child(n + 5) {
    border-top: 2px solid var(--color-3);
  }

  h3 {
    margin: auto;
  }

  @media (max-width: 800px) {
    padding-bottom: 60px;
    h2 {
      margin-bottom: 20px;
    }
    li {
      display: flex;
      padding: 32px;
    }

    ul {
      grid-template-columns: repeat(2, 1fr);
    }
    li:nth-child(n + 3) {
      border-top: 2px solid var(--color-3);
    }
    li:nth-child(odd) {
      border-left: none;
    }
  }
`;

export const SectionTestimony = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: var(--color-p1);
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0px;
  }
  p::before {
    content: "“";
    font-size: 5rem;
    color: var(--color-p2);
    position: absolute;
    left: -50px;
    top: -20px;
  }
  p::after {
    content: "”";
    font-size: 5rem;
    color: var(--color-p2);
    position: absolute;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    text-align: center;
    img {
      max-height: 200px;
    }
  }
`;
export const DivTestimonyContent = styled.div`
  padding: 40px 40px 80px 80px;
  align-self: end;
  p {
    max-width: 32ch;
    font-family: "Merriweather", serif;
    font-style: italic;
    font-weight: 900;
    margin-bottom: 32px;
    position: relative;
  }
  @media (max-width: 800px) {
    padding: 40px 20px;
    justify-self: center;
  }
`;

export const ArticlePlansBg = styled.article`
  background: var(--color-11);
`;
export const DivPlans = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  h2 {
    grid-column: 1/-1;
  }

  .plans-item {
    background-color: var(--color-12);
    padding: 32px 32px 32px 60px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .plans-item h3 {
    margin-bottom: 40px;
  }

  .plans-item span {
    grid-column: 2;
    display: block;
    text-align: right;
  }

  .plans-item ul {
    grid-column: 1/-1;
    margin-bottom: 32px;
  }

  .plans-item li {
    display: flex;
    align-items: center;
    position: relative;
  }

  .plans-item li + li {
    margin-top: 20px;
  }

  .plans-item li::before {
    content: "";
    display: inline-block;
    width: 13px;
    height: 9px;
    /* background-image: url("../../assets/tick.svg"); */
    background-color: var(--color-p1);
    position: absolute;
    left: -21px;
  }

  .plans-item a {
    grid-column: 1/-1;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
