import { Container } from "./style"
import { BsSearch } from "react-icons/bs";
import Router from "next/router";
import { ThemeContext } from "../../contextx/themeContext";
import { useContext } from "react";

const FormSearchItem = (props) => {

    const { theme } = useContext(ThemeContext);


    const handleKeyPressInput = (event) => {
        event.preventDefault();
        props.handleKeyPressInput()
    }

    return (
        <Container theme={theme}>
            <div>
                <h1> {props.label}</h1>
                <form onSubmit={handleKeyPressInput}>
                    <div >
                        <input
                            id="input_search_items"
                            type="text"
                            placeholder={props.placeholder}
                        />
                        <BsSearch />
                    </div>
                </form>

            </div>
        </Container >
    )
}

export { FormSearchItem }