import { useEffect, useState } from "react";
import { FormSearchProducts } from "../components/formSearchProducts";
import { Header } from "../components/header";
import { Pagination } from "../components/pagination";
import { SectionProducts } from "../components/sectionProducts";
import { api } from "../services/api";
import { GlobalStyle } from "../styles/global";

export default function Home(props) {

  console.log("Error:", props.error);

  const [dataProducts, setdataProducts] = useState(props.dataProducts)
  const [productName, setPoductName] = useState(props.name)

  const mocks = {
    exemplo: require("../mocks/products.json")
  }

  useEffect(() => {
    setdataProducts(props.dataProducts)
    setPoductName(props.name)
  }, [props.name])

  console.log(props.name)


  return (
    <div>
      <GlobalStyle />
      <Header />
      <FormSearchProducts />
      {
        dataProducts && (
          <>
            <SectionProducts products={dataProducts?.products} />

            <Pagination
              pageCount={dataProducts?.total_pages}
              setdataProducts={setdataProducts}
              product_name={productName}
            /></>
        )
      }

    </div>
  )
}

export async function getServerSideProps(context) {


  let dataProducts = null;
  let { name } = context.query
  let error = null

  if (!name) {
    name = null;
  }

  if (name) {
    const { data } = await api.get(`/products?query=${name}`)

    if (data.message) {
      error = data.message
    }

    if (data.products) {
      dataProducts = data
    }
  }

  return {
    props: {
      dataProducts,
      name,
      error
    }
  }
}
