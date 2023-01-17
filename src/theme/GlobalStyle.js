import { useRecoilValue } from 'recoil';
import { themeSwitchState } from '../state/atom';
import { themeDarkMode, themeLightMode } from './theme';

export default function GlobalStyle() {
   const lightSwitchState = useRecoilValue(themeSwitchState)
  return (
    <style global jsx>{`
        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }
        a {
          text-decoration: none;
        }
        body {
          font-family: ${themeLightMode.typography.fontFamily}, sans-serif;
          color: ${lightSwitchState == true? themeLightMode.colors.fontColor: themeDarkMode.colors.fontColor};
          background: ${lightSwitchState == true? themeLightMode.colors.bgColor: themeDarkMode.colors.bgColor};
        }
        img, video {
          max-width: 100%;
          height: auto;
        }
        audio, canvas, embed, iframe, img, object, svg, video {
          display: block;
          vertical-align: middle;
        }
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0,0,0,0);
          border: 0;
        }
        /* ================== */
        /* NextJS */
        /* ================== */
        html {
          height: 100%;
        }
        body,
        #__next {
          height: 100%;
        }
        #__next {
          display: flex;
          flex-direction: column;
        }
        #__next > * {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: stretch;
        }
      `}</style>
  )
}