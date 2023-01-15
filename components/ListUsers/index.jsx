import Link from "next/link";
import { Avatar, FollowButton, FollowUser, Followers, LisUsersContainer, ListUsersItem, Nickname, TextBold, UserAvatar, UserDescription, UserInfo, Username } from "./styles";
import { FaUsers } from "react-icons/fa"
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const iconColor = {
    dark:  '#e7e7e7',
    light: '#252525'
}
export default function ListUsers({ data }){
    const {theme} = useContext(ThemeContext)
    return (
        <LisUsersContainer>
            {Array.from({ length: 20}).map( (item, index) => (
                <>
                    <ListUsersItem key={index}>
                        <UserInfo>
                            <UserAvatar>
                                <Avatar src="https://github.com/LuizProject46.png"/>
                            </UserAvatar>
                            <UserDescription>
                                <div>
                                    <Link href="https://github.com/LuizProject46" passHref legacyBehavior>
                                        <Username target="_blank">Luiz Gustavo</Username>
                                    </Link>
                                    <Nickname>@luizproject46</Nickname>
                                </div>
                                <div>
                                    <FaUsers color={iconColor[theme]} size={18}/>
                                    <Followers><TextBold>233</TextBold> seguidores</Followers>
                                    <Followers><TextBold>233</TextBold>  seguindo</Followers>
                                </div>
                            </UserDescription>
                        </UserInfo>
                        <FollowUser>
                            <FollowButton>Seguir</FollowButton>
                        </FollowUser>
                    </ListUsersItem>
                </>
            ))}           
        </LisUsersContainer>
    )
}