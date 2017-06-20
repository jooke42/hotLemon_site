/**
 * Created by jooke on 19/06/17.
 */
import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class ConnexionStore extends EventEmitter {
    constructor() {
        super();
        this.key = localStorage.getItem("@hotlemon:key");
    }

    getKey(){
        return this.key;
    }

    isConnected(){
        return this.key !== null;
    }
    handleActions(action) {
        switch(action.type) {
            case "RECEIVE_KEY_AUTH": {
                console.log("key  has been received !");
                console.log(action.key);
                localStorage.setItem("@hotlemon:key",action.key);
                this.key = action.key;
                this.emit("change");
                break;
            }
            case "DISCONNECTED":
                localStorage.removeItem("@hotlemon:key");
                this.key = null;
                console.log("succesfully deconnected");
                this.emit("change");
                break;
        }
    }

}

const connexionStore = new ConnexionStore;
dispatcher.register(connexionStore.handleActions.bind(connexionStore));

export default connexionStore;
