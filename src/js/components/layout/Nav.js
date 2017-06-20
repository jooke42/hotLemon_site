import React from "react";
import { IndexLink, Link } from "react-router";
import Connexion from "../Connexion";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const featuredClass = location.pathname === "/" ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
        <div className="container">
          <header id="fh5co-header" role="banner" className="navbar">
            <div className="row">
              <div className="col-md-10">
                <img src="img\HotLemon_Logo2.png" href="index.html"/>

                <ul >
                  <li className={featuredClass}>
                    <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Articles</IndexLink>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <Connexion/>
              </div>
            </div>

          </header>
        </div>

    );
  }
}
