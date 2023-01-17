import styled from "styled-components";

export const IndexDiscover = styled.main`
  background: ${(props) =>
    props.dark ? props.theme.colors.onyx : props.theme.colors.white};
  padding: 20px;
  padding-bottom: 0;
  width: 100%;

  h1 {
    color: ${(props) =>
      props.dark
        ? props.theme.colors.blueJeans
        : props.theme.colors.redCrayola};
    font-size: ${(props) => props.theme.fontSizes.fs_largeXx};
    margin: 20px 0;

    @media screen and (max-width: 675px) {
      font-size: ${(props) => props.theme.fontSizes.fs_largeX};
    }
  }

  .filter {
    ${(props) => props.theme.utils.flexUtil("row", "flex-start", "center")};

    div {
      display: inline-block;

      span {
        color: ${(props) =>
          props.dark ? props.theme.colors.white : props.theme.colors.black};
        margin-right: 10px;
        text-align: center;
        margin-bottom: 10px;
        display: block;
      }
    }

    hr {
      height: 1px;
      border: 1px solid
        ${(props) =>
          props.dark
            ? props.theme.colors.redCrayola
            : props.theme.colors.blueJeans};
      flex: 1;
      margin-left: 20px;
    }
  }

  .cards {
    ${(props) => props.theme.utils.flexUtil("row wrap", "center")};
    position: relative;

    a {
      margin: 10px;
    }
  }
`;
