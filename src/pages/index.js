import { FormSearchProducts } from "../components/formSearchProducts";
import { Header } from "../components/header";
import { Pagination } from "../components/pagination";
import { SectionProducts } from "../components/sectionProducts";
import { api } from "../services/api";
import { GlobalStyle } from "../styles/global";

export default function Home(props) {

  const mocks = {
    exemplo: require("../mocks/products.json")
  }




  return (
    <div>
      <GlobalStyle />
      <Header />
      <FormSearchProducts />
      <SectionProducts products={mocks.exemplo.products} />
      <Pagination pageCount={mocks.exemplo.total_count} />
    </div>
  )
}

///9?name=sla

export async function getServerSideProps(context) {

  const { name } = context.query

  let products = null;

  // if (name) {
  //   const { data } = await api.get(`/products?query=${name}`)
  //   products = data
  // }



  return {
    props: {
      products
    }
  }
}
