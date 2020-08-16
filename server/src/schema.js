const { gql } = require("apollo-server-express");

module.exports = gql`
  type Article {
    id: ID!
    title: String
    content: String
  }

  type Query {
    articles: [Article]
    article(id: ID!): Article
  }
`;
