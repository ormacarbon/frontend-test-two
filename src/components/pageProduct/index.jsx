import { Container } from "./style"

const defaultThumbnailURL = "https://cosmos.bluesoft.com.br/assets/product-placeholder-ce4926921923d1e9bc66cd0e1493b49b.png"

const PageProduct = (props) => {

    return (
        <Container>
            <div className="header_product">
                <h1>{props.data?.description}</h1>
                <div>
                    <img src={props.data.thumbnail ? props.data.thumbnail : defaultThumbnailURL} />
                </div>
                <p>GTIN/EAN: {props.data?.gtin}</p>
            </div>
            <div className="footer_product">
                <p>
                    NCM: {props.data?.ncm.full_description}
                </p>
            </div>
        </Container>
    )
}
export { PageProduct }