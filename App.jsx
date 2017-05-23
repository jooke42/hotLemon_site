
{/* Le plus gros reste à faire : 

- la localisation de l'utilisateur en priorité !
- les requêtes avec le serveur
- les fonctions permettant de faire interagir les blocs en mode "single-page app"
- le système de tags pour filtrer les news par catégories + 
bandeau page d'accueil
- peut-être une barre de recherche ?
- la page du compte utilisateur 
- les annonces si Estelle et Flavien ont le temps de le faire sur Android 
- un lien vers le PlayStore pour télécharger l'app 
- compatibilité avec d'autres navigateurs

*/ }


import React from 'react';

var SideBar = require('react-burger-menu').slide;

{/* class App extends React.Component {
   render() {
      return (
		<div id = "grad">	
			<NavBar/>
			<Feed/> 
			
			
			<DisplayArticle/>
			<CreateArticle/>
			<CreateEvent/>
			<CreateSondage/>
			
			
			
		</div>
      );
   }
}
*/}

class App extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {
			title: "Title sample",
			author: "Author name",
			body: "Body sample",
			published_date: "le XX/XX/XXXX",
			finished_date: "XX/XX/XXXX",
			vote_for: "Like",
			vote_against: "Dislike",
			place: "Default location"
		}
	}
	
	render() {
		return(
			<div id = "grad">
				<NavBar/>
				<Feed/>
				<Article 
					titleProp = {this.state.title} 
					authorProp = {this.state.author} 
					bodyProp = {this.state.body} 
					published_dateProp = {this.state.published_date}
					finished_dateProp = {this.state.finished_date} 
					vote_forProp = {this.state.vote_for} 
					vote_againstProp = {this.state.vote_against}
				/>
				<Evenement
					titleProp = {this.state.title} 
					authorProp = {this.state.author} 
					bodyProp = {this.state.body} 
					published_dateProp = {this.state.published_date}
					finished_dateProp = {this.state.finished_date} 
					vote_forProp = {this.state.vote_for} 
					vote_againstProp = {this.state.vote_against}
					placeProp = {this.state.place}
				/>
				
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
					<li><a href="#">COMPTE</a></li>
					<li><a href="#">ECRIRE QUELQUE CHOSE</a></li>
				</ul>
			</div>			
		</div>
      );
   }
}



/* Le feed est le container des news */
class Feed extends React.Component{
	render() {
		return (			
			<div className = "feed">
			<h2> Titre de l'onglet actuel </h2>
			<div id = "tags"></div>
							
			</div>
		);
	}
}

/* Un bloc article cliquable */
class Article extends React.Component {
   render() {
      return (
		<div className = "article">
			<h2>{this.props.titleProp}</h2>
			<h6>{this.props.published_dateProp}</h6>
			<p>{this.props.bodyProp}</p>		
			<div id = "footerarticle">
				<h5> {this.props.authorProp} {this.props.vote_forProp} {this.props.vote_againstProp}</h5>
			</div>
		</div>		
      );
   }
}

/* Un bloc evenement cliquable */
class Evenement extends React.Component {
	render() {
		return (
			<div className = "evenement">
				<h2>{this.props.titleProp}</h2>
				<h4>{this.props.placeProp}</h4>
				<h5>{this.props.authorProp}</h5>
				<h5>{this.props.finished_dateProp}</h5>
				<div id = "footerarticle">
				<h5> {this.props.authorProp} {this.props.vote_forProp} {this.props.vote_againstProp}</h5>
			</div>
			</div>
		);
	}
}

/* Un bloc sondage cliquable */
class Sondage extends React.Component {
	render() {
		return (
			<div className = "sondage">
				<h2> Question du sondage </h2>
				<p id = "button_sondage"> Réponse1 </p>
				<p id = "button_sondage"> Réponse2 </p>
				<h6> XXXX personnes ont répondu !</h6>
				<h4 href="#"> Voir plus de détails </h4>
			</div>
		);
	}
}

