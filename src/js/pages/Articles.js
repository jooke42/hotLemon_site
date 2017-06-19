import React from "react";

import Article from "../components/Article";
import StoreArticle from "../stores/ArticleStore";
import * as ArticleActions from "../actions/ArticleActions";
import ArticleStore from "../stores/ArticleStore";

export default class Articles extends React.Component {
  constructor() {
    super();
    this.getArticles = this.getArticles.bind(this);
    this.state = {
      articles: StoreArticle.getAll()
    };
    this.reloadArticles();
  }

    componentWillMount() {
        ArticleStore.on("change", this.getArticles);
    }

    componentWillMount() {
        ArticleStore.on("change", this.getArticles);
    }

    componentWillUnmount() {
        ArticleStore.removeListener("change", this.getArticles);
    }

    getArticles() {
        this.setState({
            articles: ArticleStore.getAll(),
        });
    }

    reloadArticles() {
        ArticleActions.reloadArticles();
    }

    render() {
    const { articles } = this.state;

    const ArticleComponents = articles.map((article) => {
        return <Article key={article.id} {...article}/>;
    });

    return (
      <div>
        <button onClick={this.reloadArticles.bind(this)}>Reload!</button>
        <h1>Articles</h1>
        <ul>{ArticleComponents}</ul>
      </div>
    );
  }
}
