import Header from "../components/Header";
import ListUsers from "../components/ListUsers";
import Sidebar from "../components/Sidebar";
import { Container, Content, Main } from "../styles/App/style";

export default function Home() {
  return (
    <Container>
      <Header currentPage="home"/>
      <Main>
        <Content>
          <Sidebar currentPage="home"/>
          <ListUsers/>
        </Content>
      </Main>
    </Container>
  )
}
