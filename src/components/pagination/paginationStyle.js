import styled from "styled-components";

export const PaginationComponent = styled.nav`
  display: block;
  margin: 30px auto;
  text-align: center;

  a {
    transition: 0.2s;

    &.active {
      background: transparent;
      color: ${(props) =>
        props.dark
          ? props.theme.colors.blueJeans
          : props.theme.colors.redCrayola};
      border: 2px solid
        ${(props) =>
          props.dark
            ? props.theme.colors.blueJeans
            : props.theme.colors.redCrayola};
    }

    &:hover {
      opacity: 0.8;
    }
  }

  a,
  span {
    min-width: 30px;
    background: ${(props) =>
      props.dark
        ? props.theme.colors.blueJeans
        : props.theme.colors.redCrayola};
    color: ${(props) => props.theme.colors.white};
    padding: 5px;
    margin: 0px 2px;
    font-size: ${(props) => props.theme.fontSizes.fs_medium};
    font-weight: 500;
    text-align: center;
    border: 0;
    outline: 0;
    display: inline-block;
  }
`;
