import React from 'react';

var SideBar = require('react-burger-menu').slide;

class App extends React.Component {
   render() {
      return (
		<div id = "grad">	
			<NavBar/>
			<Feed/>
		</div>
      );
   }
}

class NavBar extends React.Component {
   render() {
      return (
		<div className = "navbar">
		<div id ="logo">
			<img src="img\HotLemon_Logo.png"/>
		</div>
			<div id = "buttons">
				<ul>
					<li><a href="#">TENDANCES</a></li>
					<li><a href="#">FAVORIS</a></li>
					<li><a href="#">DERNIERES NEWS</a></li>
					<li><a href="#">EVENTS PAS LOIN</a></li>
					<li><a href="#">ANNONCES LOCALES</a></li>
					<li><a href="#">SONDAGES</a></li>
					<li><a href="#">GALERIE PHOTO</a></li>
					<li><a href="#">COMPTE</a></li>
				</ul>
			</div>			
		</div>
      );
   }
}


/*
class SideNav extends React.Component {
   render() {
      return (
		<SideBar width={200} noOverlay>	
			<img src = "\img\userpic.png"></img>
			<a id="home" className="menu-item" href="#">Accueil</a>
			<a id="profile" className="menu-item" href="#">Votre profil</a>
			<a id="settings" className="menu-item" href="#">Vos options</a>
			<a id="faq" className="menu-item" href="#">FAQ</a>
			<a id="contact" className="menu-item" href="#">Nous contacter</a>			
		</SideBar>
      );
   }
}
*/

class Feed extends React.Component{
	render() {
		return (
			<div className = "feed">
				<Article/>
				<Article/>
				<Evenement/>
				<Evenement/>
				<Article/>
				<Article/>	
				<Evenement/>
				<Article/>
				<Article/>					
			</div>
		);
	}
}

class Article extends React.Component {
   render() {
      return (
		<div className = "article">
			<h2>Title sample</h2>
			<p>C’est dans un écosystème appartenant au Mont Kaputar situé dans la région du New South Wales en Australie que vient d’être tout récemment découvert une espèce tout à fait surprenante de limace. Un invertébré de couleur rose et de surcroit… fluorescent! Michael Murphy, un ranger du National Parks and Wildlife Service exerçant ses fonctions dans la région de la Nouvelle-Galles du Sud en Australie, vient d’être l’un des premiers témoins de la vie d’une forme tout à fait particulière de limace encore jamais observée dans le passé. C’est sur les hauteurs du Mont Kaputar, là où la forêt alpine semble abriter des espèces encore inconnues de tous, que l’homme vient en effet de faire la découverte d’une limace géante entièrement rose et fluorescente.</p>
		</div>
      );
   }
}

class Evenement extends React.Component {
	render() {
		return (
			<div className = "evenement">
				<h2>Moules frites à volonté</h2>
				<h4>Vaucresson City Center</h4>
				<h5>15/05/2017 à 20:30</h5>
				
				<p> Benji le Ravioli Dupont-Aignant vous invite à déguster des moules frites à un délicieux buffet concocté par la maman de Stephen. Des activité annexes sont prévues, telles que strip-tease et cracheurs de flammes.</p>
			</div>
		);
	}
}

export default App;