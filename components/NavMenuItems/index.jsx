import Link from "next/link";
import { LinkContent, LinkMenu, NavMenu, NavMenuItem } from "./styles";
import Icon from "../Icon"
import { signOut } from "next-auth/react";
import React from "react";

export default function NavMenuItems({ menuItems, currentPage }){
    return (
        <NavMenu>
            {menuItems.map( (item, index) => (
                <React.Fragment key={item.name}>
                    <NavMenuItem>
                        {item.name === "logout" ? (
                            
                            <LinkContent onClick={() => signOut()}>
                                <Icon 
                                    index={index} 
                                    isActive={item.name === currentPage ? true : false}
                                    menuItems={menuItems}
                                />
                                <LinkMenu isActive={item.name === currentPage ? true : false}>{item.title}</LinkMenu>
                            </LinkContent>
                            
                        ): (
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
                        )}
                    </NavMenuItem>
                </React.Fragment>
            ))}
        </NavMenu>
    )
}