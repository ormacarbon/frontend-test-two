import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${props => props.theme.spacing.xs};
  font-size: ${ props => props.theme.fonts.size.sm};
  font-weight: 600;
  width: 4rem;
  height: 1.25rem;
  background: ${ props => props.theme.types[props.type].color};
  color: ${ props => props.theme.types[props.type].text};
`