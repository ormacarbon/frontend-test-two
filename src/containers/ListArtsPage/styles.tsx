import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: ${({theme})=> theme.spacings.large};
  margin-bottom: ${({theme}) => theme.spacings.xLarge};
`

