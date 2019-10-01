import React, {Component} from "react";

class FilterString extends React.Component {
    
    constructor() {
        super();

        this.state = {
            names: ["Jon", "Sansa", "Arya", "Rob", "Ned", "Theon", "Tyrion"],
            userInput: "",
            filteredNames: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }

    filteredNames(userInput) {
        let names = this.state.names;
        let filteredNames = [];

        for (let i=0; i<names.length; i++){
            if(names[i].includes(userInput)) {
                filteredNames.push(names[i]);
            }
        }
        this.setState({filteredNames: filteredNames});
    }
    
    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.names)}</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => this.filteredNames(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredNames)}</span>
            </div>
        )
    }
}

export default FilterString;