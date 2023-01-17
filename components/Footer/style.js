import styled from "styled-components";

export const FooterBg = styled.footer`
  background-color: var(--color-12);
`;
export const FooterDiv = styled.div`
  display: grid;
  grid-template-columns: 3fr 5fr 4fr;
  gap: 40px;
  padding-top: 60px;
  padding-bottom: 60px;

  h3 {
    margin-bottom: 32px;
  }

  li {
    margin-bottom: 16px;
  }

  a:hover {
    color: var(--color-0);
  }
  .copy {
    grid-column: 1/-1;
    margin-top: 40px;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    > a > img {
      display: none;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 60px;
    .copy {
      margin-top: 0px;
    }
  }
`;

export const FooterContact = styled.div`
  ul {
    margin-bottom: 32px;
  }

  li:nth-child(even)::after {
    content: "";
    display: block;
    max-width: 360px;
    height: 2px;
    background: var(--color-11);
    margin-top: 16px;
  }

  .networks {
    display: flex;
    gap: 32px;
  }
`;
