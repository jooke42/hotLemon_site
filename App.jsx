import React from 'react';

var SideBar = require('react-burger-menu').slide;

class App extends React.Component {
   render() {
      return (
         <div>
            <NavBar/>
			<SideBar>
				<a id="home" className="menu-item" href="/">Home</a>
				<a id="about" className="menu-item" href="/about">About</a>
				<a id="contact" className="menu-item" href="/contact">Contact</a>
				<a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      		</SideBar>

         </div>
      );
   }
}

class NavBar extends React.Component {
   render() {
      return (
	  	<div>
			<div className = "navbar">
				<div id = "logo">
					<a href = "http://eelslap.com/"><img src="img\HotLemon_Logo.png"/></a>
				</div>
				<div id = "buttons">
					<ul>
						<li><a href="#">Trending</a></li>
						<li><a href="#">Chocolate</a></li>
						<li><a href="#">Cuteness</a></li>
						<li><a href="#">Lapins</a></li>
						<li><a href="#">Chatons</a></li>
						<li><a href="#">A propos</a></li>
					</ul>
				</div>			
			</div>
		</div>
      );
   }
}


export default App;