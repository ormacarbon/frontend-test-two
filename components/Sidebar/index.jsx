import Link from "next/link";
import Switch from "../Switch";
import { Avatar, AvatarContainer, AvatarImage, Divider, NavMenu, SidebarContainer, UserInfo, UserName } from "./styles";
import menuItems from "../../utils/menuItems";
import { BsPatchCheckFill  } from "react-icons/bs"
import NavMenuItems from "../NavMenuItems";
export default function Sidebar({ currentPage }){
    return (
        <SidebarContainer>
            <AvatarContainer>
                <Avatar>
                    <AvatarImage src="https://github.com/LuizProject46.png"/>
                </Avatar>
                <UserInfo>
                    <UserName><BsPatchCheckFill size={24} color="#e22b8d"/> Luiz gustavo</UserName>
                </UserInfo>
                <Switch/>
                <Divider></Divider>
            </AvatarContainer>
            <NavMenuItems menuItems={menuItems} currentPage={currentPage}/>

        </SidebarContainer>
    )
}