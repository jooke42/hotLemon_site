/**
 * Created by jooke on 19/06/17.
 */
import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class ConnexionStore extends EventEmitter {
    constructor() {
        super();
    }

    handleActions(action) {
        switch(action.type) {
            case "RECEIVE_KEY_AUTH": {
                console.log("article list has been received !");
                console.log(action.key);
                localStorage.setItem("@hotlemon:key",action.key);
                this.emit("change");
                break;
            }
            case "DISCONNECTED":
                localStorage.removeItem("@hotlemon:key");
                this.emit("change");
                break;
        }
    }

}

const connexionStore = new ConnexionStore;
dispatcher.register(connexionStore.handleActions.bind(connexionStore));

export default connexionStore;
