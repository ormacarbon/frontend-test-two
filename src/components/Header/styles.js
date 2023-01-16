import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.primaryColor};
  display: flex;
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;


  .nav-desktop {
    display: none;

    @media (min-width: 769px){
      display: block;
    }

    ul {
      display: flex;
      list-style: none;
      gap: 25px;
    }


  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  ${({ menuOpen }) => menuOpen && css`
    display: none;
  `}

  h1 {
    color: ${({ theme }) => theme.secondaryColor};
  }
`;

export const MenuMobile = styled.div`
  position:  relative;
  width: 100%;
  display: none;
  margin-bottom: 40px;
  margin-right: 12px;

  @media (max-width: 768px) {
    display: block;
  }

  .icon {
    position: absolute;
    z-index: 4;
    right: 10%;
    height: 44px;
    cursor: pointer;
  }

  .icon.iconActive .hamburguer {
    background: transparent;
    box-shadow: 0 2px 5px transparent;
    margin-top: 15px;

    ::after {
      top: 0;
      background-color: ${({ theme }) => theme.secondaryColor};
      transform: rotate(225deg);
      box-shadow: 0 -2px 5px rgba(0,0,0,0.2);
    }
    ::before {
      top: 0;
      background-color: ${({ theme }) => theme.secondaryColor};
      transform: rotate(135deg);
      box-shadow: 0 -2px 5px rgba(0,0,0,0.2);
    }
  }

  .hamburguer {
    top: 40%;
    left: 10%;
    width: 30px;
    height: 6px;
    background-color: ${({ theme }) => theme.secondaryColor};
    position: absolute;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);

    ::before {
      top: -12px;
      content: '';
      position: absolute;
      width: 37px;
      height: 6px;
      background-color: ${({ theme }) => theme.secondaryColor};
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
      transition: 0.5s;
    }
    ::after {
      top: 12px;
      content: '';
      position: absolute;
      width: 37px;
      height: 6px;
      background-color: ${({ theme }) => theme.secondaryColor};
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
      transition: 0.5s;
    }
  }

  .menuOpen {
    width: 100%;
    height: 100vh;
    box-shadow: 10px 0px 69px 0px rgba(0,0,0,0.59);
  }

  .menuClose {
    display: none;
    width: 0px;
  }

  .nav-mobile {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

`;

export const ListNavMenu = styled.ul`
  list-style: none;


  li{
    a{
      padding: 10px 15px;
      border-radius: 10px;
      transition: 0.3s ease-in;
      color:${({ theme }) => theme.textColor};
      font-weight: bold;
      font-size: 18px;

      &:hover {
        background-color: ${({ theme }) => theme.secondaryColor};
        color: ${({ theme }) => theme.textColorHover};
      }
    }
  }
`;
