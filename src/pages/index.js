import { useEffect, useState } from "react";
import { FormSearchItem } from "../components/formSearchItem";
import { Header } from "../components/header";
import { Pagination } from "../components/pagination";
import { SectionProducts } from "../components/sectionProducts";
import { api } from "../services/api";
import { GlobalStyle } from "../styles/global";
import Router from "next/router";


export default function Home(props) {


  const [dataProducts, setdataProducts] = useState(props.dataProducts)
  const [productName, setPoductName] = useState(props.name)

  console.log(props.error);


  useEffect(() => {
    setdataProducts(props.dataProducts)
    setPoductName(props.name)
  }, [props.name])

  const handleKeyPressInput = () => {
    const input = document.getElementById("input_search_products")
    Router.push(`/?name=${input.value}`)
  }

  return (
    <div>
      <GlobalStyle />
      <Header />
      <FormSearchItem
        label="Buscar produtos"
        handleKeyPressInput={handleKeyPressInput}
        placeholder="Digite o nome do produto"

      />
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
