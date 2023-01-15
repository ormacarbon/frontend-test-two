import Link from "next/link";
import { LinkContent, LinkMenu, NavMenu, NavMenuItem } from "./styles";
import Icon from "../Icon"

export default function NavMenuItems({ menuItems, currentPage }){
    return (
        <NavMenu>
            {menuItems.map( (item, index) => (
                <>
                    <NavMenuItem key={index+1}>
                        <Link href={item.route} passHref legacyBehavior>
                            <LinkContent>
                                <Icon 
                                    index={index} 
                                    isActive={item.name === currentPage ? true : false}
                                    menuItems={menuItems}
                                />
                                <LinkMenu isActive={item.name === currentPage ? true : false}>{item.title}</LinkMenu>
                            </LinkContent>
                        </Link>
                    </NavMenuItem>
                </>
            ))}
        </NavMenu>
    )
}