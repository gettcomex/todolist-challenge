import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: linear-gradient(100deg, #546de5 50%, #425de2 0);
  }

  body, input, button {
    font-family: 'Noto Sans', sans-serif;
  }

  button {
    cursor: pointer;
  }

`;
