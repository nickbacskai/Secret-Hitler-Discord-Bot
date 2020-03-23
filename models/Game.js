import { ROLES, POLICIES } from '../utils/constants';
import shuffle from '../utils/shuffle';

import Player from '../models/Player';

class Game {
    constructor(){
        this.deck = POLICIES;
        this.discard = [];
        this.players = [];
        this.president = null;
        this.chancellor = null;
        this.draw = [];
    }

    /*
    Takes in a list of userIds
    Shuffles the players around to determine sequence of Presidents
    */
    setPlayers(users) {
        if(users.length < 5 || users.length > 10){
            throw "Invalid number of players!";
        }

        shuffle(users);

        for(let i=0; i < users.length; i ++){
            this.players.push(new Player(users[i], ROLES[users.length.toString()][i]))
        }

        console.log(this.players);

    }

    


    
}

export default Game;