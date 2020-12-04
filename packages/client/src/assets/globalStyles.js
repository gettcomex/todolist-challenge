import { createGlobalStyle } from 'styled-components'
import colors from './colors'

export default createGlobalStyle`
  html, #root {
    height: 100%;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    height: 100%;
    background-color: ${colors.white};
    color: ${colors.dark};
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    letter-spacing: -0.1px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  ::-moz-selection {
    color: ${colors.white};
    background: ${colors.primary};
  }

  ::selection {
    color: ${colors.white};
    background: ${colors.primary};
  }

  h1, h2, h3, h4, h5, h6 {
    letter-spacing: -0.5px;
    margin: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  a {
    color: ${colors.primary};
    transition: text-shadow .3s;
  }

  a, button {
    outline: none;
    text-decoration: none;
  }

  button, .button {
    display: flex;
    align-items: center;
    background-color: #eae9ff;
    border: none;
    border-radius: 6px;
    padding: 6px 10px 6px 8px;
    cursor: pointer;
    color: ${colors.primary};
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  button:hover,
  button:focus,
  a:hover,
  a:focus {
    outline: none;
    opacity: 0.85;
  }

  a:hover,
  button:hover,
  button:focus {
    -webkit-transition: all 300ms ease-out;
    -moz-transition: all 300ms ease-out;
    -o-transition: all 300ms ease-out;
    transition: all 300ms ease-out;
  }

  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  input {
    width: 100%;
    background: none;
    border: none;
    padding: 14px 12px;
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    font-size: 14px;
    font-weight: 300;
    font-family: 'Inter', sans-serif;
  }

  input, textarea, button, select, a, div {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  input:read-only { color: #B7B7B7 }
  input::-ms-clear, input::-ms-reveal {
    display: none;
  }

  @keyframes autofill {
    to {
      color: #000000;
      background: none;
    }
  }

  input:-webkit-autofill {
    animation-name: autofill;
    animation-fill-mode: both;
  }

  ::-moz-focus-inner { border: 0 }
  ::-webkit-input-placeholder { color: #CCCCCC }
  :-moz-placeholder {
    color: #CCCCCC;
    opacity:  1;
  }

  ::-moz-placeholder {
    color: #CCCCCC;
    opacity:  1;
  }

  :-ms-input-placeholder { color: #CCCCCC }
  ::-ms-input-placeholder { color: #CCCCCC }
  ::placeholder { color: #CCCCCC }
  code { font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace }
`
