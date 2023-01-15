import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;

  @media (max-width: 620px) {
    flex-direction: column;
    font-size: 14px;
  }
`;