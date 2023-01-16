import styled from "styled-components";

export const HeaderComponent = styled.header`
  height: 80px;
  background: ${(props) =>
    props.dark
      ? props.theme.colors.richBlackFogra29
      : props.theme.colors.greenBlueCrayola};
  padding: 0 20px;
  position: sticky;
  top: 0;
  z-index: 9;

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

      @media screen and (max-width: 980px) {
        display: block;
      }
    }
  }
`;