/* Blocs pour écrir un article, un event ou un sondage, à faire apparaitre 
quand l'utilisateur clique sur "ecrire quelque chose */
class CreateArticle extends React.Component {
	render() {
		return (
			<div className = "createarticle">
				<div id="expandicon"><img src="img\expand_icon.png" height="15" width="15"/></div>
				<div id = "headercreatearticle"><h2> Nouvel article </h2>	</div>
				<textarea rows="2" cols="50" placeholder="Titre"></textarea>
				<textarea rows="2" cols="50" placeholder="Localisation"></textarea>				
				<button onclick="getLocation()">Carte</button>
				<div id="mapholder"></div>
				<div id = "buttoncreatearticle">
					<h3> Choisir une image... </h3>
				</div>
				<textarea rows="3" cols="50" placeholder="Description de l'article (140 caractères max)"></textarea>
				<textarea rows="6" cols="50" placeholder="Votre texte ici"></textarea>
				<div id = "buttoncreatearticle">
					<h3> Poster </h3>
				</div>
			</div>
		);
	}
}

class CreateEvent extends React.Component {
	render() {
		return (
			<div className = "createevent">
				<img src="img\expand_icon.png" height="15" width="15"/>
				<h2> Nouvel event </h2>	
				<textarea rows="2" cols="50" placeholder="Titre"></textarea>
				<textarea rows="2" cols="50" placeholder="Localisation"></textarea>
						
				<button onclick="getLocation()">Carte</button>
				<p> </p>	
				<div id="mapholder"></div>
				<textarea rows="6" cols="50" placeholder="Description de l'event"></textarea>
				<button>Choisir une image...</button>
				<p> </p>	
				<div id = "sendevent">
					<h3> Poster </h3>
				</div>
			</div>
		);
	}
}

class CreateSondage extends React.Component {
	render() {
		return (
			<div className = "createsondage">
				<img src="img\expand_icon.png" height="15" width="15"/>
				<h2> Nouveau sondage </h2>	
				<textarea rows="2" cols="50" placeholder="Question"></textarea>
				<textarea rows="2" cols="50" placeholder="Localisation"></textarea>
						
				<button onclick="getLocation()">Carte</button>
				<p> </p>	
				<div id="mapholder"></div>
				<textarea rows="6" cols="50" placeholder="Choisir si on veut créer des sondages uniquement à réponses OUI NON ou des sondages plus complexes"></textarea>
				<button>Choisir une image...</button>
				<p> </p>	
				<div id = "sendevent">
					<h3> Poster </h3>
				</div>
			</div>
		);
	}
}

/* Afficher les articles / sondages / events */

class DisplayArticle extends React.Component {
	render() {
		return (
			<div className = "displayarticle">
				<img src="img\expand_icon.png" height="15" width="15"/>
				<h2> Title sample </h2>
				<img src="img\chat2.jpg" />
				<div id = "headerdisplayarticle"> 
					<p> à 7 km </p>
					<h4> Le chat est activement recherché </h4>
				</div>
				<p> On connaissait déjà ces animaux pour leur fourberie.
				Mais on était loin de se douter que leurs pouvoirs
				prenaient autant d'ampleur.
				Un humain du nom de John Doe aurait vu hier soir, un 
				chat roux volant, dans une rue du village, paisible
				en temps normal.
				Une très mauvaise nouvelle pour la République Libre des
				Escargots de Papouasie, qui avait prévu d'envoyer ses 
				coquilles vides en vacances au Texas en janvier 2038.
				Le général Croquette a annoncé ce matin qu'il confierait
				l'enquête à la milice des Chats Sauvages.</p>
				<a href="#"> Commenter </a> 
				<a href="#"> Like </a> <a href="#"> Dislike </a> 
			</div>
		);
	}
}

class DisplayEvent extends React.Component {
	render() {
		return (
			<div className = "displayevent">
				
			</div>
		);
	}
}

class DisplaySondage extends React.Component {
	render() {
		return (
			<div className = "displaysondage">
				
			</div>
		);
	}
}

export default App;