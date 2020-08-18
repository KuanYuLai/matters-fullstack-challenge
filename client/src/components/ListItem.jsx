import React, { Component } from "react";
import styled from "@emotion/styled";

const ListContainer = styled.div`
  margin: 10px;
`;

function LenChecker(content) {
  if (content.length > 200) {
    var string = content.slice(0, 250) + ".....";
  } else {
    var string = content;
  }
  return string;
}

class ListItem extends Component {
  state = {};

  render() {
    return (
      <ListContainer>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{this.props.article.title}</h5>
            <p className="card-text">
              {LenChecker(this.props.article.content)}
            </p>
          </div>
        </div>
      </ListContainer>
    );
  }
}

export default ListItem;
