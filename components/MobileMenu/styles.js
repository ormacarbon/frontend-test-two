import styled from "styled-components";

export const MobileMenuContainer = styled.aside`
    width: 300px;
    max-width: 300px;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    margin-left: ${props => props.isOpen ? '0' : '-300px'};
    z-index: 2;
    border-right: 0.08rem solid ${props => props.theme.isDark ? props.theme.lightBlack : props.theme.gray};
    background: ${props => props.theme.secondary};
    transition: all 200ms ease-in-out;

    @media (min-width: 768px) {
        margin-left: -300px;
    }
`


export const AvatarContainer = styled.nav`
    width: 100%;
    max-width: 400px;
    height: 50px;
    display:flex;
    align-items:center;
    justify-content: flex-start;
    gap: 1rem;
    padding: 1rem;
    margin-top: 0.6rem;
    flex-direction: column;

    & > div{
        display: flex;
        width: 100%;
        align-items: center;
        gap: 1rem;
    }

    & div:nth-child(2n){
        justify-content: center;
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