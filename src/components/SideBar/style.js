import styled from "styled-components";

export const SideBar = styled.nav`
  background: ${ props => props.theme.colors.backgroundHeader };
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  height: 100vh;
  justify-content: space-around;
  width: 20%;
  z-index: 1;

  @media (max-width: 620px) {
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: space-around;
    width: 100%;
  }
`;

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2rem 1rem;

  @media (max-width: 620px) {
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    padding: 0;
  }
`;

export const InputSearchDiv = styled.div`
  border-radius: 5px;
  display: flex;
  height: auto;
  margin-top: 1rem;
  width: 100%;

  @media (max-width: 620px) {
    margin: 0 0 1rem 0;
    margin-bottom: 0;
    padding: 1rem 10rem 1rem 1rem;
  }

  input {
    border: none;
    border-radius: 5px 0 0 5px;
    outline: none;
    padding: 0.75rem 0.5rem;
    width: 80%;

    @media (max-width: 1000px) {
      padding: 0.5rem;
    }

    @media (max-width: 620px) {
      height: 100%;
      padding: 0.5rem;
    }
    
    &:placeholder {
      padding: 0.5rem;
    }
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

    @media (max-width: 1000px) {
      width: 30%;
    }

    img {
      filter: invert(100%);
      width: 1rem;
    }

    @media (max-width: 620px) {
      height: 2.4rem;
      width: 20%;
    }
  }
`;

export const WeatherSideBarStyle = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 620px) {
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;

    .weather-icon {
      display: none;
    }

    img {
      height: 20px !important;
      width: 20px !important;
    }
  }

  img {
    width: 100%;
    height: auto;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 620px) {
      flex-direction: row;
      justify-content: space-around;
      text-align: center;
      width: 100%;
    }

    div:last-child {
      margin-top: 0;
    }

    h3 {
      color: ${ props => props.theme.colors.fontSideBarTemperature };
      font-size: 4rem;
      font-weight: 500;
      text-align: start;
      width: 100%;

      @media (max-width: 1200px) {
        font-size: 3rem;
      }

      @media (max-width: 1000px) {
        font-size: 2rem;
      }

      @media (max-width: 620px) {
        font-size: 12px;
        text-align: center;
        width 40%;
      }
    }

    p {
      border-bottom: 1px solid #d8d8d8;
      color: ${ props => props.theme.colors.fontSideBarTemperature };
      font-size: 1rem;
      font-weight: 500;
      padding-bottom: 2rem;
      text-align: start;
      Width: 100%;

      @media (max-width: 1000px) {
        font-size: 12px;
        padding-bottom: 1rem;
      }

      @media (max-width: 620px) {
        border: none;
        margin-right: 0.5rem;
        padding-bottom: 0;
        text-align: center;
        width: 80%;
      }
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

        @media (max-width: 1000px) {
          font-size: 12px;
        }
      }

      @media (max-width: 620px) {
        margin-top: 0;
        align-items: center;
        justify-content: flex-start;
      }

      .humidity {
        @media (max-width: 620px) {
          width: 30%;
        }
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
    z-index: 100;

    @media (max-width: 620px) {
      margin-right: 0;
      top: 40%;
      right: 110%;
      position: absolute;
    }
  }

  @media (max-width: 620px) {
    position: absolute;
    font-size: 12px;
    height: 10%;
    margin: 0;
    top: -0.9%;
    right: 20%;
  }
`;