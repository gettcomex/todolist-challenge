import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background:
    linear-gradient(90deg,#54a0ff 0%,#50a0dd 100%);
  }

  body, input, button {
    font-family: 'Noto Sans', sans-serif;
  }

  button {
    cursor: pointer;
  }

`;
