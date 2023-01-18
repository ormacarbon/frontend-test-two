import { useContext } from "react"
import { ThemeContext } from "../../contextx/themeContext"
import { Container } from "./style"
import { IoWarning } from "react-icons/io5"



const MessageBox = () => {

    const { mode } = useContext(ThemeContext)

    return (
        <Container mode={mode}>
            <span>
                <IoWarning />
            </span>
            <p>
                Nenhum resultado encontrado
            </p>
        </Container>
    )
}

export { MessageBox }