import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
`

export const LoginContainer = styled.div`
    width: 40%;
    height: 100vh;
    background-color: ${props => props.theme.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: all 50ms ease-in-out;

    @media (max-width: 768px) {
       width: 100%;
    }
`
export const DescriptionContainer = styled.div`
    width: 60%;
    height: 100vh;
    background-color: ${props => props.theme.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 768px) {
        display: none;
    }
`

export const Text = styled.span`
    font-size: 3.5rem;
    font-weight: 400;
    color:  ${props => props.theme.white};
`

export const Title = styled.h1`
    font-size: 1.4rem;
    font-weight: 300;
    color: ${props => props.theme.isDark ? props.theme.white : props.theme.black};
`

export const TextFilled = styled.span`
    font-size: 1.4rem;
    color: ${props => props.theme.primary};
    font-weight: 500;
`

export const LoginButton = styled.button`
    width: 100%;
    max-width: 200px;
    height: 40px;
    outline: none;
    border: none;
    border-radius: 0.2rem;
    background: ${props => props.theme.primary};
    color: ${props => props.theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.30rem;
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:hover{
        background: ${props => props.theme.primaryHover};
    }
`

export const Description = styled.p`
    font-size: 1.2rem;
    color: ${props => props.theme.gray}
`