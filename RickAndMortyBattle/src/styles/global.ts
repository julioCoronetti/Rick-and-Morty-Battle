import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        height: 100vh;
        background-color: ${props => props.theme["blue-800"]};
        background-image: url('/src/assets/background.svg');
        background-attachment: fixed;
        color: ${props => props.theme.white};
        font-family: "Reem Kufi Fun", sans-serif;
        padding: 1rem 3rem;
    }
`;