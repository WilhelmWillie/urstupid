import { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";

const GlobalStyle  = createGlobalStyle`
  ${reset}

  body {
    font-family: sans-serif;
    color: ${({theme}) =>  theme.colors.body};
    font-size: 18px;
  }

  h1 {
    color: ${({theme}) =>  theme.colors.white};
    font-size: 64px;
    line-height: 70px;
    font-weight: 700;
  }

  h2 {
    color: ${({theme}) =>  theme.colors.headers};
    font-size: 24px;
    line-height: 32px;
    font-weight: 500;
  }

  p {
    line-height: 32px;
    font-weight: 300;
  }

  input[type=text],textarea {
    border: 1px solid #979797;
    border-radius: 4px;
    padding: 16px;
    font-size: 18px;
    box-sizing: border-box;
  }

  button {
    background: ${({theme}) => theme.colors.action};
    border-radius: 4px;
    color: ${({theme}) => theme.colors.white};
    padding: 16px 24px;
    font-size: 18px;
    border: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;