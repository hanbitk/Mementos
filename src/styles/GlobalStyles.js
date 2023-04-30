import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    :root{
        /* Color */
        --color-black: #000000; /* 191919 */
        --color-white: #ffffff;
        --color-light-white: #f5f5f5;
        --color-gray: #d9d9d9;
        --color-light-gray: #dddddd;

        /* Font size */
        --font-large: 60px;
        --font-medium: 32px;
        --font-regular: 16px;
        --font-small: 14px;
        --font-micro: 12px;

        /* Font weight */
        --weight-bold: 700;
        --weight-semi-bold: 600; 
        --weight-regular: 400;
        --weight-light: 300;

        /* Size */
        --size-extra-large: 300px;
        --size-large: 200px;
        --size-medium: 150px;
        --size-small: 100px;
        --size-border-radius: 10px;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Inter', sans-serif;
        background-color: var(--color-white);
    }

    button{
        background-color: transparent;
        cursor: pointer;
        border: none;
        outline: none;
        padding: 0px;
    }

    input {
        border: none;
        background-image: none;
        background-color: transparent;
        box-shadow: none;
} 
`;

export default GlobalStyles;
