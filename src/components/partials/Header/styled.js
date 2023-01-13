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
  nav {
    flex: 1;
    display: flex;
    gap: 1.6rem;

    padding-left: 3.2rem;

    transition: all ease 0.3s;
    /* darkMode
      blackBackground */
    a {
      font-size: 1.2rem;
      position: relative;
      color: ${(props) =>
        props.darkMode || props.blackBackground
          ? props.theme.colors['gray-100']
          : props.theme.colors.black};
      font-weight: bold;

      padding: 0.2rem 0.6rem;
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
        opacity: 0.9;
      }
    }
  }

  img.netflix {
    width: 10rem;
    height: auto;
  }

  img.perfil {
    width: 4rem;
    height: 4rem;
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
