import { ProductItem } from "../productItem"
import { Container } from "./style"


const SectionProducts = (props) => {
    console.log(props.products)
    return (
        <Container>
            {
                props.products.map((product) => {
                    console.log(product)
                    return (
                        <ProductItem
                            key={Math.random()}
                            name={String(product.description)}
                            brand={product.brand?.name}
                            thumbnail={product.thumbnail}
                        />
                    )
                })

            }

        </Container>
    )
}
export { SectionProducts }