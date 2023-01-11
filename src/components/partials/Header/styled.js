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

  nav {
    flex: 1;
    display: flex;
    gap: 2.6rem;

    padding-left: 3.2rem;

    transition: all ease 0.3s;

    a {
      color: ${(props) =>
        props.darkMode ? props.theme.colors.white : props.theme.colors.black};
      font-weight: bold;

      &:hover {
        font-weight: bold;
        border-bottom: 1px solid #ffffff;
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
