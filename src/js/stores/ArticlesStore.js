import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class ArticleStore extends EventEmitter {
  constructor() {
    super();
    this.articles = [];
  }
    getAll() {
        return this.articles;
    }

    handleActions(action) {
        switch(action.type) {
            case "CREATE_ARTICLE": {
                this.createArticle(action.text);
                break;
            }
            case "RECEIVE_ARTICLES": {
                console.log("article list has been received !");
                console.log(action.articles);
                this.articles = action.articles;
                this.emit("change");
                break;
            }

        }
    }

      createArticle(text) {
        const id = Date.now();

        this.articles.push({
          id,
            title: "Title sample",
            author: "Author name",
            body: "Simple body sample with big length to show if it is ok to write so much things",
            published_date: "le XX/XX/XXXX",
            finished_date: "XX/XX/XXXX",
            vote_for: "",
            vote_against: "Dislike",
            place: "Default location",
        });

        this.emit("change");
      }

}

const articleStore = new ArticleStore;
dispatcher.register(articleStore.handleActions.bind(articleStore));

export default articleStore;
