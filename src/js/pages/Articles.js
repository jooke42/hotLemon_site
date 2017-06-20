import React from "react";

import Article from "../components/Article";
import StoreArticle from "../stores/ArticleStore";
import * as ArticleActions from "../actions/ArticleActions";
import ArticleStore from "../stores/ArticleStore";
import ConnexionStore from "../stores/ConnexionStore"
export default class Articles extends React.Component {
  constructor() {
    super();
    this.getArticles = this.getArticles.bind(this);
    this.state = {
      articles: StoreArticle.getAll()
    };
  }

    componentWillMount() {
        ArticleStore.on("change", this.getArticles);
        ConnexionStore.on("change", this.getArticles);
    }

    componentWillUnmount() {
        ArticleStore.removeListener("change", this.getArticles);
        ConnexionStore.removeListener("change", this.getArticles);
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
        <div id="fh5co-main">
            <div className="container">

                <div className="row">

                    <div id="fh5co-board" data-columns>
                        <div>{ArticleComponents}</div>



                    </div>
                </div>
            </div>
        <button onClick={this.reloadArticles.bind(this)}>Reload!</button>

      </div>
    );
  }
}
