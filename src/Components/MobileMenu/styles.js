import styled from "styled-components"

export const MobileMenu = styled.div`
    position: fixed;
    width: 70%;
    height: 100vh;
    background-color: ${props=>props.theme.primaryBack};
    box-shadow: 35px 43px 79px -14px rgba(0,0,0,0.32);
`
export const NavigationMobile = styled.nav`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    ul li{
        margin: 3rem;
    }
    ul li a{
        font-size: 2rem;
        color: ${props=>props.theme.primary}
    }

`
