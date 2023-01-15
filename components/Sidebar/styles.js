import styled from "styled-components";

export const SidebarContainer = styled.aside`
    width: 100%;
    max-width: 300px;
    height: 500px;
    background: ${ props => props.theme.isDark ? props.theme.black : props.theme.white};
    border: 1px solid ${ props => !props.theme.isDark ? props.theme.lightGray : props.theme.black};
    border-radius: 1.5rem;
    position: sticky;
    top: 1rem;

    @media (max-width: 768px) {
        & {
            display: none;
        }
    }
` 


export const AvatarContainer = styled.div`
    width: 100%;
    max-width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
` 


export const Avatar = styled.div`
    width: 100%;
    max-width: 154px;
    height: 154px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.2rem;
    background: ${props => props.theme.primary};
    padding: 0.15rem;
` 

export const AvatarImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: contain;
`


export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
`

export const UserName = styled.span`
    color: ${props => props.theme.isDark ? props.theme.white : props.theme.black};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.4rem;
    font-weight: 400;
`
export const UserNickName = styled.span`
    color: ${props => props.theme.isDark ? props.theme.gray : props.theme.black};
    font-size: 0.85rem;
    font-weight: 200;
`


export const Divider = styled.div`
    background: ${props => props.theme.isDark ? props.theme.lightBlack : props.theme.lightGray};
    width: 70%;
    height: 0.2px;
    margin-top: 2rem;
`