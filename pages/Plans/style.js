import styled from "styled-components";

export const MainTerms = styled.main``;

export const DivTermsTitle = styled.div`
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

export const DivTerms = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;

  h2 {
    font-weight: 600;
    margin-bottom: 20px;
  }

  p + h2 {
    margin-top: 40px;
  }

  p {
    max-width: 75ch;
    margin-bottom: 24px;
  }
`;
