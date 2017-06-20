import React from "react";

export default class Article extends React.Component {
  constructor(props) {
    super();
  }

  render() {

      return (
          <div className="item">
              <div className="animate-box">
                  <a href={this.props.picture} className="image-popup fh5co-board-img" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?"><img src={this.props.picture} alt="Free HTML5 Bootstrap template"/></a>
              </div>
              <div className="fh5co-desc">
                  <h2>{this.props.title}</h2>
                  <h4>{this.props.place}</h4>
                  <h6>{this.props.published_date}</h6>
                  <p>{this.props.body}</p>
                  <h5> {this.props.author} {this.props.vote_for} {this.props.vote_against}</h5>
              </div>
          </div>
      );
  }
}
