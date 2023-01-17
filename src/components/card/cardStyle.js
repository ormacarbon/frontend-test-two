import styled from "styled-components";

export const CardComponent = styled.a`
  ${(props) => props.theme.utils.flexUtil("column", "flex-end", "center")};
  width: 100%;
  height: 300px;
  max-width: 230px;
  background-size: 100% !important;
  color: ${(props) => props.theme.colors.white};
  padding: 10px;
  margin: 0 auto;
  box-shadow: 2px 2px 6px 1px
    ${(props) =>
      props.dark
        ? props.theme.colors.eerieBlack
        : props.theme.colors.lightGray}; 
  text-decoration: none;
  text-align: center;
  position: relative;
  transition: 0.3s;

  &::after {
    position: absolute;
    inset: 0;
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      ${(props) =>
          props.dark ? props.theme.colors.black : props.theme.colors.redCrayola}
        15%,
      #00000000 60%,
      #00000000 100%
    );
    border-radius: inherit;
  }

  &:hover {
    background-size: 118% !important;
  }

  .info {
    z-index: 1;
    height: 24%;

    p {
      margin: 3px 0;
      font-weight: 500;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
  
      &:first-of-type {
        font-weight: 600;
        font-size: ${(props) => props.theme.fontSizes.fs_mediumLg};
      }
    }
  }

  @media screen and (max-width: 345px) {
    background-position: top !important;
  }
`;
