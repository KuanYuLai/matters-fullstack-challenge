import React, { Component } from "react";

//Component
import AddBtn from "../components/AddBtn";
import List from "../components/List";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <List />
        <AddBtn />
      </React.Fragment>
    );
  }
}

export default HomePage;
