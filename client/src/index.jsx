/**
 * This is an incomplete script of client app. Please
 * make it live with features we requested. :)
 *
 */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import App from "./App";

const client = new ApolloClient({
  uri: "http://localhost:8001/graphql",
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("app")
);
