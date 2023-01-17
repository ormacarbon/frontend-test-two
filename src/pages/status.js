import { FormSearchItem } from "../components/formSearchItem";
import { Header } from "../components/header";
import { GlobalStyle } from "../styles/global";



export default function Status() {


    const handleKeyPressInput = (event) => {
        event.preventDefault();
        props.handleKeyPressInput()
    }


    return (
        <>
            <GlobalStyle />
            <Header />
            <FormSearchItem
                label="Buscar Status Code"
                placeholder="Digite o código do status"
                handleKeyPressInput={handleKeyPressInput}
            />
        </>


    )

}