import React from "react";

export default class Article extends React.Component {
  constructor(props) {
    super();
      this.state = { imageStatus: 'loading' };
  }
    handleImageLoaded() {
        this.setState({ imageStatus: 'loaded' });
    }

    handleImageErrored() {
        this.setState({ imageStatus: 'failed to load' });
    }
//className="animate-box"
  render() {

      return (
          <div className="item">
              <div >
                  <img src={this.props.picture}
                       onLoad={this.handleImageLoaded.bind(this)}
                       onError={this.handleImageErrored.bind(this)}
                       alt="Free HTML5 Bootstrap template"/>
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
