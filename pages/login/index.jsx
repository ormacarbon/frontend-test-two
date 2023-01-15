import { useContext } from "react";
import { Container, DescriptionContainer, LoginContainer, Text, Title, TextFilled, LoginButton, Description } from "./styles";
import { ThemeContext } from "../../context/ThemeContext";
import {FaGithub} from 'react-icons/fa'
import GitHubProvider from "next-auth/providers/github";

export default function Login(){
    const {theme, toggleTheme} = useContext(ThemeContext)

    function handleLogin(){ 
    }
    return (
        <Container>
            <LoginContainer>
                <Title>Bem vindo ao <TextFilled>DevKut</TextFilled></Title>
                <LoginButton onClick={handleLogin}>
                    <FaGithub size={20}/>
                    Login com o GitHub
                </LoginButton>
            </LoginContainer>
            <DescriptionContainer>
                <Text>DevKut</Text>
                <Description>
                    Conecte-se com outros devs e faça networking.
                </Description>
            </DescriptionContainer>
        </Container>
    )
}