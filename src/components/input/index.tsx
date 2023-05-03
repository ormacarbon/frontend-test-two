import React, { type FC, InputHTMLAttributes } from 'react'
import * as C from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  customClass?: string;
  label: string;
  invalidFeedback?: string;
  state?: boolean;
  change(newValue: string, inputName: string): void;
}

const Input: FC<Props> = ({ customClass, label, invalidFeedback, state, change, ...rest }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    change(event.target.value, event.target.name)
  }

  return (
    <C.Container
      className={`input-component ${customClass || ''} ${!state && state !== undefined ? 'is-invalid' : ''}`}
    >
      <C.Label>{label}</C.Label>
      <C.Input
        onChange={handleChange}
        {...rest}
      />
      {(!state && state !== undefined) && <C.InvalidFeedback>{invalidFeedback || ''}</C.InvalidFeedback>}
    </C.Container>
  )
}

export default Input
