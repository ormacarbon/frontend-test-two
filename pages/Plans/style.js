import styled from "styled-components";

export const DivPlansTitle = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: var(--color-11);

  p {
    margin-bottom: 4px;
  }

  @media (max-width: 800) {
    padding-top: 40px;
    padding-bottom: 40px;

    .title p {
      font-size: 1rem;
      text-transform: lowercase;
      font-weight: 400;
    }
  }
`;

export const MainPlans = styled.article`
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
