import { Container } from "./style"
import { BsSearch } from "react-icons/bs";

const FormSearchProducts = () => {
    return (
        <Container>
            <div>
                <h1> Buscar produtos </h1>
                <div>
                    <input type="search" placeholder="Digite o nome do produto" ></input>
                    <BsSearch />
                </div>
            </div>
        </Container>
    )
}

export { FormSearchProducts }