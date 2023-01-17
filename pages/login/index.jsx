import { useSession, signIn } from "next-auth/react";
import { Container, DescriptionContainer, LoginContainer, Text, Title, TextFilled, LoginButton, Description } from "../../styles/Login/styles.js";
import {FaGithub} from 'react-icons/fa'
import Router from "next/router";
import { useEffect } from "react";

export default function Login(){
    const {data: session, status } = useSession()

    
    if(session || status === "authenticated"){
        Router.push("/")
        return
    }
    


    function handleLogin(){ 
        signIn('github', { callbackUrl: process.env.NEXTAUTH_URL/*"http://127.0.0.1:3000"*/})
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
