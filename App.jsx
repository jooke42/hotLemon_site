import React from 'react';

var SideBar = require('react-burger-menu').slide;

class App extends React.Component {
   render() {
      return (
         <div id = "container">
            <NavBar/>
			<SideNav/>
			<Bloc/>
         </div>
      );
   }
}

class NavBar extends React.Component {
   render() {
      return (
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
      );
   }
}

class SideNav extends React.Component {
   render() {
      return (
		<SideBar width={250} noOverlay>	
			<img src = "\img\userpic.png"></img>
			<a id="home" className="menu-item" href="#">Home</a>
			<a id="about" className="menu-item" href="#">About</a>
			<a id="contact" className="menu-item" href="#">Contact</a>
			<a id="settings" className="menu-item" href="#">Settings</a>			
		</SideBar>
      );
   }
}

class Bloc extends React.Component {
   render() {
      return (
		<div>
			
		</div>
      );
   }
}

export default App;