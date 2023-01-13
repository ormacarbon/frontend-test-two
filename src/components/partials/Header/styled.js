import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.6rem 2.4rem;
  height: 7rem;

  background-color: ${(props) =>
    props.blackBackground ? props.theme.colors['gray-700'] : 'transparent'};
  z-index: 100;

  transition: all ease 0.4s;

  img.netflix {
    width: 10rem;
    height: auto;

    @media (max-width: 500px) {
      width: 6rem;
    }
  }

  img.perfil {
    width: 4rem;
    height: 4rem;

    @media (max-width: 500px) {
      width: 3rem;
      height: 3rem;
    }
  }
`;

export const DarkModeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.6rem;

  padding: 0.2rem;
  border-radius: 2.2rem;

  background-color: ${(props) => props.theme.colors['red-600']}; ;
`;

export const HeaderNavigationDesktop = styled.nav`
  flex: 1;
  display: flex;
  gap: 1.6rem;

  padding-left: 3.2rem;

  transition: all ease 0.3s;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    font-size: 1.2rem;
    position: relative;
    color: ${(props) =>
      props.darkMode || props.blackBackground
        ? props.theme.colors['gray-100']
        : props.theme.colors.black};
    font-weight: bold;

    padding: 0.4rem 0.6rem;
    background: ${(props) =>
      props.blackBackground
        ? 'none'
        : props.darkMode
        ? 'rgba(0,0,0, .4)'
        : 'rgba(255,255,255, .7)'};
    border-radius: 8px;

    transition: all ease 0.4s;

    &.active {
      background-color: ${(props) => props.theme.colors['red-600']};
    }

    &:hover {
      color: ${(props) =>
        props.darkMode ? props.theme.colors.white : props.theme.colors.black};
      opacity: 0.8;
    }
  }
`;

export const HeaderShowModal = styled.div`
  flex: 1;
  position: relative;

  @media (min-width: 769px) {
    display: none;
  }

  span {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${(props) => props.theme.colors.white};
    font-weight: 500;
    font-size: 1.2rem;

    padding: 0 0.8rem;
    margin-left: 3.2rem;
    height: 100%;

    cursor: pointer;

    @media (max-width: 500px) {
      margin-left: 1.6rem;
    }

    &:hover {
      &::after {
        transform: rotate(-180deg);
      }
    }

    &::after {
      content: '';
      border-style: solid;
      border-color: #fff transparent transparent;
      border-width: 5px 5px 0;
      height: 0;
      width: 0;
      margin-left: 0.5rem;

      transition: all ease 0.3s;
    }
  }
`;

export const HeaderNavigationMobile = styled.nav`
  position: absolute;
  bottom: ${(props) => (props.open ? '-21.5rem' : '8rem')};
  left: -3.2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  opacity: ${(props) => (props.open ? 1 : 0)};
  /* transition: all ease 0.3s; */
  padding-top: 3.2rem;

  @media (min-width: 769px) {
    display: none;
  }

  a:nth-child(1) {
    position: relative;
    border-top: 2px solid ${(props) => props.theme.colors.white};

    &::before {
      position: absolute;
      content: '';
      border-style: solid;
      border-color: #fff transparent transparent;
      border-width: 8px 8px 0;
      height: 0;
      width: 0;
      margin-left: 0.5rem;

      top: -0.8rem;
      transform: rotate(-180deg);
    }
  }

  a {
    padding: 1.2rem 6rem;
    width: 100%;
    text-align: center;

    background: rgba(0, 0, 0, 0.8);

    &:hover {
      background: rgba(16, 16, 16, 0.8);
    }
  }

  a.active {
    background: ${(props) => props.theme.colors['red-600']};
  }
`;
