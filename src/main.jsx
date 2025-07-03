import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ScrollToTop from './components/ScrollToTop.jsx';
import MUIWrapper from './components/layouts/MUIWrapper.jsx';
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MUIWrapper>
      <HashRouter>
        <ScrollToTop />
        <App />
      </HashRouter>
    </MUIWrapper>
  </React.StrictMode>
);
