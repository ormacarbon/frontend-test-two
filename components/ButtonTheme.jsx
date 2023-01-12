import { useContext } from 'react';
import {ThemeContext} from '/pages/_app.js'

import styled,{ useTheme } from 'styled-components';


export function ButtonTheme() {
  const theme = useTheme()
  const context = useContext(ThemeContext)

    return <Button onClick={()=>{
      context.setDark(!context.dark)
    }}>{context.dark? 'Light' : 'Dark'}</Button>;
  }



  const Button = styled.button`
    min-width: 50px;
    color: ${props => props.theme.backgroundColor};
    padding: 5px;
    background: ${props => props.theme.backgroundColor};
    border-radius: 8px;
    border: none;
    color: ${(props) => props.theme.color};
    font-size: 14px;
    font-weight: bold;

  `

  