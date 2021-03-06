import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";

ReactDOM.render(
  <>
    <GlobalStyle />
    <Router />
  </>,
  document.getElementById("root")
);
