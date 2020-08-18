const { gql } = require("apollo-server-express");

module.exports = gql`
  type Article {
    _id: ID!
    title: String
    content: String
  }

  type Query {
    articles: [Article]
    article(id: ID): Article
  }

  input ArticleInput {
    title: String
    content: String
  }

  type Mutation {
    addArticle(input: ArticleInput): Article
  }
`;
