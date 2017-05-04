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
					<li><a href="#">ECRIRE QUELQUE CHOSE</a></li>
				</ul>
			</div>			
		</div>
      );
   }
}

class Feed extends React.Component{
	render() {
		return (
			<div className = "feed">
				<Article/>
				<Article/>
				<Sondage/>
				<Evenement/>
				<Sondage/>
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
			<h2>Titre de l'article</h2>
			<p>Description de l'article. L'utilisateur devra cliquer pour voir la suite.</p>
		</div>
		
      );
   }
}

class Evenement extends React.Component {
	render() {
		return (
			<div className = "evenement">
				<h2>Nom de l'évènement</h2>
				<h4>Lieu de l'évènement</h4>
				<h5>Nom de l'organisateur</h5>
				<h5>15/05/2017 à 20:30</h5>
			</div>
		);
	}
}

class Sondage extends React.Component {
	render() {
		return (
			<div className = "sondage">
				<h2> Question du sondage </h2>
				<p id = "button_sondage"> Réponse1 </p>
				<p id = "button_sondage"> Réponse2 </p>
				<h6> XXXX personnes ont répondu !</h6>
				<h4> <a href="#"> Voir le sondage </a></h4>
			</div>
		);
	}
}

export default App;