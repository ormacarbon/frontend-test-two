import { Container } from "./style"
import { BsSearch } from "react-icons/bs";
import Router from "next/router";

const FormSearchItem = (props) => {

    const handleKeyPressInput = (event) => {
        event.preventDefault();
        props.handleKeyPressInput()
    }

    return (
        <Container>
            <div>
                <h1> {props.label}</h1>
                <form onSubmit={handleKeyPressInput}>
                    <div >
                        <input
                            id="input_search_products"
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