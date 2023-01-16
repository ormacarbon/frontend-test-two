import styled, { ThemeProvider } from "styled-components"
import { BiBookHeart } from 'react-icons/bi'
import Menu from "./Menu"
import SearchBar from "./Search"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { themeSwitchState } from "../../state/atom"
import Button from "../Button/Button"
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs"
import { themeDarkMode, themeLightMode } from "../../theme/theme"

export default function Header() {
   const lightSwitch = useSetRecoilState(themeSwitchState)
   const lightSwitchState = useRecoilValue(themeSwitchState)
   console.log(lightSwitch)
   return (
      <ThemeProvider theme={lightSwitchState == true? themeLightMode: themeDarkMode}>
         <StyledHeader>
         <Button
         onClick={() => {
            lightSwitch(!lightSwitchState)
            if(lightSwitchState == true){
               localStorage.setItem('darkMode', 'on')
            }else{
               localStorage.setItem('darkMode', 'off')
            }
         }}
         size={50}
         m={0.5}
         text={lightSwitchState == true? <BsFillSunFill className="icon"/>: <BsFillMoonFill className="icon"/>}
         />
            <h1 className="title">
                  Recipes
               <span className="highLight" >
                   Book
                  <BiBookHeart className="icon" />
               </span>
            </h1>
            <Menu />
            <SearchBar />
         </StyledHeader>
      </ThemeProvider>
   )
}

const StyledHeader = styled.header`

padding: 1rem;
text-align: center;
background-color: ${p => p.theme.colors.primaryColor};
color: ${(p) => p.theme.colors.secondaryFontColor};

.icon{
      display: inline;
}

h1{
   font-weight: ${p => p.theme.typography.fontWeight.light};
   .highLight{
   color: ${(p) => p.theme.colors.secondaryColor};
   }
}

`