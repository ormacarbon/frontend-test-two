import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: ${(props) => props.theme.spacing.md};
  background: ${(props) => props.theme.colors.gray500};
  border: 1px solid ${(props) => props.theme.colors.gray400};
  img {
    width: 100%;
    height: 100%;
    max-width: 475px;
    max-height: 475px;
  }
`