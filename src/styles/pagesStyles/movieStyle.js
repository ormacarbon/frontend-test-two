import styled from "styled-components";

export const IndexMovie = styled.main`
  background: ${(props) =>
    props.dark ? props.theme.colors.onyx : props.theme.colors.white};
  padding: 20px;
  padding-bottom: 0;
  width: 100%;
  position: relative;

  img {
    object-fit: cover;
  }

  .banner {
    width: 100%;
    height: 400px;
    padding: 20px;
    background-size: cover !important;
    position: relative;
    border-top: 5px solid
      ${(props) =>
        props.dark
          ? props.theme.colors.redCrayola
          : props.theme.colors.blueJeans};

    &::after {
      position: absolute;
      inset: 0;
      content: "";
      width: 100%;
      height: 100%;
      background: linear-gradient(
        0deg,
        ${(props) =>
            props.dark ? props.theme.colors.onyx : props.theme.colors.white}
          12%,
        #00000000 55%,
        #00000000 100%
      );
      border-radius: inherit;
    }

    @media screen and (max-width: 575px) {
      display: none;
    }
  }

  .movie-info {
    ${(props) => props.theme.utils.flexUtil("row-reverse", "space-between")};
    width: 100%;
    position: relative;
    top: -50px;

    .image {
      position: relative;
      height: 300px;
      width: 100%;
      max-width: 230px;
      min-width: 230px;
      border: 2px solid
        ${(props) =>
          props.dark
            ? props.theme.colors.blueJeans
            : props.theme.colors.redCrayola};
      margin: 0 20px;
      top: -100px;

      span {
        color: ${(props) =>
          props.dark ? props.theme.colors.white : props.theme.colors.black};
        position: absolute;
        top: calc(100% + 5px);
        left: 50%;
        transform: translate(-50%);
        text-align: center;
      }

      @media screen and (max-width: 675px) {
        height: 460px;
        max-width: 340px;
      }

      @media screen and (max-width: 575px) {
        top: initial;
        margin-bottom: 50px;
      }
    }

    .content {
      h1 {
        color: ${(props) =>
          props.dark
            ? props.theme.colors.blueJeans
            : props.theme.colors.redCrayola};
        font-size: ${(props) => props.theme.fontSizes.fs_largeXx};
        margin-bottom: 10px;
        text-shadow: 2px 2px 3px
          ${(props) =>
            props.dark
              ? props.theme.colors.black
              : props.theme.colors.lightGray};

        @media screen and (max-width: 675px) {
          font-size: ${(props) => props.theme.fontSizes.fs_largeX};
        }
      }

      h4,
      h3,
      p {
        color: ${(props) =>
          props.dark ? props.theme.colors.white : props.theme.colors.black};

        &.credits-title {
          margin-bottom: 10px;
        }
      }

      ul {
        &.cat-list {
          ${(props) => props.theme.utils.flexUtil("row wrap")};
        }

        li {
          list-style-type: none;

          &:not(.cat) {
            margin-bottom: 10px;

            .info-container {
              ${(props) => props.theme.utils.flexUtil("row", "", "center")};

              .image-info {
                position: relative;
                width: 80px;
                min-width: 80px;
                height: 110px;
                margin-right: 10px;
              }
            }
          }

          &.cat {
            background: ${(props) =>
              props.dark
                ? props.theme.colors.white
                : props.theme.colors.cadetBlueCrayola};
            color: ${(props) =>
              props.dark ? props.theme.colors.black : props.theme.colors.white};
            padding: 5px;
            border-radius: 3px;
            margin: 5px 10px;
          }
        }
      }

      h4 {
        font-size: ${(props) => props.theme.fontSizes.fs_large};
      }

      p {
        margin: 10px 0;

        &.p {
          margin-bottom: 5px;
        }
      }

      .movie-rating {
        ${(props) => props.theme.utils.flexUtil("row", "", "center")};
        margin-top: 10px;

        p {
          margin-left: 3px;
        }

        i {
          font-size: ${(props) => props.theme.fontSizes.fs_mediumLg};
        }
      }

      .info {
        margin-top: 30px;

        h3 {
          color: ${(props) =>
            props.dark
              ? props.theme.colors.redCrayola
              : props.theme.colors.blueJeans};
        }
      }
    }

    @media screen and (max-width: 675px) {
      ${(props) => props.theme.utils.flexUtil("column", "", "center")};
    }

    @media screen and (max-width: 575px) {
      top: initial;
    }
  }
`;
