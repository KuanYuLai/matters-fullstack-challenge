import React, { Component } from "react";
import styled from "@emotion/styled";

const NotFound = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  h1 {
    font-size: 100px;
    margin: auto;
  }
`;

class ErrorPage extends Component {
  state = {};
  render() {
    return (
      <NotFound>
        <h1>Sorry I can't find the page :(</h1>
      </NotFound>
    );
  }
}

export default ErrorPage;
