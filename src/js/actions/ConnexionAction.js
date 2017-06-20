import axios from "axios";
import dispatcher from "../dispatcher";

export function connexion(username,password){
    axios.post("http://82.232.20.224/rest-auth/login/",{'username':username,'password':password})
        .then(response =>{
            console.log(response.data.key);
            dispatcher.dispatch({type: "RECEIVE_KEY_AUTH", key: response.data.key}
            );

        }).catch(error => {
        console.log(error);
    });


}

export function logout(){
    const authstr = "Token "+ localStorage.getItem("@hotlemon:key");

    axios.post("http://82.232.20.224/rest-auth/logout/",{ 'headers': { 'Authorization': authstr }})
        .then(response =>{
            dispatcher.dispatch({type: "DISCONNECTED"}
            );

        }).catch(error => {
        console.log(error);
    });



}