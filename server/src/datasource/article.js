const { DataSource } = require("apollo-datasource");

class article extends DataSource {
  constructor({ data }) {
    super();
    this.data = data;
  }

  getArticleById({ articleId }) {
    const article = this.data.title.find(
      (article) => article.articleId === articleId
    );
    return article ? article : null;
  }

  getAllArticle() {
    return this.data || [];
  }
}
module.exports = article;
