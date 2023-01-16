import { FormSearchProducts } from "../components/formSearchProducts";
import { Header } from "../components/header";
import { SectionProducts } from "../components/sectionProducts";
import { GlobalStyle } from "../styles/global";

export default function Home() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <FormSearchProducts />
      <SectionProducts />
    </div>
  )
}
