import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: 400 16px 'Inter', sans-serif;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.label};
    min-height: 100vh;
    padding: 110px 10px 45px;
  }

  a {
    color: ${props => props.theme.colors.background};
    text-decoration: none;
  }

  .ant-dropdown-menu {
    li {
      span {
        display: flex;
        align-items: center;

        a {
          font-size: 14px;
          font-weight: 600;
        }
      }

      &:hover {
        background: #FE6763 !important;
        a {
          color: #fff !important;
        }
      }
    }
  }
`
