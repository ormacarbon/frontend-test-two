import styled from "styled-components";

export const BannerComponent = styled.div`
  width: 100%;
  height: 350px;
  background-size: 50% !important;
  position: relative;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 2px 2px 6px 1px
    ${(props) =>
      props.dark
        ? props.theme.colors.eerieBlack
        : props.theme.colors.lightGray};
  transition: 0.3s;

  &:hover {
    background-size: 52% !important;
  }

  &::after {
    position: absolute;
    inset: 0;
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(
      270deg,
      ${(props) =>
          props.dark ? props.theme.colors.black : props.theme.colors.redCrayola}
        56%,
      #00000000 70%,
      #00000000 100%
    );
    border-radius: inherit;
  }

  .content {
    width: 50%;
    height: 100%;
    ${(props) => props.theme.utils.flexUtil("column", "", "flex-start")};
    color: ${(props) => props.theme.colors.white};
    z-index: 1;
    position: relative;
    margin-left: auto;

    .content-title {
      font-size: ${(props) => props.theme.fontSizes.fs_largeX};
      color: ${(props) =>
        props.dark
          ? props.theme.colors.blueJeans
          : props.theme.colors.minionYellow};
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;

      @media screen and (max-width: 625px) {
        margin-top: 240px;
      }
    }

    .overview {
      margin: 15px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 6;
      line-clamp: 6;
      -webkit-box-orient: vertical;
      word-wrap: break-word;
      visibility: visible;
    }

    div {
      ${(props) => props.theme.utils.flexUtil("row", "", "center")};
      margin-bottom: 15px;

      p {
        margin-left: 3px;
        margin-bottom: -2px;
      }

      i {
        font-size: ${(props) => props.theme.fontSizes.fs_mediumLg};
      }
    }

    a {
      background: ${(props) => props.theme.colors.white};
      color: ${(props) =>
        props.dark ? props.theme.colors.black : props.theme.colors.redCrayola};
      padding: 10px 45px;
      border: 2px solid ${(props) => props.theme.colors.white};
      border-radius: 25px;
      margin-top: auto;
      font-weight: 500;
      text-decoration: none;
      transition: 0.2s;

      &:hover {
        background: transparent;
        color: ${(props) => props.theme.colors.white};
      }
    }
  }

  @media screen and (max-width: 625px) {
    background-size: 100% !important;
    height: 500px;

    &:hover {
      background-size: 100% !important;
    }

    &::after {
      background: linear-gradient(
        0deg,
        ${(props) =>
            props.dark
              ? props.theme.colors.black
              : props.theme.colors.redCrayola}
          35%,
        #00000000 70%,
        #00000000 100%
      );
    }

    .content {
      width: 100%;
      ${(props) =>
        props.theme.utils.flexUtil("column", "flex-end", "flex-start")};

      .content-title {
        font-size: ${(props) => props.theme.fontSizes.fs_large};
      }

      .overview {
        margin: 10px 0;
        -webkit-line-clamp: 4;
        line-clamp: 4;
      }

      div {
        margin-bottom: 10px;
      }

      a {
        padding: 6px 35px;
      }
    }
  }

  @media screen and (max-width: 380px) {
    background-position: top !important;
  }
`;
