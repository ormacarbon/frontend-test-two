import React from 'react'
import {InputContainer,InputStyled} from './style'

const Input = ({leftIcon, ...rest}) => {
  return (
    <React.Fragment>
        <InputContainer>
            {leftIcon}
            <InputStyled {...rest}/>

        </InputContainer>
    </React.Fragment>
    )
}

export default Input