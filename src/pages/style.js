import styled from "styled-components";

export const ContainerHome = styled.div`
  padding-top: 70px;
  background-color: ${(props) => props.theme.background};
  color: ${props => props.theme.text};
`
export const Cards = styled.div`
  width: 100%;
  max-width: 95vw;
  margin: 50px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`