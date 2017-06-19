import dispatcher from "../dispatcher";
import axios from "axios";

export function createArticle(text) {
  dispatcher.dispatch({
    type: "CREATE_ARTICLE",
    text,
  });
}

export function deleteArticle(id) {
  dispatcher.dispatch({
    type: "DELETE_ARTICLE",
    id,
  });
}

export function reloadArticles() {
    const authstr = "Token "+ localStorage.getItem("@hotlemon:key");
    console.log('fetching data ....');
    dispatcher.dispatch({type: "FETCH_ARTICLES"});

    axios.get("http://82.232.20.224/news/", { 'headers': { 'Authorization': authstr }})
        .then(response =>{
            dispatcher.dispatch({type: "RECEIVE_ARTICLES", articles: response.data.results}
            );

        }).catch(error => {
                console.log(error);
        })

}
