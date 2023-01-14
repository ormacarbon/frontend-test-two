import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: ${ props => props.theme.colors.backgroundCard };
  border-radius: 0.5rem;
  color: ${ props => props.theme.colors.fontLight };
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 0.5rem;
`;