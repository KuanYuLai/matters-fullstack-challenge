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
const db = require("./db_util");
const articleData = require("./data/articleData");

const app = express();
const port = process.env.SERVER_PORT || 8000;
const cors = require("cors");

//Fetch data
db.get_query("", (articleData) => {
  // init Apollo server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      articleAPI: new articleAPI({ data: articleData }),
    }),
  });

  server.applyMiddleware({ app });
});

/*
// init Apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    articleAPI: new articleAPI({ data: articleData }),
  }),
});

server.applyMiddleware({ app });*/

//Allow Cross-Origin
app.use(cors());

// run server up
app.listen(port, () => {
  console.log("== Server listening on port", port);
});
