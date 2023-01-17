import { ProductItem } from "../productItem"
import { Container } from "./style"


const SectionProducts = (props) => {
    return (
        <Container>
            {
                props.products && props.products.map((product) => {
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