import styled from "styled-components";

export const DarkModeComponent = styled.div`
  min-width: 46px;
  background: ${(props) =>
    props.dark
      ? props.theme.colors.cadetBlueCrayola
      : props.theme.colors.white};
  border-radius: 20px;
  padding: 2px 3px;
  margin-left: auto;
  transition: 0.2s;
  cursor: pointer;

  div {
    ${(props) => props.theme.utils.flexUtil("row", "center", "center")};
    width: 20px;
    height: 20px;
    font-size: ${(props) => props.theme.fontSizes.fs_small};
    background: ${(props) =>
      props.dark
        ? props.theme.colors.prussianBlue
        : props.theme.colors.minionYellow};
    color: ${(props) =>
      props.dark ? props.theme.colors.white : props.theme.colors.tangerine};
    border-radius: 50%;
    position: relative;
    transform: ${(props) =>
      props.dark ? "translateX(100%)" : "translateX(0)"};
    box-shadow: 1px 1px 3px 1px
      ${(props) =>
        props.dark
          ? props.theme.colors.davysGray
          : props.theme.colors.lightGray};
    transition: 0.1s;
  }
`;
