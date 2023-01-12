import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-radius: 4px;
  width: 12rem;
  height: auto;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px;
`
export const Title = styled.h4`
  color: ${(props) => props.theme['gray-900']};
  font-weight: 700;
`
export const Date = styled.p`
  color: ${(props) => props.theme['gray-300']};
  font-weight: 700;
  font-size: 0.8rem;
`
