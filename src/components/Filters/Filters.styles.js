import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
