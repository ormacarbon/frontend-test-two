import styled from "styled-components";

export const LisUsersContainer = styled.div`
    width: 100%;
    height: auto;
`

export const ListUsersItem = styled.div`
    width: 100%;
    height: 100px;
    margin: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    border: 1px solid ${props => props.theme.secondary};
    border-top-color: ${props => props.theme.isDark ? props.theme.black : props.theme.gray};

    @media (max-width: 768px){
        padding: 0.5rem;
    }
`

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0.3rem;
`

export const UserAvatar = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
`

export const Avatar = styled.img`
    object-fit: contain;
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

export const UserDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & > div {
        display: flex;
        align-items: center;
    }
`

export const Username = styled.a`
    font-size: 1.12rem;
    font-weight: 400;
    text-decoration: none;
    color: ${props => props.theme.isDark ? props.theme.lightGray : props.theme.black};
    margin-right: 0.6rem;
    cursor: pointer;
    max-width: 120px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all 200ms ease-in-out;

    &:hover{
        color: ${props => props.theme.gray};
    }

    @media (max-width: 768px){
        font-size: 1rem;
    }
`

export const Nickname = styled.span`
    font-size: 1rem;
    color: ${props => props.theme.isDark ? props.theme.gray : props.theme.lightBlack};
`

export const Followers = styled.span`
    font-size: 0.8rem;
    color: ${props => props.theme.isDark ? props.theme.gray : props.theme.lightBlack};
    margin: 0.2rem;
`

export const TextBold = styled.b`
`

export const FollowUser = styled.div`
    width: 100%;
    max-width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        max-width: 300px;
        margin-bottom: 1rem;
        margin: 0 auto;
    }
`

export const FollowButton = styled.button`
    width: 100%;
    height: 30px;
    border-radius: 0.2rem;
    cursor: pointer;
    border: none;
    outline: none;
    background:  ${props => props.theme.isDark ? props.theme.black : props.theme.lightGray};
    color:  ${props => props.theme.isDark ? props.theme.lightGray : props.theme.black};
    transition: all 200ms ease-in-out;

    &:hover{
        background:  ${props => props.theme.isDark ? props.theme.lightBlack : props.theme.gray};
    }


`

export const Alert = styled.div`
    display: flex;
    gap: 1rem;
    padding: 0.3rem 0.6rem;
    border-radius: 0.2rem;
    width: 100%;
    border: 0.12rem solid ${props => props.theme.isDark ? props.theme.lightBlack : props.theme.gray};

    & > p {
        color: ${props => props.theme.isDark ? props.theme.gray : props.theme.lightBlack};
    }
`

export const Title = styled.h1`
    font-size: 1.6rem;
    color: ${ props => props.theme.isDark ? props.theme.white : props.theme.black};
`
