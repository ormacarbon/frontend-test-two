import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
`

export const Title = styled.h1`
  color: ${props => props.theme.colors.textColor};

  display: block;
  margin: 0 auto;
  font-size: 1.5rem;
`;