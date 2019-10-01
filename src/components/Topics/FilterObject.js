import React, { Component } from "react";

class FilterObject extends React.Component {
    constructor() {
        super();

        this.state = {
            players: [
                {name: "Mount", position: "midfielder", club: "Chelsea FC", nationality: "England"}, 
                {name: "Salah", club: "Liverpool FC", nationality: "Egypt", ECL: "Champion"}, 
                {name: "Pogba", club: "Manchester United", nationality: "France", WC: "Champion"}
            ],
            userInput: "",
            filteredPlayers: []
        }
    }

    handleChange(val){
        this.setState({ userInput: val });
    }

    filterPlayers(prop) {
        let players = this.state.players;
        let filteredPlayers = [];

        for(let i=0; i<players.length; i++){
            if(players[i].hasOwnProperty(prop) ) {
                filteredPlayers.push(players[i]);
            }
        }
        this.setState({ filteredPlayers: filteredPlayers });
    }



    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.players, null, 10)}</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filterPlayers(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredPlayers, null, 10)}</span>
            </div>
        )
    }
}

export default FilterObject;