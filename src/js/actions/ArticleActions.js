import dispatcher from "../dispatcher";

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
  // axios("http://someurl.com/somedataendpoint").then((data) => {
  //   console.log("got the data!", data);
  // })
  dispatcher.dispatch({type: "FETCH_ARTICLES"});
  setTimeout(() => {
    console.log("Fetch article list please wait ...");
    dispatcher.dispatch({type: "RECEIVE_ARTICLES", articles: [
        {
            id: 113464613,
            title: "Title sample",
            author: "Author name",
            body: "Simple body sample with big length to show if it is ok to write so much things",
            published_date: "le XX/XX/XXXX",
            finished_date: "XX/XX/XXXX",
            vote_for: "Like",
            vote_against: "Dislike",
            place: "Default location",



        },
        {
            id: 113464614,
            title: "Title sample2",
            author: "Author name2",
            body: "Simple body sample with big length to show if it is ok to write so much things2",
            published_date: "le XX/XX/XXXX",
            finished_date: "XX/XX/XXXX",
            vote_for: "Like",
            vote_against: "Dislike",
            place: "Default location",



        },
    ]});
  }, 1000);
}
