import { Container } from "./style"

const productImageURL = "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTTHi0yE-Rui-kxpDR-CUPsWkEf4CC-uUaojmpPY7x2EaWhLe12tohtHezL7cyiGtPCo8FoOckqJaD2Dj80zQt-XgufS_FYDRTcvabgcWD-0qjcl6FR0Zdz&usqp=CAE"

const ProductItem = () => {
    return (
        <Container>
            <div>
                <div>
                    <img src={productImageURL} />
                </div>
                <div>
                    <a id="product_name" href="teste" >Shampoo Escurecedor de Cabelo Gradual Men | Menfirst</a>

                    <p >Menfirst </p>
                </div>
                <div id="div_see_more">
                    <a href="see_more"> ver mais</a>
                </div>
            </div>
        </Container>
    )
}
export { ProductItem }