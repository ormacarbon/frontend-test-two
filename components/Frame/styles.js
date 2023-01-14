import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  border-radius: ${(props) => props.theme.spacing.md};
  background-color: transparent;
  background-image: repeating-linear-gradient(45deg, transparent, transparent 30px, ${(props) => props.theme.colors.gray500} 30px, ${(props) => props.theme.colors.gray500} 60px);
  border: 1px solid ${(props) => props.theme.colors.gray400};
  img {
    width: 100%;
    height: 100%;
    max-width: 475px;
    max-height: 475px;
  }
`