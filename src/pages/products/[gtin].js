import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";
import { Header } from "../../components/header";
import { PageProduct } from "../../components/pageProduct";
import { ThemeContext } from "../../contextx/themeContext";
import { api } from "../../services/api";
import { GlobalStyle } from "../../styles/global";


export default function Products(props) {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <>
            <Head>
                <title>
                    {props.dataProduct.description}
                </title>
            </Head>
            <GlobalStyle theme={theme} />
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