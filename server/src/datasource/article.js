const { DataSource } = require("apollo-datasource");
const { put } = require("../db_util");
const uuid = require("uuid");
class article extends DataSource {
  constructor({ data }) {
    super();
    this.data = data;
  }

  addArticle({ Input }) {
    const id = put(Input.title, Input.content);
    const article = {
      _id: id,
      title: Input.title,
      content: Input.content,
    };
    console.log("== Article added");
    this.data.push(article);
    return article;
  }

  getArticleById({ articleId }) {
    console.log("articleId" + articleId);
    console.log("article.id" + this.data._id);
    const article = this.data.find((article) => article._id === articleId);
    return article ? article : null;
  }

  getAllArticle() {
    return this.data || [];
  }
}
module.exports = article;
