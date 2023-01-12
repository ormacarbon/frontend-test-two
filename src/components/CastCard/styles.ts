import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  border-radius: 4px;
  width: 12rem;
  height: auto;
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
`
export const Name = styled.h3`
  color: ${(props) => props.theme['gray-900']};
  font-weight: 700;
  padding: 10px;
`
export const Character = styled.p`
  color: ${(props) => props.theme['gray-300']};
  font-weight: 400;
  font-size: 1rem;
`
