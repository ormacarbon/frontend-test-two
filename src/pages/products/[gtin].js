import { Header } from "../../components/header";
import { PageProduct } from "../../components/pageProduct";
import { api } from "../../services/api";
import { GlobalStyle } from "../../styles/global";


export default function Products(props) {
    return (
        <>
            <GlobalStyle />
            <Header />
            <PageProduct data={props.dataProduct} />
        </>
    )
}


export async function getServerSideProps(context) {

    let dataProduct = null;
    let { gtin } = context.query
    let error = null


    if (gtin) {
        const { data } = await api.get(`/gtins/${gtin}`)

        if (data.message) {
            error = data.message
        }

        if (data) {
            dataProduct = data
        }
    }

    return {
        props: {
            dataProduct,
            error
        }
    }
}