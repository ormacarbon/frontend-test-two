import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Bottom, Container, Middle, Text, Top } from './styles/styles'

export default function Library() {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        //you can put your name here to see your github page
        handleGetUserData("github");
    }, []);

    async function handleGetUserData(githubUser) {
        const response = await fetch(`https://api.github.com/users/${githubUser}`);
        const data = await response.json();
        setUserData(data);
    }

    console.log(userData)

    return (
        <Container>
            <Head>
                <title>Teste Técnico - Orma Carbon</title>
                <meta name='robots' content='index/follow' />
                <meta name='description' content='website pages' />
            </Head>
            <Top>
                <Text>Github Pages</Text>
            </Top>
            <Middle>
                <h1>Hello, <br /> {userData.name}</h1>
                <hr />
                <img src={userData.avatar_url} />
                <p>{userData.bio}</p>
                <p>{userData.blog}</p>

            </Middle>
            <Bottom>
                <ul>
                    <li><a href='/contact'>Contact</a></li>
                    <li><a href='/'>Home</a></li>
                </ul>
            </Bottom>
        </Container>
    )
}