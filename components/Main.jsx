import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => props.justifyContent};
  column-gap: 20px;
  align-items: center;
  margin-top: 30px;
`;