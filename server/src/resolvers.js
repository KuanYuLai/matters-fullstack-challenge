module.exports = {
  Query: {
    articles: (_, __, { dataSources }) =>
      dataSources.articleAPI.getAllArticle(),
    article: (_, { id }, { dataSources }) =>
      dataSources.articleAPI.getArticleById({ articleId: id }),
  },
  Mutation: {
    addArticle: (_, { input }, { dataSources }) =>
      dataSources.articleAPI.addArticle({
        Input: input,
      }),
  },
};
