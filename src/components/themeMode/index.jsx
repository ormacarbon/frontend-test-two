import { Container } from "./style"
import { BsFillSunFill, BsMoonFill } from "react-icons/bs"
import { useContext } from "react"
import { ThemeContext } from "../../contextx/themeContext"


const ThemeMode = () => {

    const { mode, setMode } = useContext(ThemeContext)

    const handleCheckboxChange = () => {
        mode === "ligth" ? setMode("dark") : setMode("ligth")
    }

    return (
        <Container>
            <input id="input_theme_mode" type="checkbox" onChange={handleCheckboxChange} />
            <label htmlFor="input_theme_mode">
                <i> <BsFillSunFill /> </i>
                <i> <BsMoonFill /> </i>
                <div></div>
            </label>
        </Container>
    )
}
export { ThemeMode }