import Link from "next/link"
import { Container } from "./style"
import { AiFillHome } from "react-icons/ai";
import { useContext } from "react";
import { ThemeContext } from "../../contextx/themeContext";
import { ThemeMode } from "../themeMode";


const Header = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <Container theme={theme}>
            <ThemeMode />
        </Container>
    )
}
export { Header }