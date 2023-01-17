import Link from "next/link";
import { Avatar, AvatarContainer, AvatarImage, MobileMenuContainer, UserInfo, UserName, UserNickName } from "./styles";
import Switch from "../Switch"
import { FaSignOutAlt } from "react-icons/fa";
import NavMenuItems from "../NavMenuItems";
import menuItems from "../../utils/menuItems";
import { useSession } from "next-auth/react";

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
    const {data:session, status} = useSession()
    const {user} = session

    return (
       <MobileMenuContainer isOpen={isOpen}>
           <AvatarContainer>
                <div>
                    <Avatar>
                        <Link href="/perfil" passHref legacyBehavior>
                            <AvatarImage src={user.image}/>
                        </Link>
                    </Avatar>
                    <UserInfo>
                        <UserName>{user.name.split(" ").slice(0,2).join(" ")}</UserName>
                        <UserNickName>{user.email}</UserNickName>
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