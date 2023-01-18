import Link from "next/link"
import { useContext } from "react";
import { ThemeContext } from "../../contextx/themeContext";
import { Container } from "./style"

const defaultThumbnailURL = "https://cosmos.bluesoft.com.br/assets/product-placeholder-ce4926921923d1e9bc66cd0e1493b49b.png"

const PageProduct = (props) => {

    const { theme } = useContext(ThemeContext);

    return (
        <Container theme={theme}>
            <div className="header_product">
                <h1>{props.data?.description}</h1>
                <div>
                    <img src={props.data.thumbnail ? props.data.thumbnail : defaultThumbnailURL} />
                </div>
                <p>GTIN/EAN: {props.data?.gtin}</p>
            </div>
            <div className="footer_product">
                <p>
                    NCM: {props.data?.ncm?.full_description}
                </p>
                < Link href="/">
                    Voltar ao inicio
                </Link>
            </div>
        </Container>
    )
}
export { PageProduct }