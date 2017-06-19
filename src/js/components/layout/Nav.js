import React from "react";
import { IndexLink, Link } from "react-router";

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
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container" id="content-navbar">
          <div id ="logo">
            <a href="index.html"><img src="img\HotLemon_Logo2.png"/></a>
          </div>
          <div className={"navbar-collapse " + navClass} id = "barre-boutons">
              <div id = "buttons">
            <ul className="nav navbar-nav">
              <li className={featuredClass}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Articles</IndexLink>
              </li>
            </ul>
              </div>
          </div>
        </div>
      </nav>
    );
  }
}
