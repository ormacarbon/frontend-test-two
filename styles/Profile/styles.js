import styled from "styled-components";

export const ProfileContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Bio = styled.div`
    width: 90%;
    height: 200px;
    background: ${ props => props.theme.isDark ? props.theme.black : props.theme.white};
    border: 1px solid ${ props => !props.theme.isDark ? props.theme.lightGray : props.theme.black};
    border-radius: 1.5rem;
    padding: 0.6rem 2rem;

    @media (max-width: 768px){
        &{
            border: none;
            width: 100%;
            background: transparent;
        }
    }
`

export const Title = styled.h1`
    font-size: 1.6rem;
    color: ${ props => props.theme.isDark ? props.theme.white : props.theme.black};
`

export const Description = styled.p`
    font-size: 1rem;
    color: ${ props => props.theme.isDark ? props.theme.gray : props.theme.lightBlack};
`

export const Followers = styled.div`
    width: 90%;
    height: 228px;
    background: ${ props => props.theme.isDark ? props.theme.black : props.theme.white};
    border: 1px solid ${ props => !props.theme.isDark ? props.theme.lightGray : props.theme.black};
    border-radius: 1.5rem;
    padding: 0.6rem 2rem;
    margin-top: 2rem;

    @media (max-width: 768px){
        &{
            border: none;
            width: 100%;
            background: transparent;
        }
    }
`

export const FollowersContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;

`

export const Text = styled.span`
    font-size: 1.2rem;
    color: ${ props => props.theme.isDark ? props.theme.lightGray : props.theme.lightBlack};
`

export const TextCount = styled.span`
    font-size: 1.5rem;
    color: ${ props => props.theme.primary};
    font-weight: 400;
`

export const AvatarContainer = styled.div`
    width: 100%;
    max-width: 300px;
    display: none;
    align-items: center;
    

    @media (max-width: 768px){
        &{
            display: flex;
            justify-content: center;
            flex-direction: column;
        }
    }
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