import { useSession } from "next-auth/react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { Container, Content, Main } from "../../styles/App/style";
import Router from "next/router";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { Avatar, AvatarContainer, AvatarImage, Bio, Description, Followers, FollowersContent, ProfileContainer, Text, TextCount, Title, UserInfo, UserName } from "../../styles/Profile/styles.js";
import Loading from "../../components/Loading";
import { BsPatchCheckFill } from "react-icons/bs";

export default function Profile(){
    const {data: session, status } = useSession()
    const [user, setUser]   = useState(null)

    function getProfile() {
        api.get(`user`, {
            headers: {
                "Accept": "application/vnd.github+json",
                "Authorization": `Bearer ${session.accessToken}`
            }
        })
        .then( res => {
            setUser(res.data)
        })
    }
    

    useEffect(() => {     
        if(!session || status === "unauthenticated"){
            Router.push("/login")
            return
        }
        getProfile()
    }, [])
    

    return (
        <Container>
            <Header currentPage="perfil"/>
            <Main>
                <Content>
                    <Sidebar currentPage="perfil"/>
                    <ProfileContainer>
                    {!user  && (
                        <Loading/>
                    )}

                    {user && (
                        <>
                        <AvatarContainer>
                            <Avatar>
                                <AvatarImage src={user.avatar_url}/>
                            </Avatar>
                            <UserInfo>
                                <UserName><BsPatchCheckFill size={24} color="#e22b8d"/> {user.name.split(" ").slice(0,2).join(" ")}</UserName>
                            </UserInfo>
                        </AvatarContainer>
                        <Bio>
                            <Title>Bio</Title>
                            <Description>
                                {user.bio}
                            </Description>
                        </Bio>
                        <Followers>
                            <Title>Seguidores</Title>
                            <FollowersContent>
                                <Text>
                                    <TextCount>{user.following}</TextCount> seguindo
                                </Text>
                                <Text>
                                <TextCount>{user.followers}</TextCount> seguidores
                                </Text>
                            </FollowersContent>
                        </Followers>
                        </>
                    )}
                    </ProfileContainer>
                </Content>
            </Main>
        </Container>
    )
}
