//! First store then App
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import store from "#/store/store";

import App from "./App";

import "./styles/index.css";

import ErrorHandler from "#/components/error/ErrorHandler.component";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ErrorHandler>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorHandler>
  </StrictMode>
);
