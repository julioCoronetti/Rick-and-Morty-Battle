import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${props => props.theme["blue-800"]};
        color: ${props => props.theme.white};
        font-family: "Reem Kufi Fun", sans-serif;
        padding: 1rem 3rem;
    }
`;