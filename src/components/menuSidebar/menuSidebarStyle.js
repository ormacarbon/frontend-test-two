import styled from "styled-components";

export const MenuSidebarComponent = styled.div`
  ${(props) => props.theme.utils.flexUtil("column")};
  position: sticky;
  top: 80px;
  min-width: 280px;
  height: calc(100vh - 80px);
  background: ${(props) =>
    props.dark ? props.theme.colors.eerieBlack : props.theme.colors.gainsboro};
  transition: 0.2s;
  z-index: 9;

  form {
    max-width: 100%;
    margin: 0;
    border-radius: 0;
    display: none;
    border-bottom: 1px solid
      ${(props) =>
        props.dark ? props.theme.colors.richBlackFogra29 : "transparent"};

    @media screen and (max-width: 625px) {
      ${(props) => props.theme.utils.flexUtil("row")};
    }
  }

  .sidebar-link {
    ${(props) => props.theme.utils.flexUtil("column", "center", "center")};
    width: 100%;
    height: 50px;
    padding: 0 10px;
    border-bottom: 1px solid
      ${(props) =>
        props.dark
          ? props.theme.colors.richBlackFogra29
          : props.theme.colors.lightGray};
    overflow-y: auto;
    position: relative;

    &:last-of-type {
      justify-content: flex-start;
      flex: 1;
      height: auto;
      padding: 20px 0;
      scrollbar-color: ${(props) =>
          props.dark
            ? props.theme.colors.richBlackFogra29
            : props.theme.colors.cadetBlueCrayola}
        transparent;
      scrollbar-width: thin;

      &::-webkit-scrollbar {
        width: 9px;
      }

      &::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 5px 5px
          ${(props) =>
            props.dark
              ? props.theme.colors.richBlackFogra29
              : props.theme.colors.cadetBlueCrayola};
        border: solid 3px transparent;
        cursor: pointer;
      }

      a {
        &:hover {
          color: ${(props) => props.theme.colors.redCrayola};
        }
      }
    }

    a {
      ${(props) => props.theme.utils.flexUtil("column", "center", "center")};
      width: 100%;
      color: ${(props) =>
        props.dark ? props.theme.colors.white : props.theme.colors.sonicSilver};
      text-decoration: none;
      margin: 10px 0;
      font-weight: 500;
      transition: 0.2s;

      &:hover {
        color: ${(props) =>
          props.dark
            ? props.theme.colors.blueJeans
            : props.theme.colors.sapphireBlue};
      }
    }

    h2 {
      color: ${(props) =>
        props.dark
          ? props.theme.colors.blueJeans
          : props.theme.colors.sapphireBlue};
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: 980px) {
    transform: translateX(-100%);
    opacity: 0;
    position: fixed;

    &.active {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @media screen and (max-width: 625px) {
    min-width: 100%;
  }
`;
