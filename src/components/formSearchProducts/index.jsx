import { Container } from "./style"
import { BsSearch } from "react-icons/bs";
import Router from "next/router";

const FormSearchProducts = () => {

    const handleKeyPressInput = (event) => {
        event.preventDefault();
        const input = document.getElementById("input_search_products")

        Router.push(`/?name=${input.value}`)
    }


    return (
        <Container>
            <div>
                <h1> Buscar produtos </h1>
                <form onSubmit={handleKeyPressInput}>
                    <div >
                        <input
                            id="input_search_products"
                            type="text"
                            placeholder="Digite o nome do produto"
                        />
                        <BsSearch />
                    </div>
                </form>

            </div>
        </Container>
    )
}

export { FormSearchProducts }