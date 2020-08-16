/**
 * This is an incomplete script of apollo server. Please
 * make it live with features we requested. :)
 *
 */

require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const articleAPI = require("./datasource/article");
const articleData = require("./data/articleData");

const app = express();
const port = process.env.SERVER_PORT || 8000;
// init server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    articleAPI: new articleAPI({ data: articleData }),
  }),
});

server.applyMiddleware({ app });

// run server up
app.listen(port, () => {
  console.log("== Server listening on port", port);
});
