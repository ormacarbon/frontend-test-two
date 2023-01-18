import axios from "axios";
import { FormSearchItem } from "../components/formSearchItem";
import { Header } from "../components/header";
import { GlobalStyle } from "../styles/global";



export default function Status() {

    const handleKeyPressInput = async () => {

        try {
            const input = document.getElementById("input_search_items")

            const { data } = await axios.get("https://dog.ceo/api/breeds/image/randomFetch!", {},
                {
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    },
                })
        } catch (error) {

        }
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