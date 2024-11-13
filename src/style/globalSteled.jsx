import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    ul, li{
    list-style-type: none;

    a {
        text-decoration: inherit;
    }

    button {
        cursor: pointer;
        border: 0;
    }
}

`;

export { GlobalStyle }