import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";

import "./index.css";
import App from "./App";
import { configureStore, history } from "state/Store";
import reportWebVitals from "./reportWebVitals";
import muiThemeOptions from "./MuiThemeOptions";

const theme = createTheme(muiThemeOptions);
const { store } = configureStore(history);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
