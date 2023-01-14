import styled from "styled-components";

export const SideBar = styled.nav`
  background: ${ props => props.theme.colors.backgroundHeader };
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  height: 100vh;
  justify-content: space-around;
  padding: 0 1rem;
  width: 20%;
  z-index: 1;
`;

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2rem 1rem;
`;

export const InputSearchDiv = styled.div`
  border-radius: 5px;
  display: flex;
  width: 100%;

  input {
    border: none;
    border-radius: 5px 0 0 5px;
    outline: none;
    padding: 0.75rem 0.5rem;
    width: 80%;
  }

  &:placeholder {
    padding: 0.5rem;
  }

  button {
    align-items: center;
    background: ${ props => props.theme.colors.primary };
    border-radius: 0 5px 5px 0 ;
    border: none;
    color: ${ props => props.theme.colors.fontPrimary };
    cursor: pointer;
    display: flex;
    justify-content: center;
    outline: none;
    width: 20%;

    img {
      filter: invert(100%);
      width: 1rem;
    }
  }
`;

export const WeatherSideBarStyle = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: auto;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div:last-child {
      margin-top: 0;
    }

    h3 {
      color: ${ props => props.theme.colors.fontSideBarTemperature };
      font-size: 4rem;
      font-weight: 500;
      text-align: start;
      Width: 100%;
    }

    p {
      border-bottom: 1px solid #d8d8d8;
      color: ${ props => props.theme.colors.fontSideBarTemperature };
      font-size: 1rem;
      font-weight: 500;
      padding-bottom: 2rem;
      text-align: start;
      Width: 100%;
    }

    div {
      align-items: center;
      display: flex;
      justify-content: flex-start;
      flex-direction: row;
      margin-top: 1.5rem;
      position: relative;
      transform: translateX(-5%);
      width: 100%;

      img {
        height: auto;
        width: 3rem;
      }

      p {
        border: none;
        color: ${ props => props.theme.colors.fontSideBarTemperature };
        font-size: 1rem;
        font-weight: 500;
        padding: 0;
      }
    }

    div:last-child {
      img {
        filter: ${ props => props.theme.colors.humidityIcon };
      }
    }
  }
`;

export const Footer = styled.footer`
  align-items: center;
  border: none;
  color: ${ props => props.theme.colors.fontSideBarTemperature };
  display: flex;
  justify-content: flex-start;
  margin-top: auto;
  position: fixed;
  bottom: 0;
  margin-bottom: 1rem;

  img {
    cursor: pointer;
    filter: ${ props => props.theme.colors.humidityIcon };
    height: auto;
    margin-right: 0.5rem;
    width: 1.5rem;
  }
`;