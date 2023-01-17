import { useSession } from "next-auth/react";
import Header from "../components/Header";
import ListUsers from "../components/ListUsers";
import Sidebar from "../components/Sidebar";
import { Container, Content, Main } from "../styles/App/style";
import Router from "next/router";
import { useEffect } from "react";


export default function Home() {
  const {data: session, status } = useSession()


  if(!session || status === "unauthenticated"){
    Router.push("/login")
    return
  }

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
