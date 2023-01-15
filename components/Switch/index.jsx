import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import { Input, SwitchContainer, ToggleButton } from "./styles"
import {FaSun, FaMoon } from 'react-icons/fa'

const icons = {
    light: <FaSun color="#dbab17"/>,
    dark: <FaMoon color="#fff"/> 
}
export default function Switch(){
    const {theme, toggleTheme} = useContext(ThemeContext)

    return(
        <SwitchContainer>
            
            <Input id="toggletheme" type="checkbox" onChange={toggleTheme} checked={theme === "light" ? true : false}/>
            <ToggleButton htmlFor="toggletheme">
                {icons[theme]}
            </ToggleButton>
        </SwitchContainer>
    )
}