import styled from "styled-components";

export const HeaderComponent = styled.header`
  height: 80px;
  background: ${(props) =>
    props.dark
      ? props.theme.colors.richBlackFogra29
      : props.theme.colors.greenBlueCrayola};
  padding: 0 20px;

  .container {
    ${(props) => props.theme.utils.flexUtil("row", "", "center")};
    height: 100%;

    h1 {
      position: relative;

      a {
        ${(props) => props.theme.utils.flexUtil("column")};
        color: ${(props) => props.theme.colors.white};
        text-decoration: none;
        font-size: ${(props) => props.theme.fontSizes.fs_small};
        letter-spacing: 1px;
        font-weight: 600;
      }
    }

    .header__hamburger {
      display: none;
      margin-left: 15px;

      &:hover {
        cursor: pointer;
      }

      &.active {
        span {
          &:nth-child(1) {
            transform: translateY(7px) rotate(45deg);
          }

          &:nth-child(2) {
            opacity: 0;
          }

          &:nth-child(3) {
            transform: translateY(-7px) rotate(-45deg);
          }
        }
      }

      span {
        width: 25px;
        height: 3px;
        background: ${(props) => props.theme.colors.white};
        display: block;
        margin: 4px auto;
        border-radius: 5px;
        transition: 0.25s;
      }

      @media screen and (max-width: 575px) {
        display: block;
      }
    }
  }
`;

export const MenuSidebarComponent = styled.div`
  ${(props) => props.theme.utils.flexUtil("column")};
  position: sticky;
  width: 100%;
  height: calc(100vh - 80px);
  max-width: 280px;
  background: ${(props) =>
    props.dark ? props.theme.colors.onyx : props.theme.colors.gainsboro};
  transition: 0.2s;

  div:not(.sidebar-link) {
    max-width: 100%;
    margin: 0;
    border-radius: 0;
    display: none;
    border-bottom: 1px solid
      ${(props) =>
        props.dark ? props.theme.colors.eerieBlack : "transparent"};

    @media screen and (max-width: 575px) {
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
          ? props.theme.colors.eerieBlack
          : props.theme.colors.lightGray};
    overflow-y: auto;

    &:last-of-type {
      justify-content: flex-start;
      flex: 1;
      height: auto;
      padding: 20px 0;
      scrollbar-color: ${(props) =>
          props.dark
            ? props.theme.colors.eerieBlack
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
              ? props.theme.colors.eerieBlack
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
      height: 100%;
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

  @media screen and (max-width: 575px) {
    min-width: 100%;
    transform: translateX(-100%);
    opacity: 0;

    &.active {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
