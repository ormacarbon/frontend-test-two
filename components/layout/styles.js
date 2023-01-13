import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  height: 100vh;
  overflow: hidden;

  main {
    flex: 1;
    overflow-y: scroll;
    padding: ${props => props.theme.spacing['2xl']}  ${props => props.theme.spacing['3xl']};
  }
`