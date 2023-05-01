import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  &.is-invalid {
    input {
      border-color: #FF2121;
    }
  }
`

export const Label = styled.label`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #1C1C1C;
  margin-bottom: 9px;
`

export const Input = styled.input`
  border: 1px solid #000;
  height: 38px;
  border-radius: 6px;
  outline: none;
  width: 100%;
  padding: 0 15px;

  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #1C1C1C;

  &::placeholder {
    color: #9C9C9C
  }
`

export const InvalidFeedback = styled.span`
  width: 100%;
  padding: 5px 0;

  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #FF2121;
`
