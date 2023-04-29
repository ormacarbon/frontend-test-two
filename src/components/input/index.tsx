import React, { type FC } from 'react'
import * as C from './InputStyles'

interface Props {
  id?: string;
  className?: string;
  type?: string;
  label: string;
  placeholder: string;
  invalidFeedback?: string;
  state?: boolean;
  onChange: (newValue: string) => void;
}

const Input: FC<Props> = ({ id, className, type, label, placeholder, invalidFeedback, state, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <C.Container
      id={id || ''}
      className={`${className || ''} ${!state && state !== undefined ? 'is-invalid' : ''}`}
    >
      <C.Label>{label}</C.Label>
      <C.Input
        placeholder={placeholder}
        onChange={handleChange}
        className={!state && state !== undefined ? 'is-invalid' : ''}
        type={type || 'text'}
      />
      {(!state && state !== undefined) && <C.InvalidFeedback>{invalidFeedback || ''}</C.InvalidFeedback>}
    </C.Container>
  )
}

export default Input
