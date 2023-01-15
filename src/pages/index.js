import { FormSearchProducts } from "../components/formSearchProducts";
import { Header } from "../components/header";
import { GlobalStyle } from "../styles/global";

export default function Home() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <FormSearchProducts />
    </div>
  )
}
