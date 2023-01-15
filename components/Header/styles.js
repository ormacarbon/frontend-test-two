import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 100px;
    display:flex;
    align-items:center;
    justify-content: center;
    background: ${ props => props.theme.secondary};
`

export const NavBar = styled.nav`
    width: 80%;
    height: 70px;
    display:flex;
    align-items:center;
    justify-content: space-between;
`

export const LogoContainer= styled.div`
    width: 100%;
    max-width: 300px;
    display:flex;
    align-items:center;
    justify-content: center;
`

export const LogoText = styled.span`
    font-size: 2.4rem;
    color: ${props => props.theme.primary};
    font-weight: 500;
    cursor: pointer;
`
export const ToggleMobileContainer = styled.div`
    width: 100%;
    display: none;

    @media (max-width: 768px) {
        & {
            display: flex;
            justify-content: flex-end;
        }
    }
`
export const ToggleMobileMenu = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    outline:none;
    border:none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background:  ${props => props.theme.isDark ? props.theme.black : props.theme.lightGray};
    color:  ${props => props.theme.isDark ? props.theme.lightGray : props.theme.lightBlack};
`

export const AvatarContainer = styled.nav`
    width: 100%;
    max-width: 400px;
    height: 50px;
    display:flex;
    align-items:center;
    justify-content: flex-end;
    gap: 1rem;

    @media (max-width: 768px) {
        & {
            display:none;
        }
    }
`

export const Avatar = styled.nav`
    width: 100%;
    max-width: 55px;
    height: 55px;
    border-radius: 50%;
    /* background: ${props => props.theme.primary}; */
    display: flex;
    align-items: center;
    justify-content: center;

`

export const AvatarImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: contain;
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:hover{
        border: 0.15rem solid ${props => props.theme.primary};
        opacity: 0.8;
    }
`


export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
`

export const UserName = styled.span`
    color: ${props => props.theme.isDark ? props.theme.white : props.theme.black};
    font-size: 1.2rem;
    font-weight: 400;
`
export const UserNickName = styled.span`
    color: ${props => props.theme.isDark ? props.theme.gray : props.theme.black};
    font-size: 0.85rem;
    font-weight: 200;
`


export const ButtonLogout = styled.button`
    width: 100%;
    max-width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 0.2rem;
    margin-left: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    font-size: 1.2rem;
    background:  ${props => props.theme.isDark ? props.theme.black : props.theme.secondary};
    color: ${props => props.theme.isDark ? props.theme.white : props.theme.black};
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }

`


