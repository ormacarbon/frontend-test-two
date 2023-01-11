import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

    :root {
        font-size: 16px;


        /*black/white pallet*/
        --black-400: #1A202C;
        --black-999: #000000;
        --white-999: #FFFFFF;

        /*brown pallet*/
        --brown-100: #B16949;
        --brown-300: #B46E27;
        --brown-600: #703316;

        /*grey pallet*/
        --grey-100: #E8E8E8;
        --grey-200: #D9D9D9;
        --grey-300: #DADADA;
        --grey-600: #565B65;

        /*notification pallet*/
        --negative: #E60000;
        --warning: #FFCD07;
        --sucess: #168821;
        --information: #155BCB;

        /*drop-shadow pallet*/
        --drop-shadow: rgba(0, 0, 0, 0.25);

        --roboto: 'Roboto', sans-serif;

        button {
        cursor: pointer;
        }

        li {
        list-style: none;
        }

        a, abbr {
        text-decoration: none;
        }



    }




`;
