import React, { Component } from "react";

//Component
import AddBtn from "../components/AddBtn";
import List from "../components/List";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {this.props.location.state.UploadComplete
          ? alert("Article Uploaded")
          : null}
        <List />
        <AddBtn />
      </React.Fragment>
    );
  }
}

export default HomePage;
