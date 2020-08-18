import React, { Component } from "react";
import styled from "@emotion/styled";
import { GoPlus } from "react-icons/go";

const Button = styled.button`
  width: 70px;
  height: 70px;
  line-height: 45px;
  text-align: center;
  padding: 0;
  border-radius: 50%;
`;

const Link = styled.a`
  position: fixed;
  right: 3%;
  bottom: 5%;
`;

class AddBtn extends Component {
  state = {};
  render() {
    return (
      <Link href="NewArticle">
        <Button type="button" className="btn btn-info">
          <GoPlus color="white" size="3rem" />
        </Button>
      </Link>
    );
  }
}

export default AddBtn;
