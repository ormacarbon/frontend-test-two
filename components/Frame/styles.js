import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: ${(props) => props.theme.spacing.md};
  background: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.border};
  transition: background 0.3s, border 0.3s; 
  img {
    width: 100%;
    height: auto;
    max-width: 475px;
  }
`