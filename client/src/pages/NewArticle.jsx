import React, { Component } from "react";
import styled from "@emotion/styled";

import Form from "../components/Form";

const FormContainer = styled.div`
  margin: 2% auto;
`;

class NewArticle extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Form />
      </React.Fragment>
    );
  }
}

export default NewArticle;
