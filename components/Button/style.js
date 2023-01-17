import styled from "styled-components";

export const ButtonLink = styled.div`
  a {
    display: inline-block;
    padding: 16px 32px;
    background: linear-gradient(#ffbf00, #f2a50c);
    border-radius: 4px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    text-transform: uppercase;
    color: var(--color-p5);
    font: 600 1.125rem/1.35 "Poppins", sans-serif;
    max-width: max-content;
  }

  a:hover {
    background: linear-gradient(#ffb60d, #e59317);
  }

  a.second {
    background: var(--color-10);
    color: var(--color-2);
  }

  a.second:hover {
    background: var(--color-9);
  }

  @media (max-width: 600px) {
    a {
      padding: 12px 16px;
      font-size: 1rem;
    }
  }
`;
