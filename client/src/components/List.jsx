import React, { Component, Fragment } from "react";
import ListItem from "./ListItem";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "@emotion/styled";

const GETALL_QUERY = gql`
  query {
    articles {
      _id
      title
      content
    }
  }
`;

const ListContainer = styled.div`
  width: 70%;
  margin: 1% auto;
`;

class List extends Component {
  state = {};
  render() {
    return (
      <ListContainer>
        <Query query={GETALL_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h3>Loading...</h3>;
            if (error) {
              console.log("== Error:" + error);
              return <h3> Error Occur, Please try again later!</h3>;
            }
            console.log(data);
            return (
              <Fragment>
                {data.articles.map((article) => (
                  <ListItem key={article._id} article={article} />
                ))}
              </Fragment>
            );
          }}
        </Query>
      </ListContainer>
    );
  }
}

export default List;
