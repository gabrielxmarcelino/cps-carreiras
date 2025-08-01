import { createGlobalStyle } from 'styled-components';

export const ResetStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", -apple-system, sans-serif;
    }

    body,
    button,
    input,
    select,
    textarea {
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    a {
        text-decoration: none;
    }

    body {
        background-color: #faf9f8;
    }
`;