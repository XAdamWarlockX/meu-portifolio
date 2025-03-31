import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: "Open Sans", sans-serif;
    }

    a{
        text-decoration: none;
        color: inherit
    }

    li{
        list-style: none;
    }
    
    body{
        background-image: url("/codigo-binario.jpg");
    }
`