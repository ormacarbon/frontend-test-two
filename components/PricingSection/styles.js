import styled from "styled-components";

export const Section = styled.section``;

export const PlansContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  @media screen and (max-width: 600px) {
    display: flex;
    gap: 2.5rem;
    flex-direction: column;
  }
`;
