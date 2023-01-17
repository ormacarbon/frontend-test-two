import styled from "styled-components";

import Slider from "@ant-design/react-slick";

export const IndexMain = styled.main`
  background: ${(props) =>
    props.dark ? props.theme.colors.onyx : props.theme.colors.white};
  padding: 20px;
  padding-bottom: 0;
  width: 100%;

  h2:not(.content-title) {
    ${(props) => props.theme.utils.flexUtil("row", "space-between", "center")};
    color: ${(props) =>
      props.dark
        ? props.theme.colors.minionYellow
        : props.theme.colors.blueJeans};
    padding: 10px 0;
    font-size: ${(props) => props.theme.fontSizes.fs_largeX};

    a {
      ${(props) => props.theme.utils.flexUtil("row", "", "center")};
      color: ${(props) =>
        props.dark
          ? props.theme.colors.white
          : props.theme.colors.sapphireBlue};
      font-size: ${(props) => props.theme.fontSizes.fs_medium};
      font-weight: 500;
      text-decoration: none;

      i {
        margin-left: 5px;
      }
    }
  }
`;

export const SliderComponent = styled(Slider)`
  position: relative;
  max-width: 100% !important;

  .slick-arrow {
    ${(props) =>
      props.theme.utils.flexUtil("row", "center", "center", "!important")};
    background: ${(props) =>
      props.dark
        ? props.theme.colors.sapphireBlue + "99"
        : props.theme.colors.prussianBlue + "99"};
    width: 40px;
    height: calc(100% - 20px);
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    transition: 0.2s;

    &:hover {
      filter: brightness(1.6);
    }

    &::before {
      appearance: none !important;
      content: none;
    }

    &.slick-prev {
      left: 0;
    }

    &.slick-next {
      right: 0;
    }

    i {
      font-size: ${(props) => props.theme.fontSizes.fs_mediumLg};
      font-weight: 700;
      color: ${(props) => props.theme.colors.white};
    }
  }

  .slick-track {
    padding: 10px 0;
  }
`;
