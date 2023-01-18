import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../../contextx/themeContext";
import { titleCase } from "../../utils/titleCase"
import { Container } from "./style"

const productImageURL = "https://cosmos.bluesoft.com.br/assets/product-placeholder-ce4926921923d1e9bc66cd0e1493b49b.png"

const ProductItem = (props) => {

    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <Container theme={theme}>
            <div>
                <div>
                    <img
                        alt={`Imagem do produto ${props.name}`}
                        src={props.thumbnail ? props.thumbnail : productImageURL}
                    />
                </div>
                <div>
                    <a id="product_name" href={`/products/${props.gtin}`} > {titleCase(props.name)} </a>

                    <p > {props.brand ? props.brand : "Não informado"} </p>
                </div>
                <div id="div_see_more">
                    <a href={`/products/${props.gtin}`}> ver mais</a>
                </div>
            </div>
        </Container>
    )
}
export { ProductItem }