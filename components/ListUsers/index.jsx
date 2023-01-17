import Link from "next/link";
import { Alert, Avatar, FollowButton, FollowUser, Followers, LisUsersContainer, ListUsersItem, Nickname, TextBold, Title, UserAvatar, UserDescription, UserInfo, Username } from "./styles";
import { FaUsers } from "react-icons/fa"
import React, { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import api from "../../services/api";
import { useSession } from "next-auth/react";
import Loading from "../Loading";
import menuItems from "../../utils/menuItems";

const iconColor = {
    dark:  '#e7e7e7',
    light: '#252525'
}
const PER_PAGE = 15
export default function ListUsers(){
    const {theme} = useContext(ThemeContext)
    const [users, setUsers] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    const [showFooterLoader, setFooterLoader] = useState(false)
    const refLoader =  useRef()
    const {data:session} = useSession()

    async function getUserProfile(user){
        return await api.get(`users/${user}`, {
            headers: {
                "Authorization": `Bearer ${session.accessToken}`,
                "Accept": "application/vnd.github+json"
            }
        })
    }


    function getUsers(){
        api.get(`user/followers?per_page=${PER_PAGE}&page=${currentPage}&order=DESC`, {
            headers: {
                "Authorization": `Bearer ${session.accessToken}`,
                "Accept": "application/vnd.github+json"
            }
        }).then(async (res) => {
            const { data } = res
            if(data.length == 0){
                setFooterLoader(false)
                return
            }

            data.forEach( async (user) => {
                const {data } = await getUserProfile(user.login)                
                setUsers( prevUsers => [...prevUsers, data])
                setIsLoading(false)
                setFooterLoader(true)
            })
        })
    }


    useEffect(() => {
       getUsers()
    }, [currentPage])


    useEffect(() => {
        const intersectionObserver = new IntersectionObserver(entries => {
          if (entries.some(entry => entry.isIntersecting)) {
            if(users.length == 0) return
            setCurrentPage((currentValue) => currentValue + 1);
          }
        })
        if(refLoader.current){
            intersectionObserver.observe(refLoader.current);
        }
        return () => intersectionObserver.disconnect();
      }, [refLoader.current]);


    if(isLoading){
        return <Loading/>
    }

    return (
        <LisUsersContainer>
            <Title>Seguidores</Title>
            {users.length === 0 && !isLoading && (
                <Alert>
                    <p>Nenhum resultado encontrado...</p>
                </Alert>
            )}
            {users.map( (user, index) => (
                <React.Fragment key={user.id}>
                    <ListUsersItem >
                        <UserInfo>
                            <UserAvatar>
                                <Avatar src={user.avatar_url}/>
                            </UserAvatar>
                            <UserDescription>
                                <div>
                                    <Link href={user.html_url} passHref legacyBehavior>
                                        <Username target="_blank">{user.name || user.login}</Username>
                                    </Link>
                                    <Nickname>{user.login}</Nickname>
                                </div>
                                <div>
                                    <FaUsers color={iconColor[theme]} size={18}/>
                                    <Followers><TextBold>{user.followers}</TextBold> seguidores</Followers>
                                    <Followers><TextBold>{user.following}</TextBold>  seguindo</Followers>
                                </div>
                            </UserDescription>
                        </UserInfo>
                        {/* <FollowUser>
                            <FollowButton>Seguir</FollowButton>
                        </FollowUser> */}
                    </ListUsersItem>
                </React.Fragment>
            ))}           

            {showFooterLoader && users.length > 0 && (
                <Loading ref={refLoader}/>
            )}
            
        </LisUsersContainer>
    )
}