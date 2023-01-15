import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1180px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  max-width: 20ch;
  font-size: 4rem;

  @media (max-width: 600px) {
    text-align: center;
    font-size: 2rem;
  }
`;
