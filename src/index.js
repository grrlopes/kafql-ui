import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./app/App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./app/serviceWorker";
import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./style/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainTable from "./features/table/MainTab";
import MainStream from "./features/stream/MainTab"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="stream" element={<MainStream />} />
              <Route path="table" element={<MainTable />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
