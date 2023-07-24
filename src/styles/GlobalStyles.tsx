import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto_Flex', sans-serif;
        color: ${props => props.theme.colors.textPrimary};
    }

    body {
        background-color: ${props => props.theme.colors.primary};
    }
`