import React from "react";

export default class Article extends React.Component {
  constructor(props) {
    super();
  }

  render() {

      return (
          <div className="article">
            <h2>{this.props.title}</h2>
            <h4>{this.props.place}</h4>
            <h6>{this.props.published_date}</h6>
            <p>{this.props.body}</p>
            <div id = "footerarticle">
              <h5> {this.props.author} {this.props.vote_for} {this.props.vote_against}</h5>
            </div>
          </div>
      );
  }
}
