import Link from "next/link";
import Switch from "../Switch";
import { Avatar, AvatarContainer, AvatarImage, Divider, NavMenu, SidebarContainer, UserInfo, UserName } from "./styles";
import menuItems from "../../utils/menuItems";
import { BsPatchCheckFill  } from "react-icons/bs"
import NavMenuItems from "../NavMenuItems";
import { useSession } from "next-auth/react";
import Router from "next/router";
export default function Sidebar({ currentPage }){
    const {data:session, status} = useSession()

    if(!session || status === "unauthenticated"){
        Router.push("/")
        return
    }

    const {user} = session

    return (
        <SidebarContainer>
            <AvatarContainer>
                <Avatar>
                    <AvatarImage src={user.image}/>
                </Avatar>
                <UserInfo>
                    <UserName><BsPatchCheckFill size={24} color="#e22b8d"/> {user.name.split(" ").slice(0,2).join(" ")}</UserName>
                </UserInfo>
                <Switch/>
                <Divider></Divider>
            </AvatarContainer>
            <NavMenuItems menuItems={menuItems} currentPage={currentPage}/>

        </SidebarContainer>
    )
}