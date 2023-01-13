import styled from "styled-components";

export const Section = styled.section`
  padding: 0 2rem;
  border-left: 5px solid var(--blue);
`;

export const Title = styled.h1`
  color: var(--blue);
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Paragraph = styled.p`
  color: var(--black);
  line-height: 1.5;
  font-size: 1rem;
  & + p {
    margin-top: 1rem;
  }
`;
