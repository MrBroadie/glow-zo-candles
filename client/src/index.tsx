import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import { store } from "./app/store";
import { Provider } from "react-redux";

// eslint-disable-next-line no-undef
const domain = process.env.REACT_APP_AUTH0_DOMAIN as string;
// eslint-disable-next-line no-undef
const client = process.env.REACT_APP_AUTH0_CLIENT_ID as string;
// eslint-disable-next-line no-undef
// const audience = process.env.REACT_APP_AUTH0_AUDIENCE as string;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain={domain}
        clientId={client}
        // audience={audience}
        // redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
