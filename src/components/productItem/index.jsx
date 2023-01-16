import { titleCase } from "../../utils/titleCase"
import { Container } from "./style"

const productImageURL = "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTTHi0yE-Rui-kxpDR-CUPsWkEf4CC-uUaojmpPY7x2EaWhLe12tohtHezL7cyiGtPCo8FoOckqJaD2Dj80zQt-XgufS_FYDRTcvabgcWD-0qjcl6FR0Zdz&usqp=CAE"

const ProductItem = (props) => {

    return (
        <Container>
            <div>
                <div>
                    <img src={props.thumbnail ? props.thumbnail : productImageURL} />
                </div>
                <div>
                    <a id="product_name" href="teste" > {titleCase(props.name)} </a>

                    <p > {props.brand ? props.brand : "Não informado"} </p>
                </div>
                <div id="div_see_more">
                    <a href="see_more"> ver mais</a>
                </div>
            </div>
        </Container>
    )
}
export { ProductItem }