import Link from "next/link";
import { Container, Title, SubTitle } from "../src/styles/home";


export default function Home() {  
  return (
    <Container>
      <Title>Saga - A Song of Ice and Fire API</Title>
      <SubTitle>Click <Link href="/gotItems?page=2">here</Link> to go to Characters List.</SubTitle>
    </Container>
  )
}
