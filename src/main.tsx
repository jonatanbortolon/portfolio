import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import { HelmetProvider } from "react-helmet-async";
import Routes from "./Routes";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Segoe WPC', 'Segoe UI', sans-serif;
    font-size: 13px;
    color: #939494; 
    user-select: none;
    background-color: #1e1e1e;

    counter-reset: gutter-counter;
  }

  #root {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <GlobalStyle />
      <Routes />
    </HelmetProvider>
  </React.StrictMode>
);
