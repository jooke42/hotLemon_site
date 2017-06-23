import React from "react";

import Article from "../components/Article";
import ArticlesStore from "../stores/ArticlesStore";
import * as ArticleAction from "../actions/ArticleActions";
import ConnexionStore from "../stores/ConnexionStore";
export default class Articles extends React.Component {
  constructor() {
    super();
    this.getArticles = this.getArticles.bind(this);
    this.state = {
      articles: []
    };
  }

    componentWillMount() {
        ArticlesStore.on("change", this.getArticles);
        ConnexionStore.on("change", this.getArticles);
    }

    componentWillUnmount() {
        ArticlesStore.removeListener("change", this.getArticles);
        ConnexionStore.removeListener("change", this.getArticles);
    }

    getArticles() {
        this.setState({
            articles: ArticlesStore.getAll(),
        });
    }

    reloadArticles() {
        ArticleAction.reloadArticles();
    }

    render() {
    const { articles } = this.state;

    const ArticleComponents = articles.map((article) => {
        return <Article key={article.id} {...article}/>;
    });
    let col1_max = Math.ceil((ArticleComponents.length/3));
    let col2_max = Math.ceil((ArticleComponents.length/3)*2);
    let cols = [];
    cols.push(ArticleComponents.slice(0,col1_max));
    cols.push(ArticleComponents.slice(col1_max+1,col2_max));
    cols.push(ArticleComponents.slice(col2_max+1,(ArticleComponents.length)));

    return (
            <div className="container">

                <div className="row">
                    <button onClick={this.reloadArticles.bind(this)}>Reload!</button>
                    <div id="fh5co-board" data-columns>
                        <div className="column size-1of3">
                            {cols[0]}
                        </div>
                        <div className="column size-1of3">
                            {cols[1]}
                        </div>
                        <div className="column size-1of3">
                            {cols[2]}
                        </div>
                    </div>
                </div>
            </div>

    );
  }
}
