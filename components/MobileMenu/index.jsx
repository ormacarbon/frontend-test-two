import Link from "next/link";
import { Avatar, AvatarContainer, AvatarImage, MobileMenuContainer, UserInfo, UserName, UserNickName } from "./styles";
import Switch from "../Switch"
import { FaSignOutAlt } from "react-icons/fa";
import NavMenuItems from "../NavMenuItems";
import menuItems from "../../utils/menuItems";

 const newMenuItems = [
    ...menuItems,
    {
        title: "Sair",
        route: "/login",
        icon: FaSignOutAlt,
        name: "logout"

    }
 ]

export default function MobileMenu({ isOpen, currentPage }){
    return (
       <MobileMenuContainer isOpen={isOpen}>
           <AvatarContainer>
                <div>
                    <Avatar>
                        <Link href="/perfil" passHref legacyBehavior>
                            <AvatarImage src={'https://github.com/LuizProject46.png'}/>
                        </Link>
                    </Avatar>
                    <UserInfo>
                        <UserName>Luiz Gustavo</UserName>
                        <UserNickName>@LuizGustavo</UserNickName>
                    </UserInfo>
                </div>
                <div>
                    <Switch/>
                </div>
            </AvatarContainer>
            <NavMenuItems menuItems={newMenuItems} currentPage={currentPage}/>
       </MobileMenuContainer>
       
    )
}