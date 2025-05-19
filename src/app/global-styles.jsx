"use client";

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    display: flex;
    flex-direction: column;
    width: 100vw;
    font-family: sans-serif;
    background-color: iceMist;
    overflow: hidden;
  }

  html, body, #root {
    height: 100vh;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
`;

export const Html = styled.html``;

export const Body = styled.body``;

export default GlobalStyles;
