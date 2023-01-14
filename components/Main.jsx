import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => props.justifyContent};
  align-items: center;
  margin-top: 30px;
`;