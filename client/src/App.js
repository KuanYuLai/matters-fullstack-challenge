import React, { Component } from "react";
import { Global, css } from "@emotion/core";
import "bootstrap/dist/css/bootstrap.css";
import { Switch, Route } from "react-router-dom";

//Pages
import HomePage from "./pages/HomePage";
import NewArticle from "./pages/NewArticle";
import ErrorPage from "./pages/ErrorPage";

const globalStyles = css`
  body {
    font-size: 180px;
    min-width: 1000px;
  }
`;

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Global style={globalStyles} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/NewArticle" component={NewArticle} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
