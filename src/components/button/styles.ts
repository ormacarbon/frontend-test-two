import styled from 'styled-components'
import { ButtonHTMLAttributes} from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  option: 'grey' | 'salmon' | 'white';
}

interface ButtonTextProps {
  option: 'grey' | 'salmon' | 'white';
}

export const Button = styled.button<ButtonProps>`
  background: ${props => props.option === 'grey' ? '#EAEAEA' : props.option === 'salmon' ? '#FE6763' : props.option === 'white' ? '#fff' : '#FE6763'};
  border: 1px solid #1C1C1C;
  border-color: ${props => props.option === 'grey' || props.option === 'salmon' ? '#1C1C1C' : props.option === 'white' ? '#DB3D39' : '#1C1C1C'};
  border-radius: 6px;
  padding: 7px;
  width: 100%;
  user-select: none;
  cursor: pointer;

  &:hover {
    background: ${props => props.option === 'grey' || props.option === 'white' ? '#E1DEFF' : '#FF7C79'};
  }

  &:active {
    background: ${props => props.option === 'grey' || props.option === 'white' ? '#D3CFFF' : '#FF5955'};
  }

  &:disabled {
    &, &:hover, &:active {
      background: #CCC9C1;

      span {
        color: #1C1C1C;
      }
    }
  }
`

export const ButtonText = styled.span<ButtonTextProps>`
  color: ${props => props.option === 'grey' ? '#1C1C1C' : props.option === 'salmon' ? '#fff' : '#DB3D39'};
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
`
