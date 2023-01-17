import styled, { ThemeProvider } from "styled-components"
import { themeDarkMode, themeLightMode } from '../../theme/theme'
import { BiBookHeart } from 'react-icons/bi'
import { useRecoilValue } from "recoil"
import { themeSwitchState } from "../../state/atom"

export default function Footer(){
   const lightSwitchState = useRecoilValue(themeSwitchState)
    return(
        <ThemeProvider theme={lightSwitchState == true? themeLightMode: themeDarkMode}>
        <StyledFooter>
            <h1 className="title">
               Cahier
               <span className="highLight" >
                  Secret
                  <BiBookHeart className="icon" />
               </span>
            </h1>
        </StyledFooter>
        </ThemeProvider>
    )
}

const StyledFooter = styled.footer`

display: flex;
flex-direction: column;
align-items: center;
padding: 1rem;
text-align: center;
background-color: ${p => p.theme.colors.primaryColor};
color: ${(p) => p.theme.colors.secondaryFontColor};

h1{
   font-weight: ${p => p.theme.typography.fontWeight.light};
   .icon{
      display: inline;
   }
   .highLight{
   color: ${(p) => p.theme.colors.secondaryColor};
   }
}


`