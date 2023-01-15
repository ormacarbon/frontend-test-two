import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { Container, Content, Main } from "../../styles/App/style";

export default function Perfil(){
    return (
        <Container>
            <Header currentPage="perfil"/>
            <Main>
                <Content>
                    <Sidebar currentPage="perfil"/>
                </Content>
            </Main>
        </Container>
    )
}