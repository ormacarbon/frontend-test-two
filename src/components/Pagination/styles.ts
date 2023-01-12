import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 13rem;
  height: 3rem;
  margin-top: 2rem;

  p {
    color: black;
  }
`
export const CurrentPageButton = styled.button`
  background: ${(props) => props.theme['purple-600']};
  border-radius: 3px;
  width: 38px;
  height: 38px;
  color: white;
  border: none;
`

export const Button = styled.button`
  width: 38px;
  height: 38px;
  background: ${(props) => props.theme['purple-300']};
  color: ${(props) => props.theme['white']};
  border-radius: 3px;
  border: none;
`
