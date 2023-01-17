import styled from "styled-components";

export const IndexSearch = styled.main`
  background: ${(props) =>
    props.dark ? props.theme.colors.onyx : props.theme.colors.white};
  padding: 20px;
  padding-bottom: 0;
  width: 100%;

  .title {
    ${(props) => props.theme.utils.flexUtil("row", "", "center")};
    margin-top: 20px;
    margin-bottom: 40px;

    h2 {
      color: ${(props) =>
        props.dark
          ? props.theme.colors.blueJeans
          : props.theme.colors.redCrayola};
      font-size: ${(props) => props.theme.fontSizes.fs_largeX};

      span {
        font-size: ${(props) => props.theme.fontSizes.fs_largeXx};
      }
    }

    hr {
      height: 1px;
      border: 1px solid
        ${(props) =>
          props.dark
            ? props.theme.colors.blueJeans
            : props.theme.colors.redCrayola};
      flex: 1;
      margin-left: 20px;
      margin-bottom: -5px;
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
