import { Container } from "./style"


const PageProduct = () => {
    return (
        <Container>
            <div className="header_product">
                <h1>LEITE FERMENTO DANONINHO LEITE</h1>
                <div>
                    <img src="https://cdn-cosmos.bluesoft.com.br/products/7896060102210" />
                </div>
                <p>GTIN/EAN: 7891025301479</p>
            </div>
            <div className="footer_product">
                <p>
                    NCM: 0403.90.00 - Leite e laticínios; ovos de aves; mel natural; produtos comestíveis
                    de origem animal, não especificados nem compreendidos em outros Capítulos - Leitelho,
                    leite e creme de leite coalhados, iogurte, quefir e outros leites e cremes de leite
                    fermentados ou acidificados, mesmo concentrados ou adicionados de açúcar ou de outros
                    edulcorantes, ou aromatizados ou adicionados de frutas ou de cacau - Outros
                </p>
            </div>
        </Container>
    )
}
export { PageProduct }