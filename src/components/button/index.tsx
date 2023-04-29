import React, { type FC, ButtonHTMLAttributes} from 'react'
import * as C from './ButtonStyles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  option: 'grey' | 'salmon' | 'white';
}

const Button: FC<Props> = ({ label, option, ...rest }) => {
  return (
    <C.Button
      option={option}
      {...rest}
    >
      <C.ButtonText option={option}>{label}</C.ButtonText>
    </C.Button>
  )
}

export default Button
