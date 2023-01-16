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
`

export const SubTitle = styled.span`
  display: block;
  margin-top: 1rem;
  color: ${props => props.theme.colors.textColor};

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.offColor};
  }

`