import { createGlobalStyle } from "styled-components";

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .menuLink {
    color: #f0f0f0;
    text-decoration: none;

    &:hover {
      color: #D3AC5C !important;
    }
  }

  .darkThemeBg {
      background: linear-gradient(180deg, #032520 0%, #111d28 100%, #0b131b 100%) !important;
  }

  .darkThemeFontColor {
    color: #f0f0f0 !important;
  }

  .lightThemeBg {
    background: linear-gradient(180deg, #DFDDD3 0%, #F0F0F0 100%) !important;

  }

  .lightThemeFontColor {
    color: #0B131B !important;
  }

  .link {
    text-decoration: none;
  }

  .footerLink {
    color: #F0F0F0;

    &:hover{
      color: #B99047;
    }
  }

  .noScroll {
    overflow: hidden;
  }
  
  #searchInput {
    width: 100%;
    height: 100%;
    border: none;
    background: none;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    padding-left: 30px;
    outline: none;
  }

  .returnButton {
    margin-bottom: 34px;
  }
  
  .searchBarContainer {
    width: 80%;
    height: 65px;
    border: 2px solid #b99047;
    margin-bottom: 30px;
    position: relative;
  }

  .animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
    -animation-delay: 0ms;
    -animation-duration: 1000ms;
    pointer-events: all;
}
`;
