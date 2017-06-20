/**
 * Created by jooke on 19/06/17.
 */
import React from "react";
import * as ConnexionAction from "../actions/ConnexionAction";
import ConnexionStore from "../stores/ConnexionStore";

export default class Connexion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '',password:''};
        this.getKey = this.getKey.bind(this);
        this.state = {
            key: ConnexionStore.getKey()
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleDisconnection= this.handleDisconnection.bind(this);

    }


    componentWillMount() {
        ConnexionStore.on("change", this.getKey);
    }

    componentWillUnmount() {
        ConnexionStore.removeListener("change", this.getKey);
    }

    getKey() {
        this.setState({
            key: ConnexionStore.getKey(),
        });
    }



    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        ConnexionAction.connexion(this.state.username,this.state.password);
    }

    handleDisconnection(event) {
        console.log("disconnected");
        ConnexionAction.logout();
        event.preventDefault();

    }

    render() {

        if(ConnexionStore.isConnected()){
            return <div id="connexion_div"> <h1>connected</h1><button onClick={this.handleDisconnection} >logout</button></div>
        }else{
            return (
                <div id="connexion_div">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            username:
                            <input name="username" type="username" value={this.state.username} onChange={this.handleInputChange} />
                        </label>
                        <label>
                            password:
                            <input name="password" type="password"  value={this.state.password} onChange={this.handleInputChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>

                </div>
            );
        }

    }
}
